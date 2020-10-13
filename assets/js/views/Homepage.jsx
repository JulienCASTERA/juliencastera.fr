import React from 'react'
import Alert from "../helpers/alert";

class Homepage extends React.Component {
    render() {
        return (
            <>
                Homepage
            </>
        )
    }

    componentDidMount() {
        Alert.success('test')
    }
}

export default Homepage