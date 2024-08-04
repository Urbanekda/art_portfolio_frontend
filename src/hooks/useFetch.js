import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const token = import.meta.env.VITE_API_TOKEN;

            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: token,
                        'Content-Type': 'application/json'

                    },
                })
                const json = await response.json()
                
                setData(json.data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData();
    }, [url])

    return { loading, error, data }
}

export default useFetch