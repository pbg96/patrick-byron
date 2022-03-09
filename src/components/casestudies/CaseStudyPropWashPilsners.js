import a from '../../assets/propwashpilsners/1.png'
import b from '../../assets/propwashpilsners/2.jpg'

function CaseStudyPropWashPilsners() {

  return (
    <div className='case-study'>
    <div className='case-study-title'>
    <p className='overline-text'>Can Design</p>
    <h3>Can Design For An Alaskan Brewery</h3>
    </div>
    <div className='case-study-body'>
    <p className="body-2">Prop Wash Pilsners is a pilsner brand of Valdez Brewing in Alaska. The brand is in need of a design for their cans that could show an imagery of their locality and heritage. Since the they offer a multitude of variants, the client also asked if the design could also be scalable to accomodate a lot of variants.</p>
    <img src={a}/>
    <img src={b}/>

  </div>
  </div>
  );
}

export default CaseStudyPropWashPilsners;