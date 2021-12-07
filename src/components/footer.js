import Footerlinks from './footerlinks'
import SocialLinks from '../data/socialmedia.json'
import OtherLinks from '../data/otherlinks.json'

function Footer() {
    return (
        <footer>
        <div className="footer-one">
        <div className="footer-left">
            <p className="body-1">Social Media</p><br/>
            {SocialLinks.map((links,index) => {
            return <Footerlinks
                id={links.id}
                url={links.url}
                class={links.class}
                sitename={links.sitename}
                />
            })}
        </div>
        <div className="footer-right">
        {OtherLinks.map((links,index) => {
            return <Footerlinks
                id={links.id}
                url={links.url}
                class={links.class}
                sitename={links.sitename}
                />
            })}
        </div>
        </div>
        <div className="footer-bottom">
            <p className="overline-text">Patrick Byron Gattoc ©  2021</p>
        </div>
    
        </footer>
    );
  }

export default Footer