jQuery(document).ready(function ($) {
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

        var descriptions = {
            "5-disciplines-that-could-transform-your-team-(and-your-life)": "An inspirational, whirlwind tour of a practical framework that you and your team can begin mastering today. You’ll see ideas from several books brought together in a rapid-fire presentation that will give you plenty of food for thought!",
            "principles": "I'll talk about the principles I try to apply to my work: to reduce toil, make better decisions, be more effective and lead us to better outcomes.This is no magic bullet. These principles are mine and YMMV :-)",
            "going-beyond-fun-driven-development": "You’ve got into software development because it’s fun. Now it’s time to get serious about it. This talk will inspire you and show you how to build the mindset of an educated and disciplined software developer - the one that your company aspires to have.",
            "microservice-generator---from-scratch-to-deploy-in-a-blink": "The birth of a new service is such an exciting event! But there is no much fun in bootstrapping a service. Wouldn't be great if that tedious routine was a matter of seconds? Come learn how that's just a thing of the past!",
            "how-to-reduce-toil-by-ignoring-your-lying-brain": "We all suffer from some cognitive biases, and left unchecked these can lead to us toiling away on the wrong solutions to the wrong problems. In this talk we’ll get to know some of the more common brain problems  - and some techniques that can help you get past them.",
            "can-you-spot-the-difference?": "We built a comparison framework to capture the differences between old and new journey planners. Come find out how it enabled us to find missing features, defects, served as a reporting tool and helped us to migrate.",
            "how-we-deal-with-production-fails-in-eu": "Production is not perfect. Networks lose packets, developers break carrier APIs, bugs go live.  S**** happens. Come learn how the EU platform folks deal with the eventualities that plague a high traffic system.",
            "information-handshake": "Come learn how important it is to acknowledge information received and how to check if what we have done actually works as a way to remove toil on having to deal with bugs and repeated tickets to have to handle the same thing all over again. If the Internet does it, why shouldn’t we?",
            "reducing-our-toil-with-environment-dashboard": "In Fusion we own a lot of services, including legacy ones, which makes keeping healthy test environments difficult. I will talk about how the creation of Environment Dashboard increased the visibility of issues in the environments and sped up the detection of problematic services.",
            "how-we-made-requirement-analysis-transparent": "One of the pillars of Scrum is transparency. We wanted to extend that to requirement analysis too. In this talk I will explain how we did it.",
            "being-nice-to-robots:-optimising-trainline.com-for-googlebot": "We have over 9.5m pages on the thetrainline.com domain just for UK rail, Google isn’t crawling much of our site and, to them, less is more. By cutting dead pages using data and analytics we can improve performance and reduce the number of pages significantly in our quest to be #1",
            "async-code-in-.net-done-right": "Writing async code is not just about using the async/await keywords. We’ll go through the common issues found in our code and how to properly write efficient and correct async code. The talk will also cover the great new features of .NET Core to improve performance which you can now leverage on every project",
            "how-ai-makes-decisions": "Discover the different kinds of Artificial Intelligence and how they make their decisions",
            "thinking-test-first": "We'd like to share with you our experience transitioning into a testing first mentality.",
            "a-tale-of-two-domains": "Why is there a trainline.com and a trainline.eu?  What's different about Brussels-Midi and Bruges? And what does \"SGP\" really mean anyway?  This session explains the mechanics, magic and sheer stubbornness of will employed by the Connections/Magnum team to help make SGP a reality.",
            "how-to-test-in-isolation": "In Trainline we constantly seem to be testing each others systems. In this talk we'll try to educate people on identifying domain responsibility boundries, how to mock and when to mock.",
            "a-deep-dive-into-how-hashing-can-go-wrong": "How not to make a hash out of hashing.",
            "seeing-the-matrix": "How does software evolve? Where is your code going?",
            "optimal-team-design": "Talk will focus on actionable techniques for improving team design when it comes to structure, accountability, communication, ceremonies, and culture and share learnings from 3 years of Tango structuring and re-structuring to meet the next challenge.",
            "why-do-we-still-need-databases?": "With the era of Cloud, Databases have evolved into DataStores where you can leverage the Automation capabilities to serve any type of Load. This talk will go through the various Database technologies we use at trainline and why there's a big shopping list of datastores to choose from.",
            "how-north-korea-helped-mean-time-to-recovery": "When production breaks, the time to recover it is directly related to the amount of toil associated with understanding the state of our platform. To reduce this toil, we have sought truth on a journey via Russia and North Korea. Along the route we have wrestled Pandas, used a lot of Greek sticky tape, questioned our own sanity and bred a bigger faster brood of deer.",
            "how-dependable-are-your-dependencies?": "Open source dominates application development. It saves hours of programming, giving you more time to innovate. But can you trust code that you did not entirely create yourself?  The biggest breaches are increasingly caused by vulnerabilities in rarely noticed libraries our applications depend upon. Open source components are free but neglecting to comply with their license requirements may result in legal, business, and technical risks. In this talk, you will learn how to analyse your third-party dependencies, inventory your open source licenses and weed out any components that expose your application to known vulnerabilities.",
            "augmented-reality-using-react-web-ar": "Imagine this. It is the year 2019. You are a traveller on a train that is running behind schedule. You want information, now. You fire up your Trainline app, enable your camera and use Augmented Reality on your ticket to list all your journey details. Result… Customer === Wowed. In this talk, we’ll explore React-Web-AR and prove just how easy Augmented Reality on the web can be.",
            "oy!-where's-my-refund?": "A short story about a customer’s refund flowing through our system. We touch upon some key finding and improvements to the system, and how we’ve kept our customers happy.",
            "the-automation-generation": "We used to have to manually copy and paste notes pertaining to each release from TeamCity to JIRA. I'll talk about how we solved all our headaches using computers.",
            "team-remoting-1-step-ahead": "Challenges and how to overcome them by removing toil on comms and execution when working in remote teams",
            "breaking-down-the-barriers": "How can we use technology to reduce the gap between BAs/POs, devs and QAs?  How can we leverage our tools to eliminate waste and reduce toil? This talk will explore some development approaches and testing strategies to break down barriers that slow us down.",
            "chaos-monkey-business": "An engineering tenet of Trainline is that engineering teams own the code that they write, including being on-call to respond and diagnose production incidents. Vulcan own applications across different technical stacks where strange things can happen when applications are being run at scale and to infrastructure in the cloud. I'll talk about our on-call preparedness sessions where we use principles of Chaos Monkey and the tools we have at our disposal at Trainline to ensure engineers are confident and empowered to  respond efficiently when they are on on-call.",
            "a-story-about-deployments": "This brief history of deployment methods will make you discover an evolution of technologies for shipping code to production. You will also find out about an alternative future where we tried to deploy Trainline Europe in Kubernetes, what we learned and what goodies it could bring us.",
            "introduction-to-rail-ticketing": "Why do we pretend to be train station? What do we have in common with The Beatles? Intro to what are Print Windows, NLCs, LENNON, SDCI+, LSM, Type06, eTVD and more. Brief overview of fulfilment methods in the UK.",
            "culture-vnext": "What's all this 'Culture of Craft' stuff? What's going on with Communities?\nAll shall be revealed!",
            "in-pain?-keep-sane-and-carry-on!": "Feeling too busy? Overworked? Not enough hours in the day? Not all toil is code/project based. It starts with you. Tools, techniques and routines to help you get the most from you and your day.",
            "usages-tensorflow-on-the-client": "Tensorflow is the ML toolkit by Google and it's progressing every year. This presentation explores training a novel image detection application and deploying or updating the model on mobile and web clients using the various TF client APIs - tensorflow lite and tensorflow.js",
            "getting-the-most-out-of-akamai,-or-cant-someone-else-do-it": "A basic overview of Akamai, Ion & CDNs in general, and how to set up your apps to get the most benefit as we expand globally",
            "yld---tbc": "YLD - tbc",
            "ko-toil-with-kotlin": "Android Development has been condemned to legacy version of Java since its inception. Since Google's official support announcement at Google I/O 2017, the Bonsai Android team has been planning to replace Java with the modern and concise Kotlin alternative. Come learn how we introduced a whole new programming language into our codebase, what steps we took and some of the ups and downs we had along the way.",
            "identifying-and-addressing-toil-in-teams": "Starting work in a new team allows to identify pains that existing members may not see any more. Trainline's Principal role involves working with different teams and it gives that unique opportunity to have that fresh view. I will go through some examples of toil I encountered over time, putting some light on how they were identified and addressed.",
            "tbc": "Glenn Block from Auth0 coming in to do talk. Make sure we give them a good slot :) - RC",
            "your-first-trainline-graphql-api:-building-train-live-departures": "There are many theoretical talks about GraphQL out there. They show principles and ideas and while they are really good to gain some understanding, I believe the best way to learn is to practice. <br/><br/> In this workshop you’ll get your hands dirty, we will create a fully functional GraphQL server that delivers live train times departures. We will work our way from creating a dummy server through leveraging all the different resolvers and types. Along the way we will of course explain the principles behind GraphQL and why this technology is awesome. <br/><br/>This workshop is for anyone interested in knowing more about GraphQL and want to get started with this technology. You don’t need any previous experience with GraphQL, some javascript exposure assumed, all you need is your lapop and NodeJS installed.",
            "robots-terminating-toil": "YLD are going to do a workshop on robots.",
            "sight-reading-code": "Find out what your code says about you, and how you can treat a codebase like a crime scene to understand how software is built, in any language, in any application.",
            "custodi-detractione:-my-beliefs-and-values": "After a lot of years, some successful projects and some… erm… less successful projects, join me for a quick canter through my *personal* beliefs about organisations, behaviours, people, process, technology and business",
            "coffee": "There will be coffee and snacks in the lobby and mezzanine.",
            "lunch": "Lunch will be served in the lobby and mezzanine. Enjoy the nibbles, re-energise, and get some fresh air! ",
            "xlosing": "Come back to Hall 1 for a wrap up and party instructions! ",
            "empty": "Nothing in this room during this time! Check the Hall 1 schedule."
        }

        //update event name and time
        this.modalHeader.find('.event-name').text(event.find('.event-name').text());
        this.modalHeader.find('.event-person').text(event.find('.event-person').text());
        this.modalHeader.find('.event-date').text(event.find('.event-date').text());
        this.modal.attr('data-event', event.parent().attr('data-event'));

        //update event content
        // this.modalBody.find('.event-info').load(event.parent().attr('data-content') + '.html .event-info > *', function (data) {
        //     //once the event content has been loaded
        //     self.element.addClass('content-loaded');
        // });

        this.modalBody.find('.event-info > div').html(descriptions[event.parent().attr('data-content')] || '')

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