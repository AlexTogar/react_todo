(()=>{"use strict";var n,e,t={477:(n,e,t)=>{t.d(e,{Z:()=>r});const r={ALL_TASKS_CAT_ID:"1",IMPORTANT_CAT_ID:"2",DEFAULT_THEME:"dark"}},620:(n,e,t)=>{var r=t(935),o=t(294),a=t(890),i=t(586);const c=function(n,e,t,r,o){void 0===e&&(e=""),void 0===t&&(t=!1),void 0===r&&(r=!1),void 0===o&&(o=(0,i.Z)()),this.name=n,this.icon=e,this.selected=t,this.deletable=r,this.id=o};var l=t(477);const d=JSON.parse('[{"id":"1","name":"All tasks","deletable":false,"icon":"all-tasks","selected":true},{"id":"2","name":"Important","deletable":false,"icon":"important","selected":false}]');var s=l.Z.ALL_TASKS_CAT_ID;const p=JSON.parse('[{"id":"1","text":"first task","important":false,"completed":false,"categoryId":"1"},{"id":"2","text":"second task (important)","important":true,"completed":false,"categoryId":"1"},{"id":"3","text":"completed important todo","important":true,"completed":true,"categoryId":"1"}]');var u=l.Z.IMPORTANT_CAT_ID;const g=function(n,e,t,r,o){void 0===n&&(n=""),void 0===t&&(t=!1),void 0===r&&(r=!1),void 0===o&&(o=(0,i.Z)()),this.text=n,this.categoryId=e,this.completed=t,this.important=this.categoryId===u||r,this.id=o},m=(0,a.UY)({tasks:function(n,e){var t,r,o;void 0===n&&(n=p);var a=null===(t=e.payload)||void 0===t?void 0:t.text,i=null===(r=e.payload)||void 0===r?void 0:r.id,c=null===(o=e.payload)||void 0===o?void 0:o.categoryId;switch(e.type){case"CREATE_TASK":var l=new g(a,c);return n.concat(l);case"DELETE_TASK":return n.filter((function(n){return i!==n.id}));case"TOGGLE_COMPLETE_TASK":return n.map((function(n){return n.completed=n.id===i?!n.completed:n.completed,n}));case"TOGGLE_IMPORTANT_TASK":return n.map((function(n){return n.important=n.id===i?!n.important:n.important,n}));case"UPDATE_TASK":return n.map((function(n){return n.text=n.id===i?a:n.text,n}));default:return n}},categories:function(n,e){var t,r;void 0===n&&(n=d);var o=null===(t=e.payload)||void 0===t?void 0:t.id,a=null===(r=e.payload)||void 0===r?void 0:r.name;switch(e.type){case"CREATE_CATEGORY":var i=new c(a,"default",!1,!0);return n.concat(i);case"DELETE_CATEGORY":var l=n.find((function(n){return n.id===o})),p=n;return(null==l?void 0:l.selected)&&(p=n.map((function(n){return n.id===s?(n.selected=!0,n):n}))),p.filter((function(n){return n.id!==o}));case"SELECT_CATEGORY":return n.map((function(n){return n.selected=n.id===o,n}));default:return n}}});var f=t(803);const b=t.p+"d07449cb527353d4a033d608451ceb2e.svg",h=t.p+"dfa0e9aa27f531cef592b23bf471da6a.svg",x=t.p+"e4b27e82316509fc74f1ca9c17e4b6a0.svg",k=t.p+"da3fc0896e48b46ebd3c746f070195d1.svg",v=t.p+"1ea279c98d92249d47421a67ab9b2811.svg",_=t.p+"9245920397190e532ea29fc72d8a293a.svg",y=t.p+"408f492f866fb2ed18fc14ea5837e0c6.svg",w=t.p+"0cd50bb133d483a8181db7384593e009.svg",E=t.p+"94f23189f93a272badc6b2d3e75fc979.svg",C=t.p+"6e96cd4fcfb2637eb734a91b575433b9.svg",T=t.p+"763917efe70a151c2ac5753935e32002.svg",A=JSON.parse('{"dark":{"globalBackgroundColor":"#2d2f30","mainBackgroundColor":"#1a1b1c","sidebarBackgroundColor":"#212222","backgroundActiveCatColor":"#2e2e36","backgroundHoveredItemColor":"#292929","defaultGrayColor":"#939393","accentColor":"#788cde","splitterLineColor":"#101011","textColor":"#e1e1e1"},"light":{"globalBackgroundColor":"#E5E5E5","mainBackgroundColor":"#FFFFFF","sidebarBackgroundColor":"#F4F4F4","backgroundActiveCatColor":"#EDEDED","backgroundHoveredItemColor":"#EDEDED","defaultGrayColor":"#767678","accentColor":"#3E69DF","splitterLineColor":"#EAEAEA","textColor":"#34373D"}}');function S(n){var e=A[n.theme],t=e.globalBackgroundColor,r=e.mainBackgroundColor,a=e.sidebarBackgroundColor,i=e.backgroundActiveCatColor,c=e.backgroundHoveredItemColor,l=e.defaultGrayColor,d=e.accentColor,s=e.splitterLineColor,p=e.textColor;return o.createElement("style",null,"\n        * {\n          box-sizing: border-box;\n          margin: 0px;\n          padding: 0px;\n        }\n        :root {\n          --global-background-color: "+t+";\n          --main-background-color: "+r+";\n          --sidebar-backgroukd-color: "+a+";\n          --background-active-cat-color: "+i+";\n          --background-hovered-item-color: "+c+";\n          --default-gray-color: "+l+";\n          --accent-color: "+d+";\n          --splitter-line-color: "+s+";\n          --text-color: "+p+";\n        }\n        html{\n          touch-action: manipulation;\n        }\n        html,\n        body {\n          height: 100%;\n        }\n        input {\n          color: var(--text-color);\n        }\n        .loading {\n          display: flex;\n          width: 100vw;\n          heigth: 100vh;\n          justify-content: center;\n          align-items: center;\n          color: var(--text-color);\n          backgroundColor: var(--global-background-color);\n        }\n        .loading__message{\n          display: inline-block;\n          font-size: 30px;\n        }\n        .app {\n          font-family: sans-serif;\n          font-size: 16px;\n          display: flex;\n          height: 100%;\n          justify-content: center;\n          align-items: center;\n          background-color: var(--global-background-color);\n          color: var(--text-color);\n        }\n        .app__trash-icon {\n          cursor: pointer;\n          background-image: url('"+b+"');\n          width: 20px;\n          height: 20px;\n          margin-right: 10px;\n        }\n        .sidebar {\n          background-color: var(--sidebar-backgroukd-color);\n          padding: 25px 0px 0px 0px;\n          border-right: 2px solid var(--splitter-line-color);\n          width: 250px;\n          height: 700px;\n          border-top-left-radius: 5px;\n          border-bottom-left-radius: 5px;\n          position: relative;\n        }\n        .sidebar__title {\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          padding-left: 5px;\n          height: 50px;\n          color: var(--accent-color);\n          vertical-align: center;\n        }\n        .sidebar__title-text {\n          pointer-events: none;\n        }\n        .sidebar__categories {\n          max-height: 550px;\n          overflow-y: auto;\n        }\n        .sidebar__categories::-webkit-scrollbar {\n          width: 0px;\n        }\n        .sidebar__category {\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          padding: 5px;\n          height: 50px;\n          width: 100%;\n        }\n        .sidebar__category:hover {\n          background-color: var(--background-hovered-item-color);\n        }\n        .sidebar__category_active {\n          background-color: var(--background-active-cat-color);\n        }\n        .icon {\n          background-position: center;\n          background-size: contain;\n          background-repeat: no-repeat;\n        }\n        .sidebar__cat-icon {\n          width: 20px;\n          height: 20px;\n          margin-right: 8px;\n        }\n        .sidebar__cat-icon_important {\n          background-image: url('"+h+"');\n        }\n        .sidebar__cat-icon_all-tasks {\n          background-image: url('"+x+"');\n        }\n        .sidebar__cat-icon_default {\n          background-image: url('"+k+"');\n        }\n        .sidebar__cat-text {\n          cursor: default;\n          flex-grow: 1;\n        }\n        .sidebar__tasks-number {\n          font-size: 12px;\n          color: var(--default-gray-color);\n        }\n        .input {\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n        }\n        .sidebar__icon {\n          background-image: url('"+v+"');\n          width: 20px;\n          height: 20px;\n        }\n        .input-field {\n          width: 100%;\n          height: 40px;\n          font-size: 16px;\n          color: var(--text-color);\n          background-color: var(--sidebar-backgroukd-color);\n          border-radius: 5px;\n          border: none;\n          padding-left: 6px;\n        }\n        .input-field:focus,\n        .input-field:active {\n          outline: none;\n        }\n        .sidebar__input {\n          margin: 3px;\n          padding: 5px;\n          height: 50px;\n        }\n        .main {\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-end;\n          width: 720px;\n          height: 700px;\n          padding: 25px;\n          border-top-right-radius: 5px;\n          border-bottom-right-radius: 5px;\n          background-color: var(--main-background-color);\n          position: relative;\n        }\n\n        .main__sidebar-icon {\n          display: none;\n          position: absolute;\n          top: 40%;\n          left: 0px;\n          width: 18px;\n          height: 100px;\n          background-image: url('"+_+"');\n        }\n\n        .main__title {\n          margin-bottom: 10px;\n          flex: 0 1 50px;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n        }\n        .main__title-icon {\n          width: 25px;\n          height: 25px;\n        }\n        .main__title-text {\n          pointer-events: none;\n          font-size: 25px;\n          font-weight: 500;\n          margin-left: 10px;\n          color: var(--accent-color);\n        }\n        .main__theme-switcher{\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 35px;\n          width: 35px;\n          margin-left: auto;\n          border: none;\n          cursor: pointer;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n        .main__theme-switcher-icon{\n          border-radius: 100%;\n          background-color: var(--text-color);\n          width: 20px;\n          height: 20px;\n        }\n        .active-task-container {\n          max-height: 77%;\n          flex-grow: 1;\n          overflow-y: hidden;\n        }\n        .task-container {\n          display: flex;\n          max-height: 100%;\n          flex-direction: column;\n          justify-content: flex-start;\n          padding-bottom: 10px;\n          overflow-y: scroll;\n          transition: 0.13s;\n        }\n        .task-container_hidden {\n          transition: 0.13s;\n          opacity: 0;\n        }\n        /* hide scrollbar */\n        .task-container::-webkit-scrollbar {\n          width: 0;\n        }\n        /* checkbox field to click (complete task) */\n        .task-container__pseudo-checkbox {\n          width: 30px;\n          height: 30px;\n          background-color: transparent;\n          position: absolute;\n          top: 10px;\n          left: 5px;\n          z-index: 10;\n          cursor: pointer;\n        }\n        .task-container__task {\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          background-color: var(--sidebar-backgroukd-color);\n          min-height: 50px;\n          color: var(--text-color);\n          padding-left: 40px;\n          padding-right: 5px;\n          border-radius: 5px;\n          margin-top: 5px;\n          position: relative;\n          transition: 0.13s;\n        }\n        .task-container__task:hover {\n          background-color: var(--background-hovered-item-color);\n        }\n        .task-container__task_checked {\n          color: var(--default-gray-color);\n        }\n        .task-container__task_checked::after {\n          content: '';\n          background-image: url('"+y+"');\n          background-position: center;\n          background-size: contain;\n          width: 19px;\n          height: 19px;\n          position: absolute;\n          left: 10px;\n          top: 33%;\n        }\n        .task-container__task::before {\n          content: '';\n          cursor: pointer;\n          border: 1px solid var(--default-gray-color);\n          width: 16px;\n          height: 16px;\n          position: absolute;\n          left: 10px;\n          top: 33%;\n          border-radius: 50%;\n        }\n        /* hide original checkbox */\n        .task-container__task-checkbox {\n          display: none;\n        }\n        .task-container__task-text {\n          background-color: inherit;\n          border: none;\n          font-size: 16px;\n          flex-grow: 1;\n        }\n        .task-container__task-text:focus,\n        .task-container__task-text:active {\n          outline: none;\n        }\n        .task-container__task-star {\n          background-image: url('"+w+"');\n          cursor: pointer;\n          width: 20px;\n          height: 20px;\n        }\n\n        /* mark task as important anmation */\n        @keyframes star-activation {\n          from {\n          }\n          50% {\n            transform: scale(1.3);\n          }\n          to {\n            transform: scale(1);\n          }\n        }\n        /* unmark task as important animation */\n        @keyframes star-deactivation {\n          from {\n          }\n          50% {\n            transform: scale(0.7);\n          }\n          to {\n            transform: scale(1);\n          }\n        }\n        .task-container__task-star_acitve {\n          animation: star-activation 0.3s ease-in-out;\n          background-image: url('"+E+"');\n        }\n        .completed-task-container {\n          flex-basis: 30%;\n          min-height: 230px;\n          overflow-y: hidden;\n          padding-bottom: 10px;\n          padding-top: 10px;\n          color: var(--default-gray-color);\n        }\n        .completed-task-container_hidden {\n          min-height: unset;\n          flex-basis: unset;\n          height: 45px;\n        }\n        .completed-task-container__toggle {\n          cursor: default;\n          -webkit-user-select: none;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          width: fit-content;\n          border-radius: 5px;\n          padding: 5px 10px 5px 10px;\n          background-color: var(--sidebar-backgroukd-color);\n        }\n        .completed-task-container__toggle:hover {\n          background-color: var(--background-hovered-item-color);\n        }\n        .completed-task-container__arrow {\n          width: 18px;\n          height: 18px;\n        }\n        .completed-task-container__arrow_down {\n          background-image: url('"+C+"');\n        }\n        .completed-task-container__arrow_right {\n          background-image: url('"+T+"');\n        }\n        .completed-task-container__text {\n          flex-grow: 1;\n          padding: 0px 10px;\n          color: var(--accent-color);\n        }\n        .completed-task-container__tasks-number {\n          color: var(--accent-color);\n          font-size: 12px;\n          padding-left: 10px;\n        }\n        .main__input {\n          position: relative;\n          min-height: 55px;\n        }\n        .main__icon {\n          position: absolute;\n          flex-shrink: 1;\n          background-image: url('"+v+"');\n          width: 20px;\n          height: 20px;\n          left: 10px;\n        }\n        .main__form {\n          width: 100%;\n        }\n        .main__input-field {\n          padding-left: 35px;\n        }\n      ")}const j=t.p+"e100c436b9b6a752e3dbccabfb3735a4.svg",I=t.p+"4df817758985f21153e2f8193880b850.svg";function O(n){return o.createElement("style",null,"\n        @media (min-width: 651px){\n          .application__trash-icon:hover {\n            background-image: url('"+I+"');\n          }\n          .task-container__task-star:hover {\n            background-image: url('"+j+"');\n            transition: 0.13s;\n          }\n        }\n\n        @media (max-height: 700px) {\n          .sidebar {\n            height: 100%;\n          }\n          .main{\n            height: 100%;\n          }\n        }\n\n        @media (max-width: 650px) {\n          .sidebar {\n            width: 50%;\n            height: 100%;\n            position: absolute;\n            transition: 0.2s ease-in;\n            z-index: 15;\n            left: 0;\n            transform: translateX(-100%);\n          }\n        \n          .sidebar__tasks-number {\n            margin-right: 15px;\n          }\n        \n          .sidebar_shown {\n            transform: translateX(0%);\n            transition: 0.2s ease-in;\n            z-index: 15;\n            width: 70%;\n          }\n        \n          .main {\n            height: 100%;\n          }\n        \n          .main__sidebar-icon {\n            display: inline-block;\n            z-index: 20;\n          }\n        \n          @keyframes icon-open-animation {\n            from {\n              transform: rotate(180deg) translateX(18px);\n            }\n        \n            to {\n              transform: rotate(180deg) translateX(18px) translateX(-70vw);\n            }\n          }\n        \n          .main__sidebar-icon_closing {\n            animation: icon-open-animation 0.2s ease-in;\n            animation-fill-mode: forwards;\n          }\n        }\n        \n      ")}function L(n){return n.theme,o.createElement("div",{className:"loading"},o.createElement("span",{className:"loading__message"},"Загрузка..."))}var z=o.lazy((function(){return t.e(405).then(t.bind(t,405))})),D=o.lazy((function(){return t.e(930).then(t.bind(t,930))})),F=l.Z.DEFAULT_THEME,P=(0,a.MT)(m);r.render(o.createElement((function(){var n=(0,o.useState)(localStorage.getItem("theme")||F),e=n[0],t=n[1],r=(0,o.useRef)(null),a=(0,o.useRef)(null);function i(){var n=r.current,e=a.current;null==n||n.classList.toggle("sidebar_shown"),null==e||e.classList.toggle("main__sidebar-icon_closing")}return o.createElement(o.Fragment,null,o.createElement(S,{theme:e}),o.createElement(O,null),o.createElement(o.Suspense,{fallback:o.createElement(L,{theme:e})},o.createElement(f.zt,{store:P},o.createElement(z,{ref:r,onSidebarToggle:i}),o.createElement(D,{ref:a,onToggleTheme:function(){var n;t((function(e){return n="dark"===e?"light":"dark",localStorage.setItem("theme",n),n}))},onSidebarToggle:i}))))}),null),document.getElementById("root"))}},r={};function o(n){if(r[n])return r[n].exports;var e=r[n]={id:n,loaded:!1,exports:{}};return t[n](e,e.exports,o),e.loaded=!0,e.exports}o.m=t,o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.f={},o.e=n=>Promise.all(Object.keys(o.f).reduce(((e,t)=>(o.f[t](n,e),e)),[])),o.u=n=>n+"-bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.hmd=n=>((n=Object.create(n)).children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n),o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n={},e="todo:",o.l=(t,r,a)=>{if(n[t])n[t].push(r);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var s=l[d];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==e+a){i=s;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",e+a),i.src=t),n[t]=[r];var p=(e,r)=>{i.onerror=i.onload=null,clearTimeout(u);var o=n[t];if(delete n[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((n=>n(r))),e)return e(r)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}},o.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;o.g.importScripts&&(n=o.g.location+"");var e=o.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=n})(),(()=>{var n={179:0},e=[[620,288]];o.f.j=(e,t)=>{var r=o.o(n,e)?n[e]:void 0;if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(((t,o)=>{r=n[e]=[t,o]}));t.push(r[2]=a);var i=o.p+o.u(e),c=new Error;o.l(i,(t=>{if(o.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}}),"chunk-"+e)}};var t=()=>{};function r(){for(var t,r=0;r<e.length;r++){for(var a=e[r],i=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(i=!1)}i&&(e.splice(r--,1),t=o(o.s=a[0]))}return 0===e.length&&(o.x(),o.x=()=>{}),t}o.x=()=>{o.x=()=>{},i=i.slice();for(var n=0;n<i.length;n++)a(i[n]);return(t=r)()};var a=r=>{for(var a,i,[l,d,s,p]=r,u=0,g=[];u<l.length;u++)i=l[u],o.o(n,i)&&n[i]&&g.push(n[i][0]),n[i]=0;for(a in d)o.o(d,a)&&(o.m[a]=d[a]);for(s&&s(o),c(r);g.length;)g.shift()();return p&&e.push.apply(e,p),t()},i=self.webpackChunktodo=self.webpackChunktodo||[],c=i.push.bind(i);i.push=a})(),o.x()})();