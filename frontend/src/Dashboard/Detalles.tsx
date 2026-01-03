import { HeaderArrendador } from "./HeaderArrendador"
import LeodegaUI from "../Components/LeodegaUI";

const Detalles: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
            <HeaderArrendador />
            <LeodegaUI />

        </div>
    )
}

export default Detalles;


