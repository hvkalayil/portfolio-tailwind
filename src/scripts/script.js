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
    const joiningDate = new Date('10/07/2021');
    const today = new Date()
    let months = (today.getFullYear() - joiningDate.getFullYear()) * 12
    months -= joiningDate.getMonth()
    months += today.getMonth()

    let expText = `${months} months`
    if (months > 11) {
        let years = Math.floor(months / 12)

        months = months - (years * 12)
        months = Math.floor((months * 100) / 120)

        expText = `${years}.${months} years`
    }

    document.getElementById('exp').innerHTML = 'Experience: ' + expText
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

function showGif(obj) {
    obj.src = obj.src.replace('png', 'gif')
}

function hideGif(obj) {
    obj.src = obj.src.replace('gif', 'png')
}