function Content({ email, setSelectedIndex }){

return(
  <>
    <button onClick={ () => setSelectedIndex(-1) }> Back </button>
    <h2> { email.title }</h2>
    <p> Sender: { email.sender }</p>
    <p>-----------------------------------------------</p>
    <p> { email.content }</p>
  </>
)


}

export default Content
