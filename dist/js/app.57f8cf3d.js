(function(e){function t(t){for(var c,o,i=t[0],s=t[1],u=t[2],b=0,j=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&j.push(r[o][0]),r[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);l&&l(t);while(j.length)j.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"272a":function(e,t,n){},4416:function(e,t,n){"use strict";n("a699")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,o){var i=Object(c["z"])("NavbarApp"),s=Object(c["z"])("router-view");return Object(c["r"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(i),Object(c["i"])(s)],64)}var a={class:"navbar py-2 box",role:"navigation","aria-label":"main navigation"},o={class:"navbar-brand"},i=Object(c["g"])("img",{class:"is-rounded",src:"https://portfolio.ripley.eu/img/logo-min.jpg",alt:"logo"},null,-1),s=Object(c["g"])("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[Object(c["g"])("span",{"aria-hidden":"true"}),Object(c["g"])("span",{"aria-hidden":"true"}),Object(c["g"])("span",{"aria-hidden":"true"})],-1),u={id:"navbarBasicExample",class:"navbar-menu ml-4"},l={class:"navbar-start"},b=Object(c["h"])(" Accueil "),j=Object(c["h"])(" Portfolio ");function p(e,t,n,r,p,d){var O=Object(c["z"])("router-link");return Object(c["r"])(),Object(c["f"])("nav",a,[Object(c["g"])("div",o,[Object(c["i"])(O,{to:d.home,class:"navbar_item image is-48x48 ml-5"},{default:Object(c["E"])((function(){return[i]})),_:1},8,["to"]),s]),Object(c["g"])("div",u,[Object(c["g"])("div",l,[Object(c["i"])(O,{to:d.home,class:"navbar-item"},{default:Object(c["E"])((function(){return[b]})),_:1},8,["to"]),Object(c["i"])(O,{to:d.portfolio,class:"navbar-item"},{default:Object(c["E"])((function(){return[j]})),_:1},8,["to"])])])])}var d={name:"navabr-app",computed:{home:function(){return{name:"home-app"}},portfolio:function(){return{name:"projects"}}}},O=n("6b0d"),f=n.n(O);const m=f()(d,[["render",p]]);var g=m,h={name:"App",components:{NavbarApp:g}};n("4416");const v=f()(h,[["render",r]]);var P=v,y=n("5502"),x=n("1da1"),w=(n("99af"),n("b0c0"),n("96cf"),n("bc3a")),_=n.n(w),E=n("6c02"),T={class:"container"},S=Object(c["h"])("Qui suis-je ?"),k=Object(c["g"])("p",{class:"my-5 mt-10"},[Object(c["g"])("span",{class:"font-bold"},"Christophe Salou 39 ans"),Object(c["h"])(". Ancien technicien / administrateur réseaux informatiques. J'ai entrepris ma reconversion en 2016. Je m'interesse au multimédia et aux technologies informatique depuis mes 15 ans, mais je m'interesse au developpement web depuis mes 20 ans et développe des sites web pour particuliers ou associations de manière autodidacte. ")],-1),R=Object(c["g"])("p",{class:"my-5"}," Je propose aujourd'hui mes services et mets à disposition mes qualités de développeur passioné et rigoureux. Disponible pour un stage front-end et/ou back-end d'une durée de 2 mois minimum en distanciel partout en France et/ou en présentiel sur Nantes. ",-1),A=Object(c["h"])("Languages"),B=Object(c["g"])("ol",{class:"ml-4"},[Object(c["g"])("li",null,"HTML 5"),Object(c["g"])("li",null,"CSS 3"),Object(c["g"])("li",null,"PHP 7/8"),Object(c["g"])("li",null,"Javascript ES5 à ES9"),Object(c["g"])("li",null,"TypeScript 4")],-1),H=Object(c["h"])("Frameworks CSS"),D=Object(c["g"])("ol",{class:"ml-4"},[Object(c["g"])("li",null,"Bootstarp 4 / 5"),Object(c["g"])("li",null,"Materializecss"),Object(c["g"])("li",null,"Tailwind CSS"),Object(c["g"])("li",null,"Bulma")],-1),z=Object(c["h"])("Frameworks JS"),M=Object(c["g"])("ol",{class:"ml-4"},[Object(c["g"])("li",null,"jQuery"),Object(c["g"])("li",null,"React js (avant et après 16.8) - React router - Redux"),Object(c["g"])("li",null,"Vue.js 3 - VueX - VueRouter")],-1),C=Object(c["h"])("Frameworks PHP"),J=Object(c["g"])("ol",{class:"ml-4"},[Object(c["g"])("li",null,"Laravel 7/8"),Object(c["g"])("li",null,"Symfony 5")],-1),N=Object(c["h"])("Bases de données"),U=Object(c["g"])("ol",{class:"ml-4"},[Object(c["g"])("li",null,"MySql"),Object(c["g"])("li",null,"Firebase"),Object(c["g"])("li",null,"MongoDB")],-1),q=Object(c["h"])("Mobile"),F=Object(c["g"])("ol",{class:"ml-4"},[Object(c["g"])("li",null,"React Native")],-1);function K(e,t,n,r,a,o){var i=Object(c["z"])("TitleH1"),s=Object(c["z"])("TitleH2");return Object(c["r"])(),Object(c["f"])("section",T,[Object(c["i"])(i,null,{default:Object(c["E"])((function(){return[S]})),_:1}),k,R,Object(c["i"])(s,null,{default:Object(c["E"])((function(){return[A]})),_:1}),B,Object(c["i"])(s,null,{default:Object(c["E"])((function(){return[H]})),_:1}),D,Object(c["i"])(s,null,{default:Object(c["E"])((function(){return[z]})),_:1}),M,Object(c["i"])(s,null,{default:Object(c["E"])((function(){return[C]})),_:1}),J,Object(c["i"])(s,null,{default:Object(c["E"])((function(){return[N]})),_:1}),U,Object(c["i"])(s,null,{default:Object(c["E"])((function(){return[q]})),_:1}),F])}var L={class:"has-background-primary b-radius has-text-centered p-2 is-size-1 is-uppercase has-text-weight-bold has-text-white"};function V(e,t,n,r,a,o){return Object(c["r"])(),Object(c["f"])("h1",L,[Object(c["y"])(e.$slots,"default",{},(function(){return[Object(c["h"])(Object(c["B"])(n.text),1)]}))])}var I={name:"title-h1",props:{text:String}};n("b7b4");const Q=f()(I,[["render",V]]);var W=Q,$={class:"has-background-primary b-radius has-text-centered p-2 is-size-3 is-uppercase has-text-weight-bold has-text-white my-5"};function X(e,t,n,r,a,o){return Object(c["r"])(),Object(c["f"])("h2",$,[Object(c["y"])(e.$slots,"default",{},(function(){return[Object(c["h"])(Object(c["B"])(n.text),1)]}))])}var Y={name:"title-h2",props:{text:String}};const G=f()(Y,[["render",X]]);var Z=G,ee={name:"home-app",components:{TitleH1:W,TitleH2:Z},data:function(){return{}}};const te=f()(ee,[["render",K]]);var ne=te,ce={key:0,class:"container"},re=Object(c["h"])("Mon portfolio"),ae={class:"cards container mt-5 is-flex is-flex-wrap-wrap is-justify-content-space-evenly"};function oe(e,t,n,r,a,o){var i=Object(c["z"])("TitleH1"),s=Object(c["z"])("CardApp"),u=Object(c["z"])("router-view");return Object(c["r"])(),Object(c["f"])(c["a"],null,[e.isHideParent?Object(c["e"])("",!0):(Object(c["r"])(),Object(c["f"])("section",ce,[Object(c["i"])(i,null,{default:Object(c["E"])((function(){return[re]})),_:1}),Object(c["g"])("div",ae,[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(e.getProjects,(function(e,t){return Object(c["r"])(),Object(c["d"])(s,{key:t,project:e},null,8,["project"])})),128))])])),Object(c["i"])(u)],64)}var ie=n("5530"),se=(n("a4d3"),n("e01a"),function(e){return Object(c["u"])("data-v-3f0adf1d"),e=e(),Object(c["s"])(),e}),ue={class:"card-content"},le={class:"media"},be=se((function(){return Object(c["g"])("div",{class:"media-left"},[Object(c["g"])("figure",{class:"image is-96x96"},[Object(c["g"])("img",{class:"is-rounded",src:"https://avatars.githubusercontent.com/u/23324161?v=4",alt:"Placeholder image"})])],-1)})),je={class:"media-content"},pe={class:"title is-4"},de={class:"subtitle is-6"},Oe={class:"content"},fe={class:"language"};function me(e,t,n,r,a,o){return Object(c["r"])(),Object(c["f"])("div",{class:"card m-4",onClick:t[0]||(t[0]=function(t){return e.goToDetailProject({name:n.project.name,id:n.project.id})})},[Object(c["g"])("div",ue,[Object(c["g"])("div",le,[be,Object(c["g"])("div",je,[Object(c["g"])("p",pe,Object(c["B"])(n.project.name),1),Object(c["g"])("p",de,Object(c["B"])(n.project.full_name),1)])]),Object(c["g"])("div",Oe,[Object(c["h"])(Object(c["B"])(n.project.description?n.project.description:"Pas de description")+" ",1),Object(c["g"])("span",fe,Object(c["B"])(n.project.language),1)])])])}var ge={name:"card-app",props:{project:Object},data:function(){return{}},methods:Object(ie["a"])({},Object(y["b"])("projects",["goToDetailProject"]))};n("d7cd");const he=f()(ge,[["render",me],["__scopeId","data-v-3f0adf1d"]]);var ve=he,Pe={name:"projects-app",components:{TitleH1:W,CardApp:ve},data:function(){return{}},mounted:function(){this.searchMyProjects(),this.hideParent(!1)},computed:Object(ie["a"])(Object(ie["a"])({},Object(y["c"])("projects",["getProjects"])),Object(y["d"])("projects",["isHideParent"])),methods:Object(ie["a"])({},Object(y["b"])("projects",["searchMyProjects","hideParent"]))};const ye=f()(Pe,[["render",oe]]);var xe=ye,we={class:"container"},_e={class:"message is-info mt-5"},Ee=Object(c["g"])("div",{class:"message-header"},[Object(c["g"])("p",null,"Descritpion du projet")],-1),Te={class:"message-body"},Se={class:"message is-info mt-5"},ke=Object(c["g"])("div",{class:"message-header"},[Object(c["g"])("p",null,"Divers")],-1),Re={class:"message-body"},Ae={class:"my-2"},Be={class:"my-2"},He={class:"my-2"},De=["href"];function ze(e,t,n,r,a,o){var i=Object(c["z"])("TitleH1");return Object(c["r"])(),Object(c["f"])("section",we,[Object(c["i"])(i,null,{default:Object(c["E"])((function(){return[Object(c["h"])("Détails du projet : "+Object(c["B"])(e.getProject.name),1)]})),_:1}),Object(c["g"])("article",_e,[Ee,Object(c["g"])("div",Te,Object(c["B"])(e.getProject.description?e.getProject.description:"Pas de description sur ce projet"),1)]),Object(c["g"])("article",Se,[ke,Object(c["g"])("div",Re,[Object(c["g"])("ul",null,[Object(c["g"])("li",Ae,"Accès : "+Object(c["B"])(e.getProject.visibility),1),Object(c["g"])("li",Be,"branche par défault : "+Object(c["B"])(e.getProject.default_branch),1),Object(c["g"])("li",He,"Nombre d'abonnés : "+Object(c["B"])(e.getProject.subscribers_count),1)])])]),Object(c["g"])("a",{class:"button is-primary",href:e.getProject.html_url,target:"_blank"},"Voir le github",8,De)])}var Me={name:"project-app",components:{TitleH1:W},mounted:function(){this.hideParent(!0)},computed:Object(ie["a"])({},Object(y["c"])("projects",["getProject"])),methods:Object(ie["a"])({},Object(y["b"])("projects",["hideParent"])),beforeRouteLeave:function(e,t,n){this.hideParent(!1),n()}};const Ce=f()(Me,[["render",ze]]);var Je=Ce,Ne=[{path:"/",name:"home-app",component:ne},{path:"/portfolio",name:"portfolio",component:xe},{name:"projects",path:"/portfolio",component:xe,children:[{name:"project",path:":id",component:Je,props:!0}]}],Ue=Object(E["a"])({history:Object(E["b"])(),routes:Ne}),qe=Ue,Fe={namespaced:!0,state:function(){return{apiUrl:"https://api.github.com",apiKey:"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",projects:[],project:{},isHideParent:!1}},getters:{getProjects:function(e){return e.projects},getProject:function(e){return e.project}},mutations:{UPDATE_PROJECTS:function(e,t){e.projects=t},UPDATE_PROJECT:function(e,t){e.project=t},HIDE_PARENT:function(e,t){e.isHideParent=t}},actions:{searchMyProjects:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.dispatch("getRequestAxios","/user/repos");case 3:n=t.sent,console.log(n.data),e.commit("UPDATE_PROJECTS",n.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},goToDetailProject:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function n(){var c,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_.a.get("".concat(e.state.apiUrl,"/repos/bezedache29/").concat(t.name));case 3:c=n.sent,console.log(c.data),e.commit("UPDATE_PROJECT",c.data),r=t.id,qe.push({name:"project",params:{id:r}}),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},getRequestAxios:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function n(){var c,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},_.a.defaults.headers.common={Authorization:"token ".concat(e.state.apiKey)},n.next=4,_()({method:"get",url:"".concat(e.state.apiUrl).concat(t),config:c});case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))()},hideParent:function(e,t){e.commit("HIDE_PARENT",t)}}},Ke=Fe,Le=Object(y["a"])({modules:{projects:Ke}}),Ve=Le;Object(c["c"])(P).use(Ve).use(qe).mount("#app")},6143:function(e,t,n){},a699:function(e,t,n){},b7b4:function(e,t,n){"use strict";n("6143")},d7cd:function(e,t,n){"use strict";n("272a")}});
//# sourceMappingURL=app.57f8cf3d.js.map