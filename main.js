(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{F:()=>p,r:()=>m});class t{static allProjects=[];constructor(e,t){this.name=e,this.id=t,this.tasks=[]}}class n{constructor(e,t,n){this.description=e,this.dueDate=t,this.priority=n}}function o(){document.querySelector(".add-project").addEventListener("click",m),document.querySelectorAll(".project-buttons").forEach((e=>{e.addEventListener("click",r)}))}function c(e){const o=t.allProjects[Number(document.querySelector(".active-project").id)],c=document.querySelector("#description").value,d=document.querySelector("#due-date").value,r=document.querySelector("input[name=priority]:checked").value;o.tasks.push(new n(c,d,r)),a(),i(o)}function d(e){const n=document.querySelector(".content-div > input").value,c=document.querySelectorAll(".project-buttons").length,d=new t(n,c);t.allProjects.push(d),function(e){const t=document.querySelector(".buttons-container"),n=document.createElement("button");n.classList.toggle("project-buttons"),n.textContent=e.name,n.id=e.id,t.appendChild(n),o()}(d)}function r(e){document.querySelectorAll(".project-buttons").forEach((e=>{e.classList.remove("active-project")})),e.target.classList.add("active-project"),i(t.allProjects[Number(e.target.id)])}function i(e){p();const t=document.querySelector("main"),n=u();t.appendChild(n);const o=document.createElement("div");o.classList.toggle("heading-button-container"),n.appendChild(o);const c=document.createElement("h2");c.textContent=e.name,o.appendChild(c);const d=document.createElement("button");d.textContent="New Task",d.tabindex="0",o.appendChild(d),document.querySelector(".heading-button-container").addEventListener("click",l),e.tasks.forEach((e=>{const t=document.createElement("input");t.type="checkbox",t.value=`${e.description}`,t.id=`${e.description}`;const o=document.createElement("label");o.setAttribute("for",t.id),o.textContent=t.value,n.appendChild(t),n.appendChild(o)}))}function l(){const e=document.querySelector(".content-div"),t=document.createElement("div");t.classList.toggle("new-task-container"),e.appendChild(t);const n=document.createElement("label");n.textContent="Description:",n.setAttribute("for","description"),t.appendChild(n);const o=document.createElement("input");o.type="text",o.id="description",t.appendChild(o);const d=document.createElement("label");d.textContent="Due date:",d.setAttribute("for","due-date"),t.appendChild(d);const r=document.createElement("input");r.type="date",r.id="due-date",t.appendChild(r);const i=document.createElement("label");i.textContent="Priority:",i.setAttribute("for","priority"),t.appendChild(i);const l=document.createElement("div");l.classList.toggle("radio-container"),t.appendChild(l);const u=document.createElement("input");u.id="low",u.type="radio",u.name="priority",u.value="low",l.appendChild(u);const s=document.createElement("label");s.textContent="Low",s.setAttribute("for","low"),l.appendChild(s);const m=document.createElement("input");m.id="medium",m.value="medium",m.type="radio",m.name="priority",l.appendChild(m);const p=document.createElement("label");p.textContent="Medium",p.setAttribute("for","medium"),l.appendChild(p);const h=document.createElement("input");h.id="high",h.value="high",h.type="radio",h.name="priority",l.appendChild(h);const C=document.createElement("label");C.textContent="High",C.setAttribute("for","high"),l.appendChild(C);const b=document.createElement("div");b.classList.toggle("add-cancel-container"),t.appendChild(b);const y=document.createElement("button");y.textContent="Add Task",b.appendChild(y);const E=document.createElement("button");E.textContent="Cancel",b.appendChild(E),document.querySelector(".add-cancel-container > button:first-child").addEventListener("click",c),document.querySelector(".add-cancel-container > button:nth-child(2)").addEventListener("click",a)}function a(){const e=document.querySelector(".content-div"),t=document.querySelector(".new-task-container");e.removeChild(t)}function u(){const e=document.createElement("div");return e.classList.toggle("content-div"),e}!function(){const e=document.querySelector("body"),t=document.createElement("header");e.appendChild(t),t.appendChild(function(){const e=document.createElement("h1");return e.textContent="Just Do It",e}())}(),function(){const e=document.querySelector("body"),n=document.createElement("main");e.appendChild(n),n.appendChild(function(){const e=document.createElement("div");e.classList.toggle("menu-div");const n=document.createElement("div");return n.classList.toggle("buttons-container"),e.appendChild(n),function(){const e=document.createElement("button");e.textContent="Upcoming";const n=document.createElement("button");n.textContent="Add Project",n.classList.toggle("add-project");const o=document.createElement("button");o.textContent="Personal",o.classList.toggle("project-buttons");const c=document.querySelectorAll(".project-buttons").length;return t.allProjects.push(new t(o.textContent,c)),o.id=`${c}`,[e,n,o]}().forEach((e=>{n.appendChild(e)})),e}()),n.appendChild(u())}(),o();const s=document.querySelector("main");function m(e){let t=e.target.textContent;p(),s.appendChild(u()),"Add Project"===t&&function(){const e=document.querySelector(".content-div"),t=document.createElement("input");t.type="text",e.appendChild(t);const n=document.createElement("button");n.classList.toggle("new-project-button"),n.textContent="Add",e.appendChild(n),document.querySelector(".new-project-button").addEventListener("click",d)}()}function p(){const e=document.querySelector("main"),t=document.querySelector(".content-div");e.removeChild(t)}})();