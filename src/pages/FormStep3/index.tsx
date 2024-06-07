import { ChangeEvent, useEffect } from 'react';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, [])

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            navigate('/step4');
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGitHub,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal! {state.name}, onde te achamos?</h1>
                <p>Preencha os dados para podermos entrar em contato.</p>
                <hr />

                <label>
                    Qual o seu e-mail?
                    <input type="text" autoFocus={true} value={state.email} onChange={handleEmailChange} />
                </label>

                <label>
                    Qual o seu GitHub
                    <input type="text" value={state.github} onChange={handleGitHubChange} />
                </label>

                <Link to='/step2' className='backButton'>Voltar</Link>
                <button type='button' onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}