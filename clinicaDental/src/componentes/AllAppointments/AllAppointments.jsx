import React from "react";
import { useAuth } from "../../services/dataFromSlice";

export function CardUSer({ elem, index, letra }) {
    const { role } = useAuth();
    const status = elem.state ? 'Activo' : 'Inactivo'

    return (
        <></>
    )
}