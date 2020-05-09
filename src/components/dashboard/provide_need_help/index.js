import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './../dashboardStyle.css';
import HelpCard from '../../utils/help_card/HelpCard'
import MyButton from '../../utils/button/Button'

class Help extends Component {

    handleHelp(link) {
        this.props.history.push(`/${link}`)
    }

    render() {
        return (

            <Fragment>
                <div className='dashboard_card'>
                    <div className={this.props.help === 'provide' ? 'dash_card1' : 'dash_card2'} onClick={() => this.handleHelp('provide help', 'provide_help')}>
                        <div style={{ margin: '0', fontWeight: 'bold', fontSize: '18px' }}>Provide Help</div>
                        <div id='btn_provide_text2' style={{ margin: '0', fontSize: '14px' }}>Reach out to others in<br /> need of help</div>
                    </div>
                    <div className={this.props.help === 'need' ? 'dash_card1' : 'dash_card2'} onClick={() => this.handleHelp('need help', 'need_help')}>
                        <div style={{ margin: '0', fontWeight: 'bold', fontSize: '18px' }}>Need Help</div>
                        <div style={{ margin: '0', fontSize: '14px' }}>In need of help</div>
                    </div>
                </div>
                <div className='line_break'>
                    <p>Upcoming Order</p>
                    <hr />
                </div>
                <div>
                    <HelpCard data={this.props.helpData} />
                </div>
                <div className='view_schedule_btn'>
                    <MyButton
                        type='default'
                        title='view all shedule'
                        linkTo='shedule_order'
                        altStyle={{ color: '#3750B2', fontWeight: 'bold', fontSize: '16px' }}
                        sty={{
                            background: 'none', border: 'none', width: '162px', padding: '5px',
                            marginBottom: '50px', height: '22px', marginTop: '30px'
                        }}
                    />
                </div>
            </Fragment>


        )
    }
}

export default withRouter(Help)
