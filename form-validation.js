const form = document.getElementById("rsvp-form");
const jmeno = document.getElementById("jmeno");
const telefon = document.getElementById("telefon");
const email = document.getElementById("email");
const pocetDospeli = document.getElementById("pocet-dospeli");
const pocetDeti = document.getElementById("pocet-deti");
const ubytovani = document.getElementById("ubytovani");
const heading = document.getElementById("form-heading");
const formUbytovani = document.getElementById("form-ubytovani");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get values from inputs
  const jmenoValue = jmeno.value.trim();
  const telefonValue = telefon.value.trim();
  const emailValue = email.value.trim();
  const pocetDospeliValue = pocetDospeli.value;
  const pocetDetiValue = pocetDeti.value;
  const ubytovaniValue = ubytovani.value;

  if (jmenoValue === "") {
    //show error
    //add error class
    setErrorFor(jmeno, "Prosím vyplňte jméno");
  } else {
    //add success class
    setSuccessFor(jmeno);
  }

  if (telefonValue === "" || isNaN(telefonValue) || telefonValue.length < 9) {
    //show error
    //add error class
    setErrorFor(telefon, "Prosím vyplňte číslo");
  } else {
    //add success class
    setSuccessFor(telefon);
  }

  if (emailValue === "") {
    //show error
    //add error class
    setErrorFor(email, "Prosím vyplňte email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Neplatný email");
  } else {
    //add success class
    setSuccessFor(email);
  }

  if (pocetDospeliValue === "") {
    //show error
    //add error class
    setErrorFor(pocetDospeli, "Prosím vyberte počet");
  } else {
    //add success class
    setSuccessFor(pocetDospeli);
  }

  if (pocetDetiValue === "") {
    //show error
    //add error class
    setErrorFor(pocetDeti, "Prosím vyberte počet");
  } else {
    //add success class
    setSuccessFor(pocetDeti);
  }

  /*if (ubytovaniValue === "jine") {
    displayComment(ubytovani, "Prosíme uveďte níže, \n kde hodláte nocovat :)");
  }*/

  if (
    jmeno.parentElement.className === "form-control success" &&
    telefon.parentElement.className === "form-control success" &&
    email.parentElement.className === "form-control success" &&
    pocetDospeli.parentElement.className === "form-control success" &&
    pocetDeti.parentElement.className === "form-control success"
  ) {
    heading.textContent = "Děkujeme za vyplnění formuláře :)";

    setTimeout(function () {
      form.reset();
      jmeno.parentElement.classList.toggle("success");
      telefon.parentElement.classList.toggle("success");
      email.parentElement.classList.toggle("success");
      pocetDospeli.parentElement.classList.toggle("success");
      pocetDeti.parentElement.classList.toggle("success");
      //ubytovani.parentElement.classList.toggle("message");
    }, 4000);
    console.log("It works");

    function val() {
      return true;
    }
    console.log(val());
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

/*function displayComment(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control message";

  const small = formControl.querySelector("small");
  small.innerText = message;
}*/

// checks if input is email. If not returns false
function isEmail(input) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input
  );
}
