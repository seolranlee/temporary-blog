import { useContext } from 'react'
import { SettingsContext } from 'contexts/settingsContext'
import type { SettingsContextValue } from 'contexts/settingsContext'

export const useSettings = (): SettingsContextValue =>
  useContext(SettingsContext)
