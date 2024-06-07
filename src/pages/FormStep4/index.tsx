import { useEffect } from 'react';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { SelectOptions } from '../../components/SelectOptions';

export const FormStep4 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
    }, [])

    return (
        <Theme>
            <C.Container>
                <p>Passo 4/4</p>
                <h1>Formulário Concluído!</h1>
                <p>Obrigado por preenche-lo. Abaixo você pode conferir todos os dados informados.</p>

                <hr />

                <C.Label>
                    <C.TitleLabel>Nome Informado</C.TitleLabel>
                    <C.InfoName>{state.name}</C.InfoName>
                </C.Label>

                <C.Label>
                    <C.TitleLabel>Estado Profissional</C.TitleLabel>
                    {state.level === 0 &&
                        <C.SelectedOptions>
                            <C.Icon>🥳</C.Icon>
                            <C.Info>
                                <C.Title>Sou iniciante</C.Title>
                                <C.Description>Comecei a programar há menos de 2 anos</C.Description>
                            </C.Info>
                        </C.SelectedOptions>
                    }
                    {state.level === 1 &&
                        <C.SelectedOptions>
                            <C.Icon>'😎'</C.Icon>
                            <C.Info>
                                <C.Title>Sou programador</C.Title>
                                <C.Description>Já programo há 2 anos ou mais</C.Description>
                            </C.Info>
                        </C.SelectedOptions>
                    }
                </C.Label>

                <C.Label>
                    <C.TitleLabel>E-mail informado</C.TitleLabel>
                    <C.InfoName>{state.email}</C.InfoName>
                </C.Label>

                <C.Label>
                    <C.TitleLabel>Link do seu GitHub</C.TitleLabel>
                    <C.InfoName>{state.github}</C.InfoName>
                </C.Label>

                <Link to='/step3' className='backButton'>Voltar</Link>
            </C.Container>
        </Theme>
    )
}