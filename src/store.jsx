import create from 'zustand'

const initialState={
    count: 0,
}

const useStore = create((set)=> ({
    ...initialState,
    increaseCounter : () => set((state)=> ({
        count : state.count + 1
    })),
    decreaseCounter : () => set((state) => ({
        count: state.count - 1
    })),
    increaseByValue: (value) => set((state)=> ({
        count: state.count + value
    })) ,
    resetCounter: () => set((state)=> (initialState))
}))

export default useStore