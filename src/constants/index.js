import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1,
    be,sql, mini, snl,
  } from "../assets";

  const profiles = [
    {
      link: "https://auth.geeksforgeeks.org/user/aarti_rathi",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    },
    {
      link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
    },
    {
      link: "https://www.hackerrank.com/_shinchancode",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    {
      link:"https://dev.to/shinchancode",
      icon: hf,
    },
    {
      link:"https://www.holopin.io/@shinchancode#badges",
      icon: holopin,
    },
  ];

  const achievements = [
    {
      title: "8th Position : Selected for the final round of 12th CSI InApp International Student Project awards 2023.",
    },
    {
      title: "Twice State level Table-Tennis Winner (2021 and 2022)",
    },
    {
      title: "1st Position : Consecutive four times Winner of UdChalo Scholarship (2019 - 2023)",
    },
    {
      title: "Branch Head of Information Technology Department (2021 - 2022)",
    },
    {
      title: "Selected in top 100 candidates for Google Cloud Training among 20k Students.",
    },
    {
      title: "Got Education Scholarship Scheme for Army Personnel(ESSA) Scholarship (2015 - 2023)",
    },
    {
      title: "Played Nationals in Throwball for U-14 category. (2015)",
    },
  ]
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:"C++ tool",
      icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
  ];

  const list = [
    {
      id: "python",
      title: "Python",
    },
    {
      id: "c++",
      title: "C++",
    },
    {
      id: "web",
      title: "Web Dev",
    },
    {
      id: "other",
      title: "Other",
    },
  ];
  
  export const cProject = [
    {
      name: "DSA Lab",
      description:
        "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
      tags: [
        {
          name: "DSA",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: ds,
      source_link: "https://github.com/suprabhu77/DATASTRUCTURE",
      source_code_link: "https://github.com/suprabhu77/DATASTRUCTURE",
    }
  ];

  export const pythonProject = [
    {
      name: "DSA Lab",
      description:
        "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
      tags: [
        {
          name: "DSA",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: ds,
      source_link: "https://github.com/suprabhu77/DATASTRUCTURE",
      source_code_link: "https://github.com/suprabhu77/DATASTRUCTURE",
    }
  ];
  
  export const webProject = [
    {
      name: "3D React Portfolio",
      description:
        "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "3d_react",
          color: "pink-text-gradient",
        },
      ],
      image: port_3d,
      source_link: "https://shinchancode.github.io/3d-react-portfolio/",
      source_code_link: "https://github.com/shinchancode/3d-react-portfolio",
    },
    {
      name: "Chit Chat Application",
      description:
        "Real-Time, event based communication in Nodejs and browser-based Chat application. Uses Socket.io for implementation for WebSockets protocol. This application built using Node.js, Express, Socket.io and Render (Hosting)",
      tags: [
        {
          name: "Chatting",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: chitchat,
      source_link: "https://github.com/suprabhu77/Chat-Application",
      source_code_link: "https://github.com/suprabhu77/Chat-Application",
    },
    {
      name: "Notes Application",
      description:
        "A web-based notes app made by using javaScript, This web-based notes app having functionalities like Drag and drop, Search notes etc.",
      tags: [
        {
          name: "notes",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: notes,
      source_link: "https://shinchancode.github.io/Notes-App/",
      source_code_link: "https://github.com/shinchancode/Notes-App",
    },
  ];
  
  export const otherProject = [
    {
      name: "Learning Management system",
      description:
        "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "hygraph",
          color: "pink-text-gradient",
        },
      ],
      image: be,
      source_link: "https://internship-online-course.vercel.app/courses",
      source_code_link: "https://github.com/suprabhu77/online-course",
    },
    {
      name: "FaceMask Detection",
      description:
        "",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "CLI",
          color: "pink-text-gradient",
        },
      ],
      image: snl,
      source_link: "https://github.com/suprabhu77/fACEMASK_DETECTION",
      source_code_link: "https://github.com/suprabhu77/fACEMASK_DETECTION",
    },
    
  ];
  
  const experiences = [
    {
      title: "Software Devloper",
      company_name: "Hewlett Packard Enterprise",
      icon: bny,
      iconBg: "#383E56",
      date: "Sep 2022 - Present",
      link: "",
      points: [
        "Developed a comprehensive platform using Python, Django and ReactJs, offering Network as a Service to customers, enablingtransparent monitoring of device status, real-time insights, and troubleshooting to identify the causes of device downtime.",
        "Integrated the application with robust authentication policies, incorporating SAML for single sign-on (SSO) and leveragingOkta to ensure secure and seamless user authentication, achieving a 99.9% uptime for authentication services.",
        "Engaged with customers to understand requirements and proposed solutions, subsequently building a module to onboard customers and devices, facilitating stakeholders to efficiently manage 25% more device migration tasks, and facilitate 20% reduction in operational cost.",
        "Spearheaded the development of a comprehensive reporting system that facilitated region, country, and site-specific dataanalysis. Delivered actionable insights to stakeholders through custom reports, resulting in a 30% increase in data-drivendecision-making efficiency.",
        "Carried out robust validation checks to ensure data accuracy and integrity. Collaborated cross-functionally to establish and enforce validation standards, minimizing errors and improving user experience",
      ],
      link: "https://drive.google.com/drive/folders/13FK-YewFDv8ALmzKglPBmb6Z3oenuYoP",
    },
    {
      title: "Software Devloper, Intern",
      company_name: "Hewlett Packard Enterprise",
      icon: bny,
      iconBg: "#383E56",
      date: "Mar 2022 - Aug 2022",
      link: "",
      points: [
        "Received comprehensive training in Python with a focus on practical applications, including projects in web development, data analysis, and automation.",
        "Demonstrated expertise in the REST Django framework for web development, leveraging its capabilities to build scalable and efficient web applications.",
        "Enhanced the functionality of the AMM(Aruba Migration Management) app through the integration of automation features and networking command execution, resulting in significant time savings and operational efficiency improvements."
      ],
      link: "https://drive.google.com/file/d/10FimabCoiVTwOT7qxeh8LrUvUSZd1p0B/view?usp=sharing",
    },
    {
      title: "Google Cloud Training",
      company_name: "Google Cloud",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Apr 2021",
      link: "",
      points: [
        "Introduction to GCP and more functionalities with free access to quests, skill badges.",
        "Collaborating with cross-functional technologies.",
        "Got introduced to Computing, Application Development, Big Data and Machine Learning using Google Cloud's on training platform Qwiklabs",
        "Additional self-paced labs were provided to practice on Qwiklabs a platform by Google",
      ],
      link: "https://www.cloudskillsboost.google/public_profiles/a2f542c6-20c9-43af-bd0c-d6b9db6060d0",
    },
    {
      title: "Hacktoberfest",
      company_name: "GitHub",
      icon: hf,
      iconBg: "#E6DEDD",
      date: "Oct (2020 - 2022)",
      link: "",
      points: [
        "Hacktoberfest is an annual worldwide event held during the month of October. The event encourages open source developers to contribute to repositories through pull requests (PR).",
        "GitHub hosts many open source repositories that contribute to this event.",
      ],
      link: "https://github.com/suprabhu77?tab=achievements",
    },
  ];
  
  const educations = [
    {
      degree: "Bachelor of Engineering",
      branch:
        "Electronics and Communication Engineering",
      marks:
        "CGPA : 9.56 / 10",
      name: "Sri Jaya Chamarajendra College of Engineering, Mysore",
      year: "(2018 - 2022)",
      image: clg,
    },
    {
      degree:
        "12th Grade",
      branch : "Science",
      marks:
        "Percentage : 91.5 %",
      name: "Govt, PU College, Sagar",
      year: "2018",
      image: school,
    },
    {
      degree:
        "10th Grade",
      branch: "SSC",
      marks:
        "Percentage : 95 %",
      name: "Govt, Junior College Sagar",
      year: "2016",
      image: school,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
