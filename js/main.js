// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  let yesCount = 0;
  let noCount = 0;
  let maybeCount = 0;
  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] == "Yes") {
      yesCount++;
    }
    if (surveyData[i] == "No") {
      noCount++;
    }
    if (surveyData[i] == "Maybe") {
      maybeCount++;
    }
  }
  outputEl.innerHTML = `Yes (${yesCount}), No (${noCount}), Maybe(${maybeCount}).`;
  console.log(surveyData);
}

function traverseAgeData() {
  let underageCount = 0;
  let eighteenTo35Count = 0;
  let thirtysixTo65Count = 0;
  let over65Count = 0;
  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      underageCount++;
    }
    if (ageData[i] >= 18 && ageData[i] <= 35) {
      eighteenTo35Count++;
    }
    if (ageData[i] >= 36 && ageData[i] <= 65) {
      thirtysixTo65Count++;
    }
    if (ageData[i] > 65) {
      over65Count++;
    }
  }
  outputEl.innerHTML = `Under 18 (${underageCount}), 18 to 35 (${eighteenTo35Count}), 36 to 65 (${thirtysixTo65Count}), Above 65 (${over65Count}).`;
  console.log(ageData);
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 == 0) {
      evenCount++;
    }
    if (numberData[i] % 2 == 1) {
      oddCount++;
    }
  }
  outputEl.innerHTML = `Even (${evenCount}), Odd (${oddCount}).`;
  console.log(numberData);
}
