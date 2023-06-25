(this.webpackJsonpstarlink=this.webpackJsonpstarlink||[]).push([[0],{175:function(t,e,a){},337:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),i=a(6),r=a.n(i),c=(a(175),a(22)),o=a(23),l=a(27),u=a(29),d=a.p+"static/media/starlink_logo.a7afe33a.svg",h=a(5),j=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(h.jsx)("p",{className:"title",children:"StarLink Tracker"})]})}}]),a}(n.Component),p=j,b=a(167),f=a(56),m=a(67),g=a.n(m),O=a(346),v=a(347),x="Z4LPEL-X77V35-BYZ4XZ-5239",y=a(351),w=a(354),L=a(355),k=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).showSatellite=function(e){e.preventDefault(),t.props.form.validateFields((function(e,a){e||t.props.onShow(a)}))},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.form.getFieldDecorator;return Object(h.jsxs)(y.a,Object(f.a)(Object(f.a)({},{labelCol:{xs:{span:24},sm:{span:11}},wrapperCol:{xs:{span:24},sm:{span:13}}}),{},{className:"sat-setting",onSubmit:this.showSatellite,children:[Object(h.jsx)(y.a.Item,{label:"Longitude(degrees)",children:t("longitude",{rules:[{required:!0,message:"Please input your Longitude"}]})(Object(h.jsx)(w.a,{min:-180,max:180,style:{width:"100%"},placeholder:"Please input Longitude"}))}),Object(h.jsx)(y.a.Item,{label:"Latitude(degrees)",children:t("latitude",{rules:[{required:!0,message:"Please input your Latitude"}]})(Object(h.jsx)(w.a,{placeholder:"Please input Latitude",min:-90,max:90,style:{width:"100%"}}))}),Object(h.jsx)(y.a.Item,{label:"Elevation(meters)",children:t("elevation",{rules:[{required:!0,message:"Please input your Elevation"}]})(Object(h.jsx)(w.a,{placeholder:"Please input Elevation",min:-413,max:8850,style:{width:"100%"}}))}),Object(h.jsx)(y.a.Item,{label:"Altitude(degrees)",children:t("altitude",{rules:[{required:!0,message:"Please input your Altitude"}]})(Object(h.jsx)(w.a,{placeholder:"Please input Altitude",min:0,max:90,style:{width:"100%"}}))}),Object(h.jsx)(y.a.Item,{label:"Duration(secs)",children:t("duration",{rules:[{required:!0,message:"Please input your Duration"}]})(Object(h.jsx)(w.a,{placeholder:"Please input Duration",min:0,max:90,style:{width:"100%"}}))}),Object(h.jsx)(y.a.Item,{className:"show-nearby",children:Object(h.jsx)(L.a,{type:"primary",htmlType:"submit",style:{textAlign:"center"},children:"Find Nearby Satellite"})})]}))}}]),a}(n.Component),S=y.a.create({name:"satellite-setting"})(k),D=a(158),N=a(349),I=a(356),P=a(344),C=a.p+"static/media/satellite.3dadd676.svg",M=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={selected:[]},t.showMap=function(){var e=t.state.selected;t.props.onShowMap(e)},t.onChange=function(e){var a=e.target,n=a.dataInfo,s=a.checked,i=t.state.selected,r=t.addOrRemove(n,s,i);t.setState({selected:r})},t.addOrRemove=function(t,e,a){var n=a.some((function(e){return e.satid===t.satid}));return e&&!n&&a.push(t),!e&&n&&(a=a.filter((function(e){return e.satid!==t.satid}))),a},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.state.selected,a=this.props,n=a.satInfo,s=a.isLoad,i=n?n.above:[];return Object(h.jsxs)("div",{className:"sat-list-box",children:[Object(h.jsx)(L.a,{className:"sat-list-btn",size:"large",disabled:0===e.length,onClick:this.showMap,children:"Track on the map"}),Object(h.jsx)("hr",{}),s?Object(h.jsx)("div",{className:"spin-box",children:Object(h.jsx)(D.a,{tip:"Loading...",size:"large"})}):Object(h.jsx)(N.a,{className:"sat-list",itemLayout:"horizontal",dataSource:i,renderItem:function(e){return Object(h.jsx)(N.a.Item,{actions:[Object(h.jsx)(I.a,{dataInfo:e,onChange:t.onChange})],children:Object(h.jsx)(N.a.Item.Meta,{avatar:Object(h.jsx)(P.a,{src:C,size:"large",alt:"satellite"}),title:Object(h.jsx)("p",{children:e.satname}),description:"Launch Date: ".concat(e.launchDate)})})}})]})}},{key:"componentDidUpdate",value:function(t,e,a){t.satInfo!==this.props.satInfo&&this.setState({selected:[]})}}]),a}(n.Component),T=M,A=a(166),E=a(350),F=a(357),R=a(353),B=a(348),q=a(359),z=a(358),W=a(352),Z=960,H=600,J=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).track=function(e){if(!e[0].hasOwnProperty("positions"))throw new Error("no position data");var a=e[0].positions.length,n=(t.props.observerData.duration,t.map.context2),s=new Date,i=0,r=setInterval((function(){var c=new Date,o=0===i?0:c-s,l=new Date(s.getTime()+60*o);if(n.clearRect(0,0,Z,H),n.font="bold 14px sans-serif",n.fillStyle="#333",n.textAlign="center",n.fillText(Object(W.a)(l),480,10),i>=a)return clearInterval(r),t.setState({isDrawing:!1}),void(document.getElementsByClassName("hint")[0].innerHTML="");e.forEach((function(e){var a=e.info,n=e.positions;t.drawSat(a,n[i])})),i+=60}),1e3)},t.drawSat=function(e,a){var n=a.satlongitude,s=a.satlatitude;if(n&&s){var i=e.satname.match(/\d+/g).join(""),r=t.map,c=r.projection,o=r.context2,l=c([n,s]);o.fillStyle=t.color(i),o.beginPath(),o.arc(l[0],l[1],4,0,2*Math.PI),o.fill(),o.font="bold 11px sans-serif",o.textAlign="center",o.fillText(i,l[0],l[1]+14)}},t.generateMap=function(e){var a=Object(E.a)().scale(170).translate([480,300]).precision(.1),n=Object(F.a)(),s=Object(B.a)(t.refMap.current).attr("width",Z).attr("height",H),i=Object(B.a)(t.refTrack.current).attr("width",Z).attr("height",H),r=s.node().getContext("2d"),c=i.node().getContext("2d"),o=Object(R.a)().projection(a).context(r);e.forEach((function(t){r.fillStyle="#B3DDEF",r.strokeStyle="#000",r.globalAlpha=.7,r.beginPath(),o(t),r.fill(),r.stroke(),r.strokeStyle="rgba(220, 220, 220, 0.1)",r.beginPath(),o(n()),r.lineWidth=.1,r.stroke(),r.beginPath(),r.lineWidth=.5,o(n.outline()),r.stroke()})),t.map={projection:a,graticule:n,context:r,context2:c}},t.state={isLoading:!1,isDrawing:!1},t.map=null,t.color=z.a(q.a),t.refMap=s.a.createRef(),t.refTrack=s.a.createRef(),t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;g.a.get("https://unpkg.com/world-atlas@1/world/110m.json").then((function(e){var a=e.data,n=Object(A.a)(a,a.objects.countries).features;t.generateMap(n)})).catch((function(t){console.log("err in fetch map data ",t.message)}))}},{key:"componentDidUpdate",value:function(t,e,a){var n=this;if(t.satData!==this.props.satData){var s=this.props.observerData,i=s.latitude,r=s.longitude,c=s.elevation,o=(s.altitude,60*s.duration);this.setState({isLoading:!0});var l=this.props.satData.map((function(t){var e=t.satid,a="/api/".concat("rest/v1/satellite/positions","/").concat(e,"/").concat(i,"/").concat(r,"/").concat(c,"/").concat(o,"/&apiKey=").concat(x);return g.a.get(a)}));Promise.all(l).then((function(t){var a=t.map((function(t){return t.data}));(n.setState({isLoading:!1,isDrawing:!0}),e.isDrawing)?document.getElementsByClassName("hint")[0].innerHTML="Please wait for these satellite animation to finish before selection new ones!":n.track(a)})).catch((function(t){console.log("err in fetch satellite position -> ",t.message)}))}}},{key:"render",value:function(){var t=this.state.isLoading;return Object(h.jsxs)("div",{className:"map-box",children:[t?Object(h.jsx)("div",{className:"spinner",children:Object(h.jsx)(D.a,{tip:"Loading...",size:"large"})}):null,Object(h.jsx)("canvas",{className:"map",ref:this.refMap}),Object(h.jsx)("canvas",{className:"track",ref:this.refTrack}),Object(h.jsx)("div",{className:"hint"})]})}}]),a}(n.Component),K=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).showMap=function(e){t.setState((function(t){return Object(f.a)(Object(f.a)({},t),{},{satList:Object(b.a)(e)})}))},t.showNearbySatellite=function(e){t.setState({isLoadingList:!0,setting:e}),t.fetchSatellite(e)},t.fetchSatellite=function(e){var a=e.latitude,n=e.longitude,s=e.elevation,i=e.altitude,r="/api/".concat("rest/v1/satellite/above","/").concat(a,"/").concat(n,"/").concat(s,"/").concat(i,"/").concat("52","/&apiKey=").concat(x);t.setState({isLoadingList:!0}),g.a.get(r).then((function(e){console.log(e.data),t.setState({satInfo:e.data,isLoadingList:!1})})).catch((function(t){console.log("err in fetch satellite -> ",t)}))},t.state={satInfo:null,satList:null,setting:null,isLoadingList:!1},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state,e=t.isLoadingList,a=t.satInfo,n=t.satList,s=t.setting;return Object(h.jsxs)(O.a,{className:"main",children:[Object(h.jsxs)(v.a,{span:8,className:"left-side",children:[Object(h.jsx)(S,{onShow:this.showNearbySatellite}),Object(h.jsx)(T,{isLoad:e,satInfo:a,onShowMap:this.showMap})]}),Object(h.jsx)(v.a,{span:16,className:"right-side",children:Object(h.jsx)(J,{satData:n,observerData:s})})]})}}]),a}(n.Component),U=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("footer",{className:"footer",children:"\xa92020 StarLink Tracker. All Rights Reserved. Website Made by Your name"})}}]),a}(n.Component),X=U;var Y=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{}),Object(h.jsx)(K,{}),Object(h.jsx)(X,{})]})},V=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,360)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),n(t),s(t),i(t),r(t)}))};r.a.render(Object(h.jsx)(Y,{}),document.getElementById("root")),V()}},[[337,1,2]]]);
//# sourceMappingURL=main.a7f5b319.chunk.js.map