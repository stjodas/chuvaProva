let click = document.querySelector('.click');
let list = document.querySelector('.list');
click.addEventListener("click", ()=>{
    list.classList.toggle('newlist')
});

// Accordion

let acc = document.getElementsByClassName("accordion");
let painel = document.getElementsByClassName("")
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}