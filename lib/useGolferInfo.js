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
    if (!res.ok) { throw new Error('Failed to fetch golfer info') }
    return res.json()
  }

  const url = golferId
    ? `${process.env.NEXT_PUBLIC_API_URL}/golfers/${golferId}`
    : null

  const { data, error, isLoading } = useSWR(url, fetcher)

  return {
    golfer: data,
    loading: isLoading,
    error,
  }
}

export default useGolferInfo
