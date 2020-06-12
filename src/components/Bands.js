import React from 'react';
import Band from './Band'

const Bands = props => {
const bands = props.bands.map(band => <Band key={}/>)

};

export default Bands;