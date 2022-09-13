import { useEffect, useState } from "react";

export function Api() {
  const [data, setData] = useState({});

  async function getDati() {
    const fetchDati = await fetch(
      "https://comuni-istat-api.herokuapp.com/api/comuni/codici"
    );
    const result = await fetchDati.json();

    console.log(result);

    setData(result);
  }

  useEffect(() => {
    getDati();
  }, [data]);

  console.log(data);
  console.log("ciao");

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={item + index}>{item} </li>
        ))}
      </ul>
    </div>
  );
}
