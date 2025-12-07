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
            about: 'Washi',
            images: 'Screenshots',
            team: 'Team',
            projects: 'Projects',
            contact: 'Contact',
            localization: 'English'
        },
        //Home
        home: {
            description: 'Very very cool games!',
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
                Players will accompany the little Washi, an origami warrior whose goal is to free his brother from the clutches of the cult and recover the sacred scrolls to restore order to the kingdom and seal Akarigami.`,
            images: 'Check out some screenshots!'
        },
        //Team
        team: {
            alex: 'Programmer, SFX Designer, UI/UX Designer',
            racu: '3D Artist',
            pablo: 'Programmer, 2D Artist',
            mar: '3D Artist, UX designer',
            sara: 'Concept Artist, 2D Artist, UI Designer',
            carlos: 'Additional Support'
        },
        //Projects
        projects: {
            title: 'Other Projects',
            list: {
                tochimochi: {
                    title: 'Tochimochi',
                    content: `
                        Second place in the international edition of the <a href="https://itch.io/jam/game-jam-internacional-cutn-buenos-aires" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Tochimochi you will help your new virtual friend, Mochi, complete the mission of seeing his granny. To do that, you will have to merge both the real and virtual world to complete puzzles using your computer and your phone.
                    `,
                    button: 'Download&nbsp<i>Tochimochi</i>'
                },
                hardcore_kitty: {
                    title: 'Hardcore Kitty',
                    content: `
                        Third place in the 6º edition of the <a href="https://itch.io/jam/6-edicin-game-jam-game-scholars" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Hardcore Kitty, you play as a cat working for a delivery company.
                        <br><br>
                        Your goal is to find pickup points, collect food, and deliver it to the drop-off points, performing tricks and flips on your skateboard along the way.
                    `,
                    button: 'Download&nbsp<i>Hardcore Kitty</i>'
                },
                raccoon: {
                    title: 'Esto AÚN no es un Juego',
                    content: `
                        Winner of the 3º edition of the <a href="https://itch.io/jam/gamescholars-3rd-edition" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Esto AÚN no es un juego you will help a programer raccoon finish his game before his gamejam ends.
                        <br><br>
                        Due to the little time he has left, to achieve this you will have to go inside the game and fix bugs from there.
                        <br><br>
                        Your mission will be to change how things work, so that you are able to get to each level's ending and continue to the next.
                    `,
                    button: 'Download&nbsp<i>Esto AÚN no es un Juego</i>'
                },
                spyw4re: {
                    title: 'Spyw4re',
                    content: `
                        Second place out of 25 in the 5º edition of the <a href="https://itch.io/jam/5-edicin-game-jam-game-scholars" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Spyw4re, you are a CCTV operator in an asylum. The building is falling down and a patient is still inside, so you'll need to help him get out.
                        <br><br>
                        In order to leave, you'll need to solve some puzzles and defeat some enemies, but don't think it will be that easy, someone doesn't want you to help him...
                    `,
                    button: 'Download&nbsp<i>Spyw4re</i>'
                }
            }
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
            about: 'Washi',
            images: 'Capturas',
            team: 'Equipo',
            projects: 'Proyectos',
            contact: 'Contacto',
            localization: 'Español'
        },
        //Home
        home: {
            description: '¡Jueguitos muy chulitos!',
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
                Los jugadores acompañarán al pequeño Washi, un guerrero origami cuyo objetivo es liberar a su hermano de las garras del culto y recuperar los papiros sagrados para devolver el orden al reino y sellar a Akarigami.`,
            images: '¡Chequea algunas capturas!'
        },
        //Team
        team: {
            alex: 'Programador, Diseñador de SFX, Diseñador de UI/UX',
            racu: 'Artista 3D',
            pablo: 'Programador, Artista 2D',
            mar: 'Artista 3D, Diseñadora de UX',
            sara: 'Artista de Concept, Artista 2D, Diseñadora de UI',
            carlos: 'Soporte Adicional'
        },
        //Projects
        projects: {
            title: 'Otros Proyectos',
            list: {
                tochimochi: {
                    title: 'Tochimochi',
                    content: `
                        Segundo puesto en la edicion international de la <a href="https://itch.io/jam/game-jam-internacional-cutn-buenos-aires" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Tochimochi ayudarás a tu nuevo amigo virtual, Mochi, a completar la misión de ver a su abuela. Para ello, tendrás que combinar el mundo real con el virtual para resolver puzles usando tu ordenador y tu móvil.
                    `,
                    button: 'Descargar&nbsp<i>Tochimochi</i>'
                },
                hardcore_kitty: {
                    title: 'Hardcore Kitty',
                    content: `
                        Tercer puesto en la 6º edicion de la <a href="https://itch.io/jam/6-edicin-game-jam-game-scholars" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Hardcore Kitty tomarás el rol de un gato que trabaja en una empresa de reparto.
                        <br><br>
                        Tu objetivo es encontrar puntos de recogida, coger la comida y llevarla hasta los puntos de entrega haciendo trucos y piruetas con el skate por el camino.
                    `,
                    button: 'Descargar&nbsp<i>Hardcore Kitty</i>'
                },
                raccoon: {
                    title: 'Esto AÚN no es un Juego',
                    content: `
                        Ganador de la 3º edicion de la <a href="https://itch.io/jam/gamescholars-3rd-edition" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Esto AÚN no es un juego ayudarás a un mapache programador a terminar su juego antes de que acabe su gamejam.
                        <br><br>
                        Debido al poco tiempo que le queda, para conseguirlo tendrás que meterte dentro de este y arreglar los bugs desde su interior.
                        <br><br>
                        Desde allí tu misión será cambiar cómo funcionan las cosas, de manera que se pueda llegar hasta el final de cada nivel y así continuar hasta el siguiente.
                    `,
                    button: 'Descargar&nbsp<i>Esto AÚN no es un Juego</i>'
                },
                spyw4re: {
                    title: 'Spyw4re',
                    content: `
                        Segundo puesto de 25 en la 5º edicion de la <a href="https://itch.io/jam/5-edicin-game-jam-game-scholars" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Spyw4re, eres un operador de CCTV en un asilo. El edificio se está derrumbando y un paciente todavía está dentro, por lo que tendrás que ayudarlo a salir.
                        <br><br>
                        Para lograrlo, tendrás que resolver algunos acertijos y derrotar a algunos enemigos, pero no creas que será tan fácil, alguien no quiere que lo ayudes...
                    `,
                    button: 'Descargar&nbsp<i>Spyw4re</i>'
                }
            }
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
    #projects = document.getElementById('sidebar-projects');
    #footer = document.getElementById('sidebar-footer');
    #localization = document.getElementById('sidebar-localization');

    constructor() {
        new CurrentPageIndicator(['home', 'about', 'images', 'team', 'projects', 'footer']);
    }

    localize = () => {
        this.#home.innerText = loc.sidebar.home;
        this.#about.innerText = loc.sidebar.about;
        this.#images.innerText = loc.sidebar.images;
        this.#team.innerText = loc.sidebar.team;
        this.#projects.innerText = loc.sidebar.projects;
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

class HomePage {

    //State
    #description = document.getElementById('homeDescription');

    constructor() {}

    localize = () => {
        this.#description.innerText = loc.home.description;
    }

}

const home = new HomePage();



  /*$$$$$  /$$                             /$$
 /$$__  $$| $$                            | $$
| $$  \ $$| $$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$
| $$$$$$$$| $$__  $$ /$$__  $$| $$  | $$|_  $$_/
| $$__  $$| $$  \ $$| $$  \ $$| $$  | $$  | $$
| $$  | $$| $$  | $$| $$  | $$| $$  | $$  | $$ /$$
| $$  | $$| $$$$$$$/|  $$$$$$/|  $$$$$$/  |  $$$$/
|__/  |__/|_______/  \______/  \______/    \__*/

class AboutPage {

    //State
    #title = document.getElementById('aboutTitle');
    #content = document.getElementById('aboutContent');
    #features = document.getElementById('aboutFeatures');
    #images = document.getElementById('aboutImages');

    localize = () => {
        this.#title.innerText = loc.about.title;
        this.#content.innerHTML = loc.about.content;
        this.#features.innerText = loc.about.features;
        for (let i = 0; i < loc.about.feature.length; i++) {
            const element = document.getElementById(`aboutFeature${i}`);
            const feature = loc.about.feature[i];
            element.innerText = feature;
        }
        this.#images.innerText = loc.about.images;
    }

}

const about = new AboutPage();


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

class ImagesPage {

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

const images = new ImagesPage();

 /*$$$$$$$
|__  $$__/
   | $$  /$$$$$$   /$$$$$$  /$$$$$$/$$$$
   | $$ /$$__  $$ |____  $$| $$_  $$_  $$
   | $$| $$$$$$$$  /$$$$$$$| $$ \ $$ \ $$
   | $$| $$_____/ /$$__  $$| $$ | $$ | $$
   | $$|  $$$$$$$|  $$$$$$$| $$ | $$ | $$
   |__/ \_______/ \_______/|__/ |__/ |_*/

const Buddies = {
    Alex: {
        id: 'alex',
        image: 'Data/Images/Team/alex.webp',
        name: 'Alex',
        button: {
            name: 'Portfolio',
            url: 'https://botpa.vercel.app/'
        }
    },
    Raul: {
        id: 'racu',
        image: 'Data/Images/Team/raul.webp',
        name: 'Raúl',
        button: {
            name: 'Itch.io',
            url: 'https://racurrandom.itch.io/'
        }
    },
    Pablo: {
        id: 'pablo',
        image: 'Data/Images/Team/pablo.webp',
        name: 'Pablo',
        button: {
            name: 'Itch.io',
            url: 'https://thatbit.itch.io/'
        }
    },
    Mar: {
        id: 'mar',
        image: 'Data/Images/Team/mar.webp',
        name: 'Mar',
        button: {
            name: 'Itch.io',
            url: 'https://mar-tess.itch.io/'
        }
    },
    Sara: {
        id: 'sara',
        image: 'Data/Images/Team/sara.webp',
        name: 'Sara',
        button: {
            name: 'Itch.io',
            url: 'https://sararb.itch.io/'
        }
    },
    Carlos: {
        id: 'carlos',
        image: 'Data/Images/Team/carlos.png',
        name: 'Carlos'
    }
}

class TeamPage {

    //Buddies
    #buddies = [
        Buddies.Alex,
        Buddies.Raul,
        Buddies.Pablo,
        Buddies.Mar,
        Buddies.Sara,
        Buddies.Carlos
    ];

    eachbuddy = (fun) => {
        for (let i = 0; i < this.#buddies.length; i++) fun(this.#buddies[i], i);
    }

    //State
    #title = document.getElementById('teamTitle');

    constructor() {
        //Shuffle buddies
        Util.shuffleArray(this.#buddies, this.#buddies.length - 1);

        //Apply info to buddies
        this.eachbuddy((buddy, index) => {
            //Get elements
            const img = document.getElementById(`teamBuddy${index}-img`);
            const name = document.getElementById(`teamBuddy${index}-name`);
            const button = document.getElementById(`teamBuddy${index}-button`);

            //Update buddy
            img.src = buddy.image;
            name.innerText = buddy.name;
            if (buddy.button) {
                button.style.display = 'flex';
                button.innerText = buddy.button.name;
                button.href = buddy.button.url;
            } else {
                button.style.display = 'none';
            }
        });
    }

    localize = () => {
        this.#title.innerText = loc.sidebar.team;
        this.eachbuddy((buddy, index) => {
            const desc = document.getElementById(`teamBuddy${index}-desc`);
            desc.innerText = loc.team[buddy.id];
        });
    }

}

const team = new TeamPage();


 /*$$$$$$                                               /$$
| $$__  $$                                             | $$
| $$  \ $$ /$$$$$$   /$$$$$$  /$$  /$$$$$$   /$$$$$$$ /$$$$$$   /$$$$$$$
| $$$$$$$//$$__  $$ /$$__  $$|__/ /$$__  $$ /$$_____/|_  $$_/  /$$_____/
| $$____/| $$  \__/| $$  \ $$ /$$| $$$$$$$$| $$        | $$   |  $$$$$$
| $$     | $$      | $$  | $$| $$| $$_____/| $$        | $$ /$$\____  $$
| $$     | $$      |  $$$$$$/| $$|  $$$$$$$|  $$$$$$$  |  $$$$//$$$$$$$/
|__/     |__/       \______/ | $$ \_______/ \_______/   \___/ |_______/
                        /$$  | $$
                       |  $$$$$$/
                        \_____*/

const Projects = {
    tochimochi: {
        id: 'tochimochi',
        image: 'tochimochi.webp',
        button: 'https://botpa.itch.io/tochimochi',
        buddies: [
            Buddies.Alex,
            Buddies.Raul,
            Buddies.Sara,
            Buddies.Pablo,
            Buddies.Mar
        ]
    },
    hardcore_kitty: {
        id: 'hardcore_kitty',
        image: 'hardcore_kitty.webp',
        button: 'https://botpa.itch.io/hardcore-kitty',
        buddies: [
            Buddies.Alex,
            Buddies.Raul,
            Buddies.Pablo,
            Buddies.Mar
        ]
    },
    raccoon: {
        id: 'raccoon',
        image: 'raccoon.webp',
        button: 'https://botpa.itch.io/esto-aun-no-es-un-juego',
        buddies: [
            Buddies.Alex,
            Buddies.Raul,
            Buddies.Mar,
            Buddies.Sara
        ]
    },
    spyw4re: {
        id: 'spyw4re',
        image: 'spyw4re.webp',
        button: 'https://botpa.itch.io/spyw4re',
        buddies: [
            Buddies.Alex,
            Buddies.Raul
        ]
    }
}

class ProjectsPage {

    //Projects
    #projects = [
        Projects.tochimochi,
        Projects.raccoon,
        Projects.hardcore_kitty,
        Projects.spyw4re
    ];

    //State
    #title = document.getElementById('projectsTitle');

    constructor() {}

    localize = () => {
        this.#title.innerText = loc.projects.title;
        for (let i = 0; i < this.#projects.length; i++) {
            //Get elements
            const image = document.getElementById(`project${i}-image`);
            const buddies = document.getElementById(`project${i}-buddies`);
            const title = document.getElementById(`project${i}-title`);
            const content = document.getElementById(`project${i}-content`);
            const button = document.getElementById(`project${i}-button`);

            //Update project info
            const project = this.#projects[i];
            image.src = `Data/Images/Projects/${project.image}`;
            buddies.innerHTML = '';
            for (const buddy of project.buddies) {
                const a = document.createElement('a');
                a.classList.add('projectBuddy');
                a.target = '_blank';
                a.href = buddy.button.url;
                a.title = buddy.name;
                const img = document.createElement('img');
                img.src = buddy.image;
                a.appendChild(img);
                buddies.appendChild(a);
            }
            title.innerText = loc.projects.list[project.id].title;
            content.innerHTML = loc.projects.list[project.id].content;
            button.innerHTML = loc.projects.list[project.id].button;
            button.href = project.button;
        }
    }

}

const projects = new ProjectsPage();


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
    projects.localize();
    team.localize();
    footer.localize();

    //Menus
    presentation.localize();
}

localize()