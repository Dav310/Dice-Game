
import './RollDice.css'

const RollDice = ({rollDice , currentDice}) => {

    return (
    
    <div className='dice-container'>
        <div className=' dice-section' onClick={rollDice}>
            <img src={`/dice/dice_${currentDice}.png`} alt= {`Dice ${currentDice}`} />
        </div>
        <p>Click on dice to roll</p>
    </div>
    
  )
}

export default RollDice;

