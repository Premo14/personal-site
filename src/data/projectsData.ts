export interface Project {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    images: string[];
    detailsUrl: string;
    githubUrl: string;
    tools: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Spin The Ball",
        description: "Spin the ball is a simple ThreeJS project where you " +
            "click and drag a ball around, changing the orientation and" +
            " seeing how light hits its surface.",
        thumbnail: "/public/projects/thumbnails/spinTheBall.png",
        images: [],
        detailsUrl: "spin-the-ball",
        githubUrl: "https://github.com/Premo14/ThreeJsTutorial",
        tools: "JavaScript, HTML, CSS, Three.JS, Gsap"
    },
    {
        id: 2,
        title: "Todo App",
        description: "The Todo App is a simple application that displays a " +
            "list of todos and allows data manipulation over its properties. " +
            "The backend is built in Go and uses MongoDB.",
        thumbnail: "/public/projects/thumbnails/todoApp.png",
        images: [],
        detailsUrl: "todo-app",
        githubUrl: "https://github.com/Premo14/react-go-tutorial",
        tools: "Go, TypeScript/.tsx, HTML, CSS, React/Vite, MongoDB, Fiber, ChakraUI " +
            "ESLint"
    },
    {
        id: 3,
        title: "Jokes App",
        description: "The Jokes App is a web app where jokes displayed and " +
            "CRUD operations can be made on the jokes. A functional login " +
            "service has also been implemented. This project is built using " +
            "C# ASP.NET CORE and SQLite.",
        thumbnail: "/public/projects/thumbnails/jokesJokes.png",
        images: [
            "/public/projects/jokesApp/jokesDelete.png",
            "/public/projects/jokesApp/jokesEdit.png",
            "/public/projects/jokesApp/jokesDelete.png",
            "/public/projects/jokesApp/jokesDetails.png",
            "/public/projects/jokesApp/jokesLogin.png",
            "/public/projects/jokesApp/jokesRegister.png",
            "/public/projects/jokesApp/jokesSearch.png"
        ],
        detailsUrl: "jokes-app",
        githubUrl: "https://github.com/Premo14/JokesApp/tree/main",
        tools: "C#, ASP.NET, HTML, CSS, Razor, SQLite, Entity, MVC, Bootstrap"
    },
    {
        id: 4,
        title: "Travlr App",
        description: "The Travlr App was a college project that acted as a " +
            "mock travel agency website. The project was built on MEAN stack " +
            "and has client/server side sites for providing and manipulating " +
            "data.",
        thumbnail: "/public/projects/thumbnails/travlr-app.png",
        images: [],
        detailsUrl: "travlr-app",
        githubUrl: "https://github.com/Premo14/cs465-fullstack/tree/project",
        tools: "JavaScript, HTML, CSS, MongoDB, Express, Angular, Node.JS, " +
            "Handlebars"
    },
    {
        id: 5,
        title: "Adirondack Tourism App",
        description: "The Adirondack Tourism App was a mobile application was" +
            "initially designed to be for the total eclipse of 2024. The app " +
            "has since been repurposed to become a tourism app for the " +
            "adirondack region of NY.",
        thumbnail: "/public/projects/thumbnails/adk-tourism.png",
        images: [],
        detailsUrl: "adk-tourism-app",
        githubUrl: "https://github.com/Premo14/Totality-api",
        tools: "PHP, TypeScript, HTML, CSS, Kotlin, Laravel, Angular, " +
            "Android Studio, Docker"
    },
]
