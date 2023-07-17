import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PenelitianPicture from '../assets/image/penelitian.svg';
import PendidikanPicture from '../assets/image/pendidikan.svg';
import AbdimasPicture from '../assets/image/Abdimas.svg';
import {CardAbdimas, CardPendidikan, CardPenelitian, CardKegiatan} from '../component/CardLayanan'
import $ from 'jquery';
import supabase from "../config/supabaseClient";

const Kegiatan = () => {
  const [fetchError, setFetchError] = useState(null);
  const [bidang, setBidang] = useState(null);
  const [kegiatan, setKegiatan] = useState();
  const [loading, setLoading] = useState(true)

  const kegiatanFilter = (bidangIndex) => {
      console.log(loading)
      const kegiatanArray = kegiatan.filter((one_kegiatan)=>{
        return one_kegiatan.id_bidang === bidang[bidangIndex].id
      })

      return <CardKegiatan kegiatanArray={kegiatanArray}/>
    
  }
  useEffect(() => {
    const fetchEvent = async () => {
      const  dataBidang = await supabase.from("bidang").select("*").order('created_at', { ascending: true });
      if (dataBidang) {
        setBidang(dataBidang.data);
        setFetchError(null);
      }

      const  dataKegiatan = await supabase.from("kegiatan").select("*").order('name', { ascending: true });
      if (dataKegiatan) {
        setKegiatan(dataKegiatan.data);
        setFetchError(null);
      }else{
        console.log(fetchError)
      }
    };

    fetchEvent()
    .then(()=>setLoading(false))
    
  }, []);

  return (
    <div className="kegiatan">
      <div className="box_kegiatan" id="pendidikan">
        <img className="gambar_kegiatan" src={PendidikanPicture}/>
        <div className="judul_kegiatan">
          <h2 id="white_title">Bidang Pendidikan dan Pengajaran</h2>
          <button className="toggle" onClick={()=>$('#target2').toggle('slow')}>&#x25BC;</button>
        </div>
        <div id="target2">
        {loading?(<>Loading...</>)
        :(kegiatanFilter(0)
        )}
        </div>
      </div>

      <div className="box_kegiatan" id="penelitian">
        <img className="gambar_kegiatan" src={PenelitianPicture}/>
        <div className="judul_kegiatan">
          <h2>Bidang Penelitian</h2>
          <button className="toggle" onClick={()=>$('#target').toggle('slow')}>&#x25BC;</button>
        </div>
        <div id="target">
        {loading?(<>Loading...</>)
        :(kegiatanFilter(1)
        )}
        </div>
      </div>

      <div className="box_kegiatan" id="admas">
        <img className="gambar_kegiatan" src={AbdimasPicture}/>
        <div className="judul_kegiatan">
          <h2 id="white_title">Bidang Pengabdian kepada Masyarakat (Abmas)</h2>
          <button className="toggle" onClick={()=>$('#target3').toggle('slow')}>&#x25BC;</button>
        </div>
        <div id="target3">
        {loading?(<>Loading...</>)
        :(kegiatanFilter(2)
        )}
        </div>
      </div>
    </div>
  
    
  );

};

export default Kegiatan;