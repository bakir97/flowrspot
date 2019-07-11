import Header from "./Header";
import { connect } from "react-redux";
import { openModal } from "../../redux/modal/actions";
import { getModalType } from "../../redux/modal/selectors";
const mapStateToProps = state => ({
  modal: getModalType(state)
});

const mapDispatchToProps = {
  openModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
