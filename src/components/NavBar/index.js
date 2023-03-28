import './index.css'

const Navbar = props => {
  const {score, timer} = props

  return (
    <nav className="nav-container">
      <li>
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </li>
      <li className="score-timer-container">
        <p className="score">Score: {score}</p>
        <div className="timer-container">
          <img
            className="timer-image"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="timer">{timer} sec</p>
        </div>
      </li>
    </nav>
  )
}

export default Navbar
