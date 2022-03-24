const CategoryItem = {
  render(i, images, url) {
    return `
    <li class="category-item hover-opacity">
      <a class="category-item__link" href="/#/${url.resource}/category-${i + 1}">
        <div class="category-item__header">
          <h4 class="category-item__title">Category-${i + 1}</h4>
          <div class="category-item__amount">
            <span class="category-item__ready">5</span>/
            <span class="category-item__total">10</span>
          </div>
        </div>
  
        <img class="category-item__img" src="${images[i]}" alt="img-${i}">
        <span class="category-item__play-again">Play again</span>
      </a>
    </li>
    `;
  }
}

export default CategoryItem;
