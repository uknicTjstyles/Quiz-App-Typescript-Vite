// pages/HomePage.ts
import { navigateTo } from "../../main";

export function HomePage(container: HTMLDivElement) {



    



  
  container.innerHTML = `
    <div class="flex flex-wrap px-[2rem] py-[1rem] md:py-[0rem]  md:px-[7rem]  bg-no-repeat bg-cover ">
        <nav class="w-full flex justify-between py-[4rem]">
            <aside class="flex items-center font-medium space-x-[1rem]">
                <img src="../../../public/icon-html.svg" class="w-[2.5rem]" />
                <h1 class="text-[1.6rem] dark:text-white">HTML</h1>
            </aside>
            <aside class="flex items-center space-x-[1rem] dark:text-white">
            
                <img src="../../../public/icon-sun-dark.svg" class="w-[1.7rem]" />
                <input type="checkbox" class="theme-checkbox"  aria-checked="false" >
                 <img src="../../../public/icon-moon-dark.svg" class="w-[1.7rem]" />
            </aside>
        
        </nav>
    


      <div class="w-full flex flex-col md:flex-row md:space-x-[5rem] dark:text-white">
      
          <div class="w-full md:w-[50%] text-[3rem] md:text-[3.5rem] p-[.5rem]">
            <h1>
                Welcome to the <span class="font-bold">Frontend Quiz!</span>

            </h1>
          
            <span class="text-[rgb(98,104,104)] dark:text-[rgb(186,195,195)] text-[1.3rem] tracking-[.1rem] italic">Pick a subject to get started.</span>
          
          </div>
          <div class="w-full md:w-[50%] space-y-[2rem]">
                    
                    <div class="topic bg-white shadow-fine p-[1.3rem] cursor-pointer rounded-2xl flex items-center space-x-[1rem] text-[1.5rem] font-medium dark:bg-[rgb(59,77,102)]" data-topic="html" >
                       <img src="../../../public/icon-html.svg" class="w-[2.5rem]" />
                    <span>HTML</span>
                    
                    </div>
                <div class="topic bg-white shadow-fine p-[1.3rem] cursor-pointer rounded-2xl flex items-center space-x-[1rem] text-[1.5rem] font-medium dark:bg-[rgb(59,77,102)]" data-topic="css" >
                   <img src="../../../public/icon-css.svg" class="w-[2.5rem]" />
               <span> CSS</span>
                
                
                </div>
                <div class="topic bg-white shadow-fine p-[1.3rem] cursor-pointer rounded-2xl flex items-center space-x-[1rem] text-[1.5rem] font-medium dark:bg-[rgb(59,77,102)]" data-topic="javascript" >
                <img src="../../../public/icon-js.svg" class="w-[2.5rem]" />
                
                <span>JavaScript</span>
                
                
                </div>
                <div class="topic bg-white shadow-fine p-[1.3rem] cursor-pointer rounded-2xl flex items-center space-x-[1rem] text-[1.5rem] font-medium dark:bg-[rgb(59,77,102)]" data-topic="accessibility">
                <img src="../../../public/icon-accessibility.svg" class="w-[2.5rem]" />
                
                
                <span>Accessibility</span>
                
                
                
                </div>
          </div>
      
      </div>
    </div>
  `;

  console.log(window.location.pathname);


  const themeCheckbox = container.querySelector(".theme-checkbox") as HTMLInputElement;
  const bodyElement = document.body;

  // Check for saved preference in localStorage before rendering content
  if (localStorage.getItem("theme") === "dark") {
    bodyElement.classList.add("dark");
    themeCheckbox.checked = true;
  } else {
    bodyElement.classList.remove("dark");
  }


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
  

  // Add click event listeners to each topic
  const topics = container.querySelectorAll(".topic");
  topics.forEach((topic) => {
    topic.addEventListener("click", () => {
      const selectedTopic = topic.getAttribute("data-topic");
      if (selectedTopic) {
        // Navigate to quiz page with the topic query
        navigateTo(`/quiz?topic=${selectedTopic}`);
      }
    });
  });
}
