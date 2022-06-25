import Workcard from './workcard'
import { Data } from '../data/work'
import DownloadCv from './DownloadCv';

function Work() {
    return (
        <section className="works" id="works">
        <div className="work-message" data-aos="fade-in">
        <h3>What's cooking?</h3>
        <h6>Here's a curation of some of my works.</h6>
        </div>
        <div className="portfolio-grid">
        {Data.map((info,index) => {
          return <Workcard id={info.id} image={info.image} alt={info.alt} title={info.title} category={info.category} link={info.link}/>
         })}
        </div>
    </section>
    );
  }

export default Work