import React from 'react';
import './assets/icons/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/plugins/css/bootstrap.min.css'
import './assets/plugins/css/animate.css'
import './assets/plugins/css/owl.css'
import './assets/plugins/css/jquery.fancybox.min.css'
import './assets/css/styles.css'
import './assets/css/responsive.css'
import './assets/css/colors/blue-munsel.css'
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'

function App() {
  var jsonData = {
    "Home": {
      "name": "Álvaro Rodrigo Romero",
      "jobTitle": "Senior Software Engineer",
      "email": "alvaro.rodrigo.romero@gmail.com",
      "phone": "+34 677788462",
      "location": "Madrid, Spain",
      "image": "assets/images/hero.png",
      "backgroundImage": "./images/home-bg-img.jpg",
      "contactIcons": [
        { "id": 1, "name": "github", "href": "https://github.com/AlvaroRodrigoRomero" }
      ],
    },
    "About": {
      "title": "About me",
      "description": "Hi, my name is Álvaro Rodrigo and I consider myself a full stack developer with over 6 years of experience in differents areas and projects. In terms of backend my whole experience is based on Microsoft technologies such ASP.Net forms, MVC, C#, .Net core... In terms of frondend I mainly worked with Javascript, JQuery and lately with vue.js, angular.js and a bit of React.js. In my free time I love to learn more about new technologies and I also learned a bit of Android (Java) and iOS (Swift)",
      "image": "assets/images/ab-img.png",
      "languages": [
        "C#",
        "ASP.Net MVC",
        ".Net Core",
        "Javascript",
        "Angular.js",
        "Vue.js",
        "React.js",
        "Sitecore",
        "DevOps",
      ],
      "resumeURL": "TODO",
      "backgroundImage": "../images/home-bg-img.jpg",
      "highlights": [
        { "id": 1, "title": "TODO", "description": "TODO", "icon": "fa fa-bullseye purple-color" },
        { "id": 2, "title": "TODO", "description": "TODO", "icon": "fa fa-code iron-color" },
        { "id": 3, "title": "TODO", "description": "TODO", "icon": "fa fa-object-ungroup sky-color" }
      ]
    },
    "FeaturedProjects": [
      {
        "id": 1,
        "name": "Barbamania.com",
        "title": "Wordpress",
        "description": "A worpress based website where I wanted to learn more about SEO and how to rank pages into google search engine. This project was made along with a co-worker where we both worked designing it and researching about the content we show in the site. We use Google Adsense and Amazon Afiliates API in the site that covered all expenses of the project and future projects.",
        "url": "https://barbamania.com/",
        "category": "SEO & Amazon",
        "image": "assets/images/barbamania.png"
      },
      {
        "id": 2,
        "name": "Canastadebaloncesto.store",
        "title": "Wordpress",
        "description": "In terms of effort and return, barbamania.com was a success project we decided to launch another project but with a different theme. This time we moved the other website to a different host that allows us to have multiple domains under the same host with the same price.",
        "url": "https://canastadebaloncesto.store/",
        "category": "SEO & Amazon",
        "image": "assets/images/canastas.png"
      }
    ],
    "Skills": {
      "technical": [
        { "id": 1, "name": "C#", "value": "100" },
        { "id": 2, "name": "Javascript", "value": "70" },
        { "id": 3, "name": "JQuery", "value": "70" },
        { "id": 4, "name": "Sitecore", "value": "70" },
        { "id": 5, "name": "Android (Java)", "value": "40" },
        { "id": 6, "name": "iOS (Swift)", "value": "40" },
        { "id": 7, "name": "React", "value": "30" },
        { "id": 8, "name": "Python", "value": "20" },

      ],
      "profesional": [
        { "id": 1, "name": "Team work", "value": "100" },
        { "id": 2, "name": "Fast learner", "value": "100" },
        { "id": 3, "name": "Proactive", "value": "100" },
        { "id": 4, "name": "Curious", "value": "100" },
        { "id": 5, "name": "Lazy", "value": "10" }
      ]
    },
    "Experience": {
      "backgroundImage": "../images/home-bg-img.jpg",
      "education": [
        { "id": 1, "title": "Multiplatform development", "description": "Learned computer science fundamentals, systems, algorithms, android games...", "dateRange": "2012-2014" },
        { "id": 2, "title": "Electronic of consume", "description": "Build and reparation of small robots", "dateRange": "2009-2011" }
      ],
      "workExperience": [
        {
          "id": 1,
          "title": "Backend Lead (Niit Technologies)",
          "description": "TODO",
          "dateRange": "May 2018 - Currently (1 year. 10 months)",
          "responsabilities": ["TODO", "TODO"]
        },
        {
          "id": 2,
          "title": "Senior Software Engineer (Muchoviaje.com)",
          "description": "TODO",
          "dateRange": "Sept 2016 - Sept 2017 (1 year)",
          "responsabilities": []
        },
        {
          "id": 3,
          "title": "Senior Software Engineer (Digitex)",
          "description": "TODO",
          "dateRange": "Feb 2016 - Sept 2016 (8 months",
          "responsabilities": ["TODO", "TODO"]
        },
        {
          "id": 4,
          "title": "Senior Software Engineer (Plexus Tech)",
          "description": "TODO",
          "dateRange": "Jun 2015 - Dic 2015 (7 months)",
          "responsabilities": ["TODO", "TODO"]
        },
        {
          "id": 5,
          "title": "Intern / Junior Consultant (Produban)",
          "description": "TODO",
          "dateRange": "Mar 2013 - Jun 2015 (2 years, 4 months)",
          "responsabilities": ["TODO", "TODO"]
        }
      ]
    },
    "NavItems": [
      { "id": 1, "active": "active", "name": "Home", "href": "home" },
      { "id": 2, "active": "", "name": "About", "href": "about" },
      { "id": 3, "active": "", "name": "Skills", "href": "skills" },
      { "id": 4, "active": "", "name": "Experience", "href": "experience" },
      { "id": 5, "active": "", "name": "Portfolio", "href": "portfolio" },
      { "id": 6, "active": "", "name": "Blog", "href": "blog" },
      { "id": 7, "active": "", "name": "Contact", "href": "contact" }
    ]
  };
  return (
    <div>
      <Header NavItems={jsonData.NavItems} />
      <Content Data={jsonData} />
      <Footer Data={jsonData.Home} />
    </div>
  );
}

export default App;
