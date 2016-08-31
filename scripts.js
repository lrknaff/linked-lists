
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
      <article>
        <h2>${titleInput}</h2>
        <a href="#">${urlInput}</a>
        <button>Mark as Read</button>
        <button>Remove</button>
      </article>`);
};

$('#create-bookmark-btn').click(function (){
  getTitleInput();
  getUrlInput();
  addAnotherBookmark();

});
