import React, { useEffect, useState } from "react";
import { useAuth } from "../../services/dataFromSlice";

export function NewAppt () {
    const {role, token} = useAuth();

    return (
        <><span>nueva cita</span></>
    )
}