import overview from '../assets/PritoTitoOverview.png'
import colorstype from '../assets/PritoTitoColors&Type.png'
import logostudies from '../assets/PritoTitoLogoDesignStudies.png'
import appmockup from '../assets/PritoTitoMobileAppMockup.png'
import stylescape from '../assets/PritoTitoStylescape.png'
import illustrations from '../assets/PritoTitoIllustrations.png'

function CaseStudyPritoTito() {

  return (
        <div className='case-study'>
          <div className='case-study-title'>
          <p className='overline-text'>Brand Identity, Logo Design</p>
          <h3>Brand Identity Design For A Fun Cloud Kitchen Brand</h3>
          </div>
          <div className='case-study-body'>
            <img src={overview}/>
          <p className="body-1">Project Rationale (Challenge/Solution)</p>
          <p className="body-2">Prito Tito will enter a market that is already saturated with competitors from both branded and non-branded food service providers and a consumer base that is already bombarded with a lot of options. As the brand identity designer, part of my solution is to help Prito Tito stand out by crafting a brand identity system that effectively tells Prito Tito’s brand story and competitive attributes across all customer touchpoints.</p>
          <p className="body-1">Client Profile</p>
          <p className="body-2">Prito Tito is a virtual restaurant and cloud kitchen offering fried Filipino comfort food: from potato-based fritters like French fries and chips to Filipino fried favorites such as Crispy Pata (Crispy Pork Knuckles) and Lechon Kawali (Deep Fried Pork Belly).</p>
          <p className="body-2">Prito Tito is a virtual restaurant and cloud kitchen offering fried Filipino comfort food: from potato-based fritters like French fries and chips to Filipino fried favorites such as Crispy Pata (Crispy Pork Knuckles) and Lechon Kawali (Deep Fried Pork Belly).</p>
          <p className="body-1">Target Market</p>
          <p className="body-2">People from 25-40 years old, Most male with a huge appetite for fried comfort food that are affordable.</p>
          <p className="body-1">Brand Attributes</p>
          <p className="body-2">Animated, Fun, Economical</p>
          <p className="body-1">Color Palette</p>
          <p className="body-2">The colors selected are inspired by the things you see when you fry or eat fried food.</p>
          <p className="body-1">Typography</p>
          <p className="body-2">Round, bold typefaces are as ubiquitous as fast-food burger joints. Using such typeface will reinforce quick service and affordability for the brand.</p>
          <img src={colorstype}/>
          <p className="body-1">Logo Design Studies</p>
          <p className="body-2">Prito means fried while tito means uncle or an affectionate or honorific term for a man of an older generation than oneself. Coming from this insight, I concluded that a mascot logo is an obvious direction.</p>
          <p className="body-2"> In the competition audit, I found out that most of the client’s competitors are using either premade lettermark logo designs from Canva or generic food stock logos online. This is an opportunity for the brand to stand out through logo design.</p>
          <img src={logostudies}/>
          <p className="body-1">Creative Branded Elements</p>
          <p className="body-2">To complement the mascot logo, I have designed some illustrations of flagship menu items to be used in all brand touchpoints: social media, delivery website, and packaging.</p>
          <img src={illustrations}/>
          <img src={appmockup}/>
          <img src={stylescape}/>
          </div>
        </div>
  );
}

export default CaseStudyPritoTito;