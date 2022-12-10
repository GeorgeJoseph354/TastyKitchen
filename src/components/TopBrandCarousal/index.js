import {Component} from 'react'
import Slider from 'react-slick'

import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class TopBrandCarousal extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '180px',
      slidesToShow: 3,
      speed: 500,
      arrows: 'bool',
    }
    return (
      <div className="top-brand-container">
        <h2 className="top-brand-heading">Top brands for you</h2>
        <Slider {...settings} className="brand-card">
          <div>
            <img
              className="top-brand-icon"
              src="https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp"
              alt="McDonald's"
            />
          </div>
          <div>
            <img
              className="top-brand-icon"
              src="https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp"
              alt="KFC"
            />
          </div>
          <div>
            <img
              className="top-brand-icon"
              src="https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp"
              alt="Domino's Pizza"
            />
          </div>
          <div>
            <img
              className="top-brand-icon"
              src="https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png?output-format=webp"
              alt="FreshMenu"
            />
          </div>
          <div>
            <img
              className="top-brand-icon"
              src="https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp"
              alt="A2B - Adyar Ananda Bhavan"
            />
          </div>
          <div>
            <img
              className="top-brand-icon"
              src="https://b.zmtcdn.com/data/brand_creatives/logos/acc68e452e5e8ea16d56292838cd0056_1659429766.png?output-format=webp"
              alt="Eat Fit"
            />
          </div>
        </Slider>
      </div>
    )
  }
}

export default TopBrandCarousal
