import {connect} from "react-redux";
import Traduction from './Traduction.jsx';
import {addIndex} from "../../redux/actions/Header";

const mapStateToProps = (state) => {
    return {
        texte : "bbbbbbbbbbbbbbbbbbbbbbb"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIndex: (value) => dispatch(addIndex(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Traduction);