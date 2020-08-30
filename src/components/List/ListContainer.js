import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js';

const mapStateToProps = (state, props) => {
	const id = props.match.params.id;
	const filteredLists = state.lists.filter(list => list.id == id);
	const listParams = filteredLists[0] || {};

	return {
		...listParams,
		columns: getColumnsForList(state, id),
	};
};

const mapDispatchToProps = (dispatch, props) => ({  //funkcja mapDispatchToProps to funkcja, która nadaje komponentowi propsy, w których znajdą się funkcje wysyłające akcje do magazynu
	addColumn: title => dispatch(createActionAddColumn({
		listId: props.match.params.id,
		title,
	})),
});

// dispatch - funkcja, której zadaniem jest wysyłanie akcji – dispatcher

export default connect(mapStateToProps, mapDispatchToProps)(List);
