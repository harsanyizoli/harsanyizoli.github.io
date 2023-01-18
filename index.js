const input1 = document.getElementById("input1");
input1.addEventListener("keyup", calculatePrice);

const input2 = document.getElementById("input2");
input2.addEventListener("keyup", calculatePrice);

const total = document.getElementById("total");

function calculatePrice(e) {
    total.innerHTML = input1.value * 3000 + input2.value * 2000;
}
calculatePrice();

function scroll_top() {
    window.scrollTo(0, 0);
}

function scroll_to(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}

window.addEventListener("scroll", e => {
    const el = document.getElementsByClassName('scrollspy');
    let smallest = [];
    for (let i = 0; i < el.length; i++) {
        //console.log(el[i]);\
        const ely = el[i].getBoundingClientRect();
        const pos = Math.abs(Math.abs(ely.top - 300));
        smallest.push(pos);
    }

    const ind = smallest.indexOf(Math.min(...smallest));
    
    let lis = document.getElementsByClassName('hovereffect');
    for (let j = 0; j < lis.length; j++) {
        if (j == ind) {
            if (!lis[j].classList.contains('navactive')) {
                lis[j].classList.add('navactive');
            }
        } else {
            lis[j].classList.remove('navactive');

        }
    }
});

const down_chevron = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`;

const up_chevron = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>`;

document.getElementById("togglemoreimages").addEventListener('click', e => {
    const moreimages = document.getElementById('moreimages');
    if (moreimages.classList.contains("noshow")){
        moreimages.classList.remove("noshow");
        document.getElementById("togglemoreimages").innerHTML = up_chevron;
    } else {
        moreimages.classList.add("noshow");
        document.getElementById("togglemoreimages").innerHTML = down_chevron;
        document.getElementById("references").scrollIntoView({behavior: "auto", block: "center", inline: "center"});
    }
});

const modal = new bootstrap.Modal('#imagemodal', {
    keyboard: false
})

const imgs = document.getElementsByClassName("refimgs");
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', e => {
        modal.show();
    })
}

const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('nav-coll');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
navLinks.forEach((l) => {
    l.addEventListener('click', () => { 
        if(window.innerWidth > 996) return;
        bsCollapse.toggle() 
    })
})