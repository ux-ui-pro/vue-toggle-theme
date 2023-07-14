(function(e,m){typeof exports=="object"&&typeof module<"u"?module.exports=m(require("vue")):typeof define=="function"&&define.amd?define(["vue"],m):(e=typeof globalThis<"u"?globalThis:e||self,e.ToggleTheme=m(e.Vue))})(this,function(e){"use strict";const m="",n=(t,r)=>{const h=t.__vccOpts||t;for(const[o,l]of r)h[o]=l;return h},c={name:"ToggleTheme",props:{defaultTheme:{type:String,default:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}},data(){return{theme:this.defaultTheme,metaThemeColor:null,currentTheme:null,docEl:document.documentElement}},mounted(){this.setTheme()},methods:{setTheme(){this.currentTheme=localStorage.getItem("theme")||this.defaultTheme,this.docEl.setAttribute("data-theme",this.currentTheme),this.docEl.setAttribute("defaulttheme",this.currentTheme),this.metaTheme()},metaTheme(){this.currentTheme=localStorage.getItem("theme")||this.defaultTheme,this.metaThemeColor=document.querySelector('meta[name="theme-color"]');const t=getComputedStyle(document.documentElement),r=t.getPropertyValue("--meta-theme-color-dark"),h=t.getPropertyValue("--theme-theme-color-light"),o={dark:r,light:h};this.metaThemeColor.setAttribute("content",o[this.currentTheme].trim())},pickTheme(){this.currentTheme=this.currentTheme==="dark"?"light":"dark",localStorage.setItem("theme",this.currentTheme),this.setTheme()}},computed:{themeClasses(){return{"toggle-theme--dark":this.currentTheme==="dark","toggle-theme--light":this.currentTheme==="light"}}}};function i(t,r,h,o,l,s){return e.openBlock(),e.createElementBlock("button",{themecolorlist:"light, dark",onClick:r[0]||(r[0]=(...u)=>s.pickTheme&&s.pickTheme(...u)),class:e.normalizeClass(["toggle-theme",s.themeClasses])},[e.renderSlot(t.$slots,"default")],2)}return n(c,[["render",i]])});
