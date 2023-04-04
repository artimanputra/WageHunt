import React from 'react';
import './Features.css';
import Feature from './Feature';

function Features() {
    return (
        <div className="features">
            <div className="features__heading">
                <h1>Need something done?</h1>
            </div>
            <div className="features__single">
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/post-a-job-redesign.svg"
                    title="Post a job"
                    content="It's easy. Simply post a job you need completed and receive competitive bids from workers within minutes."
                />
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/choose-freelancers-redesign.svg"
                    title="Choose freelancers"
                    content="Whatever your needs, there will be a worker to get it done: from street cobblers, rag pickers, push cart vendors, flower seller, and vendors(and a whole lot more)."
                />
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/pay-safely-redesign.svg"
                    title="Pay safely"
                    content="With secure payments and thousands of reviewed professionals to choose from, WageHunt is the simplest and safest way to get work done online."
                />
            </div>

        </div>
    )
}

export default Features
