
const getServices = async () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      key: "9d397adbc3bfff3a19ddec7d121556d6",
      action: "services",
    }),
  };
  const response = await fetch(
    "https://easysmmpanel.com/api/v2",
    options
  );
  const data = await response.json();
  // console.log(data);
  return data;
}
let services = await getServices();
// console.log(services);
console.log(services);