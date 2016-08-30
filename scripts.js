

function getTitleInput () {
  var titleInput = $('#title-input').val();
  console.log(titleInput);
}

function getUrlInput () {
  var urlInput = $('#url-input').val();
  console.log(urlInput);
}

function addBookmarkText () {
   //store input variables
  var titleInput = $('#title-input').val();
  var urlInput = $('#url-input').val();
  //insert getTitleInput in h2
  $('h2').text(titleInput);
  $('a').text(urlInput);
}

function addAnotherBookmark () {
  var bookmarkList = $('.bookmark-list').html();
  $('body').append('<div>' + bookmarkList + '</div>');
}

$('#create-bookmark-btn').click(function (){
  getTitleInput();
  getUrlInput();
  addBookmarkText();
  addAnotherBookmark();

});
