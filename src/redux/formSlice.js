import { createSlice, nanoid } from "@reduxjs/toolkit";
import {AiOutlineEdit} from 'react-icons/ai'

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        inputText: [],
        numText: [],
        header: [],
        dateInput: [],
        showDragzoneText: true,
    },
    reducers: {
        addinputText: (state, action) => {
            const addInpt = state.inputText.push(
                <>
                <div>
                <label>Placeholder Label</label>
                </div>
                <div>
                <input type='text' />
                </div>
                </>
            )
            state.inputText = [...state.inputText]
            state.showDragzoneText = false
        },
        addNumText: (state, action) => {
            const addNumput = state.numText.push(
                <>
                <label>Placeholder Label</label>
                <span><input type='number' /><AiOutlineEdit /></span>
                </>
            )
            state.numText = [...state.numText]
            state.showDragzoneText = false
        },

        removeElement: (state, action) => {

        },
        addHeader: (state, action) => {
            const addHeader = state.header.push(
                <>
                <h3>Placeholder Text</h3>
                </>
            )
            state.header = [...state.header]
            state.showDragzoneText = false
        },
        addDate: (state, action) => {
            const addDate = state.dateInput.push(
                <>
                <label>Placeholder Label</label>
                <input type='date' />
                </>
            )
            state.dateInput = [...state.dateInput]
            state.showDragzoneText = false
        },
    }
})


export const {addinputText, addNumText, addHeader, addDate} = formSlice.actions
export default formSlice.reducer