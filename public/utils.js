import { GrMail } from 'react-icons/gr'
import { FaCalendarAlt, FaUser } from 'react-icons/fa'

import { MdLocationOn } from 'react-icons/md'
import { BsTelephoneFill, BsInstagram } from 'react-icons/bs'
export const navMenus = [
    {
        label: "Home",
        to: '/'
    },
    {
        label: "Blog",
        to: '/blog'
    },
    // {
    //     label : "SKILLS",
    //     to : '/skills'
    // },
    {
        label: "Portfolio",
        to: '/portfolio'
    },
    // {
    //     label: "Resume",
    //     to: '/resume',
    // },
    {
        label: "About",
        to: '/about'
    },
    {
        label: "Contact",
        to: '/contact'
    }
]


export const personalDataContact = [
    {
        icon: <MdLocationOn size={15} />,
        value: 'Haryana, India'
    },
    {
        icon: <BsTelephoneFill size={15} />,
        value: <a href={'tel:+919254551582'} target={"_blank"} rel="noopener noreferrer">+919254551582</a>
        // value: '+919254551582'
    },
    {
        icon: <GrMail size={15} />,
        value: <a href={'mailto:kkhatiwal1@gmail.com'} target={"_blank"} rel="noopener noreferrer">kkhatiwal1@gmail.com</a>
        // value: 'kkhatiwal1@gmail.com'
    },
    {
        icon: <BsInstagram size={15} />,
        value: <a href={'https://instagram.com/kamal_khatiwal?igshid=YmMyMTA2M2Y='} target={"_blank"} rel="noopener noreferrer">@kamal_khatiwal</a>
    },

]

export const portfolioData = [
    {
        "projectName": "Chanchal Veer Foundation",
        "img": "/images/chanchal.png",
        "projectData": {
            "title": "Chanchal Veer Foundation",
            "description": "A comprehensive website built for the Chanchal Veer Foundation to highlight their mission and activities.",
            "images": [
                "/images/chanchal.png"
            ],
            "keyFeatures": ["Admin panel", 'Receipt Generator','User Authentication'],
            "technologies": ["NextJS", "TailwindCSS", "MongoDB", "Nodemailer"],
            "details": "This project was built to provide a platform for the Chanchal Veer Foundation to showcase their initiatives, manage their events, and engage with the community. It includes features like an admin panel for content management, user authentication, and a dynamic blog section.",
            "role": "Full Stack Developer",
            "challenges": "The main challenges faced were integrating the API, managing state with Redux, and optimizing performance.",
            "link": "https://chanchal-foundation.vercel.app/",
            "repository": "Private repository"
        }
    },
    {
        "projectName": "FilmJet",
        "img": "/images/filmjet.png",
        "projectData": {
            "title": "FilmJet",
            "description": "A movie database website designed to provide information about various films.",
            "images": [
                "/images/filmjet.png"
            ],
            "keyFeatures": ["Movie Database", "User Reviews", "Rating System"],
            "technologies": ["NextJS", "MongoDB", "TailwindCSS"],
            "details": "This project was built to provide a comprehensive movie database with features like user reviews and a rating system. It includes features like an admin panel for content management, a search functionality, and responsive design.",
            "role": "Full Stack Developer",
            "challenges": "The main challenges faced were integrating the API, managing state with Redux, and optimizing performance.",
            "link": "https://flimjet.vercel.app/",
            "repository": "https://github.com/kamal-kumar-001/flimjet"
        }
    }
    ,
    {
        projectName: 'UPSCprep',
        img: '/images/upscprep.png',
        projectData: {
            title: 'My UPSCprep Project',
            description: 'A brief description of my UPSCprep project.',
            images: [
                '/images/upscprep.png',
            ],
            keyFeatures: ['', '', ''],
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Sass'],
            details: 'This project was built to solve problem X. It includes features A, B, and C. The development process involved... (more details here).',
            role: 'Full Stack Developer',
            challenges: 'The main challenges faced were integrating the API, managing state with Redux, and optimizing performance.',
            link: 'https://www.upscprep.com/',
            repository: 'private repository'
        }
    },
    {
        projectName: 'Quiz App',
        img: '/images/quiz.png',
        projectData: {
            title: 'My Quiz App Project',
            description: 'A brief description of my Quiz App project.',
            images: [
                '/images/quiz.png',
            ],
            keyFeatures: ['Admin pannel', 'MongoDB', 'Nodemailer'],
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Sass'],
            details: 'This project was built to solve problem X. It includes features A, B, and C. The development process involved... (more details here).',
            role: 'Full Stack Developer',
            challenges: 'The main challenges faced were integrating the API, managing state with Redux, and optimizing performance.',
            link: 'https://quizjolt.vercel.app/',
            repository: 'https://github.com/kamal-kumar-001/quiz'
        }
    },
    {
        projectName: 'Blue Lemon',
        img: '/images/2.jpeg',
        projectData: {
            title: 'My Blue Lemon Project',
            description: 'A brief description of my awesome project.',
            images: [
                '/images/2.jpeg',
            ],
            keyFeatures: ['Admin pannel', 'MongoDB', 'Nodemailer'],
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Sass'],
            details: 'This project was built to solve problem X. It includes features A, B, and C. The development process involved... (more details here).',
            role: 'Full Stack Developer',
            challenges: 'The main challenges faced were integrating the API, managing state with Redux, and optimizing performance.',
            link: 'https://liveproject.com',
            repository: 'https://github.com/username/project-repo'
        }
    },
    {
        projectName: 'Sweet Cheery',
        img: '/images/2.jpeg',
        projectData: {
            title: 'My Sweet Cheery Project',
            description: 'A brief description of my awesome project.',
            images: [
                '/images/2.jpeg',
            ],
            keyFeatures: ['Admin pannel', 'MongoDB', 'Nodemailer'],
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Sass'],
            details: 'This project was built to solve problem X. It includes features A, B, and C. The development process involved... (more details here).',
            role: 'Full Stack Developer',
            challenges: 'The main challenges faced were integrating the API, managing state with Redux, and optimizing performance.',
            link: 'https://liveproject.com',
            repository: 'https://github.com/username/project-repo'
        }
    },
]

export const personalData = [

    {
        icon: <FaUser size={15} />,
        value: 'Kamal Kumar',
        class: 'a'
    },
    {
        icon: <FaCalendarAlt size={15} />,
        value: '01.09.2002',
        class: 'b'
    },
    {
        icon: <MdLocationOn size={15} />,
        value: 'Haryana, India',
        class: 'value'
    },
    {
        icon: <BsTelephoneFill size={15} />,
        // value: '+919254551582',
        value: <a href={'tel:+919254551582'} target={"_blank"} rel="noopener noreferrer">+919254551582</a>,
        class: 'value'
    },
    {
        icon: <GrMail size={15} />,
        value: <a href={'mailto:kkhatiwal1@gmail.com'} target={"_blank"} rel="noopener noreferrer">kkhatiwal1@gmail.com</a>,
        // value: 'kkhatiwal1@gmail.com',
        class: 'value'
    },
    // {
    //     icon: <BsInstagram size={15} />,
    //     value: '@_kamal__001_'
    // },

]

export const servicesData = [
    {
        services: "Website Development"
    },
    {
        services: "Website Design"
    },
    {
        services: "UI/UX"
    },
    {
        services: "Figma"
    },
]

export const programingSkills = [

    // {
    //     skillName: 'C/C++',
    //     percentage: '90'
    // },
    // {
    //     skillName: 'Python',
    //     percentage: '80'
    // },
    {
        skillName: 'Data Structure',
        percentage: '80'
    },
    {
        skillName: 'Algorithms',
        percentage: '80'
    },
    {
        skillName: 'Html',
        percentage: '90'
    },
    {
        skillName: 'Css',
        percentage: '90'
    },
    {
        skillName: 'Javascript',
        percentage: '80'
    },

    {
        skillName: 'Django',
        percentage: '80'
    },
    {
        skillName: 'Tailwindcss',
        percentage: '90'
    },
    {
        skillName: 'Node.Js',
        percentage: '70'
    },

]

export const languageSkills = [
    {
        skillName: 'C',
        percentage: '90'
    },
    {
        skillName: 'C++',
        percentage: '90'
    },
    {
        skillName: 'Python',
        percentage: '70'
    },

]
export const eduTimeline = [
    {
        timeline: '2020-2024',
        eduname: 'NIT KKR',
        edu: 'B.TECH',
        class: "a"
    },
    {
        timeline: '2019-2020',
        eduname: 'SKY LARK ',
        edu: '12th CBSE',
        class: "b"
    },
    {
        timeline: '2017-2018',
        eduname: 'TAGORE',
        edu: '10th HBSE',
        class: "c"
    },

]
export const workTimeline = [
    {
        timeline: '2020-Running',
        workname: 'Pilayer ',
        work: ' Pilayer',
        class: "a"
    },
    {
        timeline: '2019-2020',
        workname: 'Avo ',
        work: 'Manager',
        class: "b"
    },
    {
        timeline: '2017-2018',
        workname: 'FC ',
        work: 'Player',
        class: "c"
    },

]