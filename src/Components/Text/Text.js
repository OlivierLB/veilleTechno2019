import {connect} from "react-redux";
import Text from './Text.jsx';
import {addIndex} from "../../redux/actions/Header";

const mapStateToProps = (state) => {
    return {
        texte : "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIndex: (value) => dispatch(addIndex(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Text);