import icon from '../../../images/icon/question/congrat-cup.svg'
import { lastCat } from '../../../services/funcs';

const CategoryResult = {
  render(request) {

    let catNum = lastCat(+request.catNum);

    return `
    <div class="overlay category-overlay hidden">
      <div class="category-result">
        <img class="category-result__img" src="${icon}" alt="icon"> 
        <h4 class="category-result__title">Congratulations!</h4>

        <div class="category-result__num-wrap">
          <span class="category-result__num">0</span>/<span class="category-result__num">0</span>
        </div>
        
        <div class="category-result__btn-wrap">
          <a class="category-result__btn" href="/#/${request.resource}">Home</a>
          <a class="category-result__btn" href="/#/${request.resource}/${catNum}">Next Quiz</a>
        </div>
      </div>
    </div>
    `;
  }
}

export default CategoryResult;