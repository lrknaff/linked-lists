
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
      <article class="bookmark-info">
        <h2>${titleInput}</h2>
        <a href="#">${urlInput}</a>
        <button id="markasread-btn">Mark as Read</button>
        <button id="remove-btn">Remove</button>
      </article>`);
};

//function to add 'read' class on bookmark
function markAsRead () {
  $('.bookmark-info').addClass('read');
};

// //function to remove class 'read' on bookmark
// function removeMarkRead () {
//   $('.bookmark-info').removeClass('read');
// };
//
//function to remove bookmark when you click remove button
function removeBookmark () {
  var bookmarkInfo = $('.bookmark-info').val();
  $('remove-btn').remove(bookmarkInfo);
};

$('#create-bookmark-btn').on('click', function (){
  getTitleInput();
  getUrlInput();
  addAnotherBookmark();

});

$('.create-bookmark').on('click', '#markasread-btn', function (){
  markAsRead();
});

$('#remove-btn').on ('click', function (){
  removeBookmark();
});
