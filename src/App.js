import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [numbers, setNumber] = useState([]);
  const isPrime = (num) => {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    return prime;
  };
  useEffect(() => {
    let arr = [];
    for (let i = 0; i <= 31; i++) {
      let obj = {
        number: i
      };
      if (isPrime(i) && i >= 2) {
        obj.color = "red";
      } else if (i % 2 === 0) {
        obj.color = "green";
      } else {
        obj.color = "yellow";
      }
      arr.push(obj);
    }
    setNumber(arr);
  }, []);

  return (
    <div className="App">
      {numbers.map((item) => {
        return (
          <div
            className="item"
            style={{ background: item.color }}
            key={item.number}
          >
            {item?.number}
          </div>
        );
      })}
    </div>
  );
}
