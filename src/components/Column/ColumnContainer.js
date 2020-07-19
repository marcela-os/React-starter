import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux.js';

//export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId); //aby funkcja zadziałała, musimy jej użyć w mapStateToProps

const mapStateToProps = (state, props) => ({
	cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({  //funkcja mapDispatchToProps to funkcja, która nadaje komponentowi propsy, w których znajdą się funkcje wysyłające akcje do magazynu
	addCard: title => dispatch(createActionAddCard({
		columnId: props.id,
		title,
	})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
