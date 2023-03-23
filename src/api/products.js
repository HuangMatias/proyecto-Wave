import {api} from './client'

export const getProducts = async () => {
    try {
        const response = await api.get('/products')

        return response.data
    } catch (error) {
        console.error(error)
        return []
    }
}