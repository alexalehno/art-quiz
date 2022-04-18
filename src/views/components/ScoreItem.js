const ScoreItem = {
  render() {
    return `
    <li class="score__item">
      <h4 class="score__item-title"></h4>
      <div class="score__item-bg">
        <div class="score__item-content">
          <span class="score__item-name">name</span>
          <div>
            <span class="score__item-artist">author</span>,
            <span class="score__item-year">year</span>
          </div>
        </div>
      </div>
    </li>`;
  },
};

export default ScoreItem;
