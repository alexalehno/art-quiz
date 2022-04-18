const TimeIndicator = {
  render() {
    return `
    <div class="time-indicator opacity">
      <div class="time-indicator__progress">
        <div class="time-indicator__progress-inner"></div>
      </div>
      <span class="time-indicator__time">0:00</span>
    </div>`;
  },
};

export default TimeIndicator;
