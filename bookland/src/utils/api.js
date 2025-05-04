import axios from 'axios';

// Base URL for API
const API_BASE_URL = 'http://localhost:5000/api';
const GOOGLE_BOOKS_BASE = 'https://www.googleapis.com/books/v1/volumes';
const authHeader = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };

//Admin All crud 
// Admin User management
export const fetchUsers    = () => axios.get(`${API_BASE_URL}/admin/users`, {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
}).then(r => r.data);

export const fetchUserById = (id) => axios.get(`${API_BASE_URL}/admin/users/${id}`, {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
}).then(r => r.data);

export const adminUpdateUser = (id, payload) => axios.put(
  `${API_BASE_URL}/admin/users/${id}`,
  payload,
  { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
).then(r => r.data);

export const adminDeleteUser = (id) => axios.delete(
  `${API_BASE_URL}/admin/users/${id}`,
  { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
).then(r => r.data);


//Admin crud content
export const fetchContent = () =>
  axios
    .get(`${API_BASE_URL}/admin/content`, authHeader)
    .then(r => r.data);

export const createContent = (payload) =>
  axios
    .post(`${API_BASE_URL}/admin/content`, payload, authHeader)
    .then(r => r.data);

export const updateContent = (id, payload) =>
  axios
    .put(`${API_BASE_URL}/admin/content/${id}`, payload, authHeader)
    .then(r => r.data);

export const deleteContent = (id) =>
  axios
    .delete(`${API_BASE_URL}/admin/content/${id}`, authHeader)
    .then(r => r.data);

// Auth API
export const loginUser = async (email, password) => {
 
    const response = await axios.post(`${API_BASE_URL}/users/login`, {
      email,
      password,
    });
    return response.data; // Return the response data

};

export const registerUser = async (name, email, password) => {

    const response = await axios.post(`${API_BASE_URL}/users/signup`, {
      name,
      email,
      password,
    });
    return response.data;
};

export const deleteUser = async (userId, token) => {
  const response = await axios.delete(`${API_BASE_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Search Items API New: Generic search endpoint
export const searchItems = async (q) => {
  const { data } = await axios.get(`${API_BASE_URL}/search`, { params:{q} });
  return data;
};

// Search by keyword
export const fetchBooksFromGoogle = async (query) => {
  const { data } = await axios.get(GOOGLE_BOOKS_BASE, {
    params: { q: query, maxResults: 40 },
  });
  // fetched book data
  return data.items.map((item) => ({
    id:          item.id,
    title:       item.volumeInfo.title,
    author:      (item.volumeInfo.authors || []).join(', '),
    year:        item.volumeInfo.publishedDate?.slice(0,4) || 'N/A',
    category:    (item.volumeInfo.categories || [])[0] || 'Uncategorized',
    description: item.volumeInfo.description || 'No description.',
    imageUrl:    item.volumeInfo.imageLinks?.thumbnail 
                  || 'https://via.placeholder.com/128x192',
  }));
};

// Fetch one book by its Google ID
export const fetchBookDetailFromGoogle = async (id) => {
  const { data } = await axios.get(`${GOOGLE_BOOKS_BASE}/${id}`);
  const v = data.volumeInfo;
  return {
    id:          data.id,
    title:       v.title,
    author:      (v.authors || []).join(', '),
    year:        v.publishedDate?.slice(0,4) || 'N/A',
    category:    (v.categories || [])[0] || 'Uncategorized',
    description: v.description || 'No description.',
    imageUrl:    v.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192',
  };
};

// ...existing imports.. Saved‐Content API
export const fetchSaved = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/users/me/saved`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return data;
  };
  
  export const addSaved = async (item) => {
    const { data } = await axios.post(
      `${API_BASE_URL}/users/me/saved`,
      item,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
    );
    return data;
  };
  
  export const removeSaved = async (savedId) => {
    const { data } = await axios.delete(
      `${API_BASE_URL}/users/me/saved/${savedId}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
    );
    return data;
  };
  


 
  export const fetchNews = async (query = 'psychology') => {
    const { data } = await axios.get(`${API_BASE_URL}/news`, {
     // ← make sure this logs your key
    params: { q: query }
   });
    return data;    
  };

  export const sendContact = async ({ name, email, message }) => {
    const { data } = await axios.post(`${API_BASE_URL}/contact`, { name, email, message });
  return data;
};
// Default Export
const API = {
  loginUser,
  registerUser,
  deleteUser,
  searchItems,
  fetchBooksFromGoogle,
  fetchBookDetailFromGoogle,
  fetchSaved,
  addSaved,
  removeSaved,
  fetchNews,
  fetchUsers,
  fetchUserById,
  adminUpdateUser ,
  adminDeleteUser,
  sendContact,

};

export default API;
