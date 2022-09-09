import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {allMovies} from './redux/actions.js'

function App() {
  let dispatch = useDispatch()
  let Movies = useSelector(store => store.allMovies)
  useEffect(()=>{
    dispatch(allMovies())
  }
  ,[dispatch])

  return (
    <div className="App">
      <h1>Henry Blockbuster</h1>
      {console.log(Movies)}
      {Movies?.map((e,i)=>{
        return (
          <div key={i}>
            <h1>{e.Title}</h1>
            <img src={e.Poster} alt='img' height={'300px'}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
