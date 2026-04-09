import { google } from 'googleapis'

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
)

oAuth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
})

const gmail = google.gmail({ version: 'v1', auth: oAuth2Client })

export async function sendContactEmail({ name, email, message }) {
  const subject = `Nowa wiadomość ze strony od ${name}`
  const body = [
    `Imię: ${name}`,
    `Email: ${email}`,
    '',
    'Wiadomość:',
    message,
  ].join('\n')

  const rawMessage = [
    `From: zdrowoaktywnii@gmail.com`,
    `To: zdrowoaktywnii@gmail.com`,
    `Reply-To: ${email}`,
    `Subject: =?UTF-8?B?${Buffer.from(subject).toString('base64')}?=`,
    `Content-Type: text/plain; charset=UTF-8`,
    '',
    body,
  ].join('\r\n')

  const encodedMessage = Buffer.from(rawMessage)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage,
    },
  })
}
