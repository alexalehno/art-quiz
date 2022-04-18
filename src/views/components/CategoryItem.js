const CategoryItem = {
  render(i, item, resource) {
    return `
    <li class="category-item not-played">
      <a class="category-item__link" href="/#/${resource}/${i + 1}">
        <div class="category-item__header">
          <h4 class="category-item__title">Category-${i + 1}</h4>
          <div class="category-item__amount">
            <span class="category-item__num">-</span>/<span class="category-item__num">-</span>
          </div>
        </div>
  
        <img class="category-item__img" src="${item}" alt="img-${i}">
        <span class="category-item__play-again">Play again</span>
      </a>
    </li>`;
  },
};

export default CategoryItem;
