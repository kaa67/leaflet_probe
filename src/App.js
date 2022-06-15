import { connect } from 'react-redux';

const mapStateToProps = state => ({
  sites: state.sites.sites,
});

const App = ({ sites }) => {
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
        )
      )}
    </>
  );
};

export default connect(mapStateToProps)(App);
