var displayContent = document.querySelector("#display-content");

var categoryName = localStorage.getItem("categoryName");
var capCategoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
console.log(capCategoryName);

var fetchedResult = JSON.parse(localStorage.getItem("passedData"));
console.log(fetchedResult);
function run() {
    $(searchedTitle).text(capCategoryName).css({"font-family" : 'Bebas Neue, cursive'});
    for (var i = 0; i < 20; i++) {
        var card = $("<div>").css({
            "margin-top" : "30px", 
            "border-bottom": "2px solid #c4c4c4", 
            "border-top": "2px solid #c4c4c4", 
            "background-color" : "#d1d1d1",
            "text-align" : "center",
            "padding-bottom" : "10px"
        });
        var title = $("<span>").addClass("black-text").text(fetchedResult.articles[i].title).css({"font-size" : "24px", "font-family" : "Bebas Neue, cursive"});
        var cardContainer = $("<div>").css({"text-align" : "center"});
        var cardImg = $("<img>").attr("src", fetchedResult.articles[i].urlToImage).height(275).width(350).css({"border" : "1px solid #26a69a", "box-shadow" : "1px 1px 4px #26a69a"});
        var link = $("<a>").attr("href", fetchedResult.articles[i].url).addClass("btn btn-medium").text("Click for more").css({"font-size" : "18px", "font-family" : "'Germania One', cursive"});
        $("#display-content").append(card.append(title).append(cardContainer.append(cardImg), link));
    }
}


function currentTime() {
    $("#time").text(moment().format('h:mm:ss a'));
}

run();
currentTime();
setInterval(currentTime, 1000);