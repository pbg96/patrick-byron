import overview from '../../assets/PlantphiliaOverview.png'
import colorstype from '../../assets/PlantphiliaColor&Type.png'
import logostudies from '../../assets/PlantphiliaLogoStudies.png'
import stylescape from '../../assets/PlantphiliaStylescape.png'
import illustrations from '../../assets/PlantphiliaIllustrations.png'

function CaseStudyPlantphilia() {

  return (
        <div className='case-study'>
          <div className='case-study-title'>
          <p className='overline-text'>Brand Identity, Logo Design</p>
          <h3>Brand Identity Design For An Instagram Ornaments Shop</h3>
          </div>
          <div className='case-study-body'>
            <img src={overview}/>
          <p className="body-1">Project Rationale (Challenge/Solution)</p>
          <p className="body-2">Plantphilia’s target demographic are the Millennials and Gen Z’s are universally distracted when they are online. This made the brand to move forward with a brand identity design that catches the attention of its key demographic. As the brand identity designer for this project, I addressed the key challenge by creating an identity system that catches the customer’s attention with aesthetically pleasing branded creative elements and the effective use of space</p>
          <p className="body-1">Client Profile</p>
          <p className="body-2">Plantphilia is a virtual shop on Instagram offering ornamental and fruit-bearing plants to young adults</p>
          <p className="body-1">Target Market</p>
          <p className="body-2">People from 20-30 years old with an eye on aesthetically pleasing items.</p>
          <p className="body-1">Brand Attributes</p>
          <p className="body-2">Youthful, Earthy, Aesthetically-pleasing</p>
          <p className="body-1">Color Palette</p>
          <p className="body-2">To reinforce the earthiness of the brand, I chose a color of green that is between a bright green and brown</p>
          <p className="body-1">Typography</p>
          <p className="body-2">Rounded, thin typeface was selected as this slightly resembles stems on a plant.</p>
          <img src={colorstype}/>
          <p className="body-1">Logo Design Studies</p>
          <p className="body-2">Plantphilia literally translates to Love for Plants. With this in mind, I created a monogram that resembles both a heart and the plant from the P’s of Plant and philia. </p>
          <img src={logostudies}/>
          <p className="body-1">Creative Branded Elements</p>
          <p className="body-2">I created an illustration system based from the leaves of the popular plant products of Plantphilia. I also created a flatlay pattern that is reminiscent of how Instagram creators lay leaves on their posts.</p>
          <img src={illustrations}/>
          <img src={stylescape}/>
          </div>
        </div>
  );
}

export default CaseStudyPlantphilia;