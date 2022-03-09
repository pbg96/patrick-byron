import overview from '../../assets/Stocks&MoreOverview.png'
import colorstype from '../../assets/Stocks&MoreColor&Type.png'
import logostudies from '../../assets/Stocks&MoreLogoStudies.png'
import stylescape from '../../assets/Stocks&MoreStylescape.png'
import illustrations from '../../assets/Stocks&MoreIllustrations.png'

function CaseStudyStocksAndMore() {

  return (
        <div className='case-study'>
          <div className='case-study-title'>
          <p className='overline-text'>Brand Identity, Logo Design</p>
          <h3>Brand Identity Design For A Simple E-Commerce Shop</h3>
          </div>
          <div className='case-study-body'>
            <img src={overview}/>
          <p className="body-1">Project Rationale (Challenge/Solution)</p>
          <p className="body-2">Stocks & More is faced with a problem with its identity: Stocks are often associated with the stock market and finance than with the items you store in a stockroom or pantry. Moreover, the current product offerings of the brand are so broad and it encompasses contrasting product categories (from art materials to food packaging). As a brand identity designer, my goal is to create a brand identity system that would help establish Stocks and More’s true identity and avoid customer confusion.</p>
          <p className="body-1">Client Profile</p>
          <p className="body-2">Stocks & More is an e-commerce buy and sell shop offering wide array of grocery products, school & office supplies, garden and home materials that can be bought in bulk.</p>
          <p className="body-1">Target Market</p>
          <p className="body-2">People from 30-50 year old. Mostly family person attending to the needs of the household.</p>
          <p className="body-1">Brand Attributes</p>
          <p className="body-2">Simple, Straightforward, No-fuss.</p>
          <p className="body-1">Color Palette</p>
          <p className="body-2">With a simple brand identity design, colors would help set the brand’s unique identity. A warm red-orange color would set the brand apart from finance and stock market brands. Plus it adds vigor to a brand that wants to be simple. </p>
          <p className="body-1">Typography</p>
          <p className="body-2">Clean sans serif font is used to maintain simplicity and straightforwardness.</p>
          <img src={colorstype}/>
          <p className="body-1">Logo Design Studies</p>
          <p className="body-2">Since the brand is heading towards a straightforward approach, I crafted a wordmark logo design with an ampersand centerpiece with a distinctive, bold typeface.</p>
          <img src={logostudies}/>
          <p className="body-1">Creative Branded Elements</p>
          <p className="body-2">The brand is also a general merchandise so any creative elements that will be used should be universal to all the product categories. Since the brand is an e-commerce shop, boxes were used as creative element because it is universal and it signifies anything bought in bulk. </p>
          <img src={illustrations}/>
          <img src={stylescape}/>
          </div>
        </div>
  );
}

export default CaseStudyStocksAndMore;