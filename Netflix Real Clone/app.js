const PlusIcon1 = document.getElementById("plusIcon1");
const PlusIcon2 = document.getElementById("plusIcon2");
const PlusIcon3 = document.getElementById("plusIcon3");
const PlusIcon4 = document.getElementById("plusIcon4");
const PlusIcon5 = document.getElementById("plusIcon5");
const PlusIcon6 = document.getElementById("plusIcon6");
let Answers = document.getElementsByClassName("FaqAnswersContainer");
// for 1

PlusIcon1.addEventListener("click", () => {
    PlusIcon1.classList.toggle("ToggleThePlusIcon");
    Answers[0].classList.toggle("ToggleTheAnswerContainer");
});
//for 2
PlusIcon2.addEventListener("click", () => {
    PlusIcon2.classList.toggle("ToggleThePlusIcon")
    Answers[1].classList.toggle("ToggleTheAnswerContainer");
});
// for 3
PlusIcon3.addEventListener("click", () => {
    PlusIcon3.classList.toggle("ToggleThePlusIcon")
    Answers[2].classList.toggle("ToggleTheAnswerContainer");

});
// for 4
PlusIcon4.addEventListener("click", () => {
    PlusIcon4.classList.toggle("ToggleThePlusIcon")
    Answers[3].classList.toggle("ToggleTheAnswerContainer");
});
// for 5
PlusIcon5.addEventListener("click", () => {
    PlusIcon5.classList.toggle("ToggleThePlusIcon")
    Answers[4].classList.toggle("ToggleTheAnswerContainer");
});
// for 6
PlusIcon6.addEventListener("click", () => {
    PlusIcon6.classList.toggle("ToggleThePlusIcon")
    Answers[5].classList.toggle("ToggleTheAnswerContainer");
});


//Now for fade in and fade out of answer box
// 3 property to target scale, display, transform translate
