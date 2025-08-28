import Email from "../Email"

function EmailList({ filteredEmails, setEmails, setSelectedIndex }){

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

return (
  <> 
    <ul>
      {filteredEmails.map((email, index) => (
        <Email onClick={() => setSelectedIndex(index) } key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} />
      ))}
    </ul>
  </>

)

}




export default EmailList
