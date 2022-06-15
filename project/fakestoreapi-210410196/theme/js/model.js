import { API_URL, TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(` "fakestoreapi.com" 請求時間過長，${s}秒...`));
    }, s * 1000);
  });
};

export const loadAllResults = async function () {
  try {
    const res = await Promise.race(
      [fetch(`${API_URL}/products`)],
      timeout(TIMEOUT_SEC)
    );
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error('This loadAllResults Error');
  }
};

export const loadSearchProductResults = async function (query) {
  try {
    const res = await Promise.race([
      fetch(`${API_URL}/products/category/${query}`),
      timeout(TIMEOUT_SEC),
    ]);
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error('This loadSearchProductResults Error');
  }
};

export const loadUsers = async function () {
  try {
    const res = await Promise.race([
      fetch(`${API_URL}/users`),
      timeout(TIMEOUT_SEC),
    ]);
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error('This loadUsers Error');
  }
};
