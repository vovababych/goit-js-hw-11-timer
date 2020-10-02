export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.daysRef = document.querySelector(
      `${selector} .value[data-value="days"]`,
    );
    this.hoursRef = document.querySelector(
      `${selector} .value[data-value="hours"]`,
    );
    this.minsRef = document.querySelector(
      `${selector} .value[data-value="mins"]`,
    );
    this.secsRef = document.querySelector(
      `${selector} .value[data-value="secs"]`,
    );
    this.targetDate = targetDate;
  }

  parseDate(time) {
    this.daysRef.textContent = this.pad(
      Math.floor(time / (1000 * 60 * 60 * 24)),
    );
    this.hoursRef.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.minsRef.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    this.secsRef.textContent = this.pad(
      Math.floor((time % (1000 * 60)) / 1000),
    );
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  start() {
    setInterval(() => {
      const time = this.targetDate - Date.now();
      this.parseDate(time);
    }, 1000);
  }
}
