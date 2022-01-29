import Footer from './footer'

function About() {

  return (
    <div classname="about-page">
      <section className="about-designer">
      <div className="about-header">
      <p className="overline-text">About the Designer</p>
      <h3 className> Patrick Who? </h3>
      </div>
      <div className="about-body">
      <p className="body-2">Hello! I am Patrick. I am a graphic and brand identity designer who also has a passion for illustration, type design, print and packaging design, web design, UX design and motion graphics and has corporate experience in marketing strategy, brand and trade marketing.</p>
      <p className="body-2">I am an independent graphic designer with 10 years of brand identity design experience along with combined experience in illustration, print and social media design, type design, UX and web design and front-end development, and motion graphics. I believe that creativity and innovation thrives when you always learn something new, when you push boundaries, and when  you are not afraid of failure. </p>
      <p className="body-2">I do freelance brand identity design work at the moment, helping transform and grow companies and organizations in the US, Europe, Middle East, Asia and Australia through appropriate and distinctive and functional logos and brand identity systems.</p>
      <p className="body-2">I also spent 3 years of corporate marketing experience in marketing strategy, brand, trade marketing, executing brand visual identity as I co-develop key visuals for social media, web, UI & UX, out-of-home and retail advertising with partner design firms.</p>
      <p className="body-2">I finished with high honors in my Bachelor of Arts degree at the University of the Philippines Cebu College of Communication, Art & Design where I majored in Mass Communication and did courses in Multimedia, Graphic Design & Animation. I also did some professional certificate courses in Graphic Design, Web Development and Programming, A.I. and UX Design from Google, Parsons The New School, California Institute of the Arts (CalArts), and freeCodeCamp.</p>
      </div>
      </section>
      <section className="capabilities">
      <div className="about-header">
      <p className="overline-text">Capabilities</p>
      <h3 className>What can I do?</h3>
      </div>
      <div className="about-body">
          <div className="carousel-list">
            <p data-aos="fade-left" className='body-1'>Brand & Marketing Strategy</p>
            <ul className='body-2'>
              <li data-aos="fade-left">Brand Positioning & Differentiation</li>
              <li data-aos="fade-left">Identifying Core Demographics</li>
              <li data-aos="fade-left">Customer and Market Segmentation</li>
              <li data-aos="fade-left">Identifying Brand Attributes</li>
              <li data-aos="fade-left">Conducting Competitive and Internal Brand Identity Audit</li>
              <li data-aos="fade-left">Business Intelligence and Sales Analytics</li>
              <li data-aos="fade-left">Development of Sales & Marketing Activities</li>
            </ul>
          </div>
          <div className="carousel-list">
            <p data-aos="fade-left" className='body-1'>Graphic & Identity Design</p>
            <ul className='body-2'>
              <li data-aos="fade-left">Logo and Brand Identity Design</li>
              <li data-aos="fade-left">Print, Publishing, Advertising, and Packaging Design</li>
              <li data-aos="fade-left">UI/UX and Responsive Web Design</li>
              <li data-aos="fade-left">Illustrations</li>
              <li data-aos="fade-left">Animation and Motion Graphics</li>
            </ul>
          </div>
          <div className="carousel-list">
            <p data-aos="fade-left" className='body-1'>Front-End Development</p>
            <ul className='body-2'>
              <li data-aos="fade-left">Squarespace/Wordpress/Shopify Development</li>
              <li data-aos="fade-left">Front-End Web Application Development</li>
            </ul>
          </div>
      </div>
      </section>
      <section className="toolbox">
      <div className="about-header">
      <p className="overline-text">Tools of the Trade</p>
      <h3 className>What's in the toolbox?</h3>
      </div>
      <div className="about-body">
      <p className="body-2">I could live, I could love, I could reach the heavens above.</p>
      <ul className="body-2">
        <li>Adobe Creative Cloud</li>
        <li>Figma</li>
        <li>Graphic Tablet</li>
        <li>Visual Studio Code</li>
      </ul>
      </div>
      </section>
    </div>
  );
}

export default About;
