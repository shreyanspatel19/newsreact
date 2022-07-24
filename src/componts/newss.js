import React, { Component } from 'react'

export class newss extends Component {
  render() {
      let {title,description,iurl,newsurl}=this.props;
    return (
        
 <div className='my-3'>

     <div className="card">
            <img src={iurl} className="card-img-top" alt=" "/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">read more</a>
            </div>
        </div> 
      
</div>
  
    )
  }
}

export default newss