const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions(){
//button click active class
for (var i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            var currentBtn = document.querySelector('.active-btn');
            if (currentBtn) {
                currentBtn.classList.remove("active-btn");
            }
            this.classList.add('active-btn');

            const id = this.dataset.id;
            if (id) {
                sections.forEach(section => {
                    section.classList.remove("active");
                });
                // Show section with the matching id
                const element = document.getElementById(id);
                element.classList.add("active");
            }
        });
    }
    
    //toggle theme
    
    
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
                              let element = document.body;
                              element.classList.toggle ('light-mode')
                              })
    
}

pageTransitions();