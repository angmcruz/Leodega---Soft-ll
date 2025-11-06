import React, { useEffect, useState } from "react";
import LogoutButton from "../Components/logout";
import api from "../api/axios";


const Dashboard: React.FC = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        //DATOS AUTENTICADOS
        api.get("/me", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
                Accept: "application/json",
            },
        })
            .then((res) => {
                setUser(res.data.user);
            })
            .catch(() => {
                setUser(null);
            });
    }, []);

    return (
        <div>
            <h1>
                Panel de Pruebas
            </h1>

            {user ? (
                <div>
                    <p>Bienvenido, {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p> CUANDO HAYA BOTON LOGOUT</p>
                    <LogoutButton />
                </div>
                
            ) : (
                <p>No se pudo obtener el usuario</p>
            )}
        </div>
    );
};

export default Dashboard;
