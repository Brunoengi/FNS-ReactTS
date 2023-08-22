import IButton from "./IButton";

export default interface IPopOver extends IButton {
    labelPopOver: string, 
    textPopOver: string | undefined
}