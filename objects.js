const code1 = "ACME:123-L";

let parse = (str) => {
  let colon = str.indexOf(":");
  let dash = str.indexOf("-");

  console.log(colon, dash);
  let code = {
    supplierCode: str.substring(0, colon),
    productNumber: str.substring(colon + 1, dash),
    size: str.substring(dash + 1),
  };
  return code;
};

console.log(parse(code1));
