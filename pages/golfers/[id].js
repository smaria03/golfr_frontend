import { useRouter } from 'next/router'
import useGolferInfo from '../../lib/useGolferInfo'
import useGolferScores from '../../lib/useGolferScores'
import GolfScoreCard from '../../components/GolfScoreCard'
import Layout from '../../components/Layout'

export default function GolferProfile() {
  const { id } = useRouter().query
  const { golfer, loading: loadingGolfer } = useGolferInfo(id)
  const { scores, loading: loadingScores } = useGolferScores(id)

  if (loadingGolfer || loadingScores) {
    return <p className="p-4">Loading..</p>
  }

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          {golfer?.name}&#39;s scores:
        </h1>
        <div className="space-y-4">
          {Array.isArray(scores) && scores.length > 0 ? (
            scores.map(score => (
              <GolfScoreCard key={score.id} score={score} />
            ))
          ) : (
            <p className="text-gray-500">This player has no scores yet.</p>
          )}
        </div>
      </div>
    </Layout>
  )
}
