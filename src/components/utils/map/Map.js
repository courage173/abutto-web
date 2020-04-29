import React from 'react'
import './mapStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faExchangeAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const Map = () => {
    return (
        <div className='map_section_container'>
            <div className='map_left_section'>
                <FontAwesomeIcon icon={faLocationArrow} />
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className='map_right_section'>
                <div className='map_top_sec'>
                    <div style={{ display: 'flex' }}>
                        <div style={{ fontSize: '13px', lineHeight: '20px', marginLeft: '12px' }}>Your Location</div>
                    </div>
                    <div className='exchange_arrow_icon'><FontAwesomeIcon icon={faExchangeAlt} style={{ height: '12px' }} /></div>
                </div>
                <hr className='horizontal_line' />
                <div className='map_bottom_sec'>
                    <div style={{ fontSize: '10px', lineHeight: '20px', color: '#000000' }}>Garki 2</div>
                    <div style={{ color: '#000000' }}>|</div>
                    <button className='map_button'>x</button>
                </div>
            </div>
        </div>
    )
}

export default Map
