import"./header-z90vIBaH.js";import"./navbar-TWqOeaez.js";function i(t){const c={1:[[50,50]],2:[[20,20],[80,80]],3:[[20,20],[50,50],[80,80]],4:[[20,20],[20,80],[80,20],[80,80]],5:[[20,20],[20,80],[50,50],[80,20],[80,80]],6:[[20,20],[20,80],[50,20],[50,80],[80,20],[80,80]]},e=document.createElement("div");e.classList.add("dice");for(const n of c[t]){const o=document.createElement("div");o.classList.add("dice-dot"),o.style.setProperty("--top",`${n[0]}%`),o.style.setProperty("--left",`${n[1]}%`),e.appendChild(o)}return e}function r(t,c){t.innerHTML="";for(let e=0;e<c;e++){const n=Math.floor(Math.random()*6+1),o=i(n);t.appendChild(o)}}const d=document.querySelector(".dice-container"),s=document.querySelector(".btn-roll-dice"),l=4;s.addEventListener("click",()=>{const t=setInterval(()=>{r(d,l)},50);setTimeout(()=>{clearInterval(t)},1e3)});