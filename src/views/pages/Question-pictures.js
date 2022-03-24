import Footer from '../components/Footer.js';
import CloseBtn from '../components/Close-btn';

import TimeIndicator from '../components/Time-indicator.js';
import QuestionsIndicator from '../components/Questions-indicator.js';

const QuestionArtist = {
  render(url) {
    return `
    <div class="question-pictures page">
      <header class="question-pictures__header question-container">
        ${CloseBtn.render(`/${url.resource}`)}
        ${TimeIndicator.render()}
      </header>

      <main class="question-pictures question-container">
        <p class="question-title">Which is Edvard Munch picture? ${url.category}</p>
         
        <div class="question-pictures__options">
          <div class="question-pictures__option question-pictures__option--one"></div>
          <div class="question-pictures__option question-pictures__option--two"></div>
          <div class="question-pictures__option question-pictures__option--three"></div>
          <div class="question-pictures__option question-pictures__option--four"></div>
        </div>

        ${QuestionsIndicator.render()}
      </main>

      ${Footer.render()}
    </div>`;
  }
}

export default QuestionArtist;
