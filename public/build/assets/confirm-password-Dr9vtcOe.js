import{m as d,j as s,L as m}from"./app-ZfUTiXf8.js";import{I as l}from"./input-error-ByK9B-u_.js";import{B as c}from"./app-logo-icon-H0p93PAe.js";import{L as u,I as w}from"./label-DeYqen2t.js";import{A as f,L as h}from"./auth-layout-DrKlfhdK.js";import"./cn-BAAotcXN.js";import"./index-fFu1HK3z.js";import"./index-DjRTpwxt.js";function N(){const{data:o,setData:e,post:t,processing:a,errors:i,reset:n}=d({password:""}),p=r=>{r.preventDefault(),t(route("password.confirm"),{onFinish:()=>n("password")})};return s.jsxs(f,{title:"Confirm your password",description:"This is a secure area of the application. Please confirm your password before continuing.",children:[s.jsx(m,{title:"Confirm password"}),s.jsx("form",{onSubmit:p,children:s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"grid gap-2",children:[s.jsx(u,{htmlFor:"password",children:"Password"}),s.jsx(w,{id:"password",type:"password",name:"password",placeholder:"Password",autoComplete:"current-password",value:o.password,autoFocus:!0,onChange:r=>e("password",r.target.value)}),s.jsx(l,{message:i.password})]}),s.jsx("div",{className:"flex items-center",children:s.jsxs(c,{className:"w-full",disabled:a,children:[a&&s.jsx(h,{className:"h-4 w-4 animate-spin"}),"Confirm password"]})})]})})]})}export{N as default};
