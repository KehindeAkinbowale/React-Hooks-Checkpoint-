import { useState } from 'react';
import './App.css'
import MovieCard from './components/MovieCard'
import Filter from './components/Filter';
function App() {
///MOVIELIST NOW STATEFUL BECAUSE WE ARE STILL GOING TO ADD MORE TO IT WHEN WE CLICK THE ADD BUTTON
const [addMovie, setAddMovie] = useState({
    title: "",
    description: "",  
    URL: "",
    ratings: 0
});
const[MovieList, setMovieList] = useState([])
const [filterTitle, setfilterTitle] = useState([]);
function handleTitle(event){
  const InputText = event.target.name
  const newValue = event.target.value
  setAddMovie((prevValue)=> {
    if (InputText === "Title"){
      return {
            title: newValue,
            description: prevValue.description,  
            URL: prevValue.URL,
            ratings: prevValue.ratings
      }
    }
    else if (InputText === "description"){
      return {
            title: prevValue.title,
            description: newValue,
            URL: prevValue.URL,
            ratings: prevValue.ratings
      }
    }
    else if (InputText === "ratings"){
      return {
            title: prevValue.title,
            description: prevValue.description,  
            URL: prevValue.URL,
            ratings: newValue
      }
    }
    else if (InputText === "link"){
      return {
            title: prevValue.title,
            description: prevValue.description,  
            URL: newValue,
            ratings: prevValue.ratings
      }
    }
  })
}

function handleMovie(){
  setMovieList((prevValue) =>{
  return [...prevValue, {...addMovie}];
  });
  setAddMovie({
    title: "",
    description: "",  
    URL: "",
    ratings: 0
  });
}

function handleFilter(){
  setfilterTitle(()=> {
    return [...MovieList.map((item)=>{
        return {
        title: item.title,
        ratings:item.ratings
    }; 
    })]
  })
}
console.log(filterTitle);
return (
    <>
      <h1 className='display-3 fw-bold'>Welcome to My Movie Website</h1>
      <div className='d-flex mb-3'>
        <label className='d-flex align-items-center me-3'>Add Movie Title: </label>
        <input name="Title" type="text" value={addMovie.title} onChange={(e) => {handleTitle(e)}} className='w-25 form-control'/>
      </div>
      <div className='d-flex mb-3'>
        <label className='d-flex align-items-center me-3'>Add Movie Description: </label>
        <input type="text" name='description' value={addMovie.description} onChange={(e) => {handleTitle(e)}} className='w-50 form-control'/>
      </div>
      <div className='d-flex mb-3'>
      <label className='d-flex align-items-center me-3'>Add Ratings: </label>
        <input type="text" name='ratings' value={addMovie.ratings} onChange={(e) => {handleTitle(e)}} className='w-50 form-control'/>
      </div>
      <div className='d-flex mb-3'>
      <label className='d-flex align-items-center me-3'>Add Image URL: </label>
        <input type="text" name="link" value={addMovie.URL} onChange={(e) => {handleTitle(e)}}  className='w-50 form-control'/>
      </div>  
      <button className='btn btn-warning' onClick={handleMovie}>Add Movie</button>
      <h2 className='display-4 fw-semibold'>Added Movies</h2>
      <ul className='d-flex'>
        {
        MovieList.map((item)=> {
         return (
          <div className='d-flex'>
          <MovieCard title={item.title} description={item.description} URL={item.URL} ratings={item.ratings}/>
          </div>
         );
        })
        }
      </ul>
      <h1 className='display-5 fw-semibold'>Filltered Movie</h1>
      <button className='btn btn-success' onClick={handleFilter}>Filter Movie</button>
      <ul className='d-flex'>
       {
        filterTitle.map((item) => {
          return(
            <>
            <Filter title={item.title} ratings={item.ratings}/>
            </>
          );
        })
       }
      </ul>
    </>
  );
}
export default App;