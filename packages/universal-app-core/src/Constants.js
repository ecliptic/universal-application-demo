export const MAC = process.platform === 'darwin'
export const DEV = process.env.NODE_ENV === 'development'
export const PORT = process.env.PORT || 3000

export const USER_DATA_KEY = '@UniversalApp:userData'

export const COLORS = {
  glowGreen: '#19FF81',
  darkGreen: '#041607',
  lightGreen: '#11581E',
}
