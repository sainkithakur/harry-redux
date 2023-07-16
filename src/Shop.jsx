import React from 'react'
import { useDispatch } from 'react-redux'
import { Deposit, Withdrow } from './State/ActionCreator/Index';
//import { bindActionCreators } from 'redux';


const Shop = () => {
    const dispatch = useDispatch();
      return (
    <div className='mt-40'>
       <b> <h1 className='text-red-800 mb-10'>Bank Details</h1></b>
        <button type="button" className="px-8 py-3 font-semibold rounded dark:bg-green-900 dark:text-white"onClick={()=>dispatch(Withdrow(100))}>Deposit</button>
        <span className='text-pink-400'>Current Update </span>
        <button type="button" className="px-8 py-3 font-semibold rounded dark:bg-red-800 dark:text-white"onClick={()=>dispatch(Deposit(100))}>Withdrow</button>
    </div>
  )
}

export default Shop