import{m as n,j as e,L as d}from"./app-DKxiInoG.js";import{I as c}from"./input-error-HFi0nrJ-.js";import{T as p}from"./text-link-C6LGhp6H.js";import{B as x}from"./app-logo-icon-CMGnIzFA.js";import{L as u,I as f}from"./label-x1G_dDw6.js";import{A as j,L as h}from"./auth-layout-EZzyME-5.js";import"./cn-tq3CxDFa.js";import"./clsx-B-dksMZM.js";import"./index-C7L7Ig-F.js";import"./index-CzjHwTTJ.js";function k({status:t}){const{data:a,setData:i,post:o,processing:r,errors:m}=n({email:""}),l=s=>{s.preventDefault(),o(route("password.email"))};return e.jsxs(j,{title:"Forgot password",description:"Enter your email to receive a password reset link",children:[e.jsx(d,{title:"Forgot password"}),t&&e.jsx("div",{className:"mb-4 text-center text-sm font-medium text-green-600",children:t}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("form",{onSubmit:l,children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(u,{htmlFor:"email",children:"Email address"}),e.jsx(f,{id:"email",type:"email",name:"email",autoComplete:"off",value:a.email,autoFocus:!0,onChange:s=>i("email",s.target.value),placeholder:"email@example.com"}),e.jsx(c,{message:m.email})]}),e.jsx("div",{className:"my-6 flex items-center justify-start",children:e.jsxs(x,{className:"w-full",disabled:r,children:[r&&e.jsx(h,{className:"h-4 w-4 animate-spin"}),"Email password reset link"]})})]}),e.jsxs("div",{className:"text-muted-foreground space-x-1 text-center text-sm",children:[e.jsx("span",{children:"Or, return to"}),e.jsx(p,{href:route("login"),children:"log in"})]})]})]})}export{k as default};
