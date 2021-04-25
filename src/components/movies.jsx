import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';

class Movies extends Component {
    state = {  
        movies:getMovies(),
        pageSize:4,
        curentPage:1
    };

    handelDelete = (movie)=>{
        const movies=this.state.movies.filter(m=>m._id !== movie._id)
        this.setState({movies:movies});
    };

    handeLike =(movie)=>
    {
        const movies=[...this.state.movies] //copy
        const index=movies.indexOf(movie);  //get index of movie
        movies[index]={...movies[index]}  
        movies[index].liked=!movies[index].liked 
        this.setState({movies:movies})

    }

    handelPageChange =(page) =>{
        this.setState({curentPage:page})

    }


    render() { 
        if(this.state.movies.length===0) return( 
        <div className="alert alert-info text-center" role="alert" >
        No Movie HERE !
      </div>)
        return ( 
            
            <React.Fragment>
                <p className="alert alert-info text-center" role="alert"> ther is {this.state.movies.length} movies</p>
            <table className="table table-light table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.movies.map(movie=> (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <Like liked={movie.liked} onClick={() => this.handeLike(movie)}/>
                    </td>
                    <td><button onClick={()=> this.handelDelete(movie)} className="btn btn-danger"> Delete </button> | <button className="btn btn-primary">Edit</button></td>
                </tr> ))}
                    
                </tbody>
            </table>
            <Pagination 
            itemsCount={this.state.movies.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handelPageChange}
            curentPage={this.state.curentPage}

            />
            </React.Fragment>
         );
    }
}
 
export default Movies;