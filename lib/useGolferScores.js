import useSWR from 'swr'
import { getToken } from './userAuth'

const useGolferScores = golferId => {
  const fetcher = async url => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the scores.')
      error.info = await res.json()
      error.status = res.status
      throw error
    }

    const result = await res.json()
    return result.scores
  }

  const url = golferId
    ? `${process.env.NEXT_PUBLIC_API_URL}/golfers/${golferId}/scores`
    : null

  const { data, error, isLoading } = useSWR(url, fetcher)

  return {
    scores: Array.isArray(data) ? data : [],
    loading: isLoading,
    error: error && error.message,
  }
}

export default useGolferScores
