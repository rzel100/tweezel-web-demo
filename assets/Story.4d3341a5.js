import{s as _,u as w,r as v,o as l,c as d,a as s,b as u,d as n,R as h,w as g,F as b,e as m,t as c,f as x}from"./index.176f91dd.js";const k={class:"h-screen flex flex-col"},P=s("p",{class:"text-center text-xl flex-none"},"Edit Passage",-1),S=s("hr",null,null,-1),$={class:"overflow-auto grow"},N={class:"bg-white p-2 container mx-auto"},C=s("div",{class:"bg-sky-500 rounded text-white motion-safe:hover:bg-sky-400 motion-safe:transition p-0.5"},[s("div",{class:"overflow-hidden whitespace-nowrap p-2"},"Story Global Setting")],-1),B={class:"bg-white p-2 container mx-auto"},E={class:"bg-sky-500 rounded text-white motion-safe:hover:bg-sky-400 motion-safe:transition p-0.5"},I={class:"overflow-hidden whitespace-nowrap p-2"},R={class:"overflow-hidden whitespace-nowrap p-2 text-black bg-white"},T={setup(D){const o=_(),a=w().params.id;o.storyId=a;function f(){let r=1,e=[];for(let t=0;t<o.story[a].passage.length;t++)e.push(o.story[a].passage[t].pid);e.sort(function(t,i){return t-i});for(let t=0;t<e.length;t++)e[t]==r&&r++;o.story[a].passage.push({name:"passage-name-"+r,pid:r.toString(),data:"Edit Your New Passage..."})}const p=v("Play The Story");function y(){o.story[a].passage.length<1?p.value="Can't Play If There Is No Passage.":x.push(`/story/${a}/play`)}return(r,e)=>(l(),d("div",k,[P,s("button",{onClick:e[0]||(e[0]=t=>f()),class:"bg-green-500 p-1 text-white motion-safe:hover:bg-green-400 motion-safe:transition"},"Add New Passage +"),S,s("div",$,[s("div",N,[u(n(h),{to:`/story/${n(o).story[0].id}/global`},{default:g(()=>[C]),_:1},8,["to"])]),(l(!0),d(b,null,m(n(o).story[n(a)].passage,(t,i)=>(l(),d("div",B,[u(n(h),{to:`/story/${n(o).story[0].id}/edit/${i}`},{default:g(()=>[s("div",E,[s("div",I,c(t.name),1),s("div",R,c(t.data),1)])]),_:2},1032,["to"])]))),256))]),s("button",{onClick:e[1]||(e[1]=t=>y()),class:"bg-green-500 p-2 text-white"},c(p.value),1)]))}};export{T as default};
