import axios from 'axios';

import { getAllUsers, getByStatus, sortBy } from "./usersApi"

const baseUrl = "http://localhost:3001/users"

jest.mock('axios');

beforeEach(() => jest.clearAllMocks());

test('should get all users from API', async () => {
  await getAllUsers();
  expect(axios.get).toHaveBeenCalledWith(baseUrl);
});

test('should get users by status from API', async () => {
  const url = `${baseUrl}?status=active`
  await getByStatus("active");
  expect(axios.get).toHaveBeenCalledWith(url);
});

test('should get users by filter from API', async () => {
  const url = `${baseUrl}?_sort=firstName&_order=asc`
  await sortBy("firstName");
  expect(axios.get).toHaveBeenCalledWith(url);
});