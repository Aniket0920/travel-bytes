import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

const URL =
  "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary";

const options = {
  params: {
    tr_longitude: "109.149359",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    bl_latitude: "11.847676",
  },
  headers: {
    "x-rapidapi-key": "58fb62fe4emsh3a5137f87a492bcp16ff71jsn436288b51385",
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signin = (formData) => API.post("/users/signin", formData);
export const signup = (formData) => API.post("/users/signup", formData);
