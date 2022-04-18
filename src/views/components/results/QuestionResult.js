const QuestionResult = {
  render() {
    return `
    <div class="overlay question-overlay hidden" data-result="">
      <div class="question-result">
        <div class="question-result__img" data-result="">
          <div class="question-result__indicator" data-result=""></div>
        </div> 
        <h4 class="question-result__title" data-result="">title</h4>
        <span class="question-result__author" data-result="">author</span>,
        <span class="question-result__year" data-result="">year</span>
        <button class="question-result__btn hover-opacity" data-result="">Next</button>
      </div>
    </div>
    `;
  },
};

export default QuestionResult;
