import a from '../../assets/abstractlogos/1.jpg'
import b from '../../assets/abstractlogos/2.jpg'
import c from '../../assets/abstractlogos/3.jpg'
import d from '../../assets/abstractlogos/4.jpg'
import e from '../../assets/abstractlogos/5.jpg'
import f from '../../assets/abstractlogos/6.jpg'
import g from '../../assets/abstractlogos/7.jpg'
import j from '../../assets/abstractlogos/10.jpg'
import k from '../../assets/abstractlogos/11.jpg'
import l from '../../assets/abstractlogos/12.jpg'
import m from '../../assets/abstractlogos/13.jpg'

function CaseStudyAbstractLogos() {

  return (
        <div className='case-study'>
          <div className='case-study-title'>
          <p className='overline-text'>Logo Design</p>
          <h3>Abstract Logofolio</h3>
          </div>
          <div className='case-study-body'>
          <p className="body-2">An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image—like an apple or a bird—it’s an abstract geometric form that represents your business.</p>
          <img src={a}/>
          <img src={b}/>
          <img src={c}/>
          <img src={d}/>
          <img src={e}/>
          <img src={f}/>
          <img src={g}/>
          <img src={j}/>
          <img src={k}/>
          <img src={l}/>
          <img src={m}/>
          </div>
        </div>
  );
}

export default CaseStudyAbstractLogos;