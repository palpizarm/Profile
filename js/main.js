function sectionToShow(elemet)
{
    document.getElementsByClassName('section-active')[0].classList.remove('section-active')
    document.getElementsByClassName('active')[0].classList.remove('active')
    let section = document.getElementById(elemet).getAttribute('href').substring(1);
    document.getElementById('btn-'+section).classList.add('active');
    document.getElementById(section).classList.add('section-active');
}