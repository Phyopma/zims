export default function Footer() {
  return (
    <footer className="footer bg-base-200 p-10 text-base-content">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link-hover link">Robotics Workshops</a>
        <a className="link-hover link">Competitions</a>
        <a className="link-hover link">Projects</a>
        <a className="link-hover link">Resources</a>
      </nav>
      <nav>
        <h6 className="footer-title">Clubs</h6>
        <a className="link-hover link">ZOTBotics in training</a>
        <a className="link-hover link">Anteater Combotice Essociation</a>
        <a className="link-hover link">Unmanned Aerial Vehicles</a>
        <a className="link-hover link">Personal Electric Vehicles</a>
      </nav>
      <nav>
        <h6 className="footer-title">About</h6>
        <a className="link-hover link">Mission</a>
        <a className="link-hover link">Leadership</a>
        <a className="link-hover link">Partnerships</a>
        <a className="link-hover link">Events</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input join-item input-bordered"
            />
            <button className=" btn join-item bg-blue-light hover:bg-blue-light/80">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}
