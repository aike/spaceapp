(this.webpackJsonpspaceapp=this.webpackJsonpspaceapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),c=a(7),r=a.n(c),n=(a(13),a(1)),l=a(2),m=a(4),o=a(3),d=a(5),h=(a(14),function(e){function t(e){return Object(n.a)(this,t),Object(m.a)(this,Object(o.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.item[this.props.idx];return s.a.createElement("div",{className:"card_item",onClick:this.props.sel.bind(this,this.props.idx)},s.a.createElement("div",{className:"card_ttl"},e.title),s.a.createElement("div",{className:"card_own1"},"current owner:"),s.a.createElement("div",{className:"card_own2"},e.own),s.a.createElement("img",{className:"card_img",src:"images/"+e.img+".png"}),s.a.createElement("div",{className:"card_prc"},e.price),s.a.createElement("div",{className:"card_desc"},e.desc),s.a.createElement("div",{className:"card_btn"},"BUY NOW!"))}}]),t}(s.a.Component)),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={buy:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"buy",value:function(){console.log("buy"),this.setState({buy:!0})}},{key:"handleClick",value:function(e){console.log("click => "+e)}},{key:"render",value:function(){return console.log(this.props),s.a.createElement("div",{className:"detail"},s.a.createElement("div",{className:"det_left"},s.a.createElement("div",{className:"det_ttl"},this.props.item.title),2===this.props.idx?s.a.createElement("iframe",{className:"det_mov",src:"https://www.youtube.com/embed/ppToj28jAlM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):s.a.createElement("img",{className:"det_img",src:"images/"+this.props.item.img+".png"})),s.a.createElement("div",{className:"det_right"},s.a.createElement("div",{className:"det_forsale"},"FOR SALE!"),s.a.createElement("div",{className:"det_prc"},this.props.item.price),s.a.createElement("div",{className:"det_dsc"},"Original ID: ",this.props.item.orgid,s.a.createElement("br",null),"Part: ",this.props.item.part,s.a.createElement("br",null),"Scale: ",this.props.item.scale,s.a.createElement("br",null),"Weight: ",this.props.item.weight,s.a.createElement("br",null),"Manufacturer: ",this.props.item.manufacturer,s.a.createElement("br",null),"Comment: ",this.props.item.desc),s.a.createElement("div",{className:"det_back",onClick:this.props.sel.bind(this,-1)},"BACK"),s.a.createElement("div",{className:"det_btn",onClick:this.buy.bind(this)},"BUY NOW!")),this.state.buy?s.a.createElement("div",{className:"det_congrat"},"Congratulations! You are the owner of this debri-land"):s.a.createElement("div",null))}}]),t}(s.a.Component),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={mode:"top",selected:1,item:[{title:"Debri-Land 1",own:"John",img:"d01",price:"$199.00",orgid:"CCSM-804",part:"Body cover",scale:"3.9 x 2.2 m",weight:"8,510 kg",manufacturer:"NASA",desc:"Marked with U.S. Flag"},{title:"Debri-Land 2",own:"Tom",img:"d02",price:"$99.00",orgid:"CCSM-804",part:"Engine nozzle",scale:"1.9 x 3.0 m",weight:"1,820 kg",manufacturer:"NASA",desc:""},{title:"Debri-Land 3",own:"Alice",img:"dtori",price:"$299.00",orgid:"SATM-22",part:"Heat fin",scale:"0.9 x 1.8 m",weight:"640 kg",manufacturer:"JAXA",desc:"Fragile"}]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"sel",value:function(e){e<0?this.setState({mode:"top",selected:e}):this.setState({mode:"detail",selected:e})}},{key:"render",value:function(){switch(this.state.mode){case"top":return s.a.createElement("div",{className:"App"},s.a.createElement("img",{className:"logo",src:"images/logo2.jpeg"}),s.a.createElement("div",{className:"servicetitle"},"Happy Debriday!"),s.a.createElement("div",{className:"card pattern"},s.a.createElement(h,{idx:0,item:this.state.item,sel:this.sel.bind(this)}),s.a.createElement(h,{idx:1,item:this.state.item,sel:this.sel.bind(this)}),s.a.createElement(h,{idx:2,item:this.state.item,sel:this.sel.bind(this)}),s.a.createElement(h,{idx:0,item:this.state.item,sel:this.sel.bind(this)}),s.a.createElement(h,{idx:1,item:this.state.item,sel:this.sel.bind(this)}),s.a.createElement(h,{idx:2,item:this.state.item,sel:this.sel.bind(this)})));case"detail":return s.a.createElement(p,{idx:this.state.selected,item:this.state.item[this.state.selected],sel:this.sel.bind(this)});default:return s.a.createElement("div",{className:"App"},"Hello")}}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.d916f5c4.chunk.js.map