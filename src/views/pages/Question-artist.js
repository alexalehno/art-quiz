import Footer from '../components/Footer.js';
import CloseBtn from '../components/Close-btn';

import TimeIndicator from '../components/Time-indicator.js';
import QuestionsIndicator from '../components/Questions-indicator.js';

const QuestionArtist = {
  render(url) {
    return `
    <div class="question-artist page">
      <header class="question-artist__header question-container">
        ${CloseBtn.render(`/${url.resource}`)}
        ${TimeIndicator.render()}
      </header>

      <main class="question-artist question-container">
        <p class="question-title">Who is the author of this picture? ${url.category}</p>
        <div class="question-artist__img-block">
          ${QuestionsIndicator.render()}
        </div>

        <div class="question-artist__options">
          <button class="question-artist__option hover-bg">Peter Paul Rubens</button>
          <button class="question-artist__option hover-bg">Rembrandt van Rijn</button>
          <button class="question-artist__option hover-bg">Leonardo da Vinci</button>
          <button class="question-artist__option hover-bg">Hieronymus Bosch</button>
        </div>
      </main>

      ${Footer.render()}
    </div>`;
  }
}

export default QuestionArtist;