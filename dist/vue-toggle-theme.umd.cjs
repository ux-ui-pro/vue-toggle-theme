(function(t,h){typeof exports=="object"&&typeof module<"u"?module.exports=h(require("vue")):typeof define=="function"&&define.amd?define(["vue"],h):(t=typeof globalThis<"u"?globalThis:t||self,t.ToggleTheme=h(t.Vue))})(this,function(t){"use strict";const h="",l=(e,o)=>{const r=e.__vccOpts||e;for(const[c,n]of o)r[c]=n;return r},d={name:"ToggleTheme",props:{defaultTheme:{type:String,default:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}},data(){return{theme:this.defaultTheme,metaThemeColor:null,currentTheme:null,docEl:document.documentElement}},mounted(){try{this.setTheme()}catch(e){console.error("Error set the theme:",e)}},methods:{setTheme(){try{this.currentTheme=localStorage.getItem("theme")||this.defaultTheme,this.docEl.setAttribute("data-theme",this.currentTheme),this.docEl.setAttribute("defaulttheme",this.currentTheme),this.metaTheme()}catch(e){console.error("Error set the theme:",e)}},metaTheme(){try{this.currentTheme=localStorage.getItem("theme")||this.defaultTheme,this.metaThemeColor=document.querySelector('meta[name="theme-color"]');const e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--meta-theme-color-dark"),r=e.getPropertyValue("--theme-theme-color-light"),c={dark:o,light:r};this.metaThemeColor.setAttribute("content",c[this.currentTheme].trim())}catch(e){console.error("Error when setting the color in the meta tag:",e)}},pickTheme(){try{this.currentTheme=this.currentTheme==="dark"?"light":"dark",localStorage.setItem("theme",this.currentTheme),this.setTheme()}catch(e){console.error("Error when changing the theme:",e)}}},computed:{themeClasses(){return{"toggle-theme--dark":this.currentTheme==="dark","toggle-theme--light":this.currentTheme==="light"}}}},s=e=>(t.pushScopeId("data-v-66dd950c"),e=e(),t.popScopeId(),e),i={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"24px",height:"24px",fill:"none",class:"toggle-theme__svg",viewBox:"0 0 32 32"},a=s(()=>t.createElementVNode("clipPath",{id:"toggle-theme__path"},[t.createElementVNode("path",{d:"M0-11h25a1 1 0 0017 13v30H0Z"})],-1)),g=["clip-path"],u=[s(()=>t.createElementVNode("circle",{cx:"16",cy:"16",r:"8.4"},null,-1)),s(()=>t.createElementVNode("path",{d:"M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"},null,-1))];function p(e,o,r,c,n,m){return t.openBlock(),t.createElementBlock("button",{themecolorlist:"light, dark",onClick:o[0]||(o[0]=(..._)=>m.pickTheme&&m.pickTheme(..._)),class:t.normalizeClass(["toggle-theme",m.themeClasses])},[(t.openBlock(),t.createElementBlock("svg",i,[a,t.createElementVNode("g",{"clip-path":"url(#toggle-theme__path)"},u,8,g)]))],2)}return l(d,[["render",p],["__scopeId","data-v-66dd950c"]])});
