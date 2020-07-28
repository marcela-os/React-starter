import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {FAQData} from '../../data/dataStore';
import styles from './FAQ.scss';

const FAQ = () => (
	<Container>
		<section className={styles.component}>
			<Hero titleText={FAQData.title} image={FAQData.image} />
			<div className={styles.description}>
				{FAQData.description}
			</div>
		</section>
	</Container>
);

export default FAQ;
