import IButton from "./IButton"

export default interface IBasicButton {
  text: string,
  variant: 'text' | 'contained' | 'outlined'
  activeFunction: Function
}