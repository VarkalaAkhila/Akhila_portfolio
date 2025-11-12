// Smooth email compose
function sendEmail(e){
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:akhilav1263@gmail.com?subject=${subject}&body=${body}`;
  return false;
}

// WhatsApp quick ping
function sendWhatsApp(){
  const name = document.querySelector('#name')?.value.trim() || 'there';
  const text = encodeURIComponent(`Hi Akhila, I'm ${name}. I saw your portfolio and would like to connect.`);
  window.open(`https://wa.me/919573375429?text=${text}`, '_blank');
  return false;
}

// Optional: section reveal animations if ScrollReveal is loaded
if (window.ScrollReveal) {
  const sr = ScrollReveal({ distance: '40px', duration: 800, easing: 'ease-out', viewFactor: 0.15 });
  sr.reveal('.hero__left', { origin: 'left' });
  sr.reveal('.hero__right', { origin: 'right', delay: 120 });
  sr.reveal('.about__card', { origin: 'bottom', interval: 80 });
  sr.reveal('.skills__grid .skill', { origin: 'bottom', interval: 60 });
  sr.reveal('.projects__grid .project', { origin: 'bottom', interval: 80 });
  sr.reveal('.cert__grid .cert', { origin: 'bottom', interval: 80 });
}

