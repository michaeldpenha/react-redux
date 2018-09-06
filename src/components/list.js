import React, { Component } from 'react';
import fetchArticles from '../actions/articles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
class List extends Component {
    componentWillMount() {
        this.props.fetchArticles();
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         news: []
    //     };
    //     this.onClick = this.onClick.bind(this); //not required
    // }
    // onClick = (e) => {
    //     window.location.href = e.url;
    // }
    // componentWillMount() {
    //     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7b24286eaad644daa9a4133129e6ed7f')
    //         .then(res => res.json())
    //         .then(data => { this.setState({ news: data.articles }) })
    // }
    render() {
        console.log(this.props.news)
        const newsList = this.props.news.map((article, i) => {
            return <div key={i} onClick={() => this.onClick(article)}>
                <h1> {article.title} </h1>
                <hr />
                <p> {article.description}</p>
            </div>
        })
        return (
            <div>
                {newsList}
            </div>
        );
    }
}
List.propTypes = {
    fetchArticles : PropTypes.func.isRequired,
    news : PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    news : state.data.items
})
export default connect(mapStateToProps,{ fetchArticles })(List);
