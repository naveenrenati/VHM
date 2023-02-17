const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
   
    if (
      text.includes("hello") ||
      text.includes("hai") || text.includes("hey")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Welcome to virtual Medical Assistant";
      texts.appendChild(p);
    }
    if (text.includes("go to home")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Redirecting to home page";
      texts.appendChild(p);
      console.log("opening home page");
      window.open("https://health-web-api.herokuapp.com/");
    }
    if (text.includes("open my services")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Redirecting to Services page";
      texts.appendChild(p);
      console.log("opening services page");
      window.open("https://health-web-api.herokuapp.com/services.html");
    }
    if (text.includes("heart disease")||text.includes("Heart disease")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Redirecting to heart disease prediction";
      texts.appendChild(p);
      console.log("opening heart disease prediction page");
      window.open("https://heart-web-api.herokuapp.com/");
    }
    if (text.includes("liver disease") || text.includes("Liver disease")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Redirecting to liver disease prediction";
      texts.appendChild(p);
      console.log("opening liver disease prediction page");
      window.open("https://liverapi.herokuapp.com/");
    }
    if (text.includes("kidney disease") || text.includes("Kidney Disease")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Redirecting to kidney disease prediction";
      texts.appendChild(p);
      console.log("opening kidney disease prediction page");
      window.open("https://kidney-web.herokuapp.com/");
    }
    if (text.includes("diabetes disease")|| text.includes("Diabetes disease")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Redirecting to diabetes disease prediction";
      texts.appendChild(p);
      console.log("opening diabetes disease prediction page");
      window.open("https://dabetes.herokuapp.com/");
    }
    if (text.includes("Cancer disease") || text.includes("cancer disease")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Redirecting to cancer disease prediction";
      texts.appendChild(p);
      console.log("opening cancer disease prediction page");
      window.open("https://cancer-web.herokuapp.com/");
    }
    if (text.includes("pneumonia disease")|| text.includes("Pneumonia disease")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Redirecting to pneumonia disease prediction";
      texts.appendChild(p);
      console.log("opening pneumonia prediction page");
      window.open("https://pneumonia02.azurewebsites.net/");
    }
    if (text.includes("BMI")||text.includes("bmi")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Redirecting to BMI page";
      texts.appendChild(p);
      console.log("opening BMI page");
      window.open("https://bmi-web-api.herokuapp.com/");
    }
    if (text.includes("BMR")||text.includes("bmr")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Redirecting to BMR page";
      texts.appendChild(p);
      console.log("opening pneumonia BMR page");
      window.open("https://bmr-web.herokuapp.com/");
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();