import React from 'react'
import AboutUs from '../Intro/about-us.png'
import WilPP from '../Intro/wil.png'

export default function index() {
    return ( <>

<section className="home_banner_area" id='about'>
		<div className="banner_inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="banner_content">
							<h3 className="text-uppercase">Hell0</h3>
							<h1 className="text-uppercase">I am wilfried Mambou</h1>
							<h5 className="text-uppercase">senior Fullstack developer</h5>
							<div className="d-flex align-items-center">
								<a className="primary_btn" href="https://www.linkedin.com/in/wilfried-mambou/"><span>Hire Me</span></a>
								<a className="primary_btn tr-bg" href="/R_N_C_EN_Mambou_wilfried.pdf" download="R_N_C_EN_Mambou_wilfried.pdf"><span>Get CV</span></a>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="home_right_img">
							<img className="" src={WilPP} alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        <div className="about_area section_gap" id="about">
		<div className="container">
			<div className="row justify-content-start align-items-center">
				<div className="col-lg-5">
					<div className="about_img">
						<img className="" src={AboutUs} alt=""/>
					</div>
				</div>
             

				<div className="offset-lg-1 col-lg-5">
					<div className="main_title text-left">
						<h2>let’s <br/>
							Introduce about <br/>
							myself</h2>
						<p>
						Hello, my name is Wilfried Mambou and I'm delighted to welcome you to my website! I'm a passionate software engineer, with a Master's degree in software engineering from the Protestant University of Central Africa. I'm proud to say that I've been a mentor at OpenClassrooms since 2020, where I've helped several hundred developers to acquire programming skills.

						</p>
						<p>
						Since I started working in the development industry, I have constantly sought to learn new skills and improve my programming abilities. As a full-stack developer, I have extensive experience in technologies such as ReactJS, NodeJS, Express, and MongoDB, which I frequently use to develop modern and scalable web applications. I love DevOps CI/CD, automating builds, testing, and deployments to streamline and enhance development workflows..

						</p>

						<p>
						I believe that web development is a constantly evolving field, and I'm constantly trying to stay informed about the latest technological developments and market trends. I'm also passionate about values such as honesty, respect, and integrity, and I strive to embody these in every aspect of my work. My ultimate goal is to provide high-quality services to all my clients, and contribute to the success of their development projects.

						</p>
						<p>
						I'm happy to offer my skills to you, providing customized solutions to meet all your web development needs. Feel free to contact me to discuss your project!

						</p>
						<a className="primary_btn" href="/R_N_C_EN_Mambou_wilfried.pdf" download="R_N_C_EN_Mambou_wilfried.pdf"><span>Download CV</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
    )
}








