import overview from '../../assets/work_covers/5.png'
import sketches from '../../assets/jikasjewels/1.png'
import logostudies from '../../assets/jikasjewels/2.png'

function CaseStudyJikasJewels() {

  return (
        <div className='case-study'>
          <div className='case-study-title'>
          <p className='overline-text'>Logo Design</p>
          <h3>Brand Identity Design For A Sandwich Brand</h3>
          </div>
          <div className='case-study-body'>
            <img src={overview}/>
          <p className="body-1">Project Rationale (Challenge/Solution)</p>
          <p className="body-2">This project is brimming with success stories of client-designer collaboration. Jika’s Jewels was not the brand’s first name. As we went with the design process, I suggested the brand name “Jika’s Jewels“ because of the ring of the name and the wit of alliteration. The logo was also a result of playful imagination that was rooted by mutual trust between the client and designer.</p>
          <p className="body-1">Client Profile</p>
          <p className="body-2">Jika’s Jewels is an e-commerce brand specializing in selling jewelry.</p>
          <p className="body-1">Target Market</p>
          <p className="body-2">30-50 year old females, buying jewelry as an investment.</p>
          <p className="body-1">Brand Attributes</p>
          <p className="body-2">Feminine, Classy, Minimalist</p>
          <img src={sketches}/>
          <img src={logostudies}/>
          <p className="body-1">Color Palette</p>
          <p className="body-2">Jika’s Jewels color palette is inspired by gold. I also incorporated tiffany blue to make the brand relevant to the product class.</p>
          <p className="body-1">Typography</p>
          <p className="body-2">Typography selected are geometric and humanist, akin to the opulence of the Art Deco era.</p>
          <p className="body-1">Logo Design Studies</p>
          <p className="body-2">The logo design played around the double “J“ in the brand name, morphing them in various forms that would represent the brand.</p>
          </div>
        </div>
  );
}

export default CaseStudyJikasJewels;