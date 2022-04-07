import React from "react";
import chainape from './assets/chainape.png';
import ieee from './assets/ieeeaccess.jpg';
import fruve from './assets/Vegetables and Fruit Classification using Deep Convolutional Neural Network.jpg';
import portfolio from './assets/portfolio.png';
import email_wa from './assets/email_and_wa.png';
import ExperienceCard from "./experience-card";

class ExperiencesCompact extends React.Component {
    render () {
        return (
            <section id='experience' className='py-5'>
                <div className='container min-vh-80'>
                    <h1 className='text-center mb-4 display-4 fw-bold gradient-text'>Experiences</h1>
                    <div className="row g-lg-4 g-2 row-cols-1 row-cols-lg-3">
                        <ExperienceCard 
                            image={email_wa} image_alt="Gmail and Whatsapp Logo"
                            title="Email and Whatsapp"
                            job="Fullstack Developer"
                            desc="Creating web scrapper for web.whatsapp.com and connecting the web app to Gmail SMTP and IMAP using OAUTH 2."
                            frontend={["HTML", "CSS", "JS","Bootstrap"]}
                            backend={["Python","Django","Django-Channels","Selenium"]}
                            database={["Postgresql","Firebase"]}
                        />
                        <ExperienceCard 
                            image={chainape} image_alt="Chainape Logo"
                            title="chainape.com"
                            job="Fullstack Developer"
                            desc="Creating a bot for cryptocurrency trading automation. Starting the position as a Backend Developer, ended up doing some work on the Frontend as well."
                            frontend={["HTML", "CSS", "JS","Bootstrap"]}
                            backend={["Python","Django","Pinescript"]}
                            database={["Postgresql"]}
                        />
                        <ExperienceCard 
                            image={portfolio} image_alt="Portfolio 2020 Web"
                            title="Personal Portfolio 2020"
                            job="Backend Engineer"
                            desc="Portfolio that I made in 2020, using static pages in HTML, CSS and Javascript"
                            frontend={["HTML", "CSS", "JS","Bootstrap"]}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

class ExperiencesFull extends React.Component {
    render () {
        return (
            <section id='experience' className='py-5'>
                <div className='container min-vh-80'>
                    <h1 className='text-center mb-4 display-2 fw-bold gradient-text'>Experiences</h1>
                    <div className="row g-lg-4 g-2 row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <ExperienceCard 
                            image={email_wa} image_alt="Gmail and Whatsapp Logo"
                            title="Email and Whatsapp"
                            job="Fullstack Developer"
                            desc="Creating web scrapper for web.whatsapp.com and connecting the web app to Gmail SMTP and IMAP using OAUTH 2."
                            frontend={["HTML", "CSS", "JS","Bootstrap"]}
                            backend={["Python","Django","Django-Channels","Selenium"]}
                            database={["Postgresql","Firebase"]}
                        />
                        <ExperienceCard 
                            image={chainape} image_alt="Chainape Logo"
                            title="chainape.com"
                            job="Fullstack Developer"
                            desc="Creating a bot for cryptocurrency trading automation. Starting the position as a Backend Developer, ended up doing some work on the Frontend as well."
                            frontend={["HTML", "CSS", "JS","Bootstrap"]}
                            backend={["Python","Django","Pinescript"]}
                            database={["Postgresql"]}
                        />
                        <ExperienceCard 
                            image={portfolio} image_alt="Portfolio 2020 Web"
                            title="Personal Portfolio 2020"
                            job="Backend Engineer"
                            desc="Portfolio that I made in 2020, using static pages in HTML, CSS and Javascript"
                            frontend={["HTML", "CSS", "JS","Bootstrap"]}
                        />
                        <ExperienceCard 
                            image={ieee} image_alt="IEEE Access Logo"
                            title="Small and Slim Deep Convolutional Neural Network for Mobile Device"
                            desc="The paper published at IEEE Access for the result of the research at Shibaura Institute of Technology."
                            frontend={["PyGUI"]}
                            backend={["Tensorflow","Python","Pandas"]}
                        />
                        <ExperienceCard 
                            image={fruve} image_alt="Thesis summary"
                            title="Fruit and Vegetable Classification"
                            desc="Graduation thesis, which is just a simple Convolutional Neural Network that uses Tensorflow to classify 10 kinds of items consisted of fruits and vegetable."
                            backend={["Tensorflow","Python","Pandas"]}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export {ExperiencesCompact, ExperiencesFull};