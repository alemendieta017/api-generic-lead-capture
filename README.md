# lead-capture-app/lead-capture-app/README.md

# Lead Capture App

Este proyecto es una aplicación de captura de leads construida con Express. Permite a los usuarios registrarse a través de un formulario en una landing page y almacena la información de los leads en una base de datos simulada en memoria.

## Estructura del Proyecto

```
lead-capture-app
├── src
│   ├── app.ts                # Punto de entrada de la aplicación Express
│   ├── routes
│   │   └── leads.ts          # Rutas relacionadas con los leads
│   └── components
│       └── leads
│           ├── controller
│           │   └── leadsController.ts  # Controlador para manejar las solicitudes de leads
│           ├── services
│           │   └── leadsService.ts      # Lógica de negocio para los leads
│           └── repository
│               └── leadsRepository.ts    # Repositorio simulado para almacenar leads
├── index.ts                  # Punto de entrada de la aplicación
├── package.tson              # Configuración de npm
└── README.md                 # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <url-del-repositorio>
   ```
2. Navega al directorio del proyecto:
   ```
   cd lead-capture-app
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar la aplicación, ejecuta el siguiente comando:

```
node index.ts
```

La aplicación estará disponible en `http://localhost:3000`.

## Funcionalidades

- Crear un nuevo lead
- Obtener todos los leads
- Actualizar un lead existente
- Eliminar un lead

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.
