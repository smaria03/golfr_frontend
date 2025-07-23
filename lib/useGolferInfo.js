import useSWR from 'swr'
import { getToken } from './userAuth'

const useGolferInfo = golferId => {
  const fetcher = async url => {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    if (!res.ok) { throw new Error('Failed to fetch golfer info') }
    return res.json()
  }

  const { data, error, isLoading } = useSWR(
    golferId ? `${process.env.NEXT_PUBLIC_API_URL}/golfers/${golferId}` : null,
    fetcher
  )

  return {
    golfer: data,
    loading: isLoading,
    error,
  }
}

export default useGolferInfo
