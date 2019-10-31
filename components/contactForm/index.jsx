import React, { useState } from 'react'

import './styles.scss'
import Button from '../button'
import Stack from '../stack'
import LazyHydrate from 'react-lazy-hydration'

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    emaildjkflajf: '',
    firstNameidfoajfy: '',
    lastNamexxidofjs: '',
    message: '',
    name: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        emaildjkflajf: '',
        firstNameidfoajfy: '',
        lastNamexxidofjs: '',
        message: '',
        name: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    if (inputs.name === '') {
      const res = await fetch('api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      })
      const text = await res.text()
      handleResponse(res.status, text)
    } else {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: '' }
      })
      setInputs({
        emaildjkflajf: '',
        firstNameidfoajfy: '',
        lastNamexxidofjs: '',
        message: '',
        name: ''
      })
    }
  }

  return (
    <form onSubmit={handleOnSubmit} className="contact-form">
      <Stack wide>
      <div className="contact-form__section">
        <div className="contact-form__description">
          <h3>Deine Kontaktdaten</h3>
          <p>Damit ich dich erreichen kann.</p>
        </div>

        <div role="group" className="contact-form__inputs">
          <div>
            <label htmlFor="emaildjkflajf">Email-Adresse</label>
            <input
              type="email"
              name="emaildjkflajf"
              id="emaildjkflajf"
              onChange={handleOnChange}
              required
              value={inputs.emaildjkflajf}
            />
          </div>
          <div>
            <label htmlFor="firstNameidfoajfy">Vorname</label>
            <input
            type="text"
            name="first-nameidfoajfy"
            id="firstNameidfoajfy"
            onChange={handleOnChange}
            required
            value={inputs.firstNameidfoajfy}
          />
          </div>
          <div>
            <label htmlFor="lastNamexxidofjs">Nachname</label>
            <input
            type="text"
            name="last-namexxidofjs"
            id="lastNamexxidofjs"
            onChange={handleOnChange}
            required
            value={inputs.lastNamexxidofjs}
          />
          </div>
          <div>
            <label className="ohnohoney" htmlFor="name">Name</label>
            <input tabIndex="-1" className="ohnohoney" autoComplete="off" type="text" id="name" name="name" />
          </div>
        </div>
      </div>

      <div className="contact-form__section">
        <div className="contact-form__description">
          <h3>Dein Projekt</h3>
          <p>
            Beschreibe hier dein Projekt in ein paar wenigen Sätzen. Was ist das Ziel? Welche Rahmenbedingungen sind zu
            beachten?
          </p>
        </div>
        <div>
          <label htmlFor="message">Deine Nachricht</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            onChange={handleOnChange}
            required
            value={inputs.message}
          >
          </textarea>
        </div>
      </div>
      <div className="contact-form__section">

        <Stack narrow className="contact-form__submit-section">
          <p>Bitte fülle alle Felder aus</p>
          <Button disabled={status.submitting} type="submit">
          {!status.submitting
            ? !status.submitted
              ? 'Absenden'
              : 'Erfolgreich versendet'
            : 'Am Verarbeiten...'}
          </Button>
        </Stack>
      </div>
      </Stack>
    </form>
  )
}

export default ContactForm
