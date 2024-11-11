import React from "react";
const Tabla = () =>{
    const arrayJson={
        "status": "success",
        "data": [
          {
            "id": 1,
            "name": "Juan Pérez",
            "email": "juan.perez@example.com",
            "age": 30,
            "isActive": true,
            "roles": ["admin", "editor"]
          },
          {
            "id": 2,
            "name": "María García",
            "email": "maria.garcia@example.com",
            "age": 25,
            "isActive": false,
            "roles": ["user"]
          },
          {
            "id": 3,
            "name": "Carlos López",
            "email": "carlos.lopez@example.com",
            "age": 40,
            "isActive": true,
            "roles": ["user", "editor"]
          }
        ],
        "total": 3
      }
    return(
        <div>
            <h2>Tabla de Ejemplo</h2>
        </div>
    )
}