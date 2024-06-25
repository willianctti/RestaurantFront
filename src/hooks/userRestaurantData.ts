import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const API = 'https:/localhost:8080/'

const fetchData = async () => {
    const response = axios.get(API + '/food')
    return response;
}

export function useUserRestaurantData() {
    const query = useQuery({
        queryKey: ['data'],
        queryFn: fetchData
    })

    return {
        ...query,
        data: query.data?.data
    }
}