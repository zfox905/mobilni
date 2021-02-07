import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AutoComplete } from '@progress/kendo-react-dropdowns';

import './Search.css';

class Search extends React.Component {
    data = [ "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan" ];

    render() {
        return (
            <div className="example-wrapper">
                
                <AutoComplete
                    data={this.data}
                    placeholder="e.g. Andorra"
                    className="main"
                    border={10}
                />
                 
            </div>
            
        );
    }
}

export default Search;
