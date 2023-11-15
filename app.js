/*
 * Noel Delgado | @pixelia_me
 */

var items = [],
  point = document.querySelector("svg").createSVGPoint();

function getCoordinates(e, svg) {
  point.x = e.clientX;
  point.y = e.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function changeColor(e) {
  document.body.className = e.currentTarget.className;
}

function Item(config) {
  Object.keys(config).forEach(function (item) {
    this[item] = config[item];
  }, this);
  this.el.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
  this.el.addEventListener("touchmove", this.touchMoveHandler.bind(this));
}

Item.prototype = {
  update: function update(c) {
    this.clip.setAttribute("cx", c.x);
    this.clip.setAttribute("cy", c.y);
  },
  mouseMoveHandler: function mouseMoveHandler(e) {
    this.update(getCoordinates(e, this.svg));
  },
  touchMoveHandler: function touchMoveHandler(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) return this.update(getCoordinates(touch, this.svg));
  },
};

[].slice
  .call(document.querySelectorAll(".item"), 0)
  .forEach(function (item, index) {
    items.push(
      new Item({
        el: item,
        svg: item.querySelector("svg"),
        clip: document.querySelector("#clip-" + index + " circle"),
      })
    );
  });

[].slice
  .call(document.querySelectorAll("button"), 0)
  .forEach(function (button) {
    button.addEventListener("click", changeColor);
  });

function mode(mode) {
  if (mode == 0) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    document.getElementById("dark").style.display = "none";
    document.getElementById("light").style.display = "block";
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    document.getElementById("dark").style.display = "block";
    document.getElementById("light").style.display = "none";
  }
}

function read(articleId) {

  document.getElementById('blogs').style.display = "block";
  var articles = document.getElementsByClassName('article');
  for (var i = 0; i < articles.length; i++) {
    var el =  document.getElementById(articles[i].id);
    el.style.display = 'none';
  }
  document.getElementById(articleId).style.display = "block";

}
