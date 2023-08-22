import { createContext } from "react";
import IResults from "types/context/IResults";


export const MainResultsContext = createContext<Record< keyof IResults , number | string>>({
    alamb:'', alfac:'', eu:'', qlim:'', serviceBendingMoment:'', fck:'', fyk:'', E:'', fcd:'', tcd:'', fyd:'', amd:'', delta:'', amilim:'', ami:'', asl:'', aas:'', a:'', romin:'', asmin:'', ast: ''
})


