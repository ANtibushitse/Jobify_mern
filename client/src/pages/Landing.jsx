import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components/'
import {Link} from 'react-router-dom'

/**
 * Landing is a function that returns a div with a nav, a div with a class of container, a div with a
 * class of info, a h1, a p, and a button
 *
 * @return A function that returns a JSX element
 */
const Landing = () => {

    return (
        <>
            <Wrapper>
                <nav>
                    <nav>
                        <Link to="/">Dashboard</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/landing">Home</Link>
                    </nav>
                </nav>
                <div className='container page'>
                    <div className='info'>
                        <h1>
                            job <span>tracking</span> app
                        </h1>
                        <p>
                            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
                            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
                            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
                            narwhal.
                        </p>
                        <Link to="/register" className='btn btn-hero'>
                            Login/Register
                        </Link>
                    </div>
                    <img src={main} alt='job hunt' className='img main-img'/>
                </div>
            </Wrapper>
        </>
    )
}

export default Landing