import React from 'react';
import './Projects.css';
import Project from './Project';

function Projects() {
    return (
        <div className="projects">
            <div className="projects__heading">
                <h3>Crowd favorites <br />
                Here are some of our most popular Jobs:</h3>
            </div>
            <div className="projects__project">
                <Project
                    src="https://img.freepik.com/free-photo/poor-child-landfill-looks-forward-with-hope_1150-10379.jpg?w=900&t=st=1680589214~exp=1680589814~hmac=776cf46aaa1b675c437896c73483101637ebc139d4ac2bdc2f2e6cc7d2c3de16"
                    title="Rag Pickers"
                    price="From Rs.100 "
                />
                <Project
                    src="https://img.freepik.com/premium-photo/indian-street-market_75648-269.jpg?w=900"
                    title="Push Cart Vendors"
                    price="From Rs.150 "
                />
                <Project
                    src="https://img.freepik.com/free-photo/hands-making-bowl-side-view_23-2149480264.jpg?w=900&t=st=1680589339~exp=1680589939~hmac=1f1ee3b780a5f1ba83fb9ea54f5cabfe36dc338e9cca5bfc51b9360a58c978ab"
                    title="Street Cobblers"
                    price="From Rs.200"
                />
            </div>
            <div className="projects__project">
                <Project
                    src="https://img.freepik.com/free-photo/brunette-woman-using-smartphone-green-house_23-2148068719.jpg?w=900&t=st=1680589418~exp=1680590018~hmac=185b655f9bfbeb9492f1eaba24eac80a2e5b7fda5f891f1af904a7928322abfb"
                    title="Flower Sellers"
                    price="From Rs.200 "
                />
                <Project
                    src="https://img.freepik.com/free-photo/young-african-american-female-wearing-protective-face-mask-while-shopping-fruit-market_181624-45554.jpg?w=900&t=st=1680589486~exp=1680590086~hmac=6a51403d88c74d5e7cf117565494b35d94c22c6a52efadb392f567dd761bf7f3"
                    title="Vendors"
                    price="From Rs.100"
                />
                <Project
                    src="https://img.freepik.com/free-photo/construction-worker-pointing-something_329181-2832.jpg?w=900&t=st=1680589529~exp=1680590129~hmac=cc58622abb23b98a6847c1e30f449b36fe8cb5a53c4408a3439d66828f3329af"
                    title="Construction Site"
                    price="From Rs.350 "
                />
            </div>
            <div className="projects__more">
                <button>See More</button>
            </div>

        </div>
    )
}

export default Projects
