import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

import { modeRouteCreator } from '../../store'
import { modeRouteCreatorSelector } from "../../store/selectors";

const Menu = () => {
    const dispatch = useDispatch();
    const isModeRouteCreator = useSelector(modeRouteCreatorSelector);

    const handleModeRouteCreator = () =>
        dispatch(modeRouteCreator(true));

    return (
        <>
            <Button
                onClick={handleModeRouteCreator}
                disabled={isModeRouteCreator}
            >
                Новый маршрут
            </Button>
        </>
    );
};

export default Menu;
