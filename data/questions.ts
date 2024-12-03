export type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type QuestionsByTopic = {
  [topic: string]: Question[];
};


export const questions:QuestionsByTopic = {
  css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Cascading Simple Sheets",
        "Colorful Style Sheets",
      ],
      correctAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: [
        "color",
        "background-color",
        "bg-color",
        "color-background",
      ],
      correctAnswer: "background-color",
    },
    {
      question: "How do you select an element with the class 'example' in CSS?",
      options: [
        ".example",
        "#example",
        "example",
        "select.example",
      ],
      correctAnswer: ".example",
    },
    {
      question: "What is the default value of the 'position' property in CSS?",
      options: [
        "absolute",
        "relative",
        "static",
        "fixed",
      ],
      correctAnswer: "static",
    },
    {
      question: "Which property is used to change the font size in CSS?",
      options: [
        "font-style",
        "font-size",
        "text-size",
        "text-font",
      ],
      correctAnswer: "font-size",
    },
    {
      question: "How do you make a list that lists items vertically in CSS?",
      options: [
        "list-style: vertical",
        "display: block",
        "display: list",
        "list-style-type: none",
      ],
      correctAnswer: "list-style-type: none",
    },
    {
      question: "What is the purpose of the 'z-index' property in CSS?",
      options: [
        "To change the font size",
        "To control the stacking order of elements",
        "To change the color of the element",
        "To make an element fixed on the screen",
      ],
      correctAnswer: "To control the stacking order of elements",
    },
    {
      question: "Which CSS property is used to control the space between words?",
      options: [
        "letter-spacing",
        "line-height",
        "word-spacing",
        "text-spacing",
      ],
      correctAnswer: "word-spacing",
    },
    {
      question: "Which value of the 'display' property hides an element?",
      options: [
        "none",
        "hidden",
        "block",
        "inline",
      ],
      correctAnswer: "none",
    },
    {
      question: "What is the correct syntax for adding a background image in CSS?",
      options: [
        "background-image: url('image.jpg')",
        "background: image('image.jpg')",
        "background-image: 'image.jpg'",
        "image: background('image.jpg')",
      ],
      correctAnswer: "background-image: url('image.jpg')",
    },
  ],
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HomeTool Markup Language",
        "HyperTool Markup Language",
        "HomeText Markup Language",
      ],
      correctAnswer: "HyperText Markup Language",
    },
    {
      question: "Which HTML tag is used for inserting an image?",
      options: [
        "<image>",
        "<src>",
        "<img>",
        "<picture>",
      ],
      correctAnswer: "<img>",
    },
    {
      question: "How do you create a hyperlink in HTML?",
      options: [
        "<a href='url'>link</a>",
        "<link href='url'>link</link>",
        "<a source='url'>link</a>",
        "<hyperlink href='url'>link</hyperlink>",
      ],
      correctAnswer: "<a href='url'>link</a>",
    },
    {
      question: "Which tag is used to define a table in HTML?",
      options: [
        "<table>",
        "<tbl>",
        "<tr>",
        "<td>",
      ],
      correctAnswer: "<table>",
    },
    {
      question: "Which HTML attribute specifies the character encoding for the document?",
      options: [
        "charset",
        "encoding",
        "lang",
        "type",
      ],
      correctAnswer: "charset",
    },
    {
      question: "What is the purpose of the <head> tag in HTML?",
      options: [
        "To define the body content of the page",
        "To define the metadata and links",
        "To create a list of items",
        "To create a header for the page",
      ],
      correctAnswer: "To define the metadata and links",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: [
        "<br>",
        "<lb>",
        "<linebreak>",
        "<break>",
      ],
      correctAnswer: "<br>",
    },
    {
      question: "Which tag is used to create a form in HTML?",
      options: [
        "<form>",
        "<input>",
        "<textarea>",
        "<submit>",
      ],
      correctAnswer: "<form>",
    },
    {
      question: "How do you create an unordered list in HTML?",
      options: [
        "<ul>",
        "<ol>",
        "<list>",
        "<ulist>",
      ],
      correctAnswer: "<ul>",
    },
    {
      question: "Which tag is used for defining a division or section in an HTML document?",
      options: [
        "<div>",
        "<section>",
        "<article>",
        "<part>",
      ],
      correctAnswer: "<div>",
    },
  ],
  javascript: [
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      options: [
        "var x = 5;",
        "let x == 5;",
        "int x = 5;",
        "variable x = 5;",
      ],
      correctAnswer: "var x = 5;",
    },
    {
      question: "Which method is used to find the length of an array in JavaScript?",
      options: [
        "array.length",
        "array.size",
        "array.length()",
        "array.count",
      ],
      correctAnswer: "array.length",
    },
    {
      question: "Which of the following is a JavaScript data type?",
      options: [
        "string",
        "text",
        "integer",
        "character",
      ],
      correctAnswer: "string",
    },
    {
      question: "Which function is used to parse a string as an integer in JavaScript?",
      options: [
        "parseInt()",
        "parseFloat()",
        "toInteger()",
        "toInt()",
      ],
      correctAnswer: "parseInt()",
    },
    {
      question: "What is the output of 'typeof NaN' in JavaScript?",
      options: [
        "number",
        "NaN",
        "undefined",
        "object",
      ],
      correctAnswer: "number",
    },
    {
      question: "How do you define a function in JavaScript?",
      options: [
        "function name() {}",
        "def name() {}",
        "function: name() {}",
        "func name() {}",
      ],
      correctAnswer: "function name() {}",
    },
    {
      question: "Which operator is used to assign a value to a variable in JavaScript?",
      options: [
        "=",
        "==",
        ":=",
        "->",
      ],
      correctAnswer: "=",
    },
    {
      question: "Which of the following is not a JavaScript loop?",
      options: [
        "while",
        "for",
        "do...while",
        "loop",
      ],
      correctAnswer: "loop",
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: [
        "click",
        "change",
        "hover",
        "focus",
      ],
      correctAnswer: "click",
    },
    {
      question: "Which of the following is a correct way to declare an array in JavaScript?",
      options: [
        "let arr = [];",
        "let arr = ();",
        "let arr = {};",
        "let arr = [1, 2, 3];",
      ],
      correctAnswer: "let arr = [];",
    },
  ],
  accessibility: [
    {
      question: "What does WCAG stand for?",
      options: [
        "Web Content Accessibility Guidelines",
        "Web Communication Accessibility Group",
        "Web Common Accessibility Guide",
        "Web Content Active Group",
      ],
      correctAnswer: "Web Content Accessibility Guidelines",
    },
    {
      question: "Which attribute is used to improve accessibility for images?",
      options: [
        "alt",
        "title",
        "desc",
        "aria-label",
      ],
      correctAnswer: "alt",
    },
    {
      question: "Which of the following is an accessibility improvement for screen readers?",
      options: [
        "Adding ARIA roles",
        "Using text decoration",
        "Reducing contrast",
        "Hiding text",
      ],
      correctAnswer: "Adding ARIA roles",
    },
    {
      question: "What is the purpose of the 'aria-label' attribute?",
      options: [
        "To describe elements for screen readers",
        "To define custom fonts",
        "To add images to elements",
        "To provide alternative text for videos",
      ],
      correctAnswer: "To describe elements for screen readers",
    },
    {
      question: "Which HTML element should be used to provide a link for a form submission?",
      options: [
        "<button>",
        "<submit>",
        "<input type='submit'>",
        "<a href='submit'>",
      ],
      correctAnswer: "<input type='submit'>",
    },
    {
      question: "Which of the following improves web accessibility?",
      options: [
        "Descriptive link text",
        "Overuse of images",
        "Hidden text",
        "Inconsistent layout",
      ],
      correctAnswer: "Descriptive link text",
    },
    {
      question: "What does 'focus' mean in web accessibility?",
      options: [
        "The active element on the page",
        "The hidden elements on the page",
        "The background color of an element",
        "The number of elements in the document",
      ],
      correctAnswer: "The active element on the page",
    },
    {
      question: "What is the purpose of the 'role' attribute in HTML?",
      options: [
        "To define the type of an element for accessibility tools",
        "To style the element",
        "To define the element's function",
        "To add icons to elements",
      ],
      correctAnswer: "To define the type of an element for accessibility tools",
    },
    {
      question: "Which tag is recommended for navigation links to improve accessibility?",
      options: [
        "<nav>",
        "<ul>",
        "<div>",
        "<header>",
      ],
      correctAnswer: "<nav>",
    },
    {
      question: "What does the 'aria-hidden' attribute do?",
      options: [
        "Indicates whether an element should be hidden from screen readers",
        "Hides the element visually",
        "Prevents the element from being clicked",
        "Disables the element for keyboard navigation",
      ],
      correctAnswer: "Indicates whether an element should be hidden from screen readers",
    },
  ],
};
