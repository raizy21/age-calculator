//event submit for calculate age
document
  .getElementById("age-calculator-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); //prevent default submission

    let dateInput = document.getElementById("birthdate").value; //save the input
    if (!dateInput) {
      //if no data enter
      document.getElementById("result").textContent =
        "Please enter a valid date."; //msg to enter a date
      return;
    }

    const birthdate = new Date(dateInput); // convert the input date
    const today = new Date(); // variable with today date

    let age = today.getFullYear() - birthdate.getFullYear(); //calculate the age
    const month = today.getMonth() - birthdate.getMonth(); //calculate the mont

    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      //subtract the moth if necessary
      age--;
    }

    document.getElementById("result").textContent = `You are ${age} years old.`; //print result
  });
