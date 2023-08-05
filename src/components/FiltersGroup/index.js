import './index.css'

const FiltersGroup = props => {
  const onChangeCategory = id => {
    console.log(id)
    const {categoryOptions, changeTheCategory} = props
    const {categoryId} = categoryOptions
    changeTheCategory(categoryId)
  }

  const onChangeRating = id => {
    console.log(id)
    const {ratingsList, changeTheRating} = props
    const {ratingId} = ratingsList
    changeTheRating(ratingId)
  }
  const {
    categoryOptions,
    ratingsList,
    changeTheCategory,
    changeTheRating,
    activeCategoryId,
    activeRatingId,
  } = props

  const {name, categoryId} = categoryOptions
  const {imageUrl, ratingId} = ratingsList

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <ul>
        <h1> Category </h1>
        {categoryOptions.map(eachCategory => (
          <li>
            <button onClick={onChangeCategory} value={activeCategoryId}>
              <p> {eachCategory.name} </p>
            </button>
          </li>
        ))}
      </ul>
      <ul>
        <h1> Rating </h1>
        {ratingsList.map(eachList => (
          <li className="ratingContainer">
            <button
              type="button"
              onClick={onChangeRating}
              value={activeRatingId}
            >
              <img src={eachList.imageUrl} className="ratings" />
              <p> & up</p>
            </button>
          </li>
        ))}
      </ul>
      <button> Clear Filters </button>
    </div>
  )
}

export default FiltersGroup
