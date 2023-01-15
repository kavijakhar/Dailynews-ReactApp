import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: "general",

    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }


    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,

        }
        document.title = this.props.category;
    }
    async updateNews(pageNO) {
        this.props.setprogress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ff0101da02b54c2a816214037a5c60c0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        this.props.setprogress(30)
        this.setState({ loading: true });
        let parsedData = await data.json()
        this.props.setprogress(70)
        this.setState({
            articles: parsedData.articles,
            totalarticles: parsedData.totalarticles,
            loading: false,
        })
        this.props.setprogress(100)
    }

    async componentDidMount() {
        this.updateNews()
    }
    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }


    render() {
        return (
            <>
                <div className='container my-3 '>
                    <h2 className='text-center'>Newsmonkey - Top Headline</h2>
                    {this.state.loading && <Spiner />}

                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                                />
                            </div>

                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalarticles / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> &rarr; Next</button>
                    </div>
                </div>
            </>
        )

    }

}

export default News 