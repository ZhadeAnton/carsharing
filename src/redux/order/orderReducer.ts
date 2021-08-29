interface IOrderState {
}

const INIT_STATE: IOrderState = {

}

const orderReducer = (state = INIT_STATE, action: any): IOrderState => {
  switch (action.type) {
    default:
      return state
  }
}

export default orderReducer
