import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId); //aby funkcja zadziałała, musimy jej użyć w mapStateToProps

const mapStateToProps = (state, props) => ({
	cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);
