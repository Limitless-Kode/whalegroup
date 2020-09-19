import React from 'react';
import QuoteForm from './quoteform.component';
import VideoPlayer from './videoplayer.component';

export default function Quote(props) {
    return(
        <section className="quote">
            <div className="quote__video">
                <VideoPlayer />
            </div>
            <QuoteForm />
        </section>
    );
}