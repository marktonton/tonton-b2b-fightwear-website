
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


/* === Factory Photo Slider === */
(function(){
  const container = document.querySelector('.factory-slider');
  if(!container) return;
  
  const slides = container.querySelectorAll('.factory-slides img');
  const dots = container.querySelectorAll('.slider-dots .dot');
  const prevBtn = container.querySelector('.slider-prev');
  const nextBtn = container.querySelector('.slider-next');
  
  if(!slides.length) return;
  
  let current = 0;
  let timer = null;
  
  function showSlide(index) {
    slides[current].classList.remove('active');
    if(dots.length) dots[current].classList.remove('active');
    
    current = (index + slides.length) % slides.length;
    
    slides[current].classList.add('active');
    if(dots.length) dots[current].classList.add('active');
    
    resetTimer();
  }
  
  function nextSlide() {
    showSlide(current + 1);
  }
  
  function prevSlide() {
    showSlide(current - 1);
  }
  
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
  }
  
  if(nextBtn) nextBtn.addEventListener('click', nextSlide);
  if(prevBtn) prevBtn.addEventListener('click', prevSlide);
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });
  
  resetTimer();
})();

