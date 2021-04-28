import { Carousel } from 'bootstrap';
import React from 'react';
import {link} from 'react-router-dom'

function PersonRow({person, onAddCarClick, onDeleteCarsClick}){
    const{firstName, lastName, age, cars, id} = person

    return(
        <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>{cars.length}</td>
      <td>
          <Link to={`/AddCar/${id}`}><button className= "btn btn-sucess">Add Car</button></Link>
          <Link to={`/DeleteCars/${id}`}><button className= "btn btn-danger">Delete Cars</button></Link>
      </td>
    </tr>
    )
}