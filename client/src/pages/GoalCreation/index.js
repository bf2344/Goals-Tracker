import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormText, Container, Row, Col, Button } from 'reactstrap';
import './index.css';
import GoalCreationModal from '../../components/Modal/';

const GoalCreation = () => {
  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
    date: () => new Date(),
    color: '',
    popular: '',
    upload: '',
    checked: false
  })
  const [showModal, setShowModal] = useState(false)
  const history = useHistory()

  const handleGoalSubmit = () => {
    fetch('/api/user/goal/add', {
      method: 'POST',
      body: {
        ...inputValues,
        // userEmail: user.email
      }
    }).then(res => {
      setShowModal(true)
      setTimeout(() => {
        history.push('/')
      }, 2000);
    })
  }


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
            <GoalCreationModal showModal={showModal} className={showModal ? "show" : "hide"} buttonLabel="X" />
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
                name="date"
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
                  onClick={() => setInputValues({ ...inputValues, checked: !inputValues.checked })} /> A Check Box
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