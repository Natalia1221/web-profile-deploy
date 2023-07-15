import '../assets/Profile.css';
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainPicture from '../assets/image/main-picture.svg';
import VisiPicture from '../assets/image/visi.svg';
import MisiPicture from '../assets/image/misi.svg';
import supabase from "../config/supabaseClient";

const VisiMisi = () => {
  const [jumlah, setJumlah] = useState(null);
  const [visi, setVisi] = useState();
  const [misi, setMisi] = useState();
  const [tujuan, setTujuan] = useState();
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      const  dataJlh = await supabase.from("jumlah").select("*");
      if (dataJlh) {
        setJumlah(dataJlh.data[0]);
      }

      const  dataVisi = await supabase.from("visi").select("*");
      if (dataVisi) {
        setVisi(dataVisi.data[0]);
      }

      const  dataMisi = await supabase.from("misi").select("*").order('created_at', { ascending: true });
      if (dataMisi) {
        setMisi(dataMisi.data)
        console.log(misi)
      }

      const  dataTujuan = await supabase.from("tujuan").select("*").order('created_at', { ascending: true });
      if (dataTujuan) {
        setTujuan(dataTujuan.data)
      }
    };

    fetchEvent()
    .then(()=>setLoading(false));
  }, []);

  
  return (
    <>
        <section className="Jumbotron">
          <img className="gambar_beranda" src={MainPicture}/>
          
          <div className="description">
            <h2>Laboratorium Informatika</h2>
            <h2 id="colored">UPN "Veteran" Jawa Timur</h2>
            <p>Laboratorium Sistem Cerdas dan Robotika (Lab SCR) atau Intelligent Systems And Robotic Laboratory (ISR Lab) merupakan salah satu Laboratorium di bawah pengelolaan Program Studi Informatika Fakultas Ilmu Komputer UPN Veteran Jawa Timur yang fokus pada keilmuan berkaitan dengan Sistem Cerdas dan Robotika.</p>
          </div>
        </section>

        <section className="info_jumlah">
          <div className="jumlah">
            <p className="angka">{!jumlah?"":jumlah.pengurus}</p>
            <p className="ket-angka">JUMLAH PENGURUS</p>
          </div>
          <div className="jumlah">
            <p className="angka">{!jumlah?"":jumlah.komputer}</p>
            <p className="ket-angka">JUMLAH KOMPUTER</p>
          </div>
          <div className="jumlah">
            <p className="angka">{!jumlah?"":jumlah.luas}</p>
            <p className="ket-angka">LUAS RUANGAN</p>
          </div>
        </section>

        <section>
          <div className="visiMisi">
            <section id="visi">
              <img className="gambar_visi" src={VisiPicture}/>
              <div id="visi_desc">
                <h3>VISI</h3>
                <p>{!visi?"":visi.visi}</p>
              </div>
              </section>
            
            <section id="misi">
              <img className="gambar_misi" src={MisiPicture}/>
              <div id="misi_desc">
                <h3>MISI</h3>
                <ol>
                  {!misi?(""):(misi.map((misi, i)=>{return <li key={i}>{misi.misi}</li>}))}
                </ol>
              </div>
              
            </section>

            <section id="tujuan">
              <h3>Tujuan</h3>
              <ol>
                {!tujuan?(""):(tujuan.map((tujuan, i)=>{return <li key={i}>{tujuan.tujuan}</li>}))}
              </ol>
            </section>
          </div>
        </section>

    </>
  );
};

export default VisiMisi;