import http  from "../../common/http"

const prefix = "merchants/";
export const REQUEST_ITEMS = prefix + 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = prefix + 'RECEIVE_ITEMS';

function requestPosts(subreddit) {
  return {
    type: REQUEST_ITEMS
  }
}
function receivePosts(data) {
  return {
    type: RECEIVE_ITEMS,
    ...data
  }
}

export function fetchPosts(params) {

  return function (dispatch) {
    dispatch(requestPosts());
    return http.postWithConvert("", params)
      .then(response => {
        if (response.status == 0) {
          dispatch(receivePosts(response.data));
        }else {
          throw data.message;
        }
      })
      .catch(error => {
        console.log("error", error);
      });
     
  }
}
