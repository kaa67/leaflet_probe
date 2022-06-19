import { useSelector } from "react-redux";

import {
    sitesInProgressSelector,
    routesInProgressSelector,
} from "../../store/selectors";
import Spin from "./Spin";

const inProgressStyle = {
    position: 'absolute',
    top: '8px',
    right: '8px',
    padding: '8px',
    color: 'white',
    backgroundColor: 'red',
};

const idleStyle = {
    position: 'absolute',
    top: '8px',
    right: '8px',
    padding: '8px',
    color: 'white',
    backgroundColor: 'green',
};

const Informer = () => {
    const sitesInProgress = useSelector(sitesInProgressSelector);
    const routesInProgress = useSelector(routesInProgressSelector);
    const style = 
        sitesInProgress || routesInProgress
        ? inProgressStyle
        : idleStyle;

    return (
        <div style={style}>
            {sitesInProgress && (
                <div>{sitesInProgress} <Spin /></div>
            )}
            {routesInProgress && (
                <div>{routesInProgress} <Spin /></div>
            )}
        </div>
    );
};

export default Informer;
