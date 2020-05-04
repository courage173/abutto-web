import React, { Component } from 'react';
import './profileStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faEye, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bosky from '../../../assets/bosky.png';

class Profile extends Component {
    render() {
        return (

            <div className="profile-section">
                <div className="navs">
                    <div className="edit-profile">Edit Profile</div>
                    <button className="save">Save <FontAwesomeIcon icon={faArrowRight} className="arrow" /></button>
                </div>

                <div className="edit-section container-fluid">
                    <div className="blue-bg">
                        <button className="photo"><FontAwesomeIcon icon={faCamera} className="camera" />Change Profile</button>
                    </div>

                    <div className="user-edit-section">
                        <div className="user-container">
                            <img className="user-icon" src={bosky} alt='profile' style={{
                                height: '150px', width: '150px', borderRadius:
                                    '100%', objectFit: 'cover'
                            }} />
                            <div className="foto-edit">
                                <FontAwesomeIcon icon={faCamera} className="edit-icon" />
                            </div>
                            <div className="name">Jane Doe</div>
                            <button className="available">Available</button>
                        </div>
                        <div className="input-section">
                            <p className="acct">Account Setting</p>
                            <hr className="line" />
                            <div className="form">
                                <div className="left-input">
                                    <div className="first">First Name</div><br />
                                    <input className="input" type="text" placeholder="Jane" /><br />
                                    <div className="first">Password</div><br />
                                    <input className="input" type="text" placeholder="********"
                                    /><span><FontAwesomeIcon icon={faEye} style={{ color: '#DADADA', cursor: 'pointer', marginLeft: '-2rem' }} /></span>
                                    <div className="first">Email</div><br />
                                    <input className="input" type="email" placeholder="jandoe@gmail.com" /><br />
                                </div>
                                <div className="right-input">
                                    <div className="first">Last Name</div><br />
                                    <input className="input" type="text" placeholder="Doe" /><br />
                                    <div className="first">Gender</div><br />
                                    <select className="input" name="gender" placeholder="Doe"><option>Male</option><option>Female</option></select>
                                    <div className="first">Telephone</div><br />
                                    <input className="input" type="number" placeholder="Doe" /><br />
                                </div>

                                <div className="address">Address</div>
                                <input className="address-input" type="text" />

                                <div className="left-input">
                                    <div className="first">City</div><br />
                                    <input className="input" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile;