const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const IBMPlexSans = new FontFaceObserver('IBM Plex Sans')

  IBMPlexSans.load().then(() => {
    document.documentElement.classList.add('ibm-plex-sans')
  })
}

export default Fonts
