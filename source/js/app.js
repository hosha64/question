const questions = [
  {
    id: 1,
    title: "سازنده جاوا اسکریپت کیست؟",
    options: ["استیو جابز", "برندان ایچ", "ایلان ماسک"],
    answer: "برندان ایچ",
  },
  {
    id: 2,
    title: "کتاب Clean Code از کیست؟",
    options: ["آنکل باب (رابرت مارتین)", "استیو جابز", "برندان ایچ"],
    answer: "آنکل باب (رابرت مارتین)",
  },
  {
    id: 3,
    title: "جاوا اسکریپت در چه سالی ساخته شد؟",
    options: ["1995", "1997", "2000"],
    answer: "1995",
  },
  {
    id: 4,
    title: "فامیلای مادری خوبن یا پدری؟",
    options: ["پدری", "مادری", "هر دو"],
    answer: "مادری",
  },
  {
    id: 5,
    title: "ری‌اکت کتابخونه کدوم زبان هست؟",
    options: ["پایتون", "جاوا", "جاوا اسکریپت"],
    answer: "جاوا اسکریپت",
  },
];

const container = document.querySelector(".container");
const nextbtn = document.querySelector(".next");
const currentnumber = document.querySelector(".current");
const modalscreen = document.querySelector(".modal-screen");
const questionElement = document.querySelector(".questions");
const closeModal = document.querySelector("header button");
const cloesBtn = document.querySelector(".close");
const continuebtn = document.querySelector(".continue");

let index = 0;
let current = 1;
let score = 0;
function changeQuestion() {
  changeScore(index);
  index++;
  current++;

  updateQuerstion(index);
}
function selected() {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.addEventListener("click", function (event) {
      const selectedoption = document.querySelector(".selected");

      if (selectedoption) {
        selectedoption.classList.remove("selected");
      }
      option.classList.add("selected");
    });
  });
}
function changeScore(index) {
  const querstion = document.querySelector(".question");
  const optionselect = document.querySelector(".selected label");
  if (optionselect.innerHTML == questions[index].answer) {
    score++;
  }
  console.log(score);
}
function showQuestion() {
  updateQuerstion(index);
}

continuebtn.addEventListener("click", restquestion);

function restquestion() {
  index = 0;
  score = 0;
  document.querySelector(".current").innerHTML = 1;

  updateQuerstion(index);
  console.log(index);
  hiddenModal();
}

function showmodalResult() {
  console.log(index);
  changeScore(index);
  const resultvalue = document.querySelector(".answered-questions");
  const resultcard = document.querySelector(".result-card .result");
  const totalquestions = document.querySelector(".total-questions");
  resultvalue.innerHTML = score;
  totalquestions.innerHTML = questions.length;
  if (score > 3) {
    resultcard.classList.add("good");
    resultcard.innerHTML = "خوب";
  } else {
    resultcard.classList.add("bad");
    resultcard.innerHTML = "بد";
  }
  modalscreen.classList.remove("hidden");
}

closeModal.addEventListener("click", hiddenModal);
cloesBtn.addEventListener("click", hiddenModal);
document.body.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    hiddenModal();
  }
});
function hiddenModal() {
  modalscreen.classList.add("hidden");
}

function updateQuerstion(index) {
  container.innerHTML = "";
  container.insertAdjacentHTML(
    "beforeend",
    `<h1 class="question">${questions[index].title}</h1>
      <div>
        <p class="quest-index">
          پرسش <span class="current">${current}</span> از
          <span class="total">5</span>
          پرسش
        </p>
      </div>
      <div class="questions">
        <article class="quest option">
          <input type="radio" name="questbox" id="quest-${
            questions[index].id
          }" />
          <label for="quest-${questions[index].id}" class="answer-title">${
      questions[index].options[0]
    }</label>
        </article>
        <article class="quest option">
          <input type="radio" name="questbox" id="quest-${
            questions[index].id + 1
          }" />
          <label for="quest-${questions[index].id + 1}" class="answer-title">${
      questions[index].options[1]
    }</label>
        </article>
        <article class="quest option">
          <input type="radio" name="questbox" id="quest-${
            questions[index].id + 2
          }" />
         <label for="quest-${questions[index].id + 2}" class="answer-title">${
      questions[index].options[2]
    }</label>
        </article>
      </div>
      <div class="buttons">
        <button class="result-button ${
          index < 4 ? "hidden" : ""
        }" onclick="showmodalResult()" >نتیجه</button>
        <button class="next ${
          index == 4 ? "hidden" : ""
        }" onclick="changeQuestion(${index})">بعدی</button>
      </div>`
  );
  selected();
}
