const experience = [
    {
        first: 'Tata Consultancy Services(TCS)',
        second: 'Developer',
        third: '<time datetime="2021-10-07">October 7th, 2021</time> - Present',
    },
    {
        first: 'Applore Technologies',
        second: 'Flutter Developer Intern',
        third: '<time datetime="2021-03-30">March, 2021</time> - <time datetime="2021-04-30">April,2021</time>',
        link:'applore'
    },
    {
        first: 'Saudha Technologies',
        second: 'Flutter Developer Intern',
        third: '<time datetime="2020-08-18">August, 2020</time> - <time datetime="2020-10-31">October,2020</time>',
        link:'saudha'
    },
    {
        first: 'FoodCubo',
        second: 'Graphic Designer Intern',
        third: '<time datetime="2018-05-01">May, 2018</time> - <time datetime="2018-06-01">June,20218</time>',
        link:'foodcubo'
    },
];

const academics = [
    {
        first: 'Rajiv Gandhi Institute Of Technology',
        second: 'Master of Computer Applications (2021)',
        third: '8.3 CGPA'
    },
    {
        first: 'Girideepam Institute Of Advanced Learning',
        second: 'Bachelor of Computer Applications (2019)',
        third: '7.69 CGPA'
    },
    {
        first: 'Don Bosco HSS',
        second: 'State Board(Kerala)',
        third: '83%'
    },
    {
        first: 'Chavara International High School',
        second: 'ICSE',
        third: '79%'
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
        let linkEnd = '';
        if(item?.link ?? true != true){
            linkHead = `<a href="assets/cert/${item.link}.pdf" target="_blank">`
            linkEnd = '</a>'
        }
        html += `
        ${linkHead}
            <div class="flex flex-row border-l-4 border-accent-100 border-dotted p-2 pl-4 m-1 transition-colors bg-sidebar dark:bg-sidebar-dark hover:bg-primary-100 hover:dark:bg-primary-dark-100 hover:shadow-sm hover:shadow-accent-100 hover:bg-gradient-to-l hover:from-accent-0">
                <div class="flex-col w-full">
                    <div class="exp-ball hover:scale-105 transition"> </div>
                    <h3 class="text-md md:text-lg font-extrabold"> ${item.first} </h3>
                    <h4 class="font-bold"> ${item.second} </h4>
                    <h5> ${item.third} </h5>
                </div>
            </div>
        ${linkEnd}
        `
    }
    document.getElementById(entity).innerHTML = html;
}