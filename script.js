function updateCountdown(targetDate, contentId, eventName) {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const contentElement = document.getElementById(contentId);

      if (distance < 0) {
        contentElement.innerHTML = `
          <div class="celebration">
            🎉 Happy ${eventName}! 🎉
          </div>
        `;
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      contentElement.innerHTML = `
        <div class="time-display">
          <div class="time-unit">
            <span class="time-value">${days}</span>
            <span class="time-label">Days</span>
          </div>
          <div class="time-unit">
            <span class="time-value">${hours}</span>
            <span class="time-label">Hours</span>
          </div>
          <div class="time-unit">
            <span class="time-value">${minutes}</span>
            <span class="time-label">Minutes</span>
          </div>
          <div class="time-unit">
            <span class="time-value">${seconds}</span>
            <span class="time-label">Seconds</span>
          </div>
        </div>
      `;
    }

    function initCountdowns() {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Set Christmas date (December 25)
      let christmasDate = new Date(currentYear, 11, 25, 0, 0, 0);
      if (now > christmasDate) {
        christmasDate = new Date(currentYear + 1, 11, 25, 0, 0, 0);
      }

      // Set New Year date (January 1)
      let newYearDate = new Date(currentYear + 1, 0, 1, 0, 0, 0);

      // Update countdowns every second
      setInterval(() => {
        updateCountdown(christmasDate, 'christmas-content', 'Christmas');
        updateCountdown(newYearDate, 'newyear-content', 'New Year');
      }, 1000);

      // Initial update
      updateCountdown(christmasDate, 'christmas-content', 'Christmas');
      updateCountdown(newYearDate, 'newyear-content', 'New Year');
    }

    // Start countdowns when page loads
    initCountdowns();