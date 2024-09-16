
import './Carousel.css';
import NFL from '../../../assets/images/NFL.webp'
import NBA from '../../../assets/images/NBA.webp'
import NHL from '../../../assets/images/NHL.png'
import MLB from '../../../assets/images/MLB.webp'
import UFC from '../../../assets/images/UFC.webp'
import BKFC from '../../../assets/images/BKFC.webp'


function Carousel() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img className="logos" src={NFL} alt="NFL" />
        </div>
        <div className="slide">
          <img className="logos" src={NBA} alt="NBA" />
        </div>
        <div className="slide">
          <img className="logos" src={MLB} alt="MLB" />
        </div>
        <div className="slide">
          <img className="logos" src={NHL} alt="NHL" />
        </div>
        <div className="slide">
          <img className="logos" src={UFC} alt="UFC" />
        </div>
        <div className="slide">
          <img className="logos" src={BKFC} alt="BKFC" />
        </div>

        <div className="slide">
          <img className="logos" src={NFL} alt="NFL" />
        </div>
        <div className="slide">
          <img className="logos" src={NBA} alt="NBA" />
        </div>
        <div className="slide">
          <img className="logos" src={MLB} alt="MLB" />
        </div>
        <div className="slide">
          <img className="logos" src={NHL} alt="NHL" />
        </div>
        <div className="slide">
          <img className="logos" src={UFC} alt="UFC" />
        </div>
        <div className="slide">
          <img className="logos" src={BKFC} alt="BKFC" />
        </div>
    
      </div>
    </div>
  );
}

export default Carousel;
