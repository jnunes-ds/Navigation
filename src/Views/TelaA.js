import React from 'react';
import TextoCentral from '../Components/TextoCentral';
import PassoStack from '../Components/PassoStack';

export default props => {
    return (
        <PassoStack {...props} avancar="TelaB">
            <TextoCentral
                corFundo="#E53935"
                >
                Tela A
            </TextoCentral>
        </PassoStack>
    )
}
