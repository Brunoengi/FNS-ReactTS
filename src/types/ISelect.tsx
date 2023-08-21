import { allInputsName } from "context/MainFormContext";

export interface IdataValue {
    textLabel: string
    value: number
}
export default interface ISelect {
    dataset: number[] | IdataValue[] | Array<{
        textLabel: string
        value: number
    }>
    context: React.ReactNode | string
    labelSelect?: string
    endText?: string | undefined
    id: allInputsName
}

