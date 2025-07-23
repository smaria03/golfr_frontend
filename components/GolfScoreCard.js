const GolfScoreCard = ({ score }) => (
  <div className="flex flex-col p-3 my-4 shadow-md border rounded-md">
    <div className="italic text-gray-400">
      {score.played_at}
    </div>
    <div>
          Scor: <strong>{score.total_score}</strong>
    </div>
  </div>
)

export default GolfScoreCard
