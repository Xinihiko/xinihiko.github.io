import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SkillCard({icon, name}) {
    return (
        <div className="card-container">
            <div className="card skill-card">
                <div className="card-title mx-auto my-3 display-1">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="card-body text-center">
                    <p className="card-text fw-bold h4">{name}</p>
                </div>
            </div>
        </div>
    )
}

function SkillCardBi({icon, name}) {
    return (
        <div className="card-container">
            <div className="card skill-card">
                <div className="card-title mx-auto my-3 display-1">
                    <i className={icon} />
                </div>
                <div className="card-body text-center">
                    <p className="card-text fw-bold h4">{name}</p>
                </div>
            </div>
        </div>
    )
}

export {SkillCard, SkillCardBi};
    
    