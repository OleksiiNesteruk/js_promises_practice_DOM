var t=new Promise(function(t,n){document.addEventListener("mousedown",function(n){0===n.button&&t("First promise was resolved")}),setTimeout(function(){n("First promise was rejected")},3e3)}),n=new Promise(function(t,n){document.addEventListener("mousedown",function(n){(0===n.button||2===n.button)&&t("Second promise was resolved")})}),e=new Promise(function(t,n){var e=!1,o=!1;document.addEventListener("mousedown",function(n){0===n.button&&(e=!0),2===n.button&&(o=!0),e&&o&&t("Third promise was resolved")})}),o=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=document.createElement("div");e.classList.add("notification"),e.classList.add(n?"error":"success"),e.setAttribute("data-qa","notification"),e.textContent=t,document.body.append(e)};t.then(function(t){return o(t)}).catch(function(t){return o(t,!0)}),n.then(function(t){return o(t)}),e.then(function(t){return o(t)}),document.addEventListener("contextmenu",function(t){return t.preventDefault()});
//# sourceMappingURL=index.502041ec.js.map