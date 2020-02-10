import React, { Component } from 'react'

class Json extends Component {
    render() {
        const jsonData = {
            "Home": {
                "name": "Alvaro Rodrigo Romero",
                "bobTitle": "Senior Software Engineer",
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
                "description": "Hello, I’m a Patrick, web-developer based on Paris. I have rich experience in web site design & building and customization. Also I am good at",
                "image": "assets/images/ab-img.png",
                "languages": [
                    "C#",
                    "ASP.Net MVC",
                    ".Net Core",
                    "Vue.js",
                    "React.js",
                    "Sitecore",
                    "DevOps"
                ],
                "resumeURL": "TODO",
                "backgroundImage": "../images/home-bg-img.jpg",
                "highlights": [
                    { "id": 1, "title": "TODO", "description": "TODO", "icon": "fa fa-bullseye purple-color" },
                    { "id": 2, "title": "TODO", "description": "TODO", "icon": "fa fa-code iron-color" },
                    { "id": 3, "title": "TODO", "description": "TODO", "icon": "fa fa-object-ungroup sky-color" }
                ],
                "featuredProjects": [
                    {
                        "id": 1,
                        "name": "TODO",
                        "title": "TODO",
                        "description": "TODO",
                        "url": "TODO",
                        "category": "TODO",
                        "image": "assets/images/p-2.png"
                    }
                ]
            },
            "Skills": {
                "technical": [
                    { "id": 1, "name": "C#", "value": "100" },
                    { "id": 2, "name": "Javascript", "value": "60" },
                    { "id": 3, "name": "Swift", "value": "40" },
                    { "id": 4, "name": "React", "value": "70" },
                    { "id": 5, "name": "Sitecore", "value": "50" }
                ],
                "profesional": [
                    { "id": 1, "name": "Team work", "value": "100" },
                    { "id": 2, "name": "Fast learner", "value": "60" },
                    { "id": 3, "name": "Proactive", "value": "40" },
                    { "id": 4, "name": "Curious", "value": "70" }
                ]
            },
            "Experiences": {
                "backgroundImage": "../images/home-bg-img.jpg",
                "education": [
                    { "id": 1, "title": "TODO", "description": "TODO", "dateRange": "TODO" },
                    { "id": 2, "title": "TODO", "description": "TODO", "dateRange": "TODO" },
                    { "id": 3, "title": "TODO", "description": "TODO", "dateRange": "TODO" }
                ],
                "workExperience": [
                    {
                        "id": 1,
                        "title": "TODO",
                        "description": "TODO",
                        "dateRange": "TODO",
                        "responsabilities": ["TODO", "TODO"]
                    },
                    {
                        "id": 2,
                        "title": "TODO",
                        "description": "TODO",
                        "dateRange": "TODO",
                        "responsabilities": ["TODO", "TODO"]
                    },
                    {
                        "id": 3,
                        "title": "TODO",
                        "description": "TODO",
                        "dateRange": "TODO",
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
                { "id": 6, "active": "", "name": "Pricing", "href": "pricing" },
                { "id": 7, "active": "", "name": "Blog", "href": "blog" },
                { "id": 8, "active": "", "name": "Contact", "href": "contact" }
            ]
        };
        window.JsonData = jsonData;
        return(<div></div>);
    }
}

export default Json