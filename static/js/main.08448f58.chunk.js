(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{158:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);a(82),a(108),a(110),a(111),a(113),a(114),a(115),a(116),a(117),a(118),a(119),a(120),a(122),a(123),a(124),a(125),a(126),a(127),a(128),a(129),a(130),a(131),a(133),a(134),a(135),a(136),a(137),a(138),a(139),a(140),a(141),a(142),a(143),a(144),a(145),a(146),a(147),a(148),a(149),a(150);var n=a(0),l=a.n(n),c=a(35),r=a.n(c),s=a(31),m=a.n(s),i=a(16),o=a(17),u=a(20),E=a(19),d=a(24),v=a.n(d),N=a(27),p=a.n(N),g=(a(158),a(18)),f=function(e){Object(u.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={name:"user"},m.a.subscribe((function(e){"VKWebAppGetUserInfoResult"===e.detail.type&&n.setState({name:e.detail.data.first_name})})),m.a.send("VKWebAppGetUserInfo"),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=(t.startGame,t.showRules),n=t.showRes;return console.log(this.props),l.a.createElement("section",{className:"menu"},l.a.createElement("div",{className:"row justify-content-center nav"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("img",{src:v.a,alt:""})),l.a.createElement("div",{className:"col-lg-7"},l.a.createElement("img",{src:p.a,alt:""}))),l.a.createElement("div",{className:"row justify-content-center infoData"},l.a.createElement("div",{className:"col-lg-9"},l.a.createElement("p",null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",l.a.createElement("span",null,this.state.name),". \u0418\u0433\u0440\u0430\u0439 \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0439 \u0441\u043a\u0438\u0434\u043a\u0438 \u0434\u043e ",l.a.createElement("span",{className:"special"},"70%"),l.a.createElement("br",null),"\u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 Zewa \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430\u0445 \u041c\u0430\u0433\u043d\u0438\u0442. \u041f\u0440\u043e\u0439\u0434\u0438 \u0432\u0441\u0435 \u043a\u0432\u0435\u0441\u0442\u044b \u0438 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0439 \u0432 \u0440\u043e\u0437\u044b\u0433\u0440\u044b\u0448\u0435 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u043e\u0433\u043e \u043a\u0443\u043f\u043e\u043d\u0430 \u041c\u0430\u0433\u043d\u0438\u0442 \u043d\u0430 ",l.a.createElement("span",{className:"special"},"3000 \u0440\u0443\u0431\u043b\u0435\u0439"),"."))),l.a.createElement("div",{className:"row justify-content-center navigation"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-auto"},l.a.createElement("button",{className:"selectionBtn pink",onClick:function(){return e.props.startGame()}},"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-auto"},l.a.createElement("button",{className:"selectionBtn",onClick:function(){return n()}},"\u0420\u0435\u043a\u043e\u0440\u0434\u044b"))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-auto"},l.a.createElement("button",{className:"selectionBtn",onClick:function(){return a()}},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-auto"},l.a.createElement("button",{className:"selectionBtn"},"\u0412\u044b\u0445\u043e\u0434"))))))}}]),a}(l.a.Component),A=Object(g.b)((function(e){return{rules:e.store.rules,start:e.store.start,results:e.store.results}}),(function(e){return{startGame:function(){return e({type:"START_GAME",payload:!0})},showRules:function(){return e({type:"SHOW_RULES",payload:!0})},showRes:function(){return e({type:"SHOW_RESULTS",payload:!0})}}}))(f),b=(a(164),a(78)),y=a.n(b),j=a(28),h=a.n(j),w=function(e){Object(u.a)(a,e);var t=Object(E.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"selectQwest mainBG container"},l.a.createElement("div",{className:"row justify-content-between nav"},l.a.createElement("div",{className:"col-lg-2"},l.a.createElement("img",{src:v.a})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("img",{src:p.a})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("img",{src:y.a}))),l.a.createElement("div",{className:"row justify-content-between"},l.a.createElement("div",{className:"col-lg-5"},l.a.createElement("h2",null,"\u0412\u044b\u0431\u0435\u0440\u0438 \u043a\u0432\u0435\u0441\u0442 ")),l.a.createElement("div",{className:"col-lg-5 description"},l.a.createElement("div",{className:"explanationBox  "},l.a.createElement("div",{className:"row blue align-items-center"},l.a.createElement("div",{className:"col-md-3 numeric"},l.a.createElement("p",null,"5")),l.a.createElement("div",{className:"col-md-11"},l.a.createElement("p",null,"\u043a\u0432\u0435\u0441\u0442\u043e\u0432 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0439\u0442\u0438",l.a.createElement("br",null),"\u0434\u043e \u0440\u043e\u0437\u044b\u0433\u0440\u044b\u0448\u0430 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u043e\u0433\u043e",l.a.createElement("br",null),"\u043a\u0443\u043f\u043e\u043d\u0430 \u043d\u0430 3000 \u0440\u0443\u0431\u043b\u0435\u0439")))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-auto"},l.a.createElement("p",null,"\u0421 \u043a\u0430\u0436\u0434\u044b\u043c \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043d\u044b\u043c \u043a\u0432\u0435\u0441\u0442\u043e\u043c",l.a.createElement("br",null),"\u0442\u0432\u043e\u044f \u0441\u043a\u0438\u0434\u043a\u0430 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f"))),l.a.createElement("div",{className:"row justify-content-center quest-content--inner"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"quest-container "},l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{src:h.a,alt:""})),l.a.createElement("div",{className:"header"},l.a.createElement("h4",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e",l.a.createElement("br",null),"\u043a\u0432\u0435\u0441\u0442\u0430 \u0417\u0435\u0432\u0430 ")),l.a.createElement("button",{className:"playBtn"},"\u0418\u0433\u0440\u0430\u0442\u044c"))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"quest-container disabled"},l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{src:h.a,alt:""})),l.a.createElement("div",{className:"header"},l.a.createElement("h4",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e",l.a.createElement("br",null),"\u043a\u0432\u0435\u0441\u0442\u0430 \u0417\u0435\u0432\u0430 ")),l.a.createElement("button",{className:"playBtn"},"\u0418\u0433\u0440\u0430\u0442\u044c"))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"quest-container disabled"},l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{src:h.a,alt:""})),l.a.createElement("div",{className:"header"},l.a.createElement("h4",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e",l.a.createElement("br",null),"\u043a\u0432\u0435\u0441\u0442\u0430 \u0417\u0435\u0432\u0430 ")),l.a.createElement("button",{className:"playBtn"},"\u0418\u0433\u0440\u0430\u0442\u044c"))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"quest-container disabled"},l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{src:h.a,alt:""})),l.a.createElement("div",{className:"header"},l.a.createElement("h4",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043e\u0433\u043e",l.a.createElement("br",null),"\u043a\u0432\u0435\u0441\u0442\u0430 \u0417\u0435\u0432\u0430 ")),l.a.createElement("button",{className:"playBtn"},"\u0418\u0433\u0440\u0430\u0442\u044c"))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"quest-container disabled"},l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{src:h.a,alt:""})),l.a.createElement("div",{className:"header"},l.a.createElement("h4",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u044f\u0442\u043e\u0433\u043e",l.a.createElement("br",null),"\u043a\u0432\u0435\u0441\u0442\u0430 \u0417\u0435\u0432\u0430 ")),l.a.createElement("button",{className:"playBtn"},"\u0418\u0433\u0440\u0430\u0442\u044c")))))}}]),a}(l.a.Component),C=(a(165),a(79)),B=a.n(C),O=function(e){Object(u.a)(a,e);var t=Object(E.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"loader"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center logoContainer"},l.a.createElement("div",{className:"col-lg-3 logo"},l.a.createElement("img",{src:v.a,alt:""}))),l.a.createElement("div",{className:"row justify-content-center logoContainer"},l.a.createElement("div",{className:"col-lg-7 logoGame"},l.a.createElement("img",{src:p.a,alt:""}))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-auto loadingText"},l.a.createElement("h2",null,"\u0417\u0410\u0413\u0420\u0423\u0417\u041a\u0410..."))),l.a.createElement("div",{className:"row justify-content-center loading-content-inner"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"rulonContainer"},l.a.createElement("div",{className:"rollingLine"},l.a.createElement("div",{className:"overlay"})),l.a.createElement("div",{className:"rulonBox"},l.a.createElement("div",{className:"rulon"},l.a.createElement("div",{className:"roll"})))))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-auto magnit"},l.a.createElement("img",{src:B.a,alt:""})))))}}]),a}(l.a.Component),R=Object(g.b)((function(e){return{rules:e.store.rules,start:e.store.start,results:e.store.results}}),(function(e){return{startGame:function(){return e({type:"START_GAME",payload:!0})},showRules:function(){return e({type:"SHOW_RULES",payload:!0})},showRes:function(){return e({type:"SHOW_RESULTS",payload:!0})}}}))(O),S=(a(166),function(e){Object(u.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={loaded:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({loaded:!0})}),3e3)}},{key:"render",value:function(){var e=this.props,t=(e.rules,e.start),a=(e.results,this.state.loaded);return l.a.createElement("div",{className:"gameContainer"},t?l.a.createElement(w,null):a?l.a.createElement(A,null):l.a.createElement(R,null))}}]),a}(l.a.Component)),k=Object(g.b)((function(e){return{rules:e.store.rules,start:e.store.start,results:e.store.results}}),(function(e){return{startGame:function(){return e({type:"START_GAME",payload:!0})},showRules:function(){return e({type:"SHOW_RULES",payload:!0})},showRes:function(){return e({type:"SHOW_RESULTS",payload:!0})}}}))(S),I=a(25),L=a(26),G={rules:!1,start:!1,results:!1},W=Object(I.c)({store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_GAME":return Object(L.a)(Object(L.a)({},e),{},{start:t.payload});case"SHOW_RULES":return Object(L.a)(Object(L.a)({},e),{},{rules:t.payload});case"SHOW_RESULTS":return Object(L.a)(Object(L.a)({},e),{},{results:t.payload})}return e}}),H=a(80),Q=Object(I.d)(W,Object(I.a)(H.a));m.a.send("VKWebAppInit"),r.a.render(l.a.createElement(g.a,{store:Q},l.a.createElement(k,null)),document.getElementById("root"))},24:function(e,t,a){e.exports=a.p+"static/media/zewa.37e618f6.png"},27:function(e,t,a){e.exports=a.p+"static/media/logoGame.3b70e444.png"},28:function(e,t,a){e.exports=a.p+"static/media/image1.e5445cd1.png"},78:function(e,t){e.exports="data:image/png;base64,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"},79:function(e,t,a){e.exports=a.p+"static/media/magnit-logo.a052c0ad.svg"},81:function(e,t,a){e.exports=a(167)}},[[81,1,2]]]);
//# sourceMappingURL=main.08448f58.chunk.js.map