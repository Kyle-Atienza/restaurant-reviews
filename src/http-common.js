import axios from "axios";

export default axios.create({
  baseURL:
    "https://restaurant-reviews-back-end.herokuapp.com/api/v1/restaurants",
  headers: {
    "Content-type": "application/json",
  },
});
