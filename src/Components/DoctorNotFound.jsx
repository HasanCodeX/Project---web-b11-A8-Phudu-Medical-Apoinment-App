import React from 'react'
import { BiRegistered } from 'react-icons/bi';
import { useNavigate } from 'react-router'


function DoctorNotFound({reg}) {
    const navigate=useNavigate()
  return (<div className="p-8 bg-white rounded-box my-20 flex justify-center items-center gap-4 flex-col"><h3 className="text-4xl text-center font-extrabold">
    No Doctor Found!!
      </h3>
      <p className="mx-auto text-center font-medium text-black/60">No Doctor Found with registration number:</p>
      <div className='flex items-center gap-2 text-black/60'>
          <BiRegistered size={20}/>
          <p className='text-lg '>{reg}</p>
          </div>
          <button
  onClick={() => navigate('/')}
  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-3xl hover:bg-blue-700 transition font-semibold shadow"
>
  Go Home
</button>

      </div>
  )
}

export default DoctorNotFound