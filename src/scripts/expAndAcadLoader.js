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