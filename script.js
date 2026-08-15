/* =========================================
   NEUROX
   CONTROL & COORDINATION QUIZ
========================================= */


/* ---------- QUESTIONS ---------- */

const quiz = [

    {
        question:
        "What is the basic structural and functional unit of the nervous system?",

        answers: [
            "Neuron",
            "Hormone",
            "Gland",
            "Muscle"
        ],

        correct: 0
    },


    {
        question:
        "Which part of the brain mainly controls balance and posture?",

        answers: [
            "Forebrain",
            "Cerebellum",
            "Medulla",
            "Spinal cord"
        ],

        correct: 1
    },


    {
        question:
        "Which part of the nervous system commonly coordinates reflex actions?",

        answers: [
            "Spinal cord",
            "Forebrain",
            "Cerebellum",
            "Eye"
        ],

        correct: 0
    },


    {
        question:
        "A reflex action is usually:",

        answers: [
            "Slow and voluntary",
            "Fast and automatic",
            "Always conscious",
            "Only found in plants"
        ],

        correct: 1
    },


    {
        question:
        "Growth of a plant towards light is called:",

        answers: [
            "Geotropism",
            "Hydrotropism",
            "Phototropism",
            "Chemotropism"
        ],

        correct: 2
    },


    {
        question:
        "Which sequence represents a reflex arc?",

        answers: [
            "Receptor → Sensory neuron → Spinal cord → Motor neuron → Effector",

            "Brain → Muscle → Receptor",

            "Effector → Brain → Receptor",

            "Motor neuron → Receptor → Brain"
        ],

        correct: 0
    },


    {
        question:
        "Which hormone helps regulate blood glucose level?",

        answers: [
            "Auxin",
            "Insulin",
            "Adrenaline",
            "Thyroxine"
        ],

        correct: 1
    }

];


/* ---------- QUIZ VARIABLES ---------- */

let currentQuestion = 0;

let score = 0;

let quizLocked = false;


/* ---------- GET ELEMENTS ---------- */

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const questionNumberElement =
    document.getElementById("question-number");

const scoreElement =
    document.getElementById("score");

const messageElement =
    document.getElementById("quiz-message");

const nextButton =
    document.getElementById("next-button");

const finalResult =
    document.getElementById("final-result");

const rewardCard =
    document.getElementById("reward-card");

const rewardIcon =
    document.getElementById("reward-icon");

const rewardTitle =
    document.getElementById("reward-title");

const rewardText =
    document.getElementById("reward-text");

const rewardScore =
    document.getElementById("reward-score");


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    quizLocked = false;

    const current = quiz[currentQuestion];


    /* QUESTION */

    questionElement.textContent =
        current.question;


    /* QUESTION NUMBER */

    questionNumberElement.textContent =
        "QUESTION " +
        (currentQuestion + 1) +
        " / " +
        quiz.length;


    /* SCORE */

    scoreElement.textContent =
        "SCORE: " + score;


    /* CLEAR MESSAGE */

    messageElement.textContent = "";


    /* HIDE NEXT */

    nextButton.style.display = "none";


    /* CLEAR OLD ANSWERS */

    answersElement.innerHTML = "";


    /* CREATE ANSWERS */

    current.answers.forEach(
        function(answer, index) {

            const button =
                document.createElement("button");


            button.className =
                "answer";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                function() {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );

}


/* =========================================
   CHECK ANSWER
========================================= */

function selectAnswer(
    selectedAnswer,
    selectedButton
) {

    if (quizLocked) {
        return;
    }


    quizLocked = true;


    const correctAnswer =
        quiz[currentQuestion].correct;


    const allButtons =
        document.querySelectorAll(
            ".answer"
        );


    /* SHOW CORRECT ANSWER */

    allButtons.forEach(
        function(button, index) {

            button.disabled = true;


            if (index === correctAnswer) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    /* CORRECT */

    if (selectedAnswer === correctAnswer) {

        score++;


        selectedButton.classList.add(
            "correct"
        );


        messageElement.textContent =
            "✓ CORRECT — AURA LEVEL UP 🔥";

    }


    /* WRONG */

    else {

        selectedButton.classList.add(
            "wrong"
        );


        messageElement.textContent =
            "✕ Not quite — the correct answer is highlighted.";

    }


    /* UPDATE SCORE */

    scoreElement.textContent =
        "SCORE: " + score;


    /* SHOW NEXT */

    nextButton.style.display =
        "inline-block";


    /* LAST QUESTION */

    if (
        currentQuestion ===
        quiz.length - 1
    ) {

        nextButton.textContent =
            "UNLOCK MY REWARD →";

    }

}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    currentQuestion++;


    /* MORE QUESTIONS */

    if (
        currentQuestion <
        quiz.length
    ) {

        loadQuestion();

        return;

    }


    /* QUIZ COMPLETE */

    finishQuiz();

}


/* =========================================
   FINISH QUIZ
========================================= */

function finishQuiz() {

    questionElement.textContent =
        "SYSTEM CHECK COMPLETE";


    answersElement.innerHTML = "";


    messageElement.textContent = "";


    nextButton.style.display =
        "none";


    questionNumberElement.textContent =
        "MISSION COMPLETE";


    scoreElement.textContent =
        "FINAL SCORE: " +
        score +
        " / " +
        quiz.length;


    finalResult.textContent =
        "🔥 " +
        score +
        " / " +
        quiz.length;


    unlockReward();

}


/* =========================================
   REWARD SYSTEM
========================================= */

function unlockReward() {

    let icon;

    let title;

    let text;


    /* 7 / 7 */

    if (score === 7) {

        icon = "👑";

        title =
            "NEURO MASTER";

        text =
            "Perfect run. Your control and coordination knowledge is elite.";

    }


    /* 6 / 7 */

    else if (score === 6) {

        icon = "⚡";

        title =
            "BRAIN COMMANDER";

        text =
            "Almost perfect. Your neural knowledge is seriously powerful.";

    }


    /* 4–5 */

    else if (score >= 4) {

        icon = "🧠";

        title =
            "NEURAL PRO";

        text =
            "Strong understanding. Keep sharpening your biology skills.";

    }


    /* 2–3 */

    else if (score >= 2) {

        icon = "🔬";

        title =
            "BIO EXPLORER";

        text =
            "Good start. Explore the chapter once more and level up.";

    }


    /* 0–1 */

    else {

        icon = "🚀";

        title =
            "SYSTEM INITIATED";

        text =
            "Your mission has started. Revise the chapter and try again.";

    }


    /* PUT REWARD ON SCREEN */

    rewardIcon.textContent =
        icon;


    rewardTitle.textContent =
        title;


    rewardText.textContent =
        text;


    rewardScore.textContent =
        "AURA SCORE: " +
        score +
        " / " +
        quiz.length;


    rewardCard.style.display =
        "block";


    /* SCROLL TO REWARD */

    setTimeout(
        function() {

            rewardCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        },
        200
    );

}


/* =========================================
   START QUIZ
========================================= */

loadQuestion();
