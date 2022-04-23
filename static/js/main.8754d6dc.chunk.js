(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(6),i=c.n(s),a=(c(12),c(7)),n=c(2),l=c(1),j=(c(13),c(14),c(15),c(0)),o=function(e){var t=e.movie;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image is-4by3",children:Object(j.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("div",{className:"media-left",children:Object(j.jsx)("figure",{className:"image is-48x48",children:Object(j.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(j.jsx)("div",{className:"media-content",children:Object(j.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(j.jsxs)("div",{className:"content",children:[t.Plot,Object(j.jsx)("br",{})]})]})]})},d=function(e){var t=e.movies;return Object(j.jsx)("div",{className:"movies",children:t.map((function(e){return Object(j.jsx)(o,{movie:e},e.imdbID)}))})},r=(c(17),function(e){var t=e.addMovie,c=e.moviesAlredyExist,s=e.setMoviesAlredyExist,i=Object(l.useState)(""),a=Object(n.a)(i,2),d=a[0],r=a[1],b=Object(l.useState)(void 0),m=Object(n.a)(b,2),v=m[0],u=m[1],O=Object(l.useState)(""),h=Object(n.a)(O,2),x=h[0],f=h[1],N=Object(l.useCallback)((function(e){r(e.target.value),f("")}),[d]),p=Object(l.useCallback)((function(){void 0!==v&&(t(v),u(void 0),r(""))}),[v]),g=Object(l.useCallback)((function(e){e.preventDefault(),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=607d267f&t","=").concat(e)).then((function(e){return e.json()}))}(d).then((function(e){"False"!==e.Response?(s(!1),u(e)):f("Can't find a movie with such a title")}))}),[d]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{className:"find-movie",children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:x?"input is-danger":"input",value:d,onChange:N})}),Object(j.jsx)("p",{className:"help is-danger",children:x})]}),Object(j.jsxs)("div",{className:"field is-grouped",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"button",className:"button is-light",onClick:g,children:"Find a movie"})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"button",className:"button is-primary",onClick:p,children:"Add to the list"})})]})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"title",children:"Preview"}),c?Object(j.jsx)("span",{className:"movie",children:"Movie is alredy in the list"}):void 0!==v&&Object(j.jsx)(o,{movie:v})]})]})}),b=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],i=Object(l.useState)(!1),o=Object(n.a)(i,2),b=o[0],m=o[1];return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page-content",children:Object(j.jsx)(d,{movies:c})}),Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsx)(r,{addMovie:function(e){-1===c.findIndex((function(t){return e.imdbID===t.imdbID}))?s([].concat(Object(a.a)(c),[e])):m(!0)},moviesAlredyExist:b,setMoviesAlredyExist:m})})]})};i.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.8754d6dc.chunk.js.map