import { useSelector } from "react-redux";

import { modeRouteCreatorSelector } from "../../store/selectors";
import FormRouteCreator from "../formRouteCreator";
import Routes from "./routes";
import Separator from "./separator";
import Map from "./map";

const Dashboard = () => {
    const isModeRouteCreator = useSelector(modeRouteCreatorSelector);

    if (isModeRouteCreator) {
        return <FormRouteCreator />;
    }

    return (
        <div className="dashboard">
            <Routes />
            <Separator />
            <Map />
        </div>
    );
};

export default Dashboard;
