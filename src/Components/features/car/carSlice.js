import {createSlice} from "@reduxjs/toolkit"

const initialState= {

    cars: ["Model S", "Model 3", "Model X", "Model Y"]

}

const carSlice =createSlice({
    name: "cars",
    initialState,
    reducers: {}

})

export const SelectCars =state => state.cars

export default carSlice.reducer