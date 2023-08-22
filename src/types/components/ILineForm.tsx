import ISelect from "./ISelect";
import { allInputsName } from "context/MainFormContext";

export default interface ILineForm extends Partial<ISelect> {
    labelText?: string | React.ReactElement, 
    id: allInputsName
    width?: string, 
    unit?: string | React.ReactNode, 
    labelPopOver?: string, 
    textPopOver?: string | undefined,
    type?: 'input' | 'select'
}