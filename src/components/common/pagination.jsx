import React, { Component } from 'react';
import lodash from 'lodash';


class Pagination extends Component {
    
    render()
    
    {
        const {itemsCount,pageSize , onPageChange ,curentPage }=this.props
        const PagesCount=Math.ceil( itemsCount/pageSize)
        if (PagesCount===1)
        return null;
        
        const pages=lodash.range(1,PagesCount+1)
 
        return (
            <nav>
                <ul className="pagination ">
                    {pages.map(page=> ( 
                        <li key={page} className={page===curentPage ? "page-item active" : "page-item"} >
                        <a className="page-link" onClick={()=> onPageChange(page) }>{page}</a>
                      </li>
                    ))}
                   
                </ul>
             </nav>
            
          );
          
    }
}
 
export default Pagination;