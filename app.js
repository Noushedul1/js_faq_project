var faqs = document.querySelectorAll('.faq');
// console.log(faqs);
faqs.forEach(faq=>{
    faq.addEventListener('click',function(){
        faq.classList.toggle('active');
    });
});