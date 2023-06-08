import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import gambarPengurus from "../assets/image/pengurus.jpg"
const Pengurus = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/642edc16c0e7653a059f0111", {
      headers: {
        "X-ACCESS-KEY": "$2b$10$yySJNemZxy5owr6fRQU62Ovqd/PLHW7.kg3KToeIMK5tCRqX398X."
      }
    })
    .then((response) => response.json())
    .then((json) => setDatas(json))
    .then(()=>setLoading(false))
  }, []);
  return (
    <>
      <div className="pengurus">
      <img className="gambar_pengurus" src ={gambarPengurus}/>
      </div>
    </>
  );
};

export default Pengurus;