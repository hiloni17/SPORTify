const sportsData = {
    'fencing': {
        title: 'Fencing',
        banner: 'img/fencing-banner.jpg',
        description: 'Fencing is a combat sport that features sword fighting. The three disciplines of modern fencing are the foil, épée, and sabre. Each discipline uses a different type of blade and has different rules.',
        playersCount: '1',
        origin: 'Europe, 15th century',
        majorCompetition: 'Olympic Fencing',
        rules: [
            'Fencers must score points by hitting valid target areas with their weapon',
            'Each discipline has different target areas and scoring rules',
            'Matches are divided into three rounds of three minutes each',
            'The first fencer to reach 15 points wins, or the one with the highest score after time expires'
        ],
        famousPlayers: [
            {
                name: 'Edoardo Mangiarotti',
                image: 'img/players/mangiarotti.jpg',
                achievement: 'Most Olympic Medals in Fencing',
                wikipedia: 'https://en.wikipedia.org/wiki/Edoardo_Mangiarotti'
            },
            {
                name: 'Valentina Vezzali',
                image: 'img/players/vezzali.jpg',
                achievement: '6x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Valentina_Vezzali'
            },
            {
                name: 'Aladar Gerevich',
                image: 'img/players/gerevich.jpg',
                achievement: '10x Olympic Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Alad%C3%A1r_Gerevich'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '26', month: 'JUL' },
                title: 'Olympic Fencing',
                location: 'Paris, France'
            },
            {
                date: { day: '15', month: 'JUN' },
                title: 'World Fencing Championships',
                location: 'Milan, Italy'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'European Fencing Championships',
                location: 'Basel, Switzerland'
            }
        ]
    },

    'diving': {
        title: 'Diving',
        banner: 'img/diving-banner.jpg',
        description: 'Diving is a sport in which athletes jump or fall into water from a platform or springboard, performing acrobatic movements while in the air. It is recognized as an Olympic sport.',
        playersCount: '1',
        origin: 'Germany, 17th century',
        majorCompetition: 'Olympic Diving',
        rules: [
            'Divers must perform a series of dives from different positions',
            'Each dive is scored by judges based on execution, difficulty, and entry',
            'Scores are multiplied by the dive\'s degree of difficulty',
            'The diver with the highest total score wins'
        ],
        famousPlayers: [
            {
                name: 'Greg Louganis',
                image: 'img/players/louganis.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Greg_Louganis'
            },
            {
                name: 'Fu Mingxia',
                image: 'img/players/mingxia.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Fu_Mingxia'
            },
            {
                name: 'Tom Daley',
                image: 'img/players/daley.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Tom_Daley'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '27', month: 'JUL' },
                title: 'Olympic Diving',
                location: 'Paris, France'
            },
            {
                date: { day: '14', month: 'FEB' },
                title: 'World Aquatics Championships',
                location: 'Doha, Qatar'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'European Diving Championships',
                location: 'Rostock, Germany'
            }
        ]
    },

    'synchronized-swimming': {
        title: 'Synchronized Swimming',
        banner: 'img/synchronized-swimming-banner.jpg',
        description: 'Synchronized swimming is a hybrid form of swimming, dance, and gymnastics, consisting of swimmers performing a synchronized routine of elaborate moves in the water, accompanied by music.',
        playersCount: '2-8',
        origin: 'Canada, 1920s',
        majorCompetition: 'Olympic Synchronized Swimming',
        rules: [
            'Teams must perform synchronized routines in the water',
            'Routines include technical elements and artistic impression',
            'Swimmers must maintain synchronization while performing complex movements',
            'Scores are based on technical merit, artistic impression, and difficulty'
        ],
        famousPlayers: [
            {
                name: 'Anastasia Davydova',
                image: 'img/players/davydova.jpg',
                achievement: '5x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Anastasia_Davydova'
            },
            {
                name: 'Natalia Ishchenko',
                image: 'img/players/ishchenko.jpg',
                achievement: '5x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Natalia_Ishchenko'
            },
            {
                name: 'Svetlana Romashina',
                image: 'img/players/romashina.jpg',
                achievement: '7x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Svetlana_Romashina'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '05', month: 'AUG' },
                title: 'Olympic Synchronized Swimming',
                location: 'Paris, France'
            },
            {
                date: { day: '14', month: 'FEB' },
                title: 'World Aquatics Championships',
                location: 'Doha, Qatar'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'European Synchronized Swimming Championships',
                location: 'Oviedo, Spain'
            }
        ]
    },

    'water-polo': {
        title: 'Water Polo',
        banner: 'img/water-polo-banner.jpg',
        description: 'Water polo is a competitive team sport played in water between two teams. The game consists of four quarters in which the teams attempt to score goals by throwing the ball into the opposing team\'s goal.',
        playersCount: '7',
        origin: 'Scotland, 19th century',
        majorCompetition: 'Olympic Water Polo',
        rules: [
            'Each team has 7 players in the water at a time',
            'Players must swim and tread water throughout the game',
            'Goals are scored by throwing the ball into the opponent\'s net',
            'Players cannot touch the bottom of the pool or hold the ball underwater',
            'The team with the most goals at the end of the game wins'
        ],
        famousPlayers: [
            {
                name: 'Dezso Gyarmati',
                image: 'img/players/gyarmati.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Dezs%C5%91_Gyarmati'
            },
            {
                name: 'Manuel Estiarte',
                image: 'img/players/estiarte.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Manuel_Estiarte'
            },
            {
                name: 'Tony Azevedo',
                image: 'img/players/azevedo.jpg',
                achievement: '5x Olympian',
                wikipedia: 'https://en.wikipedia.org/wiki/Tony_Azevedo'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '28', month: 'JUL' },
                title: 'Olympic Water Polo',
                location: 'Paris, France'
            },
            {
                date: { day: '14', month: 'FEB' },
                title: 'World Aquatics Championships',
                location: 'Doha, Qatar'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'European Water Polo Championships',
                location: 'Zagreb, Croatia'
            }
        ]
    },

    'canoeing': {
        title: 'Canoeing',
        banner: 'img/canoeing-banner.jpg',
        description: 'Canoeing is a sport in which athletes paddle a canoe or kayak on water. The sport includes various disciplines such as sprint, slalom, and marathon racing.',
        playersCount: '1-4',
        origin: 'North America, Prehistoric times',
        majorCompetition: 'Olympic Canoeing',
        rules: [
            'Athletes must paddle their boats according to specific techniques',
            'Different events have different distance requirements',
            'Boats must stay in their designated lanes',
            'Athletes must wear proper safety equipment',
            'Races are timed to determine winners',
            'Slalom events require navigating through gates',
            'Marathon events have specific portage rules',
            'Team boats must maintain synchronization',
            'Athletes cannot interfere with other competitors',
            'Equipment must meet specific regulations'
        ],
        famousPlayers: [
            {
                name: 'Birgit Fischer',
                image: 'img/players/fischer.jpg',
                achievement: '8x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Birgit_Fischer'
            },
            {
                name: 'Ian Ferguson',
                image: 'img/players/ferguson.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Ian_Ferguson_(canoeist)'
            },
            {
                name: 'Tony Estanguet',
                image: 'img/players/estanguet.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Tony_Estanguet'
            },
            {
                name: 'Katalin Kovács',
                image: 'img/players/kovacs.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Katalin_Kov%C3%A1cs'
            },
            {
                name: 'Marcus Hallam',
                image: 'img/players/hallam.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Marcus_Hallam'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Canoeing',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'World Cup Series',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'APR' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAY' },
                title: 'Asian Championships',
                location: 'Various Locations'
            }
        ]
    },

    'rowing': {
        title: 'Rowing',
        banner: 'img/rowing-banner.jpg',
        description: 'Rowing is a sport in which athletes propel a boat on water using oars. The sport can be practiced in various boat types, from single sculls to eight-person shells with a coxswain.',
        playersCount: '1-9',
        origin: 'England, 18th century',
        majorCompetition: 'Olympic Rowing',
        rules: [
            'Athletes must row in perfect synchronization',
            'Races are typically 2000 meters for Olympic events',
            'Boats must stay in their designated lanes',
            'Athletes must wear proper safety equipment',
            'Races are timed to determine winners',
            'Different boat classes have specific rules',
            'Coxswains must meet weight requirements',
            'Athletes cannot interfere with other competitors',
            'Equipment must meet specific regulations',
            'False starts result in penalties'
        ],
        famousPlayers: [
            {
                name: 'Steve Redgrave',
                image: 'img/players/redgrave.jpg',
                achievement: '5x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Steve_Redgrave'
            },
            {
                name: 'Elisabeta Lipă',
                image: 'img/players/lipa.jpg',
                achievement: '5x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Elisabeta_Lip%C4%83'
            },
            {
                name: 'Matthew Pinsent',
                image: 'img/players/pinsent.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Matthew_Pinsent'
            },
            {
                name: 'Kathrin Boron',
                image: 'img/players/boron.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Kathrin_Boron'
            },
            {
                name: 'James Tomkins',
                image: 'img/players/tomkins.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/James_Tomkins_(rower)'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Rowing',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'World Rowing Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'World Cup Series',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'APR' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAY' },
                title: 'Henley Royal Regatta',
                location: 'Henley-on-Thames, UK'
            }
        ]
    },

    'modern-pentathlon': {
        title: 'Modern Pentathlon',
        banner: 'img/modern-pentathlon-banner.jpg',
        description: 'Modern pentathlon is an Olympic sport that comprises five different events: fencing, swimming, equestrian show jumping, and a combined event of pistol shooting and cross-country running.',
        playersCount: '1',
        origin: 'Sweden, 1912',
        majorCompetition: 'Olympic Modern Pentathlon',
        rules: [
            'Athletes must compete in all five disciplines',
            'Points are awarded in each event',
            'The combined event (shooting/running) is the final event',
            'Athletes start the combined event based on their total points',
            'The first athlete to cross the finish line wins',
            'Equestrian event uses unfamiliar horses',
            'Fencing uses épée with one-touch bouts',
            'Swimming is 200m freestyle',
            'Shooting involves laser pistols',
            'Running is 3200m cross-country'
        ],
        famousPlayers: [
            {
                name: 'Lars Hall',
                image: 'img/players/hall.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Lars_Hall'
            },
            {
                name: 'Andrey Moiseev',
                image: 'img/players/moiseev.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Andrey_Moiseev'
            },
            {
                name: 'Chandeleur',
                image: 'img/players/chandeleur.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Chandeleur'
            },
            {
                name: 'Laura Asadauskaitė',
                image: 'img/players/asadauskaite.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Laura_Asadauskait%C4%97'
            },
            {
                name: 'Suzanne Lenglen',
                image: 'img/players/lenglen.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Suzanne_Lenglen'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Modern Pentathlon',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'World Cup Series',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'APR' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAY' },
                title: 'Asian Championships',
                location: 'Various Locations'
            }
        ]
    },

    'biathlon': {
        title: 'Biathlon',
        banner: 'img/biathlon-banner.jpg',
        description: 'Biathlon is a winter sport that combines cross-country skiing and rifle shooting. It is a challenging sport that requires both endurance and precision.',
        playersCount: '1-4',
        origin: 'Norway, 18th century',
        majorCompetition: 'Olympic Biathlon',
        rules: [
            'Athletes must ski a course and shoot at targets',
            'Missing targets results in penalty loops or time penalties',
            'Different events have different shooting positions',
            'Athletes must carry their rifles while skiing',
            'Races are timed to determine winners',
            'Relay events require tag exchanges',
            'Mass start events have specific start procedures',
            'Athletes must follow the marked course',
            'Shooting range rules must be followed',
            'Equipment must meet specific regulations'
        ],
        famousPlayers: [
            {
                name: 'Ole Einar Bjørndalen',
                image: 'img/players/bjorndalen.jpg',
                achievement: '8x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Ole_Einar_Bj%C3%B8rndalen'
            },
            {
                name: 'Magdalena Neuner',
                image: 'img/players/neuner.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Magdalena_Neuner'
            },
            {
                name: 'Martin Fourcade',
                image: 'img/players/fourcade.jpg',
                achievement: '5x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Martin_Fourcade'
            },
            {
                name: 'Darya Domracheva',
                image: 'img/players/domracheva.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Darya_Domracheva'
            },
            {
                name: 'Emil Hegle Svendsen',
                image: 'img/players/svendsen.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Emil_Hegle_Svendsen'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'FEB' },
                title: 'Olympic Biathlon',
                location: 'Milan-Cortina, Italy'
            },
            {
                date: { day: '01', month: 'DEC' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'NOV' },
                title: 'World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'IBU Cup',
                location: 'Various Locations'
            }
        ]
    },

    'curling': {
        title: 'Curling',
        banner: 'img/curling-banner.jpg',
        description: 'Curling is a sport in which players slide stones on a sheet of ice towards a target area which is segmented into four concentric circles. It is related to bowls, boules and shuffleboard.',
        playersCount: '4',
        origin: 'Scotland, 16th century',
        majorCompetition: 'Olympic Curling',
        rules: [
            'Teams must slide stones towards the target area',
            'Points are scored for stones closest to the center',
            'Games consist of 8-10 ends',
            'Players can sweep the ice to influence stone movement',
            'The team with the most points after all ends wins',
            'Stones must be released before the hog line',
            'Sweeping can only be done by team members',
            'Stones can be removed by hitting them with other stones',
            'The hammer (last stone) alternates between teams',
            'Games can end early if mathematically decided'
        ],
        famousPlayers: [
            {
                name: 'Kevin Martin',
                image: 'img/players/martin.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Kevin_Martin_(curler)'
            },
            {
                name: 'Anette Norberg',
                image: 'img/players/norberg.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Anette_Norberg'
            },
            {
                name: 'Eve Muirhead',
                image: 'img/players/muirhead.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Eve_Muirhead'
            },
            {
                name: 'Niklas Edin',
                image: 'img/players/edin.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Niklas_Edin'
            },
            {
                name: 'Jennifer Jones',
                image: 'img/players/jones.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Jennifer_Jones_(curler)'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'FEB' },
                title: 'Olympic Curling',
                location: 'Milan-Cortina, Italy'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'NOV' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'DEC' },
                title: 'Grand Slam of Curling',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Continental Cup',
                location: 'Various Locations'
            }
        ]
    },

    'skeleton': {
        title: 'Skeleton',
        banner: 'img/skeleton-banner.jpg',
        description: 'Skeleton is a winter sliding sport in which a person rides a small sled, known as a skeleton bobsled, down a frozen track while lying face down and head-first.',
        playersCount: '1',
        origin: 'Switzerland, 19th century',
        majorCompetition: 'Olympic Skeleton',
        rules: [
            'Athletes must ride face down and head-first',
            'Races are timed to determine winners',
            'Athletes must start within specific parameters',
            'The sled must meet specific weight requirements',
            'Athletes must follow the track markings',
            'Equipment must meet safety standards',
            'Athletes must wear proper protective gear',
            'False starts result in disqualification',
            'Athletes must maintain control throughout the run',
            'Multiple runs are combined for final results'
        ],
        famousPlayers: [
            {
                name: 'Lizzy Yarnold',
                image: 'img/players/yarnold.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Lizzy_Yarnold'
            },
            {
                name: 'Martins Dukurs',
                image: 'img/players/dukurs.jpg',
                achievement: '2x Olympic Silver Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Martins_Dukurs'
            },
            {
                name: 'Amy Williams',
                image: 'img/players/williams.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Amy_Williams'
            },
            {
                name: 'Alexander Tretiakov',
                image: 'img/players/tretiakov.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Alexander_Tretiakov'
            },
            {
                name: 'Matti Ericksen',
                image: 'img/players/ericksen.jpg',
                achievement: 'Olympic Silver Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Matti_Ericksen'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'FEB' },
                title: 'Olympic Skeleton',
                location: 'Milan-Cortina, Italy'
            },
            {
                date: { day: '01', month: 'DEC' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'NOV' },
                title: 'World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'Intercontinental Cup',
                location: 'Various Locations'
            }
        ]
    },

    'luge': {
        title: 'Luge',
        banner: 'img/luge-banner.jpg',
        description: 'Luge is a winter sliding sport in which one or two people ride a small sled down a track while lying on their back and feet-first. It is one of the fastest Olympic sports.',
        playersCount: '1-2',
        origin: 'Switzerland, 19th century',
        majorCompetition: 'Olympic Luge',
        rules: [
            'Athletes must ride feet-first on their backs',
            'Races are timed to determine winners',
            'Athletes must start within specific parameters',
            'The sled must meet specific weight requirements',
            'Athletes must follow the track markings',
            'Equipment must meet safety standards',
            'Athletes must wear proper protective gear',
            'False starts result in disqualification',
            'Athletes must maintain control throughout the run',
            'Multiple runs are combined for final results'
        ],
        famousPlayers: [
            {
                name: 'Georg Hackl',
                image: 'img/players/hackl.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Georg_Hackl'
            },
            {
                name: 'Armin Zöggeler',
                image: 'img/players/zoggeler.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Armin_Z%C3%B6ggeler'
            },
            {
                name: 'Natalie Geisenberger',
                image: 'img/players/geisenberger.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Natalie_Geisenberger'
            },
            {
                name: 'Felix Loch',
                image: 'img/players/loch.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Felix_Loch'
            },
            {
                name: 'Tatjana Hüfner',
                image: 'img/players/hufner.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Tatjana_H%C3%BCfner'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'FEB' },
                title: 'Olympic Luge',
                location: 'Milan-Cortina, Italy'
            },
            {
                date: { day: '01', month: 'DEC' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'NOV' },
                title: 'World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'Junior World Championships',
                location: 'Various Locations'
            }
        ]
    },

    'bobsleigh': {
        title: 'Bobsleigh',
        banner: 'img/bobsleigh-banner.jpg',
        description: 'Bobsleigh is a winter sliding sport in which teams make timed runs down narrow, twisting, banked, iced tracks in a gravity-powered sled.',
        playersCount: '2-4',
        origin: 'Switzerland, 19th century',
        majorCompetition: 'Olympic Bobsleigh',
        rules: [
            'Teams must push the sled to start',
            'Races are timed to determine winners',
            'Athletes must start within specific parameters',
            'The sled must meet specific weight requirements',
            'Athletes must follow the track markings',
            'Equipment must meet safety standards',
            'Athletes must wear proper protective gear',
            'False starts result in disqualification',
            'Athletes must maintain control throughout the run',
            'Multiple runs are combined for final results'
        ],
        famousPlayers: [
            {
                name: 'André Lange',
                image: 'img/players/lange.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Andr%C3%A9_Lange'
            },
            {
                name: 'Kevin Kuske',
                image: 'img/players/kuske.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Kevin_Kuske'
            },
            {
                name: 'Kaillie Humphries',
                image: 'img/players/humphries.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Kaillie_Humphries'
            },
            {
                name: 'Steven Holcomb',
                image: 'img/players/holcomb.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Steven_Holcomb'
            },
            {
                name: 'Elana Meyers Taylor',
                image: 'img/players/taylor.jpg',
                achievement: '3x Olympic Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Elana_Meyers_Taylor'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'FEB' },
                title: 'Olympic Bobsleigh',
                location: 'Milan-Cortina, Italy'
            },
            {
                date: { day: '01', month: 'DEC' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'NOV' },
                title: 'World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'Junior World Championships',
                location: 'Various Locations'
            }
        ]
    },

    'speed-skating': {
        title: 'Speed Skating',
        banner: 'img/speed-skating-banner.jpg',
        description: 'Speed skating is a competitive form of ice skating in which the competitors race each other in traveling a certain distance on skates. It is one of the oldest winter sports.',
        playersCount: '2',
        origin: 'Netherlands, 13th century',
        majorCompetition: 'Olympic Speed Skating',
        rules: [
            'Athletes race in pairs in opposite directions',
            'Races are timed to determine winners',
            'Athletes must stay in their lanes',
            'Athletes must wear proper safety equipment',
            'Different events have different distances',
            'Athletes must follow proper skating technique',
            'False starts result in disqualification',
            'Athletes must maintain proper form',
            'Equipment must meet specific regulations',
            'Athletes must complete the required distance'
        ],
        famousPlayers: [
            {
                name: 'Eric Heiden',
                image: 'img/players/heiden.jpg',
                achievement: '5x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Eric_Heiden'
            },
            {
                name: 'Claudia Pechstein',
                image: 'img/players/pechstein.jpg',
                achievement: '5x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Claudia_Pechstein'
            },
            {
                name: 'Ireen Wüst',
                image: 'img/players/wust.jpg',
                achievement: '6x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Ireen_W%C3%BCst'
            },
            {
                name: 'Sven Kramer',
                image: 'img/players/kramer.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Sven_Kramer'
            },
            {
                name: 'Bonnie Blair',
                image: 'img/players/blair.jpg',
                achievement: '5x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Bonnie_Blair'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'FEB' },
                title: 'Olympic Speed Skating',
                location: 'Milan-Cortina, Italy'
            },
            {
                date: { day: '01', month: 'DEC' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'NOV' },
                title: 'World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'World Sprint Championships',
                location: 'Various Locations'
            }
        ]
    },

    'short-track-speed-skating': {
        title: 'Short Track Speed Skating',
        banner: 'img/short-track-banner.jpg',
        description: 'Short track speed skating is a form of competitive ice speed skating. In competitions, multiple skaters skate on an oval ice track with a length of 111.12 meters.',
        playersCount: '4-6',
        origin: 'North America, 20th century',
        majorCompetition: 'Olympic Short Track Speed Skating',
        rules: [
            'Athletes race in heats of 4-6 skaters',
            'The first two finishers advance to next round',
            'Athletes must stay in their lanes during starts',
            'Athletes can pass each other during the race',
            'Contact between skaters is allowed but must be fair',
            'False starts result in penalties',
            'Athletes must wear proper safety equipment',
            'Relay events have specific exchange rules',
            'Athletes must complete the required distance',
            'Equipment must meet specific regulations'
        ],
        famousPlayers: [
            {
                name: 'Apolo Ohno',
                image: 'img/players/ohno.jpg',
                achievement: '8x Olympic Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Apolo_Ohno'
            },
            {
                name: 'Wang Meng',
                image: 'img/players/meng.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Wang_Meng'
            },
            {
                name: 'Viktor Ahn',
                image: 'img/players/ahn.jpg',
                achievement: '6x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Viktor_Ahn'
            },
            {
                name: 'Chun Lee-kyung',
                image: 'img/players/chun.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Chun_Lee-kyung'
            },
            {
                name: 'Charles Hamelin',
                image: 'img/players/hamelin.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Charles_Hamelin'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'FEB' },
                title: 'Olympic Short Track Speed Skating',
                location: 'Milan-Cortina, Italy'
            },
            {
                date: { day: '01', month: 'DEC' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'NOV' },
                title: 'World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'World Team Championships',
                location: 'Various Locations'
            }
        ]
    },

    'nordic-combined': {
        title: 'Nordic Combined',
        banner: 'img/nordic-combined-banner.jpg',
        description: 'Nordic combined is a winter sport in which athletes compete in cross-country skiing and ski jumping. The sport combines the power and explosiveness of ski jumping with the endurance of cross-country skiing.',
        playersCount: '1',
        origin: 'Norway, 19th century',
        majorCompetition: 'Olympic Nordic Combined',
        rules: [
            'Athletes must complete both ski jumping and cross-country skiing',
            'Ski jumping points determine starting positions for cross-country',
            'The first athlete to cross the finish line wins',
            'Athletes must use proper technique in both disciplines',
            'Equipment must meet specific regulations',
            'Athletes must follow the marked course',
            'Different events have different formats',
            'Team events require proper tag exchanges',
            'Athletes must wear proper safety equipment',
            'Weather conditions can affect competition'
        ],
        famousPlayers: [
            {
                name: 'Felix Gottwald',
                image: 'img/players/gottwald.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Felix_Gottwald'
            },
            {
                name: 'Eric Frenzel',
                image: 'img/players/frenzel.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Eric_Frenzel'
            },
            {
                name: 'Hannu Manninen',
                image: 'img/players/manninen.jpg',
                achievement: '4x World Cup Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Hannu_Manninen'
            },
            {
                name: 'Jason Lamy Chappuis',
                image: 'img/players/chappuis.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Jason_Lamy_Chappuis'
            },
            {
                name: 'Bjarte Engen Vik',
                image: 'img/players/vik.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Bjarte_Engen_Vik'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'FEB' },
                title: 'Olympic Nordic Combined',
                location: 'Milan-Cortina, Italy'
            },
            {
                date: { day: '01', month: 'DEC' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'NOV' },
                title: 'World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Continental Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'Junior World Championships',
                location: 'Various Locations'
            }
        ]
    },

    'ski-jumping': {
        title: 'Ski Jumping',
        banner: 'img/ski-jumping-banner.jpg',
        description: 'Ski jumping is a winter sport in which athletes ski down a take-off ramp, jump, and attempt to land as far as possible down the hill. Points are awarded for distance and style.',
        playersCount: '1',
        origin: 'Norway, 19th century',
        majorCompetition: 'Olympic Ski Jumping',
        rules: [
            'Athletes must take off from the designated ramp',
            'Points are awarded for distance and style',
            'Athletes must maintain proper form during flight',
            'Landing must be executed with both skis parallel',
            'Athletes must wear proper safety equipment',
            'The hill size determines maximum possible distance',
            'Wind conditions can affect competition',
            'Athletes get two jumps in most competitions',
            'The highest total score wins',
            'Equipment must meet specific regulations'
        ],
        famousPlayers: [
            {
                name: 'Matti Nykänen',
                image: 'img/players/nykanen.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Matti_Nyk%C3%A4nen'
            },
            {
                name: 'Simon Ammann',
                image: 'img/players/ammann.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Simon_Ammann'
            },
            {
                name: 'Kamil Stoch',
                image: 'img/players/stoch.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Kamil_Stoch'
            },
            {
                name: 'Sara Takanashi',
                image: 'img/players/takanashi.jpg',
                achievement: 'Most World Cup Wins',
                wikipedia: 'https://en.wikipedia.org/wiki/Sara_Takanashi'
            },
            {
                name: 'Jens Weißflog',
                image: 'img/players/weissflog.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Jens_Wei%C3%9Fflog'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'FEB' },
                title: 'Olympic Ski Jumping',
                location: 'Milan-Cortina, Italy'
            },
            {
                date: { day: '01', month: 'DEC' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'NOV' },
                title: 'World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Four Hills Tournament',
                location: 'Germany and Austria'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'Raw Air',
                location: 'Norway'
            }
        ]
    },

    'cross-country-skiing': {
        title: 'Cross-Country Skiing',
        banner: 'img/cross-country-banner.jpg',
        description: 'Cross-country skiing is a form of skiing where athletes propel themselves across snow-covered terrain using skis and poles. It is one of the most endurance-demanding winter sports.',
        playersCount: '1-4',
        origin: 'Norway, 18th century',
        majorCompetition: 'Olympic Cross-Country Skiing',
        rules: [
            'Athletes must use proper skiing techniques',
            'Different events have different distances',
            'Athletes must follow the marked course',
            'Relay events require proper tag exchanges',
            'Mass start events have specific start procedures',
            'Athletes must wear proper equipment',
            'Ski waxing must follow regulations',
            'Athletes cannot receive outside assistance',
            'The first athlete to cross the finish line wins',
            'Equipment must meet specific regulations'
        ],
        famousPlayers: [
            {
                name: 'Bjørn Dæhlie',
                image: 'img/players/daehlie.jpg',
                achievement: '8x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Bj%C3%B8rn_D%C3%A6hlie'
            },
            {
                name: 'Marit Bjørgen',
                image: 'img/players/bjorgen.jpg',
                achievement: '8x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Marit_Bj%C3%B8rgen'
            },
            {
                name: 'Petter Northug',
                image: 'img/players/northug.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Petter_Northug'
            },
            {
                name: 'Therese Johaug',
                image: 'img/players/johaug.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Therese_Johaug'
            },
            {
                name: 'Johannes Høsflot Klæbo',
                image: 'img/players/klaebo.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Johannes_H%C3%B8sflot_Kl%C3%A6bo'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'FEB' },
                title: 'Olympic Cross-Country Skiing',
                location: 'Milan-Cortina, Italy'
            },
            {
                date: { day: '01', month: 'DEC' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'NOV' },
                title: 'World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Tour de Ski',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'Ski Tour Canada',
                location: 'Canada'
            }
        ]
    },

    'alpine-skiing': {
        title: 'Alpine Skiing',
        banner: 'img/alpine-skiing-banner.jpg',
        description: 'Alpine skiing is a winter sport in which athletes ski down snow-covered slopes on skis with fixed-heel bindings. The sport includes various disciplines such as slalom, giant slalom, super-G, and downhill.',
        playersCount: '1',
        origin: 'Switzerland, 19th century',
        majorCompetition: 'Olympic Alpine Skiing',
        rules: [
            'Athletes must follow the marked course',
            'Different disciplines have different rules',
            'Athletes must pass through all gates',
            'Missing a gate results in disqualification',
            'Athletes must wear proper safety equipment',
            'Races are timed to determine winners',
            'Weather conditions can affect competition',
            'Equipment must meet specific regulations',
            'Athletes must start within specific parameters',
            'Course inspection is allowed before races'
        ],
        famousPlayers: [
            {
                name: 'Ingemar Stenmark',
                image: 'img/players/stenmark.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Ingemar_Stenmark'
            },
            {
                name: 'Lindsey Vonn',
                image: 'img/players/vonn.jpg',
                achievement: '3x Olympic Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Lindsey_Vonn'
            },
            {
                name: 'Marcel Hirscher',
                image: 'img/players/hirscher.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Marcel_Hirscher'
            },
            {
                name: 'Mikaela Shiffrin',
                image: 'img/players/shiffrin.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Mikaela_Shiffrin'
            },
            {
                name: 'Alberto Tomba',
                image: 'img/players/tomba.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Alberto_Tomba'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'FEB' },
                title: 'Olympic Alpine Skiing',
                location: 'Milan-Cortina, Italy'
            },
            {
                date: { day: '01', month: 'DEC' },
                title: 'World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'NOV' },
                title: 'World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Hahnenkamm Races',
                location: 'Kitzbühel, Austria'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'World Cup Finals',
                location: 'Various Locations'
            }
        ]
    },

    'tableTennis': {
        name: 'Table Tennis',
        description: 'A sport in which two or four players hit a lightweight ball back and forth across a table using small rackets. The game takes place on a hard table divided by a net.',
        rules: [
            'The ball must bounce once on each side of the table',
            'Players must alternate hitting the ball',
            'Points are scored when the opponent fails to return the ball',
            'Games are played to 11 points, must win by 2 points',
            'Players serve 2 points each, then switch'
        ],
        famousPlayers: [
            {
                name: 'Ma Long',
                image: 'img/players/malong.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Ma_Long'
            },
            {
                name: 'Deng Yaping',
                image: 'img/players/deng.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Deng_Yaping'
            },
            {
                name: 'Jan-Ove Waldner',
                image: 'img/players/waldner.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Jan-Ove_Waldner'
            },
            {
                name: 'Liu Guoliang',
                image: 'img/players/liu.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Liu_Guoliang'
            },
            {
                name: 'Zhang Jike',
                image: 'img/players/zhang.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Zhang_Jike'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Table Tennis',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'MAY' },
                title: 'World Table Tennis Championships',
                location: 'Busan, South Korea'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'ITTF World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'APR' },
                title: 'Asian Table Tennis Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'European Table Tennis Championships',
                location: 'Various Locations'
            }
        ]
    },

    'taekwondo': {
        name: 'Taekwondo',
        description: 'A Korean martial art characterized by its emphasis on head-height kicks, jumping and spinning kicks, and fast kicking techniques.',
        rules: [
            'Points are awarded for valid strikes to the opponent\'s body',
            'Head kicks are worth 3 points',
            'Body kicks are worth 2 points',
            'Punches are worth 1 point',
            'Matches consist of three rounds of two minutes each'
        ],
        famousPlayers: [
            {
                name: 'Hadi Saei',
                image: 'img/players/saei.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Hadi_Saei'
            },
            {
                name: 'Steven López',
                image: 'img/players/lopez.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Steven_L%C3%B3pez'
            },
            {
                name: 'Jade Jones',
                image: 'img/players/jones.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Jade_Jones'
            },
            {
                name: 'Wu Jingyu',
                image: 'img/players/jingyu.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Wu_Jingyu'
            },
            {
                name: 'Milica Mandić',
                image: 'img/players/mandic.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Milica_Mandi%C4%87'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Taekwondo',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'World Taekwondo Championships',
                location: 'Baku, Azerbaijan'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'Grand Prix Series',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'APR' },
                title: 'Asian Taekwondo Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAY' },
                title: 'European Taekwondo Championships',
                location: 'Various Locations'
            }
        ]
    },

    'triathlon': {
        name: 'Triathlon',
        description: 'A multi-sport race consisting of swimming, cycling, and running in immediate succession over various distances.',
        rules: [
            'Athletes must complete all three disciplines in order',
            'Transitions between disciplines are timed',
            'Drafting is not allowed in most amateur events',
            'Wetsuits are mandatory below certain temperatures',
            'Helmets must be worn during cycling'
        ],
        famousPlayers: [
            {
                name: 'Alistair Brownlee',
                image: 'img/players/brownlee.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Alistair_Brownlee'
            },
            {
                name: 'Gwen Jorgensen',
                image: 'img/players/jorgensen.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Gwen_Jorgensen'
            },
            {
                name: 'Simon Whitfield',
                image: 'img/players/whitfield.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Simon_Whitfield'
            },
            {
                name: 'Emma Snowsill',
                image: 'img/players/snowsill.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Emma_Snowsill'
            },
            {
                name: 'Jan Frodeno',
                image: 'img/players/frodeno.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Jan_Frodeno'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Triathlon',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'World Triathlon Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAY' },
                title: 'World Triathlon Series',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'AUG' },
                title: 'Ironman World Championship',
                location: 'Kona, Hawaii'
            },
            {
                date: { day: '01', month: 'SEP' },
                title: 'European Triathlon Championships',
                location: 'Various Locations'
            }
        ]
    },

    'modernPentathlon': {
        name: 'Modern Pentathlon',
        description: 'An Olympic sport that comprises five different events: fencing, swimming, equestrian show jumping, and a combined event of pistol shooting and cross country running.',
        rules: [
            'Athletes compete in all five disciplines',
            'Points are awarded in each event',
            'The combined event is the final discipline',
            'Athletes start the combined event based on their total points',
            'First across the finish line wins'
        ],
        famousPlayers: [
            {
                name: 'László Nagy',
                image: 'img/players/nagy.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Nagy_(modern_pentathlete)'
            },
            {
                name: 'Andrey Moiseev',
                image: 'img/players/moiseev.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Andrey_Moiseev'
            },
            {
                name: 'Laura Asadauskaitė',
                image: 'img/players/asadauskaite.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Laura_Asadauskait%C4%97'
            },
            {
                name: 'Suzanne Williams',
                image: 'img/players/williams.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Suzanne_Williams_(pentathlete)'
            },
            {
                name: 'Pavel Lednev',
                image: 'img/players/lednev.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Pavel_Lednev'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Modern Pentathlon',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'World Modern Pentathlon Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAY' },
                title: 'World Cup Series',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'APR' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'SEP' },
                title: 'Asian Championships',
                location: 'Various Locations'
            }
        ]
    },

    'handball': {
        title: 'Handball',
        banner: 'img/handball-banner.jpg',
        description: 'Handball is a team sport in which two teams of seven players each pass a ball using their hands with the aim of throwing it into the goal of the other team. A standard match consists of two periods of 30 minutes.',
        playersCount: '7',
        origin: 'Germany, 19th century',
        majorCompetition: 'Olympic Handball',
        rules: [
            'Each team has 7 players on the court',
            'Players can take up to 3 steps while holding the ball',
            'Players must pass or shoot within 3 seconds of receiving the ball',
            'Goals are scored by throwing the ball into the opponent\'s goal',
            'The team with the most goals at the end wins'
        ],
        famousPlayers: [
            {
                name: 'Nikola Karabatic',
                image: 'img/players/karabatic.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Nikola_Karabati%C4%87'
            },
            {
                name: 'Mikkel Hansen',
                image: 'img/players/hansen.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Mikkel_Hansen'
            },
            {
                name: 'Cristina Neagu',
                image: 'img/players/neagu.jpg',
                achievement: '4x World Handball Player of the Year',
                wikipedia: 'https://en.wikipedia.org/wiki/Cristina_Neagu'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '25', month: 'JUL' },
                title: 'Olympic Handball',
                location: 'Paris, France'
            },
            {
                date: { day: '10', month: 'JAN' },
                title: 'European Handball Championship',
                location: 'Germany'
            },
            {
                date: { day: '15', month: 'JAN' },
                title: 'World Handball Championship',
                location: 'Croatia, Denmark, Norway'
            }
        ]
    },

    'squash': {
        title: 'Squash',
        banner: 'img/squash-banner.jpg',
        description: 'Squash is a racket sport played by two players in a four-walled court with a small, hollow rubber ball. Players take turns hitting the ball against the front wall, above the tin and below the out line.',
        playersCount: '1-2',
        origin: 'England, 19th century',
        majorCompetition: 'World Squash Championships',
        rules: [
            'Players must hit the ball against the front wall above the tin',
            'The ball can bounce once on the floor before being hit',
            'Players must not interfere with each other\'s shots',
            'Points are scored when the opponent fails to return the ball',
            'Matches are played to 11 points, must win by 2'
        ],
        famousPlayers: [
            {
                name: 'Jahangir Khan',
                image: 'img/players/khan.jpg',
                achievement: '10x World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Jahangir_Khan'
            },
            {
                name: 'Nicol David',
                image: 'img/players/david.jpg',
                achievement: '8x World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Nicol_David'
            },
            {
                name: 'Peter Nicol',
                image: 'img/players/nicol.jpg',
                achievement: 'World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Peter_Nicol'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '15', month: 'DEC' },
                title: 'World Squash Championships',
                location: 'Chicago, USA'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'European Team Championships',
                location: 'Eindhoven, Netherlands'
            },
            {
                date: { day: '15', month: 'SEP' },
                title: 'British Open',
                location: 'Birmingham, UK'
            }
        ]
    },

    'lacrosse': {
        title: 'Lacrosse',
        banner: 'img/lacrosse-banner.jpg',
        description: 'Lacrosse is a team sport played with a lacrosse stick and a lacrosse ball. Players use the head of the lacrosse stick to carry, pass, catch, and shoot the ball into the goal.',
        playersCount: '10',
        origin: 'North America, 17th century',
        majorCompetition: 'World Lacrosse Championship',
        rules: [
            'Each team has 10 players on the field',
            'Players must use the lacrosse stick to handle the ball',
            'Goals are scored by shooting the ball into the opponent\'s net',
            'Players can check opponents with their sticks',
            'The team with the most goals at the end wins'
        ],
        famousPlayers: [
            {
                name: 'Gary Gait',
                image: 'img/players/gait.jpg',
                achievement: '3x World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Gary_Gait'
            },
            {
                name: 'John Grant Jr.',
                image: 'img/players/grant.jpg',
                achievement: '2x World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/John_Grant_Jr.'
            },
            {
                name: 'Paul Rabil',
                image: 'img/players/rabil.jpg',
                achievement: '2x World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Paul_Rabil'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '21', month: 'JUN' },
                title: 'World Lacrosse Championship',
                location: 'Los Angeles, USA'
            },
            {
                date: { day: '15', month: 'JUL' },
                title: 'European Lacrosse Championship',
                location: 'Wroclaw, Poland'
            },
            {
                date: { day: '01', month: 'AUG' },
                title: 'Asia Pacific Lacrosse Championship',
                location: 'Seoul, South Korea'
            }
        ]
    },

    'rugby': {
        name: 'Rugby',
        description: 'A full-contact team sport that originated in England in the first half of the 19th century. One of the two codes of rugby football, the other being rugby league.',
        rules: [
            'Teams consist of 15 players',
            'Points are scored by tries, conversions, penalties, and drop goals',
            'Players can pass the ball backwards or sideways',
            'Tackling must be below the shoulders',
            'The ball must be released when tackled'
        ],
        famousPlayers: [
            {
                name: 'Jonah Lomu',
                image: 'img/players/lomu.jpg',
                achievement: 'Rugby World Cup Finalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Jonah_Lomu'
            },
            {
                name: 'Richie McCaw',
                image: 'img/players/mccaw.jpg',
                achievement: '3x Rugby World Cup Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Richie_McCaw'
            },
            {
                name: 'Dan Carter',
                image: 'img/players/carter.jpg',
                achievement: '2x Rugby World Cup Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Dan_Carter'
            },
            {
                name: 'Brian O\'Driscoll',
                image: 'img/players/odriscoll.jpg',
                achievement: 'Most Caps for Ireland',
                wikipedia: 'https://en.wikipedia.org/wiki/Brian_O%27Driscoll'
            },
            {
                name: 'Martin Johnson',
                image: 'img/players/johnson.jpg',
                achievement: 'Rugby World Cup Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Martin_Johnson_(rugby_union)'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Rugby Sevens',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'SEP' },
                title: 'Rugby World Cup',
                location: 'France'
            },
            {
                date: { day: '01', month: 'MAR' },
                title: 'Six Nations Championship',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'World Rugby Sevens Series',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'AUG' },
                title: 'Rugby Championship',
                location: 'Various Locations'
            }
        ]
    },

    'golf': {
        name: 'Golf',
        description: 'A club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.',
        rules: [
            'Players must play the ball as it lies',
            'Each hole must be played in order',
            'The ball must be struck with the club head',
            'Players must count all strokes',
            'The player with the lowest total score wins'
        ],
        famousPlayers: [
            {
                name: 'Tiger Woods',
                image: 'img/players/woods.jpg',
                achievement: '15x Major Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Tiger_Woods'
            },
            {
                name: 'Jack Nicklaus',
                image: 'img/players/nicklaus.jpg',
                achievement: '18x Major Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Jack_Nicklaus'
            },
            {
                name: 'Annika Sörenstam',
                image: 'img/players/sorenstam.jpg',
                achievement: '10x Major Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Annika_S%C3%B6renstam'
            },
            {
                name: 'Rory McIlroy',
                image: 'img/players/mcilroy.jpg',
                achievement: '4x Major Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Rory_McIlroy'
            },
            {
                name: 'Seve Ballesteros',
                image: 'img/players/ballesteros.jpg',
                achievement: '5x Major Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Seve_Ballesteros'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Golf',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'APR' },
                title: 'The Masters',
                location: 'Augusta National, USA'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'US Open',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JUL' },
                title: 'The Open Championship',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'AUG' },
                title: 'PGA Championship',
                location: 'Various Locations'
            }
        ]
    },

    'sailing': {
        name: 'Sailing',
        description: 'A sport that involves using wind to propel a vessel across water using sails. Olympic sailing features various classes of boats and formats.',
        rules: [
            'Races are conducted around a course marked by buoys',
            'Boats must round marks in the correct order',
            'Right of way rules must be followed',
            'Protests can be lodged for rule violations',
            'Points are awarded based on finishing position'
        ],
        famousPlayers: [
            {
                name: 'Ben Ainslie',
                image: 'img/players/ainslie.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Ben_Ainslie'
            },
            {
                name: 'Robert Scheidt',
                image: 'img/players/scheidt.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Robert_Scheidt'
            },
            {
                name: 'Hannah Mills',
                image: 'img/players/mills.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Hannah_Mills'
            },
            {
                name: 'Paul Elvstrøm',
                image: 'img/players/elvstrom.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Paul_Elvstr%C3%B8m'
            },
            {
                name: 'Torben Grael',
                image: 'img/players/grael.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Torben_Grael'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Sailing',
                location: 'Marseille, France'
            },
            {
                date: { day: '01', month: 'AUG' },
                title: 'World Sailing Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'World Cup Series',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'SEP' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAY' },
                title: 'Asian Championships',
                location: 'Various Locations'
            }
        ]
    },

    'cycling': {
        name: 'Cycling',
        description: 'A sport that involves riding bicycles for competition. Olympic cycling includes track, road, mountain bike, and BMX events.',
        rules: [
            'Riders must follow the designated course',
            'Drafting is allowed in most events',
            'Equipment must meet safety standards',
            'Riders must wear helmets',
            'Race-specific rules apply to each discipline'
        ],
        famousPlayers: [
            {
                name: 'Chris Hoy',
                image: 'img/players/hoy.jpg',
                achievement: '6x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Chris_Hoy'
            },
            {
                name: 'Laura Kenny',
                image: 'img/players/kenny.jpg',
                achievement: '5x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Laura_Kenny'
            },
            {
                name: 'Eddy Merckx',
                image: 'img/players/merckx.jpg',
                achievement: '5x Tour de France Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Eddy_Merckx'
            },
            {
                name: 'Marianne Vos',
                image: 'img/players/vos.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Marianne_Vos'
            },
            {
                name: 'Greg LeMond',
                image: 'img/players/lemond.jpg',
                achievement: '3x Tour de France Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Greg_LeMond'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Cycling',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JUL' },
                title: 'Tour de France',
                location: 'France'
            },
            {
                date: { day: '01', month: 'AUG' },
                title: 'UCI World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAY' },
                title: 'Giro d\'Italia',
                location: 'Italy'
            },
            {
                date: { day: '01', month: 'SEP' },
                title: 'Vuelta a España',
                location: 'Spain'
            }
        ]
    },

    'athletics': {
        name: 'Athletics',
        description: 'A collection of sporting events that involve running, jumping, throwing, and walking. The sport is considered the oldest form of organized sport.',
        rules: [
            'Events are conducted according to IAAF rules',
            'Athletes must start from assigned positions',
            'False starts result in disqualification',
            'Athletes must stay in their lanes in track events',
            'Jumping and throwing events have specific technical rules'
        ],
        famousPlayers: [
            {
                name: 'Usain Bolt',
                image: 'img/players/bolt.jpg',
                achievement: '8x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Usain_Bolt'
            },
            {
                name: 'Carl Lewis',
                image: 'img/players/lewis.jpg',
                achievement: '9x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Carl_Lewis'
            },
            {
                name: 'Jesse Owens',
                image: 'img/players/owens.jpg',
                achievement: '4x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Jesse_Owens'
            },
            {
                name: 'Allyson Felix',
                image: 'img/players/felix.jpg',
                achievement: '7x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Allyson_Felix'
            },
            {
                name: 'Haile Gebrselassie',
                image: 'img/players/gebrselassie.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Haile_Gebrselassie'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Athletics',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'AUG' },
                title: 'World Athletics Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAY' },
                title: 'Diamond League',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'European Athletics Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'SEP' },
                title: 'Asian Athletics Championships',
                location: 'Various Locations'
            }
        ]
    },

    'equestrian': {
        name: 'Equestrian',
        description: 'A sport involving horseback riding, with three Olympic disciplines: dressage, eventing, and jumping.',
        rules: [
            'Riders must follow specific patterns in dressage',
            'Eventing combines dressage, cross-country, and jumping',
            'Jumping involves clearing obstacles without faults',
            'Horses must meet specific health requirements',
            'Riders must wear approved safety equipment'
        ],
        famousPlayers: [
            {
                name: 'Charlotte Dujardin',
                image: 'img/players/dujardin.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Charlotte_Dujardin'
            },
            {
                name: 'Michael Jung',
                image: 'img/players/jung.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Michael_Jung'
            },
            {
                name: 'Isabell Werth',
                image: 'img/players/werth.jpg',
                achievement: '7x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Isabell_Werth'
            },
            {
                name: 'Mark Todd',
                image: 'img/players/todd.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Mark_Todd'
            },
            {
                name: 'Beezie Madden',
                image: 'img/players/madden.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Beezie_Madden'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Equestrian',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'AUG' },
                title: 'World Equestrian Games',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAY' },
                title: 'Nations Cup Series',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'SEP' },
                title: 'World Cup Series',
                location: 'Various Locations'
            }
        ]
    },

    'beachVolleyball': {
        name: 'Beach Volleyball',
        description: 'A team sport played by two teams of two players on a sand court divided by a net. It is a variant of indoor volleyball.',
        rules: [
            'Teams consist of 2 players',
            'The ball can be hit up to 3 times before crossing the net',
            'Players cannot catch or hold the ball',
            'The ball must be hit, not thrown',
            'Matches are played to 21 points, must win by 2'
        ],
        famousPlayers: [
            {
                name: 'Kerri Walsh Jennings',
                image: 'img/players/walsh.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Kerri_Walsh_Jennings'
            },
            {
                name: 'Misty May-Treanor',
                image: 'img/players/may.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Misty_May-Treanor'
            },
            {
                name: 'Karch Kiraly',
                image: 'img/players/kiraly.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Karch_Kiraly'
            },
            {
                name: 'Emanuel Rego',
                image: 'img/players/rego.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Emanuel_Rego'
            },
            {
                name: 'Alison Cerutti',
                image: 'img/players/cerutti.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Alison_Cerutti'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Olympic Beach Volleyball',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'World Beach Volleyball Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'MAY' },
                title: 'FIVB Beach Volleyball World Tour',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'AUG' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'SEP' },
                title: 'Asian Championships',
                location: 'Various Locations'
            }
        ]
    },

    'rugby_sevens': {
        title: 'Rugby Sevens',
        banner: 'img/rugby_sevens-banner.jpg',
        description: 'Rugby Sevens is a variant of rugby union in which teams are made up of seven players playing seven-minute halves, instead of the usual 15 players playing 40-minute halves. The game is faster and more open than traditional rugby union, with fewer players covering more ground.',
        playersCount: '7',
        origin: 'Scotland, 1883',
        majorCompetition: 'World Rugby Sevens Series',
        rules: [
            'Each team has 7 players on the field',
            'Matches consist of two 7-minute halves',
            'Tries are worth 5 points, conversions 2 points',
            'Drop goals and penalties are worth 3 points',
            'Players must pass the ball backwards',
            'The ball can be kicked in any direction',
            'Tackling must be below the shoulders',
            'Players must release the ball when tackled',
            'The team with the most points wins',
            'Golden point extra time in case of a tie'
        ],
        famousPlayers: [
            {
                name: 'Perry Baker',
                image: 'img/players/baker.jpg',
                achievement: '2x World Rugby Sevens Player of the Year',
                wikipedia: 'https://en.wikipedia.org/wiki/Perry_Baker'
            },
            {
                name: 'Werner Kok',
                image: 'img/players/kok.jpg',
                achievement: 'Olympic Bronze Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Werner_Kok'
            },
            {
                name: 'Dan Norton',
                image: 'img/players/norton.jpg',
                achievement: 'Most tries in World Series history',
                wikipedia: 'https://en.wikipedia.org/wiki/Dan_Norton'
            },
            {
                name: 'Portia Woodman',
                image: 'img/players/woodman.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Portia_Woodman'
            },
            {
                name: 'Jerry Tuwai',
                image: 'img/players/tuwai.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Jerry_Tuwai'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '10', month: 'DEC' },
                title: 'Dubai Sevens',
                location: 'Dubai, UAE'
            },
            {
                date: { day: '27', month: 'JAN' },
                title: 'Sydney Sevens',
                location: 'Sydney, Australia'
            },
            {
                date: { day: '23', month: 'FEB' },
                title: 'Los Angeles Sevens',
                location: 'Los Angeles, USA'
            }
        ]
    },

    'field-hockey': {
        title: 'Field Hockey',
        banner: 'img/field-hockey-banner.jpg',
        description: 'Field hockey is a team sport in which two teams of 11 players each compete to score goals by hitting a small, hard ball with a hockey stick into the opposing team\'s goal.',
        playersCount: '11',
        origin: 'England, 19th century',
        majorCompetition: 'Olympic Field Hockey',
        rules: [
            'Each team has 11 players on the field',
            'Players must use the flat side of the stick to hit the ball',
            'Goals can only be scored from within the shooting circle',
            'The ball cannot be played with the feet or body',
            'The team with the most goals at the end wins'
        ],
        famousPlayers: [
            {
                name: 'Dhyan Chand',
                image: 'img/players/dhyan-chand.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Dhyan_Chand'
            },
            {
                name: 'Jamie Dwyer',
                image: 'img/players/dwyer.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Jamie_Dwyer'
            },
            {
                name: 'Luciana Aymar',
                image: 'img/players/aymar.jpg',
                achievement: '8x World Player of the Year',
                wikipedia: 'https://en.wikipedia.org/wiki/Luciana_Aymar'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '27', month: 'JUL' },
                title: 'Olympic Field Hockey',
                location: 'Paris, France'
            },
            {
                date: { day: '13', month: 'JAN' },
                title: 'Hockey World Cup',
                location: 'Bhubaneswar, India'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'European Hockey Championship',
                location: 'Mönchengladbach, Germany'
            }
        ]
    },

    'water_polo': {
        title: 'Water Polo',
        banner: 'img/water_polo-banner.jpg',
        description: 'Water polo is a competitive team sport played in water between two teams. The game consists of four quarters in which the two teams attempt to score goals by throwing the ball into the opponent\'s goal. The team with the most goals at the end of the game wins the match.',
        playersCount: '7',
        origin: 'Scotland, 19th century',
        majorCompetition: 'FINA Water Polo World Cup',
        rules: [
            'Each team has 7 players in the water',
            'Players must swim and cannot touch the bottom',
            'Goals are scored by throwing the ball into the net',
            'Players cannot hold the ball underwater',
            'Physical contact is allowed but must be legal',
            'Matches consist of four 8-minute quarters',
            'Players must wear caps with ear protectors',
            'The ball can be passed in any direction',
            'Players cannot push off opponents',
            'Goalkeepers have special privileges'
        ],
        famousPlayers: [
            {
                name: 'Dezső Gyarmati',
                image: 'img/players/gyarmati.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Dezs%C5%91_Gyarmati'
            },
            {
                name: 'Manuel Estiarte',
                image: 'img/players/estiarte.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Manuel_Estiarte'
            },
            {
                name: 'Tony Azevedo',
                image: 'img/players/azevedo.jpg',
                achievement: '5x Olympian',
                wikipedia: 'https://en.wikipedia.org/wiki/Tony_Azevedo'
            },
            {
                name: 'Brenda Villa',
                image: 'img/players/villa.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Brenda_Villa'
            },
            {
                name: 'Aleksandar Šapić',
                image: 'img/players/sapic.jpg',
                achievement: 'Olympic Bronze Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Aleksandar_%C5%A0api%C4%87'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '26', month: 'JUL' },
                title: 'Olympic Water Polo',
                location: 'Paris, France'
            },
            {
                date: { day: '15', month: 'JUN' },
                title: 'FINA Water Polo World Cup',
                location: 'Los Angeles, USA'
            },
            {
                date: { day: '10', month: 'AUG' },
                title: 'European Water Polo Championship',
                location: 'Zagreb, Croatia'
            }
        ]
    },

    'softball': {
        title: 'Softball',
        banner: 'img/softball-banner.jpg',
        description: 'Softball is a variant of baseball played with a larger ball on a smaller field. It is played by two teams of 10 players each, with the objective of scoring runs by hitting the ball and running around the bases.',
        playersCount: '10',
        origin: 'United States, 1887',
        majorCompetition: 'Olympic Softball',
        rules: [
            'Each team has 10 players on the field',
            'The game is played over 7 innings',
            'Points are scored by hitting the ball and running around the bases',
            'The pitcher must throw underhand',
            'The team with the most runs at the end wins'
        ],
        famousPlayers: [
            {
                name: 'Lisa Fernandez',
                image: 'img/players/fernandez.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Lisa_Fernandez'
            },
            {
                name: 'Jennie Finch',
                image: 'img/players/finch.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Jennie_Finch'
            },
            {
                name: 'Cat Osterman',
                image: 'img/players/osterman.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Cat_Osterman'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '24', month: 'JUL' },
                title: 'Olympic Softball',
                location: 'Paris, France'
            },
            {
                date: { day: '15', month: 'JUL' },
                title: 'World Baseball Softball Confederation World Cup',
                location: 'Dublin, Ireland'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'European Softball Championship',
                location: 'Prague, Czech Republic'
            }
        ]
    }
}; 