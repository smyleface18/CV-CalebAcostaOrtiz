


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true, 
    autoplay: {
      delay: 1000
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  const head_project =[...document.querySelectorAll("#proyectos")];
  const body_project = [...document.querySelectorAll(".body_project")];

  for (let index = 0; index < head_project.length; index++) {
    let head = head_project[index];
    let body = body_project[index];
      head.addEventListener("click", ()=>{
          body.classList.toggle("none")
      });

    }



