//Global const

const sections = document.querySelectorAll('section');


//indicating the active section as per the intersection
const Actvopt = {
    root: null,
    threshold: 0.5,
    rootMargin: "-120px"

};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {

        /* if funct. for adding active to the viewed section,
        
and remove it for other sections.*/

        // adding var indication the nav item will be highlighted
        ID = entry.target.id;
        const Navlink = document.querySelector(`[data-nav ='#${ID}']`);;

        console.log(entry.target);


        if (entry.isIntersecting) {
            // function if the section intersecting

            entry.target.classList.add('Viewed');
            //add Viewed class to the section intersected
        } else {

            // if not remove it
            entry.target.classList.remove('Viewed');
        }




    });

}, Actvopt);
//run observer for sections
sections.forEach(section => {
    observer.observe(section);

});

//Go smothly to the selected section from the Navbar or any link attached
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});