import { props } from 'react'

function Workcard(props) {
    return (        
            <div className="card" data-aos="fade-in">
                <img src={props.image} alt={props.alt} className=""/>
                <div className="card-overlay">
                    <p className="overline-text">{props.category}</p>
                    <p className="body-1">{props.title}</p>
                </div>
            </div>
    );
  }

export default Workcard