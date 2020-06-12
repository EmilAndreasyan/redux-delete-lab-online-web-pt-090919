import React from 'react';
import Band from './Band'

const Bands = props => {
const bands = props.bands.map(band => <Band key={band.id} deleteBand={props.deleteBand}/>)

};

export default Bands;