import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

class Menu extends React.Component {
  componentDidMount() {
    this.props.onHome();
  }

  render() {
    const { onHome, onCategory } = this.props;

    return (
      <div className="menuConatiner">
        <ul className="nav nav-pills nav-fill ">
          <Link to="/">
            <li className="nav-item">
              <div className="nav-link text-info " onClick={() => onHome()}>
                Inicio
              </div>
            </li>
          </Link>
          <Link to="/Politica">
            <li className="nav-item">
              <div
                className="nav-link text-info "
                onClick={() => onCategory(1)}
              >
                Política
              </div>
            </li>
          </Link>
          <Link to="/Internacionales">
            <li className="nav-item">
              <div
                className="nav-link text-info "
                onClick={() => onCategory(2)}
              >
                Internacionales
              </div>
            </li>
          </Link>
          <Link to="/Tecnologia">
            <li className="nav-item">
              <div className="nav-link text-info" onClick={() => onCategory(3)}>
                Tecnología
              </div>
            </li>
          </Link>
          <Link to="/Espectaculos">
            <li className="nav-item">
              <div className="nav-link text-info" onClick={() => onCategory(4)}>
                Espectáculos
              </div>
            </li>
          </Link>
          <Link to="/Deportes">
            <li className="nav-item">
              <div className="nav-link text-info" onClick={() => onCategory(5)}>
                Deportes
              </div>
            </li>
          </Link>
          <Link to="/Diseno">
            <li className="nav-item">
              <div className="nav-link text-info" onClick={() => onCategory(6)}>
                Diseño
              </div>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Menu;
