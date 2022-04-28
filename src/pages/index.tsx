import React, { FC, useEffect, useState } from 'react'
import Text from 'components/Text'
import { Link } from 'gatsby'
import Hero from 'components/Hero'
import { graphql } from 'gatsby'
import {
  Button,
  CssBaseline,
  Card,
  CardHeader,
  Divider,
  IconButton,
  ThemeProvider,
} from '@mui/material'
import { useSettings } from 'hooks/useSettings'
import { createTheme } from 'theme/index'
import { Moon as MoonIcon } from 'icons/moon'
import { Sun as SunIcon } from 'icons/sun'

type MetaProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const IndexPage: FC<MetaProps> = props => {
  const {
    data: {
      site: { siteMetadata },
    },
  } = props
  const { settings } = useSettings()
  const [selectedTheme, setSelectedTheme] = useState(settings.theme)

  useEffect(() => {
    setSelectedTheme(settings.theme)
  }, [settings.theme])

  const handleSwitch = (): void => {
    setSelectedTheme(prevSelectedTheme => {
      return prevSelectedTheme === 'light' ? 'dark' : 'light'
    })
  }

  const theme = createTheme({
    ...settings,
    mode: selectedTheme,
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton onClick={handleSwitch}>
        {selectedTheme === 'light' ? (
          <MoonIcon fontSize="small" />
        ) : (
          <SunIcon fontSize="small" />
        )}
      </IconButton>
      <Hero siteMetadata={siteMetadata} />
      <Text text="Home" />
      <Link to="/info/">To Info</Link>
      <Button variant="contained">Hello World</Button>
    </ThemeProvider>
  )
}

export default IndexPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
