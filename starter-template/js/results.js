
const camps = [];

let formName = document.getElementById('searchCamp');
let searchVal = document.getElementById('searchText');
let searchBtn = document.getElementById('costumerSearch');

searchBtn.addEventListener("click", function(eventTriggered){
eventTriggered.preventDefault();
let userInput = searchVal.value;
  campFinder(userInput);
});

//create function that will create the div
//this will eventually be used to to be called in the for loop and
//create the div that will then show up in the function.
//

function campFinder(zipCode) {

// this array will found =globally
// let url = `https://data.sfgov.org/resource/um8g-99ry.json?zipcode=${zipCode}`;
  let url =`https://data.sfgov.org/resource/94uf-amnx.json?zipcode=${zipCode}`;
  return fetch(url)
  .then(function(returnedPro) {
    return returnedPro.json();
  })
  .then(function(arrOfCamps) {
      //creating an array of modifed objects.
      let arrCampsObjs = arrOfCamps.map(function(obj) {
          let newObj = {};
          newObj.name = obj.parkname;
          newObj.number = obj.number;
          newObj.email = obj.email;

          return newObj;
          });

          for (let j = 0; j < arrCampsObjs.length; j++) {
              let curCampObj = arrCampsObjs[j];
            createAndAppendCampCard(curCampObj);
          }
      })
  }


  // adding new options tab
  $(document).ready(function() {
    $('select').material_select();
  });

  function createAndAppendCampCard(curCampObj){
    let campCard = createCard(curCampObj);
    let results = document.getElementById('results');
    appendToDom(results, campCard);

  }

  function appendToDom(results, campCard){
    return results.appendChild(campCard);
  }

  function createCard(curCampObj){
   let topDiv = document.createElement('div');
    topDiv.setAttribute('class', 'row');
    topDiv.setAttribute('id','eachCard');
   let secDiv = document.createElement('div');
    secDiv.setAttribute('class', 'col s12 m6');
   let thirdDiv = document.createElement('div');
    thirdDiv.setAttribute('class', 'card blue-grey darken-1');
   let fourthDiv = document.createElement('div');
    fourthDiv.setAttribute('class', 'card-content white-text');
   let innerInfo = document.createElement('span');
    innerInfo.setAttribute('class', 'card-title');
    innerInfo.innerText = curCampObj.name;
  let infoP = document.createElement('p');
    // infoP.innerText = curCampObj.number;
    // infoP.innerText += curCampObj.email;

   topDiv.append('secDiv');
   secDiv.append('thirdDiv');
   thirdDiv.append('fourthDiv');
   fourthDiv.append('innerInfo');
   innerInfo.append('infoP');
   return topDiv;
 }
