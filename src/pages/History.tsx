import React from "react";
import { useAppSelector } from "../hooks/hooks";

const History = () => {
  const requests = useAppSelector((state) => state.requestsReducer);
  const history = requests.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <section>
      <h2>История запросов:</h2>
      <div>{history}</div>
    </section>
  );
};

export default History;
