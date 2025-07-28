import { useState, useCallback } from 'react'
import { Collapse } from 'react-collapse'
import useScorePost from '../lib/useScorePost'
import ScorePostForm from './ScorePostForm'

const TODAY = new Date().toISOString().slice(0, 10)

const ScorePostWidget = () => {
  const [ open, setOpen ] = useState(false)
  const onClick = useCallback(
    () => setOpen(!open),
    [ open, setOpen ]
  )

  const [ totalScore, setTotalScore ] = useState(80)
  const [ playedAt, setPlayedAt ] = useState(TODAY)
  const [ numberOfHoles, setNumberOfHoles ] = useState(9)

  const { postScore } = useScorePost()

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      postScore(totalScore, playedAt, numberOfHoles)
      setOpen(false)
    },
    [ totalScore, playedAt, numberOfHoles, postScore ]
  )

  return (
    <div>
      <div
        className="underline cursor-pointer"
        onClick={onClick}
        role="switch"
      >
        Want to post a score?
      </div>
      <Collapse isOpened={open}>
        <ScorePostForm
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          playedAt={playedAt}
          setPlayedAt={setPlayedAt}
          numberOfHoles={numberOfHoles}
          setNumberOfHoles={setNumberOfHoles}
          onSubmit={onSubmit}
        />

      </Collapse>
    </div>
  )
}

export default ScorePostWidget
