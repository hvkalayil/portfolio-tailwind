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

const experience = [
    {
        id: 'TCS1',
        first: 'Tata Consultancy Services(TCS)',
        second: 'Developer',
        third: '<time datetime="2021-10-07">October 7th, 2021</time> - Present',
        body:`
        <h6 class="font-bold"> Mylan Data Management (<time datetime="2021-11-12">November, 2021</time> - Present) </h6>
        <div class="pl-2 pt-2">
            <ul class="detailPaneUl">
                <li> Technology Stack - <strong>Angular</strong>, <strong>Python</strong>, <strong>SQL Server</strong> and <strong>Azure Services.</strong> </li>
                <li> Used <strong>Reactive Forms</strong> approach to build UI in Angular. </li>
                <li> Implemented <strong>SSO login</strong> using Azure Managed Identity. </li>
                <li> Implemented File Upload to <strong>Azure Blob Storage</strong> using <strong>Azure Functions.</strong> </li>
                <li> Contributed to python code and logic in the backend. </li>
            </ul>
        </div>
        `
    },
    {
        id: 'Applore2',
        first: 'Applore Technologies',
        second: 'Flutter Developer Intern',
        third: '<time datetime="2021-03-30">March, 2021</time> - <time datetime="2021-04-30">April,2021</time>',
        link:'applore',
        body:`
        <div class="pl-2 pt-2">
            <ul class="detailPaneUl">
                <li> Technology Stack - <strong>Flutter</strong>, <strong>Stripe</strong> and <strong>Agora SDK.</strong></li>
                <li> Developed layouts for multiple mobile applications. </li>
                <li> Implemented <strong>Web RTC</strong> to create an online chat room feature in a mobile application. </li>
                <li> Implemented <strong>Stripe</strong> payment gateway feature in a mobile application. </li>
            </ul>
        </div>
        `
    },
    {
        id: 'Saudha3',
        first: 'Saudha Technologies',
        second: 'Flutter Developer Intern',
        third: '<time datetime="2020-08-18">August, 2020</time> - <time datetime="2020-10-31">October,2020</time>',
        link:'saudha',
        body:`
        <div class="pl-2 pt-2">
            <ul class="detailPaneUl">
                <li> Technology Stack - <strong>Flutter</strong>, <strong>PHP</strong> and <strong>MySQL.</strong></li>
                <li> Developed a medical file sharing application <strong> Full - Stack. </strong> </li>
                <li> Developed and designed <strong>UI elements</strong> for the application </li>
                <li> Developed API to <strong>save user data and files</strong> using PHP </li>
            </ul>
        </div>
        `
    }
];

const academics = [
    {
        id: 'Rajiv1',
        first: 'Rajiv Gandhi Institute Of Technology',
        second: 'Master of Computer Applications (2021)',
        third: '8.3 CGPA'
    },
    {
        id: 'GIAL2',
        first: 'Girideepam Institute Of Advanced Learning',
        second: 'Bachelor of Computer Applications (2019)',
        third: '7.69 CGPA'
    },
    {
        id: 'DB3',
        first: 'Don Bosco HSS',
        second: 'State Board (Kerala)',
        third: '83%'
    },
    {
        id: 'Chavara4',
        first: 'Chavara International High School',
        second: 'ICSE',
        third: '79%',
    },
];

function loadExpAndAcad(){
    loadData('EXP');
    loadData('ACAD');
}

function loadData(type) {
    const data = type == 'EXP' ? experience : academics
    const entity = type == 'EXP' ? 'workExperience' : 'academicQualifications'
    let html = '';
    for (const item of data) {
        let linkHead = '';
        if(item?.link ?? true != true){                
            linkHead = `
            <span class="transition-transform transit duration-500 mt-4">
                <a href="assets/cert/${item.link}.pdf" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                </a>
            </span>`
        }

        let iconHtml = ''
        let clickable = ''
        if(item?.body){
            iconHtml = `
            <span id="${item.id} down" class="transition-transform transit duration-500 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            `
            clickable = `onclick="openDetail(${item.id})"`
        }
        
        html += `
        <div ${clickable} class="flex flex-row border-l-4 border-accent-100 border-dotted p-2 pl-4 m-1 transition-colors bg-sidebar dark:bg-sidebar-dark hover:bg-primary-100 hover:dark:bg-primary-dark-100 hover:shadow-sm hover:shadow-accent-100 hover:bg-gradient-to-l hover:from-accent-0">
            <div class="flex-col w-11/12">
                <div class="exp-ball hover:scale-105 transition"> </div>
                <h3 class="text-md md:text-lg font-extrabold"> ${item.first} </h3>
                <h4 class="font-bold"> ${item.second} </h4>
                <h5> ${item.third} </h5>

                <div id="${item.id}" class="flex flex-col w-full pl-4 py-4" style="display:none">
                    ${item.body}
                </div>
            </div>
            <div class="flex flex-col justify-start">
                ${iconHtml}
                ${linkHead}
            </div>
        </div>
        `
    }
    document.getElementById(entity).innerHTML = html;
}

function openDetail(element) {
    console.log(element);
    const iconUp = document.getElementById(`${element.id} up`)
    const iconDown = document.getElementById(`${element.id} down`)

    let style = element.style.display
    style = style == '' ? 'none' : style

    let iconType = ''
    if (style == 'none'){
        element.style.display = 'flex'
        iconDown.style.transform = 'rotate(180deg)'
    } else {
        element.style.display = 'none'
        iconDown.style.transform = 'rotate(0deg)'
    }

    

}

const first = {
    name: 'First Lockdown',
    link: 'https://en.wikipedia.org/wiki/COVID-19_lockdown_in_India#Lockdown_in_2020'
}
const flutter = {
    name: 'Flutter',
    link: 'https://flutter.dev/'
}
const php = {
    name: 'PHP',
    link: 'https://www.php.net/'
}
const python = {
    name: 'Python',
    link: 'https://www.python.org/'
}
const flask = {
    name: ' Flask',
    link: 'https://flask.palletsprojects.com/en/2.0.x/'
}
const bootstrap = {
    name: 'Bootstrap',
    link: 'https://getbootstrap.com/'
}
const firebase = {
    name: 'Firebase',
    link: 'https://firebase.google.com/'
}
const fullstack = {
    name: 'Full Stack',
    link: ''
}
const djangoREST = {
    name: 'Django REST',
    link: 'https://www.django-rest-framework.org/'
}
const worksPage = [
    // CR Lab
    {
        link: 'http://crlab.herokuapp.com/',
        name: 'CR Lab',
        imgPath: 'crlab',
        description: `
        <p>
            A website for Combustion Research Lab of IIT Bombay. Its a website
            for the staff to
            <strong class="text-hover">view and share the publications</strong> and also as a
            website for the lab.
          </p>

          <p>
            This is a simple <strong class="text-hover">content management system with admin</strong> sign in.
            It also <strong class="text-hover">crawls the Google Scholar search results</strong> and adds publications
            of the team automatically.
          </p>

          <p>
            This was my first time experimenting with python frameworks.
            <a class="text-hover" href="assets/cert/python.pdf" target="_blank">These courses</a> inspired me to
            crawl google scholar since I could not find any API for it and
            <a class="text-hover" href="https://www.youtube.com/watch?v=Z1RJmh_OqeA" target="_blank">this video</a>
            from freecodecamp helped me to kick start the project.
            I was intrigued to start a project and thats when
            <a target="_blank" class="links" href="https://scholar.google.co.in/citations?user=1PlWbsIAAAAJ&hl=en">my
              eldest brother</a>
            asked me to create this website
          </p>`,
        icons: [first, python, flask, bootstrap]
    },

    // Waverix
    {
        link: 'https://play.google.com/store/apps/details?id=com.hoseakalayil.musicplayer',
        name: 'Waverix',
        imgPath: 'waverix',
        description: `
        <p>
            A android application that you can use to listen to your favourite
            songs <strong class="text-hover">both online and offline.</strong>
            <strong class="text-hover">Edit</strong> thumbnail and other details of your local
            songs, <strong class="text-hover">create</strong> and <strong class="text-hover">search</strong>
            through
            your <strong class="text-hover">playlists.</strong>
        </p>
        <p>
            This was a <strong class="text-hover">fun</strong> project that I worked on during the lockdown time. Skaria Andrews
            showed me a design pattern (
                <a class="text-hover" 
                href="https://in.pinterest.com/search/pins/?q=neumorphism&rs=typed&term_meta[]=neumorphism">
                neumprphism</a>)
            which ultimately made me start this project.
        </p>
        <p>
            Designed by <a class="text-hover" href="https://www.behance.net/skariaandrews">Skaria Andrews</a>
        </p>`,
        icons: [first, flutter]
    },

    // Who Am I
    {
        link: 'https://play.google.com/store/apps/details?id=com.hoseakalayil.whoami',
        name: 'Who Am I',
        imgPath: 'whoami',
        description: `
            <p>
                A android application that can store your personal data
                <strong class="text-hover">like a business card.</strong> You can add
                <strong class="text-hover">social media</strong> links and personal
                <strong class="text-hover">files</strong>. You can choose to upload it in the cloud.
                Security of files are ensured with
                <strong class="text-hover">AES encryption.</strong>
              </p>
              <p>
                This was my first project that I worked on in flutter.
                I was reluctant to publish it even after completing it.
                But I got to it after publishing waverix
              </p>`,
        icons: [first, flutter, firebase]
    },

    // Therapeye
    {
        link: 'https://play.google.com/store/apps/details?id=info.myhealthcard.therapeye',
        name: 'Therapeye',
        imgPath: 'therapeye',
        description: `
        <p>
        A mobile application that helps to
        <strong class="text-hover">save and share medical records</strong> among patients and
        doctors. User can opt to keep records <strong class="text-hover">locally</strong>
        or <strong class="text-hover">in the server.</strong>
        </p>

        <p>
        I worked on this project during my internship at
        <a class="links" href="https://sauda.co/">Saudha Technologies.</a>
        This was my first time building <strong class="text-hover">both front end and back end</strong> of a system.

        <p>
        Thanks to my mentor
        <a class="links" href="https://www.linkedin.com/in/vaibhav-bahadur-80b93472/">
            Vaibhav Bahadhur</a> I was able to learn a lot and successfully deliver system as per client requirements
        </p>`,
        icons: [first, flutter, php, fullstack]
    },

    // Aqua ly
    {
        link: 'https://github.com/hvkalayil/aqualy_mob',
        name: 'Aqua.ly',
        imgPath: 'aqualy',
        description: `
        <p>
            A mobile <strong class="text-hover">e-commerce</strong> application for pet fish
            market. <strong class="text-hover">Buy or sell</strong> pet fishes online. Simple and
            intuitive UI.
          </p>

          <p>
            The project was undertaken as an
            <strong class="text-hover">academic project.</strong> I worked alongside
            <a href="https://www.linkedin.com/in/jithin-joy-395125154/" target="_blank" rel="noopener noreferrer"
              class="links">
              Jithin Joy
            </a>
            and
            <a class="links" href="https://www.linkedin.com/in/kiranraj3132/" target="_blank" rel="noopener noreferrer">
              Kiran Raj
            </a>
            taking care of the backend. Mentoring and overlooking the development
            process in the front end as well.
          </p>`,
        icons: [first, python, djangoREST, flutter, fullstack]
    },

    // Auto Gallery
    {
        link: 'https://play.google.com/store/apps/details?id=com.hoseavarghese.auto_gallery',
        name: 'Auto Gallery',
        imgPath: 'autoGallery',
        description: `
        <p>
            A mobile application to <strong class="text-hover">auto delete</strong> images.You
            can <strong class="text-hover">take images</strong> from any camera app and
            <strong class="text-hover">save them</strong> within the app. You can also specify a
            <strong class="text-hover">duration limit</strong> for expiry. When this expiry time
            is reached, corresponding images will be
            <strong class="text-hover">deleted automatically.</strong>
        </p>

        <p>
            I developed this application to play with 
            <a href="https://docs.hivedb.dev/#/" class="text-hover">Hive DB</a>
            which is similar to a Mongo DB system for local persistant storage in flutter
        <p>
            This project was developed on request of my friend who runs a Vehicle Emission Checking
            agency. He takes images quite frequently for vehicle check. This project had the shortest
            development time among all my projects. This took me just a few days to develop and release
            in the playstore
        </p>`,
        icons: [flutter, { name: 'Hive', link: 'https://docs.hivedb.dev/#/' }]
    },

    // Rit Website
    {
        link: 'http://rit.ac.in/ritsoft/ritwebsite/index.php?lang=_en',
        name: ' RIT Website',
        imgPath: 'ritwebsite',
        description: `
        <p>
            A website developed for my college. This was done as part of my
            academic project. The website was build to showcase courses in the college
            and achievements. The system supports multi-user login, localization
            and follows a resposnive design
        </p>
        <p>
            I worked alongside 
            <a href="https://www.linkedin.com/in/shiby-thomas-7a623b1b5/" class="text-hover" target="_blank">Shiby Thomas</a> 
            and <a href="https://www.linkedin.com/in/ashly-mohan-5b3379134/" class="text-hover" target="_blank">Ashly Mohan</a>
            as a group and delivered system to our keen eyed professors 
            <a href="https://www.linkedin.com/in/tomsy-paul-86a8a87/" target="_blank" class="text-hover">Tomsy Paul</a>,
            <a href="#" class="text-hover">Sonu Priya</a>,
            <a href="#" class="text-hover">Jane</a> and
            <a href="#" class="text-hover">Shalu</a>
            . The professors mentored
            and helped us deliver the requirements.
        `,
        icons: [bootstrap, php, fullstack]
    }
]

function loadWorks() {
    let html = '';
    let iconsHtml = '';
    let openInNewTab = '';
    let index = 0;
    for (const item of worksPage.reverse()) {

        openInNewTab = setNewTabSvg(item.link)
        iconsHtml = setIcons(item.icons)

        html += `
        <div class="card-container">
            <div id="scrollable${index}" class="card" onmouseleave="triggerScrollReset('scrollable${index}')">
            <!-- Heading -->
            <div class="heading">
                <a class="mt-2" target="_blank"
                href="${item.link}">
                <h2
                    class="flex my-1 text-xl font-bold transition text-accent-900 hover:decoration-2 items-center">
                    ${item.name} &nbsp;
                    ${openInNewTab}
                </h2>
                </a>
                <img class="work-img w-full aspect-video" src="assets/projects/${item.imgPath}.png" alt="${item.name} Overview" onmouseover="showGif(this)"
                onmouseleave="hideGif(this)" />
            </div>

            <!-- Description -->
            <div class="details tracking-wide my-2 text-ellipsis">
                ${item.description}
            </div>

            <!-- Icons -->
            <div class="flex flex-row icons my-2 flex-wrap">
                ${iconsHtml}
            </div>

            </div>
        </div>`;
        index += 1;
    }
    document.getElementById('worksPage').innerHTML = html;
}

function setNewTabSvg(link) {
    return link == '' ? '' : `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
    stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>`
}

function setIcons(ico) {
    let icoHtml = '';
    for (const icoDet of ico) {
        icoHtml += `
        <a
        href="${icoDet.link}"
        target="_blank"
            class="flex flex-row rounded-xl p-1 m-1 bg-accent-0 border-2 border-accent-900 hover:shadow hover:shadow-accent-100 hover:bg-accent-100">
            ${icoDet.name}
        </a>`
    }
    return icoHtml
}

function triggerScrollReset(divCont) {
    document.getElementById(divCont).scrollTop = 0;
}


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