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
        title: "Personal Site",
        summary: "You are already here, why are you looking at this?",
        description: "Why'd you click this? You already know what it is.",
        thumbnail: "/public/projects/thumbnails/personal-site.png",
        images: [],
        detailsUrl: "/secret-path/why-are-you-here",
        githubUrl: "https://github.com/Premo14/personal-site",
        tools: "",
        componentKey: "home"
    },
    {
        id: 2,
        title: "Spin The Ball",
        summary: "Just spin it, alright? Alright.",
        description: "Spin The Ball is a simple graphics project " +
            "using ThreeJS where you can click and drag a 3D ball " +
            "around to see how light affects it.",
        thumbnail: "/public/projects/thumbnails/spinTheBall.png",
        images: [],
        detailsUrl: "spin-the-ball",
        githubUrl: "https://github.com/Premo14/ThreeJsTutorial",
        tools: "JavaScript, HTML, CSS, ThreeJS, Gsap",
        componentKey: "spin-the-ball"
    },
    {
        id: 3,
        title: "todo App",
        summary: "Yes, there are much more useful apps on your phone.",
        description: "The todo App is an application where you can " +
            "add todos to a list and mark them as completed or " +
            "delete them.",
        thumbnail: "/public/projects/thumbnails/todoApp.png",
        images: [],
        detailsUrl: "todo-app",
        githubUrl: "https://github.com/Premo14/react-go-tutorial",
        tools: "Go, TypeScript/.tsx, HTML, CSS, React/Vite, MongoDB, Fiber, ChakraUI " +
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
        thumbnail: "/public/projects/thumbnails/jokesJokes.png",
        images: [
            "/public/projects/jokesApp/jokesDelete.png",
            "/public/projects/jokesApp/jokesEdit.png",
            "/public/projects/jokesApp/jokesDetails.png",
            "/public/projects/jokesApp/jokesLogin.png",
            "/public/projects/jokesApp/jokesRegister.png",
            "/public/projects/jokesApp/jokesSearch.png"
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
            "side sites for providing and manipulating data.",
        thumbnail: "/public/projects/thumbnails/travlr-app.png",
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
        thumbnail: "/public/projects/thumbnails/adk-tourism.png",
        images: [],
        detailsUrl: "adk-tourism-app",
        githubUrl: "https://github.com/Premo14/Totality-api",
        tools: "PHP, TypeScript, HTML, CSS, Kotlin, Laravel, Angular, " +
            "Android Studio, Docker",
        componentKey: ""
    },
]
