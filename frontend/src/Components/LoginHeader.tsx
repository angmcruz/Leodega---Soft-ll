import React from 'react';

const LoginHeader: React.FC = () => {
    return (
        <header className="pt-[80px] pl-[60px] ">
            <div className="flex items-center gap-3">
                <img src="/src/img/LOGO_LEODEGA ISO.png" alt="Logo Leodega" className="h-12" />
                <img src="/src/img/LOGO_LEODEGA TEXTO-19.png" alt="Leodega" className="h-10" />
            </div>
        </header>
    );
};

export default LoginHeader;