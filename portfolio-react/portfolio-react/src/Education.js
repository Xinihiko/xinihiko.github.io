import React from "react";
import logoBINUS from "./assets/logoBINUS.png";
import logoSIT from "./assets/logoSIT.gif";
import logoBIT from "./assets/logoBIT.png";

class EducationCompact extends React.Component {
    render () {
        return (
            <section id='education' className='py-5'>
                <div className='container'>
                    <h1 className='mb-3 text-center display-4 fw-bold gradient-text'>Educational Background</h1>
                    <div className='row my-3'>
                        <div className='col-2 d-none d-lg-block'>
                            <img className="school-logo" src={logoBINUS} alt="BINUS Logo" />
                        </div>
                        <div className='col-lg-10'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h3><span className='d-none d-lg-block'>Bina Nusantara University</span><span className='d-block d-lg-none'>BINUS University</span></h3>
                                </div>
                                <div className='col-md-6 text-md-end'>
                                    <h3><span className='d-none d-lg-block'>Computer Science 2016 - 2020</span><span className='d-block d-lg-none'>CS ’16 - ’20</span></h3> 
                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <article>As a student of BINUS University, I learned the basics of few languages such as C, C++, C#, SQL, HTML, CSS, and Java. I also do some self learning on Python, Javascript, also other Programming Language on my free time. I graduated after doing my thesis with the title of Vegetable and Fruit Classification using Deep Convolutional Neural Network.</article>
                            </div>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-2 d-none d-lg-block'>
                            <img className="school-logo" src={logoSIT} alt="SIT Logo" />
                        </div>
                        <div className='col-lg-10'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h3><span className='d-none d-lg-block'>Shibaura Institute of Technology</span><span className='d-block d-lg-none'>Shibaura 工業大学</span></h3>
                                </div>
                                <div className='col-md-6 text-md-end'>
                                    <h3><span className='d-none d-lg-block'>Research <abbr title="Exchange Student">ES</abbr> 2019 - 2020</span><span className='d-block d-lg-none'>Research <abbr title="Exchange Student">ES</abbr> ’19 - ’20</span></h3> 
                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <article>I joined Shibaura Institute of Technology as an Laboratory Internship Program or also known as Research Exchange Program where I had written a paper under Prof. Chinthaka Premachandra's guidance. The paper is published to IEEE Access under the title of Small and Slim Deep Convolutional Neural Network for Mobile Device. I self-studied Convolutional Neural Network and Machine Learning for the first time here.</article>
                            </div>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-2 d-none d-lg-block'>
                            <img className="school-logo" src={logoBIT} alt="BIT Logo" />
                        </div>
                        <div className='col-lg-10'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h3><span className='d-none d-lg-block'>Beijing Institute of Technology</span><span className='d-block d-lg-none'>Beijing 理工大学</span></h3>
                                </div>
                                <div className='col-md-6 text-md-end'>
                                    <h3><span className='d-none d-lg-block'>Computer Science <abbr title="Exchange Student">ES</abbr> 2019</span><span className='d-block d-lg-none'>CS <abbr title="Exchange Student">ES</abbr> ’19</span></h3> 
                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <article>I studied at Beijing Institute of Technology as an Exchange Student. I took Computer Science related subjects such as Introduction to AI, Compiler Principles and Design, Computer Organization and Architecture, also Methodology and Practice of Programming. I also took Taichi class to learn one of Chinese martial arts.</article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function EducationFull () {
    function hideAll () {
        const shows = document.getElementsByClassName('now-show');
        for (let index = 0; index < shows.length; index++) {
            const show = shows[index];
            show.classList.remove('now-show');
        }
    }

    function swapSchool (e) {
        let school = e.currentTarget.getAttribute('data-school-name');
        hideAll();
        switch (school) {
            case "BINUS":
                document.getElementById('BINUS').classList.add('now-show');
                break;
            case "SIT":
                document.getElementById('SIT').classList.add('now-show');
                break;
            case "BIT":
                document.getElementById('BIT').classList.add('now-show');
                break;
            default:
                break;
        }
    };

    return (
        <section id="education" className="py-5 min-vh-80">
            <div className='container'>
                <h1 className='mb-3 text-center display-2 fw-bold gradient-text'>Educational Background</h1>
                <div className='row row-cols-3'>
                    <div id="binusBtn" type="button" className="btn btn-lg" onClick={swapSchool} data-school-name="BINUS"><img src={logoBINUS} alt="BINUS" /></div>
                    <div id="sitBtn" type="button" className="btn btn-lg" onClick={swapSchool} data-school-name="SIT"><img src={logoSIT} alt="SIT" /></div>
                    <div id="bitBtn" type="button" className="btn btn-lg" onClick={swapSchool} data-school-name="BIT"><img src={logoBIT} alt="BIT" /></div>
                </div>
                <div id="showSchool">
                    <section className='default-hide' id="BINUS">
                        <div className='row my-3'>
                            <div className='col-2 d-none d-lg-block'>
                                <img className="school-logo" src={logoBINUS} alt="BINUS Logo" />
                            </div>
                            <div className='col-lg-10'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h3><span className='d-none d-lg-block'>Bina Nusantara University</span><span className='d-block d-lg-none'>BINUS University</span></h3>
                                    </div>
                                    <div className='col-md-6 text-md-end'>
                                        <h3><span className='d-none d-lg-block'>Sept 2016 - May 2020</span><span className='d-block d-lg-none'>Sep ’16 - May ’20</span></h3> 
                                    </div>
                                </div>
                                <hr />
                                <div className='row'>
                                    <article>As a student of BINUS University, I learned the basics of few languages such as C, C++, C#, SQL, HTML, CSS, and Java. I also do some self learning on Python, Javascript, also other Programming Language on my free time. I graduated after doing my thesis with the title of Vegetable and Fruit Classification using Deep Convolutional Neural Network.</article>
                                </div>
                                <div className='row'>
                                    <button className="btn text-end" type="button" data-bs-toggle="collapse" data-bs-target="#binus-studies">
                                        What I've Learned <i className="bi bi-caret-down" />
                                    </button>
                                    <div className="collapse" id="binus-studies">
                                        <hr />
                                        <h4>Relevant Courses</h4>
                                        <div className="d-lg-flex">
                                            <ul className="col-lg-6 mb-0 pb-0">
                                                <li>Artificial Intelligence</li>
                                                <li>Artificial Neural Network</li>
                                                <li>Database Systems</li>
                                                <li>Software Engineering</li>
                                                <li>Web Programming</li>
                                            </ul>
                                            <ul className="col-lg-6">
                                                <li>Algorithm Design and Analysis</li>
                                                <li>Algortihm and Programming</li>
                                                <li>Advanced Object Oriented Programming</li>
                                                <li>Code Engineering</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='default-hide' id="SIT">
                        <div className='row my-3'>
                            <div className='col-2 d-none d-lg-block'>
                                <img className="school-logo" src={logoSIT} alt="SIT Logo" />
                            </div>
                            <div className='col-lg-10'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h3><span className='d-none d-lg-block'>Shibaura Institute of Technology</span><span className='d-block d-lg-none'>Shibaura 工業大学</span></h3>
                                    </div>
                                    <div className='col-md-6 text-md-end'>
                                        <h3><span className='d-none d-lg-block'>Aug 2019 - Mar 2020</span><span className='d-block d-lg-none'>Aug ’19 - Mar ’20</span></h3> 
                                    </div>
                                </div>
                                <hr />
                                <div className='row'>
                                    <article>I joined Shibaura Institute of Technology as an Laboratory Internship Program or also known as Research Exchange Program where I had written a paper under Prof. Chinthaka Premachandra's guidance. The paper is published to IEEE Access under the title of Small and Slim Deep Convolutional Neural Network for Mobile Device. I self-studied Convolutional Neural Network and Machine Learning for the first time here.</article>
                                </div>
                                <div className='row'>
                                    <button className="btn text-end" type="button" data-bs-toggle="collapse" data-bs-target="#sit-studies">
                                        What I've Learned <i className="bi bi-caret-down" />
                                    </button>
                                    <div className="collapse" id="sit-studies">
                                        <hr />
                                        Since I was making paper and writing my Thesis while doing my Research Exchange Program, I did learn more about
                                        <ul>
                                            <li>Python</li>
                                            <li>Pandas</li>
                                            <li>Numpy</li>
                                            <li>Tensorflow</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='default-hide' id="BIT">
                        <div className='row my-3'>
                            <div className='col-2 d-none d-lg-block'>
                                <img className="school-logo" src={logoBIT} alt="BIT Logo" />
                            </div>
                            <div className='col-lg-10'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h3><span className='d-none d-lg-block'>Beijing Institute of Technology</span><span className='d-block d-lg-none'>Beijing 理工大学</span></h3>
                                    </div>
                                    <div className='col-md-6 text-md-end'>
                                        <h3><span className='d-none d-lg-block'>Feb 2019 - Jun 2019</span><span className='d-block d-lg-none'>Feb ’19 - Jun ’19</span></h3> 
                                    </div>
                                </div>
                                <hr />
                                <div className='row'>
                                    <article>I studied at Beijing Institute of Technology as an Exchange Student. I took Computer Science related subjects such as Introduction to AI, Compiler Principles and Design, Computer Organization and Architecture, also Methodology and Practice of Programming. I also took Taichi class to learn one of Chinese martial arts.</article>
                                </div>
                                <div className='row'>
                                    <button className="btn text-end" type="button" data-bs-toggle="collapse" data-bs-target="#bit-studies">
                                        What I've Learned <i className="bi bi-caret-down" />
                                    </button>
                                    <div className="collapse" id="bit-studies">
                                        <hr />
                                        <h4>Taken Courses</h4>
                                        <ul>
                                            <li>Compiler Principles and Design</li>
                                            <li>Introduction to Artificial Intelligence</li>
                                            <li>Computer Organization and Architecture</li>
                                            <li>Methodology and Practice of Programming</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>             
        </section>
    );
}

export {EducationCompact, EducationFull};
