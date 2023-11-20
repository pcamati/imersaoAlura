var listMovies = []
var listMoviesName = []

function checkEnterKey(event, movieIndex){
  if (event.keyCode === 13){
    movieIndex--
    var movieId = "movieInput"+movieIndex
    var nameMovie = document.getElementById(movieId).value

    var oldElement = document.getElementById(movieId);
    var newElement = document.createElement("p");
    newElement.innerHTML = nameMovie;
    newElement.className = "page-subtitle"

    if (oldElement.parentNode) {
        oldElement.parentNode.replaceChild(newElement, oldElement);
    }    
  }
}

function deleteMovie(movieIndex){
  listMovies.splice(movieIndex,1)
  listMoviesName.splice(movieIndex,1)
  displayMovies()
}

function deleteContainerMovies(){
  var elementToDelete = document.getElementById("containerMovies")
  if (elementToDelete !== null) {
    elementToDelete.parentNode.removeChild(elementToDelete);
  } else {
  }
}

function addMovie() {
  var favoriteMovie = document.getElementById("addMovie").value
  var movieName = document.getElementById("addMovieName").value
  
  if (favoriteMovie === "") {

  } else {
    document.getElementById("addMovie").value = ""
    document.getElementById("addMovieName").value = ""
    listMovies.push(favoriteMovie)
    listMoviesName.push(movieName)
    displayMovies()
  }
}

function displayMovies() {
  deleteContainerMovies()
  var containerMovies = document.createElement("div")
  containerMovies.id = "containerMovies"
  containerMovies.className = "form-wrapper"
  document.body.appendChild(containerMovies)
  
  for (movieIndex=0; movieIndex<listMovies.length; movieIndex++){
    var container = document.createElement("div")
    var containerId = "container"+movieIndex
    container.id = containerId
    container.className = "form-wrapper"
    containerMovies.appendChild(container)
 
    var movieName = document.createElement("p")
    movieName.innerHTML = listMoviesName[movieIndex];
    movieName.className = "page-subtitle" 
    container.appendChild(movieName)

    var lineBreak = document.createElement("br")    
    container.appendChild(lineBreak)
    
    var imageMovie = document.createElement("img")
    imageMovie.src = String(listMovies[movieIndex])
    imageMovie.id = "imageMovie"+movieIndex
    container.appendChild(imageMovie)

    container.appendChild(lineBreak)
    
    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    var deleteButtonId = "deleteButton"+movieIndex
    deleteButton.id = deleteButtonId

    deleteButton.onclick = (function(index) {
      return function() {
        deleteMovie(index);
      };
    })(movieIndex);
    container.appendChild(deleteButton)
   
    container.appendChild(lineBreak)
  }
}