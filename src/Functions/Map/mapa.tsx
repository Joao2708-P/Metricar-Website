import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map()
{
    const position: [number, number] = [-23.5505, -46.6333];

    return(
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
                <Popup>
                    <div>
                        <h2>Localização</h2>
                        <p>Informações adicionais sobre o local.</p>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    )   
}

export default Map