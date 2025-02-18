export default function getProductUser() {
  fetch(`${process.env.REACT_APP_SERVER_URL}/getuserproduct`, {
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
