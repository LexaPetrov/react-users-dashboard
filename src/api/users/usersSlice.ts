import { createAsyncThunk, createDraftSafeSelector, createEntityAdapter, createSlice, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';
import { USERS_ADD_URL, USERS_DELETE_URL, USERS_MOCK_URL, USERS_SAVE_URL, USERS_URL } from './apiUrls';
import { User } from './entities';

type State = {
  users: {
    list: User[];
    loading: boolean;
  };
};

const selectSelf = (state: State) => state.users;

export const getUsers = createAsyncThunk(USERS_URL, async (_, { rejectWithValue }) => {
  if (!localStorage.getItem('users')) {
    try {
      const { data: users } = await axios.get(USERS_MOCK_URL);
      return users;
    } catch (err) {
      return rejectWithValue('Failed to get users list');
    }
  } else return JSON.parse(localStorage.getItem('users') as string);
});

export const getUserById = createAsyncThunk(USERS_URL + '/:id', async (id: number, { rejectWithValue }) => {
  try {
    await axios.get<User[]>(USERS_MOCK_URL /*USERS_URL + id*/, {
      params: {
        id,
      },
    });
    return JSON.parse(localStorage.getItem('users') as string).filter((item: User) => item.id === id)[0];
  } catch (err) {
    return rejectWithValue('Failed to get users list');
  }
});

export const updateUser = createAsyncThunk(USERS_SAVE_URL, async (user: User, { dispatch, rejectWithValue }) => {
  try {
    let data = user;
    if (user.id <= 10) {
      //404 if id > 10 (json placeholder behavior)
      const res = await axios.put(`${USERS_MOCK_URL}/${user.id}` /*USERS_SAVE_URL*/, {
        ...user,
      });
      data = res.data;
    }
    dispatch(userUpdate({ ...data }));
  } catch (err) {
    return rejectWithValue('Failed to update user');
  }
});

export const addUser = createAsyncThunk(
  USERS_ADD_URL,
  async (req: { name: string; email: string }, { dispatch, rejectWithValue }) => {
    try {
      const { name, email } = req;
      const { data } = await axios.post(USERS_MOCK_URL /*USERS_ADD_URL*/, {
        name,
        email,
      });
      dispatch(userAdd({ name: data.name, email: data.email }));
    } catch (err) {
      return rejectWithValue('Failed to add user');
    }
  },
);

export const deleteUser = createAsyncThunk(USERS_DELETE_URL, async (id: number, { dispatch, rejectWithValue }) => {
  try {
    if (id <= 10) {
      //404 if id > 10 (json placeholder behavior)
      await axios.delete(`${USERS_MOCK_URL}/${id}` /*USERS_DELETE_URL + id*/);
    }
    dispatch(userDelete({ id }));
  } catch (err) {
    return rejectWithValue('Failed to delete user');
  }
});

export const usersAdapter = createEntityAdapter();

const initialState: State['users'] = usersAdapter.getInitialState({ list: [], loading: false });

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdd(state, action) {
      const lastId =
        (JSON.parse(localStorage.getItem('users') as string) as User[])
          .sort((a, b) => a.id - b.id)
          .pop()?.id || 10; //for json placeholder behavior
      const nextId = lastId <= 10 ? 11 : lastId + 1; //for json placeholder behavior
      state.list.push({ id: nextId, ...action.payload });
      localStorage.setItem('users', JSON.stringify(state.list));
    },
    userUpdate(state, action) {
      const { id } = action.payload;
      const users = [...state.list];
      const existingUserIdx = users.findIndex((user) => user.id == id);
      if (existingUserIdx > -1) {
        state.list[existingUserIdx] = { ...action.payload };
        localStorage.setItem('users', JSON.stringify(state.list));
      }
      state.loading = false;
    },
    userDelete(state, action) {
      const { id } = action.payload;
      const existingUser = state.list.find((user) => user.id == id);
      if (existingUser) {
        state.list = state.list.filter((user) => user.id != id);
        localStorage.setItem('users', JSON.stringify(state.list));
      }
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        const users = [...action.payload];
        state.list = [...users];
        localStorage.setItem('users', JSON.stringify(users));
      })
      .addMatcher(
        isAnyOf(getUsers.pending, updateUser.pending, getUserById.pending, deleteUser.pending, addUser.pending),
        (state) => {
          state.loading = true;
        },
      )
      .addMatcher(
        isAnyOf(getUsers.rejected, updateUser.rejected, getUserById.rejected, deleteUser.rejected, addUser.rejected),
        (state) => {
          state.loading = false;
        },
      )
      .addMatcher(
        isAnyOf(updateUser.fulfilled, getUserById.fulfilled, deleteUser.fulfilled, addUser.fulfilled),
        (state) => {
          state.loading = false;
        },
      );
  },
});

export const usersListSelector = createDraftSafeSelector(selectSelf, (users) => ({
  list: users.list,
  loading: users.loading,
}));

export const loadingSelector = createDraftSafeSelector(selectSelf, (users) => users.loading);

export const { userAdd, userUpdate, userDelete } = usersSlice.actions;

export default usersSlice.reducer;
