import axios from "axios"

const baseUrl = "http://localhost:3001/users"

export const getAllUsers = async () => {
  return await axios.get(baseUrl)
}

export const getByStatus = async (status) => {
  const url = `${baseUrl}?status=${status}`
  return await axios.get(url)
}

export const sortBy = async (filter) => {
  const url = `${baseUrl}?_sort=${filter}&_order=asc`
  return await axios.get(url)
}
