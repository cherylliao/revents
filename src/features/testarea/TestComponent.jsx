import React, {useState} from 'react'
import {Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {incrementCounter,decrementCounter} from './testActions'



const mapState = (state) =>({
    data:state.test.data
})

const actions = {
    incrementCounter,
    decrementCounter

}



const TestComponent = ({data,incrementCounter,decrementCounter}) => {
  const [latlng,setLatlng] =useState('lat:59.95,lng:30.33')

  
  
  return (
    <div>
      <h1>Test Component</h1>
      <h3>the answer is {data}</h3>
      <Button onClick={incrementCounter} positive content='Increment' />
      <Button onClick={decrementCounter} negative content='Decrement' />
      <br/>
      <br/>
    
     
    </div>
  )
}

export default connect(mapState,actions)(TestComponent)
