let activePage = "istorie";

function $(selector) {
  return document.querySelector(selector);
}
function hide(id) {
  $("#" + id).style.display = "none";
}
function show(id) {
  $("#" + id).style.display = "block";
}

function showPage(id) {
  hide(activePage);
  show(id);
  activePage = id;
}

function createMainLayout() {
  return `
  <div class ="container">
    <div class ="header">
      <div class ="logo">
          <img src ="./images/logo-blue.png">
        </div>
      <div class = "header-info">
          <h1>Vizit Coșeiu</h1>
          <h2>Bine ați venit!</h2>
        </div>
    </div>
     <div class="menu-bar">
        <ul class="header-top-menu-bar">
        <li><a href ="#" data-page = "istorie">Istorie</a></li>
        <li><a href ="#" data-page="producatori">Producatori</a></li>
        <li><a href ="#" data-page="evenimente">Evenimente</a></li>
        <li><a href ="#" data-page="cazare">Cazare</a></li>
        <li><a href ="#" data-page="transport">Transport</a></li>
        <li><a href ="#" data-page="institutii">Institutii</a></li>
        <li><a href ="#" data-page="magazine">Magazine</a></li>
        <li><a href ="#" data-page="galerie">Galerie</a></li> 
        </ul>
      </div>

       <div id="istorie" class="page">
          <h1>Istoria Comunei</h1>
        </div>

      <div id="producatori" class="page">
          <h1>Producatori locali</h1>
        </div>

        <div id="evenimente" class="page">
          <h1>Evenimente</h1>
        </div>

        <div id="cazare" class="page">
          <h1>Cazare</h1>
        </div>

        <div id="transport" class="page">
          <h1>Transport</h1>
        </div>

        <div id="institutii" class="page">
          <h1>Institutii</h1>
        </div>

        <div id="magazine" class="page">
          <h1>Magazine</h1>
        </div>

      <div id="galerie" class="page1">
      <h1>Galerie</h1>
      <div class="slideshow-container" >

      <div class="mySlides fade" >
          <div class="numbertext">1 / 6</div>
            <img src="images/1.jpg" >
          <div class="text">Coseiu iarna</div>
        </div>
        <div class="mySlides fade" >
          <div class="numbertext">2 / 6</div>
          <img src="images/2.jpg"  >
          <div class="text">Coseiu iarna</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 6</div>
          <img src="images/3.jpg" >
          <div class="text">Coseiu iarna</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">4 / 6</div>
          <img src="images/4.jpg" >
          <div class="text">Coseiu iarna</div>
        </div>

          <div class="mySlides fade">
          <div class="numbertext">5 / 6</div>
          <img src="images/5.jpg" >
          <div class="text">Coseiu iarna</div>
        </div>
          
          <div class="mySlides fade">
          <div class="numbertext">6 / 6</div>
          <img src="images/6.jpg" >
          <div class="text">Coseiu toamna</div>
        </div>

        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>

        <!-- The dots/circles -->
        <div class="dots" style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        <span class="dot" onclick="currentSlide(4)"></span>
        <span class="dot" onclick="currentSlide(5)"></span>
        <span class="dot" onclick="currentSlide(6)"></span>
        </div>
      </div>
`;
}

function createDivIstorie() {
  return `
  <div class="istorieContent">
  <p>Coșeiu este o comună în județul Sălaj, Transilvania, România, formată din satele Archid, Chilioara și Coșeiu (reședința).</p>
  <p>Conform recensământului efectuat în 2021, populația comunei Coșeiu se ridică la 1.110 locuitori, în scădere față de recensământul anterior din 2011, când fuseseră înregistrați 1.198 de locuitori.</p>
  <p> Majoritatea locuitorilor sunt maghiari (50,63%), cu minorități de români (40,09%) și romi (4,59%), iar pentru 4,68% nu se cunoaște apartenența etnică.[3] Din punct de vedere confesional, cei mai mulți locuitori sunt ortodocși (36,31%), cu minorități de reformați (34,14%), baptiști (16,76%) și greco-catolici (5,5%), iar pentru 5,41% nu se cunoaște apartenența confesională.</p>
  </div>
  
  <div>
  <h3>Atracții turistice</h3>
      <ul class="istorie-menu-bar">
        <li><a href ="#" data-page ="istorie">Biserica reformată din Coșeiu</a></li>
        <li><a href ="#" data-page="producatori">Clopotnița bisericii din Coșeiu</a></li>
        <li><a href ="#" data-page="evenimente">Pădurea "Hegyes</a></li>
        <li><a href ="#" data-page="cazare">Pivnitele</a></li>
      </ul>
  </div>`;
}
function insertDivIstorie() {
  $("#istorie").innerHTML = createDivIstorie();
}

let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function initEvents() {
  const insertH1 = ($("body").innerHTML = createMainLayout());
  console.log(insertH1);
  insertDivIstorie();
  showSlides(slideIndex);

  document
    .querySelector(".header-top-menu-bar")
    .addEventListener("click", function (e) {
      var id = e.target.dataset.page;
      console.info("click on menu-bar", id);
      if (id) {
        showPage(id);
      }
    });
}

initEvents();
