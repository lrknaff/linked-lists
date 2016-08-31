
function getTitleInput () {
  var titleInput = $('#title-input').val();
  console.log(titleInput);
}

function getUrlInput () {
  var urlInput = $('#url-input').val();
  console.log(urlInput);
}


function addAnotherBookmark () {
  var titleInput = $('#title-input').val();
  var urlInput = $('#url-input').val();
  //add new bookmark to list
  $('.create-bookmark').append(`
      <article class="bookmark">
        <h2>${titleInput}</h2>
        <a href="#">${urlInput}</a>
        <button class="mark-as-read-btn">Mark as Read</button>
        <button>Remove</button>
      </article>`);
};

$('#create-bookmark-btn').click(function (){
  getTitleInput();
  getUrlInput();
  addAnotherBookmark();

});
$('.bookmark',).click('.mark-as-read-btn',  function(){
  $(this).toggleClass('.read');
// });
