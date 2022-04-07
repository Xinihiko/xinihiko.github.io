import {faPython, faHtml5, faCss3Alt, faReact, faJs, faFigma, faBootstrap} from "@fortawesome/free-brands-svg-icons";
// import {faBookOpen} from "@fortawesome/free-solid-svg-icons";
import {SkillCard, SkillCardBi} from './skill-card';

function SkillCompact () {
    return (
        <section id="skill-compact" className='py-5'>
            <div className="container">
                <h1 className="text-center mb-4 display-4 fw-bold">Skills</h1>
                <p className="text-center mb-4 h5 fw-normal">Most used skills in last 2 years.</p>
                <div className="row g-lg-4 g-2 row-cols-2 row-cols-md-3 row-cols-lg-6">
                    <SkillCard icon={faPython} name={"Python"} />
                    <SkillCardBi icon="bi-django" name="Django" />
                    <SkillCard icon={faBootstrap} name={"Bootstrap"} />
                    <SkillCard icon={faJs} name={"Javascript"} />
                    <SkillCard icon={faHtml5} name={"HTML 5"} />
                    <SkillCard icon={faCss3Alt} name={"CSS 3"} />
                </div>
            </div>
        </section>
    )
}

function SkillFull () {
    return (
        <section id="skill" className='py-5 min-vh-80'>
            <div className="container text-center">
                <h1 className="mb-4 display-2 fw-bold gradient-text">Skills</h1>
                <p>These are the skills I learnt while taking up projects and learning since I graduated.</p>
                <div className="row g-lg-4 g-2 row-cols-2 row-cols-md-3 mt-4">
                    <SkillCard icon={faPython} name={"Python"} />
                    <SkillCardBi icon="bi-django" name="Django" />
                    <SkillCard icon={faBootstrap} name={"Bootstrap"} />
                    <SkillCard icon={faJs} name={"Javascript"} />
                    <SkillCard icon={faHtml5} name={"HTML 5"} />
                    <SkillCard icon={faCss3Alt} name={"CSS 3"} />
                    <SkillCardBi icon="bi-tensorflow" name="Tensorflow" />
                    <SkillCard icon={faFigma} name={"Figma"} />
                    <SkillCard icon={faReact} name={"React"} />
                </div>
            </div>
        </section>
    )
}

export {SkillCompact, SkillFull};