import resume from './assets/CV_Amadeus Suryo Winoto.pdf'

function ContactBtn ({urlRedirect, bootstrapIconClass, title}) {
    function redirectTo(e){
        const urlRedirect = e.currentTarget.getAttribute('data-redirect-to');
        window.open(urlRedirect, '_blank');
    }

    return (
        <div className='d-flex flex-column'>
            <div className="w-50 mx-auto contact-btn" data-redirect-to={urlRedirect} onClick={redirectTo}>
                <i className={bootstrapIconClass} />
                <span className="h5 d-block">{title}</span>
            </div>
        </div>
    )
}

function Contacts ({full}) {
    return (
        <div className="container text-center">
            <h1 className={full ? 'mb-3 text-center display-2 fw-bold gradient-text' : 'display-4 fw-bold mb-4'}>Contact</h1>
            <div className="row row-cols-2 row-cols-lg-4 gx-md-0 g-4 text-center display-3 mx-0">
                <ContactBtn 
                    urlRedirect="https://www.linkedin.com/in/amadeus-winoto/" 
                    bootstrapIconClass='bi bi-linkedin d-block' 
                    title="LinkedIn" 
                />
                <ContactBtn 
                    urlRedirect="mailto:amadeus.winoto@gmail.com" 
                    bootstrapIconClass='bi bi-envelope d-block' 
                    title="E-mail" 
                />
                <ContactBtn 
                    urlRedirect="https://github.com/Xinihiko" 
                    bootstrapIconClass='bi bi-github d-block' 
                    title="Github" 
                />
                <ContactBtn 
                    urlRedirect={resume} 
                    bootstrapIconClass='bi bi-file-earmark-person d-block' 
                    title="CV" 
                />
            </div> 
        </div>
    )
}

function ContactCompact () {
    return (
        <section id="Counter-hero" className="mt-5">
            <Contacts />
        </section>
    )
}

function ContactFull () {
    return (
        <div className='min-vh-80'>
            <section id="about" className='py-5'>
                <div className="container">
                    <h1 className='mb-3 text-center display-2 fw-bold gradient-text' >Amadeus</h1>
                    <blockquote className="blockquote text-center">
                        <p>"AI might look smart, but without the creator it won't even exist."</p>
                    </blockquote>
                    <p className='container w-75'>
                        Computer Science Bachelor, interested in AI Development and Fullstack Development. On my free usually I will read manga or learn something new by either watching, doing research or reading some books.
                    </p>
                    <p className='container w-75'>
                        I'm interested to take Master's Degree to continue the research on AI, moreover on Computer Vision. 
                    </p>
                </div>
            </section>
            <section id="contact" className='py-2'>
                <Contacts full={true}/>
            </section>
        </div>
    )
}

export {ContactCompact, ContactFull};