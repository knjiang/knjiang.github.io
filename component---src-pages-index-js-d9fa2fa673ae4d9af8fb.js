(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=(a(147),a(158)),s=(a(184),a(185),a(154));t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(s.a,{title:"Home"}),n.a.createElement("h1",{style:{fontWeight:"normal",fontSize:22,textAlign:"center"}},"Hello, I'm Ken."),n.a.createElement("p",{style:{fontWeight:"normal",fontSize:20,textAlign:"center"}},"I'm a sophomore studying Computer Science at the University at Buffalo. My current interests are in Web Development and Data Science. Feel free to browse through my website! ",n.a.createElement("br",null)," ",n.a.createElement("br",null)," If you want to get in touch, ",n.a.createElement("a",{href:"mailto:kjiang1991@gmail.com",style:{textDecoration:"none",color:"#0d7373"}},"email")," :)"))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(33),d=a.n(o);a.d(t,"a",function(){return d.a});a(149);var l=n.a.createContext({}),c=function(e){return n.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},149:function(e,t,a){var i;e.exports=(i=a(153))&&i.default||i},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Ken Jiang"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(55),d=a(2),l=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,a){"use strict";var i=a(155),n=a(0),r=a.n(n),s=a(4),o=a.n(s),d=a(162),l=a.n(d);function c(e){var t=e.description,a=e.lang,n=e.meta,s=e.title,o=i.data.site,d=t||o.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(n)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Ken Jiang",description:"Website with my info",author:"@knjiang"}}}}},158:function(e,t,a){"use strict";var i=a(152),n=a(0),r=a.n(n),s=a(4),o=a.n(s),d=a(147),l=function(e){e.siteTitle;return r.a.createElement("header",{style:{marginBottom:"1.45rem",maxHeight:70}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textAlign:"right"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(d.a,{to:"/",style:{color:"#0d7373",textDecoration:"none",fontSize:30,paddingRight:682}},"ken jiang"),r.a.createElement(d.a,{to:"/projects",style:{color:"#0d7373",textDecoration:"none",fontSize:30}},"projects"))))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var c=l,u=(a(161),function(e){var t=e.children;return r.a.createElement(d.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",{style:{textAlign:"center"}},r.a.createElement("a",{href:"https://drive.google.com/file/d/1GQjAN0pmEjKCi3BaTsfRN08PZMxLk6Z0/view?usp=sharing",style:{color:"#0d7373",textDecoration:"none",fontSize:20}},"resume "),"-",r.a.createElement("a",{href:"https://github.com/knjiang",style:{color:"#0d7373",textDecoration:"none",fontSize:20}}," github "),"-",r.a.createElement("a",{href:"https://www.linkedin.com/in/kjiang2000/",style:{color:"#0d7373",textDecoration:"none",fontSize:20}}," linkedin"))))},data:i})});u.propTypes={children:o.a.node.isRequired};t.a=u},184:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},185:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var n,r=i(a(7)),s=i(a(36)),o=i(a(76)),d=i(a(74)),l=i(a(0)),c=i(a(4)),u=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g=new WeakMap;var h=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),g.set(e,t)),function(){a.unobserve(e),g.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+d+a+n+t+s+r+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=l.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,s=e.onLoad,c=e.onError,u=e.nativeLazyLoadSupported,f=e.loading,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),g={};return u&&(g.loading=f),l.default.createElement("img",(0,d.default)({sizes:a,srcSet:i,src:n},p,{onLoad:s,onError:c,ref:t},g,{style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,r=t.fadeIn,o=!1,d=p(t);!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(i=!0,o=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var c=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:n,fadeIn:r,hasNoScript:c,seenBefore:d,nativeLazyLoadSupported:o},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,S=e.durationFadeIn,v=e.Tag,w=e.itemProp,E=(e.critical,u(this.props).loading);var L=this.state.nativeLazyLoadSupported,z=this.state.imgLoaded||!1===this.state.fadeIn,R=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,d.default)({opacity:z?1:0,transition:R?"opacity "+S+"ms":"none"},o),A="boolean"==typeof y?"lightgray":y,x={transitionDelay:S+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},R&&x,o,f),O={title:t,alt:this.state.isVisible?"":a,style:T,className:p};if(g){var W=g;return l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),A&&l.default.createElement(v,{title:t,style:(0,d.default)({backgroundColor:A,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&x)}),W.base64&&l.default.createElement(b,(0,d.default)({src:W.base64},O)),W.tracedSVG&&l.default.createElement(b,(0,d.default)({src:W.tracedSVG},O)),this.state.isVisible&&l.default.createElement("picture",null,W.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:W.srcSetWebp,sizes:W.sizes}),l.default.createElement(b,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,nativeLazyLoadSupported:L,loading:E})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,d.default)({alt:a,title:t,loading:E},W))}}))}if(h){var q=h,j=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},r);return"inherit"===r.display&&delete j.display,l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},A&&l.default.createElement(v,{title:t,style:(0,d.default)({backgroundColor:A,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},R&&x)}),q.base64&&l.default.createElement(b,(0,d.default)({src:q.base64},O)),q.tracedSVG&&l.default.createElement(b,(0,d.default)({src:q.tracedSVG},O)),this.state.isVisible&&l.default.createElement("picture",null,q.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:q.srcSetWebp,sizes:q.sizes}),l.default.createElement(b,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,nativeLazyLoadSupported:L,loading:E})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,d.default)({alt:a,title:t,loading:E},q))}}))}return null},t}(l.default.Component);y.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:S,sizes:v,fixed:S,fluid:v,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-d9fa2fa673ae4d9af8fb.js.map