import CommunicationContextProvider from '@/components/contexts/communications.context';


const Providers = ({children}) => {
    return (
        <CommunicationContextProvider>{children}</CommunicationContextProvider>
    );
};

export default Providers;