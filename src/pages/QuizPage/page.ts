import { questions } from "../../../data/questions"; // Import questions data

// QuizPage Component
export function QuizPage(
  container: HTMLDivElement,
  searchParams: URLSearchParams
) {
  // Extract topic and theme
  const topic = searchParams.get("topic") || "Unknown";
  let theme = localStorage.getItem("theme") || "light";

  // Apply theme to the body
  const applyTheme = () => {
    document.body.classList.toggle("dark", theme === "dark");
  };
  applyTheme();

  // Navbar topic images based on the selected topic
  const changeNavbarPicture = (topic: string): string => {
    switch (topic.toLowerCase()) {
      case "html":
        return "https://res.cloudinary.com/dei2yklhq/image/upload/v1733316035/icon-html_pr2o5b.svg";
      case "css":
        return "https://res.cloudinary.com/dei2yklhq/image/upload/v1733316035/icon-css_bhcam5.svg";
      case "javascript":
        return "https://res.cloudinary.com/dei2yklhq/image/upload/v1733316035/icon-js_bjlkgc.svg";
      case "accessibility":
        return "https://res.cloudinary.com/dei2yklhq/image/upload/v1733316036/icon-accessibility_lqvchf.svg";
      default:
        return "https://res.cloudinary.com/dei2yklhq/image/upload/v1733316035/icon-html_pr2o5b.svg";
    }
  };

  // Quiz data initialization
  const quizQuestions = questions[topic.toLowerCase()] || [];
  let currentIndex = 0;
  let selectedOption: string | null = null;
  let score = 0;

  // Function to handle answer submission
  const handleSubmitAnswer = () => {
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    const currentQuestion = quizQuestions[currentIndex];
    const correctOption = currentQuestion.correctAnswer;

    const quizContainer = document.getElementById(
      "quizContainer"
    ) as HTMLDivElement;

    const options = quizContainer.querySelectorAll<HTMLDivElement>(".option");

    options.forEach((optionElement) => {
      const option = optionElement.getAttribute("data-option");
      const label = optionElement.querySelector<HTMLSpanElement>(".option-label");

      if (option === correctOption) {
        optionElement.classList.add("correct");
        optionElement.style.border = "3px solid green";
        if (label) label.style.backgroundColor = "green";
        optionElement.innerHTML += ` <span class="text-green-500 font-bold ml-auto">✓</span>`;
      } else if (option === selectedOption) {
        optionElement.classList.add("incorrect");
        optionElement.style.border = "3px solid red";
        if (label) label.style.backgroundColor = "red";
        optionElement.innerHTML += ` <span class="text-red-500 font-bold ml-auto">✗</span>`;
      } else {
        optionElement.style.border = "3px solid gray";
        if (label) label.style.backgroundColor = "gray";
      }
    });

    // Update score if the answer is correct
    if (selectedOption === correctOption) score++;

    // Update progress bar
    const loader = document.getElementById("loader") as HTMLDivElement;
    loader.style.width = `${
      ((currentIndex + 1) / quizQuestions.length) * 100
    }%`;

    // Update button for next question or completion
    const submitButton = document.getElementById(
      "submit_btn"
    ) as HTMLButtonElement;
    if (currentIndex === quizQuestions.length - 1) {
      submitButton.textContent = "Submit Quiz";
      submitButton.onclick = handleQuizComplete;
    } else {
      submitButton.textContent = "Next Question";
      submitButton.onclick = () => {
        currentIndex++;
        selectedOption = null;
        displayQuestion();
      };
    }
  };

  // Function to handle quiz completion
  const handleQuizComplete = () => {
    container.innerHTML = `
      <h1 class="text-center font-bold text-2xl">Quiz Complete!</h1>
      <p class="text-center text-xl">You scored ${score} out of ${quizQuestions.length}.</p>
      <button class="bg-blue-500 text-white p-4 rounded-lg mt-4" id="retry_btn">Retry</button>
    `;

    const retryButton = document.getElementById("retry_btn") as HTMLButtonElement;
    retryButton.addEventListener("click", () => {
      currentIndex = 0;
      score = 0;
      displayQuestion();
    });
  };

  // Function to render the current question
  const displayQuestion = () => {
    const questionDisplay = document.getElementById(
      "questionDisplay"
    ) as HTMLDivElement;
    const quizContainer = document.getElementById(
      "quizContainer"
    ) as HTMLDivElement;
    const submitButton = document.getElementById(
      "submit_btn"
    ) as HTMLButtonElement;
    const loader = document.getElementById("loader") as HTMLDivElement;

    if (!questionDisplay || !quizContainer || !submitButton || !loader) return;

    if (currentIndex < quizQuestions.length) {
      const currentQuestion = quizQuestions[currentIndex];
      questionDisplay.innerHTML = `
        <p class="text-[1.2rem]">Question ${currentIndex + 1} of ${
        quizQuestions.length
      }</p>
        <h1 class="font-bold">${currentQuestion.question}</h1>
      `;

      const labels = ["A", "B", "C", "D"];
      quizContainer.innerHTML = currentQuestion.options
        .map(
          (option, index) => `
            <div 
              class="option bg-white shadow-fine p-[1.3rem] cursor-pointer rounded-2xl flex justify-between  space-x-[1rem] text-[1.2rem] md:text-[1.5rem] font-medium dark:bg-[rgb(59,77,102)] border-[.3rem] border-[rgb(59,77,102)]" 
              data-option="${option}">
              <div class="flex space-x-[1rem]">
              <span 
                class="option-label bg-gray-400 text-white w-[2.5rem] h-[2.5rem] flex items-center justify-center text-[1.2rem] font-bold">
                ${labels[index]}
              </span>
              <span>${option.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>
                
                </div>
            </div>
          `
        )
        .join("");

      const options = quizContainer.querySelectorAll<HTMLDivElement>(".option");
      options.forEach((optionElement) => {
        optionElement.addEventListener("click", () => {
          options.forEach((el) => {
            el.classList.remove("selected");
            el.style.border = "3px solid rgb(59,77,102)";
          });

          optionElement.classList.add("selected");
          optionElement.style.border = "3px solid rgb(167,41,245)";
          selectedOption = optionElement.getAttribute("data-option");
        });
      });

      submitButton.textContent = "Submit Answer";
      submitButton.onclick = handleSubmitAnswer;
    }
  };

  // Initial render
  container.innerHTML = `
    <div class="flex flex-wrap px-[2rem] py-[1rem] md:py-[0rem] md:px-[7rem] bg-no-repeat bg-cover">
      <nav class="w-full flex justify-between py-[2rem] md:py-[4.5rem]">
        <aside class="flex items-center font-medium space-x-[1rem]">
          <img src="${changeNavbarPicture(topic)}" class="w-[2.5rem]" />
          <h1 class="text-[1.6rem] dark:text-white">${topic.toUpperCase()}</h1>
        </aside>
        <aside class="flex items-center space-x-[1rem] dark:text-white">
          <img src="https://res.cloudinary.com/dei2yklhq/image/upload/v1733316035/icon-sun-dark_pxaott.svg" class="w-[1.7rem]" />
          <input type="checkbox" class="theme-checkbox" aria-checked="false">
          <img src="https://res.cloudinary.com/dei2yklhq/image/upload/v1733316035/icon-moon-dark_s42rc5.svg" class="w-[1.7rem]" />
        </aside>
      </nav> 
      <div class="w-full flex flex-col md:flex-row dark:text-white md:space-x-[5rem]">
        <div class="w-full flex flex-col space-y-[2rem] md:w-[45%] text-[2rem] md:text-[2.8rem] p-[.9rem] py-[2rem] space-y-[3rem]  md:space-y-[18rem]">
          <div id="questionDisplay" class="w-full space-y-[1rem]"></div>
          <div class="w-full bg-[rgb(59,77,102)] rounded-lg h-[.8rem] my-[2rem]">
            <div id="loader" class="h-full rounded-lg w-0 bg-[rgb(167,41,245)]"></div>
          </div>
       
        </div>
        <div class="w-full flex flex-col space-y-[2rem] md:w-[50%] text-[2rem] md:text-[2.8rem] p-[.9rem] py-[2rem]">
        
               <div class="w-full flex flex-col space-y-[2rem]" id="quizContainer"></div>
        
           <div class="w-full">
            <button class="btn bg-[rgb(167,41,245)] text-white p-[.9rem] py-[1rem] rounded-lg w-full font-medium text-[1.5rem]" id="submit_btn">
              Submit Answer
            </button>
          </div>
        </div>

   
      </div>
    </div>
  `;

  // Start the quiz by displaying the first question
  displayQuestion();

  // Theme toggle logic
  const themeCheckbox = document.querySelector(
    ".theme-checkbox"
  ) as HTMLInputElement;
  themeCheckbox.checked = theme === "dark";
  themeCheckbox.addEventListener("change", () => {
    const isDark = themeCheckbox.checked;
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.body.classList.toggle("dark", isDark);
  });
}
