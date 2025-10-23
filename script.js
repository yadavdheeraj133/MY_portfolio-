  gsap.from(".hero-text h1", { duration: 1, y: 80, opacity: 0, ease: "elastic.out(1, 0.5)" });
  gsap.from(".hero-text h2", { duration: 1, y: 100, opacity: 0, delay: 0.2, ease: "back.out(1.7)" });
  gsap.from(".hero-text p", { duration: 1, y: 80, opacity: 0, delay: 0.4 });
  gsap.from(".hero-img img", { duration: 1.5, scale: 0.7, opacity: 0, rotate: 10, delay: 0.5, ease: "elastic.out(1, 0.5)" });

    gsap.utils.toArray(".section-title").forEach(title => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 90%",
        },
        duration: 1,
        y: 60,
        opacity: 0
      });
    });

    gsap.utils.toArray(".service, .skill, .portfolio-item, .blog-card").forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        },
        duration: 1,
        y: 60,
        opacity: 0,
        scale: 0.9,
        ease: "elastic.out(1, 0.5)"
      });
    });

    // Contact Form send real message to emailjs
  (function() {
    emailjs.init("srBzwk9MVZLAhoRBQ");  
  })();

  function sendMail(event) {
    event.preventDefault();

    emailjs.sendForm('service_catclvd', 'template_qovgscf', '#contact-form')
      .then(function() {
        alert("✅ Message sent successfully!");
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert("❌ Failed to send message. Please try again.");
        console.log(error);
      });
  }


  const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});