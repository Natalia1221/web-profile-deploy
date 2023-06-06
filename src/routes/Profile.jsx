import '../assets/Profile.css';
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainPicture from '../assets/image/main-picture.svg';
import VisiPicture from '../assets/image/visi.svg';
import MisiPicture from '../assets/image/misi.svg';

const VisiMisi = () => {
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
            <p className="angka">{loading?"":datas.record.jumlah.pengurus}</p>
            <p className="ket-angka">JUMLAH PENGURUS</p>
          </div>
          <div className="jumlah">
            <p className="angka">{loading?"":datas.record.jumlah.komputer}</p>
            <p className="ket-angka">JUMLAH KOMPUTER</p>
          </div>
          <div className="jumlah">
            <p className="angka">{loading?"":datas.record.jumlah.luas}</p>
            <p className="ket-angka">LUAS RUANGAN</p>
          </div>
        </section>

        <section>
          <div className="visiMisi">
            <section id="visi">
              <img className="gambar_visi" src={VisiPicture}/>
              <div id="visi_desc">
                <h3>VISI</h3>
                <p>{loading?"":datas.record.visi}</p>
              </div>
              </section>
            
            <section id="misi">
              <img className="gambar_misi" src={MisiPicture}/>
              <div id="misi_desc">
                <h3>MISI</h3>
                <ol>
                  {loading?(""):(datas.record.misi.map((misi)=>{return <li key={misi[0]}>{misi[1]}</li>}))}
                </ol>
              </div>
              
            </section>

            <section id="tujuan">
              <h3>Tujuan</h3>
              <ol>
                {loading?(""):(datas.record.tujuan.map((tujuan)=>{return <li key={tujuan[0]}>{tujuan[1]}</li>}))}
              </ol>
            </section>
          </div>
        </section>

    </>
  );
};

export default VisiMisi;