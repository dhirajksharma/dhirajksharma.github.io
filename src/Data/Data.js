export const projectData=[
    {
        id:"collabchain",
        img:"https://github.com/dhirajksharma/collabchain/blob/main/frontend/public/logo.png?raw=true",
        cover:"https://img.freepik.com/free-vector/construction-landing-page_52683-10540.jpg?t=st=1711437787~exp=1711441387~hmac=e6d28bbd4aff8e837b23e74f554ce4d3ecff5a813149e716b79f018dbffad78e&w=740",
        tag:["Solidity", "MongoDB", "Node.JS", "React.JS"],
        link:"",
        title:"Collab Chain",
        intro:"Welcome to Collab Chain, an online platform for researchers all across the world to collaborate on any research work, manage their resources, all with the security of blockchain technology.",
        insp:"Collabchain is my final year project for B.Tech, where I am working in a team of four. The idea for developing such a platform came from a team member who was inspired by the convinience platforms like Github, Gitlab, etc provide for collaboration among devs and aspired to do something similar for the research community.",
        jrny:[
            "We divided the work amongst ourselves such that I was responsible for the backend of the system. We were using Node.js for the server coupled with MongoDB for all the database requirements and solidity to create a blockchain network that would maintain an authentic and immutable log of all the activities being performed by our users.",
            "I had to learn how to write solidity code, and then design a code for contract that suited our requirements. Chatgpt did a lot of help, along with online learning resources, to solve conceptual doubts that I faced during the process. I even asked it to write a version of the contract that I could refer to, but one read through it with some dry run, and I realized the logic was hilariously flawed. Perhaps, there's still time in them replacing real developers. With my ethereum contract ready and tested, I moved on to building the central backend server.",
            "Since, storage on blockchains is expensive we decided that the majority of the data like the user data and the project data will be stored on a central server, while the blockchain shall serve a small but crucial purpose of maintaining immutable log of all the happenings in the projects maintained using our platform. The way our application worked was, the backend would receive requests from the frontend, perform the logical operations required, manipulate the data and push a request to our contract on the chain to create a log if required. Maintaining the atomicity of the operations was of paramount importance, either both the backend and blockchain code runs as expected or none of it does.",
            "Although I had previously worked on a backend application, my experience was very limited and so I was excited with this opportunity to enhance my learnings. While the structure of the code for the server application bore resemblance to my older application, there were many new additions like the introduction of Web3.js to interact with the smart contract, truffle for deployment of the said contract. Like any new project, this came with problems of its own, but reading through the docs helped a lot. No wonder everyone recommends them so much!",
            "Earlier, I had worked majorly with the frontend of applications, and felt the backend a bit daunting but more so boring. But as I worked through this project, I realized it is an equally exciting domain to work, if not more, with its own challenges and thrills to offer."
        ],
        carousel:[
            "https://img.freepik.com/free-vector/construction-landing-page_52683-10540.jpg?t=st=1711437787~exp=1711441387~hmac=e6d28bbd4aff8e837b23e74f554ce4d3ecff5a813149e716b79f018dbffad78e&w=740",
            "https://img.freepik.com/free-vector/construction-landing-page_52683-10540.jpg?t=st=1711437787~exp=1711441387~hmac=e6d28bbd4aff8e837b23e74f554ce4d3ecff5a813149e716b79f018dbffad78e&w=740",
            "https://img.freepik.com/free-vector/construction-landing-page_52683-10540.jpg?t=st=1711437787~exp=1711441387~hmac=e6d28bbd4aff8e837b23e74f554ce4d3ecff5a813149e716b79f018dbffad78e&w=740",
            "https://img.freepik.com/free-vector/construction-landing-page_52683-10540.jpg?t=st=1711437787~exp=1711441387~hmac=e6d28bbd4aff8e837b23e74f554ce4d3ecff5a813149e716b79f018dbffad78e&w=740",
        ]
    },
    {
        id:"lorestore",
        img:"https://github.com/dhirajksharma/thelorestore-frontend/blob/main/public/android-chrome-192x192.png?raw=true",
        cover:"https://github.com/dhirajksharma/thelorestore-frontend/blob/main/public/thelorestore_thumbnail.jpeg?raw=true",
        tag:["MongoDB", "Node.JS", "React.JS", "TailwindCSS"],
        link:"https://thelorestore.vercel.app/",
        title:"The Lore Store",
        intro:"Introducing Lore Store, an engaging online book store where readers can explore an extensive collection of literary treasures. With a user-friendly interface, seamless navigation, and secure transactions via Stripe, Lore Store offers an immersive browsing experience. Embark on a journey through captivating narratives and discover your next literary adventure at Lore Store today.",
        insp:"During my B.Tech program, I was given the opportunity to work on a project related to software engineering. This project aimed to apply the theoretical knowledge we gained from studying various product development cycles into a practical setting. For my assignment, I was tasked with creating an online book store using a frontend framework of my choice and implementing a NoSQL backend system.",
        jrny:[
            "It was a semester-long project that began with the identification of a target user base, conducting surveys, and collecting data from potential users. One of the key lessons I learned during this project was the importance of asking the right questions to the appropriate audience. While gathering users' personal input was crucial, it needed to be verified with data before implementation.",
            "After identifying the user base and their product requirements, we created a Software Requirements Specification (SRS) and developed a project plan that included scheduling all stages of development and setting deadlines. Data flow diagrams were then constructed to provide a clear overview of the various processes involved before commencing the development phase.",
            "Initially, taking on a project of this scale as my first backend project felt daunting. However, by following the outlined steps and adhering to the established process, the development process became more streamlined. I approached the project by building one component at a time and gradually integrating them into the system. Whenever I encountered challenges, I referred to MongoDB documentation to find optimized solutions. Since the backend and frontend were deployed on separate servers, I faced hurdles in implementing Cross-Origin Resource Sharing (CORS). It took some time to overcome these obstacles, but once I understood how it worked, things became easier.",
            "Once a significant portion of the backend was completed, I shifted my focus to frontend development. I chose React to build the frontend and utilized Redux for state management and data sharing between components. To design the user interface, I sought inspiration from platforms like Dribbble, opting for a minimalistic and straightforward approach. I must admit that compared to backend development, frontend work required significantly more time and effort. The frontend development phase took me more than twice as long as the backend phase.",
            "Overall, the development process alone took approximately one and a half months. Some features proved more challenging to implement than others, and certain aspects had to be adjusted due to deadline constraints. Nevertheless, I was able to bring the project close to its initial plan. Upon deploying the finished work, I realized the complexities involved in integrating the frontend and backend seamlessly. Managing states during fetch requests and handling communication failures between the two servers were critical considerations. Neglecting these aspects could result in a system failure. This experience further deepened my appreciation for the tremendous effort developers put into running and maintaining massive platforms like Amazon and Flipkart.",
        ],
        carousel:[
            "https://github.com/dhirajksharma/thelorestore-frontend/blob/main/public/thelorestore_thumbnail.jpeg?raw=true",
            "https://github.com/dhirajksharma/thelorestore-frontend/blob/main/public/thelorestore_thumbnail.jpeg?raw=true",
            "https://github.com/dhirajksharma/thelorestore-frontend/blob/main/public/thelorestore_thumbnail.jpeg?raw=true",
        ]
    },
    {
        id:"psreact",
        img:"https://github.com/dhirajksharma/reactgames/blob/main/public/android-chrome-192x192.png?raw=true",
        cover:"https://github.com/dhirajksharma/reactgames/blob/main/public/psreact_thumbnail.jpeg?raw=true",
        tag:["React.JS","TailwindCSS"],
        link:"https://psreact.vercel.app",
        title:"PS React",
        intro:"Welcome to PS React, a platform built for casual gaming enthusiasts. Dive into a world of entertainment with classic games like Pokeduel, Hangman and Lights Out, designed to challenge and delight. Experience fun, sharpen your skills, with fellow gamers at PS React today.",
        insp:"When I was learning vanilla JS, I created a Pokemon game. Therefore, it seemed logical for me to develop more games when I began working with React JS. Considering the multitude of task schedulers already available on Github, it didn't make sense to add yet another one to the collection. You see, there's a certain enthusiasm and excitement that comes with working on an original idea, which is lacking when you're recreating an already existing project.",
        jrny:[
            "When I first started learning React, one of the first significant assignments I received was to create a game called Hangman. At first, I wasn't quite sure what kind of game it was. upon some googling I discovered that Hangman is like a precursor to Wordle—a game where you try to guess the 5 letters of a random word within 6 attempts.  It seemed like a nice and easy task.",
            "However, the main purpose of this assignment was to learn React and its functionalities. Therefore, the game was supposed to be designed using a group of components, each with its own role. These components would come together to form the entire game, interacting with each other through states and props, and passing data among themselves. As for the words, I utilized an API that would provide a random word every time it was played.",
            "After completing Hangman, I worked on another game called Lights Out. In this game, the player is presented with a grid of lit and unlit cells, and the objective is to turn off all the lit cells. As I worked on this second assignment, an idea sparked in my head—I should combine all these games into a single application. Drawing on the concepts I had learned so far, such as component lifecycles, routing mechanisms, and events in React, I began building this collection of games, all written in React- thus the name, PS React.",
            "When I initially deployed the application, the user interface did not have an appeal to it and was not up to my satisfaction. Every time I opened the site, it bothered me. Almost a year later, I had an epiphany—I should adopt a Tinder-like cards layout. Swipe left, swipe right—simple and intuitive. However, I soon realized that this approach would not be ideal if a user wanted to revisit a game card after going through all five games. The Tinder-style approach wouldn't allow for that. So, I decided to implement a carousel of cards instead. Equipped with a better understanding of UI layouts, font pairing, color combinations, and the use of Tailwind CSS, I completely revamped the site to its current state.",
            "In the end, when I finally deployed the new version of the site, I felt a sense of accomplishment and pride in how far I had come. I could literally see the progress I had made. This, I believe, is a crucial aspect of being a developer or any artist in general—you learn, practice, and continually improve. It's an iterative process where you constantly refine your work."
        ],
        carousel:[
            "https://github.com/dhirajksharma/reactgames/blob/main/public/psreact_thumbnail.jpeg?raw=true",
            "https://github.com/dhirajksharma/reactgames/blob/main/public/psreact_thumbnail.jpeg?raw=true",
        ]
    },
]

export const experienceData=[
    {
        year:"2024-Present",
        title:"System Engineer",
        location:"Tata Consultancy Services",
        details:""
    },
    {
        year:"2022",
        title:"Adobe UX Foundation",
        location:"FutureSkills Prime",
        details:"Having completed the Adobe UX Journey, I've gained valuable insights into User Experience Design. The course covered essential topics such as user-centric design, research techniques like interviews and usability testing, principles of visual design like color theory and typography, creating user personas and sitemaps, and finally, crafting interactive mock-ups. This comprehensive learning experience has equipped me with the skills needed to create intuitive and engaging digital experiences that cater to user needs and preferences. I'm now confident in my ability to approach UX projects with a structured and informed approach, ensuring a smooth and enjoyable user experience."
    },
    {
        year:"2020-2024",
        title:"B. Tech in Computer Science",
        location:"Techno Main Salt Lake",
        details:"During my undergrad, I acquired a diverse range of skills. From programming languages and algorithms to collaboration and teamwork, I developed a strong technical foundation. Courses in relational databases, operating systems, and networking expanded my knowledge, while frontend development taught me web technologies and UI/UX principles. Additionally, I cultivated critical thinking, problem-solving, and time management abilities. This comprehensive skill set has prepared me to tackle real-world challenges with confidence and creativity as I enter the next phase of my career."
    },
]