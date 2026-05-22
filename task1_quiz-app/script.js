const quizData = [
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "font", "css"],
    answer: "style"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Oracle"],
    answer: "Netscape"
  },
  {
    question: "Which CSS property controls text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "Which HTML tag is used to insert an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "<img>"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "#"],
    answer: "//"
  },
  {
    question: "Which method converts JSON to object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "parse.JSON()"],
    answer: "JSON.parse()"
  },
  {
    question: "Which HTML tag is used for line break?",
    options: ["<break>", "<lb>", "<br>", "<line>"],
    answer: "<br>"
  },
  {
    question: "Which CSS property makes text bold?",
    options: ["font-weight", "text-bold", "bold", "style-bold"],
    answer: "font-weight"
  },
  {
    question: "Which operator is used for strict equality?",
    options: ["==", "===", "=", "!="],
    answer: "==="
  },
  {
    question: "Which HTML element is used for the largest heading?",
    options: ["<h6>", "<h1>", "<head>", "<header>"],
    answer: "<h1>"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const progressEl = document.getElementById("progress");

function loadQuestion() {
  let q = quizData[currentQuestion];

  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  progressEl.innerText = `Question ${currentQuestion + 1} / ${quizData.length}`;

  q.options.forEach(option => {
    let btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => {
      let allBtns = optionsEl.children;

      for (let b of allBtns) {
        b.disabled = true;

        if (b.innerText === q.answer) {
          b.classList.add("correct");
        } else if (b.innerText === option) {
          b.classList.add("wrong");
        }
      }

      if (option === q.answer) {
        score++;
      }
    };

    optionsEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.innerText = "Quiz Completed Successfully!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";

    progressEl.innerText = "";
    scoreEl.innerText = `Your Score: ${score} / ${quizData.length}`;
  }
};

loadQuestion();