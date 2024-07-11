
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { rings, circles } from './assets/images'

export const App = ()=> {
	return(
		<div className="container" >
			<div className='rings'>
				<img src={rings} alt="Rings" />
			</div>
			<section className="profile" >
				<div className='rings'>
					<img src={rings} alt="Rings" />
				</div>
				<div className='circles'>
					<img src={circles} alt="Circles" />
				</div>
				<div className='wrapper' >
					<div className="social-icons">
						<h3>Adamkeyes</h3>
						<div className='icons' >
							<FontAwesomeIcon icon={faGithub} />	
							<FontAwesomeIcon icon={faLinkedin} />
							<FontAwesomeIcon icon={faXTwitter} />
						</div>
					</div>
				</div>
				<div className='card-image' >
					<div  className='profile-image'>
						
					</div>
				</div>
				<div className='card-info' >
					<div className='card-info--title' >
						<h1>
							Nice to meet you! I’m <span>Adam Keyes.</span> 
						</h1>
					</div>
					<p>
						Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
					</p>
					<button>
						CONTACT ME
					</button>
				</div>
			</section>
			<div className='border'>
				<div className='border--line' ></div>
			</div>
			<section className="skills" >
				<div className='skills__box' >
					<h2 className='skills__box--subtitle'>
						HTML
					</h2>
					<p className='skills__box--paragraph'>
						3 years of experience
					</p>
				</div>
				<div className='skills__box' >
					<h2 className='skills__box--subtitle'>CSS</h2>
					<p className='skills__box--paragraph'>3 years of experience</p>
				</div>
				<div className='skills__box' >
					<h2 className='skills__box--subtitle'>
						Javascript
					</h2>
					<p className='skills__box--paragraph'>
						3 years of experience
					</p>
				</div>
				<div className='skills__box' >
					<h2 className='skills__box--subtitle'>
						React
					</h2>
					<p className='skills__box--paragraph'>
						2 years of experience
					</p>
				</div>
				<div className='skills__box' >
					<h2 className='skills__box--subtitle'>
						POSTCSS
					</h2>
					<p className='skills__box--paragraph'>
						2 years of experience
					</p>
				</div>
				<div className='skills__box' >
					<h2 className='skills__box--subtitle'>
						NODEJS
					</h2>
					<p className='skills__box--paragraph'>
						1 year of experience
					</p>
				</div>
			</section>
			<div className='border'>
				<div className='border--line'></div>
			</div>
			<section className="projects" >
				<div className='projects__header' >
					<h2>Projects</h2>
					<button>CONTACT ME</button>
				</div>
				<div className='projects__box' >
					<img className='projects__box--img-portfolio' alt="desing portfolio" />
					<h3>DESING PORTFOLIO</h3>
					<div>
						<p>HTML</p>
						<p>CSS</p>
					</div>	
					<div className='projects__box--links'>
						<div>
							<button>VIEW PROJECT</button>
							<button>VIEW CODE</button>
						</div>
					</div>
				</div>
				<div className='projects__box' >
					<img className='projects__box--img-elearnig' alt="elearnig app" />
					<h3>E-LEARNING LANDING PAGE</h3>
					<div>
						<p>HTML</p>
						<p>CSS</p>
					</div>	
					<div className='projects__box--links'>
						<div>
							<button>VIEW PROJECT</button>
							<button>VIEW CODE</button>
						</div>
					</div>
				</div>
				<div className='projects__box' >
					<img className='projects__box--img-todo' alt="todo app" />
					<h3>TODO WEB APP</h3>
					<div>
						<p>HTML</p>
						<p>CSS</p>
						<p>JAVASCRIPT</p>
					</div>	
					<div className='projects__box--links'>
						<div>
							<button>VIEW PROJECT</button>
							<button>VIEW CODE</button>
						</div>
					</div>
				</div>
				<div className='projects__box' >
					<img className='projects__box--img-entertainment' alt="entertainment app" />
					<h3>ENTERTAINMENT WEB APP</h3>
					<div>
						<p>HTML</p>
						<p>CSS</p>
						<p>JAVASCRIPT</p>
					</div>	
					<div className='projects__box--links'>
						<div>
							<button>VIEW PROJECT</button>
							<button>VIEW CODE</button>
						</div>
					</div>
				</div>
				<div className='projects__box' >
					<img className='projects__box--img-memory' alt="memory app" />
					<h3>MEMORY GAME</h3>
					<div>
						<p>HTML</p>
						<p>CSS</p>
						<p>JAVASCRIPT</p>
					</div>	
					<div className='projects__box--links'>
						<div>
							<button>VIEW PROJECT</button>
							<button>VIEW CODE</button>
						</div>
					</div>
				</div>
				<div className='projects__box' >
					<img className='projects__box--img-artgallery' alt="art gallery showcase" />
					<h3>ART GALLERY SHOWCASE</h3>
					<div>
						<p>HTML</p>
						<p>CSS</p>
						<p>JAVASCRIPT</p>
					</div>	
					<div className='projects__box--links'>
						<div>
							<button>VIEW PROJECT</button>
							<button>VIEW CODE</button>
						</div>
					</div>
				</div>
			</section>
			<section className="contact" >
			</section>
		</div>
	)
}
