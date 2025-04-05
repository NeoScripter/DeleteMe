import{r as w,m as j,j as s,L as v}from"./app-B_6dOJlK.js";import{I as n}from"./input-error-C6pllURu.js";import{A as _}from"./app-layout-B55F105i.js";import{S as y,H as N}from"./layout-CyBNb4w2.js";import{B as C}from"./app-logo-icon-DRv9vmyc.js";import{L as p,I as d}from"./label-CHXppx05.js";import{z as S}from"./transition-CHgTcJ3K.js";import"./cn-C7svVsTI.js";import"./index-Vu60UMa5.js";import"./index-dsPZy2Hf.js";import"./render-Cywv2UNQ.js";const b=[{title:"Password settings",href:"/settings/password"}];function H(){const i=w.useRef(null),c=w.useRef(null),{data:e,setData:a,errors:o,put:f,reset:t,processing:x,recentlySuccessful:h}=j({current_password:"",password:"",password_confirmation:""}),g=r=>{r.preventDefault(),f(route("password.update"),{preserveScroll:!0,onSuccess:()=>t(),onError:l=>{var u,m;l.password&&(t("password","password_confirmation"),(u=i.current)==null||u.focus()),l.current_password&&(t("current_password"),(m=c.current)==null||m.focus())}})};return s.jsxs(_,{breadcrumbs:b,children:[s.jsx(v,{title:"Profile settings"}),s.jsx(y,{children:s.jsxs("div",{className:"space-y-6",children:[s.jsx(N,{title:"Update password",description:"Ensure your account is using a long, random password to stay secure"}),s.jsxs("form",{onSubmit:g,className:"space-y-6",children:[s.jsxs("div",{className:"grid gap-2",children:[s.jsx(p,{htmlFor:"current_password",children:"Current password"}),s.jsx(d,{id:"current_password",ref:c,value:e.current_password,onChange:r=>a("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password",placeholder:"Current password"}),s.jsx(n,{message:o.current_password})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(p,{htmlFor:"password",children:"New password"}),s.jsx(d,{id:"password",ref:i,value:e.password,onChange:r=>a("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password",placeholder:"New password"}),s.jsx(n,{message:o.password})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(p,{htmlFor:"password_confirmation",children:"Confirm password"}),s.jsx(d,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password",placeholder:"Confirm password"}),s.jsx(n,{message:o.password_confirmation})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(C,{disabled:x,children:"Save password"}),s.jsx(S,{show:h,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-neutral-600",children:"Saved"})})]})]})]})})]})}export{H as default};
