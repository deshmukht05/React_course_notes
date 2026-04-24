import { useEffect, useState } from "react";
import faq from "../api/faq.json";
import { Content } from "./Content";
import { FAQ } from "./UI/FAQ";

export const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  const handleButton = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  return (
    <>
      <h1>ReactJS Notes</h1>
      <ul className="section-accordion">
        {data.map((curEle) => {
          return (
            <FAQ
              key={curEle.id}
              curData={curEle}
              isActive={activeId === curEle.id}
              onToggle={() => handleButton(curEle.id)}
            />
          );
        })}
      </ul>
    </>
  );
};
