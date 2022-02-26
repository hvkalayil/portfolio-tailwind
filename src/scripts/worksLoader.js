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
