(this.webpackJsonpreact_movie_app=this.webpackJsonpreact_movie_app||[]).push([[0],{32:function(e,t,a){e.exports=a(63)},37:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),c=a.n(o),s=a(7),i=a(1);a(37);var m=function(){return r.a.createElement("div",{className:"navi"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/about"},"About"))},l=a(17),u=a.n(l),p=a(30),v=a(10),d=a(11),y=a(13),E=a(12),h=a(31),f=a.n(h);a(61);var b=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,c=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(s.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:a,title:n,summary:o,poster:c,genres:i}}},r.a.createElement("img",{src:c,alt:n,title:n}),r.a.createElement("h3",{className:"movie_title",style:{background:"skyblue"}},n),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie_genres"},i.map((function(e,t){return r.a.createElement("li",{className:"genres_genre",key:t},e)}))),r.a.createElement("p",{className:"movie_summary"},o.slice(0,180),"...")))},g=(a(62),function(e){Object(y.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(p.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by_rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading..")):r.a.createElement("div",{className:"movies"},a.map((function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,c=e.medium_cover_image,s=e.genres;return r.a.createElement(b,{key:t,id:t,year:a,title:n,summary:o,poster:c,genres:s})}))))}}]),a}(r.a.Component));var _=function(){return r.a.createElement("h1",null,"About component")},k=function(e){Object(y.a)(a,e);var t=Object(E.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.history;void 0===e.location.state&&t.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log(e),e.state?r.a.createElement("span",null,e.state.summary):null}}]),a}(r.a.Component);var N=function(){return r.a.createElement(s.a,null,r.a.createElement(m,null),r.a.createElement(i.a,{path:"/",exact:!0,component:g}),r.a.createElement(i.a,{path:"/about",component:_}),r.a.createElement(i.a,{path:"/movie/:id",component:k}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2c3c61b4.chunk.js.map