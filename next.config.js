/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    URL_GET_ALL_POST: "https://go-cms-api.herokuapp.com/article/all",
    URL_GET_DETAIL_POST: "https://go-cms-api.herokuapp.com/article"
  }
}
