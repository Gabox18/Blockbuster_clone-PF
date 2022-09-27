import React from 'react'
import './Allcomments.css'
import { useSelector } from 'react-redux'
import Comment  from '../Comment/Comment'

export default function Allcomments  (comment)  {
let commentMovie = useSelector((state)=>state.commentMovie)
console.log(commentMovie,"estado")
  return (
    <div className='container-principal'>
        
        <div className='container-comment'>
              {
                commentMovie?.map((e) =>(<Comment info={e}/>))
              }
              
        </div>
    </div>
  )
}

