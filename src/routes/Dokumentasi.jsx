/* eslint-disable no-unused-vars */
import '../assets/Dokumentasi.css';
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import supabase from "../config/supabaseClient";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  {Slider, ImageAndTextExample} from "../component/CardDokumentasi";
import image1 from "../assets/image/ruangan/ruangan1.jpg";
import image2 from "../assets/image/ruangan/ruangan2.jpg";
import image3 from "../assets/image/ruangan/ruangan3.jpg";
import image4 from "../assets/image/ruangan/ruangan4.jpg";

const imagesRuangan = [image1,image2,image3,image4 ];

function Dokumentasi() {
  const [fetchError, setFetchError] = useState(null);
  const [dokumentasi, setDokumentasi] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchEvent = async () => {
    const  dataDokumentasi = await supabase.from("dokumentasi").select("*").order('name', { ascending: true });
    if (dataDokumentasi) {
      setDokumentasi(dataDokumentasi.data);
      setFetchError(null);
    }else{
      console.log(fetchError)
    }
  };

  useEffect(() => {
    fetchEvent()
    .then(()=>setLoading(false))
    
  }, []);

  return (
    <div>
      < Slider items={imagesRuangan} />;
      <Container className="kegiatan">
          {!loading?(
            <Row>
              {dokumentasi.map((one_dokumentasi)=>{
                const imageArray = one_dokumentasi.image.split(",")
                return <Col>
                  <ImageAndTextExample items={imageArray} name={one_dokumentasi.name}/>
                </Col>
              })}
            </Row>
          )
          :(
            <>Loading...</>
          )}
      </Container>
    </div>
  );
}

export default Dokumentasi;
