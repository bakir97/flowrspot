import Modal from "./Modal";
import { connect } from "react-redux";
import { getModalType } from "../../redux/modal/selectors";
import { closeModal } from "../../redux/modal/actions";
const mapStateToProps = state => ({
  modalType: getModalType(state)
});

const mapDispatchToProps = {
  closeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
