import './index.css';
import DefaultPic from './default-pic.png';

function NickName() {
  return (
    <div className="nick-root">
      <div className="nick-pic">
        <img
          className="image-pick"
          src={DefaultPic}
          alt="Default" />
      </div>
      <p className="nick-name">
        Marcio Ramos
      </p>
    </div>
  );
}

export default NickName;
