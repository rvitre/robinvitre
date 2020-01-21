import cyberImg from './../assets/img/cyberid.png'
import rbsImg from './../assets/img/rbs.png'
import elevenImg from './../assets/img/logo11h11.jpg'
import granitImg from './../assets/img/granit.png'
import csImg from './../assets/img/completesavings.png'
import carnicaImg from './../assets/img/carnica.png'
import syndicatImg from './../assets/img/syndicat.png'
import elevenAppImg from './../assets/img/11h11app.png'
import ggjImg from './../assets/img/event-ggj2019.png'
import rvjImg from './../assets/img/rv.png'


const ProjectsList = [
    { "name": "Cyber & ID Protection", "thumbnailSrc": cyberImg, "type": "web", "duration": 180, "date": "2018", "url": "https://uk-cyberprotection.affinionservices.com/", "categories": [{"name": "front", "level": 70, "skills": ["React.js", "LESS", "Webpack"]}, {"name": "back", "level": 20, "skills" : ["RESTful API"]}, {"name": "tools", "level": 50, "skills" : ["Cloud Services", "Agile", "Jira"]}], "role": "UI Lead, Web Developer" },
    { "name": "RBS Premier Black", "thumbnailSrc": rbsImg, "type": "mobile", "duration": 150, "date": "2019", "url": "https://play.google.com/store/apps/details?id=com.rbs.premiermembershipservices&hl=fr", "categories": [{"name": "front", "level": 60, "skills": ["React-Native"]}, {"name": "back", "level": 20, "skills" : ["API Design"]}, {"name": "tools", "level": 60, "skills" : ["Cloud Services", "Agile", "Jira"]}], "role": "UI Lead, Web Developer" },
    { "name": "11h11 Design & Communication", "thumbnailSrc": elevenImg, "type": "web", "duration": 30, "date": "2019", "url": "https://11h11-design.fr", "categories": [{"name": "front", "level": 60, "skills": [ "JS", "SASS", "PWA"]}, {"name": "back", "level": 60, "skills" : ["PHP", "MySQL",  "Wordpress"]}, {"name": "tools", "level": 40, "skills" : ["Cloud Services", "SEO"]}], "role": "Web Developer" },
    { "name": "Le Granit", "thumbnailSrc": granitImg, "type": "web", "duration": 30, "date": "2019", "url": "https://www.legranit.org/", "categories": [{"name": "front", "level": 60, "skills": ["JS", "SASS"]}, {"name": "back", "level": 60, "skills" : ["PHP", "MySQL", "Wordpress"]}, {"name": "tools", "level": 0, "skills" : []}], "role": "Web Developer" },
    /*{ "name": "Jaluxi", "thumbnailSrc": cyberImg, "type": "web", "duration": 30, "date": "2019", "url": "https://www.jaluxi.fr/", "categories": [{"name": "front", "level": 60, "skills": ["JS", "SASS"]}, {"name": "back", "level": 60, "skills" : ["PHP", "MySQL", "Wordpress"]}, {"name": "tools", "level": 0, "skills" : []}], "role": "Web Developer" },*/
    { "name": "Complete Savings", "thumbnailSrc": csImg, "type": "web", "duration": 180, "date": "2017", "url": "https://completesavings.co.uk/", "categories": [{"name": "front", "level": 60, "skills": ["jQuery", "LESS", "Grunt"]}, {"name": "back", "level": 60, "skills" : ["PHP", "MySQL", "Oracle", "API"]}, {"name": "tools", "level": 40, "skills" : ["Cloud Services", "Jira"]}], "role": "Technical Lead, Web Developer" },
    { "name": "Carnica Miel", "thumbnailSrc": carnicaImg, "type": "web", "duration": 15, "date": "2019", "url": "https://carnica-miel.fr/", "categories": [{"name": "front", "level": 60, "skills": ["HTML", "JS", "Webpack", "SASS"]}, {"name": "back", "level": 30, "skills" : ["PHP"]}, {"name": "tools", "level": 0, "skills" : []}], "role": "Web Developer" },
    { "name": "Syndicat des eaux de Champagney", "thumbnailSrc": syndicatImg, "type": "web", "duration": 30, "date": "2020", "url": "https://sdec.11h11-design.fr/", "categories": [{"name": "front", "level": 50, "skills": ["JS", "SASS"]}, {"name": "back", "level": 70, "skills" : ["PHP", "MySQL", "Wordpress"]}, {"name": "tools", "level": 30, "skills" : ["Cloud Services"]}], "role": "Web Developer" },
    { "name": "11h11 Mobile App", "thumbnailSrc": elevenAppImg, "type": "mobile", "duration": 30, "date": "2019", "url": "https://play.google.com/store/apps/details?id=com.elevenelevenapp&gl=FR", "categories": [{"name": "front", "level": 80, "skills": ["React-Native"]}, {"name": "back", "level": 50, "skills" : ["API"]}, {"name": "tools", "level": 40, "skills" : ["Cloud Services"]}], "role": "Web Developer" },
    { "name": "Robin Vitré", "thumbnailSrc": rvjImg, "type": "web", "duration": 15, "date": "2020", "url": "https://robinvit.re", "categories": [{"name": "front", "level": 60, "skills": ["React.js", "SASS", "Webpack"]}, {"name": "back", "level": 0, "skills" : []}, {"name": "tools", "level": 30, "skills" : ["Cloud Services"]}], "role": "Web Developer" },
    { "name": "Global Game Jam 2019", "thumbnailSrc": ggjImg, "type": "game", "duration": 3, "date": "2019", "url": "https://globalgamejam.org/2019/jam-sites/webloyalty-nyon", "categories": [{"name": "front", "level": 0, "skills": []}, {"name": "back", "level": 80, "skills" : ["Unity", "C#"]}, {"name": "tools", "level": 50, "skills" : ["eat.ch"]}], "role": "Developer" }
];

export default ProjectsList;