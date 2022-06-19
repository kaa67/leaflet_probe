import { useState } from 'react';
import { Button, Divider } from 'antd';
import { useDispatch } from 'react-redux';

import {
    modeRouteCreator,

    routeCreate,
} from '../../store'
import SiteSelect from '../siteSelector';

const FormRouteCreator = () => {
    const dispatch = useDispatch();
    const [fromId, setFromId] = useState(null);
    const [toId, setToId] = useState(null);

    const handleModeRouteCreator = () =>
        dispatch(modeRouteCreator(false));


    const handleOnSelect = sidePoint => value => {
        if (sidePoint === 'from') {
            setFromId(value); 
        } else {
            setToId(value);
        }
    };

    const handleRouteCreate = () => {
        dispatch(routeCreate({
            from: fromId,
            to: toId,
        }));
        dispatch(modeRouteCreator(false));
    };

    const submitIsDisabled = !fromId || !toId;
    
    return (
        <div>
            <Button
                onClick={handleModeRouteCreator}
            >
                Отмена
            </Button>

            <h2>Создать новый маршрут</h2>

            <Divider />
            <h3>Подать под загрузку</h3>
            <SiteSelect
                index={fromId}
                disabledIndex={toId}
                onSelect={handleOnSelect('from')}
            />

            <Divider />
            <h3>Доставка в</h3>
            <SiteSelect
                index={toId}
                disabledIndex={fromId}
                onSelect={handleOnSelect('to')}
            />

            <Divider />
            <Button
                onClick={handleRouteCreate}
                disabled={submitIsDisabled}
            >
                 Создать
            </Button>
        </div>
    );
};

export default FormRouteCreator;
