(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(158),o=n(154);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),s=n.n(c);n.d(t,"a",function(){return s.a});n(149);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Ken Jiang"}}}}},153:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,n){"use strict";var a=n(155),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(162),l=n.n(s);function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.title,c=a.data.site,s=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Ken Jiang",description:"Website with my info",author:"@knjiang"}}}}},158:function(e,t,n){"use strict";var a=n(152),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(147),l=function(e){e.siteTitle;return i.a.createElement("header",{style:{marginBottom:"1.45rem",maxHeight:70}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textAlign:"left"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"#0d7373",textDecoration:"none",fontSize:30}},"home"),i.a.createElement(s.a,{to:"/projects",style:{color:"#0d7373",textDecoration:"none",fontSize:30,paddingLeft:30}},"projects"))))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};var u=l,d=(n(161),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",{style:{textAlign:"center"}},i.a.createElement("a",{href:"https://drive.google.com/file/d/1GQjAN0pmEjKCi3BaTsfRN08PZMxLk6Z0/view?usp=sharing",style:{color:"#0d7373",textDecoration:"none",fontSize:20}},"resume "),"-",i.a.createElement("a",{href:"https://github.com/knjiang",style:{color:"#0d7373",textDecoration:"none",fontSize:20}}," github "),"-",i.a.createElement("a",{href:"https://www.linkedin.com/in/kjiang2000/",style:{color:"#0d7373",textDecoration:"none",fontSize:20}}," linkedin"))))},data:a})});d.propTypes={children:c.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-404-js-aa4e13fad9ceec8f6c38.js.map