import { useState } from 'react'

import EmailList from './components/EmailList'

import initialEmails from './data/emails'

import './styles/App.css'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)



  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <header className="header">
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>

          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </div>

        <div className="search">
          <input className="search-bar" placeholder="Search mail" />
        </div>
      </header>
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => {
              setCurrentTab('inbox')
              setSelectedIndex(-1)
            }}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            className={`item ${currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => {
              setCurrentTab('starred')
              setSelectedIndex(-1)
            }}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={e => setHideRead(e.target.checked)}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        { selectedIndex >= 0 && filteredEmails[selectedIndex] ?(
          <>
            <h2> { filteredEmails[selectedIndex].title }</h2>
            <p> Sender: { filteredEmails[selectedIndex].sender }</p>
            <p>-----------------------------------------------</p>
            <p> { filteredEmails[selectedIndex].content }</p>
          </>
        ) : (
          <EmailList filteredEmails={filteredEmails} setEmails={setEmails} setSelectedIndex={setSelectedIndex}></EmailList>
          )
        }

      </main>
      

    </div>
  )
}

export default App
