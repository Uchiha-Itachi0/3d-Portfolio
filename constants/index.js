import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";
import MachineLearningIcon from './../public/assets/icons/machine_learning.svg'
const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "AI/ML Engineer",
    icon: <MachineLearningIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  // {
  //   title: "Freelancer",
  //   icon: <FreelancerIcon />,
  // },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Dart",
      icon: "/assets/tech/Dart.svg",
      link: "https://dart.dev/",
    },
    {
      name: "Rust",
      icon: "/assets/tech/Rust.svg",
      link: "https://www.rust-lang.org/",
    },
  ],
  frameworks: [
    {
      "name": "Django",
      "icon": "/assets/tech/django.svg",
      "link": "https://www.djangoproject.com/"
    },
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      "name": "React.js",
      "icon": "/assets/tech/react.svg",
      "link": "https://reactjs.org/"
    },
    {
      "name": "Angular.js",
      "icon": "/assets/tech/angular.svg",
      "link": "https://angularjs.org/"
    },
    {
      "name": "Streamlit",
      "icon": "/assets/tech/streamlit.svg",
      "link": "https://streamlit.io/"
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      "name": "Pandas",
      "icon": "/assets/tech/pandas.svg",
      "link": "https://pandas.pydata.org/"
    },
    {
      "name": "NumPy",
      "icon": "/assets/tech/numpy.svg",
      "link": "https://numpy.org/"
    },
    {
      "name": "PyTorch",
      "icon": "/assets/tech/pytorch.svg",
      "link": "https://pytorch.org/"
    },
    {
      "name": "TensorFlow",
      "icon": "/assets/tech/tensorflow.svg",
      "link": "https://www.tensorflow.org/"
    },
    {
      "name": "Keras",
      "icon": "/assets/tech/keras.svg",
      "link": "https://keras.io/"
    },
    {
      "name": "OpenCV",
      "icon": "/assets/tech/opencv.svg",
      "link": "https://opencv.org/"
    },
    {
      "name": "Scikit-Learn",
      "icon": "/assets/tech/scikitlearn.svg",
      "link": "https://scikit-learn.org/"
    }
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
    {
      "name": "VSCode",
      "icon": "/assets/tech/vscode.svg",
      "link": "https://code.visualstudio.com/"
    },
    {
      "name": "Jupyter",
      "icon": "/assets/tech/jupyter.svg",
      "link": "https://jupyter.org/"
    },
    {
      "name": "AWS",
      "icon": "/assets/tech/aws.svg",
      "link": "https://aws.amazon.com/"
    }
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "HardCopy",
    icon: "/assets/company/hardcopy.svg",
    iconBg: "#E6DEDD",
    date: "January 2024 - December 2024",
    points: [
      "I am working on developing a cross-platform mobile and desktop application using Dart, Rust, and ReactJS.",
      "Integrating machine learning features to enhance the app's functionality.",
      "We implemented backend services in Rust, achieving a 25% improvement in performance and a 15% reduction in memory usage.",
      "Integrated native device features such as camera, GPS, and local storage, providing a seamless user experience across platforms",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Vaizle",
    icon: "/assets/company/vaizle.svg",
    iconBg: "#E6DEDD",
    date: "October 2022 - April 2023",
    points: [
      "Developed and maintained web applications using Angular.js and TailwindCSS",
      "Built and managed scalable APIs using NestJS, enhancing server-side performance and reducing API\n" +
      "response time by 25%. Designed APIs that handled 10,000+ concurrent requests, ensuring robust\n" +
      "performance during peak traffic",
      "Worked closely with 3 teams (project management, design, and development) to ensure timely project\n" +
      "delivery, resulting in 100% on-time completion of all projects.\n",
      "Consistently met client requirements and deadlines, resulting in a 95% satisfaction rate based on feedback\n" +
      "and project outcomes\n",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "To-Do App: Organize Your Tasks Like a Pro",
    description:
      "In today’s fast-paced world, staying organized is the key to productivity. That’s why I built a To-Do App that makes task management not just efficient, but enjoyable. Leveraging the power of React, Redux, Node.js, and GraphQL, this app offers a seamless experience from the moment you log in. Whether you’re categorizing tasks by projects or personal goals, this app keeps everything neatly organized, right at your fingertips. With intuitive design and robust functionality, it’s more than just a to-do list—it’s your personal productivity partner. Dive in, and take control of your tasks like never before!",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "styled-component",
        color: "pink-text-gradient",
      },
      {
        name: "nodej.s",
        color: "orange-text-gradient",
      },
      {
        name: "GraphQL",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "/assets/projects/jartodo.png",
    source_code_link: "https://github.com/Uchiha-Itachi0/todo-backend",
    deployed_link: "https://jartodo.netlify.app/",
  },
  {
    name: "Movie Recommendation System: Discover Your Next Favorite Film",
    description:
      "With countless movies available, finding the perfect one to watch can be overwhelming. That's where my Movie Recommendation System comes in! Built using Python, Machine Learning, and Natural Language Processing (NLP), this app intelligently suggests movies based on your preferences. The sleek interface, powered by Streamlit, makes exploring recommendations a breeze. Whether you're in the mood for a blockbuster or an indie gem, this system learns from your choices and delivers tailored suggestions, helping you discover your next favorite film effortlessly. Dive into the world of intelligent movie recommendations and let the system do the searching for you!",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Machine-Learning",
        color: "pink-text-gradient",
      },
      {
        name: "NLP",
        color: "orange-text-gradient",
      }
    ],
    image: "/assets/projects/movierecommendation.png",
    source_code_link: "https://github.com/Uchiha-Itachi0/recommendation_system",
    deployed_link: "https://github.com/Uchiha-Itachi0/recommendation_system",
  },
  {
    name: "Self-Driving Car Simulation: Coding the Future of Mobility",
    description:
      "Imagine a world where cars drive themselves with precision and efficiency. My Self-Driving Car Simulation brings that vision to life! Written entirely from scratch using JavaScript, React, and Machine Learning, this project showcases the power of Genetic Algorithms and Reinforcement Learning. By simulating various driving scenarios, the system trains a virtual car to navigate complex environments autonomously. Each iteration refines the car's decision-making, leading to smarter and safer driving behaviors. This project isn't just a simulation—it's a step towards understanding the future of autonomous vehicles. Explore how code can drive the cars of tomorrow!",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "Machine-Learning",
        color: "pink-text-gradient",
      },
      {
        name: "Reinforcement-Learning",
        color: "orange-text-gradient",
      },
      {
        name: "Genetic-Algorithm",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/selfdrivingcar.png",
    source_code_link:
      "https://github.com/Uchiha-Itachi0/self_driving_car",
    deployed_link:
      "https://github.com/Uchiha-Itachi0/self_driving_car",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Uchiha-Itachi0",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/anubhav008shukla/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/anubhav008shukla/",
  },
];

const heroTexts = [
  "Machine Learning Engineer",
  500,
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
