import Flowers from "./Flowers";
import { connect } from "react-redux";
import { getFlowers } from "../../../redux/flowers/actions";
import { getFlowersState, isLoading } from "../../../redux/flowers/selectors";
const mapStateToProps = state => ({
  flowers: getFlowersState(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = { getFlowers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flowers);
