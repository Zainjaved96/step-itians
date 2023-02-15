// Fetching All JSON FILE
var htmlList = document.getElementById("learning-html");
var cssList = document.getElementById("learning-css")
var bsList = document.getElementById("learning-bs")
var jsList = document.getElementById("learning-js")
console.log(htmlList);

// Adding Home on 


// Fetching HTML JSON file

// Using If else statments to only fetch data when their respective
// page is opened
if (window.location.href.includes("learning-html.html")){
  fetch("../data/html.json")
  .then((response) => response.json())
  .then((data) => {

    let questions = data["questions"];

   //  Looping over the JSON array 
    for (let index = 0; index < questions.length; index++) {
      let question = `#${index + 1}  ${questions[index].question}`;
      let answer = questions[index].answer;

    //   Adding html that will go inside the Question Container
      let html = `
        <div class="accordion my-3" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button question-head" id="question-${index}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapseOne">
  
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body fw-bold" id="answer-${index}">
                  
            </div>
          </div>
        </div>
    </div>
        `;
      htmlList.innerHTML += html;
      document.getElementById(`question-${index}`).textContent = question
      document.getElementById(`answer-${index}`).textContent = answer
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}



// Fetching CSS
else if(window.location.href.includes("learning-css")) {
fetch("../data/css.json")
  .then((response) => response.json())
  .then((data) => {
    let questions = data["questions"];

   //  Looping over the JSON array 
    for (let index = 0; index < questions.length; index++) {
      let question = `#${index + 1}  ${questions[index].question}`;
      let answer = questions[index].answer;

    //   Adding html that will go inside the Question Container
      let html = `
        <div class="accordion my-3" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button question-head" id="question-${index}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapseOne">
  
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body fw-bold" id="answer-${index}">
                  
            </div>
          </div>
        </div>
    </div>
        `;
      cssList.innerHTML += html;
      document.getElementById(`question-${index}`).textContent = question
      // Adding body class for styling
      document.getElementById(`answer-${index}`).classList.add("answer-body")
      document.getElementById(`answer-${index}`).textContent = answer
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}



// Fetching Bootstrap

else if(window.location.href.includes("learning-bs")){
fetch("../data/bootstrap.json")
  .then((response) => response.json())
  .then((data) => {
    let questions = data["questions"];

   //  Looping over the JSON array 
    for (let index = 0; index < questions.length; index++) {
      let question = `#${index + 1}  ${questions[index].question}`;
      let answer = questions[index].answer;

    //   Adding html that will go inside the Question Container
      let html = `
        <div class="accordion my-3" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button question-head" id="question-${index}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapseOne">
  
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body fw-bold" id="answer-${index}">
                  
            </div>
          </div>
        </div>
    </div>
        `;
      bsList.innerHTML += html;
      document.getElementById(`question-${index}`).textContent = question
      // Adding body class for styling
      document.getElementById(`answer-${index}`).classList.add("answer-body")
      document.getElementById(`answer-${index}`).textContent = answer
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

}

else if(window.location.href.includes("learning-js")){
  fetch("../data/javascript.json")
    .then((response) => response.json())
    .then((data) => {
      let questions = data["questions"];
  
     //  Looping over the JSON array 
      for (let index = 0; index < questions.length; index++) {
        let question = `#${index + 1}  ${questions[index].question}`;
        let answer = questions[index].answer;
  
      //   Adding html that will go inside the Question Container
        let html = `
          <div class="accordion my-3" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button question-head" id="question-${index}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapseOne">
    
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body fw-bold" id="answer-${index}">
                    
              </div>
            </div>
          </div>
      </div>
          `;

        jsList.innerHTML += html;
        document.getElementById(`question-${index}`).textContent = question
        // Adding body class for styling
        document.getElementById(`answer-${index}`).classList.add("answer-body")
        document.getElementById(`answer-${index}`).textContent = answer
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  }