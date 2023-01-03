import React, { useEffect } from 'react'
import './landing.scss';
import ProfileIcon from '../../assets/icons/group-profile.png';
import starIcon from '../../assets/icons/star.svg';
import WertschätzungSection from './wertschätzungSection';
import ClientSection from './clientSection';
import TextSection from './textSection';
import FinanceGmbh from './financeGmbh';
import JetztSection from './jetztSection/index,';


export default function Landing() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <div>
        <div className='landing-first-section'>
            <div className='container'>
                <div className='profile-image-center-alignment'>
                    <img src={ProfileIcon} alt="ProfileIcon"/>
                </div>
                <div className='rating-alignment'>
                    <img src={starIcon} alt="starIcon"/>
                    <img src={starIcon} alt="starIcon"/>
                    <img src={starIcon} alt="starIcon"/>
                    <img src={starIcon} alt="starIcon"/>
                    <img src={starIcon} alt="starIcon"/>
                </div>
                <div className='text-style'>
                    <span>5 Sterne (auch auf Google)</span>
                    <p>LIEBLINGSBANKMEMES</p>
                    <h6>
                    Auf ständiges Ausfüllen von Überweisungen, haben wir auch echt keinen Bock... umso besser, dass Du Dich für uns entscheidest ;)
                    </h6>
                </div>
            </div>
        </div>
        <WertschätzungSection/>
        <ClientSection/>
        <TextSection/>
        <FinanceGmbh/>
        <JetztSection/>
    </div>
  )
}
