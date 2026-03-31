import profile from "../assets/my2.png";

export default function Hero() {
  return (
    <div className="hero">
      {/* Background Text */}
      <div className="bg-text">Personal Portfolio</div>

      {/* LEFT */}
      <div className="hero-left">
        <p className="role">Software Engineer</p>

        <div className="stats">
          <div>
            +200
            <span>Project completed</span>
          </div>
          <div>
            +50
            <span>Startup raised</span>
          </div>
        </div>

        <h1>Adnan Ashraf</h1>
        <p className="sub">— Passionate about building clean and efficient web apps</p>

        <p className="scroll">Scroll down ↓</p>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <img src={profile} alt="profile" />
      </div>

      {/* SIDE YEAR */}
      <div className="side-year">2026</div>
    </div>
  );
}
