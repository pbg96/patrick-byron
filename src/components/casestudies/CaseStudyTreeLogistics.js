import a from '../../assets/treelogistics/1.png'
import b from '../../assets/treelogistics/2.jpg'

function CaseStudyTreeLogistics() {

  return (
        <div className='case-study'>
          <div className='case-study-title'>
          <p className='overline-text'>Credit Card Design</p>
          <h3>Credit Card Design for A Logistics Company</h3>
          </div>
          <div className='case-study-body'>
          <img src={a}/>
          <p className="body-2">Tree Logistics is a German logistic company who is a pioneer in urban green logistics and provides emissions-neutral last mile delivery services for its logistics and retail clients. They take on urban parcel delivery for their clients with a CO2-neutral commercial vehicles fleet, fair and sustainable working conditions for their employees and a unique professional customer-focused mindset.</p>
          <p className="body-2">In this project, I was tasked to create a design for their personalized credit card design that will be in partnership with Spendit Card. </p>
          <p className="body-2">I was guided by the design guidelines implemented by Spendit Card, being extra deliberate about the composition of the design elements and the color profile of the source file.</p>
          <img src={b}/>

        </div>
        </div>
  );
};

export default CaseStudyTreeLogistics;