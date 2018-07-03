var allTalks = [
    {
        "name": "Luke Barton",
        "team": "Hydra",
        "type": "lightningTalk",
        "title": "5 disciplines that could transform your team (and your life)",
        "description": "An inspirational, whirlwind tour of a practical framework that you and your team can begin mastering today. You’ll see ideas from several books brought together in a rapid-fire presentation that will give you plenty of food for thought!",
        "startTime": "15:10",
        "endTime": "15:40"
    },
    {
        "name": "Paul Grayson",
        "team": "Leadership",
        "type": "lightningTalk",
        "title": "Principles",
        "description": "I'll talk about the principles I try to apply to my work: to reduce toil, make better decisions, be more effective and lead us to better outcomes.This is no magic bullet. These principles are mine and YMMV :-)",
        "startTime": "15:10",
        "endTime": "15:40"
    },
    {
        "name": "Artemij Fedosejev",
        "team": "Tango",
        "type": "lightningTalk",
        "title": "Going Beyond Fun-Driven Development",
        "description": "You’ve got into software development because it’s fun. Now it’s time to get serious about it. This talk will inspire you and show you how to build the mindset of an educated and disciplined software developer - the one that your company aspires to have.",
        "startTime": "16:00",
        "endTime": "16:30"
    },
    {
        "name": "Fabio Gariglio",
        "team": "DietCode",
        "type": "lightningTalk",
        "title": "Microservice generator - From scratch to deploy in a blink",
        "description": "The birth of a new service is such an exciting event! But there is no much fun in bootstrapping a service. Wouldn't be great if that tedious routine was a matter of seconds? Come learn how that's just a thing of the past!",
        "startTime": "16:00",
        "endTime": "16:30"
    },
    {
        "name": "John Whiles",
        "team": "Vulcan",
        "type": "lightningTalk",
        "title": "How to reduce toil by ignoring your lying brain",
        "description": "We all suffer from some cognitive biases, and left unchecked these can lead to us toiling away on the wrong solutions to the wrong problems. In this talk we’ll get to know some of the more common brain problems  - and some techniques that can help you get past them.",
        "startTime": "16:30",
        "endTime": "17:00"
    },
    {
        "name": "Kannappan Somasundaram",
        "team": "Routemaster",
        "type": "lightningTalk",
        "title": "Can you spot the difference?",
        "description": "We built a comparison framework to capture the differences between old and new journey planners. Come find out how it helped us to migrate.",
        "startTime": "16:00",
        "endTime": "16:30"
    },
    {
        "name": "Misha Doronin",
        "team": "25kv",
        "type": "lightningTalk",
        "title": "How we deal with production fails in EU",
        "description": "Production is not perfect. Networks lose packets, developers break carrier APIs, bugs go live. 💩 happens. Come learn how the EU platform folks deal with the eventualities that plague a high traffic system.",
        "startTime": "16:00",
        "endTime": "16:30"
    },
    {
        "name": "Nisha Chaganlal",
        "team": "DietCode",
        "type": "lightningTalk",
        "title": "Information Handshake",
        "description": "Come learn how important it is to acknowledge the information we receive daily as a way to remove toil. Live in a better world where fewer misunderstandings and bugs exist and avoid doing the same work over and over again.",
        "startTime": "15:10",
        "endTime": "15:40"
    },
    {
        "name": "Wojciech Kotlarski",
        "team": "Fusion",
        "type": "lightningTalk",
        "title": "Reducing our Toil with Environment Dashboard",
        "description": "In Fusion we own a lot of services, including legacy ones, which makes keeping healthy test environments difficult. I will talk about how the creation of Environment Dashboard increased the visibility of issues in the environments and sped up the detection of problematic services.",
        "startTime": "16:30",
        "endTime": "17:00"
    },
    {
        "name": "Janos Ver",
        "team": "Tango",
        "type": "lightningTalk",
        "title": "How we made requirement analysis transparent",
        "description": "One of the pillars of Scrum is transparency. We wanted to extend that to requirement analysis too. In this talk I will explain how we did it.",
        "startTime": "16:30",
        "endTime": "17:00"
    },
    {
        "name": "Adam Harris",
        "team": "SEO",
        "type": "longTalk",
        "title": "Being Nice to Robots: Optimising trainline.com for Googlebot",
        "description": "We have over 9.5m pages on the thetrainline.com domain just for UK rail, Google isn’t crawling much of our site and, to them, less is more. By cutting dead pages using data and analytics we can improve performance and reduce the number of pages significantly in our quest to be #1",
        "startTime": "12:50",
        "endTime": "13:20",
        "room": "gallery"
    },
    {
        "name": "Alessio Franceschelli",
        "team": "Routemaster",
        "type": "longTalk",
        "title": "Async Code in .NET Done Right",
        "description": "Writing async code is not just about using the async/await keywords. We’ll go through the common issues found in our code and how to properly write efficient and correct async code. The talk will also cover the great new features of .NET Core to improve performance which you can now leverage on every project",
        "startTime": "16:30",
        "endTime": "17:00",
        "room": "gallery"
    },
    {
        "name": "Cedric Royer-Bertrand",
        "team": "Fusion",
        "type": "longTalk",
        "title": "How AI makes decisions",
        "description": "Discover the different kinds of Artificial Intelligence and how they make their decisions",
        "startTime": "14:40",
        "endTime": "15:10",
        "room": "hall-2"
    },
    {
        "name": "Daniel Phillips",
        "team": "Bonsai",
        "type": "longTalk",
        "title": "Thinking Test First",
        "description": "We'd like to share with you our experience transitioning into a testing first mentality.",
        "startTime": "17:00",
        "endTime": "17:30",
        "room": "st-pancras"
    },
    {
        "name": "Darrell Scott",
        "team": "Magnum",
        "type": "longTalk",
        "title": "A Tale of Two Domains",
        "description": "Why is there a trainline.com and a trainline.eu?  What's different about Brussels-Midi and Bruges? And what does \"SGP\" really mean anyway?  This session explains the mechanics, magic and sheer stubbornness of will employed by the Connections/Magnum team to help make SGP a reality.",
        "startTime": "16:00",
        "endTime": "16:30",
        "room": "gallery"
    },
    {
        "name": "Dave Storey & Wojciech Kotlarski",
        "team": "Routemaster",
        "type": "longTalk",
        "title": "How to test in isolation",
        "description": "In Trainline we constantly seem to be testing each others systems. In this talk we'll try to educate people on identifying domain responsibility boundries, how to mock and when to mock.",
        "startTime": "11:50",
        "endTime": "12:20",
        "room": "st-pancras"
    },
    {
        "name": "Frederik Brysse",
        "team": "Architecture",
        "type": "longTalk",
        "title": "A deep dive into how hashing can go wrong",
        "description": "How not to make a hash out of hashing.",
        "startTime": "12:20",
        "endTime": "12:50",
        "room": "st-pancras"
    },
    {
        "name": "Ian Randolph",
        "team": "Tango",
        "type": "longTalk",
        "title": "Optimal team design",
        "description": "Talk will focus on actionable techniques for improving team design when it comes to structure, accountability, communication, ceremonies, and culture and share learnings from 3 years of Tango structuring and re-structuring to meet the next challenge.",
        "startTime": "12:20",
        "endTime": "12:50",
        "room": "hall-2"
    },
    {
        "name": "Imtiyaz Mohammad",
        "team": "Platform Services",
        "type": "longTalk",
        "title": "Why do we still need Databases?",
        "description": "With the era of Cloud, Databases have evolved into DataStores where you can leverage the Automation capabilities to serve any type of Load. This talk will go through the various Database technologies we use at trainline and why there's a big shopping list of datastores to choose from.",
        "startTime": "14:10",
        "endTime": "14:40",
        "room": "hall-1"
    },
    {
        "name": "Jamie Buchanan",
        "team": "Platform Services",
        "type": "longTalk",
        "title": "How North Korea helped Mean-Time-To-Recovery",
        "description": "When production breaks the time to recover it is directly related to the amount of toil associated with understanding the state of our platform. To reduce this toil we have sought truth on a journey via Russia and North Korea. Along the route we have wrestled Pandas, used a lot of Greek sticky tape, questioned our own sanity and bred a bigger faster brood of deer.",
        "startTime": "11:50",
        "endTime": "12:20",
        "room": "gallery"
    },
    {
        "name": "Jerry Wozniak",
        "team": "",
        "type": "longTalk",
        "title": "How dependable are your dependencies?",
        "description": "Open source dominates application development.  It saves hours of programming, giving you more time to innovate. But can you trust code that you did not entirely create yourself?  The biggest breaches are increasingly caused by vulnerabilities in rarely noticed libraries our applications depend upon. Open source components are free but neglecting to comply with their license requirements may result in legal, business, and technical risks. In this talk, you will learn how to analyse your third-party dependencies, inventory your open source licenses and weed out any components that expose your application to known vulnerabilities.",
        "startTime": "12:20",
        "endTime": "12:50",
        "room": "hall-1"
    },
    {
        "name": "Luke Belfield",
        "team": "Vulcan",
        "type": "longTalk",
        "title": "Augmented Reality using React-Web-AR",
        "description": "Imagine this. It is the year 2019. You are a traveller on a train that is running behind schedule. You want information, now. You fire up your Trainline app, enable your camera and use Augmented Reality on your ticket to list all your journey details. Result… Customer === Wowed. In this talk, we’ll explore React-Web-AR and prove just how easy Augmented Reality on the web can be.",
        "startTime": "12:50",
        "endTime": "13:20",
        "room": "hall-1"
    },
    {
        "name": "Maxim Eliseev + Ajay Alphonso",
        "team": "Fusion",
        "type": "longTalk",
        "title": "Oi! Where's my Refund?",
        "description": "Want to know what's worse than having to refund a customer? Having to refund a customer and the refunds system breaking! Come to learn about how we removed a ton of manual overhead required to debug and resolve issues with the refund flow.",
        "startTime": "12:50",
        "endTime": "13:20",
        "room": "st-pancras"
    },
    {
        "name": "Natalie Akam",
        "team": "Hydra",
        "type": "longTalk",
        "title": "The Automation Generation",
        "description": "We created a tool to generate the release notes for each release automatically and save ourselves a lot of manual effort. Along the way we realised that the problem we were solving shouldn't have been a problem in the first place; it was an indicator of a broken agile process.",
        "startTime": "16:30",
        "endTime": "17:00",
        "room": "st-pancras"
    },
    {
        "name": "Nisha Chaganlal",
        "team": "DietCode",
        "type": "longTalk",
        "title": "Remote Teams - 1 step ahead",
        "description": "Challenges and how to overcome them by removing toil on comms and execution when working in remote teams",
        "startTime": "16:30",
        "endTime": "17:00",
        "room": "hall-2"
    },
    {
        "name": "Orazio Cotroneo",
        "team": "Bonsai",
        "type": "longTalk",
        "title": "Breaking Down the Barriers",
        "description": "How can we use technology to reduce the gap between BAs/POs, devs and QAs?  How can we leverage our tools to eliminate waste and reduce toil? This talk will explore some development approaches and testing strategies to break down barriers that slow us down.",
        "startTime": "17:00",
        "endTime": "17:30",
        "room": "gallery"
    },
    {
        "name": "Paul Kiddie",
        "team": "Vulcan",
        "type": "longTalk",
        "title": "Chaos Monkey Business",
        "description": "An engineering tenet of Trainline is that engineering teams own the code that they write, including being on-call to respond and diagnose production incidents. Vulcan own applications across different technical stacks where strange things can happen when applications are being run at scale and to infrastructure in the cloud. I'll talk about our on-call preparedness sessions where we use principles of Chaos Monkey and the tools we have at our disposal at Trainline to ensure engineers are confident and empowered to  respond efficiently when they are on on-call.",
        "startTime": "14:40",
        "endTime": "15:10",
        "room": "hall-1"
    },
    {
        "name": "Paul(r) Bonaud",
        "team": "Linux Servers",
        "type": "longTalk",
        "title": "A story about deployments",
        "description": "This brief history of deployment methods will make you discover an evolution of technologies for shipping code to production. You will also find out about an alternative future where we tried to deploy Trainline Europe in Kubernetes, what we learned and what goodies it could bring us.",
        "startTime": "12:20",
        "endTime": "12:50",
        "room": "gallery"
    },
    {
        "name": "Piotr Ratajczak",
        "team": "Architecture",
        "type": "longTalk",
        "title": "Introduction to Rail Ticketing",
        "description": "Why do we pretend to be train station? What do we have in common with The Beatles? Intro to what are Print Windows, NLCs, LENNON, SDCI+, LSM, Type06, eTVD and more. Brief overview of fulfilment methods in the UK.",
        "startTime": "17:00",
        "endTime": "17:30",
        "room": "hall-2"
    },
    {
        "name": "Rob Cooper",
        "team": "Principals",
        "type": "longTalk",
        "title": "Culture vNext",
        "description": "What's all this 'Culture of Craft' stuff? What's going on with Communities?\nAll shall be revealed!",
        "startTime": "10:30",
        "endTime": "11:00",
        "room": "hall-1"
    },
    {
        "name": "",
        "team": "Principals",
        "type": "longTalk",
        "title": "",
        "description": "",
        "startTime": "10:30",
        "endTime": "11:00",
        "room": "hall-2"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "",
        "description": "",
        "startTime": "10:30",
        "endTime": "11:00",
        "room": "st-pancras"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "",
        "description": "",
        "startTime": "10:30",
        "endTime": "11:00",
        "room": "gallery"
    },
    {
        "name": "Rob Cooper",
        "team": "Principals",
        "type": "longTalk",
        "title": "In Pain? Keep Sane and Carry On!",
        "description": "Feeling too busy? Overworked? Not enough hours in the day? Not all toil is code/project based. It starts with you. Tools, techniques and routines to help you get the most from you and your day.",
        "startTime": "16:00",
        "endTime": "16:30",
        "room": "hall-2"
    },
    {
        "name": "Robert Munro",
        "team": "Bonsai",
        "type": "longTalk",
        "title": "Usages tensorflow on the client",
        "description": "Tensorflow is the ML toolkit by Google and it's progressing every year. This presentation explores training a novel image detection application and deploying or updating the model on mobile and web clients using the various TF client APIs - tensorflow lite and tensorflow.js",
        "startTime": "15:10",
        "endTime": "15:40",
        "room": "hall-2"
    },
    {
        "name": "Stuart Macleod",
        "team": "Infrastructure",
        "type": "longTalk",
        "title": "Getting the most out of Akamai, or 'Can't Someone Else Do It?'",
        "description": "A basic overview of Akamai, Ion & CDNs in general, and how to set up your apps to get the most benefit as we expand globally",
        "startTime": "16:00",
        "endTime": "16:30",
        "room": "st-pancras"
    },
    {
        "name": "Sam Galson - YLD",
        "team": "YLD",
        "type": "longTalk",
        "title": "The dream of the automatic book: remembering MetaFont",
        "description": "Why is Donald Knuth's multivolume masterpiece, the Art of Computer Programming, still unfinished? The answer is that, dissatisfied with his books' physical form, Knuth paused work in order to automate some of the more toilsome aspects of book production: typesetting and font creation. So were born LaTeX and MetaFont. Let's talk about automation philosophy and technology.",
        "startTime": "11:50",
        "endTime": "12:20",
        "room": "hall-1"
    },
    {
        "name": "Tomasz Rykała",
        "team": "Bonsai",
        "type": "longTalk",
        "title": "K.O. Toil with Kotlin",
        "description": "Android Development has been condemned to legacy version of Java since its inception. Since Google's official support announcement at Google I/O 2017, the Bonsai Android team has been planning to replace Java with the modern and concise Kotlin alternative. Come learn how we introduced a whole new programming language into our codebase, what steps we took and some of the ups and downs we had along the way.",
        "startTime": "14:10",
        "endTime": "14:40",
        "room": "hall-2"
    },
    {
        "name": "Wojciech Kotlarski",
        "team": "Fusion",
        "type": "longTalk",
        "title": "Identifying and addressing toil in teams",
        "description": "Starting work in a new team allows to identify pains that existing members may not see any more. Trainline's Principal role involves working with different teams and it gives that unique opportunity to have that fresh view. I will go through some examples of toil I encountered over time, putting some light on how they were identified and addressed.",
        "startTime": "12:50",
        "endTime": "13:20",
        "room": "hall-2"
    },
    {
        "name": "Glenn Block",
        "team": "Auth0",
        "type": "longTalk",
        "title": "Serverless Extensibility: Rapid feature delivery at a fraction of the cost",
        "description": "As a SaaS, you need to deliver fast in order to stay competitive, but at what cost? Fast delivery can often go hand and hand with large up-front investments and ongoing operational cost and overhead. Serverless Extensibility is changing that. By leveraging a Serverless platform within a SaaS, new doors are opened. Feature delivery can dramatically accelerate, and customers can even be enabled to directly build the features they want, without the cost. In this talk will discuss this exciting new advancement and see how it is enabling more and more organizations to get an edge.",
        "startTime": "11:00",
        "endTime": "11:30",
        "room": "hall-1"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "",
        "description": "",
        "startTime": "11:00",
        "endTime": "11:30",
        "room": "hall-2"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "",
        "description": "",
        "startTime": "11:00",
        "endTime": "11:30",
        "room": "st-pancras"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "",
        "description": "",
        "startTime": "11:00",
        "endTime": "11:30",
        "room": "gallery"
    },
    {
        "name": "Juan Vicaria",
        "team": "Vulcan",
        "type": "workshop",
        "title": "Your first Trainline graphQL API: Building train live departures",
        "description": "There are many theoretical talks about GraphQL out there. They show principles and ideas and while they are really good to Gain some understanding, I believe the best way to learn is to practice. In this workshop you’ll get your hands dirty, we will create a fully functional GraphQL server that delivers live train times departures.We will work our way from creating a dummy server through leveraging all the different resolvers and types. Along the way we will of course explain the principles behind GraphQL and why this technology is awesome. This workshop is for anyone interested in knowing more about GraphQL and want to get started with this technology. You don’t need any previous experience with GraphQL, some javascript exposure assumed, all you need is your laptop and NodeJS installed.",
        "startTime": "14:10",
        "endTime": "16:00",
        "room": "st-pancras"
    },
    {
        "name": "Jérome Loï, Sara Vieira, Sam Galson, Quentin Leonetti of YLD",
        "team": "YLD",
        "type": "workshop",
        "title": "YLD Catbots Workshop",
        "description": "<p>Join hands-on open-source workshop by YLD to build your own nodebot – catbot!</p><p>During this workshop you will assemble custom-made parts of wood, arduino hardware and a laser that powered by Node.JS becomes the ultimate cat-laserpointer tool! Watch <a href=\"https://youtu.be/6tOPI7YGPjM\" target=\"_blank\">previous catbots workshop at LX.JS conference</a>.</p><p>Here are the steps to create the ultimate connected catbot:<ol class=\"with-bullets\">        <li>Build the <a href=\"http://yld.lesnodebots.eu/catbot/v4\" target=\"_blank\">frame</a>.</li>        <li>Connect the <a href=\"http://yld.lesnodebots.eu/catbot/connect/\" target=\"_blank\">hardware</a>.</li>        <li><a href=\"http://yld.lesnodebots.eu/catbot/test/\" target=\"_blank\">Test it</a>.</li>        <li>You are ready for the <a href=\"http://yld.lesnodebots.eu/catbot/lasercat\" target=\"_blank\">lasercat workshop</a>.</li>        <li><a href=\"http://yld.lesnodebots.eu/catbot/troubleshooting\" target=\"_blank\">Troubleshoot</a> if you get any problem on the way!</li>    </ol></p><h5>About YLD</h5><p>YLD is a proud partner of the Trainline Tech Summit. We are excited to be here today and look forward to seeing you at our hands-on open-source catbot workshop.</p><p>YLD is a strategy, design and engineering consultancy enabling the world’s leading enterprises to drive digital transformation and create innovation at the core, together. Through a ground-up style of consultancy, we partner with our clients and help them create their technology future.</p>",
        "startTime": "14:10",
        "endTime": "16:00",
        "room": "gallery"
    },
    {
        "name": "David Whitney",
        "team": "",
        "type": "longTalk",
        "title": "Sight Reading Code",
        "description": "Find out what your code says about you, and how you can treat a codebase like a crime scene to understand how software is built, in any language, in any application.",
        "startTime": "11:50",
        "endTime": "12:20",
        "room": "hall-2"
    },
    {
        "name": "Mark Holt - CTO",
        "team": "",
        "type": "longTalk",
        "title": "Custodi Detractione: My beliefs and values",
        "description": "After a lot of years, some successful projects and some… erm… less successful projects, join me for a quick canter through my *personal* beliefs about organisations, behaviours, people, process, technology and business",
        "startTime": "17:00",
        "endTime": "17:30",
        "room": "hall-1"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "☕️ Coffee Break 🥐",
        "description": "There will be coffee and snacks in the lobby and mezzanine.",
        "startTime": "10:00",
        "endTime": "10:30",
        "room": "hall-1"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "☕️ Coffee Break 🥐",
        "description": "There will be coffee and snacks in the lobby and mezzanine.",
        "startTime": "10:00",
        "endTime": "10:30",
        "room": "hall-2"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "☕️ Coffee Break 🥐",
        "description": "There will be coffee and snacks in the lobby and mezzanine.",
        "startTime": "10:00",
        "endTime": "10:30",
        "room": "st-pancras"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "☕️ Coffee Break 🥐",
        "description": "There will be coffee and snacks in the lobby and mezzanine.",
        "startTime": "10:00",
        "endTime": "10:30",
        "room": "gallery"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "☕️ Coffee Break 🥐",
        "description": "There will be coffee and snacks in the lobby and mezzanine.",
        "startTime": "11:30",
        "endTime": "11:50",
        "room": "hall-1"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "☕️ Coffee Break 🥐",
        "description": "There will be coffee and snacks in the lobby and mezzanine.",
        "startTime": "11:30",
        "endTime": "11:50",
        "room": "hall-2"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "☕️ Coffee Break 🥐",
        "description": "There will be coffee and snacks in the lobby and mezzanine.",
        "startTime": "11:30",
        "endTime": "11:50",
        "room": "st-pancras"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "☕️ Coffee Break 🥐",
        "description": "There will be coffee and snacks in the lobby and mezzanine.",
        "startTime": "11:30",
        "endTime": "11:50",
        "room": "gallery"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "🥗 Lunch 🥗",
        "description": "Lunch will be served in the lobby and mezzanine. Enjoy the nibbles, re-energise, and get some fresh air!",
        "startTime": "13:20",
        "endTime": "14:10",
        "room": "hall-1"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "🥗 Lunch 🥗",
        "description": "Lunch will be served in the lobby and mezzanine. Enjoy the nibbles, re-energise, and get some fresh air!",
        "startTime": "13:20",
        "endTime": "14:10",
        "room": "hall-2"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "🥗 Lunch 🥗",
        "description": "Lunch will be served in the lobby and mezzanine. Enjoy the nibbles, re-energise, and get some fresh air!",
        "startTime": "13:20",
        "endTime": "14:10",
        "room": "st-pancras"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "🥗 Lunch 🥗",
        "description": "Lunch will be served in the lobby and mezzanine. Enjoy the nibbles, re-energise, and get some fresh air!",
        "startTime": "13:20",
        "endTime": "14:10",
        "room": "gallery"
    },
    {
        "name": "",
        "team": "",
        "type": "lightningTalks",
        "title": "⚡ Lightning Talks!",
        "description": "",
        "startTime": "15:10",
        "endTime": "15:40",
        "room": "hall-1"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "☕️ Coffee Break 🥐",
        "description": "There will be coffee and snacks in the lobby and mezzanine.",
        "startTime": "15:40",
        "endTime": "16:00",
        "room": "hall-1"
    },
    {
        "name": "",
        "team": "",
        "type": "longTalk",
        "title": "☕️ Coffee Break 🥐",
        "description": "There will be coffee and snacks in the lobby and mezzanine.",
        "startTime": "15:40",
        "endTime": "16:00",
        "room": "hall-2"
    },
    {
        "name": "",
        "team": "",
        "type": "lightningTalks",
        "title": "⚡ Lightning Talks!",
        "description": "",
        "startTime": "16:00",
        "endTime": "16:30",
        "room": "hall-1"
    },
    {
        "name": "",
        "team": "",
        "type": "lightningTalks",
        "title": "⚡ Lightning Talks!",
        "description": "",
        "startTime": "16:30",
        "endTime": "17:00",
        "room": "hall-1"
    },
    {
        "name": "Battlebridge Room",
        "team": "",
        "type": "longTalk",
        "title": "Closing Remarks and Drinks 🍻",
        "description": "Head to the Battlebridge Room upstairs for drinks and after party instructions!",
        "startTime": "17:30",
        "endTime": "18:30",
        "room": "hall-1"
    },
    {
        "name": "Battlebridge Room",
        "team": "",
        "type": "longTalk",
        "title": "Closing Remarks and Drinks 🍻",
        "description": "Head to the Battlebridge Room upstairs for drinks and after party instructions!",
        "startTime": "17:30",
        "endTime": "18:30",
        "room": "hall-2"
    },
    {
        "name": "Battlebridge Room",
        "team": "",
        "type": "longTalk",
        "title": "Closing Remarks and Drinks 🍻",
        "description": "Head to the Battlebridge Room upstairs for drinks and after party instructions!",
        "startTime": "17:30",
        "endTime": "18:30",
        "room": "st-pancras"
    },
    {
        "name": "Battlebridge Room",
        "team": "",
        "type": "longTalk",
        "title": "Closing Remarks and Drinks 🍻",
        "description": "Head to the Battlebridge Room upstairs for drinks and after party instructions!",
        "startTime": "17:30",
        "endTime": "18:30",
        "room": "gallery"
    }
];

var rooms = {
    'hall-1': { name: 'Hall 1', talks: [] },
    'hall-2': { name: 'Hall 2', talks: [] },
    'st-pancras': { name: 'St. Pancras', talks: [] },
    'gallery': { name: 'Gallery', talks: [] }
};

function getEventType(talk) {
    // Event styles at time of writing: 1 (dark blue), 2 (teal), 3 (grey), 4 (yellow), 5 (blue), 
    // event-1 - coffee breaks
    // event-4 - workshops and lightning talks
    // Regular talks alternate between 2-3 based on row (starting at 2 at 10:30)

    // Hack - As we've things that break up the schedule (e.g. lunch, coffee) - maths gets weird.
    var types = {
        'coffee': 1,
        'lunch': 1,
        'lightningTalks': 4,
        'workshop': 4,
        'longTalk': {
            '10:30': 2,
            '11:00': 3,
            '11:50': 2,
            '12:20': 3,
            '12:50': 2,
            '14:10': 2,
            '14:40': 3,
            '15:10': 2,
            '16:00': 2,
            '16:30': 3,
            '17:00': 2,
        }
    }

    if (talk.type === "longTalk") return types['longTalk'][talk.startTime] || 1;
    return types[talk.type];
}

jQuery(document).ready(function ($) {

    // Render the Rooms via the 'rooms' Object
    var container = $("#events");
    var templates = $("#templates");

    for (var room in rooms) {
        var clone = templates.children(".room").clone();
        clone.addClass(room);
        clone.find(".name").text(rooms[room].name);
        clone.appendTo(container);
    }

    var lightningTalks = [];

    for (var i = 0; i < allTalks.length; i++) {
        var talk = allTalks[i];

        if (talk.type === "lightningTalk") {
            lightningTalks.push(talk);
            continue;
        }

        rooms[talk.room].talks.push(talk);
    }

    // Add the talks from each room to the DOM
    for (var room in rooms) {
        var talks = rooms[room].talks.sort(function (a, b) {
            return a.startTime.replace(':', '') - b.startTime.replace(':', '');
        });

        for (var i = 0; i < talks.length; i++) {
            var talk = talks[i];
            var eventEl = templates.find(".talk .single-event").first().clone();
            eventEl
                .attr('data-start', talk.startTime)
                .attr('data-end', talk.endTime)
                .attr('data-type', talk.type)
                .attr('data-event', 'event-' + getEventType(talk));
            eventEl.data('description', talk.description);
            eventEl.find(".event-name").text(talk.title);
            eventEl.find(".event-person").text(talk.name);

            if (typeof (talk.room) === "undefined") talk.room = "hall-1";
            var selector = ".room." + talk.room + " .events-group ul";
            eventEl.appendTo(container.find(selector).first());
        }
    }

    // Now we've added all the slots, we can process the lightning talks.
    function getLightningSlot(talk) {
        return container.find('.single-event[data-type="lightningTalks"][data-start="' + talk.startTime + '"][data-end="' + talk.endTime + '"]');
    }

    var lightningTalk = templates.find(".lightningTalk");
    function getLightningTalkElement(talk) {
        var ltDescEl = lightningTalk.clone();
        ltDescEl.find('.name').text(talk.title);
        ltDescEl.find('.person').text(talk.name);
        ltDescEl.find('.description').text(talk.description);
        return ltDescEl;
    }

    for (var i = 0; i < lightningTalks.length; i++) {
        var slot = getLightningSlot(lightningTalks[i]);
        var desc = slot.data('description');
        var el = getLightningTalkElement(lightningTalks[i]);
        slot.data('description', desc + el.html());
    }

    var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    var transitionsSupported = ($('.csstransitions').length > 0);
    //if browser does not support transitions - use a different event to trigger them
    if (!transitionsSupported) transitionEnd = 'noTransition';

    //should add a loding while the events are organized 

    function SchedulePlan(element) {
        this.element = element;

        this.timeline = this.element.find('.timeline');
        this.timelineItems = this.timeline.find('li');
        this.timelineItemsNumber = this.timelineItems.length;
        this.timelineStart = getScheduleTimestamp(this.timelineItems.eq(0).text());
        //need to store delta (in our case half hour) timestamp
        this.timelineUnitDuration = getScheduleTimestamp(this.timelineItems.eq(1).text()) - getScheduleTimestamp(this.timelineItems.eq(0).text());

        this.eventsWrapper = this.element.find('.events');
        this.eventsGroup = this.eventsWrapper.find('.events-group');
        this.singleEvents = this.eventsGroup.find('.single-event');
        this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();

        this.modal = this.element.find('.event-modal');
        this.modalHeader = this.modal.find('.header');
        this.modalHeaderBg = this.modal.find('.header-bg');
        this.modalBody = this.modal.find('.body');
        this.modalBodyBg = this.modal.find('.body-bg');
        this.modalMaxWidth = 800;
        this.modalMaxHeight = 480;

        this.animating = false;
        this.initSchedule();
    }

    SchedulePlan.prototype.initSchedule = function () {
        this.scheduleReset();
        this.initEvents();
    };

    SchedulePlan.prototype.scheduleReset = function () {
        var mq = this.mq();
        if (mq == 'desktop' && !this.element.hasClass('js-full')) {
            //in this case you are on a desktop version (first load or resize from mobile)
            this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();
            this.element.addClass('js-full');
            this.placeEvents();
            this.element.hasClass('modal-is-open') && this.checkEventModal();
        } else if (mq == 'mobile' && this.element.hasClass('js-full')) {
            //in this case you are on a mobile version (first load or resize from desktop)
            this.element.removeClass('js-full loading');
            this.eventsGroup.children('ul').add(this.singleEvents).removeAttr('style');
            this.eventsWrapper.children('.grid-line').remove();
            this.element.hasClass('modal-is-open') && this.checkEventModal();
        } else if (mq == 'desktop' && this.element.hasClass('modal-is-open')) {
            //on a mobile version with modal open - need to resize/move modal window
            this.checkEventModal('desktop');
            this.element.removeClass('loading');
        } else {
            this.element.removeClass('loading');
        }
    };

    SchedulePlan.prototype.initEvents = function () {
        var self = this;

        this.singleEvents.each(function () {
            //create the .event-date element for each event
            var durationLabel = '<span class="event-date">' + $(this).data('start') + ' - ' + $(this).data('end') + '</span>';
            $(this).children('a').prepend($(durationLabel));

            //detect click on the event and open the modal
            $(this).on('click', 'a', function (event) {
                event.preventDefault();
                if (!self.animating) self.openModal($(this));
            });
        });

        //close modal window
        this.modal.on('click', '.close', function (event) {
            event.preventDefault();
            if (!self.animating) self.closeModal(self.eventsGroup.find('.selected-event'));
        });
        this.element.on('click', '.cover-layer', function (event) {
            if (!self.animating && self.element.hasClass('modal-is-open')) self.closeModal(self.eventsGroup.find('.selected-event'));
        });
    };

    SchedulePlan.prototype.placeEvents = function () {
        var self = this;
        this.singleEvents.each(function () {
            //place each event in the grid -> need to set top position and height
            var start = getScheduleTimestamp($(this).attr('data-start')),
                duration = getScheduleTimestamp($(this).attr('data-end')) - start;

            var eventTop = self.eventSlotHeight * (start - self.timelineStart) / self.timelineUnitDuration,
                eventHeight = self.eventSlotHeight * duration / self.timelineUnitDuration;

            $(this).css({
                top: (eventTop - 1) + 'px',
                height: (eventHeight + 1) + 'px'
            });
        });

        this.element.removeClass('loading');
    };

    SchedulePlan.prototype.openModal = function (event) {
        var self = this;
        var mq = self.mq();
        this.animating = true;
        self.element.addClass('content-loaded');
        $('#navButton').addClass('hide');

        //update event name and time
        this.modalHeader.find('.event-name').text(event.find('.event-name').text());
        this.modalHeader.find('.event-person').text(event.find('.event-person').text());
        this.modalHeader.find('.event-date').text(event.find('.event-date').text());
        this.modal.attr('data-event', event.parent().attr('data-event'));
        this.modalBody.find('.event-info > div').html(event.parent().data('description') || '');

        this.element.addClass('modal-is-open');

        setTimeout(function () {
            //fixes a flash when an event is selected - desktop version only
            event.parent('li').addClass('selected-event');
        }, 10);

        if (mq == 'mobile') {
            self.modal.one(transitionEnd, function () {
                self.modal.off(transitionEnd);
                self.animating = false;
            });
        } else {
            var eventTop = event.offset().top - $(window).scrollTop(),
                eventLeft = event.offset().left,
                eventHeight = event.innerHeight(),
                eventWidth = event.innerWidth();

            var windowWidth = $(window).width(),
                windowHeight = $(window).height();

            var modalWidth = (windowWidth * .8 > self.modalMaxWidth) ? self.modalMaxWidth : windowWidth * .8,
                modalHeight = (windowHeight * .8 > self.modalMaxHeight) ? self.modalMaxHeight : windowHeight * .8;

            var modalTranslateX = parseInt((windowWidth - modalWidth) / 2 - eventLeft),
                modalTranslateY = parseInt((windowHeight - modalHeight) / 2 - eventTop);

            var HeaderBgScaleY = modalHeight / eventHeight,
                BodyBgScaleX = (modalWidth - eventWidth);

            //change modal height/width and translate it
            self.modal.css({
                top: eventTop + 'px',
                left: eventLeft + 'px',
                height: modalHeight + 'px',
                width: modalWidth + 'px',
            });
            transformElement(self.modal, 'translateY(' + modalTranslateY + 'px) translateX(' + modalTranslateX + 'px)');

            //set modalHeader width
            self.modalHeader.css({
                width: eventWidth + 'px',
            });
            //set modalBody left margin
            self.modalBody.css({
                marginLeft: eventWidth + 'px',
            });

            //change modalBodyBg height/width ans scale it
            self.modalBodyBg.css({
                height: eventHeight + 'px',
                width: '1px',
            });
            transformElement(self.modalBodyBg, 'scaleY(' + HeaderBgScaleY + ') scaleX(' + BodyBgScaleX + ')');

            //change modal modalHeaderBg height/width and scale it
            self.modalHeaderBg.css({
                height: eventHeight + 'px',
                width: eventWidth + 'px',
            });
            transformElement(self.modalHeaderBg, 'scaleY(' + HeaderBgScaleY + ')');

            self.modalHeaderBg.one(transitionEnd, function () {
                //wait for the  end of the modalHeaderBg transformation and show the modal content
                self.modalHeaderBg.off(transitionEnd);
                self.animating = false;
                self.element.addClass('animation-completed');
            });
        }

        //if browser do not support transitions -> no need to wait for the end of it
        if (!transitionsSupported) self.modal.add(self.modalHeaderBg).trigger(transitionEnd);
    };

    SchedulePlan.prototype.closeModal = function (event) {
        var self = this;
        var mq = self.mq();
        $('#navButton').removeClass('hide');

        this.animating = true;

        if (mq == 'mobile') {
            this.element.removeClass('modal-is-open');
            this.modal.one(transitionEnd, function () {
                self.modal.off(transitionEnd);
                self.animating = false;
                self.element.removeClass('content-loaded');
                event.removeClass('selected-event');
            });
        } else {
            var eventTop = event.offset().top - $(window).scrollTop(),
                eventLeft = event.offset().left,
                eventHeight = event.innerHeight(),
                eventWidth = event.innerWidth();

            var modalTop = Number(self.modal.css('top').replace('px', '')),
                modalLeft = Number(self.modal.css('left').replace('px', ''));

            var modalTranslateX = eventLeft - modalLeft,
                modalTranslateY = eventTop - modalTop;

            self.element.removeClass('animation-completed modal-is-open');

            //change modal width/height and translate it
            this.modal.css({
                width: eventWidth + 'px',
                height: eventHeight + 'px'
            });
            transformElement(self.modal, 'translateX(' + modalTranslateX + 'px) translateY(' + modalTranslateY + 'px)');

            //scale down modalBodyBg element
            transformElement(self.modalBodyBg, 'scaleX(0) scaleY(1)');
            //scale down modalHeaderBg element
            transformElement(self.modalHeaderBg, 'scaleY(1)');

            this.modalHeaderBg.one(transitionEnd, function () {
                //wait for the  end of the modalHeaderBg transformation and reset modal style
                self.modalHeaderBg.off(transitionEnd);
                self.modal.addClass('no-transition');
                setTimeout(function () {
                    self.modal.add(self.modalHeader).add(self.modalBody).add(self.modalHeaderBg).add(self.modalBodyBg).attr('style', '');
                }, 10);
                setTimeout(function () {
                    self.modal.removeClass('no-transition');
                }, 20);

                self.animating = false;
                self.element.removeClass('content-loaded');
                event.removeClass('selected-event');
            });
        }

        //browser do not support transitions -> no need to wait for the end of it
        if (!transitionsSupported) self.modal.add(self.modalHeaderBg).trigger(transitionEnd);
    }

    SchedulePlan.prototype.mq = function () {
        //get MQ value ('desktop' or 'mobile') 
        var self = this;
        return window.getComputedStyle(this.element.get(0), '::before').getPropertyValue('content').replace(/["']/g, '');
    };

    SchedulePlan.prototype.checkEventModal = function (device) {
        this.animating = true;
        var self = this;
        var mq = this.mq();

        if (mq == 'mobile') {
            //reset modal style on mobile
            self.modal.add(self.modalHeader).add(self.modalHeaderBg).add(self.modalBody).add(self.modalBodyBg).attr('style', '');
            self.modal.removeClass('no-transition');
            self.animating = false;
        } else if (mq == 'desktop' && self.element.hasClass('modal-is-open')) {
            self.modal.addClass('no-transition');
            self.element.addClass('animation-completed');
            var event = self.eventsGroup.find('.selected-event');

            var eventTop = event.offset().top - $(window).scrollTop(),
                eventLeft = event.offset().left,
                eventHeight = event.innerHeight(),
                eventWidth = event.innerWidth();

            var windowWidth = $(window).width(),
                windowHeight = $(window).height();

            var modalWidth = (windowWidth * .8 > self.modalMaxWidth) ? self.modalMaxWidth : windowWidth * .8,
                modalHeight = (windowHeight * .8 > self.modalMaxHeight) ? self.modalMaxHeight : windowHeight * .8;

            var HeaderBgScaleY = modalHeight / eventHeight,
                BodyBgScaleX = (modalWidth - eventWidth);

            setTimeout(function () {
                self.modal.css({
                    width: modalWidth + 'px',
                    height: modalHeight + 'px',
                    top: (windowHeight / 2 - modalHeight / 2) + 'px',
                    left: (windowWidth / 2 - modalWidth / 2) + 'px',
                });
                transformElement(self.modal, 'translateY(0) translateX(0)');
                //change modal modalBodyBg height/width
                self.modalBodyBg.css({
                    height: modalHeight + 'px',
                    width: '1px',
                });
                transformElement(self.modalBodyBg, 'scaleX(' + BodyBgScaleX + ')');
                //set modalHeader width
                self.modalHeader.css({
                    width: eventWidth + 'px',
                });
                //set modalBody left margin
                self.modalBody.css({
                    marginLeft: eventWidth + 'px',
                });
                //change modal modalHeaderBg height/width and scale it
                self.modalHeaderBg.css({
                    height: eventHeight + 'px',
                    width: eventWidth + 'px',
                });
                transformElement(self.modalHeaderBg, 'scaleY(' + HeaderBgScaleY + ')');
            }, 10);

            setTimeout(function () {
                self.modal.removeClass('no-transition');
                self.animating = false;
            }, 20);
        }
    };

    var schedules = $('.cd-schedule');
    var objSchedulesPlan = [],
        windowResize = false;

    if (schedules.length > 0) {
        schedules.each(function () {
            //create SchedulePlan objects
            objSchedulesPlan.push(new SchedulePlan($(this)));
        });
    }

    $(window).on('resize', function () {
        if (!windowResize) {
            windowResize = true;
            (!window.requestAnimationFrame) ? setTimeout(checkResize) : window.requestAnimationFrame(checkResize);
        }
    });

    $(window).keyup(function (event) {
        if (event.keyCode == 27) {
            objSchedulesPlan.forEach(function (element) {
                element.closeModal(element.eventsGroup.find('.selected-event'));
            });
        }
    });

    function checkResize() {
        objSchedulesPlan.forEach(function (element) {
            element.scheduleReset();
        });
        windowResize = false;
    }

    function getScheduleTimestamp(time) {
        //accepts hh:mm format - convert hh:mm to timestamp
        time = time.replace(/ /g, '');
        var timeArray = time.split(':');
        var timeStamp = parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
        return timeStamp;
    }

    function transformElement(element, value) {
        element.css({
            '-moz-transform': value,
            '-webkit-transform': value,
            '-ms-transform': value,
            '-o-transform': value,
            'transform': value
        });
    }
});