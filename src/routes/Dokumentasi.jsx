/* eslint-disable no-unused-vars */
import '../assets/Dokumentasi.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  {Slider, ImageAndTextExample} from "../component/CardDokumentasi";
import image1 from "../assets/image/ruangan/ruangan1.jpg";
import image2 from "../assets/image/ruangan/ruangan2.jpg";
import image3 from "../assets/image/ruangan/ruangan3.jpg";
import image4 from "../assets/image/ruangan/ruangan4.jpg";
import image5 from "../assets/image/kegiatan/pkl _utbk_skripsi/skripsi1.jpg";
import image6 from "../assets/image/kegiatan/pkl _utbk_skripsi/skripsi2.jpg";
import image7 from "../assets/image/kegiatan/pkl _utbk_skripsi/skripsi3.jpg";
import image8 from "../assets/image/kegiatan/robot_terbang/robot_terbang1.jpg";
import image9 from "../assets/image/kegiatan/robot_terbang/robot_terbang2.jpg";
import image10 from "../assets/image/kegiatan/robot_terbang/robot_terbang3.jpg";
import image11 from "../assets/image/kegiatan/robot_terbang/robot_terbang4.jpg";
import image12 from "../assets/image/kegiatan/robot_terbang/robot_terbang5.jpg";
import image13 from "../assets/image/kegiatan/robot_terbang/robot_terbang6.jpg";

const imagesRuangan = [image1,image2,image3,image4 ];
const imagesKegiatan1 = [image5,image6,image7 ];
const imagesKegiatan2 = [image8,image9, image10, image11,image12,image13 ];

function Dokumentasi() {
  return (
    <div>
      < Slider items={imagesRuangan} />;
      <Container className="kegiatan">
        <Row >
          <Col><ImageAndTextExample items={imagesKegiatan1} name="Kegiatan UTBK, Skripsi, dan PKL"/></Col>
          <Col><ImageAndTextExample items={imagesKegiatan2} name="Kegiatan Riset Robot Terbang Sambada"/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dokumentasi;
