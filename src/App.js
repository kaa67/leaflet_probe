import { useSelector } from 'react-redux'

const App = () => {
    const sites = useSelector(state => state.sites.list);
    console.log(sites)
    return (
        <>
            Leaflet sample
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
