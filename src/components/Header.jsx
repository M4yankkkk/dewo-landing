export default function Header() {
  return (
    <header className="header">
    <a href="#" className="brand" aria-label="Dewo home"><img src="/dewo-logo.svg" width="100" height="33" alt="Dewo" /></a>
    <nav aria-label="Main navigation"><a href="#how-it-works">How it works</a><a href="#protocol">The protocol</a><a href="#questions">FAQs</a></nav>
    <a className="nav-cta" href="#explore">Explore Dewo <span aria-hidden="true">↗</span></a>
  </header>
  );
}
