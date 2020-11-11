import React from "react";
import Menu from "./Menu";
import Store from "../store";
import "../styles.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: props.news
    };
    this.newsChanges = this.newsChanges.bind(this);
  }

  componentDidMount() {
    this.unsuscribe = Store.subscribe(this.newsChanges);
  }

  newsChanges() {
    const updated = Store.getState();
    this.setState({ news: updated });
  }

  componentWillUnmount() {
    this.unsuscribe();
  }

  render() {
    let input;
    const { onGet, onClear, onHome, onCategory } = this.props;

    return (
      <div className="jumbotron bg-dark text-white jumbotron-fluid">
        <div className="container inputContainer">
          <h1 className="display-4">News Room</h1>
          <form className="form-inline">
            <input
              type="text"
              className="form-control mr-sm-2 bg-dark text-white"
              placeholder="Palabra clave"
              aria-label="Search"
              aria-describedby="basic-addon1"
              ref={(node) => (input = node)}
              onKeyPress={(event) => {
                if (event.key === "Enter" && input.value) {
                  onGet(input.value);
                }
              }}
            />
            <button
              className="btn btn-outline-info "
              type="button"
              onClick={() => onGet(input.value)}
            >
              Buscar
            </button>
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => {
                onClear();
                onHome();
              }}
            >
              Nueva busqueda
            </button>
          </form>
        </div>
        <Menu onHome={onHome} onCategory={onCategory} />
      </div>
    );
  }
}

export default Header;
