const prod = {
  API_URL: "/api",
}

const dev = {
  API_URL: "http://localhost:8080",
}

export default prod;
//export default process.env.NODE_ENV === "production" ? prod : dev;