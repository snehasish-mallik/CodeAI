
    "use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;

function initApp() {
    const questions = [
        {
            title: "Which number should come next in the series, 48, 24, 12, ......?",
            options: ["8", "6", "4", "10"]
        }, {
            title: "RQP, ONM, _, IHG, FED, find the missing letters.",
            options: ["LKM", "LKJ", "LKN", "LKI"]
        }, {
            title: "I. All the colleges in the city had to keep closed for three days a week. II. Many students have left the local colleges.",
            options: [
                "Statement II is the cause and statement I is its effect",
                "Both the statements are effects of independent causes",
                "Both the statements are effects of some common cause",
                "Both the statements are independent causes"]
        }, {
            title: `Pointing to a photograph, a man said, "I have no brother, and that man's father is my father's son." Whose photograph was it?`,
            options: [
                'His own',
                'His son',
                'His father',
                'His wife">'
            ]
        }, {
            title: 'Peter is in the East of Tom and Tom is in the North of John. Mike is in the South of John then in which direction of Peter is Mike?',
            options: [
                'South-east',
                'South-west',
                'North',
                'South',
            ]
        }, {
            title: `If you are a fitness walker, you don't need to go to a health gym. You also don't need any fitness equipment for workout. All you need is a pair of comfortable athletic shoes.This paragraph supports which of the following statements;`,
            options: [
                'Walking outdoors provides more health benefits than walking indoors',
                'Fitness walking is an effective and convenient form of exercise',
                'Fitness walking is better than weight lifting',
                'Poorly designed shoes can cause foot injuries',
            ]
        }, {
        title: `In a certain code language, "BAD" is written as "7" and "SAP" is written as "9". How is "BAN"written in that code language?`,
                    options: [
                        "8",
                        "3",
                        "4",
                        "6"]
                },
                {

title: ". In the following question, correct the equation by interchanging two signs. 9 x 3 + 8 ÷ 4 – 7 = 28",
                    options: [
                        "x and - ",
                        "+ and -",
                        "÷ and +",
                        "x and ÷ "]
                },
                {
title: ". If ADDA is codded as 1881 and DIG is codded as 4187. Then how PHONE is codded as codded as?",
                    options: [
                        "161630285",
                        "530162816",
                        "162816305",
                        "51628305 "]
                },
                {
title: "If ‘dear’ is coded as 1234, ‘head’ is coded as 2345, ‘tear’ is coded as 1346, ‘help’ is coded as 4758, then What can be the possible code for the word ‘their’?",
options: [
                        "65391",
                        "15698",
                        "54961",
                        "95312"]
                },{                
title: "Saumya is standing facing north. She walks 10 km straight, turns left and walks another 10 km and turns right and walks 5 km and finally turns left and walks 15 km, to reach a park. Which direction is she facing now ?",
                    options: [
                        "EAST",
                        "NORTH",
                        "SOUTH",
                        "WEST"]
                },{
                
title: "Ramesh was born on 4th October 1999. Dinesh was born 6 days before Ramesh. The Independence Day of that year fell on Sunday. Which day was Dinesh born?",
                    options: [
                        "WEDNESDAY",
                        "TUESDAY",
                        "MONADY",
                        "SUNDAY"]
                },{
title: "Which one-set of letters when sequentially placed at the gaps in the given letter series shall complete it? __cb__cab__baca__cba__ab",
                    options: [
                        "bacbc",
                        "cabcb",
                        "bcaba",
                        "abccb"]
                },{
title: "What was the day on 19 Feb 2010 ?",
                    options: [
                        "FRIDAY",
                        "SUNDAY",
                        "THURSDAY",
                        "SATURDAY"]
                },{
title: "Which of the following terms follows the trend of the given list? XZYXYXYXY, XYZXYXYXY, XYXZYXYXY, XYXYZXYXY, XYXYXZYXY, _______________. ",
                    options: [
                        " XYZXYXYXY",
                        " ZXYXYXYXY ",
                        " XZYXYXYXY ",
                        " XYXYXYZXY "]
                },

{             
title: "Two navy ships start from the same port. Ship A travels 23 km West, then turns to its left and travels 19 km. Ship B travels 19 km West, then turns North and travels 5 km, then turns to its left and travels 4 km. Where is ship A with respect to ship B? ",
                    options: [
                        "14 km North",
                        "24 km North",
                        "14 Km South",
                        "24 km South"]
                },
                {
title: "A series is given with one term missing. Select the correct alternative from the given ones that will complete the series. HOT, GMQ, FKN, EIK, ?",
                    options: [
                        "DGH",
                        "CGH",
                        "DHI",
                        "CHI"]
                },{
title: "Three of the following four letter-clusters are alike in a certain way and one is different. Pick the odd one out. ",
                    options: [
                        "WYA",
                        "KMO",
                        "FHI",
                        "CEG"]
                },{
title: "Select the set in which the numbers are related in the same way as are the number of the following set (7, 4, 65) ",
                    options: [
                        "(11, 8, 99)",
                        "(7, 6, 72) ",
                        "(9, 8, 145)",
                        "(5, 4, 40) "]
                },{
title: "Which two sign need to be interchange to make the following equation correct 53 ÷ 7 – 10 × 2 + 3 = 53.33",
                    options: [
                        "– and ×",
                        "+ and ×",
                        "÷ and +",
                        "÷ and ×"]
                },{
title: "In the following question, select the related word pair from the given alternatives. Shout : Speak : : ? : ? ",
                    options: [
                        "Rage : Anger",
                        "Drown : Water",
                        "Famous : People ",
                        "Petrol : Fuel "]
                },{
title: "In the following question, select the related letter/letters from the given alternatives. VOT : SLQ : : HRX : ? ",
                    options: [
                        "RVH",
                        "EOU",
                        "EMS",
                        "KOC"]
                },
                {
title: "In the following question, four number pairs are given. The number on left side of (–) is related to the number of the right side of (–) with some Logic/Rule/Relation. Three are similar on basis of same Logic/Rule/Relation. Select the odd one out from the given alternatives. ",
                    options: [
                        "33-88",
                        "44-88",
                        "14-28",
                        "12-24"]
                },
                {
title: "In the following question, select the odd letter/letters from the given alternatives.",
                    options: [
                        "XRL",
                        "SMG",
                        "PJC",
                        "LFZ"]
                },

        {
                title: "Look at this series: 12, 11, 13, 12, 14, 13, … What number should come next?",
                                    options: [
                                        "10",
                                        "16",
                                        "13",
                                        "15"]
                                },
                {
                title: "Look at this series: 36, 34, 30, 28, 24, … What number should come next?",
                                    options: [
                                        "22",
                                        "26",
                                        "23",
                                        "20"]
                                },
                {
                title: "Look at this series: 7, 10, 8, 11, 9, 12, … What number should come next?",
                                    options: [
                                        "7",
                                        "12",
                                        "10",
                                        "13"]
                                },
                {
                title: " Which letter is seventh from left of 16th from right in English alphabet?",
                                    options: [
                                        "D",
                                        "W",
                                        "R",
                                        "E"]
                                },
                {
                title: "Which letter is 5th at right of 12 from right?",
                                    options: [
                                        "Q",
                                        "P",
                                        "G",
                                        "R"]
                                },
                {
                title: "If 72 x 96 = 6927, 58 x 87 = 7885, then 79 x 86 = ?",
                                    options: [
                                        "7689",
                                        "8976",
                                        "6897",
                                        "6978"]
                                },
                {
                title: "If 11 (170)16, 11(203)19, then value of 17(?)18 will be –",
                                    options: [
                                        "200",
                                        "300",
                                        "400",
                                        "None"]
                                },
                {
                title: "a = 14 (290) 15 = b= 16 (330) 17 C= 18(?) 19",
                                    options: [
                                        "300",
                                        "270",
                                        "170",
                                        "370"]
                                },
                {
                title: "2, 12, 36, 80, 150, ?",
                                    options: [
                                        "250",
                                        "252",
                                        "200",
                                        "270"]
                                },
                {
                title: "Complete the series 1,6,13,22,33,..",
                                    options: [
                                        "46",
                                        "48",
                                        "49",
                                        "51"]
                                },
                {
                title: "At a conference, 12 members shook hands with each other before & after the meeting. How many total number of hand shakes occurred?",
                                    options: [
                                        "100",
                                        "122",
                                        "132",
                                        "145"]
                                },
                {
                title: "6, 12, 1, 13, 5 is to flame as 2, 12, 15, 1, 20 is to ?",
                                    options: [
                                        "voice",
                                        "bald",
                                        "bloat",
                                        "castle"]
                                },
                {
                title: "In alphabet series, some alphabets are missing which are given in that order as one of the alternatives below it. Choose the correct alternative. G4T, J10R, M20P, P43N, S90L",
                                    options: [
                                        "G4T",
                                        "J10R",
                                        "M20P",
                                        "P43N"]
                                },
                {
                title: "In alphabet series, some alphabets are missing which are given in that order as one of the alternatives below it. Choose the correct alternative. adb _ ac _ da _ cddcb _ dbc _ cbda",
                                    options: [
                                        "bccba",
                                        "cbbaa",
                                        "ccbba",
                                        "bbca"]
                                },
                {
                title: "Museum is related to Curator in the same way as Prison is related to ",
                                    options: [
                                        "Manager",
                                        "Monitor",
                                        "Jailor",
                                        "Warden"]
                                },
                  {
                    title: "If 72 x 96 = 6927, 58 x 87 = 7885, then 79 x 86 = ?",
                                    options: [
                                        "7689",
                                        "8976",
                                        "6897",
                                        "6978"]
                                },


            

    ];

    quiz = new Quiz(
        "Reasoning",
        `Practice your logical and verbal reasoning skills.`,
        60,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();

