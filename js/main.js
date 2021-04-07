function sectionToShow(elemet)
{
    document.getElementsByClassName('section-active')[0].classList.remove('section-active')
    document.getElementsByClassName('active')[0].classList.remove('active')
    let section = document.getElementById(elemet).getAttribute('href').substring(1);
    document.getElementById('btn-'+section).classList.add('active');
    document.getElementById(section).classList.add('section-active');
}


(() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const form = document.getElementById('send-message');
  
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        /*code for get message */
      }, false);
})();