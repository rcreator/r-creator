import axios from "axios";

const instance = axios.create({
  baseURL: "https://rcreator2811.herokuapp.com/",
});

export default instance;
