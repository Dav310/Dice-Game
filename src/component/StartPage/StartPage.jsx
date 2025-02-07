
import './startPage.css'

const StartPage = ({toggle}) => {
  return (
    <>
        <div className="main">
            <div className="img-section">
                <img src="./dices.png" alt="" />
            </div>
            <div className="text-section">
                <h1>DICE GAME</h1>
                <div className='play-btn'>
                    <button onClick={toggle} > Play Now </button>
                </div>
            </div>
        </div>
    </>
  ) 
}

export default StartPage