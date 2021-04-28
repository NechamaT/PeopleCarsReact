import React from 'react';
import {Link} from 'react-router-dom';
import PersonRow from './PersonRow';
import axios from 'axios';


class PeopleTable extends React.Component {
    state = { 
        people:[],
        person:{
            firstName: '',
            lastName: '',
            age:'',
            id: '',
            cars:[]
        }
     }

     componentDidMount = async () =>{
        await this.refreshTable();
     }

     refreshTable = async () =>{
        const {data} = await axios.get('/api/peoplecars/getAll');
        this.setState({people: data})
     }
    render() { 
        return (
            <>
            <button className="btn btn-outline-info block">Add Person</button>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Car Count</th>
                        <th>Add Car</th>
                        <th>Delete Cars</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.people.map(p =>
                        <PersonRow
                        key={p.id}
                        person={p}
                        />
                        )}
                </tbody>
            </table>
            </>
          );
    }
}
 
export default PeopleTable;