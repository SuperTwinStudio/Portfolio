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
            about: 'Game',
            images: 'Images',
            team: 'Team',
            contact: 'Contact',
            localization: 'English'
        },
        //Home
        home: {
            description: 'Very very cool game!',
        },
        //About
        about: {
            title: 'Washi & The Paper Kingdom',
            features: 'Features',
            feature: [
                'Procedural dungeon generation',
                'Multiple weapons to choose from',
                'Different enemies and bosses to combat',
                'Items that aleatorize the runs',
                'A very cute aesthetic'
            ],
            content: `
                <i><b>Washi & The Paper Kingdom</b></i> is an isometric extraction-roguelite action videogame set in a miniature fantasy kingdom.
                The game is centered on combat and the exploration of procedurally generated dungeons, where you explore rooms, find treasures, defeat enemies, and extract the loot found to sell it and buy upgrades.
                <br><br>
                The game follows the story of Hayashi, a kingdom where its inhabitants are made of a special type of paper that gives them character.
                The kingdom is kept safe by ancient magical scrolls (papyri) that maintain order.
                Hayashi's balance is threatened when the Cult of the Flame breaches the great gate and bursts into the town to steal the scrolls and kidnap Prince Kami, Washi's brother, to use him as a receptacle to resurrect Akarigami, a fearsome deity who intends to destroy the world.
                <br><br>
                Players will accompany the little Washi, an origami warrior whose goal is to free his brother from the clutches of the cult and recover the sacred scrolls to restore order to the kingdom and seal Akarigami.`
        },
        //Team
        team: {
            buddy1: 'Programmer',
            buddy2: 'Programmer',
            buddy3: '3D Artist',
            buddy4: '2D Artist',
            buddy5: 'Concept Artist',
            buddy6: 'Support'
        },
        //Footer
        footer: {
            title: "Contact"
        },
        //Presentation
        presentation: {
            title: 'HIIII!!!',
            content: "So coming from the presentation huh?<br><br>If you like the game, let us know by leaving a comment!"
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
            about: 'Juego',
            images: 'Imagenes',
            team: 'Equipo',
            contact: 'Contacto',
            localization: 'Español'
        },
        //Home
        home: {
            description: '¡Jueguito muy chulito!',
        },
        //About
        about: {
            title: 'Washi & The Paper Kingdom',
            features: 'Características',
            feature: [
                'Generación procedimental de mazmorras',
                'Multiples armas para elegir',
                'Diferentes enemigos y jefes para combatir',
                'Items que aleatorizan las runs',
                'Una estética muy mona'
            ],
            content: `
                <i><b>Washi & The Paper Kingdom</b></i> es un videojuego de acción de género extraction-roguelite en perspectiva isométrica ambientado en un reino fantástico en miniatura. 
                El juego está centrado en el combate y en la exploración de mazmorras generadas procedimentalmente, donde se exploran salas, encuentran tesoros, derrotan enemigos y extrae el botín encontrado para venderlo y comprar mejoras.
                <br><br>
                El juego sigue la historia de Hayashi, un reino donde sus habitantes están hechos de un tipo de papel especial que les otorga carácter. 
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
            buddy6: 'Soporte'
        },
        //Footer
        footer: {
            title: "Contacto"
        },
        //Presentation
        presentation: {
            title: 'HOLAAA!!!',
            content: "Conque vienes de la presentación eh?<br><br>¡Si te gusta el juego haznoslo saber dejando un comentario!"
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
    #images = document.getElementById('sidebar-images');
    #team = document.getElementById('sidebar-team');
    #footer = document.getElementById('sidebar-footer');
    #localization = document.getElementById('sidebar-localization');

    constructor() {
        new CurrentPageIndicator(['home', 'about', 'images', 'team', 'footer']);
    }

    localize = () => {
        this.#home.innerText = loc.sidebar.home;
        this.#about.innerText = loc.sidebar.about;
        this.#images.innerText = loc.sidebar.images;
        this.#team.innerText = loc.sidebar.team;
        this.#footer.innerText = loc.sidebar.contact;
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
        this.#title.innerText = loc.about.title;
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


 /*$$$$$
|_  $$_/
  | $$   /$$$$$$/$$$$   /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$
  | $$  | $$_  $$_  $$ |____  $$ /$$__  $$ /$$__  $$ /$$_____/
  | $$  | $$ \ $$ \ $$  /$$$$$$$| $$  \ $$| $$$$$$$$|  $$$$$$
  | $$  | $$ | $$ | $$ /$$__  $$| $$  | $$| $$_____/ \____  $$
 /$$$$$$| $$ | $$ | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$ /$$$$$$$/
|______/|__/ |__/ |__/ \_______/ \____  $$ \_______/|_______/
                                 /$$  \ $$
                                |  $$$$$$/
                                 \_____*/

class Images {

    //Components
    #background = document.getElementById('images');

    //Items
    #itemsParent = document.getElementById('imagesItems');
    #items = []
    #images = [
        '0.webp',
        '1.webp',
        '2.webp',
        '3.webp',
        '4.webp',
    ]
    #current = 0


    //State
    constructor() {
        //Add arrow events
        document.getElementById('imagesArrowPrevious').onclick = this.previous;
        document.getElementById('imagesArrowNext').onclick = this.next;

        //Create image previews
        for (let i = 0; i < this.#images.length; i++) {
            const item = document.createElement('img');
            item.classList.add('imagesItem');
            item.src = `Data/Images/Carousel/${this.#images[i]}`;
            item.onclick = () => this.select(i);
            this.#itemsParent.appendChild(item);
            this.#items.push(item);
        }

        //Select first
        this.select(0);
    }

    localize = () => {}

    //Navigation
    previous = () => {
        this.select(this.#current > 0 ? this.#current - 1 : this.#images.length - 1);
    }

    next = () => {
        this.select(this.#current < this.#images.length - 1 ? this.#current + 1 : 0);
    }

    select = (index) => {
        this.#items[this.#current].removeAttribute('selected');
        this.#current = index;
        this.#items[this.#current].setAttribute('selected', '');
        this.#background.style.setProperty('--image', `url('../Images/Carousel/${this.#images[index]}')`);
    }

}

const images = new Images();

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
            img: 'Data/Images/Team/mar.webp',
            name: 'Mar'
        },
        {
            idx: 5,
            img: 'Data/Images/Team/sara.webp',
            name: 'Sara'
        },
        {
            idx: 6,
            img: 'Data/Images/Team/carlos.png',
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


 /*$$$$$$                                                     /$$                 /$$     /$$                    
| $$__  $$                                                   | $$                | $$    |__/                    
| $$  \ $$ /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$  /$$$$$$$  /$$$$$$    /$$$$$$  /$$$$$$   /$$  /$$$$$$  /$$$$$$$ 
| $$$$$$$//$$__  $$ /$$__  $$ /$$_____/ /$$__  $$| $$__  $$|_  $$_/   |____  $$|_  $$_/  | $$ /$$__  $$| $$__  $$
| $$____/| $$  \__/| $$$$$$$$|  $$$$$$ | $$$$$$$$| $$  \ $$  | $$      /$$$$$$$  | $$    | $$| $$  \ $$| $$  \ $$
| $$     | $$      | $$_____/ \____  $$| $$_____/| $$  | $$  | $$ /$$ /$$__  $$  | $$ /$$| $$| $$  | $$| $$  | $$
| $$     | $$      |  $$$$$$$ /$$$$$$$/|  $$$$$$$| $$  | $$  |  $$$$/|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$
|__/     |__/       \_______/|_______/  \_______/|__/  |__/   \___/   \_______/   \___/  |__/ \______/ |__/  |_*/

class PresentationMenu {

    //Menu
    #menu = document.getElementById('presentationMenu');
    #title = document.getElementById('presentationMenuTitle');
    #content = document.getElementById('presentationMenuContent');

    toggleMenu = () => {
        //Toggle menu
        if (this.#menu.open) {
            //Close
            this.#menu.close();
            Util.toggleScroll(true);
        } else {
            //Open
            this.#menu.showModal();
            Util.toggleScroll(false);
        }
    }

    localize = () => {
        this.#title.innerText = loc.presentation.title;
        this.#content.innerHTML = loc.presentation.content;
    }

    constructor() {
        //Close menu listener
        Util.onDialogBackdropClick(this.#menu, this.toggleMenu);
    }

}

const presentation = new PresentationMenu();

if (window.location.search === '?presentation') presentation.toggleMenu();


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
    images.localize();
    team.localize();
    footer.localize();

    //Menus
    presentation.localize();
}

localize()