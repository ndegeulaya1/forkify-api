function e(e){return e&&e.__esModule?e.default:e}var t=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var o,s,c,l,u=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(u,"_invoke",{value:(o=e,s=n,c=new S(a||[]),l=p,function(e,r){if(l===d)throw Error("Generator is already running");if(l===f){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,a=r.iterator[i];if(t===a)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?v:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var o=h(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(n,c);if(i){if(i===v)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(l===p)throw l=f,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);l=d;var a=h(o,s,c);if("normal"===a.type){if(l=c.done?f:"suspendedYield",a.arg===v)continue;return{value:a.arg,done:c.done}}"throw"===a.type&&(l=f,c.method="throw",c.arg=a.arg)}})}),u}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var p="suspendedStart",d="executing",f="completed",v={};function g(){}function _(){}function m(){}var y={};l(y,o,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==r&&n.call(w,o)&&(y=w);var k=m.prototype=g.prototype=Object.create(y);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function L(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=h(e[i],e,a);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function j(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return _.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:_,configurable:!0}),_.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(L.prototype),l(L.prototype,s,function(){return this}),e.AsyncIterator=L,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new L(u(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),l(k,c,"Generator"),l(k,o,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);else if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}const r="https://forkify-api.herokuapp.com/api/v2/recipes",n=async function(e){try{let t=fetch(e),r=await Promise.race([t,new Promise(function(e){setTimeout(function(){e(Error("request tok to long !!!! timeout after 10 minutes"))},1e4)})]),n=await r.json();if(!r.ok)throw Error(`${n.message}`);return n}catch(e){throw e}};var i={};i=import.meta.resolve("eyyUD");class a{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.handdleError();this._data=e;let t=this._returnHtml();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let t=this._returnHtml(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}handdleError(t=this._errorMessage){let r=`
            <div class="error">
              <div>
                <svg>
                  <use href="${e(i)}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${t}</p>
            </div> 
          `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",r)}renderSpinner=function(){let t=`
        <div class="spinner">
            <svg>
              <use href="${e(i)}#icon-loader"></use>
            </svg>
          </div> 
      `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",t)}}class o extends a{_parentElement=document.querySelector(".recipe");_errorMessage="no recipe found try another one!!!!";addRenderEvent(e){["load","hashchange"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_returnHtml(){return console.log("Servings:",this._data.servings),`

        
        
          <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${e(i)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cooking_time}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${e(i)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.serving}</span>
            <span class="recipe__info-text">servings</span>

           <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.serving-1}">
              <svg>
                <use href="${e(i)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.serving+1}">
              <svg>
                <use href="${e(i)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>
          

        
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${e(i)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">l
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">

          ${this._data.ingredients.map(t=>`
              <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${e(i)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${t.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${t.unit}</span>
               ${t.description}
              </div>
            </li>
            `).join("")}
          

            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${e(i)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">0.5</div>
              <div class="recipe__description">
                <span class="recipe__unit">cup</span>
                ricotta cheese
              </div>
            </li>
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `}}var s=new o;const c={recipe:{},search:{results:[],query:{}},bookmarks:[]},l=async function(e){try{c.search.query=e;let t=await n(`${r}?search=${e}`);c.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),console.log(t)}catch(e){throw console.log(e),e}},u=async function(e){try{let{recipe:t}=(await n(`${r}/${e}`)).data;c.recipe={id:t.id,title:t.title,publisher:t.publisher,serving:t.servings,cooking_time:t.cooking_time,ingredients:t.ingredients,sourceUrl:t.source_url,image:t.image_url},c.bookmarks.some(t=>t.id===e)?c.recipe.bookmarked=!0:c.recipe.bookmarked=!1}catch(e){throw console.log(e),e}},h=function(e){c.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/c.recipe.serving}),c.recipe.serving=e},p=function(e){c.bookmarks.push(e),e.id===c.recipe.id&&(c.recipe.bookmarked=!0),f()},d=function(e){let t=c.bookmarks.findIndex(t=>t.id===e);c.bookmarks.splice(t,1),e===c.recipe.id&&(c.recipe.bookmarked=!1),f()},f=function(){localStorage.setItem("bookmarks",JSON.stringify(c.bookmarks))};class v extends a{_parentElement=document.querySelector(".results");_errorMessage="no recipe found try another one!!!!";_returnHtml(){return this._data.map(this._returnHtmlPreview).join("")}_returnHtmlPreview(e){return`
     <li class="preview">
            <a class="preview__link" href="#${e.id}">
              <figure class="preview__fig">
                <img src="${e.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
                
              </div>
            </a>
          </li>
    `}}var g=new v;class _ extends a{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="no any bookmark found here!!!!";_returnHtml(){return this._data.map(this._returnHtmlPreview).join("")}_returnHtmlPreview(e){return`
   <li class="preview">
               <a class="preview__link" href="#${e.id}">
                 <figure class="preview__fig">
                   <img src="${e.image}" alt="Test" />
                 </figure>
                 <div class="preview__data">
                   <h4 class="preview__title">${e.title}</h4>
                   <p class="preview__publisher">${e.publisher}</p>
                   
                 </div>
               </a>
             </li>
    `}}var m=new _;class y{_parentEL=document.querySelector(".search");getQuery(){let e=this._parentEL.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEL.querySelector(".search__field").value=""}handleSearch(e){this._parentEL.addEventListener("submit",function(t){t.preventDefault(),e()})}}var b=new y;const w=document.querySelector(".recipe"),k=async function(){try{let e=window.location.hash.slice(1);if(!e)return;await u(e);let{recipe:t}=c;s.handdleError(w),s.renderSpinner(w),await u(e),s.render(c.recipe),m.update(c.bookmarks)}catch(e){throw console.error("Error:",e),e}},E=async function(){try{g.renderSpinner();let e=b.getQuery();if(!e)return;await l(e),g.render(c.search.results)}catch(e){throw console.log(e),e}};s.addRenderEvent(k),b.handleSearch(E),s.addHandlerUpdateServings(function(e){h(e),s.render(c.recipe)}),s.addHandlerAddBookmark(function(){c.recipe.bookmarked?d(c.recipe.id):p(c.recipe),s.update(c.recipe),m.render(c.bookmarks)}),function(){let e=localStorage.getItem("bookmarks");e&&(c.bookmarks=JSON.parse(e))}(),m.render(c.bookmarks);
//# sourceMappingURL=js-final.0a7dd2ab.js.map
