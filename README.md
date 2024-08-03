# Marketplace-Backend - Technical documentation

## Overview
Marketplace Application - [Functional Documentation](https://github.com/salvadormartin3z/Marketplace/blob/main/README.md)

## Link de Producción
Visita la versión en producción aquí: [Marketplace](https://marketplace-salvadormartinez.netlify.app/)

## Descripción
Este es el backend para un marketplace, implementado usando Node.js, Express y TypeORM. Este backend proporciona APIs para manejar operaciones relacionadas con vendedores y otros recursos del marketplace.

## Requisitos Previos
Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema. Este proyecto también utiliza PostgreSQL como sistema de base de datos, por lo que deberás tener PostgreSQL instalado y configurado adecuadamente.

## Instalación
Para instalar y configurar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/salvadormartin3z/Marketplace-Backend.git
   cd Marketplace-Backend

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura las variables de entorno:
    Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno necesarias para la conexión a la base de datos y otras configuraciones importantes.

    ```bash
    DATABASE_URL=postgresql://tu_usuario:tu_contraseña@tu_host:tu_puerto/tu_base_de_datos?ssl=true
    ```

    Nota: Por motivos de seguridad, el archivo .env no se incluye en el repositorio y no debe ser compartido. Cada desarrollador o usuario que despliegue el proyecto debe crear su propio archivo .env.

4. Inicia el servidor:
    ```bash
    npm start
    ```

5. También necesitarás instalar y configurar el frontend del proyecto para una funcionalidad completa:
- **Frontend**: [Frontend en GitHub](https://github.com/salvadormartin3z/Marketplace-Frontend)

## Contacto

Puedes encontrarme y contactarme a través de las siguientes plataformas:

- **Portafolio**: [Salvador Martínez - Portafolio](https://salvadormartin3z.netlify.app/)
- **LinkedIn**: [Salvador Martínez en LinkedIn](https://www.linkedin.com/in/salvadormtz/)
- **GitHub**: [Salvador Martínez en GitHub](https://github.com/salvadormartin3z)

## Contribuir
Si deseas contribuir al proyecto, considera hacer fork del repositorio y enviar tus pull requests. También puedes abrir issues si encuentras problemas o tienes sugerencias de mejoras.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE en este repositorio para más detalles.
