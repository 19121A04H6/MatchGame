import './index.css'

const ThumbnailItems = props => {
  const {imageDetails, clickCorrectThumbnailImage} = props
  const {id, thumbnailUrl} = imageDetails

  const clickThumbnail = () => {
    clickCorrectThumbnailImage(id)
  }

  return (
    <li className="thumbnail-item">
      <button onClick={clickThumbnail} className="thumbnail-btn" type="button">
        <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItems
