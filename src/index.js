import React from 'react';
import ReactDOM from 'react-dom';
import unsplash from './api/unsplash'

import ImageList from './ImageList'
import App from './App'

class Index extends React.Component {
    state = {images: []};

    callMeBack = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }

        });
        this.setState({images: response.data.results})


    };

    render() {
        return (
            <div>
                <App onSubmission={this.callMeBack}/>
                <div className="ui container" style={{margin : "20px"}}>Found {this.state.images.length} images;</div>

                <div className="ui container"><ImageList images={this.state.images}/></div>

            </div>
        );
    }

}

ReactDOM.render(<Index/>, document.querySelector('#root'));