import React, { Component } from 'react'
import GlassItem from './GlassItem';
let arrProduct = [

    { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glasses/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glasses/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glasses/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 4, price: 30, name: 'DIOR D6005U', url: './img/glasses/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 5, price: 30, name: 'PRADA P8750', url: './img/glasses/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 6, price: 30, name: 'PRADA P9700', url: './img/glasses/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 7, price: 30, name: 'FENDI F8750', url: './img/glasses/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 8, price: 30, name: 'FENDI F8500', url: './img/glasses/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 9, price: 30, name: 'FENDI F4300', url: './img/glasses/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

];

export default class BaiTapGlass extends Component {
    state = {
        glasses: { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glasses/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' }
    }

    handleClick = (glasses) => {
        this.setState({ glasses, });
    }

    renderGlassItem = () => {
        return arrProduct.map((item, index) => {
            return (
                <div className="col-4 py-3" key={index}>
                    <GlassItem GlassItem={item} handleClick={this.handleClick} />
                </div>
            );
        });
    }


    render() {
        return (
            <div className="container-fluid px-0" style={{ backgroundImage: 'url(./img/glasses/background.jpg)', backgroundSize: 'cover', width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, }}>
                <h1 className="d-block p-4 text-center text-light titleglass">TRY GLASSES APP ONLINE</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 py-3 bg-white shadow">
                            <h3>VITUAL GLASSES</h3>
                            <div className="row">
                                {this.renderGlassItem()}
                            </div>
                        </div>
                        <div className="col-12 col-md-5 ml-auto py-3 bg-white shadow">
                            <div className="models__img position-relative">
                                <img src="./img/glasses/model.jpg" alt="Model" width="445px" height="542,34px" />
                                <img className="img_glasses" src={this.state.glasses.url} alt={this.state.glasses.name} />
                                <div className="info position-absolute p-3 text-white">
                                    <h4>{this.state.glasses.name}</h4>
                                    <p>{this.state.glasses.price}</p>
                                    <p>{this.state.glasses.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
