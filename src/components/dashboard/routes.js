import { Button, Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { routeDelete, routeUpdate } from '../../store';

import {
    routesListSelector,
    routesWithSiteListSelector,
} from '../../store/selectors';
import SiteSelect from '../siteSelector';

const Routes = () => {
    const dispatch = useDispatch();
    const routes = useSelector(routesListSelector);

    const handleRouteDelete = index => () => {
        dispatch(routeDelete(index));
    };
    const handleOnSelect = (index, sidePoint) => value => {
        if (routes[index]) {
            dispatch(routeUpdate({
                index,
                route: {
                    from: sidePoint === 'from' ? value : routes[index].from,
                    to:  sidePoint === 'to' ? value : routes[index].to,
                },
            }))
        }
    };

    const columns = [
        {
            title: 'Подача',
            key: 'from',
            dataIndex: 'from',
            render: (_,route, routeIndex) => (
                <SiteSelect
                    index={route.from.id}
                    disabledIndex={route.to.id}
                    onSelect={handleOnSelect(routeIndex, 'from')}
                />
            ),
        },
        {
            title: 'Доставка',
            key: 'to',
            dataIndex: 'to',
            render: (_, route, routeIndex) => (
                <SiteSelect
                    index={route.to.id}
                    disabledIndex={route.from.id}
                    onSelect={handleOnSelect(routeIndex, 'to')}
                />
            ),
        },
        {
            title: 'Действия',
            key: 'actions',
            render: (_, route, index) => (
                <Button
                    onClick={handleRouteDelete(index)}
                    type="link"
                >Удалить</Button>
            ),
        },
    ];    
    const dataSource = useSelector(routesWithSiteListSelector);
    
    return (
        <div>
            <h2>Таблица маршрутов</h2>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default Routes;
