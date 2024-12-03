// pages/QuizPage.ts
import { navigateTo } from '../../main';
import { questions, Question } from '../../../data/questions';


export function QuizPage(container: HTMLDivElement, searchParams: URLSearchParams) {
  const topic = searchParams.get('topic') || 'Unknown'; // Get the topic from the query string
  const theme = localStorage.getItem("theme");

  // Apply theme
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }


  const changeNavbarPicture = (topic:string)=>{
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
}
const quizQuestions:Question[] = questions[topic.toLowerCase()] || [];
let currentIndex = 0;
console.log(quizQuestions)

let currentQuestion = quizQuestions[currentIndex];
let selectedOption: string | null = null; // Track the selected answer


    const displayQuestion = ():void =>{
        const questionDisplay = document.getElementById("questionDisplay");
        const quizContainer = document.getElementById("quizContainer");
        if(!questionDisplay || !quizContainer) return;


        if(currentIndex < quizQuestions.length){

            questionDisplay.innerHTML = `
            <p class="text-[1.2rem]">Question ${currentIndex + 1} of ${quizQuestions.length}</p>
            <h1 class="font-bold">${currentQuestion.question}</h1>
          `;


          const labels = ["A", "B", "C", "D"];
          quizContainer.innerHTML = currentQuestion.options
          .map(
            (option, index) => `
            <div 
              class="option bg-white shadow-fine p-[1.3rem] cursor-pointer rounded-2xl flex items-center space-x-[1rem] text-[1.5rem] font-medium dark:bg-[rgb(59,77,102)] border-[.3rem] border-[rgb(59,77,102)]" 
              data-option="${option}" key=${index}>
                 <span 
              class="option-label bg-gray-400 text-white w-[2.5rem] h-[2.5rem] flex items-center justify-center  text-[1.2rem] font-bold">
              ${labels[index]}
            </span>
              <span>${option}</span>
            </div>
          `
          )
          .join("");



          const options = quizContainer.querySelectorAll(".option");
          options.forEach((optionElement) => {
            optionElement.addEventListener("click", (e) => {
              const target = e.currentTarget as HTMLElement;

                console.log(e.currentTarget)

              options.forEach((el) => {
                el.classList.remove("selected");
                const label = el.querySelector(".option-label") as HTMLElement;
                if (label) label.style.backgroundColor = "gray"; // Reset label color
              });
    
              // Highlight the selected option
              target.classList.add("selected");

              // Update the label background color for the selected option
              const selectedLabel = target.querySelector(".option-label") as HTMLElement;
              if (selectedLabel) selectedLabel.style.backgroundColor = "rgb(167,41,245)";
      
              // Save the selected option
              selectedOption = target.getAttribute("data-option");
            });
          });


        }


    }




  container.innerHTML = `
    <div class="flex flex-wrap px-[2rem] py-[1rem] md:py-[0rem]  md:px-[7rem]  bg-no-repeat bg-cover ">
     <nav class="w-full flex justify-between py-[4rem] md:py-[4.5rem]">
            <aside class="flex items-center font-medium space-x-[1rem]">
                <img src=${changeNavbarPicture(topic)} class="w-[2.5rem]" />
                <h1 class="text-[1.6rem] dark:text-white">${topic.toUpperCase()}</h1>
            </aside>
            <aside class="flex items-center space-x-[1rem] dark:text-white">
            
                <img src="../../../public/icon-sun-dark.svg" class="w-[1.7rem]" />
                <input type="checkbox" class="theme-checkbox"  aria-checked="false" >
                 <img src="../../../public/icon-moon-dark.svg" class="w-[1.7rem]" />
            </aside>
        
        </nav>
      <div class="w-full flex flex-col md:flex-row space-y-[2rem] md:space-y-0 md:space-x-[5rem] dark:text-white">
      
          <div id="questionDisplay" class="w-full md:w-[50%] text-[2rem] md:text-[2.8rem] p-[.5rem]">
            // <p class="text-[1.2rem]">Question 1 of ${quizQuestions.length}</p>
            // <h1 class="font-bold" >
            //     Welcome to the Frontend Quiz!

            // </h1>
          
           
          
          </div>
          <div class="w-full md:w-[50%] space-y-[2rem]" >
          
          
          <div class="w-full space-y-[2rem]" id="quizContainer">
          
          
          </div>
          <button class="w-full bg-[rgb(167,41,245)] hover:bg-[rgba(167,41,245,0.71)] transition-all duration-300 text-[1.3rem] md:text-[1.5rem] font-bold p-[1.5rem] md:p-[2rem] text-white rounded-lg" id="submit_btn">Submit Answer</button>
                    
           
          </div>
          
      
      </div>
    </div>
  `;


  displayQuestion();

  // Handle "Back to Home" button click
//   console.log(window.location.pathname)
//   console.log(questions[topic]);



    // const quizStartIndex = 0;

    // const displayContents = (quizQuestions:any)=>{
    //     const currentQuiz = quizQuestions[quizStartIndex];
    //     return document.getElementById('questionDisplay').innerHTML = `
    //     <p class="text-[1.2rem]">Question ${quizStartIndex + 1} of ${quizQuestions.length} </p>
        
        
    //     `
        

    // }


    // console.log(quizQuestions[quizStartIndex])
    console.log(quizQuestions.length)
    // let count = 0;
    // let particularQuiz = questions[quizStartIndex];






  const themeCheckbox = container.querySelector(".theme-checkbox") as HTMLInputElement;
  const bodyElement = document.body;

  themeCheckbox.addEventListener("change", () => {
    if (themeCheckbox.checked) {
      bodyElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      themeCheckbox.setAttribute("aria-checked", "true");
    } else {
      bodyElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      themeCheckbox.setAttribute("aria-checked", "false");
    }
  });
  
  const backButton = container.querySelector<HTMLButtonElement>('#backButton');

 

  backButton?.addEventListener('click', () => {
    navigateTo('/'); // Navigate back to the homepage
  });
}
