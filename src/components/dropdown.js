import React, { Component } from 'react'
import fetchArticles from '../actions/articles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region : []
        }
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount () {
        this.setState({
            region : [{
                country : 'United States',
                key : 'us'
            },{
                country : 'Poland',
                key : 'pl'
            },{
                country : 'India',
                key : 'in'
            },{
                country : 'Russia',
                key : 'ru'
            },{
                country : 'United Kingdom',
                key : 'gb'
            }]
        });
    }
    onChange = (e) => {
        this.props.fetchArticles(document.getElementsByName('region-dropdown')[0].value);
    }
    onClick = (region) => {
        console.log(region);
    }
    render() {
    const listItems = this.state.region.map(data => {
        return <option onSelect = {() => this.onClick(data)} value={data.key} key ={data.key}>{data.country}</option>
    })        
    return (
      <select name="region-dropdown" onChange = {this.onChange}>
        {listItems}
      </select>
    )
  }
}

DropDown.propTypes = {
    fetchArticles: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    
})
export default connect(mapStateToProps, { fetchArticles })(DropDown);
