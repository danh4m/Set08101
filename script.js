//This function is simply for going to the previous page.
function previous() {
    window.history.back();
  }
//This function adds the ability to toggle dark mode/light mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//this function allows the user to change the font to suit them better
function fontFunction() {
  var element = document.body;
  element.classList.toggle("clean-font");
}

//This function picks one of these quotes to display to user
function writeRandomQuote() {
    var quotes = new Array();
    quotes[0] = "'To the well organised mind death is but the next great adventure.'";
    quotes[1] = "'The fear of death follows from fear of life. A man who lives fully is prepared to die at any time.'";
    quotes[2] = "'Death is not the opposite of life but a part of it.'";
    quotes[3] = "'Death is not scary. It's where we end up that is.'";
    quotes[4] = "'From my rotting body, flowers shall grow and I am in them and that is eternity.'";
    quotes[5] = "'Be afraid. Be very afraid.'";
    quotes[6] = "'The patience of death is embodied in it's willingness to wait for all of us.'";
    quotes[7] = "'No one escapes from life alive.'";
    quotes[8] = "'The real world is where the monsters are.'";
    quotes[9] = "'It matters not how man dies, but how he lives.'";
    quotes[10] = "'Monsters are real, ghosts are real too. They live inside us and sometimes THEY WIN.'";
    var rand = Math.floor(Math.random()*quotes.length);
    alert(quotes[rand]);
}

//this function displays todays date
function showDate() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //months are zero based
    var curr_year = d.getFullYear();
    document.write(curr_date + "-" + curr_month + "-" + curr_year);
}