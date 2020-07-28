import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {InfoData} from '../../data/dataStore';

const Info = () => (
	<Container>
		<section>
			<Hero titleText={InfoData.title} image={InfoData.image} />
			<div>
				{InfoData.description}
			</div>
		</section>
	</Container>
);

export default Info;
