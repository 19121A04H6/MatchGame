import './index.css'

const TabListItems = props => {
  const {tabDetails, isActive, updateActiveTabId} = props
  const {displayText, tabId} = tabDetails
  const activeIdClassName = isActive ? 'activeClassname' : ''

  const clickTabId = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        onClick={clickTabId}
        className={`tab-button ${activeIdClassName} `}
        type="button"
      >
        <p className="display-text">{displayText}</p>
      </button>
    </li>
  )
}

export default TabListItems
