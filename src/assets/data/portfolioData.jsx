import portfolioImg01 from '../images/portfolio-01.jpg';
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";
import portfolioImg08 from '../images/portfolio-08.png';
import portfolioImg09 from '../images/portfolio-09.png';
import tictactoe from '../images/tic-tac.png'
import todo from '../images/to-do.png'
import freelancer from "../images/Freelancer.png"
import hospital from "../images/Hospital.png"
import moneyManager from "../images/landing1.png"
import userManagement from "../images/Screenshot 2025-09-28 151746.png"

const portfolio = [
  {
    id: "001",
    imgUrl: portfolioImg08,
    category: "Web Design",
    title: "TCJ Space",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://mohammad-salman07.github.io/Space-Website-TCJ-/",
    codeUrl:"#",
  },
  {
    id: "01",
    imgUrl: portfolioImg09,
    category: "Ux",
    title: "Finder Car",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://mohammad-salman07.github.io/Finder-Car/",
    codeUrl:"#",
  },
  {
    id: "02",
    imgUrl: tictactoe,
    category: "Web Design",
    title: "TIC-TAC-TOE (Game)",
    description:
      "A modern, responsive Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Play against AI or a friend, track wins and draws, and enjoy features like dark mode, sound effects, and a game result chart.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    siteUrl: "https://mohammad-salman07.github.io/tic-tac-toe/",
    codeUrl:"https://github.com/Mohammad-Salman07/tic-tac-toe.git",
  },
  {
    id: "03",
    imgUrl: todo,
    category: "Web Design",
    title: "TO-DO-LIST",
    description:
      "A clean and responsive To-Do List web app built with HTML, CSS, and JavaScript. Easily add, complete, delete, and export tasks with support for light/dark mode and local storage.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    siteUrl: "https://mohammad-salman07.github.io/Smart-To-List/",
    codeUrl:"https://github.com/Mohammad-Salman07/Smart-To-List.git",
  },
  {
    id: "04",
    imgUrl: freelancer,
    category: "Web Design",
    title: "Freelancer Marketplace",
    description:
      "Freelancer Marketplace Portal is a full-stack web application that connects clients and freelancers. Clients can register, post projects, review bids, chat with freelancers, and make payments upon completion. Freelancers can browse projects, place bids, and view their earnings summary through an interactive dashboard with charts. Built using JSP, Servlets, JDBC, and MySQL, the system includes secure role-based login, real-time messaging, bid tracking, and profile management — offering a complete freelance workflow simulation with end-to-end backend logic and database operations. YOU CAN DOWNLOAD FULL CODE OF THIS PROJECT FROM MY GITHUB",
    technologies: ["Java", "JSP","Bootstrap", "Servlet", "JDBC","MySQL"],
    siteUrl: "#",
    codeUrl:"#",
  },
  {
    id: "05",
    imgUrl: hospital,
    category: "Web Design",
    title: "Hospital Management System",
    description:
      "A full-stack web application built with JSP, Servlets, JDBC, and MySQL to manage core hospital operations. Admins can add doctors, manage appointments, and view patient activity. Patients can register, log in, and book appointments. Includes role-based access, patient history search, and an admin dashboard with real-time stats — all designed to streamline hospital workflows..  YOU CAN DOWNLOAD FULL CODE OF THIS PROJECT FROM MY GITHUB",
    technologies: ["Java", "JSP","Bootstrap", "Servlet", "JDBC","MySQL"],
    siteUrl: "#",
    codeUrl:"https://github.com/Mohammad-Salman07/Hospital_Management_System.git",
  },

  {
    id: "06",
    imgUrl: moneyManager,
    category: "Ux",
    title: "Money Manager",
    description:
      "Built a full stack Money Manager Application using React, Java (REST APIs), and MySQL with features like email login, income/expense tracking, total balance calculation, category management with emojis, date filters, profile picture support, and interactive charts for financial insights.",
    technologies: ["React", "Tailwind css", "MySQL", "JAVA", "SpringBoot", "RestFull APIs"],
    siteUrl: "#",
    codeUrl:"#",
  },
  {
    id: "07",
    imgUrl: userManagement,
    category: "Web Design",
    title: "User Management",
    description:
      "Developed a Full Stack User Management System using React, Java (REST APIs), and MySQL with a modern UI, implementing core CRUD operations (Add, Edit, View, Delete) along with secure and efficient data handling.",
    technologies: ["React", "Tailwind css", "MySQL", "JAVA", "SpringBoot", "RestFull APIs"],
    siteUrl: "#",
    codeUrl:"https://github.com/Mohammad-Salman07/User-Management.git",
  },
  {
    id: "08",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Finance Technology Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    codeUrl:"#",
  },
  {
    id: "09",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Video Conference Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    codeUrl:"#",
  },
  {
    id: "10",
    imgUrl: portfolioImg03,
    category: "Ux",
    title: "File Sharing Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    codeUrl:"#",
  },
  {
    id: "11",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    codeUrl:"#",
  },
  {
    id: "12",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    codeUrl:"#",
  },
  {
    id: "13",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Online Therapy Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    codeUrl:"#",
  },
  {
    id: "14",
    imgUrl: portfolioImg07,
    category: "ux",
    title: "Appointment Booking Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    codeUrl:"#",
  },
];

export default portfolio;
