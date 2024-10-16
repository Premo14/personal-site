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
        description: "Click or tap to flap your wings and fly through the gaps between the pipes. Don't hit the pipes or the ground!",
        thumbnail: "/miniGames/thumbnails/flappy-bird.png",
        githubUrl: "https://github.com/Premo14/personal-site/tree/main/react/src/components/projects/miniGames/flappyBird",
        detailsUrl: "flappy-bird",
        componentKey: "flappy-bird",
    },
]