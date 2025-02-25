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

let index = 0;
let current = 1;
function changeQuestion() {
  index++;
  current++;

  updateQuerstion(index);
}

function showQuestion() {
  updateQuerstion(index);
}

function showmodalResult() {
  modalscreen.classList.remove("hidden");
}

function selectItem(event) {
  console.log(event.target);
}
function updateQuerstion(index) {
  container.innerHTML = "";
  container.insertAdjacentHTML(
    "beforeend",
    `   <h1 class="question">${questions[index].title}</h1>
      <div>
        <p class="quest-index">
          پرسش <span class="current">${current}</span> از
          <span class="total">5</span>
          پرسش
        </p>
      </div>
      <div class="questions" onclick="selectItem(event)">
        <article class="quest">
          <input type="radio" name="questbox" id="quest-${
            questions[index].id
          }" />
          <label for="quest-${questions[index].id}" class="answer-title">${
      questions[index].options[0]
    }</label>
        </article>
        <article class="quest selected">
          <input type="radio" name="questbox" id="quest-${
            questions[index].id + 1
          }" />
          <label for="quest-${questions[index].id + 1}" class="answer-title">${
      questions[index].options[1]
    }</label>
        </article>
        <article class="quest">
          <input type="radio" name="questbox" id="quest-${
            questions[index].id + 2
          }" />
         <label for="quest-${questions[index].id + 2}" class="answer-title">${
      questions[index].options[2]
    }</label>
        </article>
      </div>
      <div class="buttons">
        <button class="result-button" onclick="showmodalResult()" >نتیجه</button>
        <button class="next ${
          index == 4 ? "hidden" : ""
        }" onclick="changeQuestion()">بعدی</button>
      </div>`
  );
}
