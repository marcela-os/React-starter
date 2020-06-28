import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';

class List extends React.Component {
	static propTypes = {
		title: PropTypes.node.isRequired,
		children: PropTypes.node,
		text: PropTypes.node,
	}
	static defaultProps = {
  children: <p>I can do all the things!!!</p>,
	}
	render() {
    return (
      <section className={styles.component}>
				<Hero titleText={this.props.title} imgHero={this.props.text}/>
				<div className={styles.description}>
  				{this.props.children}
				</div>
				<div className={styles.columns}>
				<Column title='Things' />
				<Column title='Thoughts' />
				<Column title='Ideas' />
				</div>
      </section>
    )
  }
}

export default List;
