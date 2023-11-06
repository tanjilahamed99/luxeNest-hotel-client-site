import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

 const  SimpleMap=() => {
    const defaultProps = {
        center: {
            lat: 23.8103,
            lng: 90.4125
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div className='my-20' style={{ height: '80vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={23.7451}
                    lng={90.3975}
                    text="LuxeNest"
                />
            </GoogleMapReact>
        </div>
    );
}



AnyReactComponent.propTypes = {
    text: PropTypes.string
};

export default SimpleMap