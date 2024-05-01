import live from './LiveBG.module.css';
export default function LiveBG() {
  return (
    <div className={live.container}>
      <div className={live.sky}>
        <div className={live.stars}></div>
        <div className={live.stars1}></div>
        <div className={live.stars2}></div>
        <div className={live.shooting-stars}></div>
        <div className={live.shooting-stars}></div>
      </div>
    </div>
  );
}
