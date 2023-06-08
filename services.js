
const getServices = async () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      key: "pYniZBZci6DcIkye31Eyjy5Sz2wgBvJ7",
      action: "services",
    }),
  };
  const response = await fetch(
    "https://app.ad4tube.com/api/v2",
    options
  );
  const data = await response.json();
  // console.log(data);
  return data;
}
let services = await getServices();
// console.log(services);
console.log(services);