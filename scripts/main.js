const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/office.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    switch (myName) {
      case "Sanjeev":
        myHeading.textContent = "Sanjeev sala IIT EU member";
        break;
      case "Sunit":
        myHeading.textContent = "Sunit = Lodu no.1";
        break;
      case "Avinash":
        myHeading.textContent = "Congratulations Bhai";
        break;
      case "Utpal":
        myHeading.textContent = 'We miss your "G"Pay Utpal :(';
        break;
      case "Govind":
        myHeading.textContent = "GV Seth Welcome!";
        break;
      case "Vikash":
        myHeading.textContent =
          "Hello Sir!! Reporting to dooty at 8:30 am sharp.";
        break;
      case "Akshay":
        myHeading.textContent = "Akshay is a Ponga Pandit";
        break;
      default:
        myHeading.textContent = `The below text is the Firefox logo, ${myName}`;
    }
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  switch (storedName) {
    case "Sanjeev":
      myHeading.textContent = "Sanjeev sala IIT EU member";
      break;
    case "Sunit":
      myHeading.textContent = "Sunit = Lodu no.1";
      break;
    case "Avinash":
      myHeading.textContent = "Congratulations Bhai";
      break;
    case "Utpal":
      myHeading.textContent = 'We miss your "G"Pay Utpal :(';
      break;
    case "Govind":
      myHeading.textContent = "GV Seth Welcome!";
      break;
    case "Vikash":
      myHeading.textContent =
        "Hello Sir!! Reporting to dooty at 8:30 am sharp.";
      break;
    case "Akshay":
      myHeading.textContent = "Akshay is a Ponga Pandit";
      break;
    default:
      myHeading.textContent = `The below text is the Firefox logo, ${storedName}`;
  }
}

myButton.addEventListener("click", () => {
  setUserName();
});
