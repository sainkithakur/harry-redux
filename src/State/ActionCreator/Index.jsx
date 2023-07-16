export const Deposit = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type: 'Deposit',
            payload: amount
        })

    }

    
}

export const Withdrow = (amount)=>{
      return(dispatch)=>{
        dispatch({
            type: 'Withdraw',
            payload: amount
        })

      }
        
    
}