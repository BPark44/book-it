import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Sign up to our mailing list!</h1>
      <span className="mailDesc">
        By signing up here, you will be the first to receive all of our offers!
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
