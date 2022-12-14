import "./searchItem.css";
import { useNavigate } from "react-router-dom";

const SearchItem = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hotels/ss");
  };

  return (
    <div className="searchItem">
      <img
        src="https://theluxurytravelexpert.com/wp-content/uploads/2021/03/best-hotels-san-francisco.jpg"
        alt="hotel"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">The Hotel San Francisco</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.4</button>
        </div>
        <div className="siDetailsText">
          <span className="siPrice">$143</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={handleClick}>
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
