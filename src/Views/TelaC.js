import React from 'react';
import TextoCentral from '../Components/TextoCentral';

export default props => {
    const R = props.route;
    const numero = R && R.params && R.params.numero
        ? R.params.numero : 0
    return (
        <TextoCentral
            corFundo="#9932CD"
        >
            Tela C - {numero}
        </TextoCentral>
    )
}
