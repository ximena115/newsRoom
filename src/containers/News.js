import { connect } from "react-redux";
import NewsList from "../components/NewsList";

const mapStateToProps = (state) => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});

export default connect(mapStateToProps, null)(NewsList);
