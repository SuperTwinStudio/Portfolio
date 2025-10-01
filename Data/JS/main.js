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
            team: 'Team',
            localization: 'English',
            theme: 'Theme',
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
            team: 'Equipo',
            localization: 'Español',
            theme: 'Tema'
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

    //Buttons
    #home = document.getElementById('sidebar-home');
    #about = document.getElementById('sidebar-about');
    #team = document.getElementById('sidebar-team');
    #localization = document.getElementById('sidebar-localization');
    #theme = document.getElementById('sidebar-theme');

    localize = () => {
        this.#home.innerText = loc.sidebar.home;
        this.#about.innerText = loc.sidebar.about;
        this.#team.innerText = loc.sidebar.team;
        this.#localization.innerText = loc.sidebar.localization;
        this.#theme.innerText = loc.sidebar.theme;
    }

    //Constructor
    constructor() {
        new CurrentPageIndicator(['home', 'about', 'team']);
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
}

localize()



 /*$$$$$$$ /$$                                        
|__  $$__/| $$                                        
   | $$   | $$$$$$$   /$$$$$$  /$$$$$$/$$$$   /$$$$$$ 
   | $$   | $$__  $$ /$$__  $$| $$_  $$_  $$ /$$__  $$
   | $$   | $$  \ $$| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$
   | $$   | $$  | $$| $$_____/| $$ | $$ | $$| $$_____/
   | $$   | $$  | $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$
   |__/   |__/  |__/ \_______/|__/ |__/ |__/ \______*/

const theme = {
    dark: (DB.get('theme', 'dark', DB.STRING) == 'dark')
}

function toggleTheme() {
    //Toggle theme
    theme.dark = !theme.dark;
    loadTheme();

    //Close sidebar
    sidebar.toggle();

    //Give chievement
    if (theme.dark) achievements.give(Achievement.theme);
}

function loadTheme() {
    //Load theme
    if (theme.dark) {
        //Enable light
        DB.set('theme', 'dark', DB.STRING);
        document.documentElement.removeAttribute('light');
    } else {
        //Enable dark
        DB.set('theme', 'light', DB.STRING);
        document.documentElement.setAttribute('light', '');
    }
}

loadTheme()