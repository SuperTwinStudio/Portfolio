 /*$      /$$           /$$          
| $$$    /$$$          |__/          
| $$$$  /$$$$  /$$$$$$  /$$ /$$$$$$$ 
| $$ $$/$$ $$ |____  $$| $$| $$__  $$
| $$  $$$| $$  /$$$$$$$| $$| $$  \ $$
| $$\  $ | $$ /$$__  $$| $$| $$  | $$
| $$ \/  | $$|  $$$$$$$| $$| $$  | $$
|__/     |__/ \_______/|__/|__/  |_*/

//Localization keys
const locales = {
    en: {
        //Locale
        key: 'en',
        //Page
        title: "Twin Studio",
        //Sidebar
        sidebar: {
            home: 'Home',
            about: 'Our Game',
            team: 'Our Team',
            localization: 'English'
        },
        //About
        about: {
            features: 'Features'
        },
        //Team
        team: {
            buddy1: 'Programmer',
            buddy2: 'Programmer',
            buddy3: '3D Artist',
            buddy4: '2D Artist',
            buddy5: 'Concept Artist',
            buddy6: 'Aditional Support'
        }
    }, 
    es: {
        //Locale
        key: 'es',
        //Page
        title: "Twin Studio",
        //Sidebar
        sidebar: {
            home: 'Inicio',
            about: 'Nuestro Juego',
            team: 'Nuestro Equipo',
            localization: 'Español'
        },
        //About
        about: {
            features: 'Características'
        },
        //Team
        team: {
            buddy1: 'Programador',
            buddy2: 'Programador',
            buddy3: 'Artista 3D',
            buddy4: 'Artista 2D',
            buddy5: 'Artista de Concept',
            buddy6: 'Soporte Adicional'
        }
    }
}

let loc = locales.en;

//Appear animation manager
const animator = new AppearAnimation();

//Sidebar
class Sidebar {

    //Sidebar
    #sidebar = document.getElementById('sidebar');

    toggle = (toggle) => {
        //Fix toggle
        if (typeof toggle !== 'boolean') toggle = !this.#sidebar.hasAttribute('open');

        //Toggle sidebar
        if (toggle) {
            this.#sidebar.setAttribute('open', '');
            document.body.setAttribute('sidebar', '');
        } else {
            this.#sidebar.removeAttribute('open');
            document.body.removeAttribute('sidebar', '');
        }
    }

    //State
    #home = document.getElementById('sidebar-home');
    #about = document.getElementById('sidebar-about');
    #team = document.getElementById('sidebar-team');
    #localization = document.getElementById('sidebar-localization');

    constructor() {
        new CurrentPageIndicator(['home', 'about', 'team']);
    }

    localize = () => {
        this.#home.innerText = loc.sidebar.home;
        this.#about.innerText = loc.sidebar.about;
        this.#team.innerText = loc.sidebar.team;
        this.#localization.innerText = loc.sidebar.localization;
    }

}

const sidebar = new Sidebar();

//Navigation
function goTo(id) {
    //Scroll to element
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });

    //Close sidebar
    sidebar.toggle(false);
}



 /*$   /$$                                  
| $$  | $$                                  
| $$  | $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$ 
| $$$$$$$$ /$$__  $$| $$_  $$_  $$ /$$__  $$
| $$__  $$| $$  \ $$| $$ \ $$ \ $$| $$$$$$$$
| $$  | $$| $$  | $$| $$ | $$ | $$| $$_____/
| $$  | $$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
|__/  |__/ \______/ |__/ |__/ |__/ \______*/

class Home {

    //State
    #title = document.getElementById('homeTitle');

    constructor() {
        
    }

    localize = () => {
        this.#title.innerText = loc.sidebar.home;
    }

}

const home = new Home();



  /*$$$$$  /$$                             /$$
 /$$__  $$| $$                            | $$
| $$  \ $$| $$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$
| $$$$$$$$| $$__  $$ /$$__  $$| $$  | $$|_  $$_/
| $$__  $$| $$  \ $$| $$  \ $$| $$  | $$  | $$
| $$  | $$| $$  | $$| $$  | $$| $$  | $$  | $$ /$$
| $$  | $$| $$$$$$$/|  $$$$$$/|  $$$$$$/  |  $$$$/
|__/  |__/|_______/  \______/  \______/    \__*/

class About {

    //State
    #title = document.getElementById('aboutTitle');
    #features = document.getElementById('aboutFeatures');

    localize = () => {
        this.#title.innerText = loc.sidebar.about;
        this.#features.innerText = loc.about.features;
    }

}

const about = new About();


 /*$$$$$$$
|__  $$__/
   | $$  /$$$$$$   /$$$$$$  /$$$$$$/$$$$
   | $$ /$$__  $$ |____  $$| $$_  $$_  $$
   | $$| $$$$$$$$  /$$$$$$$| $$ \ $$ \ $$
   | $$| $$_____/ /$$__  $$| $$ | $$ | $$
   | $$|  $$$$$$$|  $$$$$$$| $$ | $$ | $$
   |__/ \_______/ \_______/|__/ |__/ |_*/

class Team {

    //Buddies
    buddies = [
        {
            idx: 1,
            img: 'Data/Images/favicon.png',
            name: 'Alex'
        },
        {
            idx: 2,
            img: 'Data/Images/favicon.png',
            name: 'Raúl'
        },
        {
            idx: 3,
            img: 'Data/Images/favicon.png',
            name: 'Pablo'
        },
        {
            idx: 4,
            img: 'Data/Images/favicon.png',
            name: 'Mar'
        },
        {
            idx: 5,
            img: 'Data/Images/favicon.png',
            name: 'Sara'
        },
        {
            idx: 6,
            img: 'Data/Images/favicon.png',
            name: 'Carlos'
        }
    ]

    eachbuddy(fun) {
        for (let i = 1; i <= this.buddies.length; i++) fun(this.buddies[i - 1], i);
    }

    //State
    #title = document.getElementById('teamTitle');

    constructor() {
        //Shuffle buddies
        Util.shuffleArray(this.buddies);

        //Apply info to buddies
        this.eachbuddy((buddy, index) => {
            const img = document.getElementById(`teamBuddy${index}-img`);
            const name = document.getElementById(`teamBuddy${index}-name`);

            img.src = buddy.img;
            name.innerText = buddy.name;
        });
    }

    localize = () => {
        this.#title.innerText = loc.sidebar.team;
        this.eachbuddy((buddy, index) => {
            const desc = document.getElementById(`teamBuddy${index}-desc`);
            desc.innerText = loc.team[`buddy${buddy.idx}`]
        });
    }

}

const team = new Team();


 /*$                                     /$$ /$$                       /$$     /$$                    
| $$                                    | $$|__/                      | $$    |__/                    
| $$        /$$$$$$   /$$$$$$$  /$$$$$$ | $$ /$$ /$$$$$$$$  /$$$$$$  /$$$$$$   /$$  /$$$$$$  /$$$$$$$ 
| $$       /$$__  $$ /$$_____/ |____  $$| $$| $$|____ /$$/ |____  $$|_  $$_/  | $$ /$$__  $$| $$__  $$
| $$      | $$  \ $$| $$        /$$$$$$$| $$| $$   /$$$$/   /$$$$$$$  | $$    | $$| $$  \ $$| $$  \ $$
| $$      | $$  | $$| $$       /$$__  $$| $$| $$  /$$__/   /$$__  $$  | $$ /$$| $$| $$  | $$| $$  | $$
| $$$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$| $$ /$$$$$$$$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$
|________/ \______/  \_______/ \_______/|__/|__/|________/ \_______/   \___/  |__/ \______/ |__/  |_*/

//Recover saved locale & load it
switch (DB.get('locale', 'none', DB.STRING)) {
    //Nothing saved
    case 'none':
        //Check device language
        const deviceLanguage = navigator.language;

        //Device is not in spanish
        if (deviceLanguage.startsWith('es')) loc = locales.es;

        //Save locale
        DB.set('locale', loc.key);
        break;

    //English saved
    case 'en':
        loc = locales.en;
        break;

    //Spanish saved
    case 'es':
        loc = locales.es;
        break;
}

//Localization functions
function swapLocale() {
    //Get new locale key
    const newKey = loc.key == 'es' ? 'en' : 'es';

    //Load new locale
    DB.set('locale', newKey);
    loc = locales[newKey];

    //Hide sidebar & localize page
    sidebar.toggle(false);
    localize();
}

function localize() {
    //Sidebar
    sidebar.localize();

    //Pages
    home.localize();
    about.localize();
    team.localize();
}

localize()