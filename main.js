(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{F:()=>a,r:()=>l});class e{static allProjects=[];constructor(t){this.name=t}}function n(){document.querySelector(".add-project").addEventListener("click",l),document.querySelectorAll(".project-buttons").forEach((t=>{t.addEventListener("click",c)}))}function o(t){const o=document.querySelector(".content-div > input").value,c=new e(o);e.allProjects.push(c),console.log(e.allProjects),function(t){const e=document.querySelector(".buttons-container"),o=document.createElement("button");o.classList.toggle("project-buttons"),o.textContent=t.name,e.appendChild(o),n()}(c)}function c(t){!function(t){a();const e=document.querySelector("main"),n=i();e.appendChild(n);const o=document.createElement("div");o.classList.toggle("heading-button-container"),n.appendChild(o);const c=document.createElement("h2");c.textContent=t.target.textContent,o.appendChild(c);const r=document.createElement("button");r.textContent="New Task",r.tabindex="0",o.appendChild(r),document.querySelector(".heading-button-container").addEventListener("click",d)}(t)}function d(){const t=document.querySelector(".content-div"),e=document.createElement("div");e.classList.toggle("new-task-container"),t.appendChild(e);const n=document.createElement("label");n.textContent="Description:",n.setAttribute("for","description"),e.appendChild(n);const o=document.createElement("input");o.type="text",o.id="description",e.appendChild(o);const c=document.createElement("label");c.textContent="Due date:",c.setAttribute("for","due-date"),e.appendChild(c);const d=document.createElement("input");d.type="date",d.id="due-date",e.appendChild(d);const i=document.createElement("label");i.textContent="Priority:",i.setAttribute("for","priority"),e.appendChild(i);const r=document.createElement("div");r.classList.toggle("radio-container"),e.appendChild(r);const l=document.createElement("input");l.id="low",l.type="radio",l.name="priority",r.appendChild(l);const a=document.createElement("label");a.textContent="Low",a.setAttribute("for","low"),r.appendChild(a);const u=document.createElement("input");u.id="medium",u.type="radio",u.name="priority",r.appendChild(u);const s=document.createElement("label");s.textContent="Medium",s.setAttribute("for","medium"),r.appendChild(s);const p=document.createElement("input");p.id="high",p.type="radio",p.name="priority",r.appendChild(p);const m=document.createElement("label");m.textContent="High",m.setAttribute("for","high"),r.appendChild(m);const C=document.createElement("div");C.classList.toggle("add-cancel-container"),e.appendChild(C);const h=document.createElement("button");h.textContent="Add Task",C.appendChild(h);const E=document.createElement("button");E.textContent="Cancel",C.appendChild(E)}function i(){const t=document.createElement("div");return t.classList.toggle("content-div"),t}!function(){const t=document.querySelector("body"),e=document.createElement("header");t.appendChild(e),e.appendChild(function(){const t=document.createElement("h1");return t.textContent="Just Do It",t}())}(),function(){const t=document.querySelector("body"),e=document.createElement("main");t.appendChild(e),e.appendChild(function(){const t=document.createElement("div");t.classList.toggle("menu-div");const e=document.createElement("div");return e.classList.toggle("buttons-container"),t.appendChild(e),function(){const t=document.createElement("button");t.textContent="Upcoming";const e=document.createElement("button");e.textContent="Add Project",e.classList.toggle("add-project");const n=document.createElement("button");return n.textContent="Personal",n.classList.toggle("project-buttons"),[t,e,n]}().forEach((t=>{e.appendChild(t)})),t}()),e.appendChild(i())}(),n();const r=document.querySelector("main");function l(t){let e=t.target.textContent;a(),r.appendChild(i()),console.log(e),"Add Project"===e&&function(){const t=document.querySelector(".content-div"),e=document.createElement("input");e.type="text",t.appendChild(e);const n=document.createElement("button");n.classList.toggle("new-project-button"),n.textContent="Add",t.appendChild(n),document.querySelector(".new-project-button").addEventListener("click",o)}()}function a(){const t=document.querySelector("main"),e=document.querySelector(".content-div");t.removeChild(e)}})();