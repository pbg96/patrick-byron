import Workcard from './WorkCard'
import Workinfo from '../data/work.json'

function Work() {
    return (
        <section className="works" id="works">
        <div className="work-message" data-aos="fade-in">
        <h3>What's cooking?</h3>
        <h6>Here's a curation of some of my works.</h6>
        </div>
        <div className="portfolio-grid">
        {Workinfo.map((info,index) => {
          return <Workcard id={info.id} image={info.image} alt={info.alt} title={info.title} category={info.category} />
         })}
        </div>
    </section>
    );
  }

export default Work