!function(){"use strict";function e(e,t){var r,n;(r=e.parentElement).classList.add("input-error"),null===(n=r.querySelector(".notice-error"))&&((n=document.createElement("p")).className="notice notice-error",r.appendChild(n)),n.innerHTML=t}function t(e){var t,r;(t=e.parentElement).classList.remove("input-error"),null!==(r=t.querySelector(".notice-error"))&&t.removeChild(r)}function r(e){return!!/\b[A-Z0-9\-]+@(?:[A-Z0-9\-]+\.)+[A-Z]{2,20}\b/gi.test(e)}function n(e){var t=c.querySelectorAll("input, button");Array.prototype.forEach.call(t,function(t){t.disabled=e})}var o=document.body,c=o.querySelector("#newsletter-form");c.addEventListener("submit",function(i){i.preventDefault();var u,a=c.querySelector("input[name=name]"),l=c.querySelector("input[name=email]");Array.prototype.forEach.call([a,l],function(n){return""===n.value||null===n.value?(e(n,"This field is required."),void c.querySelector(".input-error input").focus()):"email"===n.name&&!1===r(n.value)?(e(n,"Invalid email address."),void c.querySelector(".input-error input").focus()):void t(n)}),c.querySelector(".input-error")||c.querySelector(".sucess-message")||(o.querySelector(":focus").blur(),c.classList.add("form-sucess"),n(!0),setTimeout(function(){c.classList.remove("form-sucess"),(u=document.createElement("p")).className="notice notice-sucess",u.innerHTML="Thank you "+a.value+", you successfully joined our newsletter.",c.appendChild(u),setTimeout(function(){n(!1),c.removeChild(u),c.reset()},5e3)},1e3))})}(),function(){"use strict";function e(){u.classList.toggle("nav-hide-overflow"),l.contains(o)?l.removeChild(o):((o=document.createElement("div")).className="screen-cover",l.appendChild(o))}function t(e){var t=e.getAttribute("aria-expanded");e.setAttribute("aria-expanded","false"===t?"true":"false")}function r(){l.classList.toggle(c),t(a),e()}function n(e){e.querySelector("a").addEventListener("click",function(r){r.preventDefault(),e.classList.toggle(i),t(this)})}var o,c="main-nav-is-active",i="menu-item-is-active",u=document.body,a=u.querySelector(".nav-btn"),l=u.querySelector(".main-nav"),s=u.querySelectorAll(".menu-item-has-children");Array.prototype.forEach.call(["click","keyup"],function(e){u.addEventListener(e,function(e){var n=e.type,c=e.keyCode,u=e.target,s=l.querySelector(":focus"),d=l.querySelectorAll("."+i),f=function(e){e.classList.remove(i),t(e.querySelector("a"))},m=[l.querySelector(".menu"),o,a];"click"===n&&(u!==a&&u!==o||r()),Array.prototype.forEach.call(d,function(e){if("click"===n&&!e.contains(u)){var t=l.contains(o),r=window.innerWidth,i=-1===m.indexOf(u);(r>992||r<=992&&i&&t)&&f(e)}"keyup"===n&&(27===c||9===c&&!e.contains(s))&&f(e)})})}),Array.prototype.forEach.call(s,function(e){n(e)})}();