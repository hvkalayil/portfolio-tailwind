const images=[{src:"assets/technologies/html.png",alt:"HTML",title:"HTML"},{src:"assets/technologies/css.png",alt:"CSS",title:"CSS"},{src:"assets/technologies/sass.png",alt:"SASS",title:"SASS"},{src:"assets/technologies/bootstrap.png",alt:"Bootstrap",title:"Bootstrap"},{src:"assets/technologies/tailwind.png",alt:"Tailwind",title:"Tailwind"},{src:"assets/technologies/js.png",alt:"JS",title:"Javascript"},{src:"assets/technologies/nodejs.png",alt:"Node JS",title:"Node JS"},{src:"assets/technologies/angular.png",alt:"Angular",title:"Angular"},{src:"assets/technologies/flutter.png",alt:"Flutter",title:"Flutter"},{src:"assets/technologies/python.png",alt:"Python",title:"Python"},{src:"assets/technologies/flask.png",alt:"Flask",title:"Flask"},{src:"assets/technologies/django.png",alt:"Django",title:"Django"},{src:"assets/technologies/firebase.png",alt:"Firebase",title:"Firebase"},{src:"assets/technologies/git.png",alt:"Git",title:"Git"},{src:"assets/technologies/php.png",alt:"Php",title:"Php"}];function loadCompetencies(){let e="";for(const t of images)e+=`\n        <img class="flex-col w-10 h-auto m-1 md:w-14 hover:scale-110" \n        src="${t.src}"\n        alt="${t.alt}" title="${t.title}">\n        `;document.getElementById("competencyContainer").innerHTML=e}const experience=[{first:"Tata Consultancy Services(TCS)",second:"Developer",third:'<time datetime="2021-10-07">October 7th, 2021</time> - Present'},{first:"Applore Technologies",second:"Flutter Developer Intern",third:'<time datetime="2021-03-30">March, 2021</time> - <time datetime="2021-04-30">April,2021</time>',link:"applore"},{first:"Saudha Technologies",second:"Flutter Developer Intern",third:'<time datetime="2020-08-18">August, 2020</time> - <time datetime="2020-10-31">October,2020</time>',link:"saudha"},{first:"FoodCubo",second:"Graphic Designer Intern",third:'<time datetime="2018-05-01">May, 2018</time> - <time datetime="2018-06-01">June,20218</time>',link:"foodcubo"}],academics=[{first:"Rajiv Gandhi Institute Of Technology",second:"Master of Computer Applications (2021)",third:"8.3 CGPA"},{first:"Girideepam Institute Of Advanced Learning",second:"Bachelor of Computer Applications (2019)",third:"7.69 CGPA"},{first:"Don Bosco HSS",second:"State Board(Kerala)",third:"83%"},{first:"Chavara International High School",second:"ICSE",third:"79%"}];function loadExpAndAcad(){loadData("EXP"),loadData("ACAD")}function loadData(e){const t="EXP"==e?experience:academics,n="EXP"==e?"workExperience":"academicQualifications";let s="";for(const e of t){let t="",n="";e?.link&&(t=`<a href="assets/cert/${e.link}.pdf" target="_blank">`,n="</a>"),s+=`\n        ${t}\n            <div class="flex flex-row border-l-4 border-accent-100 border-dotted p-2 pl-4 m-1 transition-colors bg-sidebar dark:bg-sidebar-dark hover:bg-primary-100 hover:dark:bg-primary-dark-100 hover:shadow-sm hover:shadow-accent-100 hover:bg-gradient-to-l hover:from-accent-0">\n                <div class="flex-col w-full">\n                    <div class="exp-ball hover:scale-105 transition"> </div>\n                    <h3 class="text-md md:text-lg font-extrabold"> ${e.first} </h3>\n                    <h4 class="font-bold"> ${e.second} </h4>\n                    <h5> ${e.third} </h5>\n                </div>\n            </div>\n        ${n}\n        `}document.getElementById(n).innerHTML=s}const first={name:"First Lockdown",link:"https://en.wikipedia.org/wiki/COVID-19_lockdown_in_India#Lockdown_in_2020"},flutter={name:"Flutter",link:"https://flutter.dev/"},php={name:"PHP",link:"https://www.php.net/"},python={name:"Python",link:"https://www.python.org/"},flask={name:" Flask",link:"https://flask.palletsprojects.com/en/2.0.x/"},bootstrap={name:"Bootstrap",link:"https://getbootstrap.com/"},firebase={name:"Firebase",link:"https://firebase.google.com/"},fullstack={name:"Full Stack",link:""},djangoREST={name:"Django REST",link:"https://www.django-rest-framework.org/"},worksPage=[{link:"http://crlab.herokuapp.com/",name:"CR Lab",imgPath:"crlab",description:'\n        <p>\n            A website for Combustion Research Lab of IIT Bombay. Its a website\n            for the staff to\n            <strong class="text-hover">view and share the publications</strong> and also as a\n            website for the lab.\n          </p>\n\n          <p>\n            This is a simple <strong class="text-hover">content management system with admin</strong> sign in.\n            It also <strong class="text-hover">crawls the Google Scholar search results</strong> and adds publications\n            of the team automatically.\n          </p>\n\n          <p>\n            This was my first time experimenting with python frameworks.\n            <a class="text-hover" href="assets/cert/python.pdf" target="_blank">These courses</a> inspired me to\n            crawl google scholar since I could not find any API for it and\n            <a class="text-hover" href="https://www.youtube.com/watch?v=Z1RJmh_OqeA" target="_blank">this video</a>\n            from freecodecamp helped me to kick start the project.\n            I was intrigued to start a project and thats when\n            <a target="_blank" class="links" href="https://scholar.google.co.in/citations?user=1PlWbsIAAAAJ&hl=en">my\n              eldest brother</a>\n            asked me to create this website\n          </p>',icons:[first,python,flask,bootstrap]},{link:"https://play.google.com/store/apps/details?id=com.hoseakalayil.musicplayer",name:"Waverix",imgPath:"waverix",description:'\n        <p>\n            A android application that you can use to listen to your favourite\n            songs <strong class="text-hover">both online and offline.</strong>\n            <strong class="text-hover">Edit</strong> thumbnail and other details of your local\n            songs, <strong class="text-hover">create</strong> and <strong class="text-hover">search</strong>\n            through\n            your <strong class="text-hover">playlists.</strong>\n        </p>\n        <p>\n            This was a <strong class="text-hover">fun</strong> project that I worked on during the lockdown time. Skaria Andrews\n            showed me a design pattern (\n                <a class="text-hover" \n                href="https://in.pinterest.com/search/pins/?q=neumorphism&rs=typed&term_meta[]=neumorphism">\n                neumprphism</a>)\n            which ultimately made me start this project.\n        </p>\n        <p>\n            Designed by <a class="text-hover" href="https://www.behance.net/skariaandrews">Skaria Andrews</a>\n        </p>',icons:[first,flutter]},{link:"https://play.google.com/store/apps/details?id=com.hoseakalayil.whoami",name:"Who Am I",imgPath:"whoami",description:'\n            <p>\n                A android application that can store your personal data\n                <strong class="text-hover">like a business card.</strong> You can add\n                <strong class="text-hover">social media</strong> links and personal\n                <strong class="text-hover">files</strong>. You can choose to upload it in the cloud.\n                Security of files are ensured with\n                <strong class="text-hover">AES encryption.</strong>\n              </p>\n              <p>\n                This was my first project that I worked on in flutter.\n                I was reluctant to publish it even after completing it.\n                But I got to it after publishing waverix\n              </p>',icons:[first,flutter,firebase]},{link:"https://play.google.com/store/apps/details?id=info.myhealthcard.therapeye",name:"Therapeye",imgPath:"therapeye",description:'\n        <p>\n        A mobile application that helps to\n        <strong class="text-hover">save and share medical records</strong> among patients and\n        doctors. User can opt to keep records <strong class="text-hover">locally</strong>\n        or <strong class="text-hover">in the server.</strong>\n        </p>\n\n        <p>\n        I worked on this project during my internship at\n        <a class="links" href="https://sauda.co/">Saudha Technologies.</a>\n        This was my first time building <strong class="text-hover">both front end and back end</strong> of a system.\n\n        <p>\n        Thanks to my mentor\n        <a class="links" href="https://www.linkedin.com/in/vaibhav-bahadur-80b93472/">\n            Vaibhav Bahadhur</a> I was able to learn a lot and successfully deliver system as per client requirements\n        </p>',icons:[first,flutter,php,fullstack]},{link:"https://github.com/hvkalayil/aqualy_mob",name:"Aqua.ly",imgPath:"aqualy",description:'\n        <p>\n            A mobile <strong class="text-hover">e-commerce</strong> application for pet fish\n            market. <strong class="text-hover">Buy or sell</strong> pet fishes online. Simple and\n            intuitive UI.\n          </p>\n\n          <p>\n            The project was undertaken as an\n            <strong class="text-hover">academic project.</strong> I worked alongside\n            <a href="https://www.linkedin.com/in/jithin-joy-395125154/" target="_blank" rel="noopener noreferrer"\n              class="links">\n              Jithin Joy\n            </a>\n            and\n            <a class="links" href="https://www.linkedin.com/in/kiranraj3132/" target="_blank" rel="noopener noreferrer">\n              Kiran Raj\n            </a>\n            taking care of the backend. Mentoring and overlooking the development\n            process in the front end as well.\n          </p>',icons:[first,python,djangoREST,flutter,fullstack]},{link:"https://play.google.com/store/apps/details?id=com.hoseavarghese.auto_gallery",name:"Auto Gallery",imgPath:"autoGallery",description:'\n        <p>\n            A mobile application to <strong class="text-hover">auto delete</strong> images.You\n            can <strong class="text-hover">take images</strong> from any camera app and\n            <strong class="text-hover">save them</strong> within the app. You can also specify a\n            <strong class="text-hover">duration limit</strong> for expiry. When this expiry time\n            is reached, corresponding images will be\n            <strong class="text-hover">deleted automatically.</strong>\n        </p>\n\n        <p>\n            I developed this application to play with \n            <a href="https://docs.hivedb.dev/#/" class="text-hover">Hive DB</a>\n            which is similar to a Mongo DB system for local persistant storage in flutter\n        <p>\n            This project was developed on request of my friend who runs a Vehicle Emission Checking\n            agency. He takes images quite frequently for vehicle check. This project had the shortest\n            development time among all my projects. This took me just a few days to develop and release\n            in the playstore\n        </p>',icons:[flutter,{name:"Hive",link:"https://docs.hivedb.dev/#/"}]},{link:"http://rit.ac.in/ritsoft/ritwebsite/index.php?lang=_en",name:" RIT Website",imgPath:"ritwebsite",description:'\n        <p>\n            A website developed for my college. This was done as part of my\n            academic project. The website was build to showcase courses in the college\n            and achievements. The system supports multi-user login, localization\n            and follows a resposnive design\n        </p>\n        <p>\n            I worked alongside \n            <a href="https://www.linkedin.com/in/shiby-thomas-7a623b1b5/" class="text-hover" target="_blank">Shiby Thomas</a> \n            and <a href="https://www.linkedin.com/in/ashly-mohan-5b3379134/" class="text-hover" target="_blank">Ashly Mohan</a>\n            as a group and delivered system to our keen eyed professors \n            <a href="https://www.linkedin.com/in/tomsy-paul-86a8a87/" target="_blank" class="text-hover">Tomsy Paul</a>,\n            <a href="#" class="text-hover">Sonu Priya</a>,\n            <a href="#" class="text-hover">Jane</a> and\n            <a href="#" class="text-hover">Shalu</a>\n            . The professors mentored\n            and helped us deliver the requirements.\n        ',icons:[bootstrap,php,fullstack]}];function loadWorks(){let e="",t="",n="",s=0;for(const a of worksPage.reverse())n=setNewTabSvg(a.link),t=setIcons(a.icons),e+=`\n        <div class="card-container">\n            <div id="scrollable${s}" class="card" onmouseleave="triggerScrollReset('scrollable${s}')">\n            \x3c!-- Heading --\x3e\n            <div class="heading">\n                <a class="mt-2" target="_blank"\n                href="${a.link}">\n                <h2\n                    class="flex my-1 text-xl font-bold transition text-accent-900 hover:decoration-2 items-center">\n                    ${a.name} &nbsp;\n                    ${n}\n                </h2>\n                </a>\n                <img class="work-img w-full aspect-video" src="assets/projects/${a.imgPath}.png" alt="${a.name} Overview" onmouseover="showGif(this)"\n                onmouseleave="hideGif(this)" />\n            </div>\n\n            \x3c!-- Description --\x3e\n            <div class="details tracking-wide my-2 text-ellipsis">\n                ${a.description}\n            </div>\n\n            \x3c!-- Icons --\x3e\n            <div class="flex flex-row icons my-2 flex-wrap">\n                ${t}\n            </div>\n\n            </div>\n        </div>`,s+=1;document.getElementById("worksPage").innerHTML=e}function setNewTabSvg(e){return""==e?"":'<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"\n    stroke="currentColor">\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\n        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />\n    </svg>'}function setIcons(e){let t="";for(const n of e)t+=`\n        <a\n        href="${n.link}"\n        target="_blank"\n            class="flex flex-row rounded-xl p-1 m-1 bg-accent-0 border-2 border-accent-900 hover:shadow hover:shadow-accent-100 hover:bg-accent-100">\n            ${n.name}\n        </a>`;return t}function triggerScrollReset(e){document.getElementById(e).scrollTop=0}function setTheme(){findExperience();const e=document.querySelectorAll("#darkIcon"),t=document.querySelectorAll("#lightIcon");e.forEach((e=>e.style.display="none")),t.forEach((e=>e.style.display="none")),"dark"===localStorage.theme||!("theme"in localStorage)&&!window.matchMedia("(prefers-color-scheme: dark)").matches?(document.querySelector(":root").style.setProperty("--hvk-scrollbar","#222527"),e.forEach((e=>e.style.display="block")),document.documentElement.classList.add("dark")):(document.querySelector(":root").style.setProperty("--hvk-scrollbar","#f7fdff"),t.forEach((e=>e.style.display="block")),document.documentElement.classList.remove("dark")),setupActiveButton()}function findExperience(){const e=new Date(2021,10,7),t=Date.now(),n=Math.ceil(Math.abs(t-e)/864e5);let s=n+" days";if(n>365){s=Math.floor(n/365).toFixed(1)+"Years"}else if(n>30){const e=Math.floor(n/30),t=n-30*e;s=e+" Months "+(0!=t?t+" days ":"")}document.getElementById("exp").innerHTML="Experience: "+s}function toggleTheme(){const e=localStorage.theme;localStorage.theme="dark"==e?"light":"dark",setTheme()}function setupActiveButton(){const e=document.getElementById("firstBtn");e.classList.add("bg-accent-100"),e.classList.add("border-accent-900")}let currentPage="worksPage";function changePage(e){const t=document.getElementById("firstBtn");t.classList.remove("bg-accent-100"),t.classList.remove("border-accent-900");const n=document.getElementById(currentPage),s=document.getElementById(e);n.style.display="none",s.style.display="flex",s.classList.add("transit"),setTimeout((()=>{s.style.opacity=1}),800),currentPage=e}function showGif(e){e.src=e.src.replace("png","gif")}function hideGif(e){e.src=e.src.replace("gif","png")}