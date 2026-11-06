const NETWORKS = [
  { cls: 'zero-g', mark: '0G', role: 'Intelligence & evidence', job: 'Every Decision is made by a model on 0G and logged for Replay.' },
  { cls: 'hedera', mark: 'ℏ Hedera', role: 'Escrow & settlement', job: 'Bounty and stake are locked in USDC, paid out by the Verdict.' },
  { cls: 'arkiv', mark: '◈ arkiv', role: 'Missions & reputation', job: 'Missions, sealed Bids and Verdicts live on a public board.' },
];

export default function Ecosystem() {
  return (
    <section className="ecosystem reveal" aria-label="Protocol infrastructure">
      <p>THREE NETWORKS. ONE VERIFIABLE OUTCOME.</p>
      <div className="networks">
        {NETWORKS.map((n) => (
          <div className="network" key={n.mark}>
            <b className={n.cls}>{n.mark}</b>
            <small>{n.role}</small>
            <span className="network-job">{n.job}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
