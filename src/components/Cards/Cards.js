import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Cards.css';


const Cards = (props) => {
   
const {name,picture,age,description,time}=props.singlecard;

    
    return (
        
              
           <div className="card-width">
               <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={picture} className="w-100 p-2 card-image" alt=""/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="card-des">
                            {description}
                        </Card.Text>
                        <Card.Text>For Age: <strong>{age}</strong></Card.Text>
                        <Card.Text>Time Requied: <strong>{time}</strong></Card.Text>
                      <Button className="btn btn-sm w-100" size="lg" onClick={()=>props.addToList(props.singlecard)} >Add To List</Button>
                    </Card.Body>
                </Card>
           </div>
        

    );
};

export default Cards;