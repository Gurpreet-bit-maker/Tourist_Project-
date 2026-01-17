// function ProductTab({ title, price, item }) {
//     let isDiscount = price > 3000;
//     let styles = {color: isDiscount ? "red" : ""};
//   return (
//     <div className="Product" style={styles}>
//       <h2>{title}</h2>
//       <p>{price}</p>
//       {isDiscount ? <p>discount is 5%</p> : null} //* not this line
//       <p>
//         {item.map((f) => (
//           <li>{f}</li>
//         ))}
//       </p>
//     </div>
//   );
// }

// export default ProductTab;

import Price from "./Price.jsx";
export default function ProductTab({ idx }) {
  let oldp = ["12,455", "11,900", "1590"];
  let newp = ["8,999", "9,999", "899"];
  let tit = ["Apple Pen", "Zebronic Keyboard", "Neckband"];
  let dec = [
    ["faster", "fated"],
    ["durable", "noted"],
    ["smooth", "harderd"],
  ];
  return (
    <div className="Product">
      <h3>{tit[idx]}</h3>
      <h5>{dec[idx][0]}</h5>
      <h5>{dec[idx][1]}</h5>
      <Price price={`$${newp[idx]}`} oldprice={`$${oldp[idx]}`} />
    </div>
  );
}
