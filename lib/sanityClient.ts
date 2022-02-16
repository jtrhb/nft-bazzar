import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '5vy52nek',
  dataset: 'production',
  apiVersion: '2022-02-10',
  token: 'skW1S6aAOr1dHqLUkfHYDSX0IMlctKaLwDKKZxWre15G7HeThdlmCT99nEOQTdE5zS6jkGXGvp4SGhrTz5xw977GGTRg55QVl5XoLZ8bS2DuNK0QNv3O5L2YObhNb9do5HMh2ENug4ULSII2vJbQYiS4UA3vlMt28pOZvW9Os2DJdWp4dpQ6',
  useCdn: false,
})