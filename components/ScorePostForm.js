const ScorePostForm = ({ totalScore, setTotalScore, playedAt, setPlayedAt,
  numberOfHoles, setNumberOfHoles, onSubmit }) => {
  const TODAY = new Date().toISOString().slice(0, 10)

  return (
    <form onSubmit={onSubmit}>
      <div className="border border-dashed border-gray-300 p-3 my-1 lg:w-1/3 md:w-1/2">
        <div>
          Total Score
          <input
            type="number"
            name="total_score"
            value={totalScore}
            onChange={e => setTotalScore(e.target.value)}
            min="20" max="140"
            className="form-input h-8 w-20 ml-3 my-2"
          />
        </div>
        <div>
          Played Date
          <input
            type="date"
            name="played_at"
            value={playedAt}
            onChange={e => setPlayedAt(e.target.value)}
            max={TODAY}
            className="form-input h-8 ml-3 my-2"
          />
        </div>
        <div>
          Number of Holes
          <select
            name="number_of_holes"
            value={numberOfHoles}
            onChange={e => setNumberOfHoles(parseInt(e.target.value))}
            className="form-input h-9 ml-3 my-2"
          >
            <option value={9}>9 Holes</option>
            <option value={18}>18 Holes</option>
          </select>
        </div>
        <button className="w-40 p-1 my-2 bg-gray-200 rounded-lg">
          Post
        </button>
      </div>
    </form>
  )
}

export default ScorePostForm
