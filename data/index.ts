export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  export const gridItems = [
    {
      id: 1,
      title: "Senior capstone sponsored by Siemens Energy",
      description: "",
      className: "md:col-span-6 lg:col-span-3 lg:row-span-6 md:min-h-[30rem] lg:min-h-[50vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end mt-[-10px] text-sm ",
      img: "/siemens.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: "What I build",
      description: "",
      className: "md:col-span-3 lg:col-span-2 lg:row-span-3",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      className: "md:col-span-3 lg:col-span-2 lg:row-span-3",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "",
      description: "Education",
      className: "md:col-span-3 lg:col-span-2 lg:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "",
    },
    {
      id: 5,
      title: "Currently building FiestaGo",
      description: "Right now",
      className: "md:col-span-3 lg:col-span-3 lg:row-span-3",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Want to talk fintech, trading systems, or ML?",
      description: "",
      className: "md:col-span-6 lg:col-span-2 lg:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  export const education = [
    {
      school: "Georgia Institute of Technology",
      degree: "M.S. Computer Science",
      dates: "Jan 2027 – 2029 (Expected)",
    },
    {
      school: "University of Central Florida",
      degree: "B.S. Computer Science · GPA 3.5",
      dates: "Aug 2021 – May 2024",
    },
  ];

  export const whatIBuild = [
    { name: "Backends", desc: "APIs, payments, and webhooks, like FiestaGo's Stripe Connect bookings." },
    { name: "Data systems", desc: "Oracle and PostgreSQL databases, and the tools that make them easy to use." },
    { name: "Creative frontends", desc: "Next.js and React apps that are fun to use." },
  ];

  export const techStack = [
    "Python", "TypeScript", "JavaScript", "Java", "SQL", "C/C++",
    "Next.js", "React", "Node.js", "Flask",
    "PostgreSQL", "Oracle", "MongoDB", "AWS", "Docker", "Git",
  ];

  export const projects = [
    {
      id: 1,
      title: "FiestaGo: Event Services Marketplace",
      des: "A marketplace for booking event vendors, with Stripe Connect payouts, webhook-driven bookings, refunds, and double-booking protection. My startup, built from scratch with Next.js, TypeScript, and PostgreSQL.",
      img: "/fiestago.png",
      link: "https://fiesta-go1-frontend.vercel.app",
      linkLabel: "Live Site",
    },
    {
      id: 2,
      title: "Inquietum: Algorithmic Trading System",
      des: "A modular Python trading system with separate strategy, risk, and exchange layers. It runs an SMA crossover strategy with position sizing and stop-losses, backtested on crypto data with vectorbt.",
      img: "/inquietum.png",
      link: "https://github.com/danielrr25/Inquietum",
      linkLabel: "GitHub",
    },
    {
      id: 3,
      title: "Turbine OCR: Computer Vision for Siemens Energy",
      des: "An iOS app that scans turbine serial numbers using a YOLOv8 model trained on a custom dataset, with 99.5% accuracy. Built as my senior capstone, sponsored by Siemens Energy.",
      img: "/OCR.png",
    },
    {
      id: 4,
      title: "Event Management App",
      des: "A social events app built with a team of 5, with a Flutter frontend, MERN backend, and JWT authentication.",
      img: "/popout.png",
      link: "https://github.com/danielrr25/event-management-app",
      linkLabel: "GitHub",
    },
  ];

  // Smaller cards under the main projects
  export const otherProjects = [
    {
      id: 1,
      title: "Job Finder",
      des: "Scrapes job listings with Puppeteer and shows them in a React frontend.",
      link: "https://github.com/danielrr25/Job-finder",
      linkLabel: "GitHub",
    },
  ];

  export const experience = {
    now: "Solution Analyst at Deloitte, building database tools and keeping production systems running.",
    previously: "Siemens Energy–sponsored capstone at UCF",
  };

  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/danielrr25",
    },
    {
      id: 2,
      img: "/link.svg",
      link: "https://linkedin.com/in/daniel-rodriguez-549255206",
    },
  ];
