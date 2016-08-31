
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
  $('.bookmark-info').toggleClass('read');
};


//function to remove bookmark when you click remove button
function removeBookmark () {
  $('.bookmark-info').remove();
};

//post new bookmark
$('#create-bookmark-btn').on('click', function (){
  getTitleInput();
  getUrlInput();
  addAnotherBookmark();
});

//add class read on button click
$('.create-bookmark').on('click', '#markasread-btn', function (){
  markAsRead();
});

//remove previous bookmark
$('.create-bookmark').on('click', '#remove-btn', function (){
  removeBookmark();
});
