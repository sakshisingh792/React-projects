import React from 'react'

const Card = (props) => {
  return (
    
      <div className="card">
        <img src="https://images.unsplash.com/photo-1778351983804-e1e267d1f94c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" alt= ""/>
        <h1>{props.user}</h1>
        <p>{props.para}</p>
        <button>View Profile</button>
      </div>
    
  )
}

export default Card