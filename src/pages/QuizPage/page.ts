import { questions } from "../../../data/questions";

export function QuizPage(
  container: HTMLDivElement,
  searchParams: URLSearchParams
) {
  const topic = searchParams.get("topic") || "Unknown";
  const theme = localStorage.getItem("theme");

  // Apply theme
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  const changeNavbarPicture = (topic: string): string => {
    switch (topic.toLowerCase()) {
      case "html":
        return "../../../public/icon-html.svg";
      case "css":
        return "../../../public/icon-css.svg";
      case "javascript":
        return "../../../public/icon-js.svg";
      case "accessibility":
        return "../../../public/icon-accessibility.svg";
      default:
        return "../../../public/icon-html.svg";
    }
  };

  const quizQuestions = questions[topic.toLowerCase()] || [];
  let currentIndex = 0;
  let selectedOption: string | null = null;
  let score = 0;

  // Handles submitting an answer
  const handleSubmitAnswer = () => {
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    const currentQuestion = quizQuestions[currentIndex];
    const correctOption = currentQuestion.correctAnswer;

    // Get options and apply classes for correct/incorrect answers
    const quizContainer = document.getElementById(
      "quizContainer"
    ) as HTMLDivElement;
    const options = quizContainer.querySelectorAll<HTMLDivElement>(".option");

    options.forEach((el) => {
      const option = el.getAttribute("data-option");
      const label = el.querySelector<HTMLSpanElement>(".option-label");

      if (option === correctOption) {
        el.classList.add("correct");
        el.style.border = "3px solid green"; // Green border for correct
        el.innerHTML += ` <span class="text-green-500 font-bold ml-auto ">✓</span>`;
        if (label) label.style.backgroundColor = "green"; // Correct option label
      } else if (option === selectedOption) {
        el.classList.add("incorrect");
        el.style.border = "3px solid red"; // Red border for incorrect
        el.innerHTML += ` <span class="text-red-500 font-bold ml-auto ">✗</span>`;
        if (label) label.style.backgroundColor = "red"; // Incorrect option label
      } else {
        el.style.border = "3px solid gray"; // Neutral border for unselected options
        if (label) label.style.backgroundColor = "gray"; // Neutral label background
      }
    });

    // Update score if the selected option is correct
    if (selectedOption === correctOption) score++;

    // Update the progress bar
    const loader = document.getElementById("loader") as HTMLDivElement;
    loader.style.width = `${
      ((currentIndex + 1) / quizQuestions.length) * 100
    }%`;

    // Update submit button
    const submitButton = document.getElementById(
      "submit_btn"
    ) as HTMLButtonElement;
    if (currentIndex === quizQuestions.length - 1) {
      submitButton.textContent = "Submit Quiz";
      submitButton.onclick = handleQuizComplete; // Set final handler
    } else {
      submitButton.textContent = "Next Question";
      submitButton.onclick = () => {
        currentIndex++; // Increment question index
        selectedOption = null; // Reset selected option
        displayQuestion(); // Load the next question
      };
    }
  };

  // Handles quiz completion
  const handleQuizComplete = () => {
    container.innerHTML = `
      <h1 class="text-center font-bold text-2xl">Quiz Complete!</h1>
      <p class="text-center text-xl">You scored ${score} out of ${quizQuestions.length}.</p>
      <button class="bg-blue-500 text-white p-4 rounded-lg mt-4" id="retry_btn">Retry</button>
    `;

    // Retry button logic
    const retryButton = document.getElementById(
      "retry_btn"
    ) as HTMLButtonElement;
    retryButton?.addEventListener("click", () => {
      currentIndex = 0;
      score = 0;
      displayQuestion();
    });
  };

  // Renders the current question
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

      // Update question display
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
              class="option bg-white shadow-fine p-[1.3rem] cursor-pointer rounded-2xl flex  space-x-[1rem] text-[1.2rem] md:text-[1.5rem] font-medium dark:bg-[rgb(59,77,102)] border-[.3rem] border-[rgb(59,77,102)]" 
              data-option="${option}" key="${index}">
              <span 
                class="option-label bg-gray-400 text-white w-[2.5rem] h-[2.5rem] flex items-center justify-center text-[1.2rem] font-bold">
                ${labels[index]}
              </span>
              <span>${option.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>
            </div>
          `
        )
        .join("");

      // Add event listeners to options
      const options = quizContainer.querySelectorAll<HTMLDivElement>(".option");
      options.forEach((optionElement) => {
        optionElement.addEventListener("click", (e) => {
          const target = e.currentTarget as HTMLDivElement;

          // Reset all options
          options.forEach((el) => {
            el.classList.remove("selected");
            el.style.border = "3px solid rgb(59,77,102)";
            const label = el.querySelector<HTMLSpanElement>(".option-label");
            if (label) label.style.backgroundColor = "gray";
          });

          // Highlight the selected option
          target.classList.add("selected");

          // Update the label background color for the selected option
          const selectedLabel =
            target.querySelector<HTMLSpanElement>(".option-label");
          if (selectedLabel)
            selectedLabel.style.backgroundColor = "rgb(167,41,245)";

          // Save the selected option
          selectedOption = target.getAttribute("data-option");
          target.style.border = "3px solid rgb(167,41,245)"; // Highlight border
        });
      });

      // Set the button to handle submitting the answer
      submitButton.textContent = "Submit Answer";
      submitButton.onclick = handleSubmitAnswer;
    }
  };

  // Initial page rendering
  container.innerHTML = `
    <div class="flex flex-wrap px-[2rem] py-[1rem] md:py-[0rem] md:px-[7rem] bg-no-repeat bg-cover">
      <nav class="w-full flex justify-between py-[2rem] md:py-[4.5rem]">
        <aside class="flex items-center font-medium space-x-[1rem]">
          <img src="${changeNavbarPicture(topic)}" class="w-[2.5rem]" />
          <h1 class="text-[1.6rem] dark:text-white">${topic.toUpperCase()}</h1>
        </aside>
        <aside class="flex items-center space-x-[1rem] dark:text-white">
          <img src="../../../public/icon-sun-dark.svg" class="w-[1.7rem]" />
          <input type="checkbox" class="theme-checkbox" aria-checked="false">
          <img src="../../../public/icon-moon-dark.svg" class="w-[1.7rem]" />
        </aside>
      </nav> 
      <div class="w-full flex flex-col md:flex-row dark:text-white md:space-x-[5rem]">
       
            <div class="w-full flex flex-col space-y-[2rem]  md:space-y-[15rem] md:w-[45%] text-[2rem] md:text-[2.8rem] p-[.9rem] py-[2rem]">

             <div id="questionDisplay" class="w-full space-y-[1rem]" ></div>
                <div class="w-full bg-[rgb(59,77,102)] rounded-lg h-[.8rem] my-[2rem]">
            <div id="loader" class="h-full rounded-lg w-0 bg-[rgb(167,41,245)] "></div>
            </div>    
            
            
            </div>

            <div class="w-full flex flex-col space-y-[2rem] md:space-y-[3rem] md:w-[50%] text-[2rem] md:text-[2.8rem] p-[.5rem] ">
                <div id="quizContainer" class="w-full flex flex-col space-y-[1rem]"></div>

                  <button id="submit_btn" class="py-[1rem] px-[4rem] rounded-xl bg-[rgb(167,41,245)] text-white text-[1.4rem] font-medium md:text-[2rem]">
                            Submit Answer
                 </button>
            
            </div>








      </div>
    
    </div>
  `;

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
