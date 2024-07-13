
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
				<div className='projects__main' >
					<div className='projects__main--box' >
						<div className='projects__main--box--img portfolio' >
							
						</div>
						<h3>DESING PORTFOLIO</h3>
						<div className='projects__main--box--text' >
							<p>HTML</p>
							<p>CSS</p>
						</div>	
						<div className='projects__main--box--links'>
							<button>VIEW PROJECT</button>
							<button>VIEW CODE</button>						
						</div>
					</div>
					<div className='projects__main--box' >
						<div className='projects__main--box--img elearnig' >
							
						</div>
						<h3>E-LEARNING LANDING PAGE</h3>
						<div className='projects__main--box--text' >
							<p>HTML</p>
							<p>CSS</p>
						</div>	
						<div className='projects__main--box--links'>
							<button>VIEW PROJECT</button>
							<button>VIEW CODE</button>						
						</div>
					</div>
					<div className='projects__main--box' >
						<div className='projects__main--box--img todo' >
						</div>
						<h3>TODO WEB APP</h3>
						<div className='projects__main--box--text' >
							<p>HTML</p>
							<p>CSS</p>
							<p>JAVASCRIPT</p>
						</div>	
						<div className='projects__main--box--links'>						
							<button>VIEW PROJECT</button>
							<button>VIEW CODE</button>
						</div>
					</div>
					<div className='projects__main--box' >
						<div className='projects__main--box--img entertainment' >
						</div>
						<h3>ENTERTAINMENT WEB APP</h3>
						<div className='projects__main--box--text' >
							<p>HTML</p>
							<p>CSS</p>
							<p>JAVASCRIPT</p>
						</div>	
						<div className='projects__main--box--links'>
							<button>VIEW PROJECT</button>
							<button>VIEW CODE</button>
						</div>
					</div>
					<div className='projects__main--box' >
						<div className='projects__main--box--img memory' >
						</div>
						<h3>MEMORY GAME</h3>
						<div className='projects__main--box--text' >
							<p>HTML</p>
							<p>CSS</p>
							<p>JAVASCRIPT</p>
						</div>	
						<div className='projects__main--box--links'>
							<button>VIEW PROJECT</button>
							<button>VIEW CODE</button>
						</div>
					</div>
					<div className='projects__main--box' >
						<div className='projects__main--box--img artgallery' >
						</div>
						<h3>ART GALLERY SHOWCASE</h3>
						<div className='projects__main--box--text' >
							<p>HTML</p>
							<p>CSS</p>
							<p>JAVASCRIPT</p>
						</div>	
						<div className='projects__main--box--links'>
							<button>VIEW PROJECT</button>
							<button>VIEW CODE</button>
						</div>
					</div>
				</div>
			</section>
			<section className="contact" >
				<div className='contact__form-group' >
					<h3>Contact</h3>
					<p>
					I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
					</p>
				</div>
				<form action="POST" method="post">
					<div className='contact__form-group' >
						<input type="text" placeholder='NAME' name='name' />
					</div>
					<div className='contact__form-group' >
						<input type="email" placeholder='EMAIL' name='email' />
					</div>
					<div className='contact__form-group' >
						<input type="text" placeholder='MESSAGE' name='message' />
					</div>
					<button type='submit' >
						SEND MESSAGE
					</button>
				</form>
			</section>
		</div>
	)
}
