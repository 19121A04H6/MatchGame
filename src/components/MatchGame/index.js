import {Component} from 'react'
import NavBar from '../NavBar'
import TabListItems from '../TabListItems'
import ThumbnailItems from '../ThumbnailItems'
import './index.css'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

class MatchGame extends Component {
  state = {
    score: 0,
    timer: 60,
    randomNumber: 0,
    activeTabId: tabsList[0].tabId,
    isPlaying: true,
  }

  componentDidMount() {
    this.intervalId = setInterval(
      this.updateTime,

      1000,
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  playAgain = () => {
    this.setState({
      isPlaying: true,
      timer: 60,
      score: 0,
    })
  }

  getScoreCard = () => {
    const {score} = this.state
    const scoreCard = (
      <div className="card-container">
        <img
          className="trophy-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p className="your-score">YOUR SCORE</p>
        <p className="your-score">{score}</p>
        <button
          onClick={this.playAgain}
          className="play-again-btn"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p>PLAY AGAIN</p>
        </button>
      </div>
    )
    return scoreCard
  }

  getRandomImage = () => {
    const {imagesList} = this.props
    const {randomNumber} = this.state
    const index = Math.ceil(Math.random() * imagesList.length - 1)
    const newImage = (
      <img
        className="random-image"
        src={imagesList[randomNumber].imageUrl}
        alt="match"
      />
    )

    return newImage
  }

  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  getfilteredThumbnail = () => {
    const {activeTabId} = this.state
    const {imagesList} = this.props
    const filteredThumbnails = imagesList.filter(
      eachImage => eachImage.category === activeTabId,
    )

    return filteredThumbnails
  }

  updateTime = () => {
    const {timer} = this.state
    if (timer !== 0) {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    } else {
      this.setState({isPlaying: false})
      clearInterval(this.intervalId)
    }
  }

  clickCorrectThumbnailImage = id => {
    const {imagesList} = this.props
    const {randomNumber} = this.state
    if (imagesList[randomNumber].id === id) {
      this.setState({
        randomNumber: Math.ceil(Math.random() * imagesList.length - 1),
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
    }
  }

  getResult = () => {
    this.setState({isPlaying: false})
  }

  render() {
    const filteredThumbnails = this.getfilteredThumbnail()
    const {score, timer, activeTabId, isPlaying} = this.state

    const {imagesList} = this.props
    return (
      <div className="app-container">
        <ul>
          <NavBar score={score} timer={timer} />
        </ul>
        {isPlaying ? (
          <div>
            <div className="image-container">{this.getRandomImage()}</div>
            <ul className="tabs-container">
              {tabsList.map(eachTab => (
                <TabListItems
                  key={eachTab.tabId}
                  tabDetails={eachTab}
                  isActive={eachTab.tabId === activeTabId}
                  updateActiveTabId={this.updateActiveTabId}
                />
              ))}
            </ul>
            <ul className="thumbnail-container">
              {filteredThumbnails.map(eachImage => (
                <ThumbnailItems
                  clickCorrectThumbnailImage={this.clickCorrectThumbnailImage}
                  key={eachImage.id}
                  imageDetails={eachImage}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div>{this.getScoreCard()}</div>
        )}
      </div>
    )
  }
}

export default MatchGame
