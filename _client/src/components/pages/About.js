import React from 'react';

const About = () => {
	return (
		<section className='about'>
			<div className='container'>
				<h2>ABOUT MONGOGIN</h2>
				<p className='mb-4'>
					<small>
						<strong>Version: </strong> 1.0.0
					</small>
				</p>
				<div className='w-50-text'>
					<p>
						MongoGin login system is powered by React JS, Redux, Node,
						Express and MongoDB database. MongoGin is MongoDB + Login,
						it's not a drink combo like C2Gin.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
