
export const borrow = (data) => {
    return {
      type: "BORROW",
      payload: Axios.post("https://mybookcollections.herokuapp.com/history",data)
    }
}