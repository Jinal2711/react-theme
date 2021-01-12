import React from 'react';
import myself from '../images/myself.png'

const About = () => {
    return (
        <div>
            <div className="about-page" style={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* <div><img src={myself} className="profile"/></div> */}
                <div class="row">
                    <div class="column">
                        <div><img src={myself} className="profile" /></div>
                    </div>

                    <div className="column_right">
                        <div className="profile-name"><i>Jinal Vaghasiya</i></div>
                        <p className="profile-des">I'm a software engineer, self motivated, hard working and front-end developer with 3+ years of experience in designing, developing and managing complex sites.
                        Good understanding of Javascript, frameworks of javascript. Seeking for an opportunity to work in a challenging environment tp prove my skills and utilize my knowledge and intelligence in the growth of the organization.
                        </p>
                        {/* <table>
                            <tr>
                                <td>
                                    <div class="set-size charts-container">
                                        <div class="pie-wrapper progress-95 style-2">
                                            <span class="label">95<span class="smaller">%</span></span>
                                            <div class="pie">
                                                <div class="left-side half-circle"></div>
                                                <div class="right-side half-circle"></div>
                                            </div>
                                            <div class="shadow"></div>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                        </table> */}
                        <div>
                            <p className="profile-info"><i>General Info</i></p>
                            <table className="profile-info-table">
                                <tr>
                                    <td><h3><i>DOB:</i></h3></td>
                                    <td>November 27, 1995</td>
                                </tr>
                                <tr>
                                    <td><h3><i>Add:</i></h3></td>
                                    <td>Anand Nagar, Dahisar(E), Mumbai-400068.</td>
                                </tr>
                                <tr>
                                    <td><h3><i>Mail:</i></h3></td>
                                    <td>jinalbvaghasiya@gmail.com</td>
                                </tr>
                                <tr>
                                    <td><h3><i>Phone:</i></h3></td>
                                    <td>+91-7977898193</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;