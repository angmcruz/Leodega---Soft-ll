import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Register: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        if((password !== confirmPassword)) {
            alert("Las contraseñas no coinciden");
            return;
        }
        e.preventDefault();
        console.log('Formulario enviado');
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="pt-[30px] mb-[10px] pr-[30px] lg:pt-[50px] lg:pb-10 lg:pr-[60px] lg:mb-[2px]">
                <div className="flex items-center gap-3 justify-end">
                    <img src="/src/img/LOGO_LEODEGA ISO.png" alt="Logo Leodega" className="h-10 md:h-12" />
                    <img src="/src/img/LOGO_LEODEGA TEXTO-19.png" alt="Leodega" className="h-8 md:h-10" />
                </div>
            </header>
        
            <div className="flex-1 flex flex-col lg:flex-row items-center justify-center pl-[30px] lg:pl-[110px] pr-[30px] lg:pr-[80px] mt-[-40px]">
                <div className="mt-[-100px] hidden lg:flex w-full lg:w-1/2 justify-center items-center lg:pr-[60px]">
                    <img 
                        src="/src/img/reimage.png" 
                        alt="Register" 
                        className="w-[400px] h-[640px] object-cover rounded-xl"
                    />
                </div>

                <div className="w-full lg:w-1/2 rounded-xl mb-8 lg:mb-0">
                    <h2 className="text-[30px] text-[#313131] font-semibold mb-4">Registrarse</h2>
                    <p className='font-light text-[#646464] text-[15px] mb-5'>Vamos a prepararlos para que puedan acceder a su cuenta personal.</p>
                    
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                            <div>
                                <fieldset className="border-2 border-gray-300 rounded-lg px-3 pt-0 pb-2">
                                    <legend className="text-sm text-gray-700 px-1">Nombres</legend>
                                    <input 
                                        type="text" 
                                        className="w-full text-base focus:outline-none px-2 py-1" 
                                        placeholder="Ingrese su nombre"
                                        value= {name} onChange={(e)=> setName(e.target.value)} required
                                    />
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="border-2 border-gray-300 rounded-lg px-3 pt-0 pb-2">
                                    <legend className="text-sm text-gray-700 px-1">Apellidos</legend>
                                    <input 
                                        type="text" 
                                        className="w-full text-base focus:outline-none px-2 py-1" 
                                        placeholder="Ingerese su apellido"
                                        value = {lastName} onChange ={(e)=> setLastName(e.target.value)} required
                                    />
                                </fieldset>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                            <div>
                                <fieldset className="border-2 border-gray-300 rounded-lg px-3 pt-0 pb-2">
                                    <legend className="text-sm text-gray-700 px-1">Email</legend>
                                    <input 
                                        type="email" 
                                        className="w-full text-base focus:outline-none px-2 py-1" 
                                        placeholder="user@gmail.com"
                                        value={email} onChange={(e)=> setEmail(e.target.value)} required
                                    />
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="border-2 border-gray-300 rounded-lg px-3 pt-0 pb-2">
                                    <legend className="text-sm text-gray-700 px-1">Phone Number</legend>
                                    <input 
                                        type="tel" 
                                        className="w-full text-base focus:outline-none px-2 py-1" 
                                        placeholder="0000000000"
                                        value={phone} onChange={(e)=> setPhone(e.target.value)} required
                                    />
                                </fieldset>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <fieldset className="border-2 border-gray-300 rounded-lg px-3 pt-0 pb-2 relative">
                                <legend className="text-sm text-gray-700 px-1">Password</legend>
                                <div className="flex items-center">
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        className="w-full text-base focus:outline-none px-2 py-1 pr-10" 
                                        placeholder="***************************"
                                        value={password} onChange={(e)=> setPassword(e.target.value)} required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </fieldset>
                        </div>

                        <div className='mb-4'>
                            <fieldset className="border-2 border-gray-300 rounded-lg px-3 pt-0 pb-2 relative">
                                <legend className="text-sm text-gray-700 px-1">Confirm Password</legend>
                                <div className="flex items-center">
                                    <input 
                                        type={showConfirmPassword ? "text" : "password"}
                                        className="w-full text-base focus:outline-none px-2 py-1 pr-10" 
                                        placeholder="***************************"
                                        value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 text-gray-500 hover:text-gray-700"
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </fieldset>
                        </div>

                        <div className="mb-6">
                            <label className="flex items-start gap-2 text-sm text-gray-700">
                                <input type="checkbox" className="w-5 h-5 border-2 border-gray-400 rounded mt-0.5"/>
                                <span>Estoy de acuerdo con los <a href="#" className="text-[#ff8682] font-medium">Términos</a> y <a href="#" className="text-[#8b5cf6] font-medium">Políticas de Privacidad</a></span>
                            </label>
                        </div>

                        <button  
                        className="w-full bg-[#8b5cf6] text-white py-4 rounded-lg font-medium text-sm mb-4">
                            Crear cuenta
                        </button>

                        <p className="text-center text-gray-700 mb-6 text-sm">
                            ¿Ya tienes una cuenta? <a href="#" className="text-[#ff8682] font-medium">Inicia Sesión</a>
                        </p>

                        <div className="relative flex items-center justify-center mb-6">
                            <div className="border-t border-gray-300 w-full absolute"></div>
                            <span className="bg-white px-4 relative text-gray-400 text-sm">O regístrate con</span>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <button className="border-2 border-gray-300 rounded-lg py-2 flex items-center justify-center hover:bg-blue-50">
                                <img src="/src/img/facebook.png" alt="Facebook" className="w-8 h-8" />
                            </button>
                            
                            <button className="border-2 border-gray-300 rounded-lg py-2 flex items-center justify-center hover:bg-gray-50">
                                <img src="/src/img/google.png" alt="Google" className="w-[60px] h-[30px]" />
                            </button>
                            
                            <button className="border-2 border-gray-300 rounded-lg py-2 flex items-center justify-center hover:bg-gray-50">
                                <img src="/src/img/apple.png" alt="Apple" className="w-[70px] h-[40px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;