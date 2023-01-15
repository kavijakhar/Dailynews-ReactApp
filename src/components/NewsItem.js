import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgurl, newsurl, author, date,source } = this.props;
        return (
            <>

                <div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={!imgurl ? "https://c.ndtvimg.com/2022-11/c09b2vbo_elon-musk-twitter-blue-tick-afp-650_625x300_10_November_22.jpg" : imgurl} alt="...." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>
                           {source}
                            </span>
                            <p className="card-text">{!description ? title : description}...</p>
                            <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} On {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer"  href={newsurl}  target="_blank" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                         
            </>
        )
    }
}

export default NewsItem