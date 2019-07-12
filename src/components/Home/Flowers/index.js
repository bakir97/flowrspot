import Flowers from "./Flowers";
import { connect } from "react-redux";
import { getFlowers, addFavFlower } from "../../../redux/flowers/actions";
import { getFlowersState, isLoading } from "../../../redux/flowers/selectors";
import { getUser } from "../../../redux/user/selectors";
const mapStateToProps = state => ({
  flowers: getFlowersState(state),
  isLoading: isLoading(state),
  user: getUser(state)
});

const mapDispatchToProps = { getFlowers, addFavFlower };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flowers);
