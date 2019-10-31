import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://tf-portfolio.cdn.prismic.io/api/v2'

export const accessToken = ''

// export const hrefResolver = doc => {
//   if (doc.type === 'post') {
//     return `/post?uid=${doc.uid}`
//   }
//   return '/'
// }

export const linkResolver = doc => {
  if (doc.type === 'work') {
    return `/projekt/${doc.uid}`
  }
}

export const client = Prismic.client(apiEndpoint, { accessToken })
