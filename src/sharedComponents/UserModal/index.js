import UserModal from "./UserModal";
import { connect } from "react-redux";
import { registerUser, loginUser, logout } from "../../redux/user/actions";
import {
  isUserLoading,
  isUserSuccess,
  getErrors,
  getUser
} from "../../redux/user/selectors";
import { getModalType } from "../../redux/modal/selectors";
import { openModal, closeModal } from "../../redux/modal/actions";
import { errorUser } from "../../redux/user/actions";
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
)(UserModal);
