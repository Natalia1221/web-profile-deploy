import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import supabase from "../config/supabaseClient";

const Pengurus = () => {
  const [fetchError, setFetchError] = useState(null);
  const [pengurus, setPengurus] = useState(null);

  const fetchEvent = async () => {
    const  dataPengurus = await supabase.from("pengurus_img").select("*");
    if (dataPengurus) {
      setPengurus(dataPengurus.data);
      setFetchError(null);
    }else{
      console.log(fetchError)
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);
  return (
    <>
      <div className="pengurus">
      <img className="gambar_pengurus" src ={!pengurus?"":pengurus[0].link}/>
      </div>
    </>
  );
};

export default Pengurus;