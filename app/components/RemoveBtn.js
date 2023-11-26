import React from 'react'
import { MdDelete, MdDeleteOutline } from 'react-icons/md'

const RemoveBtn = () => {
  return (
    <button className="bg-gray-100 p-1 rounded-full">
        <MdDeleteOutline className='text-sm text-red-500'/>
    </button>
  )
}

export default RemoveBtn