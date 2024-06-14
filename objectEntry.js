const myDatiles = {
  name: "BAHADOR",
  phone: 7787878,
  mobile: 676766,
  address: true,
};
//console.log(myDatiles);

console.log(Object.entries(myDatiles));

for (let [key, value] of Object.entries(myDatiles)) {
  if (key === "mobile") {
    let addN = value.toString().charAt(1);
    console.log(addN);
    addN = "000";

    console.log(addN);
  }
  console.log(value);
}
