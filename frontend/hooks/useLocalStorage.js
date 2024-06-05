import { useState } from "react";


export function useLocalStorage(key, value) {
    const [v, setV ] = useState(() => {
        const initV = localStorage.getItem(key)
        return initV ? JSON.parse(initV) : value
    })
    const setVLS = value => {
        setV(value)
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [v, setVLS]
}