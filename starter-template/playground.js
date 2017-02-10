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

function campFinder(zipCode){
  const camps = [];

// this array will found =globally
// let url = `https://data.sfgov.org/resource/um8g-99ry.json?zipcode=${zipCode}`;
  let url =`https://data.sfgov.org/resource/94uf-amnx.json?zipcode=${zipCode}`;
  return fetch(url)
  .then(function(returnedPro) {
    return returnedPro.json();
  })
  .then(function(arrOfCamps){
      //creating an array of modied objects.
      let arrCampsObjs = arrOfCamps.map(function(obj) {
          let newObj = {};
          newObj.name = obj.parkname;
          newObj.number = obj.number;
          newObj.email = obj.email;

          return newObj;
          });
          console.log(arrCampsObjs);

          // for (let i = 0 ; i < arrCampsObjs.length ; i++) {
          //   camps.push(arrCampsObjs[i]);

        // }
          for (let j = 0; j < arrCampsObjs.length; j++) {
              let curCampObj = arrCampsObjs[j];
            createAndAppendCampCard(curCampObj);
            // let campCard = createCard(curCamp);
          }
            // function createAndAppendCampCard(curCamp){
            //   let campCard = createCard(curCamp);
            //   let results = document.getElementById('results');
            //   appendToDom(result, campCard);
            //
            // }
            // function appendToDom(results, campCard){
            //   return results.appendChild(campCard);
            // }

            // console.log(curCamp);
            // return createCard();
            // let campLocation = document.createElement('div');
            // campLocation.setAttribute('class', 'card-content');
            // let phoneNumber = document.createElement('<span>')
            //   let campPhone = phoneNumber.setAttribute(class="card-title");


            // let campObj = document.
            //work on these lines. interpolation refactor.
            // let newDiv = document.createElement("div");
            // newDiv.innerHTML = '<h5>' + camps[j].name+'</h5>';
            // newDiv.innerHTML += '<p>' +'Telephone Number : ' + camps[j].number +'</p>';


            // let setingAt = newDiv.setAttribute('class', 'row');
            // let newCard = document.getElementById('results');
            // newDiv.className='card blue-grey darken-1';
            //start styilng here. into the className.
            //work on this.
            // newCard.append(campCard);
            // rememeber the change to line   # 73


        // }
          // console.log(camps);
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

   // topDiv.appendChild('topDivWClass');
   topDiv.append('secDiv');
   secDiv.append('thirdDiv');
   thirdDiv.append('fourthDiv');
   fourthDiv.append('innerInfo');
   innerInfo.append('infoP');
   return topDiv;
 }
