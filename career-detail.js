document.addEventListener('DOMContentLoaded', function() {
    // Get career ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const careerId = urlParams.get('id');

    // Career data object (in a real application, this would come from a backend)
    const careerData = {
        'manager': {
            title: 'Team Manager',
            category: 'Sports Management',
            image: 'img/teammanager-banner.jpg',
            overview: 'A team manager is responsible for overseeing the operations of a sports team, managing logistics, coordinating events, and handling administrative tasks. They work closely with coaches, players, and staff to ensure smooth functioning of the team.',
            quickStats: {
                growthRate: 'Medium',
                avgSalary: '₹35,000 - ₹60,000',
                opportunities: 'Moderate'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in sports management, business administration, or a related field. Consider pursuing an MBA for advanced knowledge.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Internship',
                    description: 'Gain practical experience through internships with sports teams, event management companies, or sports organizations.',
                    icon: 'fas fa-briefcase'    
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in sports management, event planning, or team administration. Stay updated with industry trends.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend conferences, workshops, and seminars to enhance skills. Build a network in the sports and management communities.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Leadership', icon: 'fas fa-users', description: 'Ability to guide and motivate teams' },
                { name: 'Organizational Skills', icon: 'fas fa-tasks', description: 'Efficiently manage team operations' },
                { name: 'Communication', icon: 'fas fa-comments', description: 'Clear and effective communication with stakeholders' },
                { name: 'Problem Solving', icon: 'fas fa-lightbulb', description: 'Resolve issues and conflicts effectively' }
            ],
            institutes: [
                {
                    name: 'International Institute of Sports Management',
                    location: 'Mumbai, India',
                    image: 'img/iism.jpg',
                    website: 'https://www.iismworld.com',
                    description: 'Leading institute for sports management education'
                },
                {
                    name: 'Sports Management Institute',
                    location: 'Bangalore, India',
                    image: 'img/smi.avif',
                    website: 'https://www.sportsmanagement.in',
                    description: 'Specialized center for sports administration training'
                }
            ],
            salary: {
                entry: '₹25,000 - ₹35,000',
                mid: '₹35,000 - ₹60,000',
                senior: '₹60,000+',
                factors: ['Experience Level', 'Team Size', 'Sport Type', 'Location']
            },
            jobMarket: {
                growth: 'Medium',
                demand: 'Stable',
                opportunities: 'Moderate',
                trends: [
                    'Increased focus on sports business',
                    'Rising demand for sports events',
                    'Growth in sports marketing',
                    'Expansion of sports franchises'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Coach',
                    category: 'Athletic Performance',
                    image: 'img/coach-banner.jpg',
                    id: 'coach'
                },
                {
                    title: 'Sports Physiotherapist',
                    category: 'Sports Medicine',
                    image: 'img/physio.jpg',
                    id: 'physio'
                },
                {
                    title: 'Sports Marketing Manager',
                    category: 'Sports Marketing',
                    image: 'img/marketer1.jpg',
                    id: 'marketer'
                }
            ]
        }, 
        'coach': {
            title: 'Sports Coach',
            category: 'Athletic Performance',
            image: 'img/coach.jpg',
            overview: 'A sports coach is responsible for training and developing athletes, creating training programs, and leading teams to success. They work with both individual athletes and teams across various sports disciplines.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹40,000 - ₹75,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in sports science, physical education, or a related field. Consider pursuing certifications in specific sports.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Initial Experience',
                    description: 'Start as an assistant coach or volunteer coach to build practical experience. Work with youth teams or amateur clubs.',
                    icon: 'fas fa-user-friends'
                },
                {
                    title: 'Certification',
                    description: 'Obtain relevant coaching certifications from recognized sports organizations. These may include first aid, safety, and specific sport certifications.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Continue learning through workshops, seminars, and advanced coaching courses. Build a network in the sports community.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Leadership', icon: 'fas fa-users', description: 'Ability to guide and motivate teams' },
                { name: 'Communication', icon: 'fas fa-comments', description: 'Clear and effective communication with athletes' },
                { name: 'Strategic Planning', icon: 'fas fa-chess', description: 'Develop game strategies and training plans' },
                { name: 'Technical Knowledge', icon: 'fas fa-book', description: 'Deep understanding of sports techniques' }
            ],
            institutes: [
                {
                    name: 'National Institute of Sports',
                    location: 'New Delhi, India',
                    image: 'img/institute1.jpg',
                    website: 'https://www.nis.gov.in',
                    description: 'Premier institute for sports coaching education'
                },
                {
                    name: 'Sports Authority of India',
                    location: 'Bangalore, India',
                    image: 'img/institute2.jpg',
                    website: 'https://www.sportsauthorityofindia.nic.in',
                    description: 'Leading organization for sports development'
                }
            ],
            salary: {
                entry: '₹25,000 - ₹40,000',
                mid: '₹40,000 - ₹75,000',
                senior: '₹75,000+',
                factors: ['Experience Level', 'Sport Type', 'Location', 'Team Level']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Increasing focus on youth sports',
                    'Rising demand for personal trainers',
                    'Growth in professional sports leagues',
                    'Expansion of sports education programs'
                ]
            },
            relatedCareers: [
                {
                    title: 'Fitness Trainer',
                    category: 'Athletic Performance',
                    image: 'img/trainer.jpg',
                    id: 'trainer'
                },
                {
                    title: 'Sports Physiotherapist',
                    category: 'Sports Medicine',
                    image: 'img/physio.jpg',
                    id: 'physio'
                },
                {
                    title: 'Team Manager',
                    category: 'Sports Management',
                    image: 'img/manager.jpg',
                    id: 'manager'
                }
            ]
        },
        'physio': {
            title: 'Sports Physiotherapist',
            category: 'Sports Medicine',
            image: 'img/physio-banner.webp',
            overview: 'A sports physiotherapist is responsible for diagnosing and treating sports-related injuries, designing rehabilitation programs, and providing preventive care to athletes. They work closely with sports teams and individual athletes to ensure peak physical performance.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹30,000 - ₹60,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in physiotherapy or sports medicine. Pursue a master\'s degree for advanced specialization.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Clinical Experience',
                    description: 'Gain practical experience through internships or clinical placements. Work with sports teams or rehabilitation centers.',
                    icon: 'fas fa-user-md'
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in sports physiotherapy and rehabilitation. Stay updated with the latest treatment techniques.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend workshops, conferences, and seminars to enhance skills. Build a network in the sports and medical communities.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Injury Assessment', icon: 'fas fa-user-injured', description: 'Diagnose and evaluate sports injuries' },
                { name: 'Rehabilitation', icon: 'fas fa-dumbbell', description: 'Design and implement recovery programs' },
                { name: 'Preventive Care', icon: 'fas fa-shield-alt', description: 'Recommend injury prevention strategies' },
                { name: 'Team Collaboration', icon: 'fas fa-users', description: 'Work closely with coaches and medical staff' }
            ],
            institutes: [
                {
                    name: 'Indian Institute of Sports Medicine',
                    location: 'Mumbai, India',
                    image: 'img/institute3.jpg',
                    website: 'https://www.iism.org.in',
                    description: 'Specialized institute for sports medicine education'
                },
                {
                    name: 'Sports Physiotherapy Institute',
                    location: 'Chennai, India',
                    image: 'img/institute4.jpg',
                    website: 'https://www.sportsphysio.org',
                    description: 'Leading center for sports physiotherapy training'
                }
            ],
            salary: {
                entry: '₹20,000 - ₹30,000',
                mid: '₹30,000 - ₹60,000',
                senior: '₹60,000+',
                factors: ['Experience Level', 'Specialization', 'Location', 'Team Level']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Rising awareness of sports injuries',
                    'Increased focus on athlete health',
                    'Growing sports leagues and events',
                    'Expansion of sports medicine facilities'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Coach',
                    category: 'Athletic Performance',
                    image: 'img/coach-banner.jpg',
                    id: 'coach'
                },
                {
                    title: 'Fitness Trainer',
                    category: 'Athletic Performance',
                    image: 'img/trainer.jpg',
                    id: 'trainer'
                },
                {
                    title: 'Sports Nutritionist',
                    category: 'Sports Science',
                    image: 'img/nutritionist.webp',
                    id: 'nutritionist'
                }
            ]
        },
        'agent': {
            title: 'Sports Agent',
            category: 'Sports Management',
            image: 'img/agent-banner.jpg',
            overview: 'A sports agent is responsible for representing athletes, negotiating contracts, and managing their professional careers. They work closely with athletes, teams, and sponsors to secure deals and opportunities.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹50,000 - ₹1,00,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in sports management, business administration, or a related field. Consider pursuing a law degree for contract negotiations.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Internship',
                    description: 'Gain practical experience through internships with sports agencies, talent management firms, or sports organizations.',
                    icon: 'fas fa-briefcase'
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in sports management, contract law, and negotiation. Stay updated with industry regulations.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend conferences, workshops, and seminars to enhance skills. Build a network in the sports and entertainment industries.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Negotiation', icon: 'fas fa-handshake', description: 'Ability to secure favorable deals for athletes' },
                { name: 'Networking', icon: 'fas fa-user-friends', description: 'Build relationships with industry professionals' },
                { name: 'Legal Knowledge', icon: 'fas fa-balance-scale', description: 'Understand contract law and regulations' },
                { name: 'Marketing', icon: 'fas fa-bullhorn', description: 'Promote athletes and secure endorsements' }
            ],
            institutes: [
                {
                    name: 'Sports Management Worldwide',
                    location: 'Portland, USA',
                    image: 'img/ins5.png',
                    website: 'https://www.sportsmanagementworldwide.com',
                    description: 'Global leader in sports agent education'
                },
                {
                    name: 'International Sports Sciences Association',
                    location: 'Online',
                    image: 'img/ins6.png',
                    website: 'https://www.issaonline.com',
                    description: 'Leading provider of sports management courses'
                }
            ],
            salary: {
                entry: '₹40,000 - ₹50,000',
                mid: '₹50,000 - ₹1,00,000',
                senior: '₹1,00,000+',
                factors: ['Experience Level', 'Clientele', 'Sport Type', 'Location']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Expansion of sports leagues',
                    'Rising athlete endorsements',
                    'Globalization of sports industry',
                    'Increased focus on athlete representation'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Marketing Manager',
                    category: 'Sports Marketing',
                    image: 'img/marketer1.jpg',
                    id: 'marketer'
                },
                {
                    title: 'Sports Manager',
                    category: 'Sports Management',
                    image: 'img/manager.jpg',
                    id: 'manager'
                },
                {
                    title: 'Sports Journalist',
                    category: 'Sports Media',
                    image: 'img/journalist.jpg',
                    id: 'journalist'
                }
            ]
            
        },
        'trainer': {
            title: 'Fitness Trainer',
            category: 'Athletic Performance',
            image: 'img/trainer-banner.jpeg',
            overview: 'A fitness trainer is responsible for designing workout programs, coaching clients, and providing fitness guidance. They work with individuals, groups, or sports teams to improve physical health and performance.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹25,000 - ₹50,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a certification course in fitness training, personal training, or a related field. Consider pursuing advanced certifications for specialization.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Practical Training',
                    description: 'Gain hands-on experience through internships, workshops, or fitness classes. Work with diverse clients to build skills.',
                    icon: 'fas fa-dumbbell'
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in fitness training, nutrition, and injury prevention. Stay updated with industry trends and techniques.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend fitness expos, seminars, and training workshops to enhance skills. Build a network in the fitness community.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Fitness Training', icon: 'fas fa-dumbbell', description: 'Design and implement workout programs' },
                { name: 'Nutrition Guidance', icon: 'fas fa-apple-alt', description: 'Provide dietary recommendations for clients' },
                { name: 'Motivation', icon: 'fas fa-heart', description: 'Inspire clients to achieve fitness goals' },
                { name: 'Client Management', icon: 'fas fa-users', description: 'Build relationships and trust with clients' }
            ],
            institutes: [
                {
                    name: 'National Academy of Sports Medicine',
                    location: 'Online',
                    image: 'img/institute7.jpg',
                    website: 'https://www.nasm.org',
                    description: 'Leading provider of fitness training courses'
                },
                {
                    name: 'American Council on Exercise',
                    location: 'Online',
                    image: 'img/institute8.jpg',
                    website: 'https://www.acefitness.org',
                    description: 'Global leader in fitness education'
                }
            ],
            salary: {
                entry: '₹20,000 - ₹30,000',
                mid: '₹25,000 - ₹50,000',
                senior: '₹50,000+',
                factors: ['Experience Level', 'Clientele', 'Location', 'Specialization']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Rising health awareness',
                    'Growing fitness industry',
                    'Demand for online training',
                    'Expansion of gyms and wellness centers'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Coach',
                    category: 'Athletic Performance',
                    image: 'img/coach-banner.jpg',
                    id: 'coach'
                },
                {
                    title: 'Sports Physiotherapist',
                    category: 'Sports Medicine',
                    image: 'img/physio.jpg',
                    id: 'physio'
                },
                {
                    title: 'Team Manager',
                    category: 'Sports Management',
                    image: 'img/manager.jpg',
                    id: 'manager'
                }
            ]
        },
        'marketer': {
            title: 'Sports Marketing Manager',
            category: 'Sports Marketing',
            image: 'img/marketer.webp',
            overview: 'A sports marketing manager is responsible for promoting sports events, managing sponsorships, and creating marketing campaigns. They work with sports teams, leagues, and brands to enhance visibility and engagement.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹40,000 - ₹70,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in marketing, communications, or sports management. Consider pursuing certifications in digital marketing.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Internship',
                    description: 'Gain practical experience through internships with sports marketing agencies, event companies, or sports organizations.',
                    icon: 'fas fa-briefcase'
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in sports marketing, social media management, and branding. Stay updated with digital marketing trends.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend marketing conferences, workshops, and seminars to enhance skills. Build a network in the sports and marketing industries.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Marketing Strategy', icon: 'fas fa-bullhorn', description: 'Develop campaigns and promotions' },
                { name: 'Digital Marketing', icon: 'fas fa-laptop', description: 'Utilize online platforms for engagement' },
                { name: 'Sponsorship Management', icon: 'fas fa-handshake', description: 'Secure sponsorships and partnerships' },
                { name: 'Analytics', icon: 'fas fa-chart-bar', description: 'Analyze marketing data and trends' }
            ],
            institutes: [
                {
                    name: 'Sports Marketing Association',
                    location: 'Chicago, USA',
                    image: 'img/institute9.jpg',
                    website: 'https://www.sportsmarketingassociation.org',
                    description: 'Leading organization for sports marketing education'
                },
                {
                    name: 'Digital Marketing Institute',
                    location: 'Online',
                    image: 'img/institute10.jpg',
                    website: 'https://www.digitalmarketinginstitute.com',
                    description: 'Global provider of digital marketing courses'
                }
            ],
            salary: {
                entry: '₹30,000 - ₹40,000',
                mid: '₹40,000 - ₹70,000',
                senior: '₹70,000+',
                factors: ['Experience Level', 'Industry Type', 'Location', 'Campaign Success']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Rising digital marketing focus',
                    'Increased sports sponsorships',
                    'Globalization of sports brands',
                    'Expansion of sports media channels'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Agent',
                    category: 'Sports Management',
                    image: 'img/agent.jpg',
                    id: 'agent'
                },
                {
                    title: 'Sports Manager',
                    category: 'Sports Management',
                    image: 'img/manager.jpg',
                    id: 'manager'
                },
                {
                    title: 'Sports Journalist',
                    category: 'Sports Media',
                    image: 'img/journalist.jpg',
                    id: 'journalist'
                }
            ],
        },
        'nutritionist': {
            title: 'Sports Nutritionist',
            category: 'Sports Science',
            image: 'img/nutritionist-banner.jpg',
            overview: 'A sports nutritionist is responsible for designing diet plans, providing nutritional guidance, and optimizing performance for athletes. They work with sports teams, fitness enthusiasts, and individuals to enhance health and fitness.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹30,000 - ₹60,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in nutrition, dietetics, or sports science. Pursue advanced certifications in sports nutrition.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Practical Training',
                    description: 'Gain hands-on experience through internships, workshops, or clinical placements. Work with athletes or sports teams to build skills.',
                    icon: 'fas fa-dumbbell',
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in sports nutrition, diet planning, and health coaching. Stay updated with nutritional trends and research.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend nutrition conferences, workshops, and seminars to enhance skills. Build a network in the sports and health industries.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Nutritional Planning', icon: 'fas fa-apple-alt', description: 'Design customized diet programs' },
                { name: 'Health Coaching', icon: 'fas fa-heart', description: 'Provide guidance on health and wellness' },
                { name: 'Sports Science', icon: 'fas fa-flask', description: 'Apply scientific principles to nutrition' },
                { name: 'Client Management', icon: 'fas fa-users', description: 'Build relationships and trust with clients' }
            ],
            institutes: [
                {
                    name: 'International Sports Nutrition Institute',
                    location: 'London, UK',
                    image: 'img/institute11.jpg',
                    website: 'https://www.sportsnutritioninstitute.com',
                    description: 'Global provider of sports nutrition courses'
                },
                {
                    name: 'National Association of Nutrition Professionals',
                    location: 'Online',
                    image: 'img/institute12.jpg',
                    website: 'https://www.nanp.org',
                    description: 'Leading organization for nutrition education'
                }
            ],
            salary: {
                entry: '₹20,000 - ₹30,000',
                mid: '₹30,000 - ₹60,000',
                senior: '₹60,000+',
                factors: ['Experience Level', 'Clientele', 'Location', 'Specialization']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Rising health awareness',
                    'Increased focus on athlete nutrition',
                    'Growing fitness industry',
                    'Expansion of health and wellness centers'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Coach',
                    category: 'Athletic Performance',
                    image: 'img/coach-banner.jpg',
                    id: 'coach'
                },
                {
                    title: 'Fitness Trainer',
                    category: 'Athletic Performance',
                    image: 'img/trainer.jpg',
                    id: 'trainer'
                },
                {
                    title: 'Sports Physiotherapist',
                    category: 'Sports Medicine',
                    image: 'img/physio.jpg',
                    id: 'physio'
                }
            ]
        },
        'journalist': {
            title: 'Sports Journalist',
            category: 'Sports Media',
            image: 'img/journalist-banner.jpg',
            overview: 'A sports journalist is responsible for reporting sports news, covering events, and analyzing games. They work in various media platforms such as print, digital, television, and radio to provide sports coverage.',
            quickStats: {
                growthRate: 'Medium',
                avgSalary: '₹25,000 - ₹50,000',
                opportunities: 'Moderate'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in journalism, mass communication, or sports media. Pursue internships with media outlets for practical experience.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Practical Training',
                    description: 'Gain hands-on experience through internships, freelance work, or sports blogs. Develop writing and reporting skills.',
                    icon: 'fas fa-pen',
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in journalism, sports reporting, or digital media. Stay updated with media trends and technologies.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend journalism workshops, media conferences, and sports events. Build a network in the media and sports industries.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Writing', icon: 'fas fa-pen', description: 'Craft engaging sports stories and articles' },
                { name: 'Reporting', icon: 'fas fa-microphone', description: 'Cover sports events and interviews' },
                { name: 'Digital Media', icon: 'fas fa-laptop', description: 'Utilize online platforms for news coverage' },
                { name: 'Research', icon: 'fas fa-search', description: 'Investigate sports topics and trends' }
            ],
            institutes: [
                {
                    name: 'Sports Journalism Institute',
                    location: 'New York, USA',
                    image: 'img/institute13.jpg',
                    website: 'https://www.sportsjournalisminstitute.com',
                    description: 'Leading provider of sports journalism courses'
                },
                {
                    name: 'Media Training Center',
                    location: 'London, UK',
                    image: 'img/institute14.jpg',
                    website: 'https://www.mediatrainingcenter.com',
                    description: 'Global institute for media education'
                }
            ],
            salary: {
                entry: '₹20,000 - ₹30,000',
                mid: '₹25,000 - ₹50,000',
                senior: '₹50,000+',
                factors: ['Experience Level', 'Media Type', 'Location', 'Coverage Area']
            },
            jobMarket: {
                growth: 'Medium',
                demand: 'Stable',
                opportunities: 'Moderate',
                trends: [
                    'Rising digital media presence',
                    'Increased sports coverage',
                    'Growing sports journalism platforms',
                    'Expansion of sports media channels'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Agent',
                    category: 'Sports Management',
                    image: 'img/agent.jpg',
                    id: 'agent'
                },
                {
                    title: 'Sports Manager',
                    category: 'Sports Management',
                    image: 'img/manager.jpg',
                    id: 'manager'
                },
                {
                    title: 'Sports Marketing Manager',
                    category: 'Sports Marketing',
                    image: 'img/marketer1.jpg',
                    id: 'marketer'
                }
            ],
        },
        'referee': {
            title: 'Sports Referee',
            category: 'Sports Officiating',
            image: 'img/refree-banner.jpg',
            overview: 'A sports referee is responsible for enforcing rules, ensuring fair play, and maintaining discipline during sports events. They officiate games, make decisions, and manage match proceedings.',
            quickStats: {
                growthRate: 'Medium',
                avgSalary: '₹20,000 - ₹40,000',
                opportunities: 'Moderate'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a certification course in sports officiating, refereeing, or a related field. Attend workshops and seminars for rule updates.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Practical Training',
                    description: 'Gain hands-on experience through local games, tournaments, or youth leagues. Develop decision-making skills.',
                    icon: 'fas fa-user-friends',
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in specific sports officiating. Stay updated with rule changes and game regulations.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend referee clinics, training camps, and league matches. Build a network in the sports officiating community.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Game Knowledge', icon: 'fas fa-book', description: 'Understand rules and regulations' },
                { name: 'Decision Making', icon: 'fas fa-balance-scale', description: 'Make quick and fair judgments' },
                { name: 'Communication', icon: 'fas fa-comments', description: 'Interact with players and coaches' },
                { name: 'Conflict Resolution', icon: 'fas fa-user-slash', description: 'Manage disputes and conflicts' }
            ],
            institutes: [
                {
                    name: 'International Referee Association',
                    location: 'Geneva, Switzerland',
                    image: 'img/institute15.jpg',
                    website: 'https://www.refereeassociation.org',
                    description: 'Global organization for sports officiating education'
                },
                {
                    name: 'National Officiating Institute',
                    location: 'New Delhi, India',
                    image: 'img/institute16.jpg',
                    website: 'https://www.officiatinginstitute.org',
                    description: 'Leading institute for sports refereeing training'
                },
            ],
                salary: 
                    {
                        entry: '₹20,000 - ₹30,000',
                        mid: '₹30,000 - ₹60,000',
                        senior: '₹60,000+',
                        factors: ['Experience Level', 'Sport Type', 'League Level', 'Location']
                    },
                
                    jobMarket: {
                        growth: 'Medium',
                        demand: 'Stable',
                        opportunities: 'Moderate',
                        trends: [
                            'Increased focus on fair play',
                            'Growing sports leagues',
                            'Expansion of youth sports',
                            'Rising demand for referees'
                        ],
                    },
                    relatedCareers: [
                        {
                            title: 'Sports Coach',
                            category: 'Athletic Performance',
                            image: 'img/coach-banner.jpg',
                            id: 'coach'
                        },
                        {
                            title: 'Sports Physiotherapist',
                            category: 'Sports Medicine',
                            image: 'img/physio.jpg',
                            id: 'physio'
                        },
                        {
                            title: 'Sports Agent',
                            category: 'Sports Management',
                            image: 'img/agent.jpg',
                            id: 'agent'
                        }
                    ],
                },
     'analyst': {
                    title: 'Sports Analyst',
                    category: 'Sports Analytics',
                    image: 'img/analyst-banner.jpg',
                    overview: 'A sports analyst is responsible for analyzing game data, statistics, and performance metrics to provide insights and recommendations. They work with teams, coaches, and media to enhance strategy and decision-making.',
                    quickStats: {
                        growthRate: 'High',
                        avgSalary: '₹40,000 - ₹70,000',
                        opportunities: 'Abundant'
                    },
                    roadmap: [
                        {
                            title: 'Education',
                            description: 'Complete a bachelor\'s degree in statistics, mathematics, or sports analytics. Pursue courses in data analysis and programming.',
                            icon: 'fas fa-graduation-cap'
                        },
                        {
                            title: 'Practical Training',
                            description: 'Gain hands-on experience through internships, sports teams, or analytics projects. Develop data analysis skills.',
                            icon: 'fas fa-chart-bar',
                        },
                        {
                            title: 'Certification',
                            description: 'Obtain certifications in sports analytics, data visualization, and statistical modeling. Stay updated with analytics tools and software.',
                            icon: 'fas fa-certificate'
                        },
                        {
                            title: 'Professional Development',
                            description: 'Attend analytics workshops, seminars, and sports events. Build a network in the sports analytics community.',
                            icon: 'fas fa-chart-line'
                        }
                    ],
                    skills: [
                        { name: 'Data Analysis', icon: 'fas fa-chart-bar', description: 'Analyze game statistics and trends' },
                        { name: 'Statistical Modeling', icon: 'fas fa-calculator', description: 'Predict outcomes and performance' },
                        { name: 'Programming', icon: 'fas fa-code', description: 'Utilize software for data analysis' },
                        { name: 'Reporting', icon: 'fas fa-file-alt', description: 'Present insights and recommendations' }
                    ],
                    institutes: [
                        {
                            name: 'Sports Analytics Institute',
                            location: 'Boston, USA',
                            image: 'img/ins17.png',
                            website: 'https://www.sportsanalyticsinstitute.com',
                            description: 'Leading provider of sports analytics courses'
                        },
                        {
                            name: 'Data Science Academy',
                            location: 'Online',
                            image: 'img/ins18.jpg',
                            website: 'https://www.datascienceacademy.com',
                            description: 'Global institute for data science education'
                        }
                    ],
            salary: {
                entry: '₹30,000 - ₹40,000',
                mid: '₹40,000 - ₹70,000',
                senior: '₹70,000+',
                factors: ['Experience Level', 'Sport Type', 'Team Level', 'Data Tools']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Increased focus on data-driven decisions',
                    'Growing demand for analytics in sports',
                    'Rising importance of performance metrics',
                    'Expansion of sports analytics departments'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Coach',
                    category: 'Athletic Performance',
                    image: 'img/coach-banner.jpg',
                    id: 'coach'
                },
                {
                    title: 'Sports Manager',
                    category: 'Sports Management',
                    image: 'img/manager.jpg',
                    id: 'manager'
                },
                {
                    title: 'Sports Agent',
                    category: 'Sports Management',
                    image: 'img/agent.jpg',
                    id: 'agent'
                }
            ]
        },
        'finance': {
            title: 'Finance Manager',
            category: 'Sports Management',
            image: 'img/finance.webp',
            overview: 'A finance manager is responsible for managing financial operations, budgeting, and investments for sports organizations. They work with teams, leagues, and agencies to ensure financial stability and growth.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹50,000 - ₹1,00,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in finance, accounting, or sports management. Pursue certifications in financial planning or investment management.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Internship',
                    description: 'Gain practical experience through internships with sports organizations, financial firms, or corporate finance departments.',
                    icon: 'fas fa-briefcase'
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in finance management, budgeting, and investment analysis. Stay updated with financial regulations.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend finance seminars, workshops, and industry events. Build a network in the finance and sports industries.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Financial Planning', icon: 'fas fa-chart-pie', description: 'Develop budgets and financial strategies' },
                { name: 'Investment Management', icon: 'fas fa-hand-holding-usd', description: 'Analyze investments and portfolios' },
                { name: 'Risk Assessment', icon: 'fas fa-chart-line', description: 'Evaluate financial risks and opportunities' },
                { name: 'Reporting', icon: 'fas fa-file-invoice-dollar', description: 'Prepare financial reports and statements' }
            ],
            institutes: [
                {
                    name: 'Sports Finance Institute',
                    location: 'London, UK',
                    image: 'img/institute19.jpg',
                    website: 'https://www.sportsfinanceinstitute.com',
                    description: 'Leading provider of sports finance courses'
                },
                {
                    name: 'Financial Management Association',
                    location: 'New York, USA',
                    image: 'img/institute20.jpg',
                    website: 'https://www.financialmanagementassociation.org',
                    description: 'Global association for finance education'
                }
            ],
            salary: {
                entry: '₹40,000 - ₹50,000',
                mid: '₹50,000 - ₹1,00,000',
                senior: '₹1,00,000+',
                factors: ['Experience Level', 'Organization Size', 'Investment Success', 'Location']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Increased focus on financial stability',
                    'Growing sports investments',
                    'Rising importance of budgeting',
                    'Expansion of sports finance departments'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Agent',
                    category: 'Sports Management',
                    image: 'img/agent.jpg',
                    id: 'agent'
                },
                {
                    title: 'Sports Manager',
                    category: 'Sports Management',
                    image: 'img/manager.jpg',
                    id: 'manager'
                },
                {
                    title: 'Sports Marketing Manager',
                    category: 'Sports Marketing',
                    image: 'img/marketer1.jpg',
                    id: 'marketer'
                }
            ]
        },
        'lawyer': {
            title: 'Sports Lawyer',
            category: 'Sports Law',
            image: 'img/law-banner.jpg',
            overview: 'A sports lawyer is responsible for providing legal advice, negotiating contracts, and handling disputes in the sports industry. They work with athletes, teams, and organizations to ensure legal compliance and protection.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹60,000 - ₹1,20,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in law, sports management, or a related field. Pursue a law degree with a focus on sports law or contract law.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Internship',
                    description: 'Gain practical experience through internships with law firms, sports agencies, or legal departments.',
                    icon: 'fas fa-briefcase'
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in sports law, contract negotiation, and dispute resolution. Stay updated with legal regulations.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend legal seminars, workshops, and sports law conferences. Build a network in the legal and sports industries.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Legal Advice', icon: 'fas fa-balance-scale', description: 'Provide legal guidance and representation' },
                { name: 'Contract Negotiation', icon: 'fas fa-handshake', description: 'Negotiate deals and agreements' },
                { name: 'Dispute Resolution', icon: 'fas fa-gavel', description: 'Resolve conflicts and legal issues' },
                { name: 'Compliance', icon: 'fas fa-check-circle', description: 'Ensure legal adherence and protection' }
            ],
            institutes: [
                {
                    name: 'Sports Law Institute',
                    location: 'New York, USA',
                    image: 'img/law.png',
                    website: 'https://www.sportslawinstitute.com',
                    description: 'Leading provider of sports law courses'
                },
                {
                    name: 'Legal Practice Academy',
                    location: 'London, UK',
                    image: 'img/ins22.jpeg',
                    website: 'https://www.legalpracticeacademy.com',
                    description: 'Global academy for legal education'
                }
            ],
            salary: {
                entry: '₹50,000 - ₹60,000',
                mid: '₹60,000 - ₹1,20,000',
                senior: '₹1,20,000+',
                factors: ['Experience Level', 'Clientele', 'Case Success', 'Location']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Rising legal complexities in sports',
                    'Increased athlete contracts',
                    'Globalization of sports law',
                    'Expansion of sports legal firms'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Agent',
                    category: 'Sports Management',
                    image: 'img/agent.jpg',
                    id: 'agent'
                },
                {
                    title: 'Sports Manager',
                    category: 'Sports Management',
                    image: 'img/manager.jpg',
                    id: 'manager'
                },
                {
                    title: 'Sports Marketing Manager',
                    category: 'Sports Marketing',
                    image: 'img/marketer1.jpg',
                    id: 'marketer'
                }
            ]
        },
        'hr': {
            title: 'HR Manager',
            category: 'Sports Management',
            image: 'img/hr-banner.jpeg',
            overview: 'An HR manager is responsible for recruiting, training, and managing human resources in sports organizations. They work with teams, leagues, and agencies to ensure employee satisfaction and organizational success.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹40,000 - ₹80,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in human resources, business administration, or sports management. Pursue certifications in HR management.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Internship',
                    description: 'Gain practical experience through internships with HR departments, sports organizations, or corporate firms.',
                    icon: 'fas fa-briefcase'    
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in HR management, recruitment, and employee relations. Stay updated with HR trends and practices.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend HR seminars, workshops, and industry events. Build a network in the HR and sports industries.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Recruitment', icon: 'fas fa-users', description: 'Hire and onboard employees' },
                { name: 'Training', icon: 'fas fa-chalkboard-teacher', description: 'Develop employee skills and knowledge' },
                { name: 'Employee Relations', icon: 'fas fa-handshake', description: 'Manage conflicts and grievances' },
                { name: 'Organizational Development', icon: 'fas fa-sitemap', description: 'Enhance team performance and culture' }
            ],
            institutes: [
                {
                    name: 'HR Management Institute',
                    location: 'Chicago, USA',
                    image: 'img/institute23.jpg',
                    website: 'https://www.hrmanagementinstitute.com',
                    description: 'Leading provider of HR management courses'
                },
                {
                    name: 'Global HR Association',
                    location: 'Online',
                    image: 'img/institute24.jpg',
                    website: 'https://www.globalhrassociation.org',
                    description: 'Global association for HR education'
                }
            ],
            salary: {
                entry: '₹30,000 - ₹40,000',
                mid: '₹40,000 - ₹80,000',
                senior: '₹80,000+',
                factors: ['Experience Level', 'Organization Size', 'Employee Satisfaction', 'Location']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Rising focus on employee well-being',
                    'Increased team dynamics',
                    'Globalization of HR practices',
                    'Expansion of sports HR departments'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Agent',
                    category: 'Sports Management',
                    image: 'img/agent.jpg',
                    id: 'agent'
                },
                {
                    title: 'Sports Manager',
                    category: 'Sports Management',
                    image: 'img/manager.jpg',
                    id: 'manager'
                },
                {
                    title: 'Sports Marketing Manager',
                    category: 'Sports Marketing',
                    image: 'img/marketer1.jpg',
                    id: 'marketer'
                }
            ]
        },
        'athlete': {
            title: 'Professional Athlete',
            category: 'Athletic Performance',
            image: 'img/ath-banner.png',
            overview: 'A professional athlete is a skilled individual who competes in sports events, tournaments, and leagues at the highest level. They train rigorously, maintain peak physical condition, and strive for excellence in their sport.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹5,00,000 - ₹1,00,00,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Training',
                    description: 'Start training in a specific sport at a young age. Join local clubs, teams, or academies to develop skills and techniques.',
                    icon: 'fas fa-dumbbell'
                },
                {
                    title: 'Competition',
                    description: 'Participate in local, regional, and national competitions to gain experience and exposure. Aim for success at higher levels of competition.',
                    icon: 'fas fa-trophy'
                },
                {
                    title: 'Professional League',
                    description: 'Join professional leagues, teams, or national squads to compete at the highest level. Sign contracts with clubs or franchises for career advancement.',
                    icon: 'fas fa-medal'
                },
                {
                    title: 'Professional Development',
                    description: 'Work with coaches, trainers, and sports psychologists to enhance performance. Stay updated with sports science and training techniques.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Physical Fitness', icon: 'fas fa-running', description: 'Maintain peak physical condition' },
                { name: 'Skill Mastery', icon: 'fas fa-futbol', description: 'Develop technical skills and abilities' },
                { name: 'Mental Toughness', icon: 'fas fa-brain', description: 'Stay focused and resilient under pressure' },
                { name: 'Teamwork', icon: 'fas fa-users', description: 'Collaborate with teammates and coaches' }
            ],
            institutes: [
                {
                    name: 'National Sports Academy',
                    location: 'New Delhi, India',
                    image: 'img/institute1.jpg',
                    website: 'https://www.nationalsportsacademy.com',
                    description: 'Leading academy for sports training and development'
                },
                {
                    name: 'International Sports Institute',
                    location: 'London, UK',
                    image: 'img/institute2.jpg',
                    website: 'https://www.internationalsportsinstitute.com',
                    description: 'Global institute for sports education'
                }
            ],
            salary: {
                entry: '₹5,00,000 - ₹10,00,000',
                mid: '₹10,00,000 - ₹50,00,000',
                senior: '₹50,00,000+',
                factors: ['Sport Type', 'League Level', 'Performance', 'Endorsements']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Rising sports popularity',
                    'Increased league competitions',
                    'Globalization of sports events',
                    'Expansion of athlete endorsements'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Coach',
                    category: 'Athletic Performance',
                    image: 'img/coach-banner.jpg',
                    id: 'coach'
                },
                {
                    title: 'Sports Physiotherapist',
                    category: 'Sports Medicine',
                    image: 'img/physio.jpg',
                    id: 'physio'
                },
                {
                    title: 'Sports Nutritionist',
                    category: 'Sports Science',
                    image: 'img/nutritionist.webp',
                    id: 'nutritionist'
                }
            ]
        },
        'doctor': {
            title: 'Sports Doctor',
            category: 'Sports Medicine',
            image: 'img/doctor-banner.jpeg',
            overview: 'A sports doctor is a medical professional who specializes in treating sports injuries, providing medical care, and enhancing athlete performance. They work with sports teams, athletes, and fitness enthusiasts to ensure health and well-being.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹50,000 - ₹1,00,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in pre-med, biology, or sports science. Pursue a medical degree with a focus on sports medicine or orthopedics.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Residency',
                    description: 'Complete a residency program in sports medicine, orthopedics, or family practice. Gain experience in treating sports injuries and conditions.',
                    icon: 'fas fa-hospital'
                },
                {
                    title: 'Fellowship',
                    description: 'Pursue a fellowship in sports medicine, physical therapy, or rehabilitation. Specialize in athlete care and performance enhancement.',
                    icon: 'fas fa-user-md'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend medical conferences, sports events, and workshops. Stay updated with sports injury treatments and therapies.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Injury Treatment', icon: 'fas fa-first-aid', description: 'Diagnose and treat sports injuries' },
                { name: 'Rehabilitation', icon: 'fas fa-wheelchair', description: 'Guide recovery and therapy programs' },
                { name: 'Performance Enhancement', icon: 'fas fa-running', description: 'Optimize athlete health and fitness' },
                { name: 'Emergency Care', icon: 'fas fa-ambulance', description: 'Handle medical emergencies and trauma' }
            ],
            institutes: [
                {
                    name: 'Sports Medicine Center',
                    location: 'New York, USA',
                    image: 'img/institute3.jpg',
                    website: 'https://www.sportsmedicinecenter.com',
                    description: 'Leading center for sports injury treatment'
                },
                {
                    name: 'National Sports Hospital',
                    location: 'London, UK',
                    image: 'img/institute4.jpg',
                    website: 'https://www.nationalsportshospital.com',
                    description: 'Global hospital for sports medicine'
                }
            ],
            salary: {
                entry: '₹40,000 - ₹50,000',
                mid: '₹50,000 - ₹1,00,000',
                senior: '₹1,00,000+',
                factors: ['Experience Level', 'Specialization', 'Clientele', 'Location']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Rising sports injuries',
                    'Increased focus on athlete health',
                    'Growing sports medicine field',
                    'Expansion of sports healthcare facilities'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Physiotherapist',
                    category: 'Sports Medicine',
                    image: 'img/physio.jpg',
                    id: 'physio'
                },
                {
                    title: 'Sports Nutritionist',
                    category: 'Sports Science',
                    image: 'img/nutritionist.webp',
                    id: 'nutritionist'
                },
                {
                    title: 'Sports Psychologist',
                    category: 'Sports Psychology',
                    image: 'img/psychologist.webp',
                    id: 'psychologist'
                }
            ]
        },
        'chiropractor': {
            title: 'Sports Chiropractor',
            category: 'Sports Medicine',
            image: 'img/chiropractor.jpg',
            overview: 'A sports chiropractor is a healthcare professional who focuses on diagnosing, treating, and preventing musculoskeletal injuries in athletes. They use manual therapies, adjustments, and exercises to enhance performance and recovery.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹40,000 - ₹80,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in pre-med, biology, or sports science. Pursue a chiropractic degree with a focus on sports medicine or physical therapy.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in chiropractic care, sports therapy, or rehabilitation. Stay updated with musculoskeletal treatments and therapies.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Practice',
                    description: 'Gain hands-on experience through internships, clinics, or sports teams. Develop manual therapy skills and techniques.',
                    icon: 'fas fa-user-md'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend chiropractic seminars, sports events, and workshops. Build a network in the sports chiropractic community.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Manual Therapy', icon: 'fas fa-hands', description: 'Perform adjustments and manipulations' },
                { name: 'Rehabilitation', icon: 'fas fa-dumbbell', description: 'Prescribe exercises and therapies' },
                { name: 'Injury Prevention', icon: 'fas fa-shield-alt', description: 'Prevent musculoskeletal injuries' },
                { name: 'Performance Enhancement', icon: 'fas fa-running', description: 'Optimize athlete health and fitness' }
            ],
            institutes: [
                {
                    name: 'Sports Chiropractic Institute',
                    location: 'Los Angeles, USA',
                    image: 'img/institute5.jpg',
                    website: 'https://www.sportschiropracticinstitute.com',
                    description: 'Leading provider of sports chiropractic courses'
                },
                {
                    name: 'Global Chiropractic Association',
                    location: 'Online',
                    image: 'img/institute6.jpg',
                    website: 'https://www.globalchiropracticassociation.org',
                    description: 'Global association for chiropractic education'
                }
            ],
            salary: {
                entry: '₹30,000 - ₹40,000',
                mid: '₹40,000 - ₹80,000',
                senior: '₹80,000+',
                factors: ['Experience Level', 'Specialization', 'Clientele', 'Location']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Rising focus on sports injuries',
                    'Increased demand for chiropractic care',
                    'Growing sports chiropractic field',
                    'Expansion of sports healthcare facilities'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Physiotherapist',
                    category: 'Sports Medicine',
                    image: 'img/physio.jpg',
                    id: 'physio'
                },
                {
                    title: 'Sports Nutritionist',
                    category: 'Sports Science',
                    image: 'img/nutritionist.webp',
                    id: 'nutritionist'
                },
                {
                    title: 'Sports Psychologist',
                    category: 'Sports Psychology',
                    image: 'img/psychologist.webp',
                    id: 'psychologist'
                }
            ]
        },
        'psychologist': {
            title: 'Sports Psychologist',
            category: 'Sports Psychology',
            image: 'img/psychologist-banner.png',
            overview: 'A sports psychologist is a mental health professional who specializes in enhancing athlete performance, mental well-being, and emotional resilience. They work with sports teams, coaches, and athletes to optimize mental skills and strategies.',
            quickStats: {
                growthRate: 'High',
                avgSalary: '₹40,000 - ₹80,000',
                opportunities: 'Abundant'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in psychology, sports science, or counseling. Pursue a master\'s or doctoral degree in sports psychology or clinical psychology.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Internship',
                    description: 'Gain practical experience through internships, clinics, or sports teams. Develop counseling and mental health skills.',
                    icon: 'fas fa-briefcase'
                },
                {
                    title: 'Certification',
                    description: 'Obtain certifications in sports psychology, counseling, or mental training. Stay updated with mental health practices.',
                    icon: 'fas fa-certificate'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend psychology seminars, sports events, and workshops. Build a network in the sports psychology community.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Mental Skills Training', icon: 'fas fa-brain', description: 'Develop focus and concentration' },
                { name: 'Emotional Resilience', icon: 'fas fa-heart', description: 'Manage stress and anxiety' },
                { name: 'Performance Enhancement', icon: 'fas fa-chart-line', description: 'Optimize mental strategies' },
                { name: 'Team Dynamics', icon: 'fas fa-users', description: 'Enhance communication and collaboration' }
            ],
            institutes: [
                {
                    name: 'Sports Psychology Center',
                    location: 'Los Angeles, USA',
                    image: 'img/institute7.jpg',
                    website: 'https://www.sportspsychologycenter.com',
                    description: 'Leading center for sports psychology courses'
                },
                {
                    name: 'Global Psychology Association',
                    location: 'Online',
                    image: 'img/institute8.jpg',
                    website: 'https://www.globalpsychologyassociation.org',
                    description: 'Global association for psychology education'
                }
            ],
            salary: {
                entry: '₹30,000 - ₹40,000',
                mid: '₹40,000 - ₹80,000',
                senior: '₹80,000+',
                factors: ['Experience Level', 'Specialization', 'Clientele', 'Location']
            },
            jobMarket: {
                growth: 'High',
                demand: 'Growing',
                opportunities: 'Abundant',
                trends: [
                    'Rising focus on mental health in sports',
                    'Increased demand for mental skills training',
                    'Growing sports psychology field',
                    'Expansion of sports mental health services'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Physiotherapist',
                    category: 'Sports Medicine',
                    image: 'img/physio.jpg',
                    id: 'physio'
                },
                {
                    title: 'Sports Nutritionist',
                    category: 'Sports Science',
                    image: 'img/nutritionist.webp',
                    id: 'nutritionist'
                },
                {
                    title: 'Sports Coach',
                    category: 'Athletic Performance',
                    image: 'img/coach-banner.jpg',
                    id: 'coach'
                }
            ]
        },
        'broadcaster': {
            title: 'Sports Broadcaster',
            category: 'Sports Media',
            image: 'img/broadcaster-banner.jpeg',
            overview: 'A sports broadcaster is a media professional who reports, analyzes, and commentates on sports events, matches, and tournaments. They work with television, radio, and online platforms to engage audiences and provide sports coverage.',
            quickStats: {
                growthRate: 'Medium',
                avgSalary: '₹30,000 - ₹60,000',
                opportunities: 'Moderate'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in journalism, communications, or broadcasting. Pursue courses in sports reporting and media production.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Internship',
                    description: 'Gain practical experience through internships, sports events, or media outlets. Develop reporting and presentation skills.',
                    icon: 'fas fa-briefcase'
                },
                {
                    title: 'Portfolio',
                    description: 'Build a portfolio of sports coverage, interviews, and commentary. Showcase broadcasting skills and sports knowledge.',
                    icon: 'fas fa-file-alt'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend media workshops, sports events, and broadcasting seminars. Build a network in the sports media industry.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Sports Reporting', icon: 'fas fa-microphone', description: 'Cover sports events and news' },
                { name: 'Commentary', icon: 'fas fa-headphones', description: 'Provide live match analysis' },
                { name: 'Interviewing', icon: 'fas fa-user', description: 'Conduct athlete and coach interviews' },
                { name: 'Media Production', icon: 'fas fa-video', description: 'Produce sports shows and segments' }
            ],
            institutes: [
                {
                    name: 'Sports Broadcasting School',
                    location: 'Los Angeles, USA',
                    image: 'img/institute9.jpg',
                    website: 'https://www.sportsbroadcastingschool.com',
                    description: 'Leading school for sports broadcasting courses'
                },
                {
                    name: 'Media Journalism Institute',
                    location: 'London, UK',
                    image: 'img/institute10.jpg',
                    website: 'https://www.mediajournalisminstitute.com',
                    description: 'Global institute for journalism education'
                }
            ],
            salary: {
                entry: '₹20,000 - ₹30,000',
                mid: '₹30,000 - ₹60,000',
                senior: '₹60,000+',
                factors: ['Experience Level', 'Media Platform', 'Sports Coverage', 'Location']
            },
            jobMarket: {
                growth: 'Medium',
                demand: 'Stable',
                opportunities: 'Moderate',
                trends: [
                    'Rising sports media channels',
                    'Increased digital broadcasting',
                    'Growing sports coverage',
                    'Expansion of sports media outlets'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Journalist',
                    category: 'Sports Media',
                    image: 'img/journalist.jpg',
                    id: 'journalist'
                },
                {
                    title: 'Sports Marketing Manager',
                    category: 'Sports Marketing',
                    image: 'img/marketer1.jpg',
                    id: 'marketer'
                },
                {
                    title: 'Sports Photographer',
                    category: 'Sports Media',
                    image: 'img/photographer.webp',
                    id: 'photographer'
                }
            ]
        },
        'photographer': {
            title: 'Sports Photographer',
            category: 'Sports Media',
            image: 'img/photographer-banner.jpg',
            overview: 'A sports photographer is a visual artist who captures sports events, athletes, and moments through photography. They work with media outlets, sports teams, and agencies to create compelling images and stories.',
            quickStats: {
                growthRate: 'Medium',
                avgSalary: '₹20,000 - ₹40,000',
                opportunities: 'Moderate'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in photography, visual arts, or media studies. Pursue courses in sports photography and digital imaging.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Internship',
                    description: 'Gain practical experience through internships, sports events, or media outlets. Develop photography and editing skills.',
                    icon: 'fas fa-briefcase'
                },
                {
                    title: 'Portfolio',
                    description: 'Build a portfolio of sports photography, action shots, and athlete portraits. Showcase visual storytelling and creativity.',
                    icon: 'fas fa-camera'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend photography workshops, sports events, and media seminars. Build a network in the sports photography industry.',
                    icon: 'fas fa-chart-line'
                }
            ],  
            skills: [
                { name: 'Action Shots', icon: 'fas fa-camera', description: 'Capture fast-paced sports moments' },
                { name: 'Visual Storytelling', icon: 'fas fa-images', description: 'Create compelling sports narratives' },
                { name: 'Editing', icon: 'fas fa-edit', description: 'Enhance images and photos' },
                { name: 'Composition', icon: 'fas fa-border-all', description: 'Frame shots and angles' }
            ],
            institutes: [
                {
                    name: 'Sports Photography School',
                    location: 'Los Angeles, USA',
                    image: 'img/institute11.jpg',
                    website: 'https://www.sportsphotographyschool.com',
                    description: 'Leading school for sports photography courses'
                },
                {
                    name: 'Visual Arts Institute',
                    location: 'Paris, France',
                    image: 'img/institute12.jpg',
                    website: 'https://www.visualartsinstitute.com',
                    description: 'Global institute for visual arts education'
                }
            ],
            salary: {
                entry: '₹15,000 - ₹20,000',
                mid: '₹20,000 - ₹40,000',
                senior: '₹40,000+',
                factors: ['Experience Level', 'Media Platform', 'Photo Quality', 'Location']
            },
            jobMarket: {
                growth: 'Medium',
                demand: 'Stable',
                opportunities: 'Moderate',
                trends: [
                    'Rising sports media content',
                    'Increased digital photography',
                    'Growing sports coverage',
                    'Expansion of sports media outlets'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Journalist',
                    category: 'Sports Media',
                    image: 'img/journalist.jpg',
                    id: 'journalist'
                },
                {
                    title: 'Sports Broadcaster',
                    category: 'Sports Media',
                    image: 'img/broadcaster.jpg',
                    id: 'broadcaster'
                },
                {
                    title: 'Sports Marketing Manager',
                    category: 'Sports Marketing',
                    image: 'img/marketer1.jpg',
                    id: 'marketer'
                }
            ]
        },
        'editor': {
            title: 'Sports Editor',
            category: 'Sports Media',
            image: 'img/editor-banner.jpg',
            overview: 'A sports editor is a media professional who oversees, reviews, and manages sports content for publications, websites, and broadcasts. They work with writers, reporters, and producers to ensure quality and accuracy in sports coverage.',
            quickStats: {
                growthRate: 'Medium',
                avgSalary: '₹30,000 - ₹60,000',
                opportunities: 'Moderate'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in journalism, communications, or media studies. Pursue courses in sports reporting and editing.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Internship',
                    description: 'Gain practical experience through internships, media outlets, or sports events. Develop editing and content management skills.',
                    icon: 'fas fa-briefcase'
                },
                {
                    title: 'Portfolio',
                    description: 'Build a portfolio of sports articles, news stories, and editorial pieces. Showcase editing expertise and publication management.',
                    icon: 'fas fa-file-alt'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend journalism workshops, media events, and editing seminars. Build a network in the sports media industry.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Content Editing', icon: 'fas fa-edit', description: 'Review and revise sports articles' },
                { name: 'Publication Management', icon: 'fas fa-newspaper', description: 'Oversee editorial processes' },
                { name: 'Team Collaboration', icon: 'fas fa-users', description: 'Work with writers and reporters' },
                { name: 'Media Production', icon: 'fas fa-video', description: 'Manage content creation and distribution' }
            ],
            institutes: [
                {
                    name: 'Sports Editing School',
                    location: 'Los Angeles, USA',
                    image: 'img/institute13.jpg',
                    website: 'https://www.sportseditingschool.com',
                    description: 'Leading school for sports editing courses'
                },
                {
                    name: 'Media Journalism Institute',
                    location: 'London, UK',
                    image: 'img/institute14.jpg',
                    website: 'https://www.mediajournalisminstitute.com',
                    description: 'Global institute for journalism education'
                }
            ],
            salary: {
                entry: '₹20,000 - ₹30,000',
                mid: '₹30,000 - ₹60,000',
                senior: '₹60,000+',
                factors: ['Experience Level', 'Publication Size', 'Content Quality', 'Location']
            },
            jobMarket: {
                growth: 'Medium',
                demand: 'Stable',
                opportunities: 'Moderate',
                trends: [
                    'Rising sports media publications',
                    'Increased digital editing platforms',
                    'Growing sports coverage',
                    'Expansion of sports media outlets'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Journalist',
                    category: 'Sports Media',
                    image: 'img/journalist.jpg',
                    id: 'journalist'
                },
                {
                    title: 'Sports Broadcaster',
                    category: 'Sports Media',
                    image: 'img/broadcaster.jpg',
                    id: 'broadcaster'
                },
                {
                    title: 'Sports Photographer',
                    category: 'Sports Media',
                    image: 'img/photographer.webp',
                    id: 'photographer'
                }
            ]
        },
        'producer': {
            title: 'Sports Producer',
            category: 'Sports Media',
            image: 'img/producer-banner.jpg',
            overview: 'A sports producer is a media professional who plans, coordinates, and manages sports content for television, radio, and online platforms. They work with directors, hosts, and crews to create engaging sports programs and shows.',
            quickStats: {
                growthRate: 'Medium',
                avgSalary: '₹40,000 - ₹80,000',
                opportunities: 'Moderate'
            },
            roadmap: [
                {
                    title: 'Education',
                    description: 'Complete a bachelor\'s degree in media production, broadcasting, or communications. Pursue courses in sports programming and production.',
                    icon: 'fas fa-graduation-cap'
                },
                {
                    title: 'Internship',
                    description: 'Gain practical experience through internships, media outlets, or sports events. Develop production and coordination skills.',
                    icon: 'fas fa-briefcase'
                },
                {
                    title: 'Portfolio',
                    description: 'Build a portfolio of sports shows, segments, and programs. Showcase production expertise and content management.',
                    icon: 'fas fa-file-alt'
                },
                {
                    title: 'Professional Development',
                    description: 'Attend media workshops, sports events, and production seminars. Build a network in the sports media industry.',
                    icon: 'fas fa-chart-line'
                }
            ],
            skills: [
                { name: 'Content Planning', icon: 'fas fa-calendar-alt', description: 'Organize sports program schedules' },
                { name: 'Production Coordination', icon: 'fas fa-users', description: 'Manage crew and equipment' },
                { name: 'Show Direction', icon: 'fas fa-tv', description: 'Oversee live broadcasts and recordings' },
                { name: 'Media Editing', icon: 'fas fa-video', description: 'Edit and finalize sports content' }
            ],
            institutes: [
                {
                    name: 'Sports Production School',
                    location: 'Los Angeles, USA',
                    image: 'img/institute15.jpg',
                    website: 'https://www.sportsproductionschool.com',
                    description: 'Leading school for sports production courses'
                },
                {
                    name: 'Media Broadcasting Institute',
                    location: 'London, UK',
                    image: 'img/institute16.jpg',
                    website: 'https://www.mediabroadcastinginstitute.com',
                    description: 'Global institute for broadcasting education'
                }
            ],
            salary: {
                entry: '₹30,000 - ₹40,000',
                mid: '₹40,000 - ₹80,000',
                senior: '₹80,000+',
                factors: ['Experience Level', 'Production Size', 'Content Quality', 'Location']
            },
            jobMarket: {
                growth: 'Medium',
                demand: 'Stable',
                opportunities: 'Moderate',
                trends: [
                    'Rising sports media programs',
                    'Increased digital broadcasting',
                    'Growing sports coverage',
                    'Expansion of sports media outlets'
                ]
            },
            relatedCareers: [
                {
                    title: 'Sports Broadcaster',
                    category: 'Sports Media',
                    image: 'img/broadcaster.jpg',
                    id: 'broadcaster'
                },
                {
                    title: 'Sports Journalist',
                    category: 'Sports Media',
                    image: 'img/journalist.jpg',
                    id: 'journalist'
                },
                {
                    title: 'Sports Editor',
                    category: 'Sports Media',
                    image: 'img/editor.jpg',
                    id: 'editor'
                }
            ]
        },
    };

    // Function to populate the page with career data
    function populateCareerData(career) {
        // Update hero section
        document.getElementById('careerImage').src = career.image;
        document.getElementById('careerImage').alt = career.title;
        document.getElementById('careerTitle').textContent = career.title;
        document.getElementById('careerCategory').textContent = career.category;
        document.getElementById('careerOverview').textContent = career.overview;

        // Update quick stats
        document.getElementById('growthRate').textContent = career.quickStats.growthRate;
        document.getElementById('avgSalary').textContent = career.quickStats.avgSalary;
        document.getElementById('jobOpportunities').textContent = career.quickStats.opportunities;

        // Update roadmap
        const roadmapContainer = document.getElementById('careerRoadmap');
        roadmapContainer.innerHTML = career.roadmap.map(step => `
            <div class="roadmap-step">
                <div class="roadmap-step-content">
                    <i class="${step.icon}"></i>
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                </div>
            </div>
        `).join('');

        // Update skills
        const skillsContainer = document.getElementById('requiredSkills');
        skillsContainer.innerHTML = career.skills.map(skill => `
            <div class="skill-card">
                <i class="${skill.icon}"></i>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            </div>
        `).join('');

        // Update institutes
        const institutesContainer = document.getElementById('institutesList');
        institutesContainer.innerHTML = career.institutes.map(institute => `
            <div class="institute-card">
                <div class="institute-image">
                    <img src="${institute.image}" alt="${institute.name}">
                </div>
                <div class="institute-info">
                    <h3>${institute.name}</h3>
                    <p class="location"><i class="fas fa-map-marker-alt"></i> ${institute.location}</p>
                    <p>${institute.description}</p>
                    <a href="${institute.website}" target="_blank" class="btn-link">Visit Website <i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        `).join('');

        // Update salary information
        const salaryContainer = document.getElementById('salaryInfo');
        salaryContainer.innerHTML = `
            <div class="salary-range">
                <div class="salary-item">
                    <h3>Entry Level</h3>
                    <p>${career.salary.entry}</p>
                </div>
                <div class="salary-item">
                    <h3>Mid Level</h3>
                    <p>${career.salary.mid}</p>
                </div>
                <div class="salary-item">
                    <h3>Senior Level</h3>
                    <p>${career.salary.senior}</p>
                </div>
            </div>
            <div class="salary-factors">
                <h3>Salary Determining Factors</h3>
                <ul>
                    ${career.salary.factors.map(factor => `<li><i class="fas fa-check"></i> ${factor}</li>`).join('')}
                </ul>
            </div>
        `;

        // Update job market information
        const marketContainer = document.getElementById('jobMarket');
        marketContainer.innerHTML = `
            <div class="market-trends">
                <h3>Current Trends</h3>
                <ul>
                    ${career.jobMarket.trends.map(trend => `<li><i class="fas fa-trending-up"></i> ${trend}</li>`).join('')}
                </ul>
            </div>
        `;

        // Update related careers
        const relatedContainer = document.getElementById('relatedCareers');
        relatedContainer.innerHTML = career.relatedCareers.map(related => `
            <div class="career-card" onclick="window.location.href='career-detail.html?id=${related.id}'">
                <div class="career-image">
                    <img src="${related.image}" alt="${related.title}">
                </div>
                <div class="career-info">
                    <h3>${related.title}</h3>
                    <p class="category-tag">${related.category}</p>
                </div>
            </div>
        `).join('');
    }

    // Load career data if ID exists
    if (careerId && careerData[careerId]) {
        populateCareerData(careerData[careerId]);
        document.title = `SPORTify - ${careerData[careerId].title}`;
    } else {
        // Handle case when career ID is not found
        document.getElementById('careerTitle').textContent = 'Career Not Found';
        document.getElementById('careerCategory').textContent = 'Please select a valid career option';
    }
}); 