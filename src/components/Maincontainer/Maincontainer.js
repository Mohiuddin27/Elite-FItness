import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from '../Cards/Cards';
import './Maincontainer.css';
import Personalinfo from '../Personalinfo/Personalinfo';
import logo from '../../images/logomain.png';


const Maincontainer = () => {
    const [cards, setCard] = useState([]);
    const [items,setItems]=useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
   const handleClick=(item)=>{
    console.log(item);
    const newItems=[...items,item];
    setItems(newItems);
   }
    return (
        <div className="main">
            <Container>
                <Row>
                    <Col md={8} sm={12} lg={8}>
                        <div class="card-container">
                            <img src={logo} alt=""></img><span style={{ textTransform: 'uppercase', marginRight: '20px', fontSize: '20px', color: 'rgba(31, 92, 234, 0.957)', fontWeight: '600' }}>Elite Fitness</span>
                            <h5 style={{ marginTop: '30px' }}>Select today’s exercise</h5>
                            <div>
                               <div class="cards-container">
                                {
                                     cards.map((card) => <Cards singlecard={card} key={card.id} addToList={handleClick}></Cards>)
                                }
                               </div>


                            </div>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div class="personal-info">
                            <Personalinfo items={items}></Personalinfo>

                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Maincontainer;