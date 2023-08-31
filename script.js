let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 7000);
}       





  let marc1=document.querySelector(".marcador1")
  let marc2=document.querySelector(".marcador2")
  let marc3=document.querySelector(".marcador3")
  let marc4=document.querySelector(".marcador4")
  let marc5=document.querySelector(".marcador5")
  

function TR(instance) {
instance.scrollIntoView({ behavior: 'smooth' , }); }



let header = document.querySelector("header");





window.addEventListener("resize", function() {
  let header = document.querySelector("header");

  if (window.matchMedia("(max-width: 635px)").matches) {
      // Tamanho da tela menor ou igual a 635px
      header.innerHTML = `
      <div class="logo">
          <img src="assents/Ativo_2.png" alt="">
          <h1>WeCare</h1>
      </div>
      `;

  } else {
      // Tamanho da tela maior que 635px
      


      header.innerHTML = `
      <div class="logo">
          <img src="assents/Ativo_2.png" alt="">
          <h1>WeCare</h1>
      </div>
      <div class="button-class">
          <button onclick="TR(marc1)">Home</button>
          <button onclick="TR(marc2)">Service</button>
          <button onclick="TR(marc3)">Product</button>
          <button onclick="TR(marc4)">About</button>
          <button onclick="TR(marc5)">Contact</button>
      </div>
      `;
  }
});