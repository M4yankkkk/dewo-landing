export default function Mission() {
  return (
    <section id="explore" className="section mission">
      <span className="eyebrow">03 / THE FIRST MISSION</span><h2>Real decisions.<br /><span>A simulated world.</span></h2><p className="section-intro">A rover. An unseen obstacle Course. A goal to reach.<br />Physical AI is the first proving ground for Dewo.</p>
      <div className="mission-panel"><div className="mission-label"><span className="status-dot"></span> ILLUSTRATIVE MISSION <span>ROVER / 001</span></div><div className="course" role="img" aria-label="Illustration of a rover route from dock around obstacles to a charger"><div className="course-path"></div><span className="obstacle obstacle-one"></span><span className="obstacle obstacle-two"></span><span className="obstacle obstacle-three"></span><span className="dock">◉<small>DOCK</small></span><span className="rover">▣</span><span className="charger">ϟ<small>CHARGER</small></span></div><div className="mission-meta"><span><small>OBJECTIVE</small>Reach the charger</span><span><small>CONSTRAINT</small>Zero collisions</span><span><small>VERIFICATION</small>Independent Replay</span></div></div>
      <p className="mission-caption">One Mission type today. A foundation for verifiable agent work tomorrow.</p>
    </section>
  );
}
