import icon from '../../../images/icon/question/grand-res.svg';
import { lastCat } from '../../../services/funcs';

const CategoryGrandRes = {
  render(request) {
    const catNum = lastCat(+request.catNum);

    return `
    <div class="overlay category-overlay  hidden">
      <div class="category-result">
        <img class="category-result__img-grand" src="${icon}" alt="icon"> 
        <span class="category-result__subtitle-grand">Grand result</span>
        <h4 class="category-result__title-grand">Congratulations!</h4>
        <a class="category-result__btn-grand" href="/#/${request.resource}/${catNum}">Next</a> 
      </div>
    </div>
    `;
  },
};

export default CategoryGrandRes;
