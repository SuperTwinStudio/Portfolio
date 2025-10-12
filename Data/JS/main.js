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
        //Home
        home: {
            description: 'Very very cool game!',
        },
        //About
        about: {
            features: 'Features',
            feature: [
                'Procedural dungeon generation',
                'Multiple weapons to choose from',
                'Different enemies and bosses to combat'
            ],
            content: `Hayashi is a kingdom whose inhabitants are made of a special type of paper that gives them character. 
                The kingdom is kept safe by ancient magical scrolls that maintain order. 
                The balance of Hayashi is threatened when the Cult of the Flame breaks down the great gate and breaks into the village to steal the scrolls and kidnap Prince Kami, Washi's brother, to use him as a vessel to resurrect Akarigami, a fearsome deity intent on destroying the world.
                <br><br>
                Players will accompany little Washi, an origami warrior whose goal is to free his brother from the clutches of the cult and recover the sacred scrolls to restore order to the kingdom and seal Akarigami away.`
        },
        //Team
        team: {
            buddy1: 'Programmer',
            buddy2: 'Programmer',
            buddy3: '3D Artist',
            buddy4: '2D Artist',
            buddy5: 'Concept Artist',
            buddy6: 'Programmer'
        },
        //Footer
        footer: {
            title: "Contact"
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
        //Home
        home: {
            description: '¡Jueguito muy chulito!',
        },
        //About
        about: {
            features: 'Características',
            feature: [
                'Generación procedimental de mazmorras',
                'Multiples armas para elegir',
                'Diferentes enemigos y jefes para combatir'
            ],
            content: `Hayashi es un reino cuyos habitantes están hechos de un tipo de papel especial que les otorga carácter. 
                El reino se mantiene a salvo gracias a unos ancestrales papiros mágicos que mantienen el orden. 
                El equilibrio de Hayashi se ve amenazado cuando el Culto de la Llama quebranta la gran puerta e irrumpe en el pueblo para robar los papiros y secuestrar al príncipe Kami, hermano de Washi, para emplearlo como receptáculo y resucitar a Akarigami, una deidad temible que pretende destruir el mundo. 
                <br><br>
                Los jugadores acompañarán al pequeño Washi, un guerrero origami cuyo objetivo es liberar a su hermano de las garras del culto y recuperar los papiros sagrados para devolver el orden al reino y sellar a Akarigami.`
        },
        //Team
        team: {
            buddy1: 'Programador',
            buddy2: 'Programador',
            buddy3: 'Artista 3D',
            buddy4: 'Artista 2D',
            buddy5: 'Artista de Concept',
            buddy6: 'Programmer'
        },
        //Footer
        footer: {
            title: "Contacto"
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
    #description = document.getElementById('homeDescription');

    constructor() {}

    localize = () => {
        this.#description.innerText = loc.home.description;
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
    #content = document.getElementById('aboutContent');
    #features = document.getElementById('aboutFeatures');

    localize = () => {
        this.#title.innerText = loc.sidebar.about;
        this.#content.innerHTML = loc.about.content;
        this.#features.innerText = loc.about.features;
        for (let i = 0; i < loc.about.feature.length; i++) {
            const element = document.getElementById(`aboutFeature${i}`);
            const feature = loc.about.feature[i];
            element.innerText = feature;
        }
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
            img: 'Data/Images/Team/alex.webp',
            name: 'Alex'
        },
        {
            idx: 2,
            img: 'Data/Images/Team/pablo.webp',
            name: 'Pablo'
        },
        {
            idx: 3,
            img: 'Data/Images/Team/raul.webp',
            name: 'Raúl'
        },
        {
            idx: 4,
            img: 'Data/Images/favicon.png',
            name: 'Mar'
        },
        {
            idx: 5,
            img: 'Data/Images/Team/sara.webp',
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


 /*$$$$$$$                    /$$
| $$_____/                   | $$
| $$     /$$$$$$   /$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$
| $$$$$ /$$__  $$ /$$__  $$|_  $$_/   /$$__  $$ /$$__  $$
| $$__/| $$  \ $$| $$  \ $$  | $$    | $$$$$$$$| $$  \__/
| $$   | $$  | $$| $$  | $$  | $$ /$$| $$_____/| $$
| $$   |  $$$$$$/|  $$$$$$/  |  $$$$/|  $$$$$$$| $$
|__/    \______/  \______/    \___/   \_______/|_*/

class Footer {

    //State
    #title = document.getElementById('footerTitle');

    constructor() {}

    localize = () => {
        this.#title.innerText = loc.footer.title;
    }

}

const footer = new Footer();


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
    footer.localize();
}

localize()