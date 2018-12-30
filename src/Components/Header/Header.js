import {connect} from "react-redux";
import Header from './Header.jsx';
import {getIndex} from "../../redux/reducers/Header";

const mapStateToProps = (state) => {
    return {
        activeIndex : getIndex(state)
    }
}

export default connect(mapStateToProps) (Header);