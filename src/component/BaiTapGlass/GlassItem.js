import React, { Component } from 'react'

export default class GlassItem extends Component {

    handleGlassClick = () => {
        this.props.handleClick(this.props.GlassItem);
    }

    render() {
        let glasses = this.props.GlassItem;
        return (
            <>
                <img src={glasses.url} alt={glasses.name} className="img-fluid" onClick={this.handleGlassClick} />
            </>
        )
    }
}
