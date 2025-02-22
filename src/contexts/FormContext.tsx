import { ReactNode, createContext, useContext, useReducer } from "react";

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

type Action = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode;
}

// Dados iniciais
const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

// Contexto
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGitHub
}

const formReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return {
                ...state,
                currentStep: action.payload
            }
        case FormActions.setName:
            return {
                ...state,
                name: typeof action.payload === 'string' ? action.payload : state.name
            }
        case FormActions.setLevel:
            return {
                ...state,
                level: action.payload
            }
        case FormActions.setEmail:
            return {
                ...state,
                email: action.payload
            }
        case FormActions.setGitHub:
            return {
                ...state,
                github: action.payload
            }
        default:
            return state;
    }
}


// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext);

    if (context === undefined) {
        throw new Error('useForm precisa ser utilizado dentro do FormProvider');
    }
    return context;
}