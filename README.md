# BookZone

## **Descripción del Proyecto**  
**BookZone** es una bookstore en línea diseñada para ofrecer una experiencia de compra de libros moderna, accesible y personalizada. A través de su interfaz intuitiva y funcionalidades avanzadas, busca facilitar el acceso a la lectura y promover la cultura.  

---

## **Objetivo General**  
Desarrollar una plataforma de comercio electrónico especializada en libros, con una experiencia de compra eficiente, segura y adaptable a las necesidades de los usuarios.  

---

## **Objetivos Específicos**  
1. Crear una plataforma de fácil uso para la búsqueda y compra de libros.  
2. Ofrecer un catálogo variado de títulos en formatos físicos y digitales.  
3. Garantizar transacciones seguras y flexibles mediante pasarelas de pago modernas.  

---

## **Stack Tecnológico**  

### **Frontend**  
- **Next.js:** Framework para React que permite renderizado del lado del servidor (SSR) y generación de sitios estáticos.  
- **HTML5 y CSS3:** Estructura y estilo base de las interfaces.  
- **Tailwind CSS:** Framework de diseño para un desarrollo rápido y responsive.  
- **Redux:** Gestión del estado de la aplicación.  

### **Backend**  
- **Servidor:**  
  - **Nginx:** Servidor web principal.  
  - **Nginx Reverse Proxy:** Manejo de redireccionamientos y configuración de certificados SSL/TLS para una conexión segura.  
- **Framework Principal:** WordPress Core para la creación de la API y administración de contenido.  
- **Base de Datos:**  
  - **MariaDB:** Base de datos robusta y escalable.  
  - **phpMyAdmin:** Interfaz de gestión de la base de datos integrada.  
- **Lenguaje:** PHP (última versión estable) como principal para el desarrollo backend.  
- **Herramientas de Administración:** WPCLI para manejar WordPress desde la consola y administrar configuraciones del proyecto.  
- **Pasarelas de Pago:**  
  - **WooCommerce y Strapi:** Implementación de pasarelas para procesar pagos de forma segura y flexible.  

### **Desarrollo y DevOps (Contenedores Docker):**  
Se usará **Docker** para empaquetar y ejecutar los diferentes componentes del proyecto de manera eficiente:  
- Crear contenedores individuales para **Nginx**, **WordPress**, y **MariaDB**, asegurando consistencia entre entornos de desarrollo y producción.  
- Uso de **Dockerfile y Docker-Compose** para orquestar múltiples servicios del proyecto y gestionar la comunicación entre ellos.  
- **Archivo `.env`** para centralizar variables de entorno como credenciales, configuraciones de puertos y rutas de acceso.  
- **Beneficios:** Entornos reproducibles, despliegue rápido y aislamiento entre servicios.  

---

## **Componentes Principales del Proyecto**  

| **Módulo**          | **Descripción**                                                                                 |  
|----------------------|-------------------------------------------------------------------------------------------------|  
| **Registro**         | Permite a los usuarios crear perfiles personales para acceder a funciones personalizadas.      |  
| **Búsqueda Básica**  | Barra de búsqueda rápida que entrega resultados relevantes del catálogo disponible.             |  
| **Búsqueda Avanzada**| Incluye filtros por categoría, género y precio para una experiencia más personalizada.          |  
| **Artículos y Características**| Ofrece sinopsis, reseñas y detalles de cada libro para tomar decisiones de compra informadas.|  
| **Compra por Artículo**| Flujo de compra directo desde la página del producto con métodos de pago seguros.             |  
| **Carro de Compras** | Permite revisar y editar la selección de artículos antes de realizar el pago.                  |  

---

## **Equipo de Trabajo: Poli Devs**  

| **Miembro**                         | **Rol**                                                    |  
|-------------------------------------|-----------------------------------------------------------|  
| **Angie Paola Aponte Ruiz**         | Administradora de interfaz del cliente - Gerente de diseño|  
| **Maria José Castro Martinez**      | Gerente de implementación - Gerente de pruebas            |  
| **Robert Alejandro Manotas Hernandez** | Líder de equipo - Gerente de planificación               |  
| **Jonathan Oriel Rodriguez Chacon** | Gerente de procesos - Gerente de calidad                  |  
| **Brian Pulgarin Pino**             | Gerente de soporte - Gerente de seguridad                 |  

---

## **Metodología de Desarrollo**  
Se empleará **Scrum**, con ciclos de trabajo (sprints) de dos semanas para:  
- Adaptarse a cambios en los requisitos.  
- Priorizar funcionalidades clave.  
- Mejorar continuamente a través de reuniones y retrospectivas.  

---

### **Planificación de Sprints**  

| **Sprint**        | **Semanas**   | **Objetivo**                                              | **Tareas**                                                                                                 |  
|-------------------|---------------|-----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|  
| **Sprint 1**      | 46-47         | Diseño y planificación inicial                            | Recolección de requisitos, diseño de arquitectura, wireframes, planificación de pruebas                  |  
| **Sprint 2**      | 48-49         | Desarrollo del frontend (interfaces básicas)              | Desarrollo de la interfaz de registro y búsqueda básica (Next.js, Tailwind CSS)                          |  
| **Sprint 3**      | 50-51         | Desarrollo del frontend (interfaces detalladas)           | Desarrollo de la interfaz del detalle de libros y carrito de compras                                     |  
| **Sprint 4**      | 52-53         | Backend e integración                                     | Implementación de APIs con WordPress Core, integración frontend-backend, pruebas de integración           |  
| **Sprint 5**      | 54-55         | Pruebas y puesta en marcha                                | Pruebas exhaustivas de funcionalidad y rendimiento; preparación para el lanzamiento                      |  

---

## **Licencia**  
Este proyecto está bajo la Licencia MIT.  
