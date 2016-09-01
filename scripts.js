
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
  $('.number-counter').append(`
      <article class="bookmark-info">
        <h2>${titleInput}</h2>
        <a href="${urlInput}">${urlInput}</a>
        <div id="buttons"><button id="markasread-btn">Mark as Read</button>
        <button id="remove-btn">Remove</button></div>
      </article>`);

  //function to add unique id for each bookmark
  $('.bookmark-info').attr('id', function(i) {
     return 'bookmark'+(i+1);
  });
}
};


//function to test if URL is valid
function testValidUrl () {
  var urlInput = $('#url-input').val();
  return urlInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
};


//function to count number of bookmarks
function getNumberOfBookmarks () {
  var numberOfBookmarks = $('.bookmark-info').length;
};

//function to display number of bookmarks
function displayNumberOfBookmarks () {
  var numberOfBookmarks = $('.bookmark-info').length;
  $('.number-of-bookmarks p').text(numberOfBookmarks);
}

//function to count number of read bookmarks
function getNumberOfRead () {
  var numberOfRead = $('.bookmark-info.read').length;
}

//function to display number of read
function displayNumberOfRead () {
  var numberOfRead = $('.bookmark-info.read').length;
  $('.number-of-read p').text(numberOfRead);
};

//function to count number of unread
function displayNumberOfUnread () {
  var numberOfUnread = $('.bookmark-info:not(.read)').length;
  $('.number-of-unread p').text(numberOfUnread);
};

// function displayNumberOfUnread () {
//   $('.number-of-unread').text();
// }

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
  console.log(testValidUrl())
  if(testValidUrl()) {
    submitBookmarkEvents()
  } else {
    alert('Please enter a valid URL');
  }
});

function submitBookmarkEvents () {
  getTitleInput();
  getUrlInput();
  addAnotherBookmark();
  clearInputFields();
  getNumberOfBookmarks();
  displayNumberOfBookmarks();
  displayNumberOfUnread();
}

//add class read on button click
$('.number-counter').on('click', '#markasread-btn', function (){
  $(this).parent().parent().toggleClass('read');
  if ($(this).text() === 'Mark as Read') {
    $(this).text('Mark as Unread');
  } else {
    $(this).text('Mark as Read');
  };
  getNumberOfRead();
  displayNumberOfRead();
  displayNumberOfUnread();
});

//remove bookmark
$('.number-counter').on('click', '#remove-btn', function (){
  $(this).parent().parent().remove();
displayNumberOfBookmarks();
getNumberOfRead();
displayNumberOfRead();
displayNumberOfUnread();
})


//button to clear read bookmarks
$('#clear-read').on('click', function () {
  clearReadBookmarks();
  getNumberOfRead();
  displayNumberOfRead();
  getNumberOfBookmarks();
  displayNumberOfBookmarks();
})

//function to clear read
function clearReadBookmarks() {
  $('.read').remove();
};
