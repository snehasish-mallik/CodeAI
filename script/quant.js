
"use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;

function initApp() {
    const questions = [
        {
            title: "What is the difference in the place value of 5 in the numeral 754853?",
            options: ["49990", "49950", "49980", "49985"]
        }, {
            title: "What is the compound interest on Rs. 2500 for 2 years at rate of interest 4% per annum?",
            options: ["190", "204", "180", "200"]
        }, {
            title: "Sohan started a business with a capital of Rs. 80000. After 6 months Mohan joined as a partner by investing Rs. 65000. After one year they earned total profit Rs. 20000. What is share of Sohan in the profit?",
            options: [
                "5666.9",
                "5777.7",
                "5980.9",
                "5707.9"]
        }, {
            title: "A mother is twice as old as her son. If 20 years ago, the age of the mother was 10 times the age of the son, what is the present age of the mother?",
            options: [
                '42',
                '45',
                '43',
                '40'
            ]
        }, {
            title: 'If January 1, 1996, was Monday, what day of the week was January 1, 1997?',
            options: [
                'Tuesday',
                'Wednesday',
                'Friday',
                'Monday',
            ]
        }, {
            title: 'The speed of a boat in still water is 5km/hr. If the speed of the boat against the stream is 3 km/hr, what is the speed of the stream?',
            options: [
                '1.5 km/hr',
                '2 km/hr',
                '2.5 km/h',
                '3 km/hr',
            ]
        }, {
            title: 'Two ships are sailing in the sea on the two sides of a lighthouse. The angles of elevation of the top of the lighthouse observed from the ships are 30° and 45° respectively. If the lighthouse is 100m high, find the distance between the two ships.',
            options: [
                '156.90',
                '157.80',
                '157.60',
                '158.40',
            ]
        },
        {
            title: 'A pipe can fill a tank in 6 hours and another pipe can empty the tank in 12 hours. If both the pipes are opened at the same time,the tank can be filled in',
            options: [
                '10 hours',
                '12 hours',
                '13 hours',
                '15 hours',
            ]
        },
        {
            title: 'If Suresh borrows Rs. 36000 from Mahesh at rate of interest 6% S.I, at the end of four years how much interest Suresh has to pay along with principal amount?',
            options: [
                '12980',
                '12960',
                '12970',
                '12965',
            ]
        },
        {
            title: 'The true discount on a bill of Rs. 2700 is Rs. 200. What is the bankers discount?',
            options: [
                '212',
                '216',
                '214',
                '218',
            ]
        }
        
    ];

    quiz = new Quiz(
        "Quant",
        `Practice quants to improve your problem solving skills.`,
        60,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();
