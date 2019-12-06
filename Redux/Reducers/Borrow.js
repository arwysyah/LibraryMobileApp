
const InitialState = {
    statusData : [],
    isLoading : false,
    isRejected: false,
    isFullfilled: false

}

export const borrow = (prevState = InitialState,action) =>{
    switch (action.type) {
        case "BORROW_PENDING":
            return{
                ...prevState,
                isLoading : true,
                isRejected: false,
                isFullfilled:false,

            }
            
          case "BORROW_REJECTED":
              return{
                  ...prevState,
                  isLoading: false,
                  isRejected:true,
                  
              }

              case "BORROW_FULFILLED":
                  return{
                      isLoading : false,
                      isFullfilled:true,
                statusData: action.payload.data.response
                  }
    
        default:
            return prevState
           
    }
}