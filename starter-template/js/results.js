
const camps = [];

let formName = document.getElementById('searchCamp');
let searchVal = document.getElementById("searchText");
let searchBtn = document.getElementById('costumerSearch');

searchBtn.addEventListener("click", function(eventTriggered){
eventTriggered.preventDefault();
let userInput = searchVal.value;
// //this line returns the value that was entered into the search box.
  campFinder(userInput);
    //this invokes the function below on this camp entered.
});

//create a function that will create the multiple divs and classes that we will need in order
//display the information as see in the card above.


// Fetchng API data
// function getRemoteJsonUrl(api) {
//   return fetch(api).then( (promise) => promise.json())
// }
// returnCamps();
function campFinder(zipCode){

  let arrOfCampByNames =[];
// this array will found =globally
// let url = `https://data.sfgov.org/resource/um8g-99ry.json?zipcode=${zipCode}`;
  let url =`https://data.sfgov.org/resource/94uf-amnx.json?zipcode=${zipCode}`;
  return fetch(url)
  .then(function(returnedPro) {
    return returnedPro.json();
  })
  .then(function(arrOfCamps){

      let arrCampsObjs = arrOfCamps.map(function(obj) {
          let newObj = {};
          newObj.name = obj.parkname;
          newObj.number = obj.number;
          newObj.email = obj.email;

          return newObj;
          });

          for (let i = 0 ; i < arrCampsObjs.length ; i++) {
            camps.push(arrCampsObjs[i]);
          }
          for (let j = 0; j < camps.length; j++) {
            // let campLocation = document.createElement('div');
            // campLocation.setAttribute('class', 'card-content');
            // let phoneNumber = document.createElement('<span>')
            //   let campPhone = phoneNumber.setAttribute(class="card-title");


            // let campObj = document.
            //work on these lines. interpolation refactor.
            let newDiv = document.createElement("div");
            newDiv.innerHTML = '<h5>' + camps[j].name+'</h5>';
            newDiv.innerHTML += '<p>' +'Telephone Number : ' + camps[j].number +'</p>';


            let setingAt = newDiv.setAttribute('class', 'row');
            let newCard = document.getElementById('results')
            newDiv.className='card blue-grey darken-1';
            //start styilng here. into the className.
            //work on this.
            newCard.append(newDiv);
        }

          // document.getElementsByTagName('h1')[0].innerText = camps;
          // camps.forEach(function(item){
          //
          // })
          console.log(camps);
          // note camps returns an array of objs with the features that I want in my object.
      })

  }

// })();
// console.log(campFinder(94105));
// working with Matt Williams on the function above.
