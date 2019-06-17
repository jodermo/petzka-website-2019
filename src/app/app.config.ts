export const Config = {
  app: {
    title: {de: 'Moritz Petzka', en: 'Moritz Petzka'},
    url: 'https://petzka.com',
    subtitle: {de: 'Web- & Multimedia-Produktion', en: 'Web & Multimedia Production'},
    job: {de: 'Entwicklung, Konzeption und Gestaltung', en: 'Development conception and design'},
    location: {de: 'Köln / Bonn (Deutschland, NRW)', en: 'Cologne / Bonn (Germany, NRW)'},
    remote: {de: 'Weltweit via Home Office', en: 'worldwide via home office'},
    services: {de: 'Meine Dienstleistungen', en: 'My Services'},
    shareSubject: {de: 'Webseite - Moritz Petzka (https://petzka.com)', en: 'Website - Moritz Petzka (https://petzka.com)'},
    shareMessage: {de: 'Schaue dir mal diese Webseite an', en: 'Take a look at this website'},
    description: {
      de: 'Willkommen, \nFreut mich, dass du auf meine Webseite gefunden hast! \n Mein Name ist Moritz Petzka, ich bin freiberuflicher Webentwickler, Medienschaffender und Künstler. \n\nAuf dieser Webseite findest du einen Überblick über mich und meine Arbeit. \n\n',
      en: 'Welcome, \n' +
        'Glad you found my website!\n' +
        '  My name is Moritz Petzka, I\'m a freelance web developer, media creator and artist.\n' +
        '\n' +
        'On this website you will find a overview of me and my work.'
    },
    email: 'info@petzka.com',
    emailSubject: {de: 'Anfrage', en: 'Inquiry'},
  },
  languages: [
    {alias: 'de', iso: 'DE', name: {de: 'Deutsch', en: 'German'}},
    {alias: 'en', iso: 'EN', name: {de: 'Englisch', en: 'English'}}
  ],
  navigation: [
    {title: {de: 'Moritz Petzka', en: 'Moritz Petzka'}, icon: null, link: ''},
    {title: {de: 'Werkzeuge', en: 'My Tools'}, icon: null, link: 'tools'},
    {title: {de: 'Links', en: 'Links'}, icon: null, link: 'links'},
    {title: {de: 'Kunden', en: 'Customers'}, icon: null, link: 'customers'},
  ],
  startPage: {
    title: {de: 'Moritz Petzka'},
    description: {de: 'Webentwicklung', en: 'Web Development'},
    contents: [
      {
        alias: 'webdev',
        title: {de: 'Webentwicklung', en: 'Web Development'},
        image: 'assets/images/webdev.jpg',
        text: {
          de: 'Damals noch als Mediengestalter und Flash-Entwickler angefangen, kann ich Heute, auf über 10 Jahre Berufserfahrung im Online-Bereich zurück blicken. \n Durch meine Begeisterung an der Arbeit, habe ich über die Jahre einige Programmiersprachen, Frameworks und nützliche Softwares kennen, können und lieben gelernt. \nMittlerweile bin ich in der Lage, so gut wie jede Aufgabe zum gewünschten Ziel zu bringen. \n Ob einfache Webseite oder komplexe Unternehmens-Webseite, Online-Shop, Mobile-App, Online-Werbung, Visualisierung von Daten, Bühnen-Präsentationen oder Messe-Exponaten, Ich habe eigentlich fast alles schon mal entwickelt. \n\nSie benötigen unterstützung bei einem Projekt? \nHier eine Liste mit Dienstleistungen die ich anbiete:',
          en: 'Starting at the time as a media designer and flash developer, today I can look back on over 10 years of professional experience in the online sector. \nOver the years I have come to know, control, and love so many programming languages, frameworks, and useful softwares. \nMeanwhile, I am able to bring almost any task to the desired destination. Whether it\'s a simple website or a complex corporate website, online shop, mobile app, online advertising, visualization of data, stage presentations or trade fair exhibits, I\'ve actually developed almost everything before. \n\nYou need assistance with a project? Here is a list of services I offer:'
        },
        toolText: {
          de: 'Überblick über meine Fähigkeiten und die Werkzeuge mit denen ich arbeite. \n\n',
          en: 'Here\'s an overview of my skills and the tools I work with. \n\n'
        },
        list: [
          {
            title: {de: 'HTML, CSS & Co.', en: 'HTML, CSS & Co.'},
            description: {
              de: 'Individuelle Entwicklung für jeden Bedarf. \n U.a. mit HTML, CSS, JavaScript, PHP, Python und MySQL',
              en: 'Individual development for every need. \n With HTML, CSS, JavaScript, PHP, Python, MySQL, Etc.'
            },
          },
          {
            title: {de: 'JavaScript und TypeScript Entwicklung', en: 'JavaScript and TypeScript development'},
            description: {
              de: 'ES5 und ES6 mit Angular, Nest.js, React, Vue.js und mehr',
              en: 'ES5 and ES6 with Angular, Nest.js, React, Vue.js and more'
            },
          },
          {
            title: {de: 'Node.js', en: 'Node.js'},
            description: {
              de: 'Server-Side und Client-Side Node.js Apps',
              en: 'Server side and client side Node.js apps'
            }
          },
          {
            title: {de: 'Webseiten für Unternehmen\n mit CMS', en: 'Company Websites with CMS'},
            description: {
              de: 'Komplexe Webseiten mit Content-Management-System und individuellen Funktionen',
              en: 'Complex websites with content management system and individual functions'
            },
          },
          {
            title: {de: 'eCommerce / Online-Shops', en: 'eCommerce / Online Shops'},
            description: {
              de: 'Online-Shops mit Shop-System, CMS und individuellen Funktionen',
              en: 'Online shops with content shop system, CMS and individual functions'
            },
          },
          {
            title: {de: 'CMS Erweiterungen', en: 'CMS Extensions'},
            description: {
              de: 'Entwicklung von Erweiterungen und Plugins für Contao CMS, Shopware und TYPO3',
              en: 'Extension and plugin development, for Contao CMS, Shopware and TYPO3'
            },
          },
          {
            title: {de: 'Mobile- und Web-Apps', en: 'Mobile and web apps'},
            description: {
              de: 'Apps für Windows, Android und iOS',
              en: 'Apps for Windows, Android and iOS',
            },
          },
          {
            title: {de: 'One-Pager Und Landing-Pages', en: 'One Pager And Landing Pages'},
            description: {
              de: 'Einfache und individeuell erstellte Webseiten',
              en: 'Simple and individual websites'
            },
          },
          {
            title: {de: 'Daten-Visualisierung Mit D3.js', en: 'Data Visualization With D3.js'},
            description: {
              de: 'Darstellung von Datenbanken und Datensätzen. \n z.B. in Form von diversen Diagramm-Typen, wie Pizza-Diagramm, Balken-Diagramm, etc.',
              en: 'Visualization databases and datasets. \n e.g. in the form of various diagram types, such as pizza diagram, bar diagram, etc.'
            },
          },
          {
            title: {de: 'Messe Exponate', en: 'Fair Exponats'},
            description: {
              de: 'z.B. Touchscreen- oder Beamer-Präsentationen, VR-/Ar-Anwendungen oder Anwendungen mit interaktiver Sensorsteuerung.',
              en: 'e.g. touchscreen or beamer presentations, VR / Ar applications or Applications with interactive sensor control.',
            },
          },
          {
            title: {de: 'Animierte Präsentationen', en: 'Animated Presentations'},
            description: {
              de: 'Animierte und interaktive Präsentationen, z.B. für Touchscreens, Beamer oder Webseiten',
              en: 'Animated and interactive presentations, e.g. for touchscreens, video projectors or websites',
            },
          },
          {
            title: {de: 'Video-Interfaces', en: 'Video Interfaces'},
            description: {
              de: 'Interactive Video-Interfaces die auf diverse Formen der Benutzereingabe reagieren',
              en: 'Interactive video interfaces that respond to various types of user input',
            },
          },
        ],
        programmingLanguages: [
          {
            alias: 'js',
            name: 'JavaScript/TypeScript',
            icon: 'assets/logos/javascript.svg',
            link: null,
            experienceWorth: 10,
            description: {
              de: 'Frontend & Beckend Entwicklung',
              en: 'Frontend & backend development'
            }
          },
          {
            alias: 'html',
            name: 'HTML',
            icon: 'assets/logos/html5.svg',
            link: null,
            experienceWorth: 10,
            description: {
              de: 'Markup Spache für Webseiten-Struktur',
              en: 'Markup language for website structures'
            }
          },
          {
            alias: 'css',
            name: 'CSS',
            icon: 'assets/logos/css-3.svg',
            link: null,
            experienceWorth: 10,
            description: {
              de: 'Layout Gestaltung',
              en: 'Layout Design'
            }
          },
          {
            alias: 'php',
            name: 'PHP',
            icon: 'assets/logos/php-1.svg',
            link: null,
            experienceWorth: 8,
            description: {
              de: 'Beckend Entwicklung',
              en: 'Backend development'
            }
          },
          {
            alias: 'python',
            name: 'Python',
            icon: 'assets/logos/python-5.svg',
            link: null,
            experienceWorth: 6,
            description: {
              de: 'Beckend Entwicklung und Machinensteuerung',
              en: 'Backend development and machine control'
            }
          },
          {
            alias: 'database',
            name: 'Datenbanken',
            icon: 'assets/logos/cloud.svg',
            link: null,
            experienceWorth: 8,
            description: {
              de: 'APIs und Datenbank-Verwaltung',
              en: 'APIs and Database Management'
            }
          },
        ],
        frameworks: [
          {
            alias: 'node',
            language: 'js',
            name: 'Node.js',
            icon: 'assets/logos/nodejs-icon.svg',
            link: 'https://nodejs.org/en/about/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'angular',
            language: 'js',
            name: 'Angular',
            icon: 'assets/logos/angular-icon.svg',
            link: 'https://angular.io/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'nestjs',
            language: 'js',
            name: 'Nest.js',
            icon: 'assets/logos/nest_logo.svg',
            link: 'https://nestjs.com/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'react',
            language: 'js',
            name: 'React',
            icon: 'assets/logos/react.svg',
            link: 'https://reactjs.org/',
            experienceWorth: 6,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'vue',
            language: 'js',
            name: 'Vue.js',
            icon: 'assets/logos/vue-js-1.svg',
            link: 'https://vuejs.org/',
            experienceWorth: 6,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'three',
            language: 'js',
            name: 'Three.js',
            icon: 'assets/logos/javascript-4.svg',
            link: 'https://threejs.org/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'd3',
            language: 'js',
            name: 'D3.js',
            icon: 'assets/logos/d3-2.svg',
            link: 'https://d3js.org/',
            experienceWorth: 10,
            description: {
              de: 'D3.js ist eine JavaScript-Bibliothek zum Bearbeiten von Dokumenten basierend auf Daten',
              en: 'D3.js is a JavaScript library for manipulating documents based on data'
            }
          },
          {
            alias: 'jQuery',
            language: 'js',
            name: 'jQuery',
            icon: 'assets/logos/jquery-2.svg',
            link: 'https://jquery.com/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'sass',
            language: 'css',
            name: 'SASS',
            icon: 'assets/logos/node-sass.svg',
            link: 'https://sass-lang.com/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'less',
            language: 'css',
            name: 'LESS',
            icon: 'assets/logos/less.svg',
            link: 'http://lesscss.org/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'symfony',
            language: 'php',
            name: 'Symfony',
            icon: 'assets/logos/symfony.svg',
            link: 'https://symfony.com/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'zend',
            language: 'php',
            name: 'Zend',
            icon: 'assets/logos/zend-framework.svg',
            link: 'https://framework.zend.com/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'mysql',
            language: 'database',
            name: 'MySQL',
            icon: 'assets/logos/mysql.svg',
            link: 'https://www.mysql.com/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'sqlite',
            language: 'database',
            name: 'SQLite',
            icon: 'assets/logos/sqlite.svg',
            link: 'https://www.sqlite.org/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'mongodb',
            language: 'database',
            name: 'MongoDB',
            icon: 'assets/logos/mongodb.svg',
            link: 'https://www.mongodb.com/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'jsonserver',
            language: 'database',
            name: 'JSON-Server',
            icon: 'assets/logos/json.svg',
            link: 'https://github.com/typicode/json-server',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
        ],
        software: [
          {
            company: 'JetBrains',
            icon: 'assets/logos/jetbrains-1.svg',
            link: 'https://www.jetbrains.com/',
            products: [
              {
                name: 'WebStorm',
                icon: 'assets/logos/webstorm-icon.svg',
                link: 'https://www.jetbrains.com/webstorm/',
                experienceWorth: 10
              },
              {
                name: 'PhpStorm',
                icon: 'assets/logos/phpstorm-1.svg',
                link: 'https://www.jetbrains.com/phpstorm/',
                experienceWorth: 8
              }
            ],
          },
          {
            company: 'Microsoft',
            icon: 'assets/logos/microsoft.svg',
            link: 'https://www.microsoft.com',
            products: [
              {
                name: 'Visual Studio Community',
                icon: 'assets/logos/visual-studio-2013.svg',
                link: 'https://visualstudio.microsoft.com/vs/community/',
                experienceWorth: 9
              },
              {
                name: 'Visual Studio Code',
                icon: 'assets/logos/visual-studio-code.svg',
                link: 'https://code.visualstudio.com/',
                experienceWorth: 9
              }
            ],
          }
        ],
      },
      {
        alias: 'graphix',
        title: {de: 'Grafik & Animation', en: 'Graphic & Animation'},
        image: 'assets/images/gfx.jpg',
        text: {
          de: 'Durch meine Leidenschaft für Medien in Bild und Ton und meiner gestalterischen Begabungg, habe ich mich 2007 dazu entschieden, eine Ausbildung als Mediengestalter und Gestaltungtechnischer-Assistent zu machen, diese habe ich dann 2010 auch erfolgreich abgeschlossen. \nDie Ausbildung hat mir einen optimalen Berufseinstieg, als Grafiker, Motion/VFX designer und Flash-Entwickler verschafft. \nBis heute ist die Gestaltung und Bearbeitung von Visuellen Medien eine große Leidenschaft von mir. In Verbindung mit einer weiteren Leideschaft, dem Programmieren, habe ich über die Letzten Jahre mein Know-How, vor allem im Bereich Animation und 3D-Design immer weiter ausbauen können. \n\nHier eine Liste von Dingen die ich beherrsche:',
          en: 'Due to my passion for media in the picture and sound and my creative talents, I decided to do an apprenticeship as a media designer and design technical assistant, which I successfully completed in 2010.\n' +
            'The apprenticeship gave me an optimal career start, as a graphic/motion/VFX designer and flash developer.\n' +
            'To this day, designing and editing visual media is a great passion of mine. In connection with another suffering, the programming, I have been able to expand my know-how over the last years, especially in the field of animation and 3D design.\n' +
            '\n' +
            'Here is a list of things I do:',
        },
        toolText: {
          de: 'Überblick über meine Fähigkeiten und die Werkzeuge mit denen ich arbeite. \n\n',
          en: 'Here\'s an overview of my skills and the tools I work with. \n\n'
        },
        list: [
          {
            title: {de: 'Bildbearbeitung \nmit Adobe Photoshop', en: 'Image editing with Adobe Photoshop'},
            description: {
              de: 'Aufbereitung & Freistellen für das Internet. \nBearbeitung & Retusche',
              en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
            },
          },
          {
            title: {de: 'Vektor-Grafiken \nmit Adobe Illustrator', en: 'Vektorisierung mit Adobe Illustrator'},
            description: {
              de: 'Vektorisierung von Bitmaps und Icon-/Logo-Design',
              en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
            },
          },
          {
            title: {de: 'Motion Graphics \nmit Adobe After-Effects', en: 'Motion Graphics with Adobe After-Effects'},
            description: {
              de: 'Teaser, Claims und animierte Video-Clips',
              en: 'Teaser, claims and animated video clips'
            },
          },
          {
            title: {de: '3D Design \nmit Autodesk Maya', en: '3D Design with Autodesk Maya'},
            description: {
              de: 'Modeling, Animation & Rendering',
              en: 'Modeling, Animation & Rendering'
            },
          },
          {
            title: {de: 'HTML/CSS (2D & 3D)', en: 'HTML/CSS (2D & 3D)'},
            description: {
              de: 'Web-Basierte Layouts und Animationen mit CSS3, SASS oder LESS',
              en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
            },
          },
          {
            title: {de: 'HTML Canvas (2D)', en: 'HTML Canvas Animations'},
            description: {
              de: 'Web-Basierte 2D Animationen mit HTML und JavaScript',
              en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
            },
          },
          {
            title: {de: 'WebGL 3D', en: 'WebGL 3D Animations'},
            description: {
              de: 'Web-Basierte Layouts und Animationen in 3D, lauffähig in allen gängigen Browsern.',
              en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
            },
          },
          {
            title: {de: 'WebGL VR & AR', en: 'WebGL 3D Animations'},
            description: {
              de: 'Vituelle Realität im Browser, mit WebGL und Three.js',
              en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
            },
          },

        ],
        programmingLanguages: [
          {
            alias: 'js',
            name: 'JavaScript/TypeScript',
            icon: 'assets/logos/javascript.svg',
            link: null,
            experienceWorth: 10,
            description: {
              de: 'Web Animationen (2D & 3D)',
              en: 'Web Animations (2D & 3D)',
            }
          },
          {
            alias: 'css',
            name: 'CSS',
            icon: 'assets/logos/css-3.svg',
            link: null,
            experienceWorth: 10,
            description: {
              de: 'Web Animationen (2D & 3D)',
              en: 'Web Animations (2D & 3D)',
            }
          },
        ],
        frameworks: [
          {
            alias: 'three',
            language: 'js',
            name: 'Three.js',
            icon: 'assets/logos/javascript-4.svg',
            link: 'https://threejs.org/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'd3',
            language: 'js',
            name: 'D3.js',
            icon: 'assets/logos/d3-2.svg',
            link: 'https://d3js.org/',
            experienceWorth: 10,
            description: {
              de: 'D3.js ist eine JavaScript-Bibliothek zum Bearbeiten von Dokumenten basierend auf Daten',
              en: 'D3.js is a JavaScript library for manipulating documents based on data'
            }
          },
          {
            alias: 'jQuery',
            language: 'js',
            name: 'jQuery',
            icon: 'assets/logos/jquery-2.svg',
            link: 'https://jquery.com/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'sass',
            language: 'css',
            name: 'SASS',
            icon: 'assets/logos/node-sass.svg',
            link: 'https://sass-lang.com/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
          {
            alias: 'less',
            language: 'css',
            name: 'LESS',
            icon: 'assets/logos/less.svg',
            link: 'http://lesscss.org/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
        ],
        software: [
          {
            company: 'Adobe',
            icon: 'assets/logos/adobe-2.svg',
            link: 'https://www.adobe.com/',
            products: [
              {
                name: 'Photoshop',
                icon: 'assets/logos/photoshop-cc.svg',
                link: 'https://helpx.adobe.com/photoshop/faq.html',
                experienceWorth: 10
              },
              {
                name: 'Illustrator',
                icon: 'assets/logos/adobe-illustrator-cc.svg',
                link: 'https://helpx.adobe.com/illustrator/faq.html',
                experienceWorth: 9
              },
              {
                name: 'After-Effects',
                icon: 'assets/logos/after-effects-cc.svg',
                link: 'https://helpx.adobe.com/after-effects/faq.html',
                experienceWorth: 9
              },
              {
                name: 'InDesign',
                icon: 'assets/logos/indesign-cc.svg',
                link: 'https://helpx.adobe.com/indesign/faq.html',
                experienceWorth: 6
              },
            ],
          },
          {
            company: 'Autodesk',
            icon: 'assets/logos/autodesk-4.svg',
            link: 'https://www.autodesk.de/',
            products: [
              {
                name: 'Maya',
                icon: 'assets/logos/maya-2017.svg',
                link: 'https://www.autodesk.de/products/maya/overview',
                experienceWorth: 8
              },
              {
                name: 'Mudbox',
                icon: 'assets/logos/mudbox-1.svg',
                link: 'https://www.autodesk.com/products/mudbox/overview',
                experienceWorth: 8
              },
              {
                name: '3ds Max',
                icon: 'assets/logos/3ds-max-full.svg',
                link: 'https://www.autodesk.de/products/3ds-max/overview',
                experienceWorth: 6
              }
            ],
          },
          {
            company: 'Blender',
            icon: 'assets/logos/blender.svg',
            link: 'hhttps://www.blender.org/',
            products: [
              {
                name: 'Blender',
                icon: 'assets/logos/blender-1.svg',
                link: 'https://www.blender.org/about/',
                experienceWorth: 7
              },
            ],
          },
          {
            company: 'Toon Boom Animation Inc.',
            icon: 'assets/logos/toonboom_logo.svg',
            link: 'https://www.toonboom.com/',
            products: [
              {
                name: 'Animate Pro',
                icon: 'assets/logos/toonboom_logo.svg',
                link: 'https://www.toonboom.com/news/toon-boom-animate-3-and-animate-pro-3-now-available',
                experienceWorth: 8
              },
              {
                name: 'Harmony',
                icon: 'assets/logos/harmony17.svg',
                link: 'https://www.toonboom.com/products/harmony',
                experienceWorth: 7
              }
            ],
          }
        ]
      },
      {
        alias: 'videoedit',
        title: {de: 'Video-Bearbeitung', en: 'Video Editing'},
        image: 'assets/images/vfx.jpg',
        text: {
          de: 'Durch meine Leidenschaft für Medien in Bild und Ton und meiner gestalterischen Begabungg, habe ich mich 2007 dazu entschieden, eine Ausbildung als Mediengestalter und Gestaltungtechnischer-Assistent zu machen, diese habe ich dann 2010 auch erfolgreich abgeschlossen. \nDie Ausbildung hat mir einen optimalen Berufseinstieg, als Grafiker, Motion/VFX designer und Flash-Entwickler verschafft. \nNeben meiner Tätigkeit als Grafiker und Entwickler, habe ich mich schon immer gerne mit der Produktion von Videos beschäftigt. \n\nHier eine Liste von Dingen die ich beherrsche:',
          en: 'Due to my passion for media in the picture and sound and my creative talents, I decided to do an apprenticeship as a media designer and design technical assistant, which I successfully completed in 2010.\n' +
            'The apprenticeship gave me an optimal career start, as a graphic/motion/VFX designer and flash developer.\n' +
            'In addition to my work as a graphic designer and developer, the production of videos is a great passion of mine.\n' +
            '\n' +
            'Here is a list of things I do:',
        },
        toolText: {
          de: 'Überblick über meine Fähigkeiten und die Werkzeuge mit denen ich arbeite. \n\n',
          en: 'Here\'s an overview of my skills and the tools I work with. \n\n'
        },
        list: [
          {
            title: {de: 'Viedoschnitt', en: 'Video Editing'},
            description: {
              de: 'Videoschnitt, Bearbeitung und Dramaturgische Gestaltung',
              en: 'Video editing and dramaturgical design'
            },
          },
          {
            title: {de: 'Postproduktion', en: 'Post Production'},
            description: {
              de: 'Video-Effekte, Musik- und Soundeffekte, Animationen, Einblendungen und Nachbearbeitung',
              en: 'Video effects, music and sound effects, animations, fade-ins and post-processing'
            },
          },
          {
            title: {de: 'VFX / Motion-Design', en: 'VFX / Motion Design'},
            description: {
              de: '2D und 3D Animationen',
              en: '2D und 3D animations',
            },
          },
          {
            title: {de: 'Sound-Design', en: 'Sound Design'},
            description: {
              de: 'Dramaturgische Gestaltung mit Musik- und Soundeffekten',
              en: 'Dramaturgical composition with music and sound effects',
            },
          },
        ],
        programmingLanguages: [
          {
            alias: 'js',
            name: 'JavaScript/TypeScript',
            icon: 'assets/logos/javascript.svg',
            link: null,
            experienceWorth: 10,
            description: {
              de: 'Interaktive Video-Interfaces',
              en: 'Interactive video interfaces'
            }
          },
          {
            alias: 'html',
            name: 'HTML',
            icon: 'assets/logos/html5.svg',
            link: null,
            experienceWorth: 10,
            description: {
              de: 'Interaktive Video-Interfaces',
              en: 'Interactive video interfaces'
            }
          },
        ],
        frameworks: [
          {
            alias: 'three',
            language: 'js',
            name: 'Three.js',
            icon: 'assets/logos/javascript-4.svg',
            link: 'https://threejs.org/',
            experienceWorth: 10,
            description: {
              de: '',
              en: ''
            }
          },
        ],
        software: [
          {
            company: 'Adobe',
            icon: 'assets/logos/adobe-2.svg',
            link: 'https://www.adobe.com/',
            products: [
              {
                name: 'Photoshop',
                icon: 'assets/logos/photoshop-cc.svg',
                link: 'https://helpx.adobe.com/photoshop/faq.html',
                experienceWorth: 10
              },
              {
                name: 'Illustrator',
                icon: 'assets/logos/adobe-illustrator-cc.svg',
                link: 'https://helpx.adobe.com/illustrator/faq.html',
                experienceWorth: 9
              },
              {
                name: 'Premiere',
                icon: 'assets/logos/premiere-cc.svg',
                link: 'https://helpx.adobe.com/premiere/faq.html',
                experienceWorth: 10
              },
              {
                name: 'After-Effects',
                icon: 'assets/logos/after-effects-cc.svg',
                link: 'https://helpx.adobe.com/after-effects/faq.html',
                experienceWorth: 9
              },
            ],
          },
          {
            company: 'Autodesk',
            icon: 'assets/logos/autodesk-4.svg',
            link: 'https://www.autodesk.de/',
            products: [
              {
                name: 'Maya',
                icon: 'assets/logos/maya-2017.svg',
                link: 'https://www.autodesk.de/products/maya/overview',
                experienceWorth: 8
              },
              {
                name: 'Mudbox',
                icon: 'assets/logos/mudbox-1.svg',
                link: 'https://www.autodesk.com/products/mudbox/overview',
                experienceWorth: 8
              },
              {
                name: '3ds Max',
                icon: 'assets/logos/3ds-max-full.svg',
                link: 'https://www.autodesk.de/products/3ds-max/overview',
                experienceWorth: 6
              }
            ],
          },
          {
            company: 'Toon Boom Animation Inc.',
            icon: 'assets/logos/toonboom_logo.svg',
            link: 'https://www.toonboom.com/',
            products: [
              {
                name: 'Animate Pro',
                icon: 'assets/logos/toonboom_logo.svg',
                link: 'https://www.toonboom.com/news/toon-boom-animate-3-and-animate-pro-3-now-available',
                experienceWorth: 8
              },
              {
                name: 'Harmony',
                icon: 'assets/logos/harmony17.svg',
                link: 'https://www.toonboom.com/products/harmony',
                experienceWorth: 7
              }
            ],
          }
        ]
      },
      {
        alias: 'art',
        title: {de: 'Kunst & Musik', en: 'Art & Music'},
        image: 'assets/images/art.jpg',
        text: {
          de: 'Als Sohn einer Künstlerin und eines Kundhandwerkers, wurde mir das krative arbeiten schon mit in die Wiege gelegt. \n In meiner Kindheit bin ich zu Waldorfschule gegangen, dort wurde kreatives schaffen und Kunst zusätzlich sehr gefördert.\n Bis heute sind künstlerische Tätigkeiten ein Hauptbestandteil in meinem Leben und es gibt eigentlich nichts das ich lieber tue. \nIch bin immer auf der suche nach neuen Methoden mich kreativ zu betätigen, da ist es egal ob es sich um Musik, Vieos, Malen, Zeichen oder Handwerkliche dinge dreht. \n\nHier eine liste mit künstlerischen aktivitäten denen ich über die Jahre nachgegangen bin:',
          en: 'As the son of an artist and a art craftsman, I was involved in the creative work, since my birth.\n' +
            'In my childhood, I went to Waldorf School, where creative work and art was very promoted, too.\n' +
            'Till now, artistic activities are a major part of my life and there\'s as good as nothing I\'d rather do.\n' +
            'I\'m always on the lookout for new ways to be creative, it does not matter if it\'s about music, movies, painting, drawing or craftsmanship.\n' +
            '\n' +
            'Here is a list of artistic activities I have followed in the past:',
        },
        toolText: {
          de: 'Überblick über meine Fähigkeiten und die Werkzeuge mit denen ich arbeite. \n\n',
          en: 'Here\'s an overview of my skills and the tools I work with. \n\n'
        },
        list: [
          {
            title: {de: 'Musikproduktion (digital)', en: 'Musik Producttion (digital)'},
            description: {
              de: 'Digitale Musikproduktion (verschiedene electro-genres)',
              en: 'Digital music production (various electro-genres)'
            },
          },
          {
            title: {de: 'Analoge Synthesizer Musik', en: 'Analoge Synthesizer Musik'},
            description: {
              de: 'Elektronische Musik auf analogen Synthesizern',
              en: 'Electronic music on analog synthesizers'
            },
          },
          {
            title: {de: 'Storyboard & Scribbles', en: 'Storyboard & Scribbles'},
            description: {
              de: 'Drehbücher und Konzepte in Bildern',
              en: 'Scripts and concepts in pictures'
            },
          },
          {
            title: {de: 'Klassisches Malen Und Zeichnen', en: 'Classical Painting And Drawing'},
            description: {
              de: 'Portraits, Stillleben, Landschaftsbilder, etc.',
              en: 'Portraits, still lifes, landscapes, etc.'
            },
          },
          {
            title: {de: 'Airbrush', en: 'Airbrush'},
            description: {
              de: 'Malen mit Druckluft, Spritzpistole und Schablonen',
              en: 'Painting with compressed air, spray gun and stencils'
            },
          },
          {
            title: {de: 'Tattoo', en: 'Tattoo'},
            description: {
              de: 'Malen mit Druckluft, Spritzpistole und Schablonen',
              en: 'Painting with compressed air, spray gun and stencils'
            },
          },
        ],
        programmingLanguages: [],
        frameworks: [],
        software: [
          {
            company: 'Steinberg',
            icon: 'assets/logos/steinberg-sx.svg',
            link: 'https://www.toonboom.com/',
            products: [
              {
                name: 'Cubase',
                icon: 'assets/logos/cubase.png',
                link: 'https://new.steinberg.net/cubase/',
                experienceWorth: 10
              },
              {
                name: 'Nuendo',
                icon: 'assets/logos/nuendo.png',
                link: 'https://new.steinberg.net/nuendo/',
                experienceWorth: 9
              },
              {
                name: 'Wavelab',
                icon: 'assets/logos/wavelab.png',
                link: 'https://www.steinberg.net/products/wavelab/start.html',
                experienceWorth: 6
              }
            ],
          },
          {
            company: 'Ableton',
            icon: 'assets/logos/ableton.svg',
            link: 'https://www.ableton.com/',
            products: [
              {
                name: 'Ableton Live',
                icon: 'assets/logos/ableton-1.svg',
                link: 'https://www.ableton.com/live/',
                experienceWorth: 8
              }
            ],
          },
          {
            company: 'Toon Boom Animation Inc.',
            icon: 'assets/logos/toonboom_logo.svg',
            link: 'https://www.toonboom.com/',
            products: [
              {
                name: 'Animate Pro',
                icon: 'assets/logos/toonboom_logo.svg',
                link: 'https://www.toonboom.com/news/toon-boom-animate-3-and-animate-pro-3-now-available',
                experienceWorth: 8
              },
              {
                name: 'Harmony',
                icon: 'assets/logos/harmony17.svg',
                link: 'https://www.toonboom.com/products/harmony',
                experienceWorth: 7
              }
            ],
          },
          {
            company: 'Adobe',
            icon: 'assets/logos/adobe-2.svg',
            link: 'https://www.adobe.com/',
            products: [
              {
                name: 'Photoshop',
                icon: 'assets/logos/photoshop-cc.svg',
                link: 'https://helpx.adobe.com/photoshop/faq.html',
                experienceWorth: 10
              },
              {
                name: 'Illustrator',
                icon: 'assets/logos/adobe-illustrator-cc.svg',
                link: 'https://helpx.adobe.com/illustrator/faq.html',
                experienceWorth: 9
              },
              {
                name: 'After-Effects',
                icon: 'assets/logos/after-effects-cc.svg',
                link: 'https://helpx.adobe.com/after-effects/faq.html',
                experienceWorth: 9
              }
            ],
          },
          {
            company: 'Autodesk',
            icon: 'assets/logos/autodesk-4.svg',
            link: 'https://www.autodesk.de/',
            products: [
              {
                name: 'Maya',
                icon: 'assets/logos/maya-2017.svg',
                link: 'https://www.autodesk.de/products/maya/overview',
                experienceWorth: 8
              },
              {
                name: 'Mudbox',
                icon: 'assets/logos/mudbox-1.svg',
                link: 'https://www.autodesk.com/products/mudbox/overview',
                experienceWorth: 8
              },
              {
                name: '3ds Max',
                icon: 'assets/logos/3ds-max-full.svg',
                link: 'https://www.autodesk.de/products/3ds-max/overview',
                experienceWorth: 6
              }
            ],
          },
          {
            company: 'Blender',
            icon: 'assets/logos/blender.svg',
            link: 'hhttps://www.blender.org/',
            products: [
              {
                name: 'Blender',
                icon: 'assets/logos/blender-1.svg',
                link: 'https://www.blender.org/about/',
                experienceWorth: 7
              },
            ],
          },
        ]
      }
    ]
  },
  footer: {
    navigation: [
      {title: {de: 'Kontakt', en: 'Contact'}, icon: null, link: 'contact'},
      {title: {de: 'Impressum', en: 'Imprint'}, icon: null, link: 'imprint'},
    ],
  },
  sources: {},
  skills: {
    art: [],
    programmingLanguages: [
      {
        alias: 'js',
        name: 'JavaScript/TypeScript',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: 'Frontend & Beckend Entwicklung',
          en: 'Frontend & backend development'
        }
      },
      {
        alias: 'html',
        name: 'HTML',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: 'Markup Spache für Webseiten-Struktur',
          en: 'Markup language for website structures'
        }
      },
      {
        alias: 'css',
        name: 'CSS',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: 'Layout Gestaltung',
          en: 'Layout Design'
        }
      },
      {
        alias: 'php',
        name: 'PHP',
        icon: null,
        link: null,
        experienceWorth: 8,
        description: {
          de: 'Beckend Entwicklung',
          en: 'Backend development'
        }
      },
      {
        alias: 'database',
        name: 'Datenbanken',
        icon: null,
        link: null,
        experienceWorth: 8,
        description: {
          de: 'APIs und Datenbank-Verwaltung',
          en: 'APIs and Database Management'
        }
      },
      {
        alias: 'python',
        name: 'Python',
        icon: null,
        link: null,
        experienceWorth: 6,
        description: {
          de: 'Beckend Entwicklung und Machinensteuerung',
          en: 'Backend development and machine control'
        }
      },
    ],
    software: [
      {
        alias: 'photoshop',
        name: 'Adobe Photoshop',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: 'Bildbearbeitung',
          en: 'Image Editing'
        }
      },
      {
        alias: 'illustrator',
        name: 'Adobe Illustrator',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: 'Vector Grafiken',
          en: 'Vector Graphics'
        }
      },
      {
        alias: 'aftereffects',
        name: 'Adobe After-Effects',
        icon: null,
        link: null,
        experienceWorth: 8,
        description: {
          de: 'Video Postproduktion',
          en: 'Video post production'
        }
      },
      {
        alias: 'premiere',
        name: 'Adobe Premiere',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: 'Video Schnitt',
          en: 'Video cut'
        }
      },
      {
        alias: 'indisign',
        name: 'Adobe InDesign',
        icon: null,
        link: null,
        experienceWorth: 6,
        description: {
          de: 'Print Gestaltung',
          en: 'Print Design'
        }
      },
      {
        alias: 'cubase',
        name: 'Steinberg Cubase',
        icon: null,
        link: null,
        experienceWorth: 9,
        description: {
          de: 'Musik-Produktion und Audio-Bearbeitung',
          en: 'Music production and audio editing'
        }
      }
    ],
    frameworks: [
      {
        alias: 'node',
        language: 'js',
        name: 'Node.js',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'angular',
        language: 'js',
        name: 'Angular',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'angularjs',
        language: 'js',
        name: 'AngularJS',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'nestjs',
        language: 'js',
        name: 'Nest.js',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'react',
        language: 'js',
        name: 'React',
        icon: null,
        link: null,
        experienceWorth: 6,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'vue',
        language: 'js',
        name: 'Vue.js',
        icon: null,
        link: null,
        experienceWorth: 6,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'three',
        language: 'js',
        name: 'Three.js',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'd3',
        language: 'js',
        name: 'D3.js',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'jQuery',
        language: 'js',
        name: 'jQuery',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'sass',
        language: 'css',
        name: 'SASS',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'less',
        language: 'css',
        name: 'LESS',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'symfony',
        language: 'php',
        name: 'Symfony',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'zend',
        language: 'php',
        name: 'Zend',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'sqlite',
        language: 'database',
        name: 'SQLite',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'mongodb',
        language: 'database',
        name: 'MongoDB',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'phpmyadmin',
        language: 'database',
        name: 'phpMyAdmin',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
      {
        alias: 'jsonserver',
        language: 'database',
        name: 'JSON-Server',
        icon: null,
        link: null,
        experienceWorth: 10,
        description: {
          de: '',
          en: ''
        }
      },
    ],
    usement: []
  },
  links: [
    {
      alias: 'showroom',
      name: 'Show Room',
      description: {de: 'Eine kleine Sammlung an Demo-Projekten von mir', en: 'A small selection of my demo projects'},
      image: 'assets/images/showroom.jpg',
      url: 'http://showroom.petzka.com/',
    },
    {
      alias: 'github',
      name: 'GitHub',
      description: {de: 'Mein GitHub Profil', en: 'My GitHub Account'},
      image: 'assets/images/github.jpg',
      url: 'https://github.com/jodermo',
    },
    {
      alias: 'xing',
      name: 'Xing',
      description: {de: 'Mein Xing Profil', en: 'My Xing Account'},
      image: 'assets/images/xing.jpg',
      url: 'https://www.xing.com/profile/Moritz_Petzka',
    },
    {
      alias: 'freelancermap',
      name: 'freelancermap',
      description: {de: 'Mein Profil bei freelancermap.de', en: 'My Account on freelancermap.de'},
      image: 'assets/images/freelancermap.jpg',
      url: 'https://www.freelancermap.de/profile/121861',
    },
    {
      alias: 'dasauge',
      name: 'dasauge',
      description: {de: 'Mein Profil auf dasauge.de', en: 'My Account on freelancermap'},
      image: 'assets/images/dasauge.jpg',
      url: 'https://dasauge.de/-moritz-petzka/',
    },
    {
      alias: 'soundcloud',
      name: 'SoundCloud',
      description: {de: 'SoundCloud', en: 'SoundCloud'},
      image: 'assets/images/soundcloud.jpg',
      urls: [
        {
          title: 'midiVoltage',
          description: {de: 'Eperimentell / Electro', en: 'Experimental / Electro'},
          url: 'https://soundcloud.com/midivoltage'
        },
        {
          title: 'No Generation',
          description: {de: 'Eperimentell / Electro', en: 'Experimental / Electro'},
          url: 'https://soundcloud.com/user-452365221'
        }
      ],
    },
    {
      alias: 'youtube',
      name: 'YouTube',
      description: {de: 'YouTube', en: 'YouTube'},
      image: 'assets/images/youtube.jpg',
      urls: [
        {
          title: 'moFX2013',
          description: {de: 'Alter YouTube Kanal (Seit Jahren nicht benutzt)', en: 'Old YouTube channel'},
          url: 'https://www.youtube.com/channel/UCIL_5UG8W-RgKXqoyT7I2uA'
        }
      ],
    },
  ],
  customers: [
    {
      name: 'BRAND.NEW DAY',
      description: {de: 'Agentur für interaktionsbezogene Markenkommunikation', en: ''},
      website: 'http://www.brandnewday.de/',
      image: 'assets/images/brandNewDay_bg.jpg',
      logo: 'assets/images/bnd_logo.png',
      task: {de: 'Entwicklung von', en: 'development of'},
      tasks: [
        {de: 'Messe Exponaten', en: 'Fair Exponats'},
        {de: 'Päsentationen', en: 'Presentations'},
        {de: 'Unternehmens Webseiten', en: 'Company Websites'},
        {de: 'Apps', en: 'Apps'}
      ],
      technologies: [
        {de: 'Angular', en: 'Angular'},
        {de: 'Three.js', en: 'Three.js'},
        {de: 'D3.js', en: 'D3.js'},
        {de: 'Contao CMS', en: 'Contao CMS'},
      ]
    },
    {
      name: 'Douglas',
      description: {de: 'Parfümerie Douglas GmbH', en: ''},
      website: 'https://www.douglas.de/',
      image: 'assets/images/douglas_bg.jpg',
      logo: 'assets/images/douglas_logo.svg'
    },
    {
      name: 'Cormanum',
      description: {de: 'DIE WELT UM HANDWERK, KUNST UND DESIGN', en: ''},
      website: 'https://www.cormanum.com/',
      image: 'assets/images/cormanum_bg.jpg',
      logo: 'assets/images/cormanum.svg'
    },
    {
      name: 'BadaLuma',
      description: {de: 'digital solutions focused on healthcare', en: 'digital solutions focused on healthcare'},
      website: 'https://badaluma.com/',
      image: 'assets/images/badaluma_bg.jpg',
      logo: 'assets/images/badaluma.png'
    },
    {
      name: 'pabana',
      description: {de: 'interactive interfaces - healthcare', en: 'interactive interfaces - healthcare'},
      website: 'http://pabana.com/',
      image: 'assets/images/pabana_bg.jpg',
      logo: 'assets/images/pabana_bg.jpg'
    },
    {
      name: 'TAKEPART',
      description: {de: 'media and science', en: 'media and science'},
      website: 'http://takepart-media.de',
      image: 'assets/images/takepart_bg.jpg',
      logo: 'assets/images/takepart.png'
    },
    {
      name: 'art tempi',
      description: {de: 'Agentur für Gesundheitskommunikation', en: 'Agentur für Gesundheitskommunikation'},
      website: 'http://www.art-tempi.de/',
      image: 'assets/images/art_tempi_bg.jpg',
      logo: 'assets/images/arttempi.png'
    },
    {
      name: 'CD Werbeagentur',
      description: {de: 'Full Service Agentur', en: 'Full Service Agentur'},
      website: 'http://www.cdonline.de/',
      image: 'assets/images/cd_werbeagentur_bg.jpg',
      logo: 'assets/images/CD-Werbeagentur.png'
    },
    {
      name: 'iElements',
      description: {de: 'Internetagentur aus Köln', en: 'Internetagentur aus Köln'},
      website: 'http://www.i-elements.de/',
      image: 'assets/images/iElements_bg.jpg',
      logo: 'assets/images/ie-logo.png'
    },
    /*
{
  name: 'c+s / ceramic + stein',
  description: {de: 'Ihrer Welt der Markenfliesen', en: 'Ihrer Welt der Markenfliesen'},
  website: 'http://www.ceramic-stein.de/',
  image: 'assets/images/c+s_bg.jpg',
  logo: 'assets/images/c+s.jpg'
},
     */
    {
      name: 'Underground Events',
      description: {de: 'Parties, Konzerte und Veranstaltungen', en: 'Parties, Concerts and Events'},
      website: 'http://underground-events.de/',
      image: 'assets/images/underground_events_bg.jpg',
      logo: 'assets/images/underground-events_black.png'
    },
    {
      name: 'Crew4You',
      description: {de: 'TV, Grafik & Web', en: 'TV, Graphic & Web'},
      website: 'http://www.crew4you.info/',
      image: 'assets/images/crew_4_you_bg.jpg',
      logo: 'assets/images/c4u.png'
    },
    {
      name: 'Blue Byte / UBISOFT',
      description: {de: 'Ubisoft studio', en: 'Ubisoft studio'},
      website: 'http://www.bluebyte.com',
      image: 'assets/images/bluebyte_ubisoft_bg.jpg',
      logo: 'assets/images/bluebyte_logo-small.png'
    },
    {
      name: 'Webagentur Köln',
      description: {de: 'Webdesign Agentur aus Köln', en: 'Webdesign Agentur aus Köln'},
      website: 'http://www.webagentur-koeln.de/',
      image: 'assets/images/webagentur_koeln_bg.jpg',
      logo: 'assets/images/wk_logo.png'
    },
    {
      name: 'Temtra insulations',
      description: {de: 'Isolationen und Thermische Trennung', en: 'Isolationen und Thermische Trennung'},
      website: 'http://temtra.de/',
      image: 'assets/images/temtra_bg.jpg',
      logo: 'assets/images/temtra_logo_negativ_neu.jpg'
    },
    /*
    {
    name: 'Albert Schweitzer Stiftung',
    description: {de: 'Schutz und Rechte von Tieren', en: 'Schutz und Rechte von Tieren'},
    website: 'http://albert-schweitzer-stiftung.de/',
    image: 'assets/images/albert_schw_st_bg.jpg',
    logo: 'assets/images/albert-schweitzer-stiftung-logo.png'
    },
     */
    {
      name: 'Agentur für mehr Wert(e)',
      description: {de: 'Essen, Trinken und Tanzen', en: 'Essen, Trinken und Tanzen'},
      website: 'http://afmwe.de/',
      image: 'assets/images/afmwe_bg.jpg',
      logo: 'assets/images/afmwe-logo.svg'
    },
    /*
    {
      name: 'TSP Metallgestaltung',
      description: {de: 'Treppen und Geländer', en: 'Treppen und Geländer'},
      website: 'http://tsp-metallgestaltung.de/',
      image: 'assets/images/tsp_bg.jpg',
      logo: 'assets/images/tsp.png'
    },
    */
  ],
  texts: [
    {
      alias: 'programming_languages',
      de: 'Programmiersprachen',
      en: 'Programming Languages'
    },
    {
      alias: 'experience_worth',
      de: 'Erfahrungswert \n(0 - 10)',
      en: 'Experience Worth \n(0 - 10)'
    },
    {
      alias: 'software',
      de: 'Software',
      en: 'Software'
    },
    {
      alias: 'frameworks',
      de: 'Frameworks',
      en: 'Frameworks'
    },
    {
      alias: 'website',
      de: 'Webseite',
      en: 'Website'
    },
    {
      alias: 'link',
      de: 'URL',
      en: 'URL'
    },
    {
      alias: 'links',
      de: 'Links',
      en: 'Links'
    },
    {
      alias: 'my_tasks',
      de: 'Meine Aufgaben:',
      en: 'My tasks:'
    },
    {
      alias: 'used_technologies',
      de: 'Benutzte Technologien',
      en: 'Used technologies'
    },
    {
      alias: 'share',
      de: 'Teilen:',
      en: 'Share:'
    }
  ]
};
