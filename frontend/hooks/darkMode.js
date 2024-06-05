import { useLocalStorage } from '../hooks/useLocalStorage'

export const useDarkMode = () => {
    const [ darkMode, setDarkMode ] = useLocalStorage('darkmode', false)
    return [darkMode, setDarkMode]
}