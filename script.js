
// GALLERY MODAL CLICK FUNCTIONALITY


var img1 = document.getElementById("gallery-pic1");
var img2 = document.getElementById("gallery-pic2");
var img3 = document.getElementById("gallery-pic3");
var img4 = document.getElementById("gallery-pic4");
var img5 = document.getElementById("gallery-pic5");
var img6 = document.getElementById("gallery-pic6");
var img7 = document.getElementById("gallery-pic7");
var img8 = document.getElementById("gallery-pic8");

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img7.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img8.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

modal.onclick = function() {
    modal.style.display = "none";
  }

// STICKY HEADER 

var waypoint = new Waypoint({
    element: document.getElementById('testimonial'),
    handler: function(direction) {
        if (direction == 'down') {
            document.getElementById('nav').classList.remove('main-nav')
            document.getElementById('nav').classList.add('sticky-nav')
        } else {
            document.getElementById('nav').classList.remove('sticky-nav')
            document.getElementById('nav').classList.add('main-nav')
        }
    },
    offset: '90%'
  })


  // CONTACT FORM

  var contactSelect = document.getElementById("reasons")
  contactSelect.onchange = function(event) {
    if (event.target.value == 'other') {
      document.getElementById('text-area-label').classList.remove('hidden')
      document.getElementById('text-area').classList.remove('hidden')
    } else {
      document.getElementById('text-area-label').classList.add('hidden')
      document.getElementById('text-area').classList.add('hidden')
    }
  }