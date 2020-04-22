import React from 'react'
import './mapStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faExchangeAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const Map = () => {
    return (
        <div>
            <div className='map_top_sec'>
                <div style={{ display: 'flex' }}>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    <div style={{ fontSize: '13px', lineHeight: '20px', marginLeft: '12px' }}>Your Location</div>
                </div>
                <div className='exchange_arrow_icon'><FontAwesomeIcon icon={faExchangeAlt} style={{ height: '12px' }} /></div>
            </div>
            <div></div>
        </div>
    )
}

export default Map
