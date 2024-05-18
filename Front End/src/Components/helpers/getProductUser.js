export default function getProductUser() {
  fetch("http://localhost:5000/getuserproduct", {
    method: "GET",
    headers: {
      Accept: "application/form-data",
      "auth-token": `${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data.data;
    });
}
