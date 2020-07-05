import React from "react";

class MovieDetail extends React.Component {
    componentDidMount (){
        const {history, location} = this.props;

        if(location.state === undefined){
            history.push("/");
        }

    }

    render (){
        const {location} = this.props;
            console.log(location)    
        if(location.state){
            return <span>{location.state.summary}</span>
        }else{
            return null;
        }
    }
}

export default MovieDetail;