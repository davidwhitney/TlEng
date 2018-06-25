var talks = [
    {
        "name": "Luke Barton",
        "team": "Hydra",
        "type": "lightningTalk",
        "title": "5 disciplines that could transform your team (and your life)",
        "description": "An inspirational, whirlwind tour of a practical framework that you and your team can begin mastering today. You’ll see ideas from several books brought together in a rapid-fire presentation that will give you plenty of food for thought!",
        "order": "",
        "startTime": "",
        "endTime": ""
    },
    {
        "name": "Paul Grayson",
        "team": "Leadership",
        "type": "lightningTalk",
        "title": "Principles",
        "description": "I'll talk about the principles I try to apply to my work: to reduce toil, make better decisions, be more effective and lead us to better outcomes.This is no magic bullet. These principles are mine and YMMV :-)",
        "order": "",
        "startTime": "",
        "endTime": ""
    },
    {
        "name": "Artemij Fedosejev",
        "team": "Tango",
        "type": "lightningTalk",
        "title": "Going Beyond Fun-Driven Development",
        "description": "You’ve got into software development because it’s fun. Now it’s time to get serious about it. This talk will inspire you and show you how to build the mindset of an educated and disciplined software developer - the one that your company aspires to have.",
        "order": "",
        "startTime": "",
        "endTime": ""
    },
    {
        "name": "Fabio Gariglio",
        "team": "DietCode",
        "type": "lightningTalk",
        "title": "Microservice generator - From scratch to deploy in a blink",
        "description": "The birth of a new service is such an exciting event! But there is no much fun in bootstrapping a service. Wouldn't be great if that tedious routine was a matter of seconds? Come learn how that's just a thing of the past!",
        "order": "",
        "startTime": "",
        "endTime": ""
    },
    {
        "name": "John Whiles",
        "team": "Vulcan",
        "type": "lightningTalk",
        "title": "How to reduce toil by ignoring your lying brain",
        "description": "We all suffer from some cognitive biases, and left unchecked these can lead to us toiling away on the wrong solutions to the wrong problems. In this talk we’ll get to know some of the more common brain problems  - and some techniques that can help you get past them.",
        "order": "",
        "startTime": "",
        "endTime": ""
    },
    {
        "name": "KANNAPPAN",
        "team": "Routemaster",
        "type": "lightningTalk",
        "title": "Can you spot the difference?",
        "description": "We built a comparison framework to capture the differences between old and new journey planners. Come find out how it enabled us to find missing features, defects, served as a reporting tool and helped us to migrate.",
        "order": "",
        "startTime": "",
        "endTime": ""
    },
    {
        "name": "Misha Doronin",
        "team": "25kv",
        "type": "lightningTalk",
        "title": "How we deal with production fails in EU",
        "description": "Production is not perfect. Networks lose packets, developers break carrier APIs, bugs go live.  S**** happens. Come learn how the EU platform folks deal with the eventualities that plague a high traffic system.",
        "order": "",
        "startTime": "",
        "endTime": ""
    },
    {
        "name": "Nisha Chaganlal",
        "team": "DietCode",
        "type": "lightningTalk",
        "title": "Information Handshake",
        "description": "Come learn how important it is to acknowledge information received and how to check if what we have done actually works as a way to remove toil on having to deal with bugs and repeated tickets to have to handle the same thing all over again. If the Internet does it, why shouldn’t we?",
        "order": "",
        "startTime": "",
        "endTime": ""
    },
    {
        "name": "Wojciech Kotlarski",
        "team": "Fusion",
        "type": "lightningTalk",
        "title": "Reducing our Toil with Environment Dashboard",
        "description": "In Fusion we own a lot of services, including legacy ones, which makes keeping healthy test environments difficult. I will talk about how the creation of Environment Dashboard increased the visibility of issues in the environments and sped up the detection of problematic services.",
        "order": "",
        "startTime": "",
        "endTime": ""
    },
    {
        "name": "Janos Ver",
        "team": "Tango",
        "type": "lightningTalk",
        "title": "How we made requirement analysis transparent",
        "description": "One of the pillars of Scrum is transparency. We wanted to extend that to requirement analysis too. In this talk I will explain how we did it.",
        "order": "",
        "startTime": "",
        "endTime": ""
    },
    {
        "name": "Adam Harris",
        "team": "SEO",
        "type": "longTalk",
        "title": "Being Nice to Robots: Optimising trainline.com for Googlebot",
        "description": "We have over 9.5m pages on the thetrainline.com domain just for UK rail, Google isn’t crawling much of our site and, to them, less is more. By cutting dead pages using data and analytics we can improve performance and reduce the number of pages significantly in our quest to be #1",
        "order": "7",
        "startTime": "13:00",
        "endTime": "13:30"
    },
    {
        "name": "Alessio Franceschelli",
        "team": "Routemaster",
        "type": "longTalk",
        "title": "Async Code in .NET Done Right",
        "description": "Writing async code is not just about using the async/await keywords. We’ll go through the common issues found in our code and how to properly write efficient and correct async code. The talk will also cover the great new features of .NET Core to improve performance which you can now leverage on every project",
        "order": "12",
        "startTime": "17:00",
        "endTime": "17:30"
    },
    {
        "name": "Cedric",
        "team": "Fusion",
        "type": "longTalk",
        "title": "How AI makes decisions",
        "description": "Discover the different kinds of Artificial Intelligence and how they make their decisions",
        "order": "11",
        "startTime": "15:00",
        "endTime": "15:30"
    },
    {
        "name": "Daniel Phillips",
        "team": "Bonsai",
        "type": "longTalk",
        "title": "Thinking Test First",
        "description": "We'd like to share with you our experience transitioning into a testing first mentality.",
        "order": "13",
        "startTime": "17:30",
        "endTime": "18:00"
    },
    {
        "name": "Darrell Scott",
        "team": "Magnum",
        "type": "longTalk",
        "title": "A Tale of Two Domains",
        "description": "Why is there a trainline.com and a trainline.eu?  What's different about Brussels-Midi and Bruges? And what does \"SGP\" really mean anyway?  This session explains the mechanics, magic and sheer stubbornness of will employed by the Connections/Magnum team to help make SGP a reality.",
        "order": "11",
        "startTime": "16:30",
        "endTime": "17:00"
    },
    {
        "name": "Dave Storey",
        "team": "Routemaster",
        "type": "longTalk",
        "title": "How to test in isolation",
        "description": "In Trainline we constantly seem to be testing each others systems. In this talk we'll try to educate people on identifying domain responsibility boundries, how to mock and when to mock.",
        "order": "7",
        "startTime": "13:00",
        "endTime": "13:30"
    },
    {
        "name": "Frederik",
        "team": "Architecture",
        "type": "longTalk",
        "title": "A deep dive into how hashing can go wrong",
        "description": "How not to make a hash out of hashing.",
        "order": "5",
        "startTime": "12:00",
        "endTime": "12:30"
    },
    {
        "name": "Ian Randolph",
        "team": "Tango",
        "type": "longTalk",
        "title": "Optimal team design",
        "description": "Talk will focus on actionable techniques for improving team design when it comes to structure, accountability, communication, ceremonies, and culture and share learnings from 3 years of Tango structuring and re-structuring to meet the next challenge.",
        "order": "6",
        "startTime": "12:30",
        "endTime": "13:00"
    },
    {
        "name": "Imtiyaz Mohammad",
        "team": "Platform Services",
        "type": "longTalk",
        "title": "Why do we still need Databases?",
        "description": "With the era of Cloud, Databases have evolved into DataStores where you can leverage the Automation capabilities to serve any type of Load. This talk will go through the various Database technologies we use at trainline and why there's a big shopping list of datastores to choose from.",
        "order": "10",
        "startTime": "14:30",
        "endTime": "15:00"
    },
    {
        "name": "Jamie Buchanan",
        "team": "Platform Services",
        "type": "longTalk",
        "title": "How North Korea helped Mean-Time-To-Recovery",
        "description": "When production breaks the time to recover it is directly related to the amount of toil associated with understanding the state of our platform. To reduce this toil we have sought truth on a journey via Russia and North Korea. Along the route we have wrestled Pandas, used a lot of Greek sticky tape, questioned our own sanity and bred a bigger faster brood of deer.",
        "order": "5",
        "startTime": "12:00",
        "endTime": "12:30"
    },
    {
        "name": "Jerry Wozniak",
        "team": "",
        "type": "longTalk",
        "title": "How dependable are your dependencies?",
        "description": "Open source dominates application development.  It saves hours of programming, giving you more time to innovate. But can you trust code that you did not entirely create yourself?  The biggest breaches are increasingly caused by vulnerabilities in rarely noticed libraries our applications depend upon. Open source components are free but neglecting to comply with their license requirements may result in legal, business, and technical risks. In this talk, you will learn how to analyse your third-party dependencies, inventory your open source licenses and weed out any components that expose your application to known vulnerabilities.",
        "order": "6",
        "startTime": "12:30",
        "endTime": "13:00"
    },
    {
        "name": "Luke Belfield",
        "team": "Vulcan",
        "type": "longTalk",
        "title": "Augmented Reality using React-Web-AR",
        "description": "Imagine this. It is the year 2019. You are a traveller on a train that is running behind schedule. You want information, now. You fire up your Trainline app, enable your camera and use Augmented Reality on your ticket to list all your journey details. Result… Customer === Wowed. In this talk, we’ll explore React-Web-AR and prove just how easy Augmented Reality on the web can be.",
        "order": "7",
        "startTime": "13:00",
        "endTime": "13:30"
    },
    {
        "name": "Maxim Eliseev + Ajay Alphonso",
        "team": "Fusion",
        "type": "longTalk",
        "title": "Oy! Where's my Refund?",
        "description": "A short story about a customer’s refund flowing through our system. We touch upon some key finding and improvements to the system, and how we’ve kept our customers happy.",
        "order": "6",
        "startTime": "12:30",
        "endTime": "13:00"
    },
    {
        "name": "Natalie Akam",
        "team": "Hydra",
        "type": "longTalk",
        "title": "The Automation Generation",
        "description": "We used to have to manually copy and paste notes pertaining to each release from TeamCity to JIRA. I'll talk about how we solved all our headaches using computers.",
        "order": "12",
        "startTime": "17:00",
        "endTime": "17:30"
    },
    {
        "name": "Nisha Chaganlal",
        "team": "DietCode",
        "type": "longTalk",
        "title": "Team Remoting 1 step ahead",
        "description": "Challenges and how to overcome them by removing toil on comms and execution when working in remote teams",
        "order": "15",
        "startTime": "17:00",
        "endTime": "17:30"
    },
    {
        "name": "Orazio Cotroneo",
        "team": "Bonsai",
        "type": "longTalk",
        "title": "Breaking Down the Barriers",
        "description": "How can we use technology to reduce the gap between BAs/POs, devs and QAs?  How can we leverage our tools to eliminate waste and reduce toil? This talk will explore some development approaches and testing strategies to break down barriers that slow us down.",
        "order": "13",
        "startTime": "17:30",
        "endTime": "18:00"
    },
    {
        "name": "Paul Kiddie",
        "team": "Vulcan",
        "type": "longTalk",
        "title": "Chaos Monkey Business",
        "description": "An engineering tenet of Trainline is that engineering teams own the code that they write, including being on-call to respond and diagnose production incidents. Vulcan own applications across different technical stacks where strange things can happen when applications are being run at scale and to infrastructure in the cloud. I'll talk about our on-call preparedness sessions where we use principles of Chaos Monkey and the tools we have at our disposal at Trainline to ensure engineers are confident and empowered to  respond efficiently when they are on on-call.",
        "order": "11",
        "startTime": "15:00",
        "endTime": "15:30"
    },
    {
        "name": "Paul(r) Bonaud",
        "team": "Linux Servers",
        "type": "longTalk",
        "title": "A story about deployments",
        "description": "This brief history of deployment methods will make you discover an evolution of technologies for shipping code to production. You will also find out about an alternative future where we tried to deploy Trainline Europe in Kubernetes, what we learned and what goodies it could bring us.",
        "order": "6",
        "startTime": "12:30",
        "endTime": "13:00"
    },
    {
        "name": "Piotr Ratajczak",
        "team": "Architecture",
        "type": "longTalk",
        "title": "Introduction to Rail Ticketing",
        "description": "Why do we pretend to be train station? What do we have in common with The Beatles? Intro to what are Print Windows, NLCs, LENNON, SDCI+, LSM, Type06, eTVD and more. Brief overview of fulfilment methods in the UK.",
        "order": "16",
        "startTime": "17:30",
        "endTime": "18:00"
    },
    {
        "name": "Rob Cooper",
        "team": "Principals",
        "type": "longTalk",
        "title": "Culture vNext",
        "description": "What's all this 'Culture of Craft' stuff? What's going on with Communities?\nAll shall be revealed!",
        "order": "2",
        "startTime": "10:30",
        "endTime": "11:00"
    },
    {
        "name": "Rob Cooper",
        "team": "Principals",
        "type": "longTalk",
        "title": "In Pain? Keep Sane and Carry On!",
        "description": "Feeling too busy? Overworked? Not enough hours in the day? Not all toil is code/project based. It starts with you. Tools, techniques and routines to help you get the most from you and your day.",
        "order": "14",
        "startTime": "16:30",
        "endTime": "17:00"
    },
    {
        "name": "Robert Munro",
        "team": "Bonsai",
        "type": "longTalk",
        "title": "Usages tensorflow on the client",
        "description": "Tensorflow is the ML toolkit by Google and it's progressing every year. This presentation explores training a novel image detection application and deploying or updating the model on mobile and web clients using the various TF client APIs - tensorflow lite and tensorflow.js",
        "order": "12",
        "startTime": "15:30",
        "endTime": "16:00"
    },
    {
        "name": "Stuart Macleod",
        "team": "Infrastructure",
        "type": "longTalk",
        "title": "Getting the most out of Akamai, or 'Can't Someone Else Do It?'",
        "description": "A basic overview of Akamai, Ion & CDNs in general, and how to set up your apps to get the most benefit as we expand globally",
        "order": "11",
        "startTime": "16:30",
        "endTime": "17:00"
    },
    {
        "name": "Team YLD",
        "team": "YLD",
        "type": "longTalk",
        "title": "YLD - tbc",
        "description": "YLD - tbc",
        "order": "5",
        "startTime": "12:00",
        "endTime": "12:30"
    },
    {
        "name": "Tomasz Rykała",
        "team": "Bonsai",
        "type": "longTalk",
        "title": "K.O. Toil with Kotlin",
        "description": "Android Development has been condemned to legacy version of Java since its inception. Since Google's official support announcement at Google I/O 2017, the Bonsai Android team has been planning to replace Java with the modern and concise Kotlin alternative. Come learn how we introduced a whole new programming language into our codebase, what steps we took and some of the ups and downs we had along the way.",
        "order": "10",
        "startTime": "14:30",
        "endTime": "15:00"
    },
    {
        "name": "Wojciech Kotlarski",
        "team": "Fusion",
        "type": "longTalk",
        "title": "Identifying and addressing toil in teams",
        "description": "Starting work in a new team allows to identify pains that existing members may not see any more. Trainline's Principal role involves working with different teams and it gives that unique opportunity to have that fresh view. I will go through some examples of toil I encountered over time, putting some light on how they were identified and addressed.",
        "order": "5",
        "startTime": "12:00",
        "endTime": "12:30"
    },
    {
        "name": "Glenn Block",
        "team": "Auth0",
        "type": "longTalk",
        "title": "TBC",
        "description": "Glenn Block from Auth0 coming in to do talk. Make sure we give them a good slot :) - RC",
        "order": "3",
        "startTime": "11:00",
        "endTime": "11:30"
    },
    {
        "name": "Juan Vicaria",
        "team": "Vulcan",
        "type": "workshop",
        "title": "Your first Trainline graphQL API: Building train live departures",
        "description": "There are many theoretical talks about GraphQL out there. They show principles and ideas and while they are really good to Gain some understanding, I believe the best way to learn is to practice. In this workshop you’ll get your hands dirty, we will create a fully functional GraphQL server that delivers live train times departures.We will work our way from creating a dummy server through leveraging all the different resolvers and types. Along the way we will of course explain the principles behind GraphQL and why this technology is awesome. This workshop is for anyone interested in knowing more about GraphQL and want to get started with this technology. You don’t need any previous experience with GraphQL, some javascript exposure assumed, all you need is your lapop and  NodeJS installed.",
        "order": "10",
        "startTime": "14:30",
        "endTime": "16:30"
    },
    {
        "name": "Team YLD",
        "team": "YLD",
        "type": "workshop",
        "title": "Robots Terminating Toil",
        "description": "YLD are going to do a workshop on robots.",
        "order": "10",
        "startTime": "14:30",
        "endTime": "16:30"
    },
    {
        "name": "David Whitney",
        "team": "",
        "type": "longTalk",
        "title": "Sight Reading Code",
        "description": "Find out what your code says about you, and how you can treat a codebase like a crime scene to understand how software is built, in any language, in any application.",
        "order": "7",
        "startTime": "13:00",
        "endTime": "13:30"
    },
    {
        "name": "Mark Holt",
        "team": "",
        "type": "longTalk",
        "title": "Custodi Detractione: My beliefs and values",
        "description": "After a lot of years, some successful projects and some… erm… less successful projects, join me for a quick canter through my *personal* beliefs about organisations, behaviours, people, process, technology and business",
        "order": "16",
        "startTime": "17:30",
        "endTime": "18:00"
    }
]
var lis = talks.filter(talk => !(talk.type === 'lightningTalk')).map(talk => `<li class="single-event" data-start="${talk.startTime}" data-end="${talk.endTime}" data-content="${cleanUpTalkDescription(talk.title)}" data-event="event-${talk.order}">
                        <a href="#0">
                            <em class="event-name">${talk.title}</em>
                            <span class="event-person">${talk.name}</span>
                        </a>
                    </li>`).join('\n')

console.log(lis)

function makeDescriptionsObject() {
    return talks.reduce(function (acc, next) {

        acc[cleanUpTalkDescription(next.title)] = next.description

        return acc;
    }, {})
}

function cleanUpTalkDescription(desc) {
    return desc.toLowerCase().split(' ').join('-')
}