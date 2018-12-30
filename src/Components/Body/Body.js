import {connect} from "react-redux";
import Body from './Body.jsx';
import {getIndex} from "../../redux/reducers/Header";

const mapStateToProps = (state) => {
    return {
        activeIndex : getIndex(state)
    }
}

export default connect(mapStateToProps) (Body);