import axios from "axios";

const API_BASE_URL = "http://192.168.3.15:33333";  // PC 로컬 IP, Expo에서 접근 가능해야 함

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts`);
    return response.data;
  } catch (error) {
    console.error("getAllPosts error:", error);
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/posts`, postData);
    return response.data;
  } catch (error) {
    console.error("createPost error:", error);
    throw error;
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts/${postId}`);
    return response.data;  // postDTO 데이터가 올 것
  } catch (error) {
    console.error("getPostById error:", error);
    throw error;
  }
};
export const getPostsByAuthor = async (author) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts/search`, {
      params: { author },
    });
    return response.data;
  } catch (error) {
    console.error("getPostsByAuthor error:", error);
    throw error;
  }
};

