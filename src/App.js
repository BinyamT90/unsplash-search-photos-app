import React from 'react';

class App extends React.Component {
    state = {term: ''};

    returnToCallBack = (eve) => {
        eve.preventDefault();
        this.props.onSubmission(this.state.term);
    };

    render() {

        return (
            <div className="ui container">
                <div className="ui segment">
                    <form action="" className="ui form" onSubmit={this.returnToCallBack}>
                        <div className="field">
                            <label>Image Search</label>
                            <input style={{}} type="text"
                                   onChange={event => this.setState({term: event.target.value})}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;