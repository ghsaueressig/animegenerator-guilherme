import { IonImg, IonText } from "@ionic/react";
import { Component } from "react";

class SecaoDois extends Component {
    render() {
        return (
            <>
                <IonText>
                    <h2>Seção Importante</h2>
                </IonText>
                <IonText>
                    Esta é uma seção com conteúdo relevante.
                </IonText>
                <IonImg
                    src='/assets/images/logo.png'
                    alt='Logo da Unijui'
                    style={{ height: 350, margin: 10 }}
                ></IonImg>
            </>
        );
    }
}

export default SecaoDois;