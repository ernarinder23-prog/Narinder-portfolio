import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './Home.css'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import profile from '../../images/navi.png'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <>
      <Helmet>
        <title>Narinder Singh - Software Engineer & Backend Developer | Home</title>
        <meta name="description" content="Hi! I'm Narinder Singh, a passionate software engineer specializing in Backend Development. I love learning new technologies and meeting new people." />
        <meta name="keywords" content="Narinder Singh, software engineer, backend developer, React, Node.js, portfolio, India" />
        <meta property="og:title" content="Narinder Singh - Software Engineer & Backend Developer" />
        <meta property="og:description" content="Hi! I'm Narinder Singh, a passionate software engineer specializing in Backend Development. I love learning new technologies and meeting new people." />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://narinder-portfolio.vercel.app/navi.png" />
        <meta name="twitter:title" content="Narinder Singh - Software Engineer & Backend Developer" />
        <meta name="twitter:description" content="Hi! I'm Narinder Singh, a passionate software engineer specializing in Backend Development." />
        <meta name="twitter:image" content="https://narinder-portfolio.vercel.app/navi.png" />

        {/* Structured Data for Person */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Narinder Singh",
            "jobTitle": "Software Engineer",
            "description": "Hi! I'm Narinder Singh, a passionate software engineer specializing in Backend Development.",
            "url": "https://narinder-portfolio.vercel.app",
            "image": "https://narinder-portfolio.vercel.app/navi.png",
            "sameAs": [
              "https://github.com/ernarinder23-prog",
              "https://stackoverflow.com/users/32539891/narinder-singh",
              "https://www.linkedin.com/in/ernarinder23",
              "https://www.instagram.com/n.a.v.i_263",
              "https://www.threads.com/@n.a.v.i_263"
            ],
            "knowsAbout": [
              "Backend Development",
              "Full-Stack Development",
              "JavaScript",
              "Node.js"
            ]
          })}
        </script>
      </Helmet>

      <div className="home-wrapper">
        <div className="home">
          <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
            <img
              className="profile"
              alt="Narinder Singh profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Narinder Singh</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'I like to develop new things',
                    'I love learning new tech.',
                    'I love meeting new people.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '_',
                  delay: 100,
                }}
              />
            </h1>
            <Bounce cascade>
              <div className="resume-container">
                <a
                  href="https://narinder-portfolio.vercel.app/narinder-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Narinder Singh's resume"
                >
                  Download Resume
                </a>
              </div>
            </Bounce>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
                aria-label="Scroll to about section"
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default Home
