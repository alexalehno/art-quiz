import icon from '../../../images/icon/question/game_over-cup.svg';

const CategoryGameOver = {
  render(request) {
    return `
    <div class="overlay category-overlay hidden">
      <div class="category-result">
        <img class="category-result__img-over" src="${icon}" alt="icon"> 
        <h4 class="category-result__title-over">Game Over</h4>

        <span class="category-result__subtitle-over">Play again?</span>

        <div class="category-result__btn-wrap">
          <a class="category-result__btn" href="/#/${request.resource}">No</a> 
          <a class="category-result__btn play-again" href="/#/${request.resource}/${request.catNum}">Yes</a> 
        </div>
      </div>
    </div>
    `;
  }
}

export default CategoryGameOver;