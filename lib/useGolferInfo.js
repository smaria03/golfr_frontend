import useSWR from 'swr'
import { getToken } from './userAuth'

const useGolferInfo = golferId => {
  const fetcher = async url => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    if (!res.ok) {
      const error = new Error('Failed to fetch golfer info')
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json()
  }

  const url = golferId
    ? `${process.env.NEXT_PUBLIC_API_URL}/golfers/${golferId}`
    : null

  const { data, error } = useSWR(url, fetcher)

  return {
    golfer: data,
    error: error && error.message,
  }
}

export default useGolferInfo
