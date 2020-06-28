import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
		<img src={props.imgHero} className={styles.image}></img>
  </header>
);
Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
};
export default Hero;
