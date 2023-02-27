

function handleReadMore(){
    var hiddenAchievements = document.getElementById("hiddenachivements");
    var readMore = document.getElementById("read-more-btn");
    readMore.style.display = "none";
    hiddenAchievements.style.display = "block";
    hiddenAchievements.scrollIntoView();
}

function handleReadLess(){
    var hiddenAchievements = document.getElementById("hiddenachivements");
    var readMore = document.getElementById("read-more-btn");
    readMore.style.display = "block";
    hiddenAchievements.style.display = "none";
    document.getElementById("achievements").scrollIntoView();
}

function handleScrollHome(){
    document.getElementById("home").scrollIntoView();   
}

function handleScrollAbout(){
    document.getElementById("about").scrollIntoView();
}
function handleScrollAchievements(){
    document.getElementById("achievements").scrollIntoView();
}
function handleScrollPlacements(){
    document.getElementById("placements").scrollIntoView();
}
function handleScrollContact(){
    document.getElementById("contact").scrollIntoView();
}

function handleScroll(){
    console.log(window.scrollY);
}

