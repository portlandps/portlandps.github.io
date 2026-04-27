const d=new Date().getDay();
document.querySelectorAll(`.WD${d}`).forEach(e=>e.classList.add("today"));