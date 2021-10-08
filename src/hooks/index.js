import {useState, useEffect} from "react";

export const useDebounced = value => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    let timer;

    useEffect(
        () => {
            timer = setTimeout(() => setDebouncedValue(value), 200)

            return () => clearTimeout(timer)
        }, [value])

    return debouncedValue
}