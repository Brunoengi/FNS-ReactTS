import ISelect from "./ISelect";

export default interface ILineForm extends Partial<ISelect> {
    labelText?: string | undefined, 
    id?: string | undefined, 
    width?: string, 
    unit?: string | React.ReactNode, 
    labelPopOver?: string, 
    textPopOver?: string | undefined,
    type?: 'input' | 'select'
}