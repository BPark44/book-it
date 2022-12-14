import "./footer.css";

const d = new Date();
let year = d.getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Resorts</li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">B&Bs</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay</li>
          <li className="fListItem">All destinations</li>
          <li className="fListItem">Discover</li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Unpacked: Travel articles</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car rental</li>
          <li className="fListItem">Flight finder</li>
          <li className="fListItem">Restaurant reservations</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">About BookIt</li>
          <li className="fListItem">Customer Service Help</li>
          <li className="fListItem">Partner help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">How we work</li>
        </ul>
      </div>
      <div className="fText">
        Copyright © BookIt {year}. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
