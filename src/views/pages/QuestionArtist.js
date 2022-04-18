import Footer from '../components/Footer';
import CloseBtn from '../components/header/CloseBtn';
import TimeIndicator from '../components/question/TimeIndicator';
import QuestionsIndicator from '../components/question/QuestionsIndicator';
import QuestionResult from '../components/results/QuestionResult';
import CategoryResult from '../components/results/CategoryResult';
import CategoryGrandRes from '../components/results/CategoryGrandRes';
import CategoryGameOver from '../components/results/CategoryGameOver';
import QuitGame from '../components/results/QuitGame';

const QuestionArtist = {
  render(request) {
    return `
    <div class="question-artist page">
      <header class="question-artist__header question-container">
        ${CloseBtn.render(`${request.resource}/${request.catNum}`, 'quit-btn')}
        ${TimeIndicator.render()}
      </header>

      <main class="question-artist question-container">
        <p class="question-title">Who is the author of this picture?</p>
        <div class="question-artist__img-block">
          ${QuestionsIndicator.render()}
        </div>

        <div class="question-artist__options">
          <button class="question-artist__option hover-bg">artist</button>
          <button class="question-artist__option hover-bg">artist</button>
          <button class="question-artist__option hover-bg">artist</button>
          <button class="question-artist__option hover-bg">artist</button>
        </div>
        
        ${QuestionResult.render()}
        ${CategoryGameOver.render(request)}
        ${CategoryResult.render(request)}
        ${CategoryGrandRes.render(request)}
        ${QuitGame.render(request)}
      </main>

      ${Footer.render()}
    </div>`;
  },
};

export default QuestionArtist;
