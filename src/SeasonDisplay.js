import './SeasonDisplay.css';
import React from 'react'

const seasonConfig = {
    spring: {
        text: "It's Spring",
        iconName: 'tree'
    },
    summer: {
        text: "It's Summer",
        iconName: 'sun'
    },
    autumn: {
        text: "It's Autumn",
        iconName: 'leaf'
    },
    winter: {
        text: "It's Winter",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 6) {
        return lat > 0 ? 'spring' : 'autumn';
    }
    if (month > 5 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } 
    if (month > 8 && month < 12) {
        return lat > 0 ? 'autumn' : 'spring';
    }else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}/>
    </div>
    )
};


export default SeasonDisplay;