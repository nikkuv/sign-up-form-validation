export const signUp = (data) => {
  // console.log(data);
  return fetch("https://api.deepsync.co/api/v1/website/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};
