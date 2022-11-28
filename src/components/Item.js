import React from 'react';
// import PropTypes from 'prop-types';

const Item = props => {
    return (
        <div style={{border:'1px dotted black', margin: '10px auto', width: '300px'}}>
            <div>
            <input value={props.name}/>
            </div>
            <div>
            <input value={props.alias}/>
            </div>
        </div>
    );
};

Item.propTypes = {
    
};

export default Item;