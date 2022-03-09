import overview from '../../assets/work_covers/4.png'
import sketches from '../../assets/gettoastea/1.png'
import logostudies from '../../assets/gettoastea/2.png'

function CaseStudyGetToastea() {

  return (
        <div className='case-study'>
          <div className='case-study-title'>
          <p className='overline-text'>Logo Design</p>
          <h3>Brand Identity Design For A Sandwich Brand</h3>
          </div>
          <div className='case-study-body'>
            <img src={overview}/>
          <p className="body-1">Project Rationale (Challenge/Solution)</p>
          <p className="body-2">Being the brand identity designer, my goal is to create a logo design for Get Toastea that will make them stand out in a sea of similar brands, whilst being familiar and memorable. The brands are using the same tints of yellow, pink and white and the same egg imagery. The client requested that the logo design must be fun while being simple, could use the color yellow and could evoke warmth.</p>
          <p className="body-1">Client Profile</p>
          <p className="body-2">The name is a combination of Toast and Tea. Get Toastea will offer toast (egg drop sandwich) and tea. The term toast is used so that the sandwich offering will not be limited to eggs only. Tea is used for the milktea offerings. The brand will start as a cloud kitchen located in the suburbs of Metro Manila, and will soon expand to a full-service cafe.</p>
          <p className="body-1">Target Market</p>
          <p className="body-2">18-50 year old college students and middle-class workers who are likely to buy unique and instagrammable snacks (and Korean drama fans, since egg drop was popularized by Korean dramas like Hospital Playlist and 18 Again)</p>
          <p className="body-1">Brand Attributes</p>
          <p className="body-2">Warm, Classy, Minimalist</p>
          <p className="body-1">Color Palette</p>
          <p className="body-2">The colors selected are inspired by the colors of egg drop (yellow and white).</p>
          <p className="body-1">Typography</p>
          <p className="body-2">We explored using handwritten lettering design to evoke warmth and comfort. We also explored using modern sans-serif typefaces to show minimalist aesthetic. The project is also exciting since we will be designing a logotype in Korean Hangul.</p>
          <img src={sketches}/>
          <img src={logostudies}/>
          <p className="body-1">Logo Design Studies</p>
          <p className="body-2">Generally, the logo studies were designed with minimalism and warmth in mind. I took inspiration from the aesthetic of small Korean minimalist cafes as we sketched some concepts. To achieve minimalism, we only limited ourselves to two or three tones. To make it look warm and personable, I explored humanist forms in the icon and wordmark.</p>
          <p className="body-2">I also leaned towards creating simple yet distinctive icons to make the logo more iconic, identifiable, and cost-effective for print production.</p>
          </div>
        </div>
  );
}

export default CaseStudyGetToastea;