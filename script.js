(function () {
      var startDate = new Date("2021-04-01T00:00:00");
      var today = new Date();

      var years = today.getFullYear() - startDate.getFullYear();
      var months = today.getMonth() - startDate.getMonth();
      var days = today.getDate() - startDate.getDate();

      if (days < 0) {
        months -= 1;
        var previousMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += previousMonthLastDay;
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      var exactText = years + " years, " + months + " months, " + days + " days in Cloud, DevOps, and Python";

      var experienceLine = document.getElementById("experience-line");
      var experienceTrainerLine = document.getElementById("experience-trainer-line");
      var experienceSummary = document.getElementById("experience-summary");
      var experienceStatValue = document.getElementById("experience-stat-value");

      if (experienceLine) {
        experienceLine.textContent = exactText;
      }

      if (experienceTrainerLine) {
        experienceTrainerLine.textContent = years + " years, " + months + " months, " + days + " days";
      }

      if (experienceSummary) {
        experienceSummary.textContent = exactText.charAt(0).toUpperCase() + exactText.slice(1) + ".";
      }

      if (experienceStatValue) {
        experienceStatValue.textContent = years + "y " + months + "m";
        experienceStatValue.title = years + " years, " + months + " months, " + days + " days";
      }

      var contactForm = document.getElementById("contact-form");
      var contactStatus = document.getElementById("contact-status");

      if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
          event.preventDefault();

          if (contactStatus) {
            contactStatus.textContent = "Sending message...";
          }

          var formData = new FormData(contactForm);
          var encodedData = new URLSearchParams(formData).toString();

          fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encodedData
          })
            .then(function () {
              if (contactStatus) {
                contactStatus.textContent = "Message sent successfully.";
              }
              contactForm.reset();
            })
            .catch(function () {
              if (contactStatus) {
                contactStatus.textContent = "Failed to send message. Please try again.";
              }
            });
        });
      }

    })();
