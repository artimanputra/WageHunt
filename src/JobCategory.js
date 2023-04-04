import React from 'react';
import './JobCategory.css';
import Jobs from './Jobs';

function JobCategory() {
    return (
        <div className="jobCategory">
            <div className="jobCategory__heading">
                <h3>Browse top job categories</h3>
            </div>
            <div className="jobCategory__icons">
                <Jobs title="Rag Pickers" />
                <Jobs title="Flower Sellers" />
                <Jobs title="Vendors" />
                <Jobs title="Street Cobblers" />
            </div>
            <div className="jobCategory__icons">
                <Jobs title="Push Cart Vendors" />
                <Jobs title="House keeping" />
                <Jobs title="Construction Workers" />
                <Jobs title="Plumbers" />
            </div>
            <div className="jobCategory__icons">
                <Jobs title="Dusting" />
                <Jobs title="labours" />
                <Jobs title="Kitchen Helpers" />
                <Jobs title="See All" />
            </div>
            {/* <div className="jobCategory__icons">
                <Jobs title="HTML" />
                <Jobs title="HTML5" />
                <Jobs title="Technical Writing" />
                <Jobs title="C++ Programming" />
            </div>
            <div className="jobCategory__icons">
                <Jobs title="Logo Design" />
                <Jobs title="Internet Marketing" />
                <Jobs title="Python" />
                <Jobs title="eCommerce" />
            </div>
            <div className="jobCategory__icons">
                <Jobs title="Photoshop" />
                <Jobs title="Copywriting" />
                <Jobs title="Social Media Marketing" />
                <Jobs title="Banner Design" />
            </div>
            <div className="jobCategory__icons">
                <Jobs title="WordPress" />
                <Jobs title="SEO" />
                <Jobs title="Research" />
                <Jobs title="Illustration" />
            </div>
            <div className="jobCategory__icons">
                <Jobs title="Article Writing" />
                <Jobs title="iPhone" />
                <Jobs title="Link Building" />
                <Jobs title="Proofreading" />
            </div>
            <div className="jobCategory__icons">
                <Jobs title="Javascript" />
                <Jobs title="Research Writing" />
                <Jobs title="C# Programming" />
                <Jobs title="3D Animation" />
            </div>
            <div className="jobCategory__icons">
                <Jobs title="Mobile App Development" />
                <Jobs title="Translation" />
                <Jobs title="3D Modelling" />
                <Jobs title="Content Writing" />
            </div>
            <div className="jobCategory__icons">
                <Jobs title="Software Architecture" />
                <Jobs title="Java" />
                <Jobs title="Web Search" />
                <Jobs title="See All" />
            </div>
            <div className="jobCategory__icons">
                <Jobs title="Data Entry" />
                <Jobs title="MySQL" />
                <Jobs title="Web Scraping" />
                <Jobs title="" />
            </div> */}
        </div>
    )
}

export default JobCategory
