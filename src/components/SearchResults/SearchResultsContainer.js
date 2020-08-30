import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsBySearchResults} from '../../redux/cardsRedux';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
	searchResultts: getCardsBySearchResults(state),
});

const mapDispatchToProps = (dispatch) => ({
	changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
