$(document).ready(function () {
  $(document).keydown(function (e) {
    switch (e.which) {
      case 37:
        $('.doggy').stop().animate({
          left: '-=70'
        }, 200); //left arrow key
        break;
      case 38:
        $('.doggy').stop().animate({
          top: '-=70'
        }, 200); //up arrow key
        break;
      case 39:
        $('.doggy').stop().animate({
          left: '+=70'
        }, 200); //right arrow key
        break;
      case 40:
        $('.doggy').stop().animate({
          top: '+=70'
        }, 200); //bottom arrow key
        break;
    }
  });

  var circleNum = 20;
  var heartNum  = 20;
  var starNum   = 4;

  var container       = $(".main-container");
  var containerWidth  = container.width();
  var containerHeight = container.height();


  function createCircles() {
    for (var i = 0; i < circleNum; i++) {
      var newCircle = $("<div />");
      var d         = 20;
      newCircle.addClass("circle");

      newCircle.css({
        width: 20,
        height: 20,
        left: Math.random() * Math.max(containerWidth - d, 0),
        top: Math.random() * Math.max(containerHeight - d, 0),
        backgroundColor: 'gold'
      });
      container.append(newCircle);
    }
  }

  function createHearts() {
    for (var j = 0; j < heartNum; j++) {
      var newHeart = $("<div />");
      newHeart.addClass("heart");

      newHeart.css({
        left: Math.random() * Math.max(containerWidth, 0),
        top: Math.random() * Math.max(containerHeight, 0)
      });
      container.append(newHeart);
    }
  }

  function createStars() {
    for (var k = 0; k < starNum; k++) {
      var newStar = $("<div />");
      newStar.addClass("star-five");

      newStar.css({
        left: Math.random() * Math.max(containerWidth, 0),
        top: Math.random() * Math.max(containerHeight, 0)
      });
      container.append(newStar);
    }
  }

  createCircles();
  createHearts();
  createStars();


});