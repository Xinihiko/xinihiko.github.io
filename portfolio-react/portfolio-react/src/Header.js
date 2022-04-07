import React, { useEffect, useState } from "react";

function humanize(value){
    return value.charAt(0).toUpperCase() + value.slice(1);
}

function NavLink ({value, onClick}) {
    return (
        <div className="nav-link m-2" value={value} onClick={onClick}>{humanize(value)}</div>
    )
}

function Header ({props, onStateChanged}) {

    const [activePage, setActivePage] = useState('index');

    useEffect(() => {
        onStateChanged(activePage);
    },[activePage])

    function navLinkHandler (e) {
        setActivePage(e.target.getAttribute('value'));
        const actives = document.getElementsByClassName('active');
        if (actives.length > 0){
            actives[0].classList.remove('active');
        }
        e.target.classList.add('active');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container">
                <div className="navbar-brand h1 m-2 active" value="index" onClick={navLinkHandler}>Xinihiko</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-items">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav-items">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavLink value="education" onClick={navLinkHandler}/>
                        <NavLink value="skill" onClick={navLinkHandler} />
                        <NavLink value="experience" onClick={navLinkHandler} />
                        <NavLink value="about" onClick={navLinkHandler} />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;