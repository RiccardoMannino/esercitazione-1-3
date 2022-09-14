import { useState } from "react";

export function Api() {
  const [data, setData] = useState([]);

  async function getDati() {
    const fetchDati = await fetch(
      "https://comuni-istat-api.herokuapp.com/api/comuni/codici"
    );
    const result = await fetchDati.json();

    setData(Object.entries(result));
  }
  getDati();

  console.log(data);

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
