(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{1637:function(e,t,n){Promise.resolve().then(n.bind(n,5485))},5485:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7437),o=n(2265),a=n(495),s=n(5657),i=n(8472),c=n(6292),l=n(8364),d=n(2218),u=n(7440);let f=(0,d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),p=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)(l.f,{ref:t,className:(0,u.cn)(f(),n),...o})});function m(){let{cliType:e,handleSubmit:t,file:n,isFetching:l,handleCliTypeChange:d,handleFileChange:u,testFunction:f,handleRemoveFile:m}=function(){let[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(null),[a,c]=(0,o.useState)("vocal"),l=async r=>{try{if(r.preventDefault(),e)return;if(t(!0),!n)throw Error("Please upload a music file you would like to convert");let o=new FormData;o.append("file",n);let a=await i.Z.post("https://alexios.pythonanywhere.com/transcribe",o,{responseType:"blob"});console.log(a.data);let s=window.URL.createObjectURL(new Blob([a.data])),c=document.createElement("a");c.href=s,c.setAttribute("download","sheet-music.midi"),document.body.appendChild(c),c.click(),document.body.removeChild(c),window.URL.revokeObjectURL(s)}catch(e){(0,s.Am)({title:e.message,description:"Please try again or contact support",variant:"destructive"})}finally{t(!1)}};return{handleRemoveFile:e=>{e.preventDefault(),e.stopPropagation(),r(null)},isFetching:e,handleSubmit:l,testFunction:async()=>{console.log("https://alexios.pythonanywhere.com");try{let e=await i.Z.get("https://alexios.pythonanywhere.com");console.log(e.data)}catch(e){console.error(e)}},handleFileChange:e=>r(e.target.files[0]),handleCliTypeChange:e=>{c(e.target.value)},file:n,setFile:r,cliType:a,setCliType:c}}();return(0,r.jsxs)("form",{onSubmit:t,className:"gap-12 justify-center flex-col flex mt-24 max-w-xl m-auto h-screen ",children:[(0,r.jsxs)("div",{className:"mx-auto justify-center gap-1.5 flex flex-col items-center",children:[(0,r.jsx)(p,{htmlFor:"picture",className:"text-custom-color bg-secondary p-12 rounded-lg",children:"Click Here to Upload a .mp3 or .wav file"}),(0,r.jsx)("input",{id:"picture",type:"file",className:"hidden",accept:".mp3,.wav",onChange:u}),(0,r.jsx)("label",{htmlFor:"picture",className:"cursor-pointer text-red- py-2 px-4 rounded-md text-custom-color",children:n&&(0,r.jsx)(p,{children:n.name})})]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 w-48 mx-auto",children:[(0,r.jsx)(a.z,{disabled:l,type:"submit",className:"w-min mx-auto",children:l?(0,r.jsx)(c.Z,{height:20}):(0,r.jsx)(r.Fragment,{children:"Upload"})}),(0,r.jsx)(a.z,{variant:"destructive",onClick:m,children:"Remove File"})]})]})}p.displayName=l.f.displayName},495:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(7437),o=n(2265),a=n(1538),s=n(2218),i=n(7440);let c=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=o.forwardRef((e,t)=>{let{className:n,variant:o,size:s,asChild:l=!1,...d}=e,u=l?a.g7:"button";return(0,r.jsx)(u,{className:(0,i.cn)(c({variant:o,size:s,className:n})),ref:t,...d})});l.displayName="Button"},5657:function(e,t,n){"use strict";n.d(t,{Am:function(){return u},pm:function(){return f}});var r=n(2265);let o=0,a=new Map,s=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:n}=t;return n?s(n):e.toasts.forEach(e=>{s(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},c=[],l={toasts:[]};function d(e){l=i(l,e),c.forEach(e=>{e(l)})}function u(e){let{...t}=e,n=(o=(o+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>d({type:"DISMISS_TOAST",toastId:n});return d({type:"ADD_TOAST",toast:{...t,id:n,open:!0,onOpenChange:e=>{e||r()}}}),{id:n,dismiss:r,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:n}})}}function f(){let[e,t]=r.useState(l);return r.useEffect(()=>(c.push(t),()=>{let e=c.indexOf(t);e>-1&&c.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},7440:function(e,t,n){"use strict";n.d(t,{cn:function(){return a}});var r=n(4839),o=n(6164);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m6)((0,r.W)(t))}}},function(e){e.O(0,[183,281,971,23,744],function(){return e(e.s=1637)}),_N_E=e.O()}]);