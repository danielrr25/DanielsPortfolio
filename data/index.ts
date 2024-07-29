import { link } from "fs";
import { FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTensorflow, SiOpencv, SiPuppeteer, SiStripe, SiFirebase } from 'react-icons/si';


export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end mt-[-10px] text-sm ",
      img: "/siemens.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 lg:row-span-3 md:col-span-2 md:row-span-3",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
      style: { gridRow: 'span 3 / auto' }, // Inline style for row span
    },
    {
      id: 3,
      title: "My tech stack",
      // description: "I constantly try to improve",
      className: "lg:col-span-2 lg:row-span-3 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 lg:row-span-3 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 lg:row-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "OCR Project - Turbine Components",
      des: "Advanced analytical identification of industrial turbine components with 99.5% accuracy.",
      img: "/OCR.png",
      // iconLists: ["/python.svg", "/tensorflow.svg", "/yolov8.png"],
      // iconLists: ['python', 'tensorflow', 'opencv'],
      link: "https://github.com/yourusername/ocr-project",
    },
    {
      id: 2,
      title: "Job Finder - Job Scraping and Application",
      des: "A job scraping and frontend application using Puppeteer for scraping job listings and React for the frontend.",
      img: "/job-finder.png",
      // iconLists: ["/react.svg", "/puppeteer.svg", "/nodejs.svg"],
      // iconLists: ['react', 'puppeteer', 'nodejs'],
      link: "https://github.com/yourusername/job-finder",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/imaginify.png",
      // iconLists: ["/react.svg", "/tensorflow.svg", "/stripe.svg"],
      // iconLists: ['react', 'tensorflow', 'stripe'],
      link: "https://github.com/yourusername/ai-image-saas",
    },
    {
      id: 4,
      title: "Event Management App",
      des: "Created an event management app with features for scheduling, notifications, and user management.",
      img: "/popout.png",
      // iconLists: ["/react.svg", "/firebase.svg", "/nodejs.svg"],
      // iconLists: ['react', 'firebase', 'nodejs'],
      link: "https://github.com/yourusername/event-management-app",
    },
  ];
  
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Daniel was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Daniel was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Daniel was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Daniel was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Daniel was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/danielrr25",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://twitter.com/danielrr25",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://linkedin.com/in/daniel-rodriguez-549255206",
    },
  ];