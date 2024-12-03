import './style.css';
import { HomePage } from './pages/HomePage/page';
import { QuizPage } from './pages/QuizPage/page';

const app = document.querySelector<HTMLDivElement>('#app');



type PageFunction = (app: HTMLDivElement, params: URLSearchParams) => void;


// Simple routing configuration
const routes: Record<string, PageFunction> = {
  '/': HomePage,
  '/quiz': QuizPage,
};


// Function to render pages based on the current URL
function renderPage() {
  const url = new URL(window.location.href);
  const path = url.pathname;
  const searchParams = url.searchParams;

  const loadPage:any = routes[path] || HomePage; // Default to HomePage if no route matches
  loadPage(app as HTMLDivElement, searchParams); // Render the page with the container and query params
}

// Navigation helper to change pages programmatically
function navigateTo(path: string) {
  history.pushState(null, '', path); // Update the browser URL
  renderPage(); // Re-render the current page
}

// Attach global navigation logic (for back/forward browser buttons)
window.addEventListener('popstate', renderPage);

// Initial render
renderPage();

export { navigateTo };
