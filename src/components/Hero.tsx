import React, { FC } from 'react'
import { Avatar, Box, Button, Container, Typography } from '@mui/material'

type HeroProps = {
  siteMetadata: {
    title: string
    description: string
    author: string
  }
}

const Hero: FC<HeroProps> = props => {
  const { title, description, author } = props.siteMetadata
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          color="primary"
          variant="overline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Typography>
        <Typography align="center" variant="h1">
          {author}
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
          variant="subtitle1"
          sx={{ py: 3 }}
        >
          {description}
        </Typography>
      </Container>
    </>
  )
}

export default Hero
