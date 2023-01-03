import React from 'react'
import './warumSection.scss';
import EditIcon from '../../../assets/icons/edit.svg';
import CapaIcon from '../../../assets/icons/Capa.svg';
import CallIcon from '../../../assets/icons/call.svg';
import ThumbIcon from '../../../assets/icons/thumb.svg';
import DateIcon from '../../../assets/icons/date.svg';
import VectorIcon from '../../../assets/icons/Vector.svg';
import { NavLink } from 'react-router-dom';
export default function WarumSection() {
  return (
    <div>
        <div className='warum-all-section-content-alignment'>
            <div className='container-md'>
                <div className='page-title'>
                    <p>Warum FE Finance Dein Ding wird:</p>
                </div>
                <div className='grid'>
                    <div className='grid-items'>
                        <NavLink to="/landing">
                        <div className='sub-grid'>
                            <div className='sub-grid-items icon-center-alignment'>
                                <img src={EditIcon} alt="EditIcon"/>
                            </div>
                            <div className='sub-grid-items'>
                                <p>Bei FE Finance muss ich Oma Erna nicht die Überweisung ausfüllen.</p>
                            </div>
                            <div className='sub-grid-items'>
                                <div className='round'></div>
                            </div>
                        </div>
                        </NavLink>
                    </div>
                    <div className='grid-items'>
                        <div className='sub-grid'>
                            <div className='sub-grid-items icon-center-alignment'>
                                <img src={CapaIcon} alt="CapaIcon"/>
                            </div>
                            <div className='sub-grid-items'>
                                <p>Am SchLaDo geht’s auch bei FE Finance richtig ab, aber nicht nur für Vorstände, die sich die Hände reiben und ordentlich Cash machen</p>
                            </div>
                            <div className='sub-grid-items'>
                                <div className='round'></div>
                            </div>
                        </div>
                    </div>
                    <div className='grid-items'>
                        <div className='sub-grid'>
                            <div className='sub-grid-items icon-center-alignment'>
                                <img src={CallIcon} alt="CallIcon"/>
                            </div>
                            <div className='sub-grid-items'>
                                <p>Wir hatten noch nie Schalter oder Service-Points, die besetzt werden müssen und diese wird es auch nie geben.</p>
                            </div>
                            <div className='sub-grid-items'>
                                <div className='round'></div>
                            </div>
                        </div>
                    </div>
                    <div className='grid-items'>
                        <div className='sub-grid'>
                            <div className='sub-grid-items icon-center-alignment'>
                                <img src={ThumbIcon} alt="ThumbIcon"/>
                            </div>
                            <div className='sub-grid-items'>
                                <p>Bei FE Finance verdienst Du so gut, dass Du nicht mehr auf Büromaterial & Werbegeschenke Deiner Bank angewiesen bist</p>
                            </div>
                            <div className='sub-grid-items'>
                                <div className='round'></div>
                            </div>
                        </div>
                    </div>
                    <div className='grid-items'>
                        <div className='sub-grid'>
                            <div className='sub-grid-items icon-center-alignment'>
                                <img src={DateIcon} alt="DateIcon"/>
                            </div>
                            <div className='sub-grid-items'>
                                <p>Bei FE Finance muss ich keine Kalender mehr an Kunden austeilen und sie mit meinem Leben verteidigen.</p>
                            </div>
                            <div className='sub-grid-items'>
                                <div className='round'></div>
                            </div>
                        </div>
                    </div>
                    <div className='grid-items'>
                        <div className='sub-grid'>
                            <div className='sub-grid-items icon-center-alignment'>
                                <img src={VectorIcon} alt="VectorIcon"/>
                            </div>
                            <div className='sub-grid-items'>
                                <p>Bei FE Finance musst Du Dich nicht mit Pfändungskunden rumschlagen oder erklären, warum Rechnungen pünktlich bezahlt werden müssen.</p>
                            </div>
                            <div className='sub-grid-items'>
                                <div className='round'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
