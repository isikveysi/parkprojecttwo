(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{72:function(e,s,a){"use strict";a.r(s),a.d(s,"default",(function(){return u}));var t=a(0),n=a(47),i=a.n(n),c=a(49),l=a(50),r=a(33),m=a(34),j=a(36),d=a(35),o=a(1),h=a(51),b=a.n(h),u=function(e){Object(j.a)(a,e);var s=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var t=arguments.length,n=new Array(t),m=0;m<t;m++)n[m]=arguments[m];return(e=s.call.apply(s,[this].concat(n))).state={name:"",email:"",konu:"",message:""},e.onHandler=function(s){s.preventDefault();var a=s.target.name,t=s.target.value;e.setState(Object(l.a)({},a,t))},e.onSubmit=function(){var s=Object(c.a)(i.a.mark((function s(a){return i.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:a.preventDefault(),b.a.post("/iletisim",e.state).then((function(s){e.setState({name:"",email:"",konu:"",message:""})})).catch((function(e){console.log("mail g\xf6nderme ks\u0131m\u0131",e)}));case 2:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){function e(e){return new Promise((function(s,a){var t=document.createElement("script");t.src=e,t.addEventListener("load",(function(){s()})),t.addEventListener("error",(function(e){a(e)})),document.body.appendChild(t),document.body.removeChild(t)}))}e("/js/theme.js"),e("/js/theme.init.js"),e("/js/views/view.contact.js"),e("/vendor/rs-plugin/js/jquery.themepunch.tools.min.js"),e("/vendor/rs-plugin/js/jquery.themepunch.revolution.min.js")}},{key:"render",value:function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("section",{className:"page-header",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsx)("h1",{children:"Ileti\u015fim Bilgilerimiz"})})})})}),Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:"col-md-6",children:[Object(t.jsxs)("div",{className:"alert alert-success hidden mt-lg",id:"contactSuccess",children:[Object(t.jsx)("strong",{children:"Success!"})," Your message has been sent to us."]}),Object(t.jsxs)("div",{className:"alert alert-danger hidden mt-lg",id:"contactError",children:[Object(t.jsx)("strong",{children:"Error!"})," There was an error sending your message.",Object(t.jsx)("span",{className:"font-size-xs mt-sm display-block",id:"mailErrorMessage"})]}),Object(t.jsxs)("h2",{className:"mb-sm mt-sm",children:[Object(t.jsx)("strong",{})," "]}),Object(t.jsxs)("h4",{className:"mb-sm mt-sm",children:[Object(t.jsx)("a",{children:Object(t.jsx)("strong",{children:"ILETISIM FORMU"})})," "]}),Object(t.jsxs)("form",{id:"contactForm",children:[Object(t.jsx)("div",{className:"row",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsxs)("div",{className:"col-md-6",children:[Object(t.jsx)("label",{children:"Isiminiz *"}),Object(t.jsx)("input",{type:"text","data-msg-required":"L\xfctfen isminizi giriniz",maxLength:100,className:"form-control",name:"name",value:this.state.name,onChange:this.onHandler,id:"name",required:!0})]}),Object(t.jsxs)("div",{className:"col-md-6",children:[Object(t.jsx)("label",{children:"Email addresiniz *"}),Object(t.jsx)("input",{type:"email","data-msg-required":"L\xfctfen email adresinizi giriniz","data-msg-email":"L\xfctfen ge\xe7erli bir email adresi giriniz",maxLength:100,className:"form-control",name:"email",value:this.state.email,onChange:this.onHandler,id:"email",required:!0})]})]})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"form-group",children:Object(t.jsxs)("div",{className:"col-md-12",children:[Object(t.jsx)("label",{children:"Konu Ba\u015fl\u0131\u011f\u0131"}),Object(t.jsx)("input",{type:"text","data-msg-required":"L\xfctfen konu ba\u015fl\u0131\u011f\u0131n\u0131z\u0131 giriniz",maxLength:100,className:"form-control",name:"konu",value:this.state.konu,onChange:this.onHandler,id:"subject",required:!0})]})})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"form-group",children:Object(t.jsxs)("div",{className:"col-md-12",children:[Object(t.jsx)("label",{children:"Mesaj\u0131n\u0131z *"}),Object(t.jsx)("textarea",{maxLength:5e3,"data-msg-required":"L\xfctfen mesaj\u0131nz\u0131 yaz\u0131n\u0131z",rows:10,className:"form-control",name:"message",value:this.state.message,onChange:this.onHandler,id:"message",required:""})]})})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsx)("input",{type:"submit",onClick:this.onSubmit,className:"btn btn-primary btn-lg mb-xlg"})})})]})]}),Object(t.jsxs)("div",{className:"col-md-6",children:[Object(t.jsxs)("h4",{className:"heading-primary",children:["PARK HUKUK ",Object(t.jsx)("strong",{children:"&"})," DANISMANLIK"]}),Object(t.jsx)("p",{children:"Alan\u0131nda deneyimli Hukuk\xe7ulardan ve destek personellerinden olu\u015fan, kalabal\u0131k bir ekiple \xe7al\u0131\u015fmaktay\u0131z. Uzman ekibimizle; m\xfcvekkillerimize, dinamik \xe7al\u0131\u015fma ko\u015fullar\u0131na uyum sa\u011flamalar\u0131nda, \xe7al\u0131\u015fma ortam\u0131n\u0131 mevzuata uygun bir \u015fekilde d\xfczenlemelerinde ve olas\u0131 denetimlere haz\u0131rlanmalar\u0131nda yol g\xf6steriyoruz."}),Object(t.jsx)("hr",{}),Object(t.jsx)("h4",{className:"heading-primary mt-lg",children:" ILETISIM BILGILERIMIZ "}),Object(t.jsxs)("ul",{className:"list list-icons list-icons-style-3 mt-xlg",children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{className:"fa fa-map-marker"})," ",Object(t.jsx)("strong",{children:"Adres:"}),"  Kartaltepe Mahallesi Lavanta \xc7i\xe7e\u011fi Sokak No:3 D: 1  34145 Bak\u0131rk\xf6y/\u0130stanbul"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{className:"fa fa-phone"})," ",Object(t.jsx)("strong",{children:"Telefon:"}),"(0505) 292 60 25"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{className:"fa fa-phone"})," ",Object(t.jsx)("strong",{children:"Telefon:"}),"(0532) 596 48 21"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{className:"fa fa-envelope"})," ",Object(t.jsx)("strong",{children:"Email:"})," ",Object(t.jsx)("a",{href:"mailto:mail@example.com",children:"av.mehmettunc@hotmail.com"})]})]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("h4",{className:"heading-primary",children:["\xc7al\u0131\u015fma ",Object(t.jsx)("strong",{children:"Saatlerimiz"})]}),Object(t.jsxs)("ul",{className:"list list-icons list-dark mt-xlg",children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{className:"fa fa-clock-o"})," Pazartesi - Cuma ",Object(t.jsx)("strong",{children:"09:00 - 18:00"}),"  "]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{className:"fa fa-clock-o"})," Cumartesi   ",Object(t.jsx)("strong",{children:"10:00 - 13:00"})]})]})]})]})})]})}}]),a}(o.Component)}}]);
//# sourceMappingURL=8.930e52fd.chunk.js.map