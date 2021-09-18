import React, { Component } from 'react';
import Chips from 'react-chips'

 class myChip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chips: []
        }
    }

    onChange = chips => {
        this.setState({ chips });
    }

    render() {
        return (
            <div>
                <Chips
                    value={this.state.chips}
                    onChange={this.onChange}
                    placeholder="Add more"
                    suggestions={["Your", "Data", "Here", "Apple", "Book", "Car", "Day", "English", "Ghana", "Home", "India", "Joke", "Long"]}

                />
            </div>
        );
    }
}

export default myChip
