import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col, Button } from 'reactstrap';
import { useParams, useHistory } from "react-router-dom";
import './index.css';

const GoalUpdate = () => {
  const [goalData, setGoalData] = useState();
  const [updateData, setUpdateData] = useState({
    progress: 0,
    note: ""
  });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`/api/user/goal/get/${id}`)
      .then(res => res.json()).then(data => setGoalData(data))
      .catch(err => console.log(err))
  }, []);

  const handleInputChange = (name, value) => {
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch(`/api/user/goal/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    })
      .then(res => {
        setTimeout(()=>{
          history.push('/')
        }, 2000)
      })
      .catch(err => console.log(err));
  };

  const backgroundColor = goalData ? goalData.color : 'lightGreen';

  return (
    <Container>
      <Row>
        <Col sm={12} md={9} lg={6} style={{ backgroundColor }}>
          <Form onSubmit={(e)=> handleSubmit(e.currentTarget)}>
            {goalData &&
              <h2>{goalData.title}</h2>
            }
            {goalData && goalData.image &&
              <img src={goalData.image} alt="picture of goal" />
            }
            {goalData &&
              <>
                <p>{goalData.description}</p>
                <p>Originally created on : {goalData.date}</p>
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
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default GoalUpdate;