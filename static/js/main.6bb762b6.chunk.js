(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(7),r=c.n(n),a=(c(13),c.p+"static/media/logo.83464303.svg"),o=(c(14),c(0));var l=function(){return Object(o.jsxs)("header",{children:[Object(o.jsx)("img",{className:"logo",src:a}),Object(o.jsx)("i",{className:"fas fa-bars nav-btn",id:"nav-btn"}),Object(o.jsxs)("ul",{className:"nav",children:[Object(o.jsx)("li",{children:"Features"}),Object(o.jsx)("li",{children:"Pricing"}),Object(o.jsx)("li",{children:"Resources"})]}),Object(o.jsxs)("div",{className:"login-container",children:[Object(o.jsx)("p",{children:"Login"}),Object(o.jsx)("button",{children:"Sign up"})]})]})};c(16);var j=function(){return Object(o.jsxs)("div",{className:"nav-mobile-container",children:[Object(o.jsxs)("ul",{className:"nav-mobile",children:[Object(o.jsx)("li",{children:"Features"}),Object(o.jsx)("li",{children:"Pricing"}),Object(o.jsx)("li",{children:"Resources"})]}),Object(o.jsxs)("div",{className:"login-container-mobile",children:[Object(o.jsx)("p",{children:"Login"}),Object(o.jsx)("button",{children:"Sign up"})]})]})},d=(c(17),c.p+"static/media/illustration-working.c9b5ef54.svg");var b=function(){return Object(o.jsxs)("div",{className:"hero-section",children:[Object(o.jsx)("img",{className:"hero-image",src:d}),Object(o.jsxs)("div",{className:"hero-title-section",children:[Object(o.jsx)("h1",{children:"More than just shorter links"}),Object(o.jsx)("h2",{children:" Build your brand\u2019s recognition and get detailed insights on how your links are performing."}),Object(o.jsx)("button",{children:"Get Started"})]})]})},h=(c(18),c.p+"static/media/icon-brand-recognition.c349d3b6.svg"),u=c.p+"static/media/icon-detailed-records.265c8aea.svg",O=c.p+"static/media/icon-fully-customizable.a1532a74.svg";var x=function(){return Object(o.jsxs)("div",{className:"features-container",children:[Object(o.jsxs)("div",{className:"features-title",children:[Object(o.jsx)("h2",{children:"Advanced Statistics"}),Object(o.jsx)("p",{children:"Track how your links are performing across the web with our advanced statistics dashboard."})]}),Object(o.jsxs)("div",{className:"feature-cards",children:[Object(o.jsxs)("div",{className:"feature-card one",children:[Object(o.jsx)("div",{className:"feature-img-container",children:Object(o.jsx)("img",{src:h,alt:"brand-recognition"})}),Object(o.jsx)("h2",{children:"Brand Recognition"}),Object(o.jsx)("p",{children:"Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content."})]}),Object(o.jsxs)("div",{className:"feature-card two",children:[Object(o.jsx)("div",{className:"feature-img-container",children:Object(o.jsx)("img",{src:u,alt:"detailed-records"})}),Object(o.jsx)("h2",{children:"Detailed Records"}),Object(o.jsx)("p",{children:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."})]}),Object(o.jsxs)("div",{className:"feature-card three",children:[Object(o.jsx)("div",{className:"feature-img-container",children:Object(o.jsx)("img",{src:O,alt:"fully-customizable"})}),Object(o.jsx)("h2",{children:"Fully Customizable"}),Object(o.jsx)("p",{children:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."})]})]})]})};c(19);var m=function(){return Object(o.jsxs)("div",{className:"boost-section",children:[Object(o.jsx)("div",{className:"boost-mobile"}),Object(o.jsxs)("div",{className:"boost-inner",children:[Object(o.jsx)("h2",{children:"Boost your links today"}),Object(o.jsx)("button",{children:"Get Started"})]})]})},g=c(4),f=c(27),v=(c(20),c(8));var p=function(){var e=Object(s.useState)(""),t=Object(g.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(!1),r=Object(g.a)(n,2),a=r[0],l=r[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"shorten-outer-container",children:Object(o.jsxs)("div",{className:"shorten-section",children:[Object(o.jsx)("div",{className:"shorten-section-bg"}),Object(o.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),""===c?l(!0):(l(!1),Object(v.trackPromise)(fetch("https://api.shrtco.de/v2/shorten?url=".concat(c)).then((function(e){return e.json()})).then((function(e){localStorage.setItem(Object(f.a)(),JSON.stringify({original:c,shortUrl:e.result.full_short_link})),window.location.reload(!0)})).catch((function(e){console.log(e)}))))},children:[Object(o.jsx)("input",{className:a?"user-input active":"user-input",type:"text",placeholder:"shorten link at...",id:"shortenInput",onChange:function(e){var t=e.target.value;i(t)}}),Object(o.jsx)("p",{className:"error-message",children:"Please add a link"}),Object(o.jsx)("button",{id:"shorten-btn",children:"Shorten it!"})]})]})})})},N=(c(24),c.p+"static/media/icon-facebook.229c75a0.svg"),k=c.p+"static/media/icon-twitter.1d5c6d5e.svg",w=c.p+"static/media/icon-pinterest.a2d25ab4.svg",y=c.p+"static/media/icon-instagram.df587328.svg",S=c.p+"static/media/footer_logo.d37cd7a3.svg";var B=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"footer-inner",children:[Object(o.jsx)("div",{className:"footer-title",children:Object(o.jsx)("img",{src:S,alt:"footer-logo"})}),Object(o.jsxs)("div",{className:"footer-container features",children:[Object(o.jsx)("h5",{className:"f-title",children:"Features"}),Object(o.jsx)("p",{children:"Link Shortening"}),Object(o.jsx)("p",{children:"Branded Links"}),Object(o.jsx)("p",{children:"Analytics"})]}),Object(o.jsxs)("div",{className:"footer-container resources",children:[Object(o.jsx)("h5",{className:"f-title",children:"Resources"}),Object(o.jsx)("p",{children:"Blog"}),Object(o.jsx)("p",{children:"Developers"}),Object(o.jsx)("p",{children:"Support"})]}),Object(o.jsxs)("div",{className:"footer-container company",children:[Object(o.jsx)("h5",{className:"f-title",children:"Company"}),Object(o.jsx)("p",{children:"About"}),Object(o.jsx)("p",{children:"Our Team"}),Object(o.jsx)("p",{children:"Careers"}),Object(o.jsx)("p",{children:"Contact"})]}),Object(o.jsxs)("div",{class:"social-links",children:[Object(o.jsx)("img",{src:N,alt:"facebook"}),Object(o.jsx)("img",{src:k,alt:"twitter"}),Object(o.jsx)("img",{src:w,alt:"pinterest"}),Object(o.jsx)("img",{src:y,alt:"instagram"})]})]})})};var F=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(j,{}),Object(o.jsx)(b,{}),Object(o.jsx)(p,{}),Object(o.jsx)(x,{}),Object(o.jsx)(m,{}),Object(o.jsx)(B,{})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),i(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(F,{})}),document.getElementById("root")),C()}],[[25,1,2]]]);
//# sourceMappingURL=main.6bb762b6.chunk.js.map