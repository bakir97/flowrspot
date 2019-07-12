import Header from "./Header";
import { connect } from "react-redux";
import { openModal } from "../../redux/modal/actions";
import { getModalType } from "../../redux/modal/selectors";
import { getUser } from "../../redux/user/selectors";
const mapStateToProps = state => ({
  modal: getModalType(state),
  user: getUser(state)
});

const mapDispatchToProps = {
  openModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
