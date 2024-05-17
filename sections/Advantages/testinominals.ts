import { TestinominalProp } from "./Testinominal"
export const content: TestinominalProp[] = [
    {
        videoProp: {
            imgSrc: "/images/feature-1.jpg",
            videoSrc: "",
            left: true
        },
        textProp: [{
            title: 'Save Time and Money',
            des: `Record Once, Interview 1000 Times`,
            word: 'Create a digital interview once and invite as many candidates as needed. Harness the power of asynchronous interviews to save countless hours.',
            user: {
                name: "María Martínez",
                avatar: "/images/customer-avatar-03.jpg",
                position: "Project Manager"
            }
        }]
    },
    {
        videoProp: {
            imgSrc: "/images/feature-2.avif",
            videoSrc: "",
            left: false
        },
        textProp: [{
            title: 'Automate Your Hiring Process',
            des: `AI-Driven Interview Questions`,
            word: 'No need for manual question creation. Our AI generates tailored questions based on your job description.',
            user: {
                name: "Patricia de Antolín",
                avatar: "/images/feature-3.jpg",
                position: "Talent Acquisition"
            }
        },
        {
            title: '',
            des: `Flexible Interview Scheduling`,
            word: 'Candidates can record their responses at a time that suits them best, eliminating the need for scheduling conflicts.',
            user: {
                name: "Patricia de Antolín",
                avatar: "/images/customer-avatar-01.jpg",
                position: "Talent Acquisition"
            }
        },]
    },
    {
        videoProp: {
            imgSrc: "/images/customers-03.jpg",
            videoSrc: "",
            left: true
        },
        textProp: [{
            title: 'Review and Share',
            des: `Detailed AI Evaluations`,
            word: 'Review candidate submissions with comprehensive AI-generated insights. Share video responses with your team for collaborative evaluation.',
            user: {
                name: "Fabiola Colotto",
                avatar: "/images/customer-avatar-02.jpg",
                position: "HR Senior Manager"
            }
        }]
    },
    {
        videoProp: {
            imgSrc: "/images/hero-image-01.jpg",
            videoSrc: "",
            left: false
        },
        textProp: [{
            title: 'Seamless Integrations',
            des: `Integrate HiringKit with Your ATS`,
            word: 'Effortlessly incorporate HiringKit into your existing hiring process without disrupting your workflow.',
            user: {
                name: "María Martínez",
                avatar: "/images/customer-avatar-03.jpg",
                position: "Project Manager"
            }
        }]
    },
]