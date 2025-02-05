
import althanitreeImage from "./projectImage/althanitree.png";
import airbngImage from "./projectImage/arbnbImage.png";
import dohafactsImage from "./projectImage/dohafactsImage.png";
import jobportalImage from "./projectImage/jobportalImage.png";

const projects = [
  {
    _id:1,
    title: "AL Thani Family Tree",
    image:althanitreeImage,
    description:
    "Qatar citizens including Royal Family can visit this website to see their family tree structure."
  },
  {
    _id: 2,
    title: "Airbnb Clone",
    image:airbngImage,
    description:
      "This project is an Airbnb clone built using HTML, Bootstrap, JavaScript, Node.js, Express, and the EJS templating engine, following the MVC design pattern. The platform allows users to browse, book, and list properties, mimicking the core functionalities of Airbnb. It features user authentication, dynamic content rendering, and a responsive design optimized for both desktop and mobile devices.",
  },
  {
    _id: 3,
    title: "Job Portal",
    image:
     jobportalImage,
    description:
      "This Job Portal web application is built using TailwindCSS, Node.js, Express, Mongoose, MongoDB, RESTFulls APIs and React.js, following the MVC design pattern. The platform allows users to search for jobs based on category and location. Companies can post new job listings, view applications, and manage candidates by accepting or rejecting applications. The app is enhanced with Sentry for efficient error handling, ensuring a seamless and responsive experience for both job seekers and employers.",
  },
  {
    _id: 4,
    title: "DohaFacts.com",
    image: dohafactsImage,
    description:
      "Dohafacts.com is a website built with HTML, CSS, and vanilla JavaScript, designed to provide reliable information for citizens and residents of Qatar. It offers helpful guides on various topics like how to get a tourist visa, how to obtain a driving license in Doha, and much more. The site aims to be a one-stop resource for anyone seeking practical information about living and working in Qatar.",
  },
  { _id: 5, title: "Weather App", image: "https://images.pexels.com/photos/2498102/pexels-photo-2498102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "This weather app provides real-time weather updates based on the city entered by the user. Built using React for the frontend, Material UI for a sleek and responsive design, and Axios for fetching weather data from an external API, the app offers a seamless user experience. Users can easily search for any city to view current weather conditions, including temperature, humidity, and other relevant details." },
];

export default projects;