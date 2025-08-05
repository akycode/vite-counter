const button = ({imageurl,buttonName,clickhandler}) => {
  return (
    <button onClick={clickhandler}>
      <img src= {imageurl} alt= {buttonName} />
    </button>
  )
}

export default button

