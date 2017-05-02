
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var street = $("#street").val();
    var city = $("#city").val();
    var str = "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=";
    var strUrl = str + street + ", " + city + "&key=AIzaSyBxcTto2LAHJYIGOMzVg64w7EPsL8FouVs";
    console.log(strUrl);

    $body.append('<img class="bgimg" src="' + strUrl + '">');
    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);


// 输入测试的地址：
// 40.720032
// -73.988354