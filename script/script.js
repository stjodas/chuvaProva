let click = document.querySelector(".click");
let list = document.querySelector(".list");
click.addEventListener("click", () => {
  list.classList.toggle("newlist").style.display = "absolute";
});
// Accordion

let acc = document.getElementsByClassName("accordion");
let painel = document.getElementsByClassName("panel");
let lorem = document.querySelector("#loremIpsum");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = lorem;
    if (panel.style.display === "block") {
      panel.style.display = "flex";

      lorem.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant... <b>ver mais</b>";
    } else {
      panel.style.display = "block";
      lorem.textContent =
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum. Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio. Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa. Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    }
  });
}


// Topic buttons

function hideTopic() {
  let control = document.getElementById("creatTopic");
  let control2 = document.getElementById("end");
  if (control.style.display === "none") {
    control.style.display = "flex";
    control2.style.display = "none";
  } else {
    control.style.display = "none";
  }
}

let control = document.getElementById("creatTopic");
let control3 = document.getElementById("newTopicAgain");

function newTopic() {
  let control = document.getElementById("creatTopic");
  let control3 = document.getElementById("newTopicAgain");
  if (control.style.display === "flex") {
    control3.style.display = "flex";
    control.style.display = "none";
  } else {
    control.style.display = "flex";
  }
}

function showNewTopic() {
  let control = document.getElementById("creatTopic");
  let control3 = document.getElementById("newTopicAgain");
  if (control.style.display === "none") {
    control3.style.display = "none";
    control.style.display = "flex";
  } else {
    control.style.display = "none";
  }
}

//Author reply
var esconder = document.getElementById("replyAuthor");
esconder.addEventListener("click", function () {
  var escondido = document.getElementById("hide");

  if (escondido.style.display === "none") {
    escondido.style.display = "block";
  } else {
    escondido.style.display = "none";
  }
});

//Menu itens
var menuItemContainer = document.getElementById("menu-item");
var items = menuItemContainer.getElementsByClassName("link");
for (var k = 0; k < items.length; k++) {
  items[k].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
