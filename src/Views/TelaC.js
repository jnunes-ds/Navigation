import React from 'react';
import TextoCentral from '../Components/TextoCentral';

export default props => {
    const route = props.route || {params: { numero: 0 }};
    return (
        <TextoCentral
            corFundo="#9932CD"
        >
            Tela C - {props.route.params.numero}
        </TextoCentral>
    )
}
