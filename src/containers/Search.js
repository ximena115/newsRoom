import { connect } from "react-redux";
import { getNews, clearNews, lastesNews, byCategory } from "../actions";
import Header from "../components/Header";

const mapDispatchToProps = (dispatch) => ({
  onGet: (input) => dispatch(getNews(input)),
  onClear: () => dispatch(clearNews()),
  onHome: () => dispatch(lastesNews()),
  onCategory: (div) => dispatch(byCategory(div))
});

export default connect(null, mapDispatchToProps)(Header);
