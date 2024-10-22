


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true, 
    autoplay: {
      delay: 380
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

 /*
  const head_project =[...document.querySelectorAll("#head_project")];
  const body_project = [...document.querySelectorAll(".body_project")];
  const iconProject = [...document.querySelectorAll("#iconProject")];
  for (let index = 0; index < head_project.length; index++) {
    let head = head_project[index];
    let body = body_project[index];
    let icon = iconProject[index];
      head.addEventListener("click", ()=>{
          body.classList.toggle("none")
          icon.classList.toggle("questions_arrow--rotate")
      });

    }
*/


