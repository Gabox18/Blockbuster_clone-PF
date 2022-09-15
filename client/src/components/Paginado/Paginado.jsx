import React from "react";
import './paginado.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Paginado ({moviesPerPage, allMovies, paginado, setCurrentPage, currentPage}){
    const page = []
    let numPage = Math.ceil(allMovies/moviesPerPage);
    for (let i = 1; i <= Math.ceil(allMovies/moviesPerPage); i++){
        page.push(i)
    }
    return (
        <div>
          <ul>
            <button
              disabled={currentPage === 1}
              className='button-prev'
              onClick={()=>{
                console.log('x')
                setCurrentPage(currentPage === 1?
                  currentPage:
                  currentPage-1
                )
              }
              }
            >
              Anterior
            </button>
            {page && page.map((n) => (
                <button
                  disabled={currentPage === n}
                  className='page-button'
                  key={n}
                  onClick={()=> paginado(n)}
                >
                  {n}
                </button>
            ))}
            <button
              disabled={currentPage === page.length}
              className='button-next'
              onClick={()=>
                setCurrentPage(currentPage === numPage?
                  currentPage:
                  currentPage + 1
                  )
              }
            >
              Siguiente
            </button>
          </ul>
        </div>
      )
    }