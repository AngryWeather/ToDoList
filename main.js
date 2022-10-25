(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{F:()=>h,r:()=>m});class t{static allProjects=[];static projects=JSON.parse(localStorage.getItem("projects"))||[];constructor(e,t){this.name=e,this.id=t,this.tasks=[]}removeTask(e){this.tasks.splice(e,1)}static setProjects(){localStorage.setItem("projects",JSON.stringify(t.projects))}}class n{constructor(e,t,n){this.description=e,this.dueDate=t,this.priority=n,this.done=!1}}function o(){document.querySelector(".add-project").addEventListener("click",m),document.querySelectorAll(".project-buttons").forEach((e=>{e.addEventListener("click",d)}))}function c(e){const o=t.projects[Number(document.querySelector(".active-project").id)];if(!(document.querySelector("#description").value&&document.querySelector("#due-date").value&&document.querySelector("input[name=priority]:checked")))return!1;{const e=document.querySelector("#description").value,c=document.querySelector("#due-date").value,r=document.querySelector("input[name=priority]:checked").value;o.tasks.push(new n(e,c,r)),t.setProjects(),s(),i(o)}}function r(e){const n=document.querySelector(".content-div > input").value,o=document.querySelectorAll(".project-buttons").length,c=String(o),r=new t(n,o);t.projects.push(r),t.setProjects(),i(r),u(r);const d=document.querySelector(`[id='${c}']`);document.querySelectorAll(".project-buttons").forEach((e=>{e.classList.remove("active-project")})),d.classList.toggle("active-project")}function d(e){document.querySelectorAll(".project-buttons").forEach((e=>{e.classList.remove("active-project")})),e.target.classList.add("active-project");const n=t.projects[Number(e.target.id)];console.log("Current:"),console.log(t.projects),i(n)}function i(e){const n=document.querySelector("main");h();const o=a();n.appendChild(o);const c=document.createElement("div");c.classList.toggle("heading-button-container"),o.appendChild(c);const r=document.createElement("h2");r.textContent=e.name,c.appendChild(r);const d=document.createElement("button");d.textContent="New Task",d.tabindex="0",c.appendChild(d);const s=document.createElement("button");s.textContent="Remove",s.addEventListener("click",(function(n){if(!e)return!1;let o;if(!t.projects[Number(e.id-1)]&&!t.projects[Number(e.id+1)]){const e=document.querySelector(".heading-button-container");if(4!=e.childElementCount){const t=document.createElement("p");t.textContent="Can't have 0 projects!",e.appendChild(t)}return!1}if(o=t.projects[Number(e.id-1)]?t.projects[Number(e.id-1)]:t.projects[Number(e.id+1)],function(e){const n=document.querySelector(".buttons-container"),o=document.querySelector(`[id='${e}']`);n.removeChild(o),console.log("Remove projcts"),console.log(t.projects)}(e.id),t.projects.splice(Number(e.id),1),function(){for(let e=0;e<t.projects.length;e++)t.projects[e].id=e,document.querySelectorAll(".project-buttons")[e].id=String(e),console.log("reset id: "+t.projects[e].id),t.setProjects()}(),!o)return!1;i(o)})),c.appendChild(s),document.querySelector(".heading-button-container > button").addEventListener("click",l);const u=document.createElement("div");u.classList.toggle("tasks-container"),o.appendChild(u),e.tasks.forEach((n=>{const o=document.createElement("div");o.classList.toggle("checkbox-container"),u.appendChild(o);const c=document.createElement("input");c.type="checkbox",c.value=`${n.description}`,c.id=`${n.description}`,c.checked=n.done,c.addEventListener("change",(function(e){n.done=e.target.checked,t.setProjects()}));const r=document.createElement("label");r.setAttribute("for",c.id),r.textContent=c.value,o.appendChild(c),o.appendChild(r);const d=document.createElement("div");o.appendChild(d);const l=document.createElement("p");l.textContent="Due date: ",d.appendChild(l);const s=document.createElement("p");s.textContent=`${n.dueDate}`,d.appendChild(s);const a=document.createElement("div");o.appendChild(a);const p=document.createElement("p");p.textContent="Priority: ",a.appendChild(p);const m=document.createElement("p");m.textContent=`${n.priority}`,a.appendChild(m);const h=document.createElement("div");h.classList.toggle("remove-container"),o.appendChild(h);const C=document.createElement("p");C.textContent="Remove:",h.appendChild(C);const g=document.createElement("button");g.addEventListener("click",(function(t){e.removeTask(e.tasks.indexOf(n)),i(e)})),g.textContent="X",h.appendChild(g)}))}function l(){const e=document.querySelector(".heading-button-container");if(4===e.childElementCount){const t=document.querySelector(".heading-button-container > p");e.removeChild(t)}const t=document.querySelector(".content-div"),n=document.createElement("div");n.classList.toggle("new-task-container"),t.appendChild(n);const o=document.createElement("form");n.appendChild(o);const r=document.createElement("label");r.textContent="Description:",r.setAttribute("for","description"),o.appendChild(r);const d=document.createElement("input");d.required=!0,d.type="text",d.id="description",o.appendChild(d);const i=document.createElement("label");i.textContent="Due date:",i.setAttribute("for","due-date"),o.appendChild(i);const l=document.createElement("input");l.required=!0,l.type="date",l.id="due-date",o.appendChild(l);const a=document.createElement("label");a.textContent="Priority:",a.setAttribute("for","priority"),o.appendChild(a);const u=document.createElement("div");u.classList.toggle("radio-container"),o.appendChild(u);const p=document.createElement("input");p.required=!0,p.id="low",p.type="radio",p.name="priority",p.value="low",u.appendChild(p);const m=document.createElement("label");m.textContent="Low",m.setAttribute("for","low"),u.appendChild(m);const h=document.createElement("input");h.required=!0,h.id="medium",h.value="medium",h.type="radio",h.name="priority",u.appendChild(h);const C=document.createElement("label");C.textContent="Medium",C.setAttribute("for","medium"),u.appendChild(C);const g=document.createElement("input");g.required=!0,g.id="high",g.value="high",g.type="radio",g.name="priority",u.appendChild(g);const b=document.createElement("label");b.textContent="High",b.setAttribute("for","high"),u.appendChild(b);const E=document.createElement("div");E.classList.toggle("add-cancel-container"),o.appendChild(E);const v=document.createElement("button");v.type="submit",v.textContent="Add Task",E.appendChild(v);const y=document.createElement("button");y.textContent="Cancel",E.appendChild(y),document.querySelector(".add-cancel-container > button:first-child").addEventListener("click",c),document.querySelector(".add-cancel-container > button:nth-child(2)").addEventListener("click",s)}function s(){const e=document.querySelector(".content-div"),t=document.querySelector(".new-task-container");e.removeChild(t)}function a(){const e=document.createElement("div");return e.classList.toggle("content-div"),e}function u(e){const t=document.querySelector(".buttons-container"),n=document.createElement("button");n.classList.toggle("project-buttons"),n.textContent=e.name,n.id=e.id,t.appendChild(n),o()}if(function(){const e=document.querySelector("body"),t=document.createElement("header");e.appendChild(t),t.appendChild(function(){const e=document.createElement("h1");return e.textContent="Just Do It",e}())}(),function(){const e=document.querySelector("body"),n=document.createElement("main");e.appendChild(n),n.appendChild(function(){const e=document.createElement("div");e.classList.toggle("menu-div");const n=document.createElement("div");return n.classList.toggle("buttons-container"),e.appendChild(n),function(){const e=document.createElement("button");e.textContent="Add Project",e.classList.toggle("add-project");const n=[];if(n.push(e),!t.projects.length){console.log("Creating personal button...");const e=document.createElement("button");e.textContent="Personal",e.classList.toggle("project-buttons"),e.classList.toggle("active-project");const n=document.querySelectorAll(".project-buttons").length;e.id=`${n}`,t.projects.push(new t(e.textContent,n)),t.setProjects()}return n}().forEach((e=>{n.appendChild(e)})),e}()),n.appendChild(a())}(),console.log("Before id: "+t.projects[0].id),t.projects.length)for(let e=0;e<t.projects.length;e++)u(t.projects[e]);console.log("After id: "+t.projects[0].id),i(t.projects[0]),o();const p=document.querySelector("main");function m(e){let t=e.target.textContent;h(),p.appendChild(a()),"Add Project"===t&&function(){const e=document.querySelector(".content-div"),t=document.createElement("input");t.type="text",t.classList.toggle("new-project-input"),e.appendChild(t);const n=document.createElement("button");n.classList.toggle("new-project-button"),n.textContent="Add",e.appendChild(n),document.querySelector(".new-project-button").addEventListener("click",r)}()}function h(){const e=document.querySelector("main"),t=document.querySelector(".content-div");e.removeChild(t)}})();