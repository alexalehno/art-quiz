
function createIndicatorItem() {
  let str = '';
  for (let i = 0; i < 10; i++) {
    str += `<span class="questions-indicator__item"></span>`;
  }

  return str;
}

const QuestionsIndicator = {
  render() {
    return `
    <div class="questions-indicator questions-indicator--center">
      ${createIndicatorItem()}
    </div>`;
  }
}

export default QuestionsIndicator;