export const projects = [
    {
        id: '1',
        img: require('../assets/angleon.png'),
        name: 'Angle On',
        stack: 'React | JavaScript | Material UI | PostgreSQL | AWS S3 | Google Oauth | HTML | CSS | Node.js',
        description: "This fullstack app was built in a 10-day remote sprint. My team and I created a tool for underrepresented filmmakers to showcase their work and receive donations to help fund their short films. Our fullstack app integrated OAuth to utilize Google's authentication process and create a seamless login experience. Images were hosted on AWS in an S3 bucket and the URLs were stored in our relational database. As a member of the back-end team, I built many features on the server-side of our app. I implemented the separation of concerns principle to build a modular architecture, which includes a model layer for our static functions, a service layer for our user verification, and a controllers layer for our CRUD routes. I built our data modeling, AWS functionality and contributed to the OAuth.",
        github: 'https://github.com/Angle-On',
        deployed: 'https://dazzling-heyrovsky-02bd75.netlify.app/',
    },
    {
        id: '2',
        img: require('../assets/destinare.png'),
        name: 'Destinare',
        stack: 'React | JavaScript | HTML | CSS | Node.js',
        description: 'A proxy server chrome extension that hits multiple APIs using just one endpoint to return weather data, national parks data, events data and a list of restaurants for a given city. Checkout the Destinare organization for the Chrome extension and backend code.',
        github: 'https://github.com/Destinare/destinare-fe',
        deployed: 'https://destinare-fe.herokuapp.com/',
    },
    {
        id: '3',
        img: require('../assets/whatllyahave.png'),
        name: "What'll ya have?",
        stack: 'React | JavaScript | PostgreSQL | HTML | CSS | Node.js',
        description: 'This application is designed to help people make cocktails! Users will be able to search cocktails by name or ingredient and see a list of the ingredients, measurements, and a description of how to make them. As an added bonus they will be able to get a random cocktail!',
        github: 'https://github.com/team-cocktails/cocktails-project-client',
        deployed: 'https://xenodochial-mcclintock-cdfcd8.netlify.app/',
    },
    {
        id: '4',
        img: require('../assets/resty.png'),
        name: 'Resty',
        stack: 'React | JavaScript | HTML | CSS | Node.js',
        description: 'RESTy is a fronted application that allows the user to access CRUD routes on an API. The user selects a route, adds JSON (if needed) and presses the Go! button. The response is displayed along with a history of activity.',
        github: 'https://github.com/JosieMCantu/resty-app/tree/dev',
        deployed: 'https://resty-app-fe.netlify.app/',
    },
    {
        id: '5',
        img: require('../assets/toadally.png'),
        name: 'Toadally Legit Quiz',
        stack: 'React | JavaScript | Supabase | HTML | Tailwind CSS | Node.js',
        description: 'What is your new favorite hobby? Come find out with this super accurate, highly scientific quiz. Once you find your spirit sad frog, learn about all the new hoppys you can try with all of your new froggy friends. Then post your results on Twitter to expand your chorus of frogs! Toadally Legit was an app built over a 24-hour period during the 2021 Road to Code Hackathon, Powered by Driveway and Hosted by Alchemy. The app was build with React, Context API, TailwindCSS, and hosted on Netlify. We wanted to build a fun, interactive quiz that would help bring people together and encourage them to try out new hobbies in a new, totally scientific way.',
        github: 'https://github.com/The-Road-to-Code/Toadally-Legit-Quiz',
        deployed: 'https://toadally-legit-quiz.netlify.app/',
    },
];