import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg';
import { ReactComponent as BookIcon } from '../../svgs/book.svg';
import { ReactComponent as MailIcon } from '../../svgs/mail.svg';
import { ReactComponent as PranchetaIcon } from '../../svgs/prancheta.svg';
import { useForm } from '../../contexts/FormContext';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem
                            title="Pessoal"
                            description="Identifique-se"
                            icon={ProfileIcon}
                            iconDesc='profile'
                            path="/"
                            active={state.currentStep ===1}
                        />

                        <SidebarItem
                            title="Profissional"
                            description="Seu nível"
                            icon={BookIcon}
                            iconDesc='book'
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem
                            title="Contato"
                            description="Como entrar em contato"
                            icon={MailIcon}
                            iconDesc='mail'
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                        <SidebarItem
                            title="Resumo"
                            description="Resumo dos dados informados"
                            icon={PranchetaIcon}
                            iconDesc='resumo'
                            path="/step4"
                            active={state.currentStep === 4}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}