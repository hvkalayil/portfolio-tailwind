function setTheme() {
    findExperience()
    const dIcon = document.querySelectorAll('#darkIcon');
    const lIcon = document.querySelectorAll('#lightIcon');
    dIcon.forEach(e => e.style.display = 'none')
    lIcon.forEach(e => e.style.display = 'none')
    if ((localStorage.theme === 'dark') || (!('theme' in localStorage) && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector(':root').style.setProperty('--hvk-scrollbar', '#222527')
        dIcon.forEach(e => e.style.display = 'block')
        document.documentElement.classList.add('dark')
    } else {
        document.querySelector(':root').style.setProperty('--hvk-scrollbar', '#f7fdff')
        lIcon.forEach(e => e.style.display = 'block')
        document.documentElement.classList.remove('dark')
    }

    setupActiveButton();
}

function findExperience() {
    const joiningDate = new Date(2021,10,07);
    const today = Date.now()
    const diff = Math.ceil(Math.abs(today - joiningDate) / (1000 * 60 * 60 * 24))
    let expText = diff + ' days'
    if(diff > 365){
        const years = Math.floor(diff / 365).toFixed(1);
        expText = years + 'Years'
    }else{
        if(diff > 30){
            const months = Math.floor(diff / 30)
            const ds = diff - (months * 30)
            const daysText = ds != 0 ? ds + ' days ' : ''
            expText = months + ' Months ' + daysText
        }
    }
    document.getElementById('exp').innerHTML = 'Experience: '+expText
}

function toggleTheme() {
    const currentTheme = localStorage.theme;
    localStorage.theme = currentTheme == 'dark' ? 'light' : 'dark';
    setTheme();
}

function setupActiveButton() {
    const btn = document.getElementById('firstBtn');
    btn.classList.add('bg-accent-100')
    btn.classList.add('border-accent-900')
}

let currentPage = 'worksPage';
function changePage(pageName) {
    const btn = document.getElementById('firstBtn');
    btn.classList.remove('bg-accent-100');
    btn.classList.remove('border-accent-900');

    // Transitioning
    const curr = document.getElementById(currentPage);
    const nxt = document.getElementById(pageName);

    curr.style.display = 'none';
    nxt.style.display = 'flex';

    nxt.classList.add('transit')
    setTimeout(() => {
        nxt.style.opacity = 1 
    }, 800);
    currentPage = pageName;
}

function showGif(obj){
    obj.src = obj.src.replace('png','gif')
}

function hideGif(obj){
    obj.src = obj.src.replace('gif','png')
}