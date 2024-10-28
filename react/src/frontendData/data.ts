export interface Project {
    id: number;
    title: string;
    summary: string;
    description: string;
    thumbnail: string;
    images: string[];
    detailsUrl: string;
    githubUrl: string;
    tools: string;
    componentKey: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Mini Games",
        summary: "Try out various fun mini-games.",
        description: "A collection of fun mini-games. Choose a game and test your skills!",
        thumbnail: "/miniGames/thumbnails/joystick.png",
        images: [],
        detailsUrl: "mini-games",
        githubUrl: "https://github.com/Premo14/personal-site/tree/main/react/src/components/projects/miniGames",
        tools: "TypeScript, ChakraUI, TanStack, Go, Gorm, MariaDB",
        componentKey: "mini-games"
    },
    {
        id: 2,
        title: "Spin The Ball",
        summary: "Just spin it, alright? Alright.",
        description: "Spin The Ball is a simple graphics project " +
            "using ThreeJS where you can click and drag a 3D ball " +
            "around to see how light affects it.",
        thumbnail: "/projects/thumbnails/spinTheBall.png",
        images: [],
        detailsUrl: "spin-the-ball",
        githubUrl: "https://github.com/Premo14/personal-site/tree/main/react/src/components/projects/spinTheBall",
        tools: "JavaScript, HTML, CSS, ThreeJS, Gsap",
        componentKey: "spin-the-ball"
    },
    {
        id: 3,
        title: "Todo App",
        summary: "Yes, there are much more useful apps on your phone.",
        description: "The todo App is an application where you can " +
            "add todos to a list and mark them as completed or " +
            "delete them.",
        thumbnail: "/projects/thumbnails/todoApp.png",
        images: [],
        detailsUrl: "todo-app",
        githubUrl: "https://github.com/Premo14/personal-site/tree/main/react/src/components/projects/todo",
        tools: "Go, TypeScript/.tsx, HTML, CSS, React/Vite, MongoDB, Fiber, ChakraUI, " +
            "ESLint",
        componentKey: "todo"
    },
    {
        id: 4,
        title: "Jokes App",
        summary: "Who doesn't like a good joke? Unfortunately, there are no " +
            "good ones here.",
        description: "The Jokes App is a web app where jokes are displayed " +
            "and CRUD operations can be made on the jokes. A functional " +
            "login service has also been implemented.",
        thumbnail: "/projects/thumbnails/jokesJokes.png",
        images: [
            "/projects/jokesApp/jokesDelete.png",
            "/projects/jokesApp/jokesEdit.png",
            "/projects/jokesApp/jokesDetails.png",
            "/projects/jokesApp/jokesLogin.png",
            "/projects/jokesApp/jokesRegister.png",
            "/projects/jokesApp/jokesSearch.png"
        ],
        detailsUrl: "jokes-app",
        githubUrl: "https://github.com/Premo14/JokesApp/tree/main",
        tools: "C#, ASP.NET, HTML, CSS, Razor, SQLite, Entity, MVC, Bootstrap",
        componentKey: ""
    },
    {
        id: 5,
        title: "Travlr App",
        summary: "Looking for a way to book your next trip? Well look " +
            "somewhere else.",
        description: "The Travlr App was a college project that acted as a " +
            "mock travel agency website. The project has client and server " +
            "side sites for providing and manipulating frontendData.",
        thumbnail: "/projects/thumbnails/travlr-app.png",
        images: [],
        detailsUrl: "travlr-app",
        githubUrl: "https://github.com/Premo14/cs465-fullstack/tree/project",
        tools: "JavaScript, HTML, CSS, MongoDB, Express, Angular, Node.JS, " +
            "Handlebars",
        componentKey: ""
    },
    {
        id: 6,
        title: "Adirondack Tourism App",
        summary: "Want to get lost in the wilderness? Look no further.",
        description: "The Adirondack Tourism App was a mobile application was" +
            "initially designed to be for the total eclipse of 2024. The app " +
            "has since been repurposed to become a tourism app for the " +
            "adirondack region of NY.",
        thumbnail: "/projects/thumbnails/adk-tourism.png",
        images: [],
        detailsUrl: "adk-tourism-app",
        githubUrl: "https://github.com/Premo14/Totality-api",
        tools: "PHP, TypeScript, HTML, CSS, Kotlin, Laravel, Angular, " +
            "Android Studio, Docker",
        componentKey: ""
    },
]

export interface MiniGame {
    id: number,
    title: string,
    summary: string,
    description: string,
    thumbnail: string,
    detailsUrl: string,
    githubUrl: string,
    componentKey: string
}

export const miniGames: MiniGame[] = [
    {
        id: 1,
        title: "Number Guessing Game",
        summary: "Try to guess the correct number!",
        description: "Try to guess the number between 1 and 100.",
        thumbnail: "/miniGames/thumbnails/number-guessing-game.png",
        githubUrl: "https://github.com/Premo14/personal-site/tree/main/react/src/components/projects/miniGames/numberGuessingGame",
        detailsUrl: "number-guessing-game",
        componentKey: "number-guessing-game",
    },
    {
        id: 2,
        title: "Card Matching Memory Game",
        summary: "Match all the cards to win!",
        description: "Flip two cards at a time and try to match pairs. Choose between different difficulty levels to challenge your memory and match all the cards to win the game!",
        thumbnail: "/miniGames/thumbnails/card-matching-game.png",
        githubUrl: "https://github.com/Premo14/personal-site/tree/main/react/src/components/projects/miniGames/cardMatchingMemoryGame",
        detailsUrl: "card-matching-memory-game",
        componentKey: "card-matching-memory-game",
    },
    {
        id: 3,
        title: "Classic Snake Game",
        summary: "Control the snake and eat the food to grow!",
        description: "In this classic snake game, use the arrow keys to move the snake. Eat food to grow longer, but be careful not to hit the walls or the snake's own body!",
        thumbnail: "/miniGames/thumbnails/snake-game.png",
        githubUrl: "https://github.com/Premo14/personal-site/tree/main/react/src/components/projects/miniGames/snakeGame",
        detailsUrl: "snake-game",
        componentKey: "snake-game",
    },
    {
        id: 4,
        title: "Flappy Bird",
        summary: "Flap your wings and avoid the pipes!",
        description: "Click or tap to flap your wings and fly through the gaps between the pipes. Don't hit the pipes or the ground! - P.S. The hit box for the bird is not the greatest, I am still working on that.",
        thumbnail: "/miniGames/thumbnails/flappy-bird.png",
        githubUrl: "https://github.com/Premo14/personal-site/tree/main/react/src/components/projects/miniGames/flappyBird",
        detailsUrl: "flappy-bird",
        componentKey: "flappy-bird",
    },
]

export interface Course {
    id: number,
    title: string,
    description: string
}

export const courses: Course[] = [
    {
        id: 1,
        title: "Full Stack Development I & II",
        description: "Full Stack Development I:<br/>Students will design and develop a full stack application through the utilization of programming language frameworks. In creating a full stack application, students will also be responsible for developing a database as well as the code that interfaces their application to the database. This course is the first course in a two-course sequence.<br/><br/>Full Stack Development II:<br/>In this course, students will develop a full stack application that runs in the cloud. Through the application of cloud-based development principles and best practices, students will take their software stack from Full Stack Development I and utilize frameworks to build the cloud architecture upon which the software stack application will run. In addition, students will also demonstrate their career-readiness by articulating highly technical content to various audiences and in various formats. This course is the second course in a two-course sequence."
    },
    {
        id: 2,
        title: "Software Reverse Engineering",
        description: "Students will learn the basics of reverse engineering specific to software systems. Learn how reverse engineering is used to recreate missing documentation to support legacy software code. Examine how reverse engineering is used to make new software products, enhance the functionality and efficiency of software components, and recreate the code for applications. Apply fundamental reverse engineering technologies and practices for maintainability and security-related use cases."
    },
    {
        id: 3,
        title: "Secure Coding",
        description: "Students will focus on common security vulnerabilities that are found in software. Students will learn techniques and strategies to develop robust and secure code, leveraging secure programming principles. Students will gain authentic experience identifying security vulnerabilities and writing secure code to mitigate risks to software and frontendData."
    },
    {
        id: 4,
        title: "Emerging Sys Arch & Tech",
        description: "Students will explore emerging systems, architectures and technologies. Students will be provided with an in-depth evaluation of emerging system architecture focusing on performance and the software/hardware interface. Emphasis is on analyzing fundamental issues in architecture design and the impact on application performance to enable better understanding of the concepts. Students will learn to evaluate software architectures, both established and emerging, and gain experience in determining when to implement architectures and technologies to fulfill business needs."
    },
    {
        id: 5,
        title: "Mobile Arch & Programming",
        description: "Students will apply mobile development principles and best practices to develop mobile applications using user-centered design principles and industry standards. Upon completion of a fully-functional mobile application, students will conduct security, product assuredness, and compatibility checks before launching the application."
    },
    {
        id: 6,
        title: "DSA: Analysis and Design",
        description: "This course covers commonly used abstract frontendData structures such as lists, stacks, queues, trees and graphs. The implementation and time-space analysis of these frontendData structures is discussed in the context of recursion, sorting and searching algorithms."
    },
    {
        id: 7,
        title: "Client/Server Development",
        description: "Students will learn how to apply database systems concepts and principles to develop client/server applications that interface client-side code with databases."
    },
    {
        id: 8,
        title: "Software Testing, Automation, and Quality Assurance",
        description: "Students will apply software engineering testing strategies and practices as part of the software development lifecycle, including requirements analysis, verification and validation, and quality management. The creation of unit tests and analysis of various testing approaches will also be covered."
    },
    {
        id: 9,
        title: "Computational Graphics and Visualization",
        description: "Students will create realistic, interactive three-dimensional objects through the use of application programming interface (API) libraries and best practices. Students will also develop fully formed graphic applications that meet project requirements."
    },
    {
        id: 10,
        title: "UI/UX Design and Development",
        description: "Students will explore User Interface (UI) and User experience (UX) design concepts and development techniques with an emphasis on user-centric and contemporary design patterns and techniques. Students will learn to conduct and evaluate user testing to inform user experience design. Use a variety of software tools to create wireframes and visual prototypes. This course provides students with authentic experiences in designing and developing user interfaces for embedded, cloud-based, and mobile systems."
    },
    {
        id: 11,
        title: "Software Security",
        description: "Through the analysis of advanced security concepts, students will learn how to develop secure code that complies with security testing protocols. In addition to exploring and implementing security concepts through code, students will also learn why and how to apply encryption technologies and techniques to communicate securely."
    },
    {
        id: 12,
        title: "System Analysis and Design",
        description: "Students will explore the principles, methods, and techniques used in systems development so that they can create system models using appropriate industry tools. As a part of creating system models, students will also learn to effectively communicate technical concepts and design decisions to various audiences in a professional manner."
    },
    {
        id: 13,
        title: "Operating Platforms",
        description: "Students will develop a deeper understanding of operating platforms and architectures through the analysis and evaluation of the characteristics, advantages, and weaknesses of each. Students will learn the value of utilizing software design templates as well as how to utilize them to solve problems."
    },
    {
        id: 14,
        title: "Software Development Lifecycle",
        description: "Students will explore the stages of the Software Development Lifecycle (SDLC) through the lens of developers and testers to examine the characteristics, documentation, and purpose of each stage. Through applying SDLC stages within an agile development environment, students will learn the principles and best practices used to develop high quality software while also assessing the impact of communication, documentation, and ethics on the SDLC."
    },
    {
        id: 15,
        title: "Programming Languages",
        description: "Students will develop functional programs that comply with industry regulations and best practices using various programming languages. Special attention will be paid to the importance of developing code that is not only functional, but also secure, efficient, and professional."
    },
    {
        id: 16,
        title: "Foundation in Application Development",
        description: "Students will use programming as a problem-solving technique in business and engineering applications. In writing computer code in a logical, structured, and organized manner, students will learn how to incorporate the key concepts of object orientation into their programming. Additionally, students will learn to write, review, and document interactive applications and work with Software Development Kits and Integrated Development Environment tools."
    },
    {
        id: 17,
        title: "Introduction to Scripting",
        description: "Students will learn the fundamentals of programming concepts including frontendData types, variables, decision statements, loops, functions and file handling. By developing simple scripts, students will understand how to use common scripting language constructs including lists, literals, and regular expressions to build useful applications."
    },
    {
        id: 18,
        title: "Intro to Computer Science",
        description: "This course first introduces with the elementary concepts of computer science such as CPU, memory, I/O devices and binary number system. It then focuses on developing basic programming skills. The topics include input and output frontendData, frontendData types, control structures, functions/methods, arrays, procedural and object-oriented programming concepts, and program debugging and compilation."
    }
];
