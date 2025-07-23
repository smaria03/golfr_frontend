import useSWR from 'swr'
import { getToken } from './userAuth'

const useGolferScores = golferId => {
  const fetcher = async url => {
    const res = await fetch(url, {
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

  const { data, error, isLoading } = useSWR(
    golferId
      ? `${process.env.NEXT_PUBLIC_API_URL}/golfers/${golferId}/scores`
      : null,
    fetcher
  )

  return {
    scores: Array.isArray(data) ? data : [],
    loading: isLoading,
    error: error && error.message,
  }
}

export default useGolferScores
