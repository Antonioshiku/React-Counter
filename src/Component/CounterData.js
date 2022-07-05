import React, { Component } from 'react';


const Data = ({id,title,handleDelete}) => {

    return (<div>
        <div className='w-100 rounded-pill mt-4 bg-info data_box position-relative '>
             <h4 className='ps-3  text-light '>{title}</h4>
             <button onClick={ () => handleDelete(id)} className='border-0 bg-info  delete_bu'>Delete</button>
        </div>
    </div>)

}


export default Data;