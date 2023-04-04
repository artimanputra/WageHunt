import React from 'react';
import './Content.css';
import Single from './Single';

function Content() {
    return (
        <div className="content">
            <div className="content__heading">
                <h2>What's great about it?</h2>
            </div>
            <div className="content__single">
            <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/pay-v2.svg"
                    title="Pay for quality"
                    content="Pay for work when it has been completed and you're 100% satisfied."
                />
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/live-chat-v2.svg"
                    title="Live chat"
                    content="You can live chat with your workers to get constant updates on the progress of your work."
                />
            </div>
            <div className="content__single">
               
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/track-progress-v2.svg"
                    title="Track progress"
                    content="Keep up-to-date and on-the-go with our time tracker."
                />
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/support-v2.svg"
                    title="24/7 support"
                    content="We're always here to help. Our support consists of real people who are available 24/7."
                />
            </div>

        </div>
    )
}

export default Content
