import HeroPic from '../assets/Headshot2.png';

function Hero() {
    return (
        <section className="hero" id="hero">
        <div className="hero-message">
        <h3>Hello.</h3>
        <h6>I'm Patrick.<br/>An independent creative strategist and brand identity designer</h6>
        <img className="hero-img" src={HeroPic} alt="Smiling Patrick Byron Gattoc in a black shirt with arms crossed"/>
        </div>
        </section>
    );
  }

export default Hero