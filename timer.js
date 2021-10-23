class CountdownTimer {
    constructor( {selector, targetDate} ) {
        this.targetDate = targetDate;
        this.selector = selector;
    }

    start() {
        const timer = document.querySelector(this.selector);
        const daysTimer = timer.querySelector('div.field > span[data-value="days');
        const hoursTimer = timer.querySelector('div.field > span[data-value="hours');
        const minsTimer = timer.querySelector('div.field > span[data-value="mins');
        const secsTimer = timer.querySelector('div.field > span[data-value="secs');

        setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            const { days, hours, mins, secs } = this.getTimeComponents(time);

            secsTimer.textContent = secs;
            minsTimer.textContent = mins;
            hoursTimer.textContent = hours;
            daysTimer.textContent = days;
        }, 1000);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 29, 2021')
});

timer1.start();

