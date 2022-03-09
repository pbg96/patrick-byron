import button from '../../assets/athleteqid/1.png'

function CaseStudyAthleteqId() {

  return (
        <div className='case-study'>
          <div className='case-study-title'>
          <p className='overline-text'>UI Design</p>
          <h3>Button Design for An Athletic Start-up</h3>
          </div>
          <div className='case-study-body'>
            <img src={button}/>
          <p className="body-2">AthleteqID is a start-up company in Australia that aims to quickly expedite registration on marathons and other sports activities. I also did the logo design for this brand and I focused on showing athletic, active, and mobile attributes on its identity design.</p>
          <p className="body-2">The people in AthleteqID also asked me to design a button for them. They explained that this button is akin to the “Sign up with Apple” or “Sign up with Google“ buttons when one is registering to a website. But in their case, the button will be placed on online registration sites for marathons and other athletic events.</p>
          <p className="body-2">Generally, and to save more time, the button design was inspired by the Google’s Material Design and Apple’s Human Interface Design.</p>

          </div>
        </div>
  );
}

export default CaseStudyAthleteqId;