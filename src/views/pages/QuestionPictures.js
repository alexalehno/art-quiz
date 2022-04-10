import Footer from '../components/Footer.js';
import CloseBtn from '../components/header/CloseBtn';

import TimeIndicator from '../components/question/TimeIndicator.js';
import QuestionsIndicator from '../components/question/QuestionsIndicator.js';

import QuestionResult from '../components/results/QuestionResult.js';
import CategoryResult from '../components/results/CategoryResult.js';
import CategoryGrandRes from '../components/results/CategoryGrandRes.js';
import CategoryGameOver from '../components/results/CategoryGameOver.js';
import QuitGame from '../components/results/QuitGame.js';

const QuestionArtist = {
  render(request) {
    return `
    <div class="question-pictures page">
      <header class="question-pictures__header question-container">
        ${CloseBtn.render(`${request.resource}/${request.catNum}`, 'quit-btn')}
        ${TimeIndicator.render()}
      </header>

      <main class="question-pictures question-container">
        <p class="question-title">Which is <span class="question-title__artist-name"></span> picture?</p>
         
        <div class="question-pictures__options">
          <div class="question-pictures__option"></div>
          <div class="question-pictures__option"></div>
          <div class="question-pictures__option"></div>
          <div class="question-pictures__option"></div>
        </div>

        ${QuestionsIndicator.render()}
        ${QuestionResult.render()}

        ${CategoryGameOver.render(request)}
        ${CategoryResult.render(request)}
        ${CategoryGrandRes.render(request)}

        ${QuitGame.render(request)}
      </main>

      ${Footer.render()}
    </div>`;
  }
}

export default QuestionArtist;
