import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {InfoData} from '../../data/dataStore';
import styles from './Info.scss';

const Info = () => (
	<Container>
		<section className={styles.component}>
			<Hero titleText={InfoData.title} image={InfoData.image} />
			<div>
				{InfoData.description}
			</div>
		</section>
	</Container>
);

export default Info;
