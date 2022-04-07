import HeroImage from './assets/me_behind.png';

function Hero () {
    return (
        <section id="Hero" className="mb-5">
            <div className="container">
                <div className="d-lg-flex align-items-center text-center text-lg-start  pb-5 mb-5">
                    <div className="container col-lg-6">
                        <h1 className='display-5 fw-bold'>Hi! I'm Amadeus,</h1>
                        <article className='h5'>
                            Welcome to my Portfolio!
                        </article>
                        <a className='btn btn-lg pt-5 mt-5 pb-lg-5 mb-lg-5 btn-readmore' href='#education'>
                            <i className='bi bi-chevron-down' /> Scroll Down, Read More    
                        </a>
                    </div>
                    <div className="container d-none d-lg-block">
                        <img src={HeroImage} alt="nothing special" className="w-100" />
                    </div>    
                </div>
            </div>
        </section>
    )
}

export default Hero;