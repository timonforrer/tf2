const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { emaildjkflajf, firstNameidfoajfy, lastNamexxidofjs, message, name } = req.body

  const email = emaildjkflajf
  const firstName = firstNameidfoajfy
  const lastName = lastNamexxidofjs

  const msg = {
    to: 'timon.forrer@gmail.com',
    from: `Timon Forrer <info@timonforrer.ch>`,
    templateId: 'd-415a998c8cb64530860988cacfcf35a8',
    dynamic_template_data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    }
  }

  // const content = {
  //   to: 'timon.forrer@gmail.com',
  //   from: `${firstName} ${lastName} <${email}>`,
  //   subject: `Kontaktanfrage von ${email} über timonforrer.ch`,
  //   text: message,
  //   html: `<p>${message}</p>`
  // }

  if (name !== '') {
    res.status(200).send('Nachricht wurde sehr erfolgreich versendet.')
  } else {
    try {
      await sgMail.send(msg)
      res.status(200).send('Nachricht wurde erfolgreich versendet.')
    } catch(error) {
      console.log('ERROR', error)
      res.status(400).send('Fehler beim Senden der Nachricht.')
    }
  }
}
