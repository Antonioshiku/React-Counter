import React, { Component } from 'react';
import Data from './CounterData';
import CounterData from './CounterData';

class Counter extends React.Component {

    state = {

        Data: [
            {
                id: 1, title: 'React'
            },
            {
                id: 2, title: 'Node Js'
            },
            {
                id: 3, title: 'React Native'
            }
        ],
        chData: " ",

    }

    handleChange = (e) => {
        this.setState({ chData: e.target.value })
    }

    add = () => {
        let Data = [...this.state.Data];
        let id = Data.length ? Data[Data.length - 1].id + 1 : 1;
        Data.push({ id: id, title: this.state.chData });

        this.setState({ Data });

        // console.log(Data);
    }

    handleDelete = (id) => {
        let Data=[...this.state.Data];
        let Counter= Data.filter((i) => i.id !== id);
        console.log(Counter);

        this.setState({Data:Counter})
    }


    render() {
        // console.log(this.state.chData);
        return (
            <div className='ps-5 w-50 m-auto'>
                <h1 className='text-info d-inline'>Counter</h1>
                <h1 className='d-inline ps-3 text-warning'>{this.state.Data.length}</h1><br/>
                <input type='text' onChange={this.handleChange} value={this.state.chData} className='ps-3 mt-3' />
                <button className='w-10 ms-5 border-1 border-primary rounded-pill' onClick={this.add} style={{ width: '120px' }}>Submit</button>
                {this.state.Data.map((d) => {
                    return (
                        <Data key={d.id}  id={d.id} title={d.title} handleDelete={this.handleDelete} />
                    ) 
                })}
            </div>
        );
    }
}

export default Counter;