
export const borrow = (data) => {
    return {
      type: "BORROW",
      payload: Axios.post("http://192.168.100.155:9000/history",data)
    }
}