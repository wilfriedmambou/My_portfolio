import React from 'react'
import service1 from '../../img/services/s1.png'
import service2 from '../../img/services/s2.png'
import service3 from '../../img/services/s3.png'
import service4 from '../../img/services/s4.png'

export default function index() {
    return (<section className="features_area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 text-center">
					<div className="main_title">
						<h2>service offers </h2>
						<p>
							Is give may shall likeness made yielding spirit a itself togeth created 
							after sea <br/> is in beast beginning signs open god you're gathering ithe
						</p>
					</div>
				</div>
			</div>
			<div className="row feature_inner">
				<div className="col-lg-3 col-md-6">
					<div className="feature_item">
						<img src={service1} alt=""/>
						<h4>Wp developing</h4>
						<p>Our web development service focuses on creating custom, responsive, and high-performance websites that meet the needs and expectations of our clients. We work closely with them to understand their vision, brand identity, and objectives. Our highly skilled team of web developers leverages powerful tools and cutting-edge technologies to develop bespoke projects using languages such as HTML5, CSS3, JavaScript, ReactJS, NodeJS, PHP, MySQL, MongoDB, WordPress, and more. We offer a wide variety of solutions, from a simple business website to a sophisticated e-commerce site. Our commitment to excellence, user experience, and client satisfaction is at the core of everything we do. We provide creative, state-of-the-art web solutions so that you can focus on growing your business.</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="feature_item">
						<img src={service2} alt=""/>
						<h4>UI/ux design</h4>
						<p>As a UX designer, I help businesses create products and services that are user-centered, intuitive, and visually appealing. My goal is to enhance the end-users' experience, increase customer satisfaction and loyalty, and drive business growth. I follow a human-centered design process, which means I focus on understanding the users' needs, behaviors, and emotions, as well as the client's goals and constraints. I use a variety of research methods, such as surveys, interviews, usability testing, and analytics, to gather insights and validate design decisions.</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="feature_item">
						<img src={service3} alt=""/>
						<h4>Web design</h4>
						<p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="feature_item">
						<img src={service4} alt=""/>
						<h4>seo optimize</h4>
						<p>I am an SEO expert who helps businesses improve their online visibility, organic traffic, and search engine rankings, using various on-page and off-page SEO techniques</p>
					</div>  </div>
			</div>
		</div>
	</section>
      
    )
}
