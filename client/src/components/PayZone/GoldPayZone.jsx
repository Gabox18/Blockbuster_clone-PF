import React from "react";
import Navbar from "../Nav Bar/Navbar";
import './GoldPayZone.css'
// import { asyncCategorySwich } from '../../redux/slice'
// import { useDispatch, useSelector } from 'react-redux';

export default function GoldPayZone(){

    // let dispatch = useDispatch();
    // let userDB = useSelector((state) => state.alldata.user);

    // function handleSubmitGold() {
    //     console.log(userDB?.id,"el componete silver")
    //     dispatch(asyncCategorySwich(userDB.id))
    //   }

    return(
        <>
            <div>
                <Navbar/>
            </div>
            <section className='sectionPay'>
                <div class="containerPay">
                    <div class="card_box">
                        <span>Gold</span>
                        <div className='containerPay'>
                            <div className='contentPay'>
                                <p className='p-style-silver'>Gold Subscription</p>
                                <p className='p-style-silver'>Total</p>
                                <p className='p-style-silver'>24.99</p>
                            </div>

                        </div>
                    </div>
                </div>
                <button 
                    // onClick={handleSubmitGold}
                >
                    <div class="default-btn">
                    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <span>Welcome</span>
                    </div>
                    <div class="hover-btn">
                        <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
                        <span>continue</span>
                    </div>
                </button>
            </section>
        </>
    )
}
