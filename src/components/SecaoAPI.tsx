import { IonButton, IonInput, IonItem, IonList, IonLoading, IonText } from "@ionic/react";
import { Component } from "react";

class SecaoAPI extends Component<{}, { cep: string, bairro: string, complemento: string, ibge: string, uf: string, ddd: string, localidade: string, logradouro: string, loading: boolean, loadingMessage: string }> {
    constructor(props: any) {
        super(props);

        this.state = {
            cep: '',
            bairro: '',
            complemento: '',
            ddd: '',
            ibge: '',
            localidade: '',
            logradouro: '',
            uf: '',
            loading: false,
            loadingMessage: 'Carregando...',
        };
    }

    handleCepChange = (event: any) => {
        this.setState({ cep: event.target.value });
    }

    showLoading = () => {
        this.setState({ loading: true });
    };

    hideLoading = () => {
        this.setState({ loading: false });
    };

    fetchCep = async () => {
        if (this.state.cep.length == 0) {
            alert('Informe um CEP');
            return;
        };

        try {
            this.showLoading();

            var response = await fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                const data = await response.json();

                this.setState({
                    bairro: data.bairro,
                    complemento: data.complemento,
                    ddd: data.ddd,
                    ibge: data.ibge,
                    localidade: data.localidade,
                    logradouro: data.logradouro,
                    uf: data.uf,
                });
            } else {
                alert('Erro ao procurar CEP');
            }
        } catch (_) {
            alert('Erro ao procurar CEP');
        } finally {
            this.hideLoading();
        }
    }

    render() {
        return (
            <>
                <IonLoading
                    isOpen={this.state.loading}
                    message={this.state.loadingMessage}
                />


                <IonText style={{ margin: '20px 0 0 5px', fontSize: 20 }}>Consultar CEP</IonText>
                <IonList>
                    <IonItem>
                        <IonInput id="cep" name="cep" label="CEP" placeholder="Informe um CEP" onIonChange={this.handleCepChange}></IonInput>
                    </IonItem>
                </IonList>
                {this.state.cep && (
                    <>
                        <IonText>Bairro: {this.state.bairro}</IonText>
                        <IonText>Complemento: {this.state.complemento}</IonText>
                        <IonText>DDD: {this.state.ddd}</IonText>
                        <IonText>IBGE: {this.state.ibge}</IonText>
                        <IonText>Localidade: {this.state.localidade}</IonText>
                        <IonText>Logradouro: {this.state.logradouro}</IonText>
                        <IonText>UF: {this.state.uf}</IonText>
                    </>
                )}
                <IonButton onClick={this.fetchCep}>Verificar CEP</IonButton>
            </>
        );
    }
}

export default SecaoAPI;