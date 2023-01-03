import React from 'react'
import './wertschätzungSection.scss';
import RightIcon from '../../../assets/icons/nav-right.svg';
import ClockIcon from '../../../assets/icons/lg-clock.svg';
import HomeIcon from '../../../assets/icons/lg-home.svg';
import LocationIcon from '../../../assets/icons/lg-location.svg';
import XmldIcon from '../../../assets/icons/xmld.svg';
import DinIcon from '../../../assets/icons/din.svg';
import { NavLink } from 'react-router-dom';
export default function WertschätzungSection() {
    return (
        <div>
            <div className='wertschätzung-section-all-content-alignment'>
                <div className='container'>
                    <div className='box'>
                        <div className='box-header-alignment'>
                            <div>
                                <NavLink to="/">
                                <img src={RightIcon} alt="RightIcon" />
                                </NavLink>
                            </div>
                            <div>
                                <span>Dein Weg zu mehr Wertschätzung und mehr Perspektive </span>
                            </div>
                        </div>

                        <div className='grid'>
                            <div className='grid-items'>
                                <div className='all-input-style-box-design'>
                                    <div className='input select-width'>
                                        <label>Anrede</label>
                                        <select>
                                            <option>Mr.</option>
                                            <option>Mrs.</option>
                                        </select>
                                    </div>
                                    <div className='input'>
                                        <label>Vor- Nachname</label>
                                        <input type="text" />
                                    </div>
                                    <div className='input'>
                                        <label>E-Mail</label>
                                        <input type="text" />
                                    </div>
                                    <div className='input'>
                                        <label>Telefonnummer</label>
                                        <input type="text" />
                                    </div>
                                    <div className='input'>
                                        <label>Postleitzahl</label>
                                        <input type="text" />
                                    </div>
                                    <div className='checkbox-all-content-alignment'>
                                        <div className='relativ-div'>
                                            <input type="checkbox" id="id" />
                                            <label htmlFor='id'></label>
                                        </div>
                                        <div className='relativ-div'>
                                            <span>Ich habe die geltenden <a>Datenschutzhinweise</a> zur Kenntnis genommen.
                                            </span>
                                        </div>
                                    </div>
                                    <div className='button-design'>
                                        <NavLink to="/details-page">
                                        <button>Bewerbung absenden</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-items'>
                                <div className='icon-text-alignment'>
                                    <div className='icon-text-grid'>
                                        <div className='icon-text-grid-items'>
                                            <img src={ClockIcon} alt="ClockIcon" />
                                        </div>
                                        <div className='icon-text-grid-items'>
                                            <p>Voll-/Teilzeit und selbständig</p>
                                            <span>
                                                flexible Arbeitszeiten
                                                keine Kernzeiten unbefristete Einstellung
                                                nach Probezeit.
                                            </span>
                                        </div>
                                    </div>
                                    <div className='icon-text-grid'>
                                        <div className='icon-text-grid-items'>
                                            <img src={HomeIcon} alt="HomeIcon" />
                                        </div>
                                        <div className='icon-text-grid-items'>
                                            <p>Home-Office</p>
                                            <span>
                                                Das Durschnittseinkommen eines FE Finance Beraters beträgt ca. 112.000€.
                                            </span>
                                        </div>
                                    </div>
                                    <div className='icon-text-grid'>
                                        <div className='icon-text-grid-items'>
                                            <img src={LocationIcon} alt="LocationIcon" />
                                        </div>
                                        <div className='icon-text-grid-items'>
                                            <p>Standort unabhängig</p>
                                            <span>
                                                über 30 Standorte in Deutschland moderne Offices
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='sec-grid'>
                                    <div className='sec-grid-items'></div>
                                    <div className='sec-grid-items'>
                                        <div className='all-logo-alignment'>
                                            <div className='first-logo'>
                                                <span>verbraucherschutzkonform nach</span>
                                                <img src={XmldIcon} alt="XmldIcon" />
                                            </div>
                                            <div className='sec-logo'>
                                                <span>Beratung nach DIN Norm 77230</span>
                                                <img src={DinIcon} alt="DinIcon" />
                                                <p>in Zusammenarbeit mit Stiftung Warentest erarbeitet</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
