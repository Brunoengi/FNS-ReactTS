export default interface ISelect {
    dataset: Array<number | string>
    context: React.ReactNode | string
    labelSelect?: string
    endText?: string | undefined
}

export interface IdataValue {
    dataValue: string | number
}