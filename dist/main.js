(()=>{"use strict";function t(t){const n=document.querySelector(".content-div"),o=document.createElement("div");o.classList.toggle("heading-button-container"),n.appendChild(o);const c=document.createElement("h2");c.textContent=t.target.textContent,o.appendChild(c);const d=document.createElement("button");d.textContent="New Task",d.tabindex="0",o.appendChild(d),document.querySelector(".heading-button-container").addEventListener("click",e)}function e(){const t=document.querySelector(".content-div"),e=document.createElement("div");e.classList.toggle("new-task-container"),t.appendChild(e);const n=document.createElement("label");n.textContent="Description:",n.setAttribute("for","description"),e.appendChild(n);const o=document.createElement("input");o.type="text",o.id="description",e.appendChild(o);const c=document.createElement("label");c.textContent="Due date:",c.setAttribute("for","due-date"),e.appendChild(c);const d=document.createElement("input");d.type="date",d.id="due-date",e.appendChild(d);const i=document.createElement("label");i.textContent="Priority:",i.setAttribute("for","priority"),e.appendChild(i);const a=document.createElement("div");a.classList.toggle("radio-container"),e.appendChild(a);const l=document.createElement("input");l.id="low",l.type="radio",l.name="priority",a.appendChild(l);const r=document.createElement("label");r.textContent="Low",r.setAttribute("for","low"),a.appendChild(r);const u=document.createElement("input");u.id="medium",u.type="radio",u.name="priority",a.appendChild(u);const m=document.createElement("label");m.textContent="Medium",m.setAttribute("for","medium"),a.appendChild(m);const s=document.createElement("input");s.id="high",s.type="radio",s.name="priority",a.appendChild(s);const p=document.createElement("label");p.textContent="High",p.setAttribute("for","high"),a.appendChild(p);const C=document.createElement("div");C.classList.toggle("add-cancel-container"),e.appendChild(C);const h=document.createElement("button");h.textContent="Add Task",C.appendChild(h);const E=document.createElement("button");E.textContent="Cancel",C.appendChild(E)}!function(){const t=document.querySelector("body"),e=document.createElement("header");t.appendChild(e),e.appendChild(function(){const t=document.createElement("h1");return t.textContent="Just Do It",t}())}(),function(){const t=document.querySelector("body"),e=document.createElement("main");t.appendChild(e),e.appendChild(function(){const t=document.createElement("div");t.classList.toggle("menu-div");const e=document.createElement("div");return e.classList.toggle("buttons-container"),t.appendChild(e),function(){const t=document.createElement("button");t.textContent="Upcoming";const e=document.createElement("button");e.textContent="Add Project";const n=document.createElement("button");return n.textContent="Personal",n.classList.toggle("project-buttons"),[t,e,n]}().forEach((t=>{e.appendChild(t)})),t}()),e.appendChild(function(){const t=document.createElement("div");return t.classList.toggle("content-div"),t}())}(),document.querySelectorAll(".project-buttons").forEach((e=>{e.addEventListener("click",t)}))})();