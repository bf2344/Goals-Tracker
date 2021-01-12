import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import './index.css';

const GoalCreation = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    description: '',
    date: () => new Date(),
    color: '',
    popular: '',
    upload: '',
    checked: false
  })


  const handleInputChange = (name, value) => {
    setInputValues({ ...inputValues, [name]: value })
  }

  const handlePopularClick = value => {
    setInputValues({ ...inputValues, popular: value })
  }

  return (
    <Container>
      <Row>
        <Col sm={12} md={9} lg={6} className='form-column'>
          <Form>
            <FormGroup>
              <Label for="exampleName">Goal Name</Label>
              <Input
                type="name"
                name="name"
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
                onChange={(e) => handleInputChange(e.currentTarget.name, e.currentTarget.value)}/>
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
                  onClick={()=> setInputValues({...inputValues, checked: !inputValues.checked})}/> A Check Box
              </Label>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default GoalCreation;