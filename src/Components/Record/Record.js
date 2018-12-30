import {connect} from "react-redux";
import Record from './Record.jsx';
import {addIndex} from "../../redux/actions/Header";

const mapDispatchToProps = (dispatch) => {
    return {
        addIndex: (value) => dispatch(addIndex(value))
    }
}

export default connect(undefined, mapDispatchToProps) (Record);