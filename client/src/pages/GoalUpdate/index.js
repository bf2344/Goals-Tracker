import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col, Button } from 'reactstrap';
import { useParams, useHistory } from "react-router-dom";
import GoalModal from '../../components/GoalModal';
import './index.css';

const GoalUpdate = () => {
  const [showModal, setShowModal] = useState(false)
  const [goalData, setGoalData] = useState();
  const [updateData, setUpdateData] = useState({
    progress: 0,
    note: ""
  });
  const { goalId } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`/api/goal/get/${goalId}`)
      .then(res => res.json()).then(data => {
        setGoalData(data)
        if(data.goalUpdates.length){
          setUpdateData({...updateData, progress: data.goalUpdates[data.goalUpdates.length - 1].progress})
        }
      })
      .catch(err => console.log(err))
  }, [goalId]);

  const handleInputChange = (name, value) => {
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleSubmit = () =>{
    fetch(`/api/goal/update/${goalId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    })
      .then(res => {
        console.log(res.status)
        if(res.status == 200){
          setShowModal(true)
          setTimeout(()=>{
            history.push('/')
          }, 2000)
        } else{
          console.log("something went wrong with the update")
        }
      })
      .catch(err => console.log(err));
  };

  const backgroundColor = goalData ? goalData.color : 'lightGreen';

  return (
    <Container>
      <Row>
      {showModal &&
          <Col sm={12}>
            <GoalModal showModal={showModal} className={showModal ? "show" : "hide"} buttonLabel="X" status="updated" />
          </Col>
        }
        <Col sm={12} md={9} lg={6} style={{ backgroundColor }}>
          <Form>
            {goalData &&
              <h2>{goalData.title}</h2>
            }
            {goalData && goalData.image &&
              <img src={goalData.image} alt="picture of goal" />
            }
            {goalData &&
              <>
                <p>{goalData.description}</p>
                <p>Originally created on : {goalData.createdAt}</p>
              </>
            }
            <FormGroup row>
              <Label
                for="progressInput"
                >
                Progress</Label>
              <Col sm={2}>
                <Input
                  type="number"
                  name="progress"
                  id="progressInput"
                  placeholder="00"
                  value={updateData.progress}
                  onChange={(e) => handleInputChange(e.currentTarget.name, e.currentTarget.value)} />
              </Col>
            </FormGroup>
            <FormGroup>
              {/* <Label
                for="progressRange">
                Progress</Label> */}
              <Input
                type="range"
                name="progress"
                id="progressRange"
                value={updateData.progress}
                onChange={(e) => handleInputChange(e.currentTarget.name, e.currentTarget.value)} />
            </FormGroup>
            <FormGroup row>
              <Label
                for="progressNote"
                >
                Write a note about your progress here</Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  name="note"
                  id="progressNote"
                  onChange={(e) => handleInputChange(e.currentTarget.name, e.currentTarget.value)} />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button  onClick={()=> handleSubmit()}>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default GoalUpdate;