import "./Name.css";

export default function Name({ x, y }) {
  return (
    <>
      <div className="background-width">
        <div className="header-name">
            <div className="header-command-name">
                {x}
            </div>
            <div className="header-command-name">
                <p>INTRA DEPARTMENT TECHNO-CULTURAL FEST</p>
            </div>

            <div className="header-command-name left">
                {x}
            </div>
        </div>
        <div>
          <div className="Name">{x}</div>
          <div className="ls">{y}</div>
        </div>
      </div>
    </>
  );
}
