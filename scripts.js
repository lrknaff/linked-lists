
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

  //if no url gives error message
  if (urlInput === '') {
    $('.message').text('oops! you must input a valid url');
  }

  else {
//add new bookmark to list
  $('.create-bookmark').append(`
      <article class="bookmark-info">
        <h2>${titleInput}</h2>
        <a href="#">${urlInput}</a>
        <button id="markasread-btn">Mark as Read</button>
        <button id="remove-btn">Remove</button>
      </article>`);

  //function to add unique id for each bookmark
  $('.bookmark-info').attr('id', function(i) {
     return 'bookmark'+(i+1);
  });
}
};

//function to count number of bookmarks
function getNumberOfBookmarks () {
  var numberOfBookmarks = $('.bookmark-info').length;
};

//function to display number of bookmarks
function displayNumberOfBookmarks () {
  var numberOfBookmarks = $('.bookmark-info').length;
  $('.number-of-bookmarks').text(numberOfBookmarks);
}

//function to count number of read bookmarks
function getNumberOfRead () {
  var numberOfRead = $('.read').length;
}

//function to display number of read
function displayNumberOfRead () {
  var numberOfRead = $('.read').length;
  $('.number-of-read').text(numberOfRead);
};

//function to clear input field and disable button if both fields have content
function clearInputFields () {
  var titleInput = $('#title-input').val();
  var urlInput = $('#url-input').val();

  if (urlInput.length > 0 && titleInput.length > 0) {
    $('#create-bookmark-btn').prop("disabled", true);
    $('#title-input').val('');
    $('#url-input').val('');
    $('.message').text('');
  }
}

//enable create bookmark button when user types in title or url field
$('#title-input, #url-input').keyup(function () {
  $('#create-bookmark-btn').prop("disabled", false);
});


//post new bookmark
$('#create-bookmark-btn').on('click', function (){
  getTitleInput();
  getUrlInput();
  addAnotherBookmark();
  clearInputFields();
  getNumberOfBookmarks();
  displayNumberOfBookmarks();
});

//add class read on button click
$('.create-bookmark').on('click', '#markasread-btn', function (){
  $(this).parent().toggleClass('read');
  getNumberOfRead();
  displayNumberOfRead();
});

//remove bookmark
$('.create-bookmark').on('click', '#remove-btn', function (){
  $(this).parent().remove();
displayNumberOfBookmarks();
})
