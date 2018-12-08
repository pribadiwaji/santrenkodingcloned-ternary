import React, { Component } from 'react';
import Home from '../Container/Home';
import Kajian from '../Container/Kajian';
import Mondok from '../Container/Mondok';
import Kitab from '../Container/Kitab';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Switcher extends Component {
    state={
        page : "Home"
    }

    handleChanePage = (params)=>{
        this.setState({
            page : params
        })
    }
    render() {
        return(
            <div>
                <Header changePage={this.handleChanePage}/>
                {this.state.page === "Home" ? (<Home />) :
                    this.state.page === "Kajian" ? (<Kajian />) :
                        this.state.page ==="Mondok" ? (<Mondok />) :
                            this.state.page ==="Kitab" ? (<Kitab />) : (<h1>Page Not Found</h1>)}
                <Footer />
            </div>
        );
    }
}

export default Switcher;
