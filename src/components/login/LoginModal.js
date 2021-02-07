import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Window } from '@progress/kendo-react-dialogs';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible
        };
    }

    toggleDialog = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
                <div>
                    
                    {this.state.visible &&
                        <Window title={"Status"} onClose={this.toggleDialog} initialHeight={350}>
                            <form className="k-form">
                                <fieldset>
                                    <legend>User Details</legend>

                                    <label className="k-form-field">
                                        <span>First Name</span>
                                        <input className="k-textbox" placeholder="Your Name" />
                                    </label>
                                    <label className="k-form-field">
                                        <span>Last Name</span>
                                        <input className="k-textbox" placeholder="Your Last Name" />
                                    </label>
                                </fieldset>

                                <div className="text-right">
                                    <button type="button" className="k-button" onClick={this.toggleDialog}>Cancel</button>
                                    <button type="button" className="k-button k-primary" onClick={this.toggleDialog}>Submit</button>
                                </div>
                            </form>
                    </Window>}
                </div>
        );
    }
}

export default LoginModal;