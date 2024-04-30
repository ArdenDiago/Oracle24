import "./Background.css";
import deptLogo from "../../../assets/Images/Logo/DeptLogo.svg";
export default function Background() {
  return (
    <>
      <div className="header">
        <h2>
          <a
            href="https://codepen.io/RAFA3L"
            target="_blank"
            rel="noopener noreferrer"
          >
            ORACLE
          </a>
        </h2>
        <div
          className="mid-spot"
          // onclick="document.body.classNameList.toggle('gold');"
        ></div>
        <button className="contact-btn">
          <span className="glow"></span>
          <span className="contact-btn-content">
            <img className="contact-btn-content-img" src={deptLogo} alt="" />
          </span>
        </button>

        <div className="spotlight">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <canvas id="particleCanvas"></canvas>

      <div className="accent-lines">
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="heroSubP">
        <p>Introducing</p>
      </div>
      <p className="heroPTop">
        The world's best platform, <br></br>
        powered by EclipxOS + React.
      </p>
      <div className="hero">
        <div className="heroT">
          <h2>Eclipx</h2>
          <h2>Eclipx</h2>
        </div>
      </div>
      <p className="heroP">
        The world's best platform, <br></br>
        powered by EclipxOS + React.
      </p>
      <div className="mountains">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="hero-spacer"></div>

      <div className="content-section">
        <div className="content-acc">
          <div></div>
          <div></div>
        </div>
        <p className="subt">Revolutionary by design</p>
        <h3 className="title">
          Harness. Empower.<br></br>
          Unmatched Versatility.
        </h3>
        <p className="subp">
          At the core lies our revolutionary framework, <br></br>ensuring
          adaptability across all application architectures.
        </p>
      </div>
    </>
  );
}
