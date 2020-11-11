import React from "react";
import "../styles.css";

const NewsList = ({ news, hasError, isLoading }) => {
  if (hasError) {
    return (
      <div className="alert alert-primary" role="alert">
        Error al buscar las noticias.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="alert alert-primary" role="alert">
        cargando...
      </div>
    );
  }

  return (
    <div className="newsContainer">
      <div className="album py-5  ">
        <div className="container-fluid ">
          <div className="row justify-content-center">
            {news.map((objectNew) => (
              <div
                className="card mb-4 shadow rounded-sm p-3 mb-2 bg-dark text-white"
                key={objectNew.news_id}
              >
                <img
                  src={objectNew.img_url}
                  className="card-img-top img-fluid"
                  alt={objectNew.title}
                />
                <div className="card-body"></div>
                <h5 className="card-title">{objectNew.title}</h5>
                <div className="card-body d-flex justify-content-between align-items-center ">
                  <small className=" text-info ">{objectNew.source_name}</small>
                  <div className="btn-group">
                    <div
                      className="btn btn-outline-info "
                      onClick={() => window.open(objectNew.url)}
                    >
                      Ver más
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
