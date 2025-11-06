import React, { useEffect, useState } from "react";
import LogoutButton from "../../Components/logout";
import api from "../../api/axios";
import SideBar from "./SideBar";
import WarehouseTable from "./WarehouseTable";
import Topbar from "./TopBar";


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


        <div className="flex bg-gray-50 min-h-screen">
            <SideBar />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <main className="p-6">
                    <WarehouseTable />
                </main>
            </div>
        </div>
        /* <TopBar />
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
        )} */ //}


    );
};

export default Dashboard;
