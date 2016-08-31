
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
  $(titleInput).text('');
}
};


//enable create bookmark button when user types in title or url field
$('#title-input, #url-input').keyup(function () {
  $('#create-bookmark-btn').prop("disabled", false);
});

//function to clear field on submit bookmark click
function clearInputFields () {
  $('create-bookmark-btn').prop("disabled", true);

};

//post new bookmark
$('#create-bookmark-btn').on('click', function (){
  getTitleInput();
  getUrlInput();
  addAnotherBookmark();
  clearInputFields();
});

//add class read on button click
$('.create-bookmark').on('click', '#markasread-btn', function (){
  $(this).parent().toggleClass('read');
});

//remove bookmark
$('.create-bookmark').on('click', '#remove-btn', function (){
  $(this).parent().remove();
})
