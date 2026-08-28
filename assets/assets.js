import hero_pic from './hero-pic.jpg'
import hero from './hero.png'
import main_pic from './main.png'
import center_pic from './centerimg.png'
import newpic from './new.png'
import first from './first.png'
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import circular_Text from './circular-text.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import firebase from './firebase.png';
import figma from './figma.png';
import right_arrow_white from './right-arrow-white.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import web from './web.png';
import app from './app.png';
import backend from './backend.png';
import frontend from './frontend.png';
import circularText from "./circular-text.png";
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import html from "./html.png";
import css from "./css.png";
import javascript from "./javascript.png";
import tailwind from "./tailwind.png";
import bootstrap from "./bootstrap.png";
import jquery from "./jquery.png";
import react from "./react.png";
import nodejs from "./nodejs.png";
import mongodb from "./mongodb.png";
import typescript from "./typescript.png";
import reactnative from "./reactnative.png";
import nextjs from "./nextjs.png";
import expressjs from "./expressjs.png";
import mysql from "./mysql.png"
import npm from "./npm.png";
import git from "./git.png";
import github from "./github.png";
import vscode from "./vscode.png";
import postman from "./postman.png";
import githubCopilot from "./github-copilot.png";
import cursor from "./cursor.png";
import antigravity from "./antigravity.png"
import chatgpt from "./chatgpt.png";
import gemini from "./gemini.png";
import claude from "./claude.png";
import work1 from "./public/work-1.png";
import work2 from "./public/work-2.png";
import work3 from "./public/work-3.png";
import work4 from "./public/work-4.png";

export const assets = {
    html,
    css,
    javascript,
    typescript,
    tailwind,
    bootstrap,
    jquery,
    react,
    nodejs,
    expressjs,
    mongodb,
    mysql,
    nextjs,
    reactnative,
    npm,
    git,
    github,
    vscode,
    postman,
    githubCopilot,
    cursor,
    antigravity,
    chatgpt,
    gemini,
    claude,
    hero_pic,
    hero,
    center_pic,
    main_pic,
    newpic,
    first,
    circular_Text,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    firebase,
    figma,
    right_arrow_white,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    web,
    app,
    backend,
    frontend,
    circularText,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: work1,
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: work2,
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: work3,
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: work4,
    },
]

// export const servicesData = [
//     { icon: assets.web_icon, title: 'Web Development', description: 'Web development is the process of building, programming...', link: '' },
//     { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
//     { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
// ]
export const serviceData = [
    {
        icon: assets.web,
        title: 'Full Stack Web Development',
        description: 'End-to-end web applications built with modern architectures using React, Node.js, and clean code principles.',
        link: ''
    },
    { 
        icon: assets.app, 
        title: 'Cross-Platform Mobile Apps', 
        description: 'Developing smooth, native-like iOS and Android mobile applications using React Native.', 
        link: '' 
    },
    {
        icon: assets.backend,
        title: 'API & Backend Engineering',
        description: 'Designing scalable RESTful & GraphQL APIs with Express.js, Node.js, secure authentication, and microservices.',
        link: ''
    },
    {
        icon: assets.frontend,
        title: 'Frontend & UI Engineering',
        description: 'Building responsive, high-performance, and accessible user interfaces with React, Next.js, and ......',
        link: ''
    },
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'React Js, Node Js, Express Js, Mongodb, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BS Computer Science (2023-2027)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 3 projects' }
];

export const toolsData = [
    {
        title: 'NPM',
        image: assets.npm
    },
    {
        title: "VS Code",
        image: assets.vscode,
    },
    {
        title: "Git",
        image: assets.git,
    },
    {
        title: "GitHub",
        image: assets.github,
    },
    {
        title: "Postman",
        image: assets.postman,
    },
    {
        title: "Co-Pilot",
        image: assets.githubCopilot,
    },
    {
        title: "Cursor",
        image: assets.cursor,
    },
    {
        title: "Antigravity",
        image: assets.antigravity,
    },
    {
        title: "Chat GPT",
        image: assets.chatgpt,
    },
    {
        title: "Gemini",
        image: assets.gemini,
    },
    {
        title: "Claude",
        image: assets.claude,
    },

];

export const techstackData = [
    {
        title: "HTML",
        image: assets.html
    },
    {
        title: "CSS",
        image: assets.css
    },
    {
        title: "JavaScript",
        image: assets.javascript
    },
    {
        title: "TypeScript",
        image: assets.typescript
    },
    {
        title: "Tailwind CSS",
        image: assets.tailwind
    },
    {
        title: "BootStrap",
        image: assets.bootstrap
    },
    {
        title: "Jquery",
        image: assets.jquery
    },
    {
        title: "React",
        image: assets.react
    },
    {
        title: "Node.js",
        image: assets.nodejs
    },
    {
        title: "Express.js",
        image: assets.expressjs
    },
    {
        title: "MongoDB",
        image: assets.mongodb
    },
    {
        title: "My SQL",
        image: assets.mysql
    },
    {
        title: "Next.js",
        image: assets.nextjs
    },
    {
        title: "React Native",
        image: assets.reactnative
    },
];