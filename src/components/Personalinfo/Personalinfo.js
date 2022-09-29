import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import manimg from '../../images/man.png';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
// import { addToDb } from '../../utilities/fakedb';
import './Personalinfo.css';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Personalinfo = (props) => {
    const {items}=props;
    let total=0;
    for(const singleitem of items){
        total=total+(parseInt(singleitem.time));
    }
   
    let [breaks,breakTime]=useState(0);
    const addBreakTime=(time)=>{
        breaks=parseInt(time);
        breakTime(breaks);
        addToDb(breaks);
        
    }
    const getData=localStorage.getItem("break-time");
    // getData.map((data)=>console.log(data));
    const result=JSON.parse(getData);
    const finalResult=result.value;
    const notify = () => toast("Activity Completed!");
   

    return (
        <div>
            <div class="personal-header">
                <img src={manimg} alt=""></img>
                <div>
                    <h4>Md Mohiuddin</h4>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>

            <Container>
                <div class="body">
                    <div>
                        <h4>75<span>kg</span></h4>
                        <p>Weight</p>

                    </div>
                    <div>
                        <h4>6.5</h4>
                        <p>Height</p>

                    </div>
                    <div>
                        <h4>25</h4>
                        <p>Age</p>

                    </div>
                </div>
            </Container>
            <Container>
                <h5 className="ms-4 mt-5">Add A Break</h5>
                <div class="break">
                   <h6 onClick={()=>addBreakTime(10)}>10s</h6>
                   <h6 onClick={()=>addBreakTime(20)}>20s</h6>
                   <h6 onClick={()=>addBreakTime(30)}>30s</h6>
                   <h6 onClick={()=>addBreakTime(40)}>40s</h6>

                </div>
            </Container>

            <Container>
                <h5 className="ms-4 mt-5">Exercise Details</h5>
                <div class="exercise-time">
                    <span><strong>Exercise time</strong></span><span class="ex-span">{total} seconds</span>

                </div>
            </Container>

            <Container>
                <div class="break-time">
                    <span><strong>Break time</strong></span><span class="ex-span">
                        {finalResult} seconds</span>

                </div>
            </Container>
            <Container>
            <div class="btn-button">
                <Button className="mt-5 btn-sm w-100" onClick={notify}>Activity Completed</Button>
                <ToastContainer />
                </div>
            </Container>

        </div>
    );
};

export default Personalinfo;