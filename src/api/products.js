import {api} from './client'
import {default_produc_list} from './default_response'

export const getProducts = async () => {
    try {
        const response = await api.get('/products')

        return response.data
    } catch (error) {
        console.error(error)
        return default_produc_list
    }
}