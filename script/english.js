
"use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;

function initApp() {
    const questions = [
        {
            title: "Choose one of the following options that means the opposite of the given word; Copious:",
            options: ["Reverse", "Scarce", "Abundant", "Short"]
        }, {
            title: "She lived ____ the expectations.",
            options: ["as per", "up to", "on", "at"]
        }, {
            title: "He was very tired as he is working since 6 O' clock in the morning.",
            options: [
                "he was working",
                "he has been working",
                "he had been working",
                "he will be working"]
        }, 
        {
            title: "1. Maria reached office at 10 O' clock after sending the money. 2. Maria's parents needed some money.3. After that, she spent almost half an hour at the Post Office. 4. So, she went to bank to withdraw some money. 5. However, she had no money with her. Which of the following should come third in the paragraph?",
            options: [
                "1",
                "4",
                "3",
                "5"]
        },{
        title: "....... Indus River is the longest river in India.",
            options: [
                "A",
                "The",
                "An",
                "None"]
        },
        {
            title: "They walked ....... the edge of the land.",
                options: [
                    "up to",
                    "Both A and C",
                    "as far as",
                    "None"]
            },
            {
                title: ".............Himalayas provides protection to India against enemies.",
                    options: [
                        "A",
                        "The",
                        "An",
                        "None"]
                },
    ];



    quiz = new Quiz(
        "English",
        `Practice your comprehensive and grammar skills.`,
        60,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();

