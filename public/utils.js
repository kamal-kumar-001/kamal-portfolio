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
        value: <a href={'mailto:kamal1019@iitg.ac.in'} target={"_blank"} rel="noopener noreferrer">kamal1019@iitg.ac.in</a>
        // value: 'kkhatiwal1@gmail.com'
    },
    {
        icon: <BsInstagram size={15} />,
        value: <a href={'https://instagram.com/kamal_khatiwal?igshid=YmMyMTA2M2Y='} target={"_blank"} rel="noopener noreferrer">@kamal_khatiwal</a>
    },

]

export const portfolioData = [
    {
        projectName: "AutoDM",
        img: "/images/autodm.svg",
        projectData: {
            title: "AutoDM",
            description: "A Meta-compliant direct messaging and comment automation platform built for creators, social commerce brands, and agencies.",
            images: [
                "/images/autodm.svg"
            ],
            keyFeatures: ["Comment to DM automation", "Story reply triggers", "Welcome DM automation", "Follow-check gate verify"],
            technologies: ["Next.js 14", "NestJS 10", "PostgreSQL", "Redis", "BullMQ", "Tailwind CSS", "Prisma ORM"],
            details: "AutoDM is a Meta-compliant Instagram Direct Message and Comment automation system. It operates as a monorepo containing a Next.js web application and a NestJS API server. The platform converts comments, story replies, and messages into automated lead funnels while validating follower states via Meta Graph API.",
            role: "Full Stack Developer",
            challenges: "Designing a robust follower verification check (Follow Gate) that prompts non-followers with a Meta Quick Reply button before resource delivery while staying within Meta's rate limits and OAuth scope bounds.",
            link: "https://www.dmpilot.org/",
            repository: "Private repository"
        }
    },
    {
        projectName: "Placement Pilot",
        img: "/images/placement_pilot.svg",
        projectData: {
            title: "Placement Pilot",
            description: "An AI career preparation platform that helps candidates pass technical screening rounds via resume auditing, mock interviews, and vocab coaching.",
            images: [
                "/images/placement_pilot.svg"
            ],
            keyFeatures: ["Google XYZ resume checker", "Local Cosine Similarity parser", "Adaptive Mock Interviews", "Browser-native audio coach"],
            technologies: ["Next.js 16", "React 19", "MongoDB", "Mongoose", "Tailwind CSS v4", "Google Gemini API", "Web Speech API"],
            details: "Placement Pilot is a modular monolith optimizing technical prep. It includes resume evaluation utilizing Google XYZ formula, matching score calculation via local TF-IDF vectorizers, and custom AI interview mock rooms. It operates efficiently on low-memory servers by offloading tasks to local ML semantics and cache stores.",
            role: "Full Stack Developer",
            challenges: "Optimizing AI API costs and server memory by building custom client-side semantic caches and TF-IDF engines in JS, avoiding expensive third-party vector databases or heavy local python models.",
            link: "https://placementcopilot.vercel.app/",
            repository: "Private repository"
        }
    },
    {
        projectName: "Funzuki",
        img: "/images/funzuki.svg",
        projectData: {
            title: "Funzuki",
            description: "A playful, modern children's toy store rental and subscription platform featuring child profile personalization.",
            images: [
                "/images/funzuki.svg"
            ],
            keyFeatures: ["Child personalization options", "Dynamic catalog page", "MongoDB query engine", "Flexible subscription tiers"],
            technologies: ["Next.js 16", "React 19", "MongoDB", "Tailwind CSS v4", "Framer Motion", "Cloudinary", "Zustand"],
            details: "Funzuki is a full-featured online toy store that operates a subscription model. Parents can rent branded toys and personalize orders (+100 rupee add-on) for their children. It integrates custom Mongo schemas, interactive product feeds, dynamic wishlists, and billing control systems.",
            role: "Full Stack Developer",
            challenges: "Managing state synchronizations between the React 19 client and backend schemas to support personalized attributes (childName, isPersonalized) seamlessly through checkout and dashboard components.",
            link: "https://funzuki.vercel.app/",
            repository: "Private repository"
        }
    },
    {
        projectName: "TRJ",
        img: "/images/trj.svg",
        projectData: {
            title: "Toy Rent Junction",
            description: "A public-facing web platform for renting branded toys, brain games, books, and event/party equipment.",
            images: [
                "/images/trj.svg"
            ],
            keyFeatures: ["Interactive booking scheduler", "Dynamic category mapping", "Age group filter options", "Responsive mobile layouts"],
            technologies: ["Next.js 15", "React 19", "Tailwind CSS v3", "Zustand", "React Query"],
            details: "TRJ provides a catalog interface pulling live service datasets from Toy Rent Junction API. It allows users to filter by age range, explore services like toy library memberships or event renting, and browse books and brain games.",
            role: "Full Stack Developer",
            challenges: "Mapping and normalizing complex legacy API response structures to render nested lists cleanly in Next.js without performance hits.",
            link: "https://trj-umber.vercel.app/",
            repository: "Private repository"
        }
    },
    {
        projectName: "Insta Follower Analyzer",
        img: "/images/follower_analyzer.svg",
        projectData: {
            title: "Insta Follower Analyzer",
            description: "A privacy-first, client-side web application analyzing Instagram follower ZIP data in-browser.",
            images: [
                "/images/follower_analyzer.svg"
            ],
            keyFeatures: ["100% Client-side JSZip parse", "Donut chart breakdowns", "Anonymous telemetry logs", "Confetti canvas rewards"],
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS v4", "JSZip", "Framer Motion", "MongoDB"],
            details: "Insta Follower Analyzer lists follow statuses (fans, unfollowers, mutuals) completely locally inside browser RAM to protect privacy. It generates telemetry to MongoDB for anonymous usage metrics while keeping user data secure.",
            role: "Creator & Developer",
            challenges: "Handling large ZIP extractions and parsing huge lists of follow JSONs efficiently in the browser without locking the main thread or causing browser memory crashes.",
            link: "https://followeranalyzer.vercel.app/",
            repository: "https://github.com/kamal-kumar-001/relationship-analyzer"
        }
    },
    {
        projectName: "UPSC MENTOR",
        img: "/images/upsc_mentor.svg",
        projectData: {
            title: "UPSC MENTOR",
            description: "A comprehensive preparation platform providing test series, mentorship, and learning resources to UPSC civil services aspirants.",
            images: [
                "/images/upsc_mentor.svg"
            ],
            keyFeatures: ["Interactive test series", "Mentorship matching", "Live learning hub", "Adaptive study planners"],
            technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
            details: "UPSC MENTOR is tailored for students preparing for the civil services examination in India. It includes study progress monitors, question evaluation pipelines, and booking portals for mentor support.",
            role: "Full Stack Developer",
            challenges: "Building real-time test evaluation grids and managing concurrent exam session states across MongoDB and React.",
            link: "https://upscmentor.vercel.app/",
            repository: "Private repository"
        }
    },
    {
        projectName: "UPSCprep",
        img: "/images/upscprep.png",
        projectData: {
            title: "UPSCprep",
            description: "A comprehensive preparation platform providing study materials, tests, and mentorship for civil services examination candidates.",
            images: [
                "/images/upscprep.png"
            ],
            keyFeatures: ["Exam test series", "Study syllabus maps", "Mentorship support", "Progress tracker dashboard"],
            technologies: ["Ghost.org", "Node.js", "Express", "MySQL"],
            details: "UPSCprep is an educational web application designed for civil service exam aspirants. It features online mock exams, structured study guides, planning templates, and direct booking slots to get support from mentors.",
            role: "Frontend Developer",
            challenges: "Building complex question rendering grids with math support and sync-saving student test answers dynamically without input lag.",
            link: "https://www.upscprep.com/",
            repository: "Private repository"
        }
    },
    {
        projectName: "Chanchal Veer Foundation",
        img: "/images/chanchal.png",
        projectData: {
            title: "Chanchal Veer Foundation",
            description: "A community platform and donor website built for a non-profit foundation to manage social initiatives and receipt generation.",
            images: [
                "/images/chanchal.png"
            ],
            keyFeatures: ["Tax receipt generator", "Admin portal controls", "Secure donor authentication", "Nodemailer integration"],
            technologies: ["NextJS", "TailwindCSS", "MongoDB", "Nodemailer"],
            details: "A comprehensive portal built for Chanchal Veer Foundation to showcase their initiatives, accept donations, automatically generate PDF tax receipts, and engage with volunteers.",
            role: "Full Stack Developer",
            challenges: "Implementing secure, automated PDF tax receipt generation and sending them via email triggers while ensuring transactional stability.",
            link: "https://chanchal-foundation.vercel.app/",
            repository: "Private repository"
        }
    },
    {
        projectName: "FilmJet",
        img: "/images/filmjet.png",
        projectData: {
            title: "FilmJet",
            description: "A movie database website designed to provide information about various films.",
            images: [
                "/images/filmjet.png"
            ],
            keyFeatures: ["Movie Database", "User Reviews", "Rating System"],
            technologies: ["NextJS", "MongoDB", "TailwindCSS"],
            details: "Designed to provide film enthusiasts with a comprehensive database to explore movies, write reviews, and rate films. Administrators can manage listings, cast profiles, and comments.",
            role: "Full Stack Developer",
            challenges: "Implementing fast search indexes in MongoDB and handling large volumes of dynamic movie data without query latency.",
            link: "https://flimjet.vercel.app/",
            repository: "https://github.com/kamal-kumar-001/flimjet"
        }
    },
    {
        projectName: "Quiz App",
        img: "/images/quiz.png",
        projectData: {
            title: "Quiz App",
            description: "An interactive examination and quiz taking web console with time restrictions and admin assessment boards.",
            images: [
                "/images/quiz.png"
            ],
            keyFeatures: ["Dynamic quiz generation", "Real-time timer controls", "Administrative stats board", "Nodemailer notifications"],
            technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            details: "Quiz App lets instructors build, host, and grade quizzes while students take assessments in a secure, timed browser window with immediate feedback dashboards.",
            role: "Full Stack Developer",
            challenges: "Syncing exam clock timers with server states to prevent cheating or submission overrides during network dropouts.",
            link: "https://quizjolt.vercel.app/",
            repository: "https://github.com/kamal-kumar-001/quiz"
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
    {
        skillName: 'Data Structures',
        percentage: 85
    },
    {
        skillName: 'Algorithms',
        percentage: 85
    },
    {
        skillName: 'Next.js',
        percentage: 90
    },
    {
        skillName: 'ReactJS',
        percentage: 90
    },
    {
        skillName: 'React Native',
        percentage: 80
    },
    {
        skillName: 'Node.js',
        percentage: 85
    },
    {
        skillName: 'Express.js',
        percentage: 80
    },
    {
        skillName: 'MongoDB',
        percentage: 85
    },
    {
        skillName: 'Git & GitHub',
        percentage: 90
    },
    {
        skillName: 'Problem Solving',
        percentage: 90
    }
]

export const languageSkills = [
    {
        skillName: 'C',
        percentage: 90
    },
    {
        skillName: 'C++',
        percentage: 95
    },
    {
        skillName: 'JavaScript',
        percentage: 85
    },
    {
        skillName: 'Python',
        percentage: 80
    }
]
export const eduTimeline = [
    {
        timeline: '2025-Present',
        eduname: 'IIT Guwahati',
        edu: 'M.Tech CSE',
        class: "a"
    },
    {
        timeline: '2020-2024',
        eduname: 'NIT Kurukshetra',
        edu: 'B.Tech',
        class: ""
    },
    {
        timeline: '2019-2020',
        eduname: 'SKY LARK',
        edu: '12th CBSE',
        class: ""
    },
    {
        timeline: '2017-2018',
        eduname: 'TAGORE',
        edu: '10th HBSE',
        class: "c"
    }
]
export const workTimeline = [
    {
        timeline: 'Jan. 2023 - Jul. 2023',
        workname: 'Rework Education Technologies',
        work: 'Full Stack Web Developer Intern',
        class: "a"
    }
]
