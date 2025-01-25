$(document).ready(function () {
  // $(".bao").click(function(){
  //     alert("Clicked.")
  //     });

  // Clicking Bao changes the background color
  const bao = document.getElementsByClassName("bao")[0];

  bao.addEventListener("click", function () {
    document.body.classList.add("new-color");
    bao.classList.add("disappear");

    repentDisappear();
  });

  // document.getElementById("myElement").classList.add("transitionClass");

  $("#test").click(function () {
    alert("Test.");
  });
});

var unc = ["I miss you, Bao..."];

function listCat() {
  for (var i = 0; i < unc.length; i++) {
    console.log(unc[i]);
  }
}

listCat();

function changeBg() {
  document.body.style.backgroundColor = "black";
}

function repentDisappear() {
  setTimeout(() => {
    document.getElementById("repent").classList.add("disappear");
  }, 2000);

  setTimeout(() => {
    document.getElementsByClassName("bao2")[0].classList.add("grow");
  }, 4000);
}
