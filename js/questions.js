(function(){
    const titleQuestions = [...document.querySelectorAll('.questions_title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions_padding--add');
            question.children[0].classList.toggle('questions_arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();

const button = document.querySelector(".btn-primary");

button.addEventListener("click", e => {
    const name = document.querySelector("#Name");
    const LastName = document.querySelector("#LastName");
    const Email = document.querySelector("#Email");
    const Password = document.querySelector("#Password");
    let data = {};
    data.name = name.innerHTML
    console.log(data.name)
}
);