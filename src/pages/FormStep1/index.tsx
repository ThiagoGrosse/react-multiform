import { ChangeEvent, useEffect } from 'react';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';
import { useNavigate } from 'react-router-dom';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step2');
        } else {
            alert('Preencha o nome para continuar');
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>

                <hr />

                <label>
                    Seu nome completo
                    <input type="text" autoFocus={true} value={state.name} onChange={handleNameChange} />
                </label>

                <button type='button' onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}