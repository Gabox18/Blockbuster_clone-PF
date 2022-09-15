import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './slice.js'


const store = configureStore ({
    reducer : {
        alldata : dataSlice
    }
})

export default store