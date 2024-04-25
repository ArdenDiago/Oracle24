import "./background.css";

export default function Background() {
  return (
    <svg viewBox="0 0 1000 600">
      <symbol id="s-text">
        <text text-anchor="middle" x="90%" y="80%" className="text--line">
          24
        </text>
        <text text-anchor="middle" x="40%" y="80%" className="text--line2">
          Oracle
        </text>
      </symbol>

      <g className="g-ants">
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
      </g>
    </svg>
  );
}
