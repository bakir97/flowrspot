import SignIn from "./SignIn";
import { connect } from "react-redux";
import { registerUser, loginUser, logout } from "../../redux/user/action";
import {
  isUserLoading,
  isUserSuccess,
  getErrors,
  getUser
} from "../../redux/user/selectors";
import { getModalType } from "../../redux/modal/selectors";
import { openModal, closeModal } from "../../redux/modal/actions";
import { errorUser } from "../../redux/user/action";
const mapStateToProps = state => ({
  loading: isUserLoading(state),
  isUserSuccess: isUserSuccess(state),
  modalType: getModalType(state),
  errors: getErrors(state),
  user: getUser(state)
});

const mapDispatchToProps = {
  registerUser,
  openModal,
  errorUser,
  loginUser,
  closeModal,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
