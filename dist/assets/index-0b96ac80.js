var ze=Object.defineProperty,We=Object.defineProperties;var _e=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var ve=(t,a,l)=>a in t?ze(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,d=(t,a)=>{for(var l in a||(a={}))je.call(a,l)&&ve(t,l,a[l]);if(Se)for(var l of Se(a))Be.call(a,l)&&ve(t,l,a[l]);return t},p=(t,a)=>We(t,_e(a));var De=(t,a)=>()=>(a||t((a={exports:{}}).exports,a),a.exports);var C=(t,a,l)=>new Promise((i,n)=>{var r=m=>{try{o(l.next(m))}catch(h){n(h)}},e=m=>{try{o(l.throw(m))}catch(h){n(h)}},o=m=>m.done?i(m.value):Promise.resolve(m.value).then(r,e);o((l=l.apply(t,a)).next())});import{r as c,u as Ne,j as u,F as k,a as s,T,B as v,c as L,b as A,d as $e,e as qe,f as Ce,i as F,g as P,C as Fe,M as ke,S as J,P as He,h as Ve,k as Je,l as Ge,m as H,n as V,o as Ye,p as Ze,q as Ke,v as Xe,s as Qe,t as et,w as tt,x as at,y as Ae,z as st,G as g,A as f,D as G,E as lt,H as Re,I as nt,J as it,K as rt,L as ot,N as dt,Q as ct,O as ut,R as mt,U as ht,V as pt,W as gt,X as ft,Y as bt}from"./vendor-7a9419d1.js";var Xt=De(R=>{(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const e of r.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&i(e)}).observe(document,{childList:!0,subtree:!0});function l(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=l(n);fetch(n.href,r)}})();const Ue="/users",yt="/",xt=c.memo(()=>{const t=Ne();return u(k,{children:[s(T,{variant:"h2",children:"Main page"}),s(v,{variant:"outlined",sx:{my:1},onClick:()=>t(Ue),children:"go to users dashboard"})]})}),E="https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data",Ie="users/",St="users/add",vt="users/delete/",wt="users/save/",Le=t=>t.users,_=L(Ie,(l,i)=>C(R,[l,i],function*(t,{rejectWithValue:a}){if(localStorage.getItem("users"))return JSON.parse(localStorage.getItem("users"));try{const{data:n}=yield A.get(E);return n}catch(n){return a("Failed to get users list")}})),j=L(Ie+"/:id",(l,i)=>C(R,[l,i],function*(t,{rejectWithValue:a}){try{return yield A.get(E,{params:{id:t}}),JSON.parse(localStorage.getItem("users")).filter(n=>n.id===t)[0]}catch(n){return a("Failed to get users list")}})),B=L(wt,(i,n)=>C(R,[i,n],function*(t,{dispatch:a,rejectWithValue:l}){try{let r=t;t.id<=10&&(r=(yield A.put(`${E}/${t.id}`,d({},t))).data),a(At(d({},r)))}catch(r){return l("Failed to update user")}})),D=L(St,(i,n)=>C(R,[i,n],function*(t,{dispatch:a,rejectWithValue:l}){try{const{name:r,email:e}=t,{data:o}=yield A.post(E,{name:r,email:e});a(kt({name:o.name,email:o.email}))}catch(r){return l("Failed to add user")}})),N=L(vt,(i,n)=>C(R,[i,n],function*(t,{dispatch:a,rejectWithValue:l}){try{t<=10&&(yield A.delete(`${E}/${t}`)),a(Rt({id:t}))}catch(r){return l("Failed to delete user")}})),Tt=$e(),Pt=Tt.getInitialState({list:[],loading:!1}),Ee=qe({name:"users",initialState:Pt,reducers:{userAdd(t,a){var n;const l=((n=JSON.parse(localStorage.getItem("users")).sort((r,e)=>r.id-e.id).pop())==null?void 0:n.id)||10,i=l<=10?11:l+1;t.list.push(d({id:i},a.payload)),localStorage.setItem("users",JSON.stringify(t.list))},userUpdate(t,a){const{id:l}=a.payload,n=[...t.list].findIndex(r=>r.id==l);n>-1&&(t.list[n]=d({},a.payload),localStorage.setItem("users",JSON.stringify(t.list))),t.loading=!1},userDelete(t,a){const{id:l}=a.payload;t.list.find(n=>n.id==l)&&(t.list=t.list.filter(n=>n.id!=l),localStorage.setItem("users",JSON.stringify(t.list))),t.loading=!1}},extraReducers:t=>{t.addCase(_.fulfilled,(a,l)=>{a.loading=!1;const i=[...l.payload];a.list=[...i],localStorage.setItem("users",JSON.stringify(i))}).addMatcher(F(_.pending,B.pending,j.pending,N.pending,D.pending),a=>{a.loading=!0}).addMatcher(F(_.rejected,B.rejected,j.rejected,N.rejected,D.rejected),a=>{a.loading=!1}).addMatcher(F(B.fulfilled,j.fulfilled,N.fulfilled,D.fulfilled),a=>{a.loading=!1})}}),Ct=Ce(Le,t=>({list:t.list,loading:t.loading})),Me=Ce(Le,t=>t.loading),{userAdd:kt,userUpdate:At,userDelete:Rt}=Ee.actions,Ut=Ee.reducer;c.memo(()=>s(P,{sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,right:0,top:0,bottom:0,margin:"auto",backdropFilter:"blur(5px)"},children:s(Fe,{color:"inherit"})}));const It={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,maxWidth:"100%",maxHeight:"100%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,overflowY:"auto"},Lt=c.memo(({open:t,handleClose:a,title:l,text:i,confirmAction:n,confirmButtonText:r="Yes",cancelButtonText:e="Cancel"})=>s(ke,{open:t,sx:{display:"flex",alignItems:"center",justifyContent:"center"},onClose:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:u(P,{sx:It,children:[s(T,{id:"modal-modal-title",variant:"h6",component:"h2",children:l}),s(T,{id:"modal-modal-description",sx:{my:2},children:i}),u(J,{direction:"row",spacing:2,children:[s(v,{variant:"contained",onClick:n,children:r}),s(v,{variant:"outlined",onClick:a,children:e})]})]})})),Et={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,maxWidth:"100%",maxHeight:"100%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,overflowY:"auto"},Oe=c.memo(({open:t,handleClose:a,title:l,confirmAction:i,confirmButtonText:n="Save",cancelButtonText:r="Cancel",children:e})=>s(ke,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},open:t,onClose:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:u(P,{sx:Et,children:[s(T,{id:"modal-modal-title",variant:"h6",component:"h2",children:l}),e,u(J,{direction:"row",spacing:2,children:[s(v,{variant:"contained",onClick:i,children:n}),s(v,{variant:"outlined",onClick:a,children:r})]})]})}));function we(t,a,l){let i=t[l],n=a[l];return typeof i=="string"&&(i=i.toLowerCase()),typeof n=="string"&&(n=n.toLowerCase()),n<i?-1:n>i?1:0}function Mt(t,a){return t==="desc"?(l,i)=>we(l,i,a):(l,i)=>-we(l,i,a)}function Ot(t,a){const l=t.map((i,n)=>[i,n]);return l.sort((i,n)=>{const r=a(i[0],n[0]);return r!==0?r:i[1]-n[1]}),l.map(i=>i[0])}function zt(t){const{order:a,orderBy:l,onRequestSort:i,headCells:n}=t,r=e=>o=>{i(o,e)};return s(Ze,{children:s(H,{children:n.map(e=>s(V,{align:"left",padding:e.disablePadding?"none":"normal",sortDirection:l===e.id?a:!1,children:u(Ke,{active:l===e.id,direction:l===e.id?a:"asc",onClick:r(e.id),children:[e.label,l===e.id?s(P,{component:"span",sx:Xe,children:a==="desc"?"sorted descending":"sorted ascending"}):null]})},String(e.id)))})})}const Wt=({title:t,AddButton:a})=>s(Qe,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:u(P,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"},children:[s(T,{variant:"h6",id:"tableTitle",component:"div",children:t}),a]})}),_t=({title:t,headCells:a,orderByColumn:l,rows:i,AddButton:n})=>{const[r,e]=c.useState("asc"),[o,m]=c.useState(l),[h,y]=c.useState(0),[b,w]=c.useState(5),M=(S,x)=>{e(o===x&&r==="asc"?"desc":"asc"),m(x)},O=(S,x)=>{y(x)},z=S=>{w(parseInt(S.target.value,10)),y(0)},U=h>0?Math.max(0,(1+h)*b-i.length):0;return s(P,{sx:{width:"100%"},children:u(He,{sx:{width:"100%",mb:2},children:[s(Wt,{title:t,AddButton:n}),u(Ve,{children:[u(Je,{"aria-labelledby":"tableTitle",children:[s(zt,{headCells:a,order:r,orderBy:o,onRequestSort:M}),u(Ge,{children:[Ot(i,Mt(r,o)).slice(h*b,h*b+b).map((S,x)=>s(H,{hover:!0,tabIndex:-1,children:Object.keys(S).map((I,W)=>s(V,{component:"th",scope:"row",children:S[I]},`table-row-${x}-cell-${W}`))},"table-row-"+x)),U>0&&s(H,{style:{height:53*U},children:s(V,{colSpan:6})})]})]}),!i.length&&s(P,{sx:{textAlign:"center",mt:2},children:s(T,{variant:"subtitle2",children:"nothing to show"})})]}),s(Ye,{rowsPerPageOptions:[5,10,25],component:"div",count:i.length,rowsPerPage:b,page:h,onPageChange:O,onRowsPerPageChange:z})]})})},jt=et(tt)(({theme:t})=>({width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`},"& + .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:t.palette.mode==="dark"?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`}},"& .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#8796A5":"#aab4be",borderRadius:20/2}})),$=()=>at(),Te={name:"",email:""},Bt=c.memo(({loading:t=!1})=>{var h,y;const a=$(),{register:l,reset:i,handleSubmit:n,formState:{errors:r}}=Ae({defaultValues:Te}),[e,o]=c.useState(!1),m=n(b=>{a(D(d({},b))),o(!1)});return c.useEffect(()=>{e||i(Te)},[e]),u(k,{children:[s(v,{disabled:t,onClick:()=>o(!0),startIcon:s(st,{}),children:"add user"}),s(Oe,{open:e,handleClose:()=>o(!1),title:"Add new user",confirmAction:m,children:u(g,{container:!0,maxWidth:"sm",sx:{my:2},rowSpacing:2,columnSpacing:{xs:1,sm:1,md:1},children:[s(g,{item:!0,xs:12,sm:12,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"name",label:"name",color:"primary",variant:"outlined"},l("name",{required:"This field is required"})),{error:!!(r!=null&&r.name),helperText:(h=r==null?void 0:r.name)==null?void 0:h.message}))}),s(g,{item:!0,xs:12,sm:12,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"email",label:"email",color:"primary",variant:"outlined"},l("email",{required:"This field is required",pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Please enter a valid email"}})),{error:!!(r!=null&&r.email),helperText:(y=r==null?void 0:r.email)==null?void 0:y.message}))})]})})]})}),Dt=c.memo(({id:t})=>{const a=G(Me),l=$(),[i,n]=c.useState(!1),r=c.useCallback(()=>{l(N(t)),n(!1)},[t]);return u(k,{children:[s(v,{disabled:a,color:"error",onClick:()=>n(!0),children:"delete"}),s(Lt,{open:i,handleClose:()=>n(!1),title:"Delete user",text:"Are you sure to delete user with id = "+t+"?",confirmAction:r})]})}),Pe={name:"",username:"",email:"",address:{street:"",suite:"",city:"",zipcode:"",geo:{lat:"",lng:""}},phone:"",website:"",company:{name:"",catchPhrase:"",bs:""}},Nt=c.memo(({id:t})=>{var y,b,w,M,O,z,U,S,x,I,W,Y,Z,K,X,Q,ee,te,ae,se,le,ne,ie,re,oe,de,ce,ue,me,he,pe,ge,fe,be,ye,xe;const a=G(Me),l=$(),{register:i,handleSubmit:n,reset:r,formState:{errors:e}}=Ae({defaultValues:Pe}),[o,m]=c.useState(!1),h=n(q=>{l(B(d({},q))),m(!1)});return c.useEffect(()=>{o?l(j(t)).unwrap().then(q=>r(q)):r(Pe)},[o,t]),u(k,{children:[s(v,{sx:{minWidth:"auto"},disabled:a,color:"warning",variant:"outlined",onClick:()=>m(!0),children:"edit"}),s(Oe,{open:o,handleClose:()=>m(!1),title:"Edit user",confirmAction:h,children:s(lt,p(d({in:!a,style:{transformOrigin:"0 0 0"}},a?{}:{timeout:300}),{children:u(g,{container:!0,maxWidth:"md",sx:{my:2},rowSpacing:2,columnSpacing:{xs:1,sm:1,md:1},children:[s(g,{item:!0,xs:12,sm:6,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"name",label:"name",color:"primary",variant:"outlined"},i("name",{required:"This field is required",maxLength:40})),{error:!!(e!=null&&e.name),helperText:(y=e==null?void 0:e.name)==null?void 0:y.message}))}),s(g,{item:!0,xs:12,sm:6,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"email",label:"email",color:"primary",variant:"outlined"},i("email",{required:"This field is required",pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Please enter a valid email"}})),{error:!!(e!=null&&e.email),helperText:(b=e==null?void 0:e.email)==null?void 0:b.message}))}),s(g,{item:!0,xs:12,sm:6,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"username",label:"username",color:"primary",variant:"outlined"},i("username",{maxLength:20})),{error:!!(e!=null&&e.username),helperText:(w=e==null?void 0:e.username)==null?void 0:w.message}))}),s(g,{item:!0,xs:12,sm:6,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"phone",label:"phone",color:"primary",variant:"outlined"},i("phone",{pattern:{value:/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,message:"Please enter a valid phone"}})),{error:!!(e!=null&&e.phone),helperText:(M=e==null?void 0:e.phone)==null?void 0:M.message}))}),s(g,{item:!0,xs:12,sm:12,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"website",label:"website",color:"primary",variant:"outlined"},i("website",{maxLength:20})),{error:!!(e!=null&&e.website),helperText:(O=e==null?void 0:e.website)==null?void 0:O.message}))}),s(g,{item:!0,xs:12,sm:6,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"city",label:"city",color:"primary",variant:"outlined"},i("address.city",{maxLength:20})),{error:!!((z=e==null?void 0:e.address)!=null&&z.city),helperText:(S=(U=e==null?void 0:e.address)==null?void 0:U.city)==null?void 0:S.message}))}),s(g,{item:!0,xs:12,sm:6,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"zipcode",label:"zipcode",color:"primary",variant:"outlined"},i("address.zipcode",{maxLength:15})),{error:!!((x=e==null?void 0:e.address)!=null&&x.zipcode),helperText:(W=(I=e==null?void 0:e.address)==null?void 0:I.zipcode)==null?void 0:W.message}))}),s(g,{item:!0,xs:12,sm:6,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"street",label:"street",color:"primary",variant:"outlined"},i("address.street",{maxLength:20})),{error:!!((Y=e==null?void 0:e.address)!=null&&Y.street),helperText:(K=(Z=e==null?void 0:e.address)==null?void 0:Z.street)==null?void 0:K.message}))}),s(g,{item:!0,xs:12,sm:6,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"suite",label:"suite",color:"primary",variant:"outlined"},i("address.suite",{maxLength:20})),{error:!!((X=e==null?void 0:e.address)!=null&&X.suite),helperText:(ee=(Q=e==null?void 0:e.address)==null?void 0:Q.suite)==null?void 0:ee.message}))}),s(g,{item:!0,xs:12,sm:6,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"lat",label:"lat",color:"primary",variant:"outlined"},i("address.geo.lat",{maxLength:20})),{error:!!((ae=(te=e==null?void 0:e.address)==null?void 0:te.geo)!=null&&ae.lat),helperText:(ne=(le=(se=e==null?void 0:e.address)==null?void 0:se.geo)==null?void 0:le.lat)==null?void 0:ne.message}))}),s(g,{item:!0,xs:12,sm:6,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"lng",label:"lng",color:"primary",variant:"outlined"},i("address.geo.lng",{maxLength:20})),{error:!!((re=(ie=e==null?void 0:e.address)==null?void 0:ie.geo)!=null&&re.lng),helperText:(ce=(de=(oe=e==null?void 0:e.address)==null?void 0:oe.geo)==null?void 0:de.lng)==null?void 0:ce.message}))}),s(g,{item:!0,xs:12,sm:6,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"company name",label:"company name",color:"primary",variant:"outlined"},i("company.name",{maxLength:20})),{error:!!((ue=e==null?void 0:e.company)!=null&&ue.name),helperText:(he=(me=e==null?void 0:e.company)==null?void 0:me.name)==null?void 0:he.message}))}),s(g,{item:!0,xs:12,sm:6,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"bs",label:"bs",color:"primary",variant:"outlined"},i("company.bs")),{error:!!((pe=e==null?void 0:e.company)!=null&&pe.bs),helperText:(fe=(ge=e==null?void 0:e.company)==null?void 0:ge.bs)==null?void 0:fe.message}))}),s(g,{item:!0,xs:12,sm:12,children:s(f,p(d({focused:!0,fullWidth:!0,placeholder:"catchphrase",label:"catchphrase",color:"primary",variant:"outlined"},i("company.catchPhrase")),{error:!!((be=e==null?void 0:e.company)!=null&&be.catchPhrase),helperText:(xe=(ye=e==null?void 0:e.company)==null?void 0:ye.catchPhrase)==null?void 0:xe.message}))})]})}))})]})}),$t=c.memo(()=>{const[t,a]=c.useState([]),{list:l,loading:i}=G(Ct),n=[{id:"id",disablePadding:!1,label:"id"},{id:"name",disablePadding:!1,label:"name"},{id:"username",disablePadding:!1,label:"username"},{id:"email",disablePadding:!1,label:"email"},{id:"city",disablePadding:!1,label:"city"},{id:"actions",disablePadding:!1,label:"actions"}];function r(e,o,m,h,y){return{id:e,name:o,username:m,email:h,city:y,actions:u(J,{direction:"row",spacing:1,children:[s(Nt,{id:e}),s(Dt,{id:e})]})}}return c.useEffect(()=>{if(l){const e=[];l.forEach(({id:o,name:m,username:h,email:y,address:b})=>{var w;e.push(r(o,m,h,y,(w=b==null?void 0:b.city)!=null?w:""))}),a(e)}},[l]),u(k,{children:[s(v,{onClick:()=>{localStorage.removeItem("users"),window.location.reload()},variant:"outlined",sx:{my:1},disabled:i,children:"clear localStorage and refresh page"}),s(_t,{orderByColumn:"username",rows:t,title:"Users table",headCells:n,AddButton:s(Bt,{loading:i})})]})}),qt=Re({palette:{mode:"dark"}}),Ft=Re({palette:{mode:"light"}}),Ht=({children:t})=>{const a=localStorage.getItem("theme")||"dark",[l,i]=c.useState(a),n=l==="dark"?qt:Ft;return c.useEffect(()=>{localStorage.setItem("theme",l)},[l]),u(nt,{theme:n,children:[s(jt,{sx:{position:"fixed",bottom:5},onChange:()=>i(l==="light"?"dark":"light")}),t]})},Vt=c.memo(()=>{const t=$();return c.useEffect(()=>{t(_())},[]),u(k,{children:[s(T,{variant:"h2",children:"Dashboard"}),s($t,{})]})}),Jt=it([{path:yt,element:s(xt,{})},{path:Ue,element:s(Vt,{})}]),Gt=Object.freeze({API_BASE_URL:"/"}),Yt=()=>t=>a=>(dt(a)&&ct.error(a.payload||"An error occured"),t(a)),Zt=rt({users:Ut}),Kt=ot({reducer:Zt,middleware:t=>t().concat(Yt)});A.defaults.baseURL=Gt.API_BASE_URL;ut.createRoot(document.getElementById("root")).render(s(mt.StrictMode,{children:u(Ht,{children:[s(ht,{}),s(pt,{store:Kt,children:s(gt,{maxWidth:"md",children:s(ft,{router:Jt})})}),s(bt,{})]})}))});export default Xt();
