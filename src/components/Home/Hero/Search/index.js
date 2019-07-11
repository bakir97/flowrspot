import Search from "./Search";
import { connect } from "react-redux";
import { searchFlowers } from "../../../../redux/flowers/actions";
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  searchFlowers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
