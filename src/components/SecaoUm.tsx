
import { Component } from 'react';
import { IonButton, IonText } from '@ionic/react';

class SecaoUm extends Component {
    onClick = () => {
        alert('Você clicou no botão');
    }

    render() {
        return (
            <>
                <IonText>
                    <h1>Bem-Vindo ao Meu Site</h1>
                </IonText>
                <IonText>
                    Este é um parágrafo de exemplo.
                </IonText>
                <IonButton onClick={this.onClick}>Clique Aqui</IonButton>
            </>
        );
    }
}
export default SecaoUm;
