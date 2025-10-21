import './hero.css';
import googlePlay from '../img/google_play.png';
import appStore from '../img/appstore.png';
import bodega from '../img/bodega.png'

const Hero = () =>{
    return(
        <section className="hero">
            <div className="hero-text">
                <h1>
                    Encuentra bodegas y rentalas{" "}
                    <span className="highlight">Fácilmente</span>
                </h1>
                <p>
                    Accede a una bodega donde y cuando la necesites desde tu dispositivo iOS o Android
                </p>
                <div className="hero-buttons">
                    <img src={googlePlay} alt="gpy" />
                    <img src={appStore} alt="appstre" />
                </div>
            </div>

            <div className="hero-image">
                <img src= {bodega} alt="bodega" />
            </div>
        </section>
    )
}

export default Hero;