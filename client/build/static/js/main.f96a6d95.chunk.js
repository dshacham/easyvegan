(this.webpackJsonpEASYVEGAN=this.webpackJsonpEASYVEGAN||[]).push([[0],{20:function(e,t,a){},26:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/favicon.79554c2f.ico"},43:function(e,t,a){e.exports=a(81)},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(37),r=a.n(l),s=(a(48),a(12)),i=a.n(s),o=a(15),m=a(1),u=a(3),p=a(4),E=(a(50),Object(c.createContext)(null)),f=(a(51),a(26),a(52),a(13)),b=a.n(f),d=function(){var e=Object(p.f)(),t=Object(c.useState)(!1),a=Object(m.a)(t,2),l=a[0],r=a[1],s=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/recipes/"+t);case 3:(a=e.sent).data.recipe._id===t&&a.status&&(localStorage.setItem("recipe-info",JSON.stringify(a.data.recipe)),r(!0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l&&e.push("/recipe")})),n.a.createElement("div",{className:"recommended"},n.a.createElement("h2",null,"TOP RECOMMENDED RECIPES"),n.a.createElement("div",{className:"rec-container"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"recipe-card"},n.a.createElement("h3",{className:"recipe-title to-back"},"BROWNIES"),n.a.createElement("img",{src:"../../assets/img/recipes/brownies.jpg",alt:"brownies"}),n.a.createElement("p",{className:"recipe-category"},"Category: sweet"),n.a.createElement("button",{className:"to-recipe",onClick:function(){return s("5f1c455ccd56e834c621a04c")}},"TO RECIPE"))),n.a.createElement("li",null,n.a.createElement("div",{className:"recipe-card"},n.a.createElement("h3",{className:"recipe-title to-back"},"CORN CASSEROLE"),n.a.createElement("img",{src:"../../assets/img/recipes/corn-casserole.jpg",alt:"corn casserole"}),n.a.createElement("p",{className:"recipe-category"},"Category: savoury"),n.a.createElement("button",{className:"to-recipe",onClick:function(){return s("5f1d5e9fbacda1473f417c5a")}},"TO RECIPE"))),n.a.createElement("li",null,n.a.createElement("div",{className:"recipe-card"},n.a.createElement("h3",{className:"recipe-title to-back"},"CHOCOLATE BALLS"),n.a.createElement("img",{src:"../../assets/img/recipes/chocolate-balls.jpg",alt:"chocolate balls"}),n.a.createElement("p",{className:"recipe-category"},"Category: sweet"),n.a.createElement("button",{className:"to-recipe",onClick:function(){return s("5f1c4b04a54b8c35a75825dc")}},"TO RECIPE"))))))},g=function(){return n.a.createElement("div",{className:"home"},n.a.createElement("div",{className:"big-container"},n.a.createElement("div",{className:"question-container"},n.a.createElement("div",{className:"smaller-container"},n.a.createElement("p",null,"What are you in the mood for?"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(u.b,{to:"sweets"},"SWEET")),n.a.createElement("li",null,n.a.createElement("img",{id:"vegan",src:"../assets/img/vegan-icon.png",alt:"100% vegan"})),n.a.createElement("li",null,n.a.createElement(u.b,{to:"savourys"},"SAVOURY")))))),n.a.createElement(d,null))},N=(a(73),function(){var e=Object(c.useContext)(E),t=e.navClass,a=e.setNavClass;return Object(c.useEffect)((function(){a(window.location.pathname)}),[]),n.a.createElement("nav",{className:"nav"},n.a.createElement("ul",null,n.a.createElement("li",{className:"/sweets"!==t&&"/savourys"!==t&&"/about"!==t&&"/addrecipe"!==t?"selected":""},n.a.createElement(u.b,{to:"/"},"EASY VEGAN")),n.a.createElement("li",{className:"/about"===t?"selected":""},n.a.createElement(u.b,{to:"about"},"About")),n.a.createElement("li",{className:"/sweets"===t?"selected":""},n.a.createElement(u.b,{to:"sweets"},"Sweet")),n.a.createElement("li",{className:"/savourys"===t?"selected":""},n.a.createElement(u.b,{to:"savourys"},"Savoury")),n.a.createElement("li",{className:"/addrecipe"===t?"selected":""},n.a.createElement(u.b,{to:"addrecipe"},"Add Recipes"))))}),v=a(39),O=a.n(v),j=(a(74),function(){var e=Object(c.useContext)(E),t=e.navClass,a=e.setNavClass,l=Object(c.useState)(!1),r=Object(m.a)(l,2),s=r[0],i=r[1],o=Object(c.useState)(!1),p=Object(m.a)(o,2),f=p[0],b=p[1];Object(c.useEffect)((function(){a(window.location.pathname)}));return n.a.createElement("div",{className:"dd-nav"},n.a.createElement(O.a,{className:"hamburger",isOpen:s,menuClicked:function(){i(!s),b(!0)}}),n.a.createElement("nav",{className:"dropdown"},f?n.a.createElement("ul",{className:!1===s?"ul-drop slide-out":"ul-drop slide-in"},n.a.createElement("li",{className:"/"===t?"selected":""},n.a.createElement(u.b,{to:"/",onClick:function(){b(!1),i(!1)}},"EASY VEGAN")),n.a.createElement("li",{className:"/about"===t&&t?"selected":""},n.a.createElement(u.b,{to:"about",onClick:function(){b(!1),i(!1)}},"About")),n.a.createElement("li",{className:"/sweets"===t?"selected":""},n.a.createElement(u.b,{to:"sweets",onClick:function(){b(!1),i(!1)}},"Sweet")),n.a.createElement("li",{className:"/savourys"===t?"selected":""},n.a.createElement(u.b,{to:"savourys",onClick:function(){b(!1),i(!1)}},"Savoury")),n.a.createElement("li",{className:"/addrecipe"===t?"selected":""},n.a.createElement(u.b,{to:"addrecipe",onClick:function(){b(!1),i(!1)}},"Add Recipes"))):null))}),h=(a(75),a(10)),C=a(11),y=a(40),w=function(){return n.a.createElement("footer",null,n.a.createElement("p",{className:"footer-name"},"\xa9EASYVEGAN2020"),n.a.createElement("div",{className:"footer-contact"},n.a.createElement("p",null,"CONTACT:"),n.a.createElement("a",{href:"mailto: dshacham22@gmail.com",target:"_blank"},n.a.createElement(h.a,{className:"icon",title:"email me",icon:C.b})),n.a.createElement("a",{href:"https://www.linkedin.com/in/dana-shacham-937408163/",target:"_blank"},n.a.createElement(h.a,{className:"icon",title:"email me",icon:y.a})),n.a.createElement("a",{href:"https://github.com/dshacham",target:"_blank"},n.a.createElement(h.a,{className:"icon",title:"email me",icon:C.a}))))},k=a(24),S=(a(78),function(){var e=Object(p.f)(),t=Object(c.useState)(""),a=Object(m.a)(t,2),l=a[0],r=a[1],s=Object(c.useState)(""),u=Object(m.a)(s,2),E=u[0],f=u[1],d=Object(c.useState)(""),g=Object(m.a)(d,2),N=g[0],v=g[1],O=Object(c.useState)(""),j=Object(m.a)(O,2),h=j[0],C=j[1],y=Object(c.useState)(""),w=Object(m.a)(y,2),S=w[0],R=w[1],I=Object(c.useState)(""),x=Object(m.a)(I,2),A=x[0],T=x[1],U=Object(c.useState)(""),D=Object(m.a)(U,2),L=D[0],P=D[1],G=Object(c.useState)([]),Y=Object(m.a)(G,2),J=Y[0],M=Y[1],V=Object(c.useState)([]),q=Object(m.a)(V,2),F=q[0],W=q[1],_=Object(c.useState)(""),B=Object(m.a)(_,2),H=B[0],K=B[1],X=Object(c.useState)(""),z=Object(m.a)(X,2),Q=z[0],Z=z[1],$=Object(c.useState)(""),ee=Object(m.a)($,2),te=ee[0],ae=ee[1],ce=Object(c.useState)(""),ne=Object(m.a)(ce,2),le=ne[0],re=ne[1],se=Object(c.useState)(""),ie=Object(m.a)(se,2),oe=ie[0],me=ie[1],ue=Object(c.useState)(!1),pe=Object(m.a)(ue,2),Ee=pe[0],fe=pe[1];Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]);var be=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,c,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),(a=new FormData).append("file",N),a.append("title",l),a.append("description",E),a.append("category",h),a.append("preparation",S),a.append("cooking",A),a.append("amount",L),c=0;c<J.length;c++)a.append("ings[]",J[c]);for(n=0;n<F.length;n++)a.append("directions[]",F[n]);return a.append("cookware",H),a.append("comments",Q),a.append("sourceURL",te),e.prev=14,e.next=17,b.a.post("/recipes",a,{headers:{"Content-Type":"multipart/form-data"}});case 17:(r=e.sent).status&&(localStorage.setItem("recipe-info",JSON.stringify(r.data.recipe)),fe(!0)),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(14),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[14,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){Ee&&e.push("/recipe")})),n.a.createElement("div",{className:"form-container"},n.a.createElement("form",{className:"recipe-form",onSubmit:be},n.a.createElement("h2",{className:"h2-recipe"},"ADD A RECIPE"),n.a.createElement("label",{className:"recipe-label"},"Title *",n.a.createElement("input",{className:"recipe-input",type:"text",value:l,required:!0,onChange:function(e){return r(e.target.value)}})),n.a.createElement("label",{className:"recipe-label"},"Description",n.a.createElement("textarea",{cols:"40",rows:"5",className:"recipe-textarea",onChange:function(e){return f(e.target.value)}})),n.a.createElement("label",{className:"recipe-label img-label"},"Image (png, jpeg/jpg)",n.a.createElement("input",{type:"file",placeholder:"Only .png, .jpeg or .jpg",className:"recipe-input img-file",onChange:function(e){return v(e.target.files[0])}})),n.a.createElement("label",{className:"smaller-label"},"Category *",n.a.createElement("select",{id:l,className:"recipe-input",required:!0,onChange:function(e){return C(e.currentTarget.value)}},n.a.createElement("option",{className:"recipe-opt",value:"select one",selected:!0},"..."),n.a.createElement("option",{className:"recipe-opt",value:"Sweet"},"Sweet"),n.a.createElement("option",{className:"recipe-opt",value:"Savoury"},"Savoury"))),n.a.createElement("label",{className:"smaller-label"},"Preparation Time *",n.a.createElement("input",{className:"recipe-input",type:"preparation",value:S,required:!0,onChange:function(e){return R(e.target.value)}})),n.a.createElement("label",{className:"smaller-label"},"Cooking Time",n.a.createElement("input",{className:"recipe-input",type:"cooking",value:A,onChange:function(e){return T(e.target.value)}})),n.a.createElement("label",{className:"smaller-label"},"Amount",n.a.createElement("input",{className:"recipe-input",type:"amount",value:L,onChange:function(e){return P(e.target.value)}})),n.a.createElement("label",{className:"list-label"},"Ingredients *",n.a.createElement("div",{className:"inline-input"},n.a.createElement("input",{className:"recipe-input",type:"ingredients",value:le,onChange:function(e){return re(e.target.value)}}),n.a.createElement("input",{type:"submit",className:"add-list",value:"ADD",onClick:function(e){e.preventDefault(),M([].concat(Object(k.a)(J),[le])),re("")}}))),J&&n.a.createElement("ul",{className:"form-list"},J.map((function(e,t){return n.a.createElement("li",{key:t},"- ",e," ",n.a.createElement("span",{onClick:function(t){return M(J.filter((function(t){return t!==e})))}},"X"))}))),n.a.createElement("label",{className:"list-label"},"Directions *",n.a.createElement("div",{className:"inline-input"},n.a.createElement("input",{className:"recipe-input",type:"directions",value:oe,onChange:function(e){return me(e.target.value)}}),n.a.createElement("input",{type:"submit",className:"add-list",value:"ADD",onClick:function(e){e.preventDefault(),W([].concat(Object(k.a)(F),[oe])),me("")}}))),F&&n.a.createElement("ul",{className:"form-list"},F.map((function(e,t){return n.a.createElement("li",{key:t},"- ",e," ",n.a.createElement("span",{onClick:function(t){return W(F.filter((function(t){return t!==e})))}},"X"))}))),n.a.createElement("label",{className:"recipe-label"},"Cookware",n.a.createElement("input",{className:"recipe-input",type:"cookware",value:H,onChange:function(e){return K(e.target.value)}})),n.a.createElement("label",{className:"recipe-label"},"Comments",n.a.createElement("input",{className:"recipe-input",type:"comments",value:Q,onChange:function(e){return Z(e.target.value)}})),n.a.createElement("label",{className:"recipe-label"},"Source",n.a.createElement("input",{className:"recipe-input",type:"sourceURL",value:te,onChange:function(e){return ae(e.target.value)}})),n.a.createElement("h5",{className:"h5-recipe"},"* Required Fields"),n.a.createElement("button",{className:"recipe-btn",type:"submit"},"ADD RECIPE")))}),R=(a(79),function(){var e=Object(c.useContext)(E),t=e.recipeInfo,a=e.setRecipeInfo;return Object(c.useEffect)((function(){window.scrollTo(0,0);var e=localStorage.getItem("recipe-info");e&&a(JSON.parse(e))}),[]),n.a.createElement("div",{className:"recipe-info-container"},t?n.a.createElement(c.Fragment,null,n.a.createElement("div",{className:"recipe-title-img"},n.a.createElement("h2",{className:"recipe-info-title"},t.title.toUpperCase()),t.imgUrl&&n.a.createElement("a",{target:"_blank",href:"".concat(t.imgUrl)},n.a.createElement("img",{className:"recipe-info-image",src:"".concat(t.imgUrl),alt:t.title})),t.sourceURL?n.a.createElement("a",{href:t.sourceURL,target:"_blank",className:"link-to-source"},"RECIPE SOURCE"):null),n.a.createElement("div",{className:"recipe-details"},n.a.createElement("ul",{className:"recipe-details-left"},n.a.createElement("li",null,"DESCRIPTION: ",n.a.createElement("p",null,t.description)),n.a.createElement("li",null,"COOKING TIME: ",n.a.createElement("p",null,t.cooking)),n.a.createElement("li",null,"YIELD: ",n.a.createElement("p",null,t.amount)),n.a.createElement("li",null,"INGREDIENTS: ",t.ings.map((function(e,t){return n.a.createElement("p",{key:t},t+1,". ",e)})))),n.a.createElement("ul",{className:"recipe-details-right"},n.a.createElement("li",null,"PREPARATION TIME: ",n.a.createElement("p",null,t.preparation)),n.a.createElement("li",null,"COOKWARE: ",n.a.createElement("p",null,t.cookware)),n.a.createElement("li",null,"COMMENTS: ",n.a.createElement("p",null,t.comments)),n.a.createElement("li",null,"DIRECTIONS: ",t.directions.map((function(e,t){return n.a.createElement("p",{key:t},t+1,". ",e)})))))):null)}),I=(a(20),function(e){var t=e.el,a=e.setIsRecipeClicked,l=Object(c.useContext)(E).setRecipeInfo;return n.a.createElement("div",{className:"recipe-card"},n.a.createElement("h3",{className:"recipe-title"},t.title.toUpperCase()),n.a.createElement("img",{className:"recipe-image",src:"".concat(t.imgUrl),alt:t.title}),n.a.createElement("p",{className:"recipe-category"},"Category: ",t.category),n.a.createElement("p",{className:"recipe-desc"},t.description),n.a.createElement("button",{onClick:function(){l(t),localStorage.setItem("recipe-info",JSON.stringify(t)),a(!0)},className:"to-recipe"},"TO RECIPE"))}),x=function(){var e=Object(p.f)(),t=Object(c.useContext)(E).recipes,a=Object(c.useState)(!1),l=Object(m.a)(a,2),r=l[0],s=l[1];return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.useEffect)((function(){r&&e.push("/recipe")})),n.a.createElement("div",{className:"pool-recipe"},t?n.a.createElement(c.Fragment,null,t.map((function(e,t){return n.a.createElement(I,{key:t,el:e,setIsRecipeClicked:s})}))):n.a.createElement("div",{className:"loading-message"},n.a.createElement("p",null,n.a.createElement(h.a,{icon:C.c,spin:!0,style:{color:"black"}})," Loading...")))},A=function(){var e=Object(p.f)(),t=Object(c.useContext)(E),a=t.sweets,l=t.setNavClass,r=Object(c.useState)(!1),s=Object(m.a)(r,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){l(window.location.pathname)}),[]),Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.useEffect)((function(){i&&e.push("/recipe")})),n.a.createElement("div",{className:"pool-recipe"},a?n.a.createElement(c.Fragment,null,a.map((function(e,t){return n.a.createElement(I,{key:t,el:e,setIsRecipeClicked:o})}))):n.a.createElement("div",{className:"loading-message"},n.a.createElement("p",null,n.a.createElement(h.a,{icon:C.c,spin:!0,style:{color:"black"}})," Loading...")))},T=function(){var e=Object(p.f)(),t=Object(c.useContext)(E),a=t.savourys,l=t.setNavClass,r=Object(c.useState)(!1),s=Object(m.a)(r,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){l(window.location.pathname)}),[]),Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.useEffect)((function(){i&&e.push("/recipe")})),n.a.createElement("div",{className:"pool-recipe"},a?n.a.createElement(c.Fragment,null,a.map((function(e,t){return n.a.createElement(I,{key:t,el:e,setIsRecipeClicked:o})}))):n.a.createElement("div",{className:"loading-message"},n.a.createElement("p",null,n.a.createElement(h.a,{icon:C.c,spin:!0,style:{color:"rgb(37, 110, 172)"}})," Loading...")))},U=(a(80),function(){var e=Object(c.useContext)(E).setNavClass;return Object(c.useEffect)((function(){e(window.location.pathname)}),[]),n.a.createElement("div",{className:"about"},n.a.createElement("div",{className:"box"},n.a.createElement("h2",{className:"box-title"},"EASY VEGAN"),n.a.createElement("h5",null,"My personal collection of easy vegan recipes.")),n.a.createElement("div",{className:"about-box"},n.a.createElement("h3",null,"- ABOUT PROJECT -"),n.a.createElement("img",{src:"../../assets/img/fruit-about.jpg",alt:"fruit"}),n.a.createElement("p",null,"After finishing a Web Development course and working on the final project with an excellent team, I have decided to build this little project on my own so I can showcase the skills that I've acquired. Having an app to gather all my favorite recipes is just a bonus!")))}),D=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(c.useState)(""),s=Object(m.a)(r,2),f=s[0],d=s[1],v=Object(c.useState)(""),O=Object(m.a)(v,2),h=O[0],C=O[1],y=Object(c.useState)(null),k=Object(m.a)(y,2),I=k[0],D=k[1],L=Object(c.useState)(null),P=Object(m.a)(L,2),G=P[0],Y=P[1],J=Object(c.useState)("/"),M=Object(m.a)(J,2),V=M[0],q=M[1],F=Object(c.useState)(""),W=Object(m.a)(F,2),_=W[0],B=W[1];Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.useEffect)((function(){window.innerWidth>768?B("desktop"):B("mobile")}),[]);var H=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}},a=[],c=[],n=[],e.prev=4,e.next=7,b.a.get("/recipes",t);case 7:return e.sent.data.recipes.map((function(e){a.push({title:e.title,description:e.description,imgUrl:e.imgUrl,category:e.category,preparation:e.preparation,cooking:e.cooking,amount:e.amount,ings:e.ings,directions:e.directions,cookware:e.cookware,comments:e.comments,sourceURL:e.sourceURL})})),C(a),e.next=12,b.a.get("/recipes",t);case 12:e.sent.data.recipes.map((function(e){"Sweet"===e.category?c.push({title:e.title,description:e.description,imgUrl:e.imgUrl,category:e.category,preparation:e.preparation,cooking:e.cooking,yield:e.yield,ings:e.ings,directions:e.directions,cookware:e.cookware,comments:e.comments,sourceURL:e.sourceURL}):n.push({title:e.title,description:e.description,imgUrl:e.imgUrl,category:e.category,preparation:e.preparation,cooking:e.cooking,yield:e.yield,ings:e.ings,directions:e.directions,cookware:e.cookware,comments:e.comments,sourceURL:e.sourceURL})})),l(c),d(n),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){H()}),[]),Object(c.useEffect)((function(){H()}),[G]),n.a.createElement("div",{className:"App"},n.a.createElement(E.Provider,{value:{sweets:a,setSweets:l,savourys:f,setSavourys:d,recipes:h,setRecipes:C,recipeInfo:G,setRecipeInfo:Y,newRecipe:I,setNewRecipe:D,fetchRecipes:H,navClass:V,setNavClass:q}},n.a.createElement(u.a,null,"desktop"===_?n.a.createElement(N,null):n.a.createElement(j,null),n.a.createElement(p.c,null,n.a.createElement(p.a,{path:"/",exact:!0,component:g}),n.a.createElement(p.a,{path:"/recipes",exact:!0,component:x}),n.a.createElement(p.a,{path:"/addrecipe",exact:!0,component:S}),n.a.createElement(p.a,{path:"/recipe",exact:!0,component:R}),n.a.createElement(p.a,{path:"/sweets",exact:!0,component:A}),n.a.createElement(p.a,{path:"/savourys",exact:!0,component:T}),n.a.createElement(p.a,{path:"/about",exact:!0,component:U}),n.a.createElement(p.a,{path:"/addrecipes",exact:!0,component:S})),n.a.createElement(w,null))))},L=a(41),P=a.n(L),G=a(42),Y=a.n(G);r.a.render(n.a.createElement("div",null,n.a.createElement(P.a,{url:Y.a}),n.a.createElement(D,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.f96a6d95.chunk.js.map