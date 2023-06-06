import React from "react";
import PenelitianPicture from '../assets/image/penelitian.svg';
import PendidikanPicture from '../assets/image/pendidikan.svg';
import AbdimasPicture from '../assets/image/Abdimas.svg';
import {CardAbdimas, CardPendidikan, CardPenelitian} from '../component/CardLayanan'
import $ from 'jquery';

const Kegiatan = () => {

  return (
    <div className="kegiatan">
      <div className="box_kegiatan" id="pendidikan">
        <img className="gambar_kegiatan" src={PendidikanPicture}/>
        <div className="judul_kegiatan">
          <h2 id="white_title">Bidang Pendidikan dan Pengajaran</h2>
          <button className="toggle" onClick={()=>$('#target2').toggle('slow')}>&#x25BC;</button>
        </div>
        <div id="target2">
        <CardPendidikan ></CardPendidikan>
        </div>
      </div>

      <div className="box_kegiatan" id="penelitian">
        <img className="gambar_kegiatan" src={PenelitianPicture}/>
        <div className="judul_kegiatan">
          <h2>Bidang Penelitian</h2>
          <button className="toggle" onClick={()=>$('#target').toggle('slow')}>&#x25BC;</button>
        </div>
        <div id="target">
        <CardPenelitian></CardPenelitian>
        </div>
      </div>

      <div className="box_kegiatan" id="admas">
        <img className="gambar_kegiatan" src={AbdimasPicture}/>
        <div className="judul_kegiatan">
          <h2 id="white_title">Bidang Pengabdian kepada Masyarakat (Abmas)</h2>
          <button className="toggle" onClick={()=>$('#target3').toggle('slow')}>&#x25BC;</button>
        </div>
        <div id="target3">
        <CardAbdimas ></CardAbdimas>
        </div>
      </div>
    </div>
  
    
  );

};

export default Kegiatan;