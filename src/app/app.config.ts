export const Config = {
  app: {
    title: {de: 'Moritz Petzka', en: 'Moritz Petzka'},
    url: 'https://petzka.com',
    subtitle: {de: 'Web- & Multimedia-Produktion', en: 'Web & Multimedia Production'},
    hashtags: 'petzka,multimedia,webdeveleopment,development',
    keywords: [
      {de: 'Webseiten', en: 'Websites'},
      {de: 'Messestände', en: 'Fair Exhibits'},
      {de: 'Präsentationen', en: 'Presentations'},
      {de: 'und', en: 'and'},
      {de: 'Apps', en: 'Apps'}
    ],
    job: {de: 'Entwicklung, Konzeption und Gestaltung', en: 'Development conception and design'},
    location: {de: 'Köln / Bonn (Deutschland, NRW)', en: 'Cologne / Bonn (Germany, NRW)'},
    remote: {de: 'Weltweit via Home Office', en: 'worldwide via home office'},
    services: {de: 'Meine Dienstleistungen', en: 'My Services'},
    shareSubject: {de: 'Webseite - Moritz Petzka (https://petzka.com)', en: 'Website - Moritz Petzka (https://petzka.com)'},
    shareMessage: {de: 'Schaue mal diese Webseite an', en: 'Take a look at this website'},
    description: {
      de: 'Freut mich, dass du auf meine Webseite gefunden hast! \n Mein Name ist Moritz Petzka, ich bin freiberuflicher Webentwickler, Medienschaffender und Künstler. \n\nAuf dieser Webseite findest du einen Überblick über mich und meine Arbeit. \n\n',
      en: 'Glad you found my website!\n' +
        '  My name is Moritz Petzka, I\'m a freelance web developer, media creator and artist.\n' +
        '\n' +
        'On this website you will find a overview of me and my work.'
    },
    email: 'info@petzka.com',
    emailSubject: {de: 'Anfrage', en: 'Inquiry'},
  },
  socialMediaAccounts: {
    github: 'jodermo',
    bitbucket: 'MoPet',
    linkedin: 'moritz-petzka',
    xing: 'Moritz_petzka',
    docker: 'mopet'
  },
  languages: [
    {alias: 'de', iso: 'DE', name: {de: 'Deutsch', en: 'German'}},
    {alias: 'en', iso: 'EN', name: {de: 'Englisch', en: 'English'}}
  ],
  fallbackLanguage: 'en',
  navigation: [
    {title: {de: 'Moritz Petzka', en: 'Moritz Petzka'}, icon: null, link: ''},
    {title: {de: 'Werkzeuge', en: 'Tools'}, icon: null, link: 'tools'},
    {title: {de: 'Links', en: 'Links'}, icon: null, link: 'links'},
    {title: {de: 'Kunden', en: 'Customers'}, icon: null, link: 'customers'},
  ],
  content: {
    title: {de: 'Moritz Petzka'},
    description: {de: 'Webentwicklung', en: 'Web Development'},
    contents: [
      {
        alias: 'webdev',
        title: {de: 'Webentwicklung', en: 'Web Development'},
        image: 'assets/images/webdev.jpg',
        text: {
          de: 'Angefangen als Mediengestalter und Flash-Entwickler, kann ich Heute, auf über 10 erfolgreiche Jahre als Webentwickler, zurück blicken. \n Durch meine Begeisterung an der Arbeit und dem Interesse setehts Neues zu lernen, habe ich mittlerweile so einige Programmiersprachen, Frameworks und nützliche Softwares kennen, können und lieben gelernt. \nIch bin in der Lage, so gut wie jede Aufgabe zum gewünschten Ziel zu bringen. \nOb einfache Webseite oder komplexe Unternehmens-Webseite, Online-Shop, Mobile-App, Online-Werbung, Visualisierung von Daten, Bühnen-Präsentationen oder Messe-Exponaten und Displays. \n\nSie benötigen unterstützung bei einem Projekt? \nHier eine Liste mit Dienstleistungen die ich anbiete:',
          en: 'Starting as a media designer and flash developer, today I can look back on more than 10 successful years as a web developer.\n' +
            'Thanks to my enthusiasm for work and the interest to learn new things, I have come to know, can and love so many programming languages, frameworks and useful softwares.\n' +
            'I am able to bring almost every task to the desired destination.\n' +
            'Whether simple website or complex company website, online shop, mobile apps, online advertising, visualization of data, stage presentations or trade fair exhibits/displays.\n' +
            '\n' +
            'You need assistance with a project?\n' +
            'Here is a list of services I offer:'
        },
        toolText: {
          de: 'Überblick über meine Werkzeuge und Fahigkeiten:\n\n',
          en: 'Overview of my tools and skills\n\n'
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
              de: 'Beckend Entwicklung und Maschinensteuerung',
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
          },
          {
            company: 'Docker, Inc.',
            icon: 'assets/logos/docker-1.svg',
            link: 'https://www.docker.com/',
            products: [
              {
                name: 'Docker',
                icon: 'assets/logos/docker.svg',
                link: 'https://www.docker.com/',
                experienceWorth: 9
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
              }
            ],
          },
        ],
      },
      {
        alias: 'presentation',
        title: {de: 'Interaktive \nPräsentationen', en: 'Interactive \nPresentations'},
        image: 'assets/images/presentation.jpg',
        text: {
          de: 'Ein Web-Interface als interaktive Präsentation, bietet die perfekte Lösung, z.B. für Messestände, Bühnen-Präsentationen oder Werbetafeln. \nMit CSS3, HTML-Canvas-Elementen, SVGs und diversen JavaScript Bibliotheken, lassen sich dynamische Animationen erstellen und dank WebGL und Three.js ist auch die Darstellung von 3-dimensinalen Inhalten ohne Probleme möglich. \nEs besteht zudem die Möglichkeit, neben dem Interface, einen lokalen Webserver laufen zu lassen. So sind für diverse Interaktionen nahezu unbegenzte Möglichkeiten gegeben. \nVerschiedenste Hardware lässt sich so, verbunden mit Netzwerkkabel, USB oder als WLAN Gerät, auslesen und ansteuern. \nSo besteht die Möglichkeit Geräte wie z.B. VR-/AR-Headsets, Gamepads, Einplatinenrechner (z.B. Raspberry Pi) oder Controller und Sensoren anzuschliessen. \n \n Hier ein paar Beispiel-Anwendungen die ich in letzter Zeit umgesetzt habe:',
          en: 'A web interface as an interactive presentation provides the perfect solution, e.g. for exhibition stands, stage presentations or billboards.\n' +
            'With CSS3, HTML canvas elements, SVGs and various JavaScript libraries, dynamic animations can be created and thanks to WebGL and Three.js, the display of 3-dimensional contents is also possible without any problems.\n' +
            'It is also possible to run a local web server next to the interface with the presentation. Thus, there are almost unlimited possibilities for various interactions.\n' +
            'Various hardware can thus be read out and controlled together with a network cable, USB or WLAN device.\n' +
            'So there is the possibility devices such. VR / AR headsets, gamepads, single-board computers (such as Raspberry Pi) or controllers and sensors.\n' +
            ' \n' +
            '  Here are a few example applications that I have recently implemented:',
        },
        toolText: {
          de: 'Überblick über meine Werkzeuge und Fahigkeiten:\n\n',
          en: 'Overview of my tools and skills\n\n'
        },
        list: [
          {
            title: {de: 'Interaktive Werbetafeln', en: 'Interaktive Billboards'},
            description: {
              de: 'Animierte und interaktive Werbetaflen, in diesem Fall auf einer großen Auto-Messe in Hannover. \nPassanten konnten auf Werbetafeln in Form von Touch-Displays auf die Inhalte einwirken. \nEin eingebauter Ruhemodus führte ohne Eingabe, nach einer Zeit auf den Startpunkt zurück. \nBei einem Interface bestand die Herausforderung darin, einen Übergroßen 4K Monitor, mit Radar-Touch (einer externe Radar-Sensorik für Touch und Gestensteurung) anzusteuern. Die Schnittstelle haben wir am Ende über "TUIO" und Websockets realisiert.',
              en: 'Animated and interactive advertising boards, in this case at a big car fair in Hanover.\n' +
                'Passers-by could influence the contents on billboards in the form of touch displays.\n' +
                'A built-in sleep mode returned to the starting point after a time without input.\n' +
                'In one interface, the challenge was to control an oversized 4K monitor with radar touch (an external radar sensor for touch and gesture control). At the end we realized the interface via "TUIO" and Websockets.'
            },
          },
          {
            title: {de: 'Audio/Video-Interfaces', en: 'Audio/Video Interfaces'},
            description: {
              de: 'Verschiedene Video-Player-Interfaces, je nach Benutzer-Interaktion, verändern sich die Ihnalte. \nz.B können Bilder, Animationen oder Texte eingeblendet werden, Ein anderer Video-Clip kann angesteuert werden oder das Video-Abpielverhalten kann verändert werden (z.B. Zeitsprünge, schnelleres oder langsameres Abspielen).',
              en: 'Different video player interfaces, depending on user interaction, change the old one.\n' +
                'For example, images, animations or texts can be displayed, another video clip can be controlled or the video playback behavior can be changed (for example, time jumps, faster or slower playback).'
            },
          },
          {
            title: {de: 'Touchscreen Tisch Mit Object-Steuerung', en: 'Touchscreen Table With Object Controlling'},
            description: {
              de: 'Ein Interaktiver Tisch mit großem 4K-Touchscreen-Monitor als Tischplatte und verbauter Sensorik für Objekt-Erkennung. \nEin Projekt für ür eine große Auto-Messe in Hannover. \nJe nach gelegtem Objekt (hier in Form von Klötzchen) und dessen Position, werden verschiedene Szenarien auf dem Tisch dargestellt. \nFür den reinen Besucher-Modus gab es eine Fallback-Version die sich mit Touchgesten steuern ließ und ohne Klötzchen auskommt. \nDie Konzepte und der Tisch wurden gestellt, das Inteface, die Animation und die Interaktion habe ich entwickelt.',
              en: 'An interactive table with large 4K touch screen monitor as tabletop and built-in sensor for object detection.\n' +
                'A project for a big car fair in Hanover.\n' +
                'Depending on the object placed (here in the form of blocks) and its position, different scenarios are displayed on the table.\n' +
                'For the pure visitor mode, there was a fallback version that could be controlled with touch gestures and gets along without pegs.\n' +
                'The concepts and the table have been set, the interface, the animation and the interaction I have developed.'
            },
          },
          {
            title: {
              de: 'Interaktive Präsentation (als Alternative zu Powerpoint)',
              en: 'Interactive presentation (as an alternative to PowerPoint)'
            },
            description: {
              de: 'Für eine Image-Kampagne einer Großen Firma, habe ich eine interaktive und animierte Präsentation erstellt. \nAusgabe-Gerät war einem großer 4K Touch-Bildschirm. \nDas Interface wurde mit Angular gebaut und die Animationen mit TypeScript und animierten SVGs umgesetzt.',
              en: 'For an image campaign of a big company, I created an interactive and animated presentation.\n' +
                'Output device was a large 4K touch screen.\n' +
                'The interface was built with Angular and implemented the animations with TypeScript and animated SVGs.'
            },
          },
        ],
        programmingLanguages: [
          {
            alias: 'js',
            name: 'TypeScript',
            icon: 'assets/logos/javascript.svg',
            link: null,
            experienceWorth: 10,
            description: {
              de: 'Interface und Lokaler Server',
              en: 'Interface and local server'
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
            alias: 'python',
            name: 'Python',
            icon: 'assets/logos/python-5.svg',
            link: null,
            experienceWorth: 6,
            description: {
              de: 'Sensor- und Maschinensteuerung',
              en: 'Sensor and machine control'
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
            experienceWorth: 9.5,
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
            experienceWorth: 8.2,
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
            experienceWorth: 9.9,
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
            experienceWorth: 7.5,
            description: {
              de: 'D3.js ist eine JavaScript-Bibliothek zum Bearbeiten von Dokumenten basierend auf Daten',
              en: 'D3.js is a JavaScript library for manipulating documents based on data'
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
          }
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
            ],
          },
          {
            company: 'Docker, Inc.',
            icon: 'assets/logos/docker-1.svg',
            link: 'https://www.docker.com/',
            products: [
              {
                name: 'Docker',
                icon: 'assets/logos/docker.svg',
                link: 'https://www.docker.com/',
                experienceWorth: 6
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
                experienceWorth: 9
              },
              {
                name: 'Illustrator',
                icon: 'assets/logos/adobe-illustrator-cc.svg',
                link: 'https://helpx.adobe.com/illustrator/faq.html',
                experienceWorth: 8.4
              },
              {
                name: 'Premiere',
                icon: 'assets/logos/premiere-cc.svg',
                link: 'https://helpx.adobe.com/premiere/faq.html',
                experienceWorth: 8.9
              },
              {
                name: 'After-Effects',
                icon: 'assets/logos/after-effects-cc.svg',
                link: 'https://helpx.adobe.com/after-effects/faq.html',
                experienceWorth: 8
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
                experienceWorth: 8.5
              }
            ],
          },
        ],
      },
      {
        alias: 'graphix',
        title: {de: 'Grafik & Animation', en: 'Graphic & Animation'},
        image: 'assets/images/gfx.jpg',
        text: {
          de: 'Wegen meiner künstlerichen Begabung und Leidenschaft für Medien und deren Gestaltung, habe ich mich nach meiner Schullaufbahn dazu entschieden, eine Ausbildung als Mediengestalter und Gestaltungtechnischer-Assistent zu machen, diese habe ich dann 2010 auch erfolgreich abgeschlossen. \nDie Ausbildung hat mir damals einen optimalen Berufseinstieg, als Grafiker, Motion/VFX designer und Flash-Entwickler, bei der Firma ImagineOn in Köln, verschafft und seit 2012 bin ich erfolgreich Selbstständig. \nBis heute ist die Gestaltung und Bearbeitung von Visuellen Medien eine große Leidenschaft von mir. In Verbindung mit einer weiteren Leideschaft, dem Programmieren, habe ich über die Letzten Jahre mein Know-How, vor allem im Bereich Animation und 3D-Design immer weiter ausbauen können. \n\nHier eine Liste von Dienstleistungen die ich anbiete:',
          en: 'Due to my passion for media in the picture and sound and my creative talents, I decided to do an apprenticeship as a media designer and design technical assistant, which I successfully completed in 2010.\n' +
            'The apprenticeship gave me an optimal career start, as a graphic/motion/VFX designer and flash developer.\n' +
            'To this day, designing and editing visual media is a great passion of mine. In connection with another suffering, the programming, I have been able to expand my know-how over the last years, especially in the field of animation and 3D design.\n' +
            '\n' +
            'Here is a list of things I do:',
        },
        toolText: {
          de: 'Überblick über meine Werkzeuge und Fahigkeiten:\n\n',
          en: 'Overview of my tools and skills\n\n'
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
              de: 'Modeling, Animation und Rendering',
              en: 'Modeling, Animation and Rendering'
            },
          },
          {
            title: {de: 'HTML/CSS (2D & 3D)', en: 'HTML/CSS (2D & 3D)'},
            description: {
              de: 'Web-Basierte Layouts und Animationen mit CSS3, SASS oder LESS',
              en: 'Web-based layouts and animations with CSS3, SASS or LESS'
            },
          },
          {
            title: {de: 'HTML Canvas (2D)', en: 'HTML Canvas Animations'},
            description: {
              de: 'Web-Basierte 2D Animationen mit HTML und JavaScript',
              en: 'Web-based 2D animations with HTML and JavaScript'
            },
          },
          {
            title: {de: 'WebGL 3D', en: 'WebGL 3D Animations'},
            description: {
              de: 'Web-Basierte Layouts und Animationen in 3D, lauffähig in allen gängigen Browsern.',
              en: 'Web-based layouts and animations in 3D, executable in all major browsers.'
            },
          },
          {
            title: {de: 'WebGL VR & AR', en: 'WebGL VR & AR'},
            description: {
              de: 'Vituelle Realität im Browser, mit WebGL und Three.js',
              en: 'Virtual reality in the browser, with WebGL and Three.js'
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
            link: 'https://www.blender.org/',
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
          de: 'In meiner Ausbildung als Mediengestalter, habe ich die Grundlagen für Video-Produktion und Nachbearbeitung gelernt. \nBis heute ist die aufbereitung von Video-Material ein großer Bestandteil meiner Arbeit. \nDie Verbindung aus Grafik-Bearbeitung, Animation und Video-Bearbeitung hat dazu geführ, das ich mich zudem vermehrt auf die Erstellung von VFX und Motion-Designs spezialisiert habe. \n\nEine Überblick über Dienstleistungen die ich anbiete:',
          en: 'In my training as a media designer, I learned the basics of video production and post-production.\n' +
            'To date, the preparation of video material is a major part of my work.\n' +
            'The combination of graphics editing, animation and video editing has meant that I have also increasingly specialized in the creation of VFX and motion designs.\n' +
            '\n' +
            'An overview of the services I offer:',
        },
        toolText: {
          de: 'Überblick über meine Werkzeuge und Fahigkeiten:\n\n',
          en: 'Overview of my tools and skills\n\n'
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
          },
          {
            company: 'Steinberg',
            icon: 'assets/logos/steinberg-sx.svg',
            link: 'https://new.steinberg.net/',
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
        ]
      },
    ]
  },
  footer: {
    navigation: [
      {title: {de: 'Kontakt', en: 'Contact'}, icon: null, link: 'contact'},
      {title: {de: 'Impressum', en: 'Imprint'}, icon: null, link: 'imprint'},
    ],
  },
  links: [
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
      alias: 'linkedin',
      name: 'linkedIn',
      description: {de: 'Mein Profil auf www.linkedin.com', en: 'My Account on freelancermap'},
      image: 'assets/images/linkedIn.jpg',
      url: 'https://www.linkedin.com/in/moritz-petzka',
    },
    {
      alias: 'showroom',
      name: 'Show Room',
      description: {de: 'Eine kleine Sammlung an Demo-Projekten von mir', en: 'A small selection of my demo projects'},
      image: 'assets/images/showroom.jpg',
      url: 'http://showroom.petzka.com/',
    },
    /*
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
      */
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
      logo: 'assets/images/douglas_logo.svg',
      tasks: [
        {de: 'Mitglied im Web-Development Team', en: 'Member of the web development team'},
        {de: 'Instandhaltung und Pflege des Online-Auftritts', en: 'Maintenance and care of the online presence'},
        {de: 'Erstellung von internationalen Online-Kampagnen', en: 'Creation of international online campaigns'}
      ],
      technologies: [
        {de: 'Hybris', en: 'Hybris'},
        {de: 'React', en: 'React'},
        {de: 'JavaScript', en: 'JavaScript'},
        {de: 'HTML & CSS', en: 'HTML & CSS'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
    },
    {
      name: 'Cormanum',
      description: {de: 'DIE WELT UM HANDWERK, KUNST UND DESIGN', en: ''},
      website: 'https://www.cormanum.com/',
      image: 'assets/images/cormanum_bg.jpg',
      logo: 'assets/images/cormanum.svg',
      tasks: [
        {de: 'Entwicklung des Online-Shops', en: 'Development of the online shop'},
        {de: 'Betreuung des Online-Shops', en: 'Care of the online shop'},
      ],
      technologies: [
        {de: 'Shopware', en: 'Shopware'},
        {de: 'JavaScript', en: 'JavaScript'},
        {de: 'HTML & CSS', en: 'HTML & CSS'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
    },
    {
      name: 'BadaLuma',
      description: {de: 'digital solutions focused on healthcare', en: 'digital solutions focused on healthcare'},
      website: 'https://badaluma.com/',
      image: 'assets/images/badaluma_bg.jpg',
      logo: 'assets/images/badaluma.png',
      tasks: [
        {de: 'Technische Beratung', en: 'Technical advices'},
        {de: 'Technische Konzeption von Apps', en: 'Technical conception of apps'},
        {de: 'Entwicklung modularer Komponenten für Apps', en: 'Development of the online shop'},
      ],
      technologies: [
        {de: 'Node.js', en: 'Node.js'},
        {de: 'Angular', en: 'Angular'},
        {de: 'TypeScript', en: 'TypeScript'},
        {de: 'JavaScript', en: 'JavaScript'},
        {de: 'D3.js', en: 'D3.js'},
        {de: 'HTML & CSS', en: 'HTML & CSS'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
    },
    {
      name: 'pabana',
      description: {de: 'interactive interfaces - healthcare', en: 'interactive interfaces - healthcare'},
      website: 'http://pabana.com/',
      image: 'assets/images/pabana_bg.jpg',
      logo: 'assets/images/pabana_bg.jpg',
      tasks: [
        {de: 'Technische Beratung', en: 'Technical advices'},
        {de: 'Technische Konzeption von Apps', en: 'Technical conception of apps'},
        {de: 'Entwicklung modularer Komponenten für Apps', en: 'Development of the online shop'},
      ],
      technologies: [
        {de: 'Node.js', en: 'Node.js'},
        {de: 'Angular', en: 'Angular'},
        {de: 'TypeScript', en: 'TypeScript'},
        {de: 'JavaScript', en: 'JavaScript'},
        {de: 'D3.js', en: 'D3.js'},
        {de: 'HTML & CSS', en: 'HTML & CSS'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
    },
    {
      name: 'TAKEPART',
      description: {de: 'media and science', en: 'media and science'},
      website: 'http://takepart-media.de',
      image: 'assets/images/takepart_bg.jpg',
      logo: 'assets/images/takepart.png',
      tasks: [
        {
          de: 'Umsetzung von Webseiten zu Kampagnen im Healthcare-Sektor',
          en: 'Implementation of websites for campaigns in the healthcare sector'
        },
      ],
      technologies: [
        {de: 'Contao CMS', en: 'Contao CMS'},
        {de: 'JavaScript', en: 'JavaScript'},
        {de: 'HTML & CSS', en: 'HTML & CSS'},
        {de: 'PHP', en: 'PHP'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
    },
    {
      name: 'art tempi',
      description: {de: 'Agentur für Gesundheitskommunikation', en: 'Agentur für Gesundheitskommunikation'},
      website: 'http://www.art-tempi.de/',
      image: 'assets/images/art_tempi_bg.jpg',
      logo: 'assets/images/arttempi.png',
      tasks: [
        {
          de: 'Umsetzung von Webseiten zu Kampagnen im Healthcare-Sektor',
          en: 'Implementation of websites for campaigns in the healthcare sector'
        },
      ],
      technologies: [
        {de: 'Contao CMS', en: 'Contao CMS'},
        {de: 'JavaScript', en: 'JavaScript'},
        {de: 'HTML & CSS', en: 'HTML & CSS'},
        {de: 'PHP', en: 'PHP'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
    },
    {
      name: 'CD Werbeagentur',
      description: {de: 'Full Service Agentur', en: 'Full Service Agentur'},
      website: 'http://www.cdonline.de/',
      image: 'assets/images/cd_werbeagentur_bg.jpg',
      logo: 'assets/images/CD-Werbeagentur.png',
      tasks: [
        {de: 'Erstellung von Animationen', en: 'Creation of animations'},
        {de: 'Video Schnitt', en: 'Video editing'},
        {de: 'Video Nachbearbeitung', en: 'Video post production'},
      ],
      technologies: [
        {de: 'Adobe Premiere', en: 'Adobe Premiere'},
        {de: 'Adobe After-Effects', en: 'Adobe After-Effects'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
    },
    {
      name: 'iElements',
      description: {de: 'Internetagentur aus Köln', en: 'Internetagentur aus Köln'},
      website: 'http://www.i-elements.de/',
      image: 'assets/images/iElements_bg.jpg',
      logo: 'assets/images/ie-logo.png',
      tasks: [
        {de: 'Erstellung von Facebook-Apps', en: 'Creation of Facebook apps'},
        {de: 'Erstellung von Websites', en: 'Creation of websites'},
        {de: 'Betreuung von Online-Kampagnen', en: 'Supervision of online campaigns'},
      ],
      technologies: [
        {de: 'AngularJS', en: 'AngularJS'},
        {de: 'Wordpress', en: 'Wordpress'},
        {de: 'JavaScript', en: 'JavaScript'},
        {de: 'HTML & CSS', en: 'HTML & CSS'},
        {de: 'PHP', en: 'PHP'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
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
      logo: 'assets/images/underground-events_black.png',
      tasks: [
        {de: 'Erstellung von Webseiten', en: 'Creation of websites'},
        {de: 'Erstellung von Facebook-Apps', en: 'Creation of Facebook apps'},
        {de: 'Betreuung von Online-Kampagnen', en: 'Supervision of online campaigns'},
      ],
      technologies: [
        {de: 'Contao CMS', en: 'Contao CMS'},
        {de: 'Angular', en: 'Angular'},
        {de: 'JavaScript', en: 'JavaScript'},
        {de: 'HTML & CSS', en: 'HTML & CSS'},
        {de: 'PHP', en: 'PHP'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
    },
    {
      name: 'Crew4You',
      description: {de: 'TV, Grafik & Web', en: 'TV, Graphic & Web'},
      website: 'http://www.crew4you.info/',
      image: 'assets/images/crew_4_you_bg.jpg',
      logo: 'assets/images/c4u.png',
      tasks: [
        {de: 'Betreuung von Webseiten', en: 'Supervision of websites'},
        {de: 'Ausbau einer API', en: 'Expansion of an API'},
      ],
      technologies: [
        {de: 'PHP', en: 'PHP'},
        {de: 'JavaScript', en: 'JavaScript'},
        {de: 'HTML & CSS', en: 'HTML & CSS'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
    },
    {
      name: 'Blue Byte / UBISOFT',
      description: {de: 'Ubisoft studio', en: 'Ubisoft studio'},
      website: 'http://www.bluebyte.com',
      image: 'assets/images/bluebyte_ubisoft_bg.jpg',
      logo: 'assets/images/bluebyte_logo-small.png',
      tasks: [
        {de: 'Erstellung von Online-Werbung', en: 'Creation of online advertising'},
      ],
      technologies: [
        {de: 'Adobe Flash', en: 'Adobe Flash'},
        {de: 'Powerflasher FDT', en: 'Powerflasher FDT'},
      ]
    },
    {
      name: 'Webagentur Köln',
      description: {de: 'Webdesign Agentur aus Köln', en: 'Webdesign Agentur aus Köln'},
      website: 'http://www.webagentur-koeln.de/',
      image: 'assets/images/webagentur_koeln_bg.jpg',
      logo: 'assets/images/wk_logo.png',
      tasks: [
        {de: 'Erstellung von Webseiten', en: 'Creation of websites'},
        {de: 'Erstellung von Online-Shops', en: 'Creation of online shops'},
        {de: 'Betreuung von Projekten', en: 'Supervision of projects'},
      ],
      technologies: [
        {de: 'Shopware', en: 'Shopware'},
        {de: 'Contao CMS', en: 'Contao CMS'},
        {de: 'Angular', en: 'Angular'},
        {de: 'JavaScript', en: 'JavaScript'},
        {de: 'PHP', en: 'PHP'},
        {de: 'HTML & CSS', en: 'HTML & CSS'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
    },
    {
      name: 'Temtra insulations',
      description: {de: 'Isolationen und Thermische Trennung', en: 'Isolationen und Thermische Trennung'},
      website: 'http://temtra.de/',
      image: 'assets/images/temtra_bg.jpg',
      logo: 'assets/images/temtra_logo_negativ_neu.jpg',
      tasks: [
        {de: 'Erstellung des Online-Auftritts', en: 'Creation of the online presence'},
      ],
      technologies: [
        {de: 'Contao CMS', en: 'Contao CMS'},
        {de: 'JavaScript', en: 'JavaScript'},
        {de: 'HTML & CSS', en: 'HTML & CSS'},
        {de: 'PHP', en: 'PHP'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
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
      logo: 'assets/images/afmwe-logo.svg',
      tasks: [
        {
          de: 'Erstellung eines Flash-Fallback \bin Form einer JavaScript-/HTML5-Seite',
          en: 'Create a Flash fallback in the form of a JavaScript / HTML5 page'
        },
      ],
      technologies: [
        {de: 'JavaScript', en: 'JavaScript'},
        {de: 'HTML & CSS', en: 'HTML & CSS'},
        {de: 'Adobe Photoshop', en: 'Adobe Photoshop'}
      ]
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
      de: 'Erfahrungswert',
      en: 'Experience Worth'
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
      alias: 'form_sumitted_text',
      de: 'Vielen Dank! \nDie Nachricht wurde erfolgreich an mich gesendet. \n\nIch werde mich so schnell wie Möglich melden.',
      en: 'Used technologies'
    },
    {
      alias: 'form_sumitted_not_valid',
      de: 'Bitte alle benötigten Felder ausfüllen',
      en: 'fill in all required fields, please'
    },
    {
      alias: 'form_sumitted_error',
      de: 'Ups! \nDa ist etwas schief gelaufen. \nVersuche es zu einem späteren Zeitpunkt noch einmal.',
      en: 'Oops!\n' +
        'Something went wrong.\n' +
        'Try again later.'
    },
    {
      alias: 'go_to_start',
      de: 'Hier gehts zur Startseite',
      en: 'Here you go to the start page'
    },
    {
      alias: 'share',
      de: 'Teilen:',
      en: 'Share:'
    }
  ],
  experienceWorth: [
    ['node', 10],
    ['angular', 10],
    ['react', 7],
    ['vue', 6.5],
    ['jQuery', 10],
    ['nestjs', 8.2],
    ['three', 10],
    ['d3', 7.5],
    ['sass', 10],
    ['less', 8],
    ['sqlite ', 6.75],
    ['js', 10],
    ['html', 10],
    ['css', 10],
    ['python', 5],
    ['database', 7.6],
    ['WebStorm', 10],
    ['PhpStorm', 6],
    ['Docker', 6],
    ['symfony', 6],
    ['mysql', 8],
    ['sqlite', 9.5],
    ['mongodb', 9],
    ['jsonserver', 6],
    ['zend', 5],
    ['Photoshop', 10],
    ['Illustrator', 9.5],
    ['InDesign', 7],
    ['Premiere', 8.9],
    ['After-Effects', 8],
    ['Maya', 8.5],
    ['Mudbox', 6],
    ['3ds Max', 5],
    ['Blender', 7],
    ['Animate Pro', 8],
    ['Harmony', 3],
    ['Cubase', 8.5],
    ['Nuendo', 5],
    ['Wavelab', 6],
    ['Ableton Live', 7],
    ['Visual Studio Community', 9],
    ['Visual Studio Code', 8.5],
  ]
};
