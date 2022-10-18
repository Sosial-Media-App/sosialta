import React from 'react'
import { Box } from '@mui/material';
import {FiMoreHorizontal} from 'react-icons/fi'
import {BiLike, BiShare} from 'react-icons/bi'
import {FaRegCommentAlt} from 'react-icons/fa'


const CardSosmed = () => {
  return (
    <Box
    flex={5} 
    p={2}
    >
      <div className="p-5 rounded-xl bg-white flex flex-col bg-clip-border w-full">
        <div className="flex pb-6 items-center justify-between">
          
          <div className="flex">
            <div className="inline-block mr-4">
              <img className="rounded-full w-12 h-12" src="https://randomuser.me/api/portraits/men/35.jpg" />
            </div>
            <div className="flex flex-col space-y-1">
              <div>
                <p className="text-secondary inline-block text-base font-semibold">Wade Warren</p>
              </div>
              <div className="text-gray font-medium text-sm ">
                July 17, 2018
              </div>
            </div>
          </div>

          <div>
            <div className="dropdown dropdown-end">
              <button tabIndex={0}><FiMoreHorizontal className='w-6 h-6'/></button>
              <ul tabIndex={0} className="dropdown-content menu shadow-lg bg-white rounded-lg w-40">
                <li><a className="text-secondary font-semibold">Edit</a></li>
                <hr className='text-main' />
                <li><a className="text-delete font-semibold">Delete</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="py-4">
            <div className="flex" >
              <img className="max-w-full rounded-lg"
                src="https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
        </div>

        <div className='flex flex-row justify-between items-center text-gray font-medium text'>
          <div className='flex flex-row space-x-2'>
            <button><BiLike className='w-6 h-6'/></button>
             <p>Like</p>                                    
          </div>
          <div className='flex flex-row space-x-2'>
            <button><FaRegCommentAlt className='w-5 h-5'/></button>
             <p>Comments</p>                                    
          </div>
          <div className='flex flex-row space-x-2'>
            <button><BiShare className='w-6 h-6'/></button>
             <p>Share</p>                                    
          </div>
        </div>

        <hr className='text-main my-5' />
        
        <div className="relative flex flex-row">
          <div>
              <img className="rounded-full max-w-none w-12 h-12" src="https://randomuser.me/api/portraits/men/35.jpg" />
            </div>
          <input
            className="pt-2 pb-2 pl-3 w-full border-main border rounded-full placeholder:text-slate-600 font-medium pr-20 mx-3"
            type="text" placeholder="Write a comment" />
            <button className='bg-primary rounded-full py-2 px-10 font-medium font-semi-bold text-white '>Send</button>
        </div>
    
        <div className='my-5'>
          <div className="flex pb-4">
            <div className="mr-4" >
              <img className="rounded-full max-w-none w-12 h-12" src="https://randomuser.me/api/portraits/men/82.jpg" />
            </div>
            <div>
              <div>
                <p className="inline-block text-base font-bold mr-2" >Leslie Alexander</p>
                <span className="text-slate-500">25 minutes ago</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>

          <button className="w-full">
            <p className="py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200">Show
              more comments</p>
          </button>
        </div>
      </div>
    </Box>
  )
}

export default CardSosmed;

