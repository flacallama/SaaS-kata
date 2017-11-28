import axios from 'axios';

export const getCatfish = () => {
  // console.log("action: getCatfish was dispatched");
  return {
    type: "GET_CATFISH",
    payload: axios.get(`https://868r1t0.restletmocks.net/catfish`)
  }
}
