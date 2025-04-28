import React from 'react'
import { LuCalendarHeart } from 'react-icons/lu'

function Blog({item}) {
  const {answer,question,date}=item
  return (
    <div className="bg-gray-200 border space-y-4 py-8 px-8 rounded-3xl p m-8 gap-4 flex-col">
          <h4 className="text-xl font-extrabold">{question}</h4>
            <div className="divider-dashed"></div>
            <p className="text-blue-400 font-bold">Answer:</p>
            <p>{answer}</p>
            <div className="divider-dashed"></div>
            <div className="text-black/50 font-bold flex items-center gap-2"><LuCalendarHeart size={20}/><p>Added at {date}</p></div>
        </div>
  )
}

export default Blog