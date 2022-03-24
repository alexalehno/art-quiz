const TimeIndicator = {
  render() {
    return `
    <div class="time-indicator">
      <div class="time-indicator__progress">
        <div class="time-indicator__progress-inner"></div>
      </div>

      <span class="time-indicator__time">0:20</span>
    </div>`;
  }
}

export default TimeIndicator;