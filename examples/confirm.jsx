import React, { Component } from 'react';
import Button from 'rs-button';
import Sweet from '../src/index.js';

export default class Example extends Component {
    onConfirm(info) {
        Sweet.confirm(info , (confirm) => {
            setTimeout(() => {
                Sweet.alert('你刚刚点击了' + confirm);
            }, 500);
        });
    }

    render() {
        return (
            <div>
                <Button
                    onClick={this.onConfirm.bind(null, {
                        title:'你说甚'
                    })}
                >
                    confirm
                </Button>
                <Button myStyle="success"
                    onClick={this.onConfirm.bind(null, {
                        title:'你说甚',
                        text: 'XXX',
                        style:'success',
                        closeText: 'Cancel',
                        confirmText: 'Confirm'
                    })}
                >
                    confirm
                </Button>
                <Button myStyle="danger"
                    onClick={this.onConfirm.bind(this,{
                        title:'你说甚',
                        text: 'XXX',
                        style:'danger',
                        cancelText: 'Cancel',
                        confirmText: 'Confirm',
                        cancelFunction: true
                    })}
                >
                    confirm
                </Button>
            </div>
        );
    }
};
