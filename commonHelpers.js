import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as c}from"./assets/vendor-77e16229.js";const e=document.querySelector("button[data-start]"),n=document.querySelector("#datetime-picker"),u=document.querySelector("span[data-days]"),l=document.querySelector("span[data-hours]"),m=document.querySelector("span[data-minutes]"),p=document.querySelector("span[data-seconds]");let o;const h=1e3,y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(iziToast.show({message:"Please choose a date in the future",position:"topCenter",backgroundColor:"red",messageColor:"white",messageSize:"20"}),e.disabled=!0):(o=t[0]-new Date,e.disabled=!1)}};c(n,y);function f(t){const a=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),i=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:r,minutes:d,seconds:i}}e.addEventListener("click",S);function S(){e.disabled=!0,e.style.background="black",e.style.color="gray",n.disabled=!0;const t=setInterval(()=>{if(o>=1e3){o-=1e3;let s=f(o);g(s)}else clearInterval(t),iziToast.show({message:"Time is up!",position:"topCenter",backgroundColor:"green",messageColor:"white",messageSize:"20"}),e.disabled=!1,n.disabled=!1},h)}function g(t){u.textContent=String(t.days).padStart(2,"0"),l.textContent=String(t.hours).padStart(2,"0"),m.textContent=String(t.minutes).padStart(2,"0"),p.textContent=String(t.seconds).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map