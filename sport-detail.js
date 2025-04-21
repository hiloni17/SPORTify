// Sample sport data
const sportsData = {
    'cricket':{
        title: 'Cricket',
        banner: 'img/cricket-banner.jpg',
        description: 'Cricket is a team sport in which two teams, most commonly of 11 players each, opposing one another on a ovel ground, compete with the primary objective of scoring runs by hitting a ball with a bat and running between two wickets.',
        playersCount: '11',
        origin: 'England, 16th century',
        majorCompetition: 'ICC Cricket World Cup',
        rules: [
            'Each team consists of 11 players on the field',
            'The game is played over two innings',
            'Runs are scored by hitting the ball and running between the wickets',
            'The team with the most runs at the end of the match wins'
        ],
        famousPlayers: [
            {
                name: 'Sachin Tendulkar',
                image: 'img/players/Sachin.jpg',
                achievement: 'Most Runs in ODI and Test',
                wikipedia: 'https://en.wikipedia.org/wiki/Sachin_Tendulkar'
            },
            {
                name: 'Sir Vivian Richards',
                image: 'img/players/Richards.jpg',
                achievement: 'Most Runs in a Test Series',
                wikipedia: 'https://en.wikipedia.org/wiki/Viv_Richards'
            },
            {
                name: 'Kapil Dev',
                image: 'img/players/Kapil.jpg',
                achievement: 'First World Cup Winning Captain',
                wikipedia: 'https://en.wikipedia.org/wiki/Kapil_Dev'
            },
            {
                name: 'Brian Lara',
                image: 'img/players/Lara.jpg',
                achievement: 'Highest Individual Test Score',
                wikipedia: 'https://en.wikipedia.org/wiki/Brian_Lara'
            },
            {
                name: 'Jacques Kallis',
                image: 'img/players/Kallis.jpg',
                achievement: 'Most Test Runs and Wickets',
                wikipedia: 'https://en.wikipedia.org/wiki/Jacques_Kallis'
            },
            {
                name: 'Sunil Gavaskar',
                image: 'img/players/Sunil.jpg',
                achievement: 'First to score 10,000 Test Runs',
                wikipedia: 'https://en.wikipedia.org/wiki/Sunil_Gavaskar'
            },
            {
                name: 'MS Dhoni',
                image: 'img/players/Dhoni.jpg',
                achievement: 'Most Successful Captain of Indian Cricket Team',
                wikipedia: 'https://en.wikipedia.org/wiki/MS_Dhoni'
            },
            {
                name: 'Ricky Ponting',
                image: 'img/players/Ponting.jpg',
                achievement: 'Most Successful Captain of Australian Cricket Team',
                wikipedia: 'https://en.wikipedia.org/wiki/Ricky_Ponting'
            },
            {
                name: 'Yuvaraj Singh',
                image: 'img/players/Yuvaraj.jpg',
                achievement: 'Fastest Fifty in T20',
                wikipedia: 'https://en.wikipedia.org/wiki/Yuvraj_Singh'
            },
            {
                name: 'Lasith Malinga',
                image: 'img/players/Malinga.jpg',
                achievement: 'Most Wickets in T20',
                wikipedia: 'https://en.wikipedia.org/wiki/Lasith_Malinga'
            },
            {
                name: 'Virat Kohli',
                image: 'img/players/Virat.jpg',
                achievement: 'Fastest to 8000, 9000, 10000, 11000, 12000 ODI runs',
                wikipedia: 'https://en.wikipedia.org/wiki/Virat_Kohli'
            },
            {
                name: 'Rohit Sharma',
                image: 'img/players/Rohit.jpg',
                achievement: 'Most Double Centuries in ODI',
                wikipedia: 'https://en.wikipedia.org/wiki/Rohit_Sharma'
            },
            {
                name: 'AB de Villiers',
                image: 'img/players/ABD.jpg',
                achievement: 'Fastest Century in ODI',
                wikipedia: 'https://en.wikipedia.org/wiki/AB_de_Villiers'
            },
            {
                name: 'Jasprit Bumrah',
                image: 'img/players/Jas.B.webp',
                achievement: 'Best Bowler in ICC Rankings',
                wikipedia: 'https://en.wikipedia.org/wiki/Jasprit_Bumrah'
            },
            {
                name: 'Kan Williamson',
                image: 'img/players/Williamson.webp',
                achievement: 'Most Runs in a World Cup',
                wikipedia: 'https://en.wikipedia.org/wiki/Kane_Williamson'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '09', month: 'OCT' },
                title: 'ICC T20 World Cup',
                location: 'India'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'India vs South Africa',
                location: 'India'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'India vs Australia',
                location: 'Australia'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'India vs England',
                location: 'England'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'India vs New Zealand',
                location: 'New Zealand'
            }
        ]
    },

    'football': {
        title: 'Football',
        banner: 'img/football-banner.jpg',
        description: 'Football is a team sport played between two teams of eleven players each. It is widely considered to be the most popular sport in the world.',
        playersCount: '11',
        origin: 'England, 1863',
        majorCompetition: 'FIFA World Cup',
        rules: [
            'Each team has 11 players on the field',
            'The game is played over two 45-minute halves',
            'Goals are scored by getting the ball into the opponent\'s goal',
            'Players cannot use their hands or arms while the ball is in play'
        ],
        famousPlayers: [
            {
                name: 'Lionel Messi',
                image: 'img/players/messi.jpg',
                achievement: '8x Ballon d\'Or Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Lionel_Messi'
            },
            {
                name: 'Cristiano Ronaldo',
                image: 'img/players/ronaldo.jpeg',
                achievement: '5x Champions League Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Cristiano_Ronaldo'
            },
            {
                name: 'Pele',
                image: 'img/players/pele.jpeg',
                achievement: '3x World Cup Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Pel%C3%A9'
            },
            {
                name: 'Diego Maradona',
                image: 'img/players/maradona.jpg',
                achievement: 'Hand of God Goal',
                wikipedia: 'https://en.wikipedia.org/wiki/Diego_Maradona'
            },
            {
                name: 'Zinedine Zidane',
                image: 'img/players/zidane.jpeg',
                achievement: 'Headbutt Incident',
                wikipedia: 'https://en.wikipedia.org/wiki/Zinedine_Zidane'
            },
            {
                name: 'Neymar Jr.',
                image: 'img/players/neymar.jpg',
                achievement: 'Most Expensive Transfer',
                wikipedia: 'https://en.wikipedia.org/wiki/Neymar'
            },
            {
                name: 'Andres Iniesta',
                image: 'img/players/andres.jpeg',
                achievement: 'World Cup Winning Goal',
                wikipedia: 'https://en.wikipedia.org/wiki/Andr%C3%A9s_Iniesta'
            },
            {
                name: 'David Beckham',
                image: 'img/players/david.jpeg',
                achievement: 'Most Iconic Freekick',
                wikipedia: 'https://en.wikipedia.org/wiki/David_Beckham'
            },
            {
                name: 'Ronaldo Nazario',
                image: 'img/players/nazario.jpg',
                achievement: '2x World Cup Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Ronaldo_(Brazilian_footballer)'
            },
            {
                name: 'Thierry Henry',
                image: 'img/players/henry.jpeg',
                achievement: 'Arsenal All-time Top Scorer',
                wikipedia: 'https://en.wikipedia.org/wiki/Thierry_Henry'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '10', month: 'JUN' },
                title: 'UEFA Euro 2024',
                location: 'Germany'
            },
            {
                date: { day: '21', month: 'NOV' },
                title: 'FIFA World Cup 2022',
                location: 'Qatar'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'UEFA Champions League Final',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Copa America',
                location: 'Argentina'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'AFC Asian Cup',
                location: 'China'
            }
        ]
    },
    'tennis': {
        title: 'Tennis',
        banner: 'img/tennis-banner.jpg',
        description: 'Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each.',
        playersCount: '1-2',
        origin: 'England, 1870s',
        majorCompetition: 'Grand Slam Tournaments',
        rules: [
            'Players must hit the ball over the net into the opponent\'s court',
            'The ball can only bounce once before being hit',
            'Points are scored when opponent fails to return the ball',
            'Games are played in sets and matches'
        ],
        famousPlayers: [
            {
                name: 'Roger Federer',
                image: 'img/players/federer.jpg',
                achievement: '20x Grand Slam Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Roger_Federer'
            },
            {
                name: 'Serena Williams',
                image: 'img/players/serena.jpg',
                achievement: '23x Grand Slam Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Serena_Williams'
            },
            {
                name: 'Rafael Nadal',
                image: 'img/players/nadal.jpg',
                achievement: '20x Grand Slam Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Rafael_Nadal'
            },
            {
                name: 'Novak Djokovic',
                image: 'img/players/djokovic.jpg',
                achievement: '20x Grand Slam Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Novak_Djokovic'
            },
            {
                name: 'Steffi Graf',
                image: 'img/players/graf.jpg',
                achievement: '22x Grand Slam Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Steffi_Graf'
            },
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JUL' },
                title: 'Wimbledon',
                location: 'London, UK'
            },
            {
                date: { day: '30', month: 'AUG' },
                title: 'US Open',
                location: 'New York, USA'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Australian Open',
                location: 'Melbourne, Australia'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'French Open',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'ATP Finals',
                location: 'Turin, Italy'
            }
        ]
    },

    'basketball': {
        title: 'Basketball',
        banner: 'img/basketball-banner.jpeg',
        description: 'Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball through the defender\'s hoop.',
        playersCount: '5',
        origin: 'United States, 1891',
        majorCompetition: 'NBA Championship',
        rules: [
            'Each team consists of 5 players on the court',
            'Points are scored by shooting the ball through the opponent\'s basket',
            'A field goal is worth 2 points, or 3 points if shot from beyond the three-point line',
            'The team with the most points at the end of the game wins'
        ],
        famousPlayers: [
            {
                name: 'Michael Jordan',
                image: 'img/players/jordan.webp',
                achievement: '6x NBA Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Michael_Jordan'
            },
            {
                name: 'LeBron James',
                image: 'img/players/james.jpg',
                achievement: '4x NBA Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/LeBron_James'
            },
            {
                name: 'Stephen Curry',
                image: 'img/players/curry.jpg',
                achievement: '4x NBA Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Stephen_Curry'
            },
            {
                name: 'Kobe Bryant',
                image: 'img/players/kobe.jpeg',
                achievement: '5x NBA Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Kobe_Bryant'
            },
            {
                name: 'Magic Johnson',
                image: 'img/players/magic.jpg',
                achievement: '5x NBA Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Magic_Johnson'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '15', month: 'MAR' },
                title: 'NBA All-Star Game',
                location: 'Chicago, USA'
            },
            {
                date: { day: '20', month: 'APR' },
                title: 'NBA Playoffs Begin',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JUN' },
                title: 'NBA Finals',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Olympic Basketball',
                location: 'Tokyo, Japan'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'FIBA World Cup',
                location: 'China'
            }
        ]
    },
    'badminton': {
        title: 'Badminton',
        banner: 'img/Badminton-banner.jpg',
        description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side).',
        playersCount: '1-2',
        origin: 'India, 18th century',
        majorCompetition: 'All England Open Badminton Championships',
        rules: [
            'Players must hit the shuttlecock over the net into the opponent\'s court',
            'The shuttlecock can only be hit once before crossing the net',
            'Points are scored when opponent fails to return the shuttlecock',
            'Matches are played in sets and games'
        ],
        famousPlayers: [
            {
                name: 'Lin Dan',
                image: 'img/players/dan.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Lin_Dan'
            },
            {
                name: 'Lee Chong Wei',
                image: 'img/players/wei.jpg',
                achievement: '3x Olympic Silver Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Lee_Chong_Wei'
            },
            {
                name: 'Saina Nehwal',
                image: 'img/players/sania.webp',
                achievement: 'First Indian to win an Olympic medal in Badminton',
                wikipedia: 'https://en.wikipedia.org/wiki/Saina_Nehwal'
            },
            {
                name: 'P. V. Sindhu',
                image: 'img/players/sindhu.jpg',
                achievement: 'First Indian to win an Olympic Silver Medal',
                wikipedia: 'https://en.wikipedia.org/wiki/P._V._Sindhu'
            },
            {
                name: 'Taufik Hidayat',
                image: 'img/players/tau.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Taufik_Hidayat'
            },
        ],
            upcomingEvents:[
                 {
                date: { day: '01', month: 'JAN' },
                title: 'All England Open Badminton Championships',
                location: 'Birmingham, UK'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'BWF World Championships',
                location: 'Huelva, Spain'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Thomas Cup',
                location: 'Aarhus, Denmark'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Uber Cup',
                location: 'Aarhus, Denmark'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Olympic Badminton',
                location: 'Paris, France'
            }
        ],
    },
    'hockey': {
        title: 'Hockey',
        banner: 'img/hockey-banner.jpg',
        description: 'Hockey is a sport in which two teams play against each other by trying to manoeuvre a ball or a puck into the opponent\'s goal using a hockey stick.',
        playersCount: '11',
        origin: 'England, 19th century',
        majorCompetition: 'Olympic Hockey',
        rules: [
            'Each team consists of 11 players on the field',
            'The game is played over two halves of 35 minutes each',
            'Goals are scored by hitting the ball into the opponent\'s goal',
            'The team with the most goals at the end of the match wins'
        ],
        famousPlayers: [
            {
                name: 'Dhyan Chand',
                image: 'img/players/dhyan.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Dhyan_Chand'
            },
            {
                name: 'Jamie Dwyer',
                image: 'img/players/dwyer.jpg',
                achievement: '5x FIH Player of the Year',
                wikipedia: 'https://en.wikipedia.org/wiki/Jamie_Dwyer'
            },
            {
                name: 'Teun de Nooijer',
                image: 'img/players/nooijer.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Teun_de_Nooijer'
            },
            {
                name: 'Luciana Aymar',
                image: 'img/players/aymar.jpg',
                achievement: '8x FIH Player of the Year',
                wikipedia: 'https://en.wikipedia.org/wiki/Luciana_Aymar'
            },
            {
                name: 'Floris Evers',
                image: 'img/players/floris.webp',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Floris_Evers'
            },
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'Olympic Hockey',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'FIH Hockey World Cup',
                location: 'Bhubaneswar, India'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Sultan Azlan Shah Cup',
                location: 'Ipoh, Malaysia'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Hockey Pro League',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Commonwealth Games',
                location: 'Birmingham, UK'
            }
        ],
    },
    'boxing': {
        title: 'Boxing',
        banner: 'img/boxing-banner.jpg',
        description: 'Boxing is a combat sport in which two people, usually wearing protective gloves and other protective equipment such as hand wraps and mouthguards, throw punches at each other for a predetermined amount of time in a boxing ring.',
        playersCount: '1-2',
        origin: 'Ancient Greece',
        majorCompetition: 'Olympic Boxing',
        rules: [
            'Fighters must wear gloves and other protective gear',
            'Matches are divided into rounds of 3 minutes each',
            'Points are scored for clean punches landed on the opponent',
            'The match can be won by knockout, points, or disqualification'
        ],
        famousPlayers: [
            {
                name: 'Muhammad Ali',
                image: 'img/players/ali.webp',
                achievement: '3x Heavyweight Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Muhammad_Ali'
            },
            {
                name: 'Mike Tyson',
                image: 'img/players/tyson.jpg',
                achievement: 'Youngest Heavyweight Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Mike_Tyson'
            },
            {
                name: 'Floyd Mayweather Jr.',
                image: 'img/players/floyd.jpeg',
                achievement: '50-0 Undefeated Record',
                wikipedia: 'https://en.wikipedia.org/wiki/Floyd_Mayweather_Jr.'
            },
            {
                name: 'Manny Pacquiao',
                image: 'img/players/manny.jpg',
                achievement: '8-Division World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Manny_Pacquiao'
            },
            {
                name: 'Sugar Ray Leonard',
                image: 'img/players/sugar.jpg',
                achievement: '5-Division World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Sugar_Ray_Leonard'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'Olympic Boxing',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Heavyweight Title Fight',
                location: 'Las Vegas, USA'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Welterweight Title Fight',
                location: 'New York, USA'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Lightweight Title Fight',
                location: 'London, UK'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Middleweight Title Fight',
                location: 'Tokyo, Japan'
            }
        ],
    },
    'volleyball': {
        title: 'Volleyball',
        banner: 'img/volleyball-bannner.jpg',
        description: 'Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team\'s court under organized rules.',
        playersCount: '6',
        origin: 'United States, 1895',
        majorCompetition: 'FIVB Volleyball World Cup',
        rules: [
            'Each team consists of 6 players on the court',
            'Points are scored by grounding the ball on the opponent\'s court',
            'Teams are allowed three touches to return the ball',
            'The team with the most points at the end of the match wins'
        ],
        famousPlayers: [
            {
                name: 'Karch Kiraly',
                image: 'img/players/karch.jpeg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Karch_Kiraly'
            },
            {
                name: 'Giba',
                image: 'img/players/giba.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Giba_(volleyball_player)'
            },
            {
                name: 'Sheilla Castro',
                image: 'img/players/castro.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Sheilla_Castro'
            },
            {
                name: 'Yekaterina Gamova',
                image: 'img/players/gamova.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Yekaterina_Gamova'
            },
            {
                name: 'Kerri Walsh Jennings',
                image: 'img/players/kerri.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Kerri_Walsh_Jennings'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'FIVB Volleyball World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Olympic Volleyball',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'FIVB Club World Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'NORCECA Championships',
                location: 'Various Locations'
            },
        ],
    },
    'swimming': {
        title: 'Swimming',
        banner: 'img/swimming-banner.jpg',
        description: 'Swimming is an individual or team racing sport that requires the use of one\'s entire body to move through water. The sport takes place in pools or open water such as lakes, rivers, or oceans.',
        playersCount: '1-8',
        origin: 'Ancient Egypt',
        majorCompetition: 'Olympic Swimming',
        rules: [
            'Swimmers must complete a set distance using a specific stroke',
            'The four main strokes are freestyle, backstroke, breaststroke, and butterfly',
            'Swimmers must touch the wall at the end of each lap',
            'The swimmer with the fastest time wins'
        ],
        famousPlayers: [
            {
                name: 'Michael Phelps',
                image: 'img/players/phelps.jpg',
                achievement: '23x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Michael_Phelps'
            },
            {
                name: 'Mark Spitz',
                image: 'img/players/mark.jpeg',
                achievement: '9x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Mark_Spitz'
            },
            {
                name: 'Katie Ledecky',
                image: 'img/players/led.jpg',
                achievement: '5x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Katie_Ledecky'
            },
            {
                name: 'Ian Thorpe',
                image: 'img/players/lan.jpeg',
                achievement: '5x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Ian_Thorpe'
            },
            {
                name: 'Dara Torres',
                image: 'img/players/dara.jpg',
                achievement: '12x Olympic Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Dara_Torres'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'Olympic Swimming',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'FINA World Championships',
                location: 'Fukuoka, Japan'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Pan Pacific Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'European Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Asian Games',
                location: 'Various Locations'
            }
        ],
    },
    'skating': {
        title: 'Skating',
        banner: 'img/sk.jpg',
        description: 'Skating is a sport that involves sliding over a surface on skates. There are several types of skating, including ice skating, roller skating, and skateboarding.',
        playersCount: '1-8',
        origin: 'Netherlands, 18th century',
        majorCompetition: 'Winter Olympics',
        rules: [
            'Skaters must move over a surface using skates',
            'Ice skaters perform on ice using ice skates',
            'Roller skaters perform on wheels using roller skates',
            'Skateboarders perform tricks on a skateboard'
        ],
        famousPlayers: [
            {
                name: 'Tony Hawk',
                image: 'img/players/Tony.jpeg',
                achievement: 'Professional Skateboarder',
                wikipedia: 'https://en.wikipedia.org/wiki/Tony_Hawk'
            },
            {
                name: 'Michelle Kwan',
                image: 'img/players/kwan.jpg',
                achievement: 'Olympic Figure Skater',
                wikipedia: 'https://en.wikipedia.org/wiki/Michelle_Kwan'
            },
            {
                name: 'Ryan Sheckler',
                image: 'img/players/ryan.jpg',
                achievement: 'Professional Skateboarder',
                wikipedia: 'https://en.wikipedia.org/wiki/Ryan_Sheckler'
            },
            {
                name: 'Tara Lipinski',
                image: 'img/players/tara.jpg',
                achievement: 'Olympic Figure Skater',
                wikipedia: 'https://en.wikipedia.org/wiki/Tara_Lipinski'
            },
            {
                name: 'Rodney Mullen',
                image: 'img/players/rodney.jpeg',
                achievement: 'Professional Skateboarder',
                wikipedia: 'https://en.wikipedia.org/wiki/Rodney_Mullen'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'Winter Olympics',
                location: 'Beijing, China'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'X Games',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'World Figure Skating Championships',
                location: 'Montreal, Canada'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Street League Skateboarding',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Roller Skating World Championships',
                location: 'Various Locations'
            }
        ],
    },
    'golf': {
        title: 'Golf',
        banner: 'img/golf-banner.jpg',
        description: 'Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.',
        playersCount: '1-4',
        origin: 'Scotland, 15th century',
        majorCompetition: 'The Masters',
        rules: [
            'Players must hit the ball into a series of holes in the fewest strokes',
            'Golf courses have 9 or 18 holes',
            'Players use different clubs for different shots',
            'The player with the lowest score wins'
        ],
        famousPlayers: [
            {
                name: 'Tiger Woods',
                image: 'img/players/tiger.webp',
                achievement: '15x Major Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Tiger_Woods'
            },
            {
                name: 'Jack Nicklaus',
                image: 'img/players/jack.jpg',
                achievement: '18x Major Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Jack_Nicklaus'
            },
            {
                name: 'Arnold Palmer',
                image: 'img/players/palmer.jpeg',
                achievement: '7x Major Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Arnold_Palmer'
            },
            {
                name: 'Rory McIlroy',
                image: 'img/players/rory.jpg',
                achievement: '4x Major Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Rory_McIlroy'
            },
            {
                name: 'Phil Mickelson',
                image: 'img/players/phil.jpg',
                achievement: '6x Major Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Phil_Mickelson'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'The Masters',
                location: 'Augusta, USA'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'US Open',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'The Open Championship',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'PGA Championship',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Ryder Cup',
                location: 'Various Locations'
            }
        ],
    },
    'rugby': {
        title: 'Rugby',
        banner: 'img/rugby-banner.jpg',
        description: 'Rugby is a team sport that involves running with an oval ball and scoring a try by touching the ball down in the opponent\'s goal area.',
        playersCount: '15',
        origin: 'England, 19th century',
        majorCompetition: 'Rugby World Cup',
        rules: [
            'Each team has 15 players on the field',
            'The game is played over two 40-minute halves',
            'Points are scored by grounding the ball in the opponent\'s in-goal area',
            'The team with the most points at the end of the match wins'
        ],
        famousPlayers: [
            {
                name: 'Jonah Lomu',
                image: 'img/players/lomu.jpeg',
                achievement: 'Rugby World Cup All-time Top Scorer',
                wikipedia: 'https://en.wikipedia.org/wiki/Jonah_Lomu'
            },
            {
                name: 'Richie McCaw',
                image: 'img/players/mccaw.jpg',
                achievement: '2x Rugby World Cup Winner',
                wikipedia: 'https://en.wikipedia.org/wiki/Richie_McCaw'
            },
            {
                name: 'Dan Carter',
                image: 'img/players/carter.jpg',
                achievement: '3x World Rugby Player of the Year',
                wikipedia: 'https://en.wikipedia.org/wiki/Dan_Carter'
            },
            {
                name: 'Martin Johnson',
                image: 'img/players/martin.webp',
                achievement: 'Rugby World Cup Winning Captain',
                wikipedia: 'https://en.wikipedia.org/wiki/Martin_Johnson_(rugby_union)'
            },
            {
                name: 'Brian O\'Driscoll',
                image: 'img/players/brian.jpg',
                achievement: '6x Nations Top Try Scorer',
                wikipedia: 'https://en.wikipedia.org/wiki/Brian_O%27Driscoll'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'Rugby World Cup',
                location: 'France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Six Nations Championship',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Rugby Championship',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'British and Irish Lions Tour',
                location: 'South Africa'
            },
        ],
    },
    'table-tennis': {
        title: 'Table Tennis',
        banner: 'img/tabletennis-banner.jpg',
        description: 'Table tennis, also known as ping-pong and whiff-whaff, is a sport in which two or four players hit a lightweight ball, also known as the ping-pong ball, back and forth across a table using small solid rackets.',
        playersCount: '1-2',
        origin: 'England, 19th century',
        majorCompetition: 'ITTF World Table Tennis Championships',
        rules: [
            'Players must hit the ball over the net into the opponent\'s court',
            'The ball can only bounce once on each side of the table',
            'Points are scored when opponent fails to return the ball',
            'Matches are played in sets and games'
        ],
        famousPlayers: [
            {
                name: 'Ma Long',
                image: 'img/players/long.avif',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Ma_Long'
            },
            {
                name: 'Zhang Jike',
                image: 'img/players/jike.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Zhang_Jike'
            },
            {
                name: 'Ding Ning',
                image: 'img/players/ning.png',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Ding_Ning'
            },
            {
                name: 'Liu Guoliang',
                image: 'img/players/liu.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Liu_Guoliang'
            },
            {
                name: 'Wang Nan',
                image: 'img/players/nan.webp',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Wang_Nan'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'ITTF World Table Tennis Championships',
                location: 'Busan, South Korea'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Olympic Table Tennis',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Asian Table Tennis Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'European Table Tennis Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'World Team Table Tennis Championships',
                location: 'Various Locations'
            }
        ],
    },
    'baseball': {   
        title: 'Baseball',
        banner: 'img/baseball-banner.jpg',
        description: 'Baseball is a bat-and-ball game played between two teams of nine players each, who take turns batting and fielding.',
        playersCount: '9',
        origin: 'United States, 18th century',
        majorCompetition: 'World Series',
        rules: [
            'Each team has 9 players on the field',
            'The game is played over 9 innings',
            'Points are scored by hitting the ball and running around the bases',
            'The team with the most runs at the end of the game wins'
        ],
        famousPlayers: [
            {
                name: 'Babe Ruth',
                image: 'img/players/Ruth.jpg',
                achievement: '714 Career Home Runs',
                wikipedia: 'https://en.wikipedia.org/wiki/Babe_Ruth'
            },
            {
                name: 'Hank Aaron',
                image: 'img/players/Hank.jpeg',
                achievement: '755 Career Home Runs',
                wikipedia: 'https://en.wikipedia.org/wiki/Hank_Aaron'
            },
            {
                name: 'Willie Mays',
                image: 'img/players/Mays.webp',
                achievement: '660 Career Home Runs',
                wikipedia: 'https://en.wikipedia.org/wiki/Willie_Mays'
            },
            {
                name: 'Barry Bonds',
                image: 'img/players/Bonds.jpeg',
                achievement: '762 Career Home Runs',
                wikipedia: 'https://en.wikipedia.org/wiki/Barry_Bonds'
            },
            {
                name: 'Ken Griffey Jr.',
                image: 'img/players/ken.jpg',
                achievement: '630 Career Home Runs',
                wikipedia: 'https://en.wikipedia.org/wiki/Ken_Griffey_Jr.'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'World Series',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'MLB All-Star Game',
                location: 'Various Locations'
            },
            {
                date : { day: '01', month: 'JAN' },
                title : 'World Baseball Classic',
                location : 'Various Locations'
            },
            {
                date : { day: '01', month: 'JAN' },
                title : 'Olympic Baseball',
                location : 'Paris, France'
            },
            {
                date : { day: '01', month: 'JAN' },
                title : 'Nippon Professional Baseball',
                location : 'Japan'
            }
        ],
    },
    'karate': { 
        title: 'Karate',
        banner: 'img/karate-banner.jpg',
        description: 'Karate is a martial art developed in the Ryukyu Kingdom. It developed from the indigenous Ryukyuan martial arts under the influence of Kung Fu, particularly Fujian White Crane.',
        playersCount: '1-2',
        origin: 'Ryukyu Kingdom, 19th century',
        majorCompetition: 'Olympic Karate',
        rules: [
            'Karatekas must score points by landing strikes on the opponent',
            'Points are awarded based on the location and technique of the strike',
            'Matches are divided into rounds of 2-3 minutes each',
            'The karateka with the most points at the end of the match wins'
        ],
        famousPlayers: [
            {
                name: 'Rika Usami',
                image: 'img/players/rika.jpg',
                achievement: 'World Kata Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Rika_Usami'
            },
            {
                name: 'Rafael Aghayev',
                image: 'img/players/rafel.jpg',
                achievement: '5x World Kumite Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Rafael_Aghayev'
            },
            {
                name: 'Antonio Diaz',
                image: 'img/players/diaz.webp',
                achievement: '2x World Kata Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Antonio_D%C3%ADaz_(karateka)'
            },
            {
                name: 'Sandra Sanchez',
                image: 'img/players/sand.jpg',
                achievement: 'World Kata Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Sandra_S%C3%A1nchez'
            },
            {
                name: 'Steven Da Costa',
                image: 'img/players/costa.jpeg',
                achievement: 'WorldKumite Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Steven_Da_Costa'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'Olympic Karate',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'World Karate Championships',
                location: 'Dubai, UAE'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Karate 1 Premier League',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Karate 1 Youth League',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Karate Combat',
                location: 'Various Locations'
            }
        ],
    },
    'judo': {
        title: 'Judo',
        banner: 'img/judo.webp',
        description: 'Judo is a modern martial art, combat sport and Olympic sport created in Japan in 1882 by Jigoro Kano. Its most prominent feature is its competitive element, where the objective is to either throw or takedown an opponent to the ground, immobilize or otherwise subdue an opponent witha pin, or force an opponent to submit with a joint lock or a choke.',
        playersCount: '1-2',
        origin: 'Japan, 19th century',
        majorCompetition: 'Olympic Judo',
        rules: [
            'Judokas must score points by throwing or pinning the opponent',
            'Points are awarded based on the technique and execution of the throw',
            'Matches are divided into rounds of 3-5 minutes each',
            'The judoka with the most points at the end of the match wins'
        ],
        famousPlayers: [
            {
                name: 'Teddy Riner',
                image: 'img/players/riner.jpeg',
                achievement: '10x World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Teddy_Riner'
            },
            {
                name: 'Ronda Rousey',
                image: 'img/players/ronda.webp',
                achievement: 'Olympic Bronze Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Ronda_Rousey'
            },
            {
                name: 'Shohei Ono',
                image: 'img/players/ono.jpg',
                achievement: '2x Olympic Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Shohei_Ono'
            },
            {
                name: 'Ilias Iliadis',
                image: 'img/players/ilias.jpg',
                achievement: 'Olympic Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Ilias_Iliadis'
            },
            {
                name: 'Lucie Decosse',
                image: 'img/players/lucie.jpeg',
                achievement: 'Olympic Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Lucie_D%C3%A9cosse'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'Olympic Judo',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'World Judo Championships',
                location: 'Budapest, Hungary'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'IJF Grand Slam',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'IJF Grand Prix',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'IJF World Tour',
                location: 'Various Locations'
            }
        ],
    },
    'MMA': {
        title: 'MMA',
        banner: 'img/MMA.jpg',
        description: 'Mixed martial arts (MMA) is a full-contact combat sport that allows a wide variety of fighting techniques and skills from a mixture of other combat sports to be used in competition. The rules allow the use of striking and grappling techniques while standing and on the ground.',
        playersCount: '1-2',
        origin: 'United States, 20th century',
        majorCompetition: 'UFC',
        rules: [
            'Fighters must score points by striking or grappling the opponent',
            'Points are awarded based on the technique and execution of the strike',
            'Matches are divided into rounds of 3-5 minutes each',
            'The fighter with the most points at the end of the match wins'
        ],
        famousPlayers: [
            {
                name: 'Conor McGregor',
                image: 'img/players/conor.jpeg',
                achievement: 'UFC Featherweight and Lightweight Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Conor_McGregor'
            },
            {
                name: 'Jon Jones',
                image: 'img/players/jones.jpg',
                achievement: 'UFC Light Heavyweight Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Jon_Jones'
            },
            {
                name: 'Amanda Nunes',
                image: 'img/players/nunes.webp',
                achievement: 'UFC Bantamweight and Featherweight Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Amanda_Nunes'
            },
            {
                name: 'Khabib Nurmagomedov',
                image: 'img/players/khabib.jpg',
                achievement: 'UFC Lightweight Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Khabib_Nurmagomedov'
            },
            {
                name: 'Valentina Shevchenko',
                image: 'img/players/vale.jpg',
                achievement: 'UFC Flyweight Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Valentina_Shevchenko'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'UFC',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Bellator',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'ONE Championship',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'PFL',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Rizin',
                location: 'Various Locations'
            }
        ],
    },
    'archery': {
        title: 'Archery',
        banner: 'img/archery-banner.jpg',
        description: 'Archery is the art, sport, practice, or skill of using a bow to shoot arrows. The word comes from the Latin arcus. Historically, archery has been used for hunting and combat.',
        playersCount: '1-2',
        origin: 'Ancient Egypt',
        majorCompetition: 'Olympic Archery',
        rules: [
            'Archers must score points by hitting the target with arrows',
            'Points are awarded based on the location and accuracy of the shot',
            'Matches are divided into rounds of 3-6 arrows each',
            'The archer with the most points at the end of the match wins'
        ],
        famousPlayers: [
            {
                name: 'Kim Woo-jin',
                image: 'img/players/jin.png',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Kim_Woo-jin'
            },
            {
                name: 'Chang Hye-jin',
                image: 'img/players/hye.jpeg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Chang_Hye-jin'
            },
            {
                name: 'Brady Ellison',
                image: 'img/players/Brady.jpeg',
                achievement: 'Olympic Silver Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Brady_Ellison'
            },
            {
                name: 'Ki Bo-bae',
                image: 'img/players/bae.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Ki_Bo-bae'
            },
            {
                name: 'Ku Bon-chan',
                image: 'img/players/chan.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Ku_Bon-chan'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'Olympic Archery',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'World Archery Championships',
                location: 'Yankton, USA'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Archery World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Asian Archery Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'European Archery Championships',
                location: 'Various Locations'
            }
        ],
    },
        'shooting': {
        title: 'Shooting',
        banner: 'img/shooting-banner.avif',
        description: 'Shooting sports is a collective group of competitive and recreational sporting activities involving proficiency tests of accuracy, precision and speed in shooting, using various types of ranged weapons, mainly guns and air guns.',
        playersCount: '1-2',
        origin: 'England, 19th century',
        majorCompetition: 'Olympic Shooting',
        rules: [
            'Shooters must score points by hitting the target with bullets',
            'Points are awarded based on the location and accuracy of the shot',
            'Matches are divided into rounds of 10-20 shots each',
            'The shooter with the most points at the end of the match wins'
        ],
        famousPlayers: [
            {
                name: 'Kim Rhode',
                image: 'img/players/kim.webp',
                achievement: '6x Olympic Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Kim_Rhode'
            },
            {
                name: 'Michael Diamond',
                image: 'img/players/diamond.jpeg',
                achievement: '2x Olympic Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Michael_Diamond_(sport_shooter)'
            },
            {
                name: 'Abhinav Bindra',
                image: 'img/players/Bindra.webp',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Abhinav_Bindra'
            },
            {
                name:'manu bhaker',
                image: 'img/players/manu.jpg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Manu_Bhaker'
            },
            {
                name: 'Jin Jong-oh',
                image: 'img/players/jong.webp',
                achievement: '4x Olympic Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Jin_Jong-oh'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'Olympic Shooting',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'ISSF World Championships',
                location: 'New Delhi, India'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'ISSF World Cup',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Commonwealth Shooting Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Asian Shooting Championships',
                location: 'Various Locations'
            }
        ],
    },
    'racing': {
        title: 'Racing',
        banner: 'img/racing-banner.jpg',
        description: 'Racing is a competition of speed, against an objective criterion, usually a clock or to a specific point. The competitors in racing are usually separated by a distance or time gap and follow a set course.',
        playersCount: '1-2',
        origin: 'Ancient Greece',
        majorCompetition: 'Formula 1',
        rules: [
            'Racers must complete a set distance in the fastest time',
            'racers compete against each other on a track',
            'Points are awarded based on the finishing position',
            'The racer with the most points at the end of the season wins',
            'The racer with the fastest time wins'
        ],
        famousPlayers: [
            {
                name: 'Lewis Hamilton',
                image: 'img/players/lewis.jpg',
                achievement: '7x Formula 1 World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Lewis_Hamilton'
            },
            {
                name: 'Michael Schumacher',
                image: 'img/players/michael.png',
                achievement: '7x Formula 1 World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Michael_Schumacher'
            },
            {
                name: 'Ayrton Senna',
                image: 'img/players/senna.jpg',
                achievement: '3x Formula 1 World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Ayrton_Senna'
            },
            {
                name: 'Sebastian Vettel',
                image: 'img/players/vettel.jpg',
                achievement: '4x Formula 1 World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Sebastian_Vettel'
            },
            {
                name: 'Niki Lauda',
                image: 'img/players/niki.avif',
                achievement: '3x Formula 1 World Champion',
                wikipedia: 'https://en.wikipedia.org/wiki/Niki_Lauda'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'Formula 1',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'MotoGP',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'NASCAR',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'IndyCar',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'WRC',
                location: 'Various Locations'
            }
        ],
    },
    'wrestling': {
        title: 'Wrestling',
        banner: 'img/wrestling-banner.jpg',
        description: 'Wrestling is a combat sport involving grappling-type techniques such as clinch fighting, throws and takedowns, joint locks, pins and other grappling holds. The sport can either be theatrical for entertainment, or genuinely competitive.',
        playersCount: '1-2',
        origin: 'Ancient Greece',
        majorCompetition: 'Olympic Wrestling',
        rules: [
            'Wrestlers must score points by pinning the opponent',
            'Points are awarded based on the duration of the pin',
            'Matches are divided into rounds of 2-3 minutes each',
            'The wrestler with the most points at the end of the match wins'
        ],
        famousPlayers: [
            {
                name: 'Jordan Burroughs',
                image: 'img/players/burrourghs.jpeg',
                achievement: 'Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Jordan_Burroughs'
            },
            {
                name: 'Saori Yoshida',
                image: 'img/players/yoshida.jpg',
                achievement: '3x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Saori_Yoshida'
            },
            {
               name:'sushil kumar',
               image:'img/players/sushil.jpeg',
                achievement:'2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Sushil_Kumar'
            },
            {
                name: 'aman sehrawat',
                image: 'img/players/aman.jpg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/Aman_Sehrawat'
            },
            {
                name: 'John Smith',
                image: 'img/players/johnsmith.jpeg',
                achievement: '2x Olympic Gold Medalist',
                wikipedia: 'https://en.wikipedia.org/wiki/John_Smith_(wrestler)'
            }
        ],
        upcomingEvents: [
            {
                date: { day: '01', month: 'JAN' },
                title: 'Olympic Wrestling',
                location: 'Paris, France'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'World Wrestling Championships',
                location: 'Osaka, Japan'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'Asian Wrestling Championships',
                location: 'Various Locations'
            },
            {
                date: { day: '01', month: 'JAN' },
                title: 'European Wrestling Championships',
                location: 'Various Locations'
            },
        ],
    },
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
                    image: 'img/players/mangiarotti.webp',
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
            banner: 'img/waterpolo-banner.jpg',
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
            banner: 'img/modernpentathlon-banner.jpg',
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
            banner: 'img/curling_banner.jpg',
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
            banner: 'img/skeleton_banner.jpg',
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
            banner: 'img/luge_banner.jpg',
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
                    image: 'img/players/hacl.jpg',
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
                    image: 'img/players/geisenberger.jpeg',
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

        'beach_Volleyball': {
            name: 'Beach Volleyball',
            title: 'Beach Volleyball',
            banner: 'img/beachvolleyball_banner.jpg',
            playersCount: '2',
            origin: 'Hawaii, USA, 1920s',
            majorCompetition: 'Olympic Beach Volleyball',
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
        'bobsleigh': {
            title: 'Bobsleigh',
            banner: 'img/bobsleigh_banner.jpg',
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
            banner: 'img/speedskating_banner.jpg',
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
    
    
    
        'triathlon': {
            name: 'Triathlon',
            title: 'Triathlon',
            banner: 'img/triathlon-banner.jpg',
            playersCount: '1',
            origin: 'France, 1920s',
            majorCompetition: 'Olympic Triathlon',
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
            banner: 'img/Squash-banner.webp',
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
            title: 'Rugby',
            banner: 'img/rugby-banner.jpg', 
            playersCount: '15',
            origin: 'England, 19th century',
            majorCompetition: 'Rugby World Cup',
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
                    image: 'img/players/lomu.jpeg',
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
                    image: 'img/players/brian.jpg',
                    achievement: 'Most Caps for Ireland',
                    wikipedia: 'https://en.wikipedia.org/wiki/Brian_O%27Driscoll'
                },
                {
                    name: 'Martin Johnson',
                    image: 'img/players/johnson.webp',
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
            title: 'Golf',
            banner: 'img/golf-banner.jpg',
            playersCount: '1-4',
            origin: 'Scotland, 15th century',
            majorCompetition: 'The Masters',
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
                    image: 'img/players/tiger.webp',
                    achievement: '15x Major Champion',
                    wikipedia: 'https://en.wikipedia.org/wiki/Tiger_Woods'
                },
                {
                    name: 'Jack Nicklaus',
                    image: 'img/players/jack.jpg',
                    achievement: '18x Major Champion',
                    wikipedia: 'https://en.wikipedia.org/wiki/Jack_Nicklaus'
                },
                {
                    name: 'Annika Sörenstam',
                    image: 'img/players/sorenstam.webp',
                    achievement: '10x Major Champion',
                    wikipedia: 'https://en.wikipedia.org/wiki/Annika_S%C3%B6renstam'
                },
                {
                    name: 'Rory McIlroy',
                    image: 'img/players/rory.jpg',
                    achievement: '4x Major Champion',
                    wikipedia: 'https://en.wikipedia.org/wiki/Rory_McIlroy'
                },
                {
                    name: 'Seve Ballesteros',
                    image: 'img/players/ballesteros.webp',
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
            title: 'Sailing',
            banner: 'img/sailing-banner.jpeg',
            playersCount: '1-5',
            origin: 'Ancient Egypt, 4000 BC',
            majorCompetition: 'Olympic Sailing',
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
            title: 'Cycling',
            banner: 'img/cycling_banner.jpg',
            playersCount: '1-8',
            majorCompetition: 'Olympic Cycling',
            origin: 'France, 19th century',
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
    
        'equestrian': {
            name: 'Equestrian',
            title: 'Equestrian',
            banner: 'img/equestrain_banner.jpeg',
            playersCount: '1',
            origin: 'Ancient Greece, 700 BC',
            majorCompetition: 'Olympic Equestrian',
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
    
        'beach_volleyball': {
            name: 'Beach Volleyball',
            title: 'Beach Volleyball',
            banner: 'img/beach_volleyball-banner.jpg',
            playersCount: '2',
            origin: 'Hawaii, 1915',
            majorCompetition: 'FIVB Beach Volleyball World Tour',
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
                    image: 'img/players/norton.webp',
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
            banner: 'img/fieldhockey_banner.jpg',
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
            banner: 'img/softball-banner.webp',
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
                },
                {
                    name: 'Michelle Smith',
                    image: 'img/players/smith.jpg',
                    achievement: '2x Olympic Gold Medalist',
                    wikipedia: 'https://en.wikipedia.org/wiki/Michelle_Smith'
                },
                {
                    name: 'Yukiko Ueno',
                    image: 'img/players/ueno.jpg',
                    achievement: 'Olympic Gold Medalist',
                    wikipedia: 'https://en.wikipedia.org/wiki/Yukiko_Ueno'
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


document.addEventListener('DOMContentLoaded', function() {
    // Get sport from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const sportId = urlParams.get('sport');
    
    if (sportId && sportsData[sportId]) {
        displaySportDetails(sportsData[sportId]);
    } else {
        // Handle invalid sport ID
        window.location.href = 'sports.html';
    }
});

function displaySportDetails(sport) {
    // Update banner and title
    document.getElementById('sport-banner').src = sport.banner;
    document.getElementById('sport-title').textContent = sport.title;
    
    // Update overview section
    document.getElementById('sport-description').textContent = sport.description;
    document.getElementById('players-count').textContent = sport.playersCount;
    document.getElementById('sport-origin').textContent = sport.origin;
    document.getElementById('major-competition').textContent = sport.majorCompetition;
    
    // Update rules
    const rulesList = document.getElementById('rules-list');
    sport.rules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        rulesList.appendChild(li);
    });
    
    // Update famous players
    const playersGrid = document.getElementById('players-grid');
    sport.famousPlayers.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.innerHTML = `
            <img src="${player.image}" alt="${player.name}" class="player-image">
            <div class="player-info">
                <h3><a href="${player.wikipedia}" target="_blank" rel="noopener noreferrer">${player.name}</a></h3>
                <p>${player.achievement}</p>
            </div>
        `;
        playersGrid.appendChild(playerCard);
    });
    
    // Update upcoming events
    const eventsGrid = document.getElementById('events-grid');
    sport.upcomingEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-date">
                <div class="day">${event.date.day}</div>
                <div class="month">${event.date.month}</div>
            </div>
            <div class="event-info">
                <h3>${event.title}</h3>
                <p>${event.location}</p>
            </div>
        `;
        eventsGrid.appendChild(eventCard);
    });
} 