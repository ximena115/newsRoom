export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  hasErrored: bool
});

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool
});

export const loadingSuccess = (news) => ({
  type: "LOADING_SUCCESS",
  news
});

export const clearNews = () => ({
  type: "CLEAR_NEWS"
});

export const getNews = (username) => {
  return (dispatch) => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));
    console.log(username);
    fetch(`https://api.canillitapp.com/search/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((news) => {
        const result = news.slice(0, 10);
        dispatch(loadingSuccess(result));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const lastesNews = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return (dispatch) => {
    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/latest/${year}-${month}-${day}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((news) => {
        const result = news.slice(0, 10);
        dispatch(loadingSuccess(result));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const byCategory = (category) => {
  return (dispatch) => {
    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/news/category/${category}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((news) => {
        const result = news.slice(0, 9);
        dispatch(loadingSuccess(result));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};
