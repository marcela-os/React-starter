import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container';
import styles from './SearchResults.scss';

class SearchResults extends React.Component {
	static propTypes = {
		cards: PropTypes.array,
	}

	render() {
		const {cards} = this.props;
		return (
			<Container>
				<section className={styles.component}>
					<div>
						{cards.map(cardData => (
							<Card key={cardData.id} {...cardData} />
						))}
					</div>
				</section>
			</Container>
		);
	}
}

export default SearchResults;
