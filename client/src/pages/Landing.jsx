import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

function Landing() {
  return (
    <Wrapper>
      <nav>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/register">Register</Link>
          <Link to="/landing">Home</Link>
        </nav>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job
            <span>tracking</span>
            app
          </h1>
          <p>
            I &apos m baby wayfarers hoodie next level taiyaki brooklyn cliche
            blue bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
