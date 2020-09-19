import React from 'react';
import InputBox from './inputBox.component';

export default function QuoteForm(props) {
    return (
        <div className="quote__form">
            <div className="quote__form__title">
                <h3>Request A Quote</h3>
            </div>
            <div className="quote__form__subtitle">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

            <form action="#">
                <div className="quote__form__twin form-group">
                    <InputBox placeholder="First Name" type="text" onChange={()=> null}/>
                    <InputBox placeholder="Last Name" type="text" onChange={()=> null}/>
                </div>
                <div className="form-group">
                    <InputBox placeholder="Email Address" type="email" onChange={()=> null}/>
                </div>
                <div className="form-group">
                    <InputBox placeholder="Phone Number" type="tel" onChange={()=> null}/>
                </div>
                <button className="">Request A Quote</button>
            </form>
        </div>
    )
}
