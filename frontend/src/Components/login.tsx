import React from 'react';
import LoginHeader from './LoginHeader';

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <LoginHeader /> 
        
            <div className="flex-1 flex flex-col lg:flex-row items-center justify-center pl-[30px] lg:pl-[110px] pr-[30px] lg:pr-[80px] mt-[-100px] ">
                <div className="w-full lg:w-1/2 bg-white rounded-xl lg:pr-[90px] mb-8 lg:mb-0">
                    <h2 className="text-[30px] font-semibold mb-4">Login</h2>
                    <p className='font-light text-[13px] mb-5'>Login to access your travelwise account</p>
                    <form>
                        <label className="block text-sm mb-1">Email</label>
                        <input type="email" className="w-full mb-4 px-3 py-2 border rounded" placeholder="usuario@ejemplo.com" />

                        <label className="block text-sm mb-1">Contraseña</label>
                        <input type="password" className="w-full mb-4 px-3 py-2 border rounded" placeholder="********" />

                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center gap-2 text-sm">
                                <input type="checkbox" />
                                Recuérdame
                            </label>
                            <a href="#" className="text-sm text-blue-600">¿Olvidaste la contraseña?</a>
                        </div>

                        <button type="submit" className="w-full bg-[#3B82F6] text-white py-3 mt-3 rounded text-[13px]">Login</button>
                    </form>
                </div>
                
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img 
                        src="/src/img/logimage.png" 
                        alt="Login" 
                        className="w-full max-w-lg lg:max-w-none h-auto object-contain rounded-xl"
                        style={{ maxHeight: '600px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;