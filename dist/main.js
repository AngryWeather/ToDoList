(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{F:()=>u,r:()=>a});class e{static allProjects=[];constructor(t,e){this.name=t,this.id=e}}function n(){document.querySelector(".add-project").addEventListener("click",a),document.querySelectorAll(".project-buttons").forEach((t=>{t.addEventListener("click",d)}))}function o(t){console.log("add Task"),document.querySelector("#description")}function c(t){const o=document.querySelector(".content-div > input").value,c=document.querySelectorAll(".project-buttons").length,d=new e(o,c);e.allProjects.push(d),console.log(e.allProjects),function(t){const e=document.querySelector(".buttons-container"),o=document.createElement("button");o.classList.toggle("project-buttons"),o.textContent=t.name,o.id=t.id,e.appendChild(o),n()}(d)}function d(t){const n=e.allProjects[Number(t.target.id)];console.log(n),function(t){u();const e=document.querySelector("main"),n=i();e.appendChild(n);const o=document.createElement("div");o.classList.toggle("heading-button-container"),n.appendChild(o);const c=document.createElement("h2");c.textContent=t.name,o.appendChild(c);const d=document.createElement("button");d.textContent="New Task",d.tabindex="0",o.appendChild(d),document.querySelector(".heading-button-container").addEventListener("click",l)}(n)}function l(){const t=document.querySelector(".content-div"),e=document.createElement("div");e.classList.toggle("new-task-container"),t.appendChild(e);const n=document.createElement("label");n.textContent="Description:",n.setAttribute("for","description"),e.appendChild(n);const c=document.createElement("input");c.type="text",c.id="description",e.appendChild(c);const d=document.createElement("label");d.textContent="Due date:",d.setAttribute("for","due-date"),e.appendChild(d);const l=document.createElement("input");l.type="date",l.id="due-date",e.appendChild(l);const i=document.createElement("label");i.textContent="Priority:",i.setAttribute("for","priority"),e.appendChild(i);const r=document.createElement("div");r.classList.toggle("radio-container"),e.appendChild(r);const a=document.createElement("input");a.id="low",a.type="radio",a.name="priority",r.appendChild(a);const u=document.createElement("label");u.textContent="Low",u.setAttribute("for","low"),r.appendChild(u);const s=document.createElement("input");s.id="medium",s.type="radio",s.name="priority",r.appendChild(s);const m=document.createElement("label");m.textContent="Medium",m.setAttribute("for","medium"),r.appendChild(m);const p=document.createElement("input");p.id="high",p.type="radio",p.name="priority",r.appendChild(p);const h=document.createElement("label");h.textContent="High",h.setAttribute("for","high"),r.appendChild(h);const C=document.createElement("div");C.classList.toggle("add-cancel-container"),e.appendChild(C);const b=document.createElement("button");b.textContent="Add Task",C.appendChild(b);const E=document.createElement("button");E.textContent="Cancel",C.appendChild(E),document.querySelector(".add-cancel-container > button:first-child").addEventListener("click",o)}function i(){const t=document.createElement("div");return t.classList.toggle("content-div"),t}!function(){const t=document.querySelector("body"),e=document.createElement("header");t.appendChild(e),e.appendChild(function(){const t=document.createElement("h1");return t.textContent="Just Do It",t}())}(),function(){const t=document.querySelector("body"),n=document.createElement("main");t.appendChild(n),n.appendChild(function(){const t=document.createElement("div");t.classList.toggle("menu-div");const n=document.createElement("div");return n.classList.toggle("buttons-container"),t.appendChild(n),function(){const t=document.createElement("button");t.textContent="Upcoming";const n=document.createElement("button");n.textContent="Add Project",n.classList.toggle("add-project");const o=document.createElement("button");o.textContent="Personal",o.classList.toggle("project-buttons");const c=document.querySelectorAll(".project-buttons").length;return e.allProjects.push(new e(o.textContent,c)),o.id=`${c}`,[t,n,o]}().forEach((t=>{n.appendChild(t)})),t}()),n.appendChild(i())}(),n();const r=document.querySelector("main");function a(t){let e=t.target.textContent;u(),r.appendChild(i()),console.log(e),"Add Project"===e&&function(){const t=document.querySelector(".content-div"),e=document.createElement("input");e.type="text",t.appendChild(e);const n=document.createElement("button");n.classList.toggle("new-project-button"),n.textContent="Add",t.appendChild(n),document.querySelector(".new-project-button").addEventListener("click",c)}()}function u(){const t=document.querySelector("main"),e=document.querySelector(".content-div");t.removeChild(e)}})();