//This file will host all my js material.
(function() {
  'use strict';

  const camps = [];

  const returnCamps = function() {
    $('#results').empty();

    for (const camp of camps) {
      const $col = $('<div>').addClass('col s12');
      const $card = $('<div>').addClass('card hoverable');
      const $content = $('<div>').addClass('card-content center');
      // const $title = $('<h6>').addClass('card-title truncate');

      // $title.attr({
      //   'data-position': 'top',
      //   'data-tooltip': camp.title
      // });

      // $title.tooltip({ delay: 50 }).text(camp.title);

      // const $poster = $('<img>').addClass('poster');

      // $poster.attr({
      //   src: camp.poster,
      //   alt: `${camp.poster} Poster`
      // });

      // $content.append($title, $poster);
      $card.append($content);

      // const $action = $('<div>').addClass('card-action center');
      // const $plot = $('<a>');

      // $plot.addClass('waves-effect waves-light btn modal-trigger');
      // $plot.attr('href', `#${camp.id}`);
      // $plot.text('Plot Synopsis');
      //
      // $action.append($plot);
      // $card.append($action);

      // const $modal = $('<div>').addClass('modal').attr('id', camp.id);
      // const $modalContent = $('<div>').addClass('modal-content');
      // const $modalHeader = $('<h4>').text(camp.title);
      // const $ageGroup = $('<h6>').text(`Released in ${camp.ecpt_courseagerange}`);
      // const $modalText = $('<p>').text(camp.csv_post_post);

      // $modalContent.append($modalHeader, $ageGroup, $modalText);
      // $modal.append($modalContent);

      // $col.append($card, $modal);

      // $('#results').append($col);

      // $('.modal-trigger').leanModal();
    }
  };

  // ADD YOUR CODE HERE
// function listeningButton()

let formName= document.getElementById('searchCamp');
let searchVal =document.getElementById("searchText");
let searchBtn= document.getElementById('costumerSearch');

//NEED TP UNDERSTAND WELL HOW THIS WORKS

searchBtn.addEventListener("click", function(eventTriggered){
  eventTriggered.preventDefault();
  // understand what this part is doing.
  var campName = searchVal.value;
  //this line returns the value that was entered into the search box.
    campFinder(campName);
      //this invokes the function below on this camp entered.

});
// Fetchng API data
function getRemoteJsonUrl(api) {
  return fetch(api).then( (promise) => promise.json())
}
//Still working on this.
// function campFinder( campName ) {
//   const url = 'https://data.sfgov.org/resource/um8g-99ry.json';
//   getRemoteJsonUrl( url ).then( ( returnedPro ) => {
//     returnedPro.forEach( ( element ) => {
//       if ( campName === element.campNamestr ) {
//         foodMarkersArray.push( foodMarker )
//       }
//     })
//   })
//   .catch( ( error ) => {
//     console.log( "Error Error! The Food trucks API sucks today!" )
//   });
}



function campFinder(campName) {
  const url = 'https://data.sfgov.org/resource/um8g-99ry.json';
  getRemoteJsonUrl(url)
  .then(function (returnedPro){

  })
  return fetch(url)
  .then(function(returnedPro) {
    console.log(returnedPro);
   return returnedPro.json();
 })
 .then((resultingJSON)=> {
  //  console.log(resultingJSON);
   //this returns an array of objects.
    let arrOfCamps = resultingJSON.Search;
    // console.log(item.csv_ctax_classlocation);
    console.log(arrOfCamps);
    arrOfCamps.forEach(function(campObj){
      camps.push({ageGroup: campObj.csv_ctax_agegroup});
    })
    returnCamps();
      // return item.csv_ctax_classlocation;
    // console.log(item.session_title);
    })
      // console.log(arrOfNames);
  // })
  // .then(function(arrOfNames) {
    // console.log(arrOfNames.sort());
  // })
  // console.log();

}

//
//   .then((moviePromise) => {
//     let arrOfMovieObjs = moviePromise.Search;
// // console.log(arrOfMovieObjs);
// arrOfMovieObjs.forEach(function(obj){
//   // console.log(obj.imdbID);
//
//   camps.push({id: obj['imdbID'],
//                 poster: obj['Poster'],
//                 title: obj['Title'],
//                 year: obj['Year']})
//
// });
})();
// returnCamps();
function campFinder(campName){
  var arrOfCampByNames = [];
  let url = 'https://data.sfgov.org/resource/um8g-99ry.json'
  return fetch(url)
  .then(function(returnedPro) {
    console.log(returnedPro);
   return returnedPro.json();
 })
 .then(function(arrOfCamps){
   console.log(arrOfCamps);
   var arrCampsObjs = arrOfCamps;
   arrCampsObjs.forEach(function(obj){
    //  console.log(obj.csv_ctax_agegroup)
     arrOfCampByNames.push({ age: obj.ecpt_courseagerange

     });

})

   })
   return arrOfCampByNames;
 }
