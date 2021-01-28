import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormText, Container, Row, Col, Button } from 'reactstrap';
import './index.css';
import GoalModal from '../../components/GoalModal';

const GoalCreation = () => {
  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
    date: () => new Date(),
    color: '',
    popular: '',
    upload: '',
    highPriority: false,
    goalUpdates: []
  })
  
  const [showModal, setShowModal] = useState(false)
  const history = useHistory()

  const handleGoalSubmit = () => {
    console.log("front end submit log")
    fetch('/api/goal/add', {
      method: 'POST',
      body: JSON.stringify(inputValues),
      headers: { 
        "Content-type": "application/json"
    } 
    }).then(res => {
      if(res){
        // console.log(res.status === 200)
        setShowModal(true)
        setTimeout(() => {
          history.push('/')
        }, 2000);
      } else {
        console.log(res)
      }
    })
  }

  useEffect(()=>{
    fetch('api/user/goal/get')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }, [])

  const handleInputChange = (name, value) => {
    setInputValues({ ...inputValues, [name]: value })
  }

  const handlePopularClick = value => {
    setInputValues({ ...inputValues, popular: value })
  }

  return (
    <Container>
      <Row>
        {showModal &&
          <Col sm={12}>
            <GoalModal showModal={showModal} className={showModal ? "show" : "hide"} buttonLabel="X" status="created" />
          </Col>
        }
        <Col sm={12} md={9} lg={6} className='form-column'>
          <Form>
            <FormGroup>
              <Label for="exampleName">Goal Name</Label>
              <Input
                type="name"
                name="title"
                id="exampleEmail"
                placeholder="with a placeholder"
                onChange={(e) => handleInputChange(e.currentTarget.name, e.currentTarget.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Goal Description</Label>
              <Input
                type="textarea"
                name="description"
                id="exampleText"
                onChange={(e) => handleInputChange(e.currentTarget.name, e.currentTarget.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Goal End Date</Label>
              <Input
                type="date"
                name="completionDate"
                id="exampleDate"
                placeholder="date placeholder"
                onChange={(e) => handleInputChange(e.currentTarget.name, e.currentTarget.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleColor">Color Code This Goal</Label>
              <Input
                type="color"
                name="color"
                id="exampleColor"
                placeholder="color placeholder"
                onChange={(e) => handleInputChange(e.currentTarget.name, e.currentTarget.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Does your goal fall under one of these categories?</Label>
              <Input type="select" onChange={(e) => handlePopularClick(e.currentTarget.value)} name="select" id="exampleSelect">
                <option
                  name='financial'
                  onSelect={() => handlePopularClick()}>
                  Financial</option>
                <option
                  name='healthFitness'
                  onClick={() => handlePopularClick()}>
                  Health/Fitness</option>
                <option
                  name='personalWellbeing'
                  onClick={() => handlePopularClick()}>
                  Personal Wellbeing</option>
                <option
                  name='professionalAchievement'
                  onClick={() => handlePopularClick()}>
                  Professional Achievement</option>
                <option
                  name='personalAchievement'
                  onClick={() => handlePopularClick()}>
                  Personal Achievement</option>
                <option
                  name='habit'
                  onClick={() => handlePopularClick()}>
                  Build/Break A Habit</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Upload</Label>
              <Input
                type="file"
                name='file'
                id="exampleFile" />
              <FormText
                color="muted">
                Upload an image of your goal here
              </FormText>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  onClick={() => setInputValues({ ...inputValues, highPriority: !inputValues.checked })} /> High priority goal?
              </Label>
            </FormGroup>
            <Button onClick={() => handleGoalSubmit()}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default GoalCreation;