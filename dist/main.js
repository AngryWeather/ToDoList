(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{F:()=>p,r:()=>m});class t{static allProjects=[];constructor(e,t){this.name=e,this.id=t,this.tasks=[]}removeTask(e){this.tasks.splice(e,1)}}class n{constructor(e,t,n){this.description=e,this.dueDate=t,this.priority=n,this.done=!1}}function o(){document.querySelector(".add-project").addEventListener("click",m),document.querySelectorAll(".project-buttons").forEach((e=>{e.addEventListener("click",r)}))}function c(e){const o=t.allProjects[Number(document.querySelector(".active-project").id)];if(console.log("Add task: ",o),!(document.querySelector("#description").value&&document.querySelector("#due-date").value&&document.querySelector("input[name=priority]:checked")))return!1;{const e=document.querySelector("#description").value,t=document.querySelector("#due-date").value,c=document.querySelector("input[name=priority]:checked").value;o.tasks.push(new n(e,t,c)),a(),i(o)}}function d(e){const n=document.querySelector(".content-div > input").value,c=document.querySelectorAll(".project-buttons").length,d=String(c),r=new t(n,c);t.allProjects.push(r),i(r),function(e){const t=document.querySelector(".buttons-container"),n=document.createElement("button");n.classList.toggle("project-buttons"),n.textContent=e.name,n.id=e.id,t.appendChild(n),o()}(r);const l=document.querySelector(`[id='${d}']`);console.log("id: "+l.id),document.querySelectorAll(".project-buttons").forEach((e=>{e.classList.remove("active-project")})),l.classList.toggle("active-project")}function r(e){document.querySelectorAll(".project-buttons").forEach((e=>{e.classList.remove("active-project")})),e.target.classList.add("active-project"),i(t.allProjects[Number(e.target.id)])}function i(e){console.log(e);const n=document.querySelector("main");p();const o=u();n.appendChild(o);const c=document.createElement("div");c.classList.toggle("heading-button-container"),o.appendChild(c);const d=document.createElement("h2");d.textContent=e.name,c.appendChild(d);const r=document.createElement("button");r.textContent="New Task",r.tabindex="0",c.appendChild(r);const a=document.createElement("button");a.textContent="Remove",a.addEventListener("click",(function(n){console.log("Active project: "+e.name);const o=t.allProjects[Number(e.id-1)];console.log(o),function(e){const t=document.querySelector(".buttons-container"),n=document.querySelector(`[id='${e}']`);t.removeChild(n)}(e.id),t.allProjects.splice(Number(e.id),1),i(o)})),c.appendChild(a),document.querySelector(".heading-button-container > button").addEventListener("click",l);const s=document.createElement("div");s.classList.toggle("tasks-container"),o.appendChild(s),e.tasks.forEach((t=>{const n=document.createElement("div");n.classList.toggle("checkbox-container"),s.appendChild(n);const o=document.createElement("input");o.type="checkbox",o.value=`${t.description}`,o.id=`${t.description}`,o.checked=t.done,o.addEventListener("change",(function(e){t.done=e.target.checked}));const c=document.createElement("label");c.setAttribute("for",o.id),c.textContent=o.value,n.appendChild(o),n.appendChild(c);const d=document.createElement("div");n.appendChild(d);const r=document.createElement("p");r.textContent="Due date: ",d.appendChild(r);const l=document.createElement("p");l.textContent=`${t.dueDate}`,d.appendChild(l);const a=document.createElement("div");n.appendChild(a);const u=document.createElement("p");u.textContent="Priority: ",a.appendChild(u);const m=document.createElement("p");m.textContent=`${t.priority}`,a.appendChild(m);const p=document.createElement("div");p.classList.toggle("remove-container"),n.appendChild(p);const h=document.createElement("p");h.textContent="Remove:",p.appendChild(h);const C=document.createElement("button");C.addEventListener("click",(function(n){e.removeTask(e.tasks.indexOf(t)),i(e)})),C.textContent="X",p.appendChild(C)}))}function l(){const e=document.querySelector(".content-div"),t=document.createElement("div");t.classList.toggle("new-task-container"),e.appendChild(t);const n=document.createElement("form");t.appendChild(n);const o=document.createElement("label");o.textContent="Description:",o.setAttribute("for","description"),n.appendChild(o);const d=document.createElement("input");d.required=!0,d.type="text",d.id="description",n.appendChild(d);const r=document.createElement("label");r.textContent="Due date:",r.setAttribute("for","due-date"),n.appendChild(r);const i=document.createElement("input");i.required=!0,i.type="date",i.id="due-date",n.appendChild(i);const l=document.createElement("label");l.textContent="Priority:",l.setAttribute("for","priority"),n.appendChild(l);const u=document.createElement("div");u.classList.toggle("radio-container"),n.appendChild(u);const s=document.createElement("input");s.required=!0,s.id="low",s.type="radio",s.name="priority",s.value="low",u.appendChild(s);const m=document.createElement("label");m.textContent="Low",m.setAttribute("for","low"),u.appendChild(m);const p=document.createElement("input");p.required=!0,p.id="medium",p.value="medium",p.type="radio",p.name="priority",u.appendChild(p);const h=document.createElement("label");h.textContent="Medium",h.setAttribute("for","medium"),u.appendChild(h);const C=document.createElement("input");C.required=!0,C.id="high",C.value="high",C.type="radio",C.name="priority",u.appendChild(C);const E=document.createElement("label");E.textContent="High",E.setAttribute("for","high"),u.appendChild(E);const v=document.createElement("div");v.classList.toggle("add-cancel-container"),n.appendChild(v);const y=document.createElement("button");y.type="submit",y.textContent="Add Task",v.appendChild(y);const b=document.createElement("button");b.textContent="Cancel",v.appendChild(b),document.querySelector(".add-cancel-container > button:first-child").addEventListener("click",c),document.querySelector(".add-cancel-container > button:nth-child(2)").addEventListener("click",a)}function a(){const e=document.querySelector(".content-div"),t=document.querySelector(".new-task-container");e.removeChild(t)}function u(){const e=document.createElement("div");return e.classList.toggle("content-div"),e}!function(){const e=document.querySelector("body"),t=document.createElement("header");e.appendChild(t),t.appendChild(function(){const e=document.createElement("h1");return e.textContent="Just Do It",e}())}(),function(){const e=document.querySelector("body"),n=document.createElement("main");e.appendChild(n),n.appendChild(function(){const e=document.createElement("div");e.classList.toggle("menu-div");const n=document.createElement("div");return n.classList.toggle("buttons-container"),e.appendChild(n),function(){const e=document.createElement("button");e.textContent="Add Project",e.classList.toggle("add-project");const n=document.createElement("button");n.textContent="Personal",n.classList.toggle("project-buttons"),n.classList.toggle("active-project");const o=document.querySelectorAll(".project-buttons").length;return t.allProjects.push(new t(n.textContent,o)),n.id=`${o}`,[e,n]}().forEach((e=>{n.appendChild(e)})),e}()),n.appendChild(u())}(),i(t.allProjects[0]),o();const s=document.querySelector("main");function m(e){let t=e.target.textContent;p(),s.appendChild(u()),"Add Project"===t&&function(){const e=document.querySelector(".content-div"),t=document.createElement("input");t.type="text",e.appendChild(t);const n=document.createElement("button");n.classList.toggle("new-project-button"),n.textContent="Add",e.appendChild(n),document.querySelector(".new-project-button").addEventListener("click",d)}()}function p(){const e=document.querySelector("main"),t=document.querySelector(".content-div");e.removeChild(t)}})();