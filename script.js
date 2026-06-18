
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    const el=document.querySelector(id);
    if(el){e.preventDefault(); el.scrollIntoView({behavior:'smooth'});}
  });
});


/* === Banner Slider Update === */
(function(){
  const slides = document.querySelectorAll('.banner-slider .slide');
  const dots = document.querySelectorAll('.banner-slider .dot');
  if(!slides.length || !dots.length) return;
  let current = 0;
  function showSlide(index){
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }
  dots.forEach((dot, index)=>{
    dot.addEventListener('click', ()=>showSlide(index));
  });
  setInterval(()=>showSlide((current + 1) % slides.length), 4500);
})();


/* === Factory Hero Video Orientation Detector === */
(function() {
  const video = document.querySelector('.factory-hero video');
  const hero = document.querySelector('.factory-hero');
  if (!video || !hero) return;

  function applyOrientation() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    console.log(`Video dimensions: ${width}x${height}`);
    if (width > 0 && height > 0) {
      if (width < height) {
        hero.classList.add('video-vertical');
        hero.classList.remove('video-horizontal');
      } else {
        hero.classList.add('video-horizontal');
        hero.classList.remove('video-vertical');
      }
      
      // Start 3s fade-out timer for the text content
      const textContainer = hero.querySelector('div');
      if (textContainer) {
        setTimeout(() => {
          textContainer.classList.add('fade-out');
        }, 3000);
      }
    }
  }

  // Safety fallback: Ensure text fades out even if video fails to load metadata
  setTimeout(() => {
    const textContainer = hero.querySelector('div');
    if (textContainer && !textContainer.classList.contains('fade-out')) {
      textContainer.classList.add('fade-out');
    }
  }, 5000);

  video.addEventListener('loadedmetadata', applyOrientation);
  
  // Fallback in case metadata is already loaded
  if (video.readyState >= 1) {
    applyOrientation();
  }
})();

