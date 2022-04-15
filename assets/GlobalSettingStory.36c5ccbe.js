import{s as x,u as w,r as g,o as l,c as i,a as t,g as a,v as d,d as e,h as v,F as m,e as S,t as _}from"./index.176f91dd.js";const b={class:"h-screen flex flex-col"},h=t("p",{class:"text-center flex-none"},"Global Story Setting",-1),k=t("hr",null,null,-1),U={class:"flex justify-center m-2 text-xs"},V=t("p",{class:"text-center whitespace-nowrap self-center pr-1"},"Story Title",-1),D={class:"flex justify-center m-2 text-xs"},I=t("p",{class:"text-center whitespace-nowrap self-center pr-1"},"Story Start",-1),C=["value"],F={class:"flex justify-center m-2 text-xs"},N=t("p",{class:"text-center whitespace-nowrap self-center pr-1"},"IFID",-1),j={class:"grid grid-cols-2 place-content-stretch text-xs m-2 gap-x-2 text-white"},B={key:0,class:"p-1 outline-none border rounded w-full grow"},$={key:1,class:"p-1 outline-none border rounded w-full grow"},M={setup(z){const r=x(),c=w(),u=g(!0),n=c.params;function f(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,p=>(p^crypto.getRandomValues(new Uint8Array(1))[0]&15>>p/4).toString(16))}function y(){r.story[n.id].ifid=f().toString().toUpperCase()}return(p,s)=>(l(),i("div",b,[h,k,t("div",U,[V,a(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=o=>e(r).story[e(n).id].title=o),class:"p-1 outline-none border rounded w-full"},null,512),[[d,e(r).story[e(n).id].title]])]),t("div",D,[I,a(t("select",{"onUpdate:modelValue":s[1]||(s[1]=o=>e(r).story[e(n).id].startNode=o),class:"p-1 outline-none border rounded w-full"},[(l(!0),i(m,null,S(e(r).story[e(n).id].passage,o=>(l(),i("option",{value:o.pid},_(o.name),9,C))),256))],512),[[v,e(r).story[e(n).id].startNode]])]),t("div",F,[N,a(t("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=o=>e(r).story[e(n).id].ifid=o),disabled:"",class:"p-1 overflow-auto outline-none border rounded w-full"},null,512),[[d,e(r).story[e(n).id].ifid]]),t("button",{onClick:s[3]||(s[3]=o=>y()),class:"text-center whitespace-nowrap self-center pl-1"},"Generate New IFID")]),t("div",j,[t("button",{onClick:s[4]||(s[4]=o=>u.value=!0),class:"bg-sky-500 grow p-2 motion-safe:hover:bg-sky-400 motion-safe:transition"},"Javascript"),t("button",{onClick:s[5]||(s[5]=o=>u.value=!1),class:"bg-green-500 grow p-2 motion-safe:hover:bg-green-400 motion-safe:transition"},"CSS")]),u.value?(l(),i("div",B,[a(t("textarea",{type:"textarea","onUpdate:modelValue":s[6]||(s[6]=o=>e(r).story[e(n).id].userScript=o),class:"resize-none grow w-full h-full p-2"},null,512),[[d,e(r).story[e(n).id].userScript]])])):(l(),i("div",$,[a(t("textarea",{type:"textarea","onUpdate:modelValue":s[7]||(s[7]=o=>e(r).story[e(n).id].userStyle=o),class:"resize-none grow w-full h-full p-2"},null,512),[[d,e(r).story[e(n).id].userStyle]])]))]))}};export{M as default};
