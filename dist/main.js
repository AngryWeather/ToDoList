(()=>{"use strict";function t(t){const n=document.querySelector(".content-div"),o=document.createElement("div");o.classList.toggle("heading-button-container"),n.appendChild(o);const c=document.createElement("h2");c.textContent=t.target.textContent,o.appendChild(c);const d=document.createElement("button");d.textContent="New Task",d.tabindex="0",o.appendChild(d),document.querySelector(".heading-button-container").addEventListener("click",e)}function e(){const t=document.querySelector(".content-div"),e=document.createElement("div");e.classList.toggle("new-task-container"),t.appendChild(e);const n=document.createElement("label");n.textContent="Description:",n.setAttribute("for","description"),e.appendChild(n);const o=document.createElement("input");o.type="text",o.id="description",e.appendChild(o);const c=document.createElement("label");c.textContent="Due date:",c.setAttribute("for","due-date"),e.appendChild(c);const d=document.createElement("input");d.type="date",d.id="due-date",e.appendChild(d);const i=document.createElement("div");i.classList.toggle("radio-container"),e.appendChild(i);const a=document.createElement("label");a.textContent="Priority:",a.setAttribute("for","priority"),i.appendChild(a);const r=document.createElement("input");r.id="low",r.type="radio",r.name="priority",i.appendChild(r);const l=document.createElement("label");l.textContent="Low",l.setAttribute("for","low"),i.appendChild(l);const u=document.createElement("input");u.id="medium",u.type="radio",u.name="priority",i.appendChild(u);const m=document.createElement("label");m.textContent="Medium",m.setAttribute("for","medium"),i.appendChild(m);const p=document.createElement("input");p.id="high",p.type="radio",p.name="priority",i.appendChild(p);const s=document.createElement("label");s.textContent="High",s.setAttribute("for","high"),i.appendChild(s)}!function(){const t=document.querySelector("body"),e=document.createElement("header");t.appendChild(e),e.appendChild(function(){const t=document.createElement("h1");return t.textContent="Just Do It",t}())}(),function(){const t=document.querySelector("body"),e=document.createElement("main");t.appendChild(e),e.appendChild(function(){const t=document.createElement("div");t.classList.toggle("menu-div");const e=document.createElement("div");return e.classList.toggle("buttons-container"),t.appendChild(e),function(){const t=document.createElement("button");t.textContent="Upcoming";const e=document.createElement("button");e.textContent="Add Project";const n=document.createElement("button");return n.textContent="Personal",n.classList.toggle("project-buttons"),[t,e,n]}().forEach((t=>{e.appendChild(t)})),t}()),e.appendChild(function(){const t=document.createElement("div");return t.classList.toggle("content-div"),t}())}(),document.querySelectorAll(".project-buttons").forEach((e=>{e.addEventListener("click",t)}))})();