import axios from "axios";

const API = "http://localhost:3000/api/favorites";

export const getFavorites = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const addFavorite = async (card) => {
  const token = localStorage.getItem("token");

  await axios.post(API, card, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteFavorite = async (id) => {
  const token = localStorage.getItem("token");

  await axios.delete(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};