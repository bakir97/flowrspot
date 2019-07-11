import CreateAccount from "./CreateAccount";
import { connect } from "react-redux";
import { registerUser } from "../../redux/user/action";
import {
  isUserLoading,
  isUserSuccess,
  getErrors
} from "../../redux/user/selectors";
import { getModalType } from "../../redux/modal/selectors";
import { openModal } from "../../redux/modal/actions";
import { errorUser } from "../../redux/user/action";
const mapStateToProps = state => ({
  loading: isUserLoading(state),
  user: isUserSuccess(state),
  modalType: getModalType(state),
  errors: getErrors(state)
});

const mapDispatchToProps = {
  registerUser,
  openModal,
  errorUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount);
