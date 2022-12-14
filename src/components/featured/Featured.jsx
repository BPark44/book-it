import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/971402.webp?k=bfd7d97e02de7446cadf896691218fd4c8e114d2e09c9e3dbc666d467c9b43ea&o="
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Gold Coast</h1>
          <h2>104 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/971535.webp?k=fabf56c222741e2db4c7bd85db6bf0610d7617d25ee392c1483dd81691196408&o="
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Brisbane</h1>
          <h2>85 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/682540.webp?k=fc3655b3d7c5c4fd712aa84739e16d04fe7c68e7c1133fa4f6a7511d21fc50d7&o="
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sydney</h1>
          <h2>310 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
