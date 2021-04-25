import React, { Component } from 'react';


class Like extends Component {
    
    render() { 
        let clasess="fa fa-heart"
        if (!this.props.liked) clasess+="-o"
        return ( 
           

            <i
             aria-hidden="true"
             onClick={this.props.onClick} 
             className={clasess} 
             style={{cursor:"pointer"}}
             ></i>
         );
    }
}
 
export default Like;