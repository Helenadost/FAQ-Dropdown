'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const question = document.querySelectorAll(".question");
    const answer = document.querySelectorAll(".answer");
    const arrow = document.querySelectorAll(".question_arrow");
    let visibleBoxIndex = -1;

    for (let i = 0; i < question.length; i++) {
        question[i].onclick = function () {
            const clickedIndex = i;
            const clickedAnswer = answer[clickedIndex];
            const clickedArrow = arrow[clickedIndex];

            if (clickedAnswer.classList.contains("visible")) {
                clickedAnswer.classList.remove("visible");
                clickedArrow.classList.remove("question_arrow--rotate");
                question[clickedIndex].classList.remove("question_color");
                visibleBoxIndex = -1;
            } else {
                if (visibleBoxIndex >= 0 && visibleBoxIndex !== clickedIndex) {
                    answer[visibleBoxIndex].classList.remove("visible");
                    arrow[visibleBoxIndex].classList.remove("question_arrow--rotate");
                    question[visibleBoxIndex].classList.remove("question_color");
                }
                clickedAnswer.classList.add("visible");
                clickedArrow.classList.add("question_arrow--rotate");
                question[clickedIndex].classList.add("question_color");
                visibleBoxIndex = clickedIndex;
            }
        };
    }
});
