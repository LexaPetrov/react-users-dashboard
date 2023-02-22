# react-users-dashboard

# Administration panel / dashboard for user management.
Use only React and Redux (don’t use Next.js or Gatsby)
API user list:
https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data
After sending the task, please also provide the solution on https://www.netlify.com/
or another service.
The visual side of the application is optional, you can use, for example, Material Ui,
Bootstrap, etc.
The API in the task is based on the JSONPlaceholder. In the task, please also update
the data locally when adding (creating a new id etc.), editing and deleting a given user.
https://jsonplaceholder.typicode.com/
Please don’t use packages such as 'react-admin' or other

Stage 1
1. Showing all users in the table. The table should contain:
● Id
● Name
● Username
● City
● Email.

Stage 2
Possibility to add and edit an user.
The form should contain the following fields:

● Name - required
● Email - required

1. All fields can be edited.
2. Fields must be properly validated before submitting the form.
3. A request is sent to update the user.
4. Redirection to the home page with updated data (this is a test api, please update
the data locally: create a new id etc.)
Cancel button doesn’t save the form and redirects to the home page

Stage 3
1. Possibility to remove the user after pressing the "delete" button in the table.
2. Showing a popup confirming whether you really want to delete the user.
3. A request is sent to delete the user. (this is a test api, please also update the data
locally)
4. After deleting the table with data should be updated.
If all users are deleted, an appropriate message is displayed in the table.

Stage 4 - additional and optional
Possibility to sort users by the “username” column.
Users should be sorted A-Z or Z-A.
