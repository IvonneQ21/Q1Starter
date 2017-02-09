
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


// Fetchng API data
// function getRemoteJsonUrl(api) {
//   return fetch(api).then( (promise) => promise.json())
// }
// returnCamps();
function campFinder(zipCode){

  var arrOfCampByNames =[];
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

          for (let i = 0 ; i < arrCampsObjs.length ; i++){
            camps.push(arrCampsObjs[i]);
          }
          for (let j = 0; j < camps.length; j++) {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = '<h4>' + camps[j].name+'</h4>';
            var setingAt = newDiv.setAttribute('class', 'row');
            var toAppendTo = document.getElementById('results')
            toAppendTo.append(newDiv);
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
