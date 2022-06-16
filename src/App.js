import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { sitesFetch } from './redux';

const App = () => {
    const sites = useSelector(state => state.sites.list);
    const dispatch = useDispatch();

    useEffect(
      () => {
          dispatch(sitesFetch());
      },
      [dispatch],
    );

    return (
        <>
            <h1>Leaflet sample</h1>
            <hr />
            {(sites || []).map(
                site => (
                    <div
                        key={site.id}
                    >
                        {site.name}
                    </div>
                ),
            )}
        </>
    );
};

export default App;
