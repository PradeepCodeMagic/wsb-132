const { createSlice } = require("@reduxjs/toolkit");


let initialState={
    value:10,
    status:false
}

const counterSlice =createSlice({
    name:"counter",
    // initialState:{value:0}
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement: (state) => {
            if(state.value>1){
                state.value -= 1
            }
            
          },
    }
})
export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;