
import styled from 'styled-components'

const Score = ( {toScore}) => {
  return (
    <>
      <ScoreContainer> 
        <h1>{toScore}</h1>
        <p>Total Score</p>
      </ScoreContainer>
    </>
  )
}

export default Score

const ScoreContainer = styled.div`

max-width: 300px;
text-align: center;
line-height: 0.2;

h1{
font-size: 100px;

}

p{
    font-size: 30px;
    font-weight: 600;
}
`
