const images = [
    {
        src: 'assets/technologies/html.png'
        , alt: 'HTML', title: 'HTML'
    }, {
        src: 'assets/technologies/css.png'
        , alt: 'CSS', title: 'CSS'
    }, {
        src: 'assets/technologies/sass.png'
        , alt: 'SASS', title: 'SASS'
    }, {

        src: 'assets/technologies/bootstrap.png', alt: 'Bootstrap', title: 'Bootstrap'
    }, {
        src: 'assets/technologies/tailwind.png'
        , alt: 'Tailwind', title: 'Tailwind'
    }, {
        src: 'assets/technologies/js.png'
        , alt: 'JS', title: 'Javascript'
    }, {
        src: 'assets/technologies/nodejs.png'
        , alt: 'Node JS', title: 'Node JS'
    }, {
        src: 'assets/technologies/angular.png'
        , alt: 'Angular', title: 'Angular'
    }, {
        src: 'assets/technologies/flutter.png'
        , alt: 'Flutter', title: 'Flutter'
    }, {
        src: 'assets/technologies/python.png'
        , alt: 'Python', title: 'Python'
    }, {
        src: 'assets/technologies/flask.png'
        , alt: 'Flask', title: 'Flask'
    }, {
        src: 'assets/technologies/django.png'
        , alt: 'Django', title: 'Django'
    }, {
        src: 'assets/technologies/firebase.png'
        , alt: 'Firebase', title: 'Firebase'
    }, {
        src: 'assets/technologies/git.png'
        , alt: 'Git', title: 'Git'
    }, {
        src: 'assets/technologies/php.png'
        , alt: 'Php', title: 'Php'
    }
]

function loadCompetencies() {
    let html = '';
    for (const item of images) {
        html += `
        <img class="flex-col w-10 h-auto m-1 md:w-14 hover:scale-110" 
        src="${item.src}"
        alt="${item.alt}" title="${item.title}">
        `
    }

    document.getElementById('competencyContainer').innerHTML = html;
}