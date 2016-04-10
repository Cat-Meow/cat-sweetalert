import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rs-dialog';
import Alert from './alert';
import Confirm from './confirm';

class SweetAlert extends Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    state={
        show: false
    }

    show(type, config, callback) {
        this.setState({
            show: true,
            type: type,
            config: config,
            callback: callback
        });
    }

    close() {
        this.setState({
            show: false
        });
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <Dialog
                show={this.state.show}
                toBody={false}
                onClose={this.close}
                noButtons
                title=''
                autoClose={false}
            >
                {this.renderContent()}
            </Dialog>
        );
    }

    renderContent() {
        switch (this.state.type) {
            case 'alert':
                return (
                    <Alert
                        config={this.state.config}
                        close={this.close}
                    />
                );
                break;
            case 'confirm':
                return (
                    <Confirm
                        config={this.state.config}
                        callback={this.state.callback}
                        close={this.close}
                    />
                );
                break;
            case 'prompt':
                return (
                    <Confirm
                        config={this.state.config}
                        callback={this.state.callback}
                        close={this.close}
                        isPrompt
                    />        
                );
                break;
        }
        return null;
    }
}

SweetAlert.newInstance = function (type){
    let div = document.createElement('div');
    div.className = 'my-sweetalert-container';
    document.body.appendChild(div);
    let sweet = ReactDOM.render(<SweetAlert />, div);
    return {
        show: function(type, config, callback) {
            sweet.show(type, config, callback);
        },
        component: sweet
    }
}

export default SweetAlert;
