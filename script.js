// Subtle reveal animation — intentionally lightweight.
const items = document.querySelectorAll('.project-card,.about-card,.stat,.tech-cloud,.contact-box');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
items.forEach((el)=>observer.observe(el));

// Contact dialog
const contactModal = document.getElementById('contactModal');
const openContact = document.getElementById('openContact');
const closeContact = document.getElementById('closeContact');

if (openContact && contactModal) {
  openContact.addEventListener('click', () => contactModal.showModal());
  closeContact.addEventListener('click', () => contactModal.close());
  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) contactModal.close();
  });
}
