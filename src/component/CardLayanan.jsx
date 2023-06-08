import { useEffect } from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function GetData(){
  const allData = fetch("https://api.jsonbin.io/v3/b/6463ac858e4aa6225e9e53fa", {
      headers: {
        "X-ACCESS-KEY": "$2b$10$yySJNemZxy5owr6fRQU62Ovqd/PLHW7.kg3KToeIMK5tCRqX398X."
      }
    })
    .then((response) => response.json())
  
  return allData;
}

function CardPendidikan() {
  
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetData()
    .then((response) => setDatas(response))
    .then(() =>setLoading(false))
  }, []);
  
  return (
    <Row xs={1} md={2} className="g-4">
      {loading?( <p >Loading...</p>):(datas.record.BidangPendidikandanPengajaran.map((card)=>
        {return <Col key={card.id}>
                  <Card className="cardkegiatan">
                    <Card.Body>
                      <Card.Title>{card.name}</Card.Title>
                      <Card.Text className="description-kegiatan">{card.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
        }))}
    </Row>
  );
}

function CardPenelitian() {
  
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetData()
    .then((response) => setDatas(response))
    .then(() =>setLoading(false))
  }, []);
  return (
    <Row xs={1} md={2} className="g-4">
      {loading?( <p >Loading...</p>):(datas.record.BidangPenelitian.map((card)=>
        {
          
          return <Col key={card.id}>
                  <Card className="cardkegiatan">
                    <Card.Body>
                      <Card.Title>{card.name}</Card.Title>
                      { typeof card.desc === "string"?<Card.Text>{card.desc}</Card.Text> :(<ul>{card.desc.map((list, i)=>{
                        return <li key={i}><Card.Text className="description-kegiatan">{list}</Card.Text></li>
                      })}</ul>)
                      }
                    </Card.Body>
                  </Card>
                </Col>
        }))}
    </Row>
  )
}

function CardAbdimas() {
  
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetData()
    .then((response) => setDatas(response))
    .then(() =>setLoading(false))
  }, []);
  
  return (
    <Row xs={1} md={2} className="g-4">
      {loading?( <p >Loading...</p>):(datas.record.BidangPengabdiankepadaMasyarakat.map((card)=>
        {return <Col key={card.id}>
                  <Card className="cardkegiatan">
                    <Card.Body>
                      <Card.Title>{card.name}</Card.Title>
                      <Card.Text className="description-kegiatan">{card.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
        }))}
    </Row>
  );
}

export {CardAbdimas, CardPendidikan, CardPenelitian};