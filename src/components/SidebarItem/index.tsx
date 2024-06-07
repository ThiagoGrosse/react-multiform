import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg';
import { ReactComponent as BookIcon } from '../../svgs/book.svg';
import { ReactComponent as MailIcon } from '../../svgs/mail.svg';
import { ReactComponent as PranchetaIcon } from '../../svgs/prancheta.svg';

type Props = {
    title: string;
    description: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    path: string;
    iconDesc: string;
    active: boolean;
};

export const SidebarItem: React.FC<Props> = ({ title, description, iconDesc, path, active }) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea $active={active}>
                    {iconDesc === 'profile' && < ProfileIcon fill='white' width={24} height={24} />}
                    {iconDesc === 'book' && <BookIcon fill='white' width={24} height={24} />}
                    {iconDesc === 'mail' && <MailIcon fill='white' width={24} height={24} />}
                    {iconDesc === 'resumo' && <PranchetaIcon fill='white' width={24} height={24} />}
                </C.IconArea>
                <C.Point $active={active}></C.Point>
            </Link>
        </C.Container>
    );
};
