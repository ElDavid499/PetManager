# Proyecto HU-Veterinaria 
### Documento de Historias de Usuario y Requerimientos Funcionales  

**Integrantes:**  
- Sebastián Puentes González  
- Daniela Sanabria Mosquera  
- David Felipe Perdomo Castillo  
- César David Quintero Ramírez  

**Curso:** Ingeniería de Software  
**Institución:** Corhuila   
**Fecha:**  7 Octubre de 2025  

---

## Introducción

El presente documento contiene la recopilación y descripción de las **historias de usuario (HU)** desarrolladas para el proyecto *HU*.  
En este archivo se encuentran detallados los requerimientos funcionales, roles de usuario, objetivos y criterios de aceptación que guían el desarrollo del sistema.  
Cada hoja del Excel original se ha convertido en una tabla estructurada en formato Markdown, manteniendo la información organizada y fácilmente legible.  

El objetivo principal de este documento es servir como una referencia técnica y funcional para el equipo de desarrollo, facilitando la trazabilidad y verificación de las funcionalidades planificadas.

---

# Contenido del archivo HU-Parc.xlsx

## Hoja: Hoja1

| ID     | Historia de Usuario                                                                                           | Rol           | Criterios de Aceptación                                                                                         | Prioridad   | Estado    |
|:-------|:--------------------------------------------------------------------------------------------------------------|:--------------|:----------------------------------------------------------------------------------------------------------------|:------------|:----------|
| HU 1.1 | Como Administrador, quiero ver la lista de todos los usuarios para monitorear el personal del sistema.        | Administrador | 1️⃣ Listado en formato card con nombre, rol y estado.2️⃣ Acceso desde menú principal.3️⃣ Ordenado alfabéticamente. | Alta        | Pendiente |
| HU 1.2 | Como Administrador, quiero buscar usuarios por nombre o correo para encontrarlos rápidamente.                 | Administrador | 1️⃣ Filtro dinámico.2️⃣ Coincidencias parciales permitidas.3️⃣ Opción de limpiar búsqueda.                         | Media       | Pendiente |
| HU 1.3 | Como Administrador, quiero registrar un nuevo usuario con su rol y estado para gestionar accesos.             | Administrador | 1️⃣ Formulario con nombre, correo, teléfono, rol y estado.2️⃣ Validar campos obligatorios.3️⃣ Selector de rol.     | Alta        | Pendiente |
| HU 1.4 | Como Administrador, quiero editar los datos de un usuario existente para mantener su información actualizada. | Administrador | 1️⃣ Formulario precargado.2️⃣ Guardar cambios manualmente.3️⃣ Validar correos duplicados.                          | Alta        | Pendiente |
| HU 1.5 | Como Administrador, quiero ver el detalle completo de un usuario para revisar su información y estado.        | Administrador | 1️⃣ Mostrar todos los datos.2️⃣ Botón “Editar Usuario”.3️⃣ Vista de solo lectura.                                  | Media       | Pendiente |
| HU 2.1 | Como Veterinario, quiero ver el listado de mascotas registradas para gestionar sus fichas clínicas.           | Veterinario   | 1️⃣ Cards con nombre, especie y propietario.2️⃣ Filtro por tipo de mascota.3️⃣ Imagen por mascota.                 | Alta        | Pendiente |
| HU 2.2 | Como Asistente, quiero registrar una nueva mascota para iniciar su historial clínico.                         | Asistente     | 1️⃣ Selección de especie, raza y propietario.2️⃣ Campos obligatorios validados.3️⃣ Registro de estado de salud.    | Alta        | Pendiente |
| HU 2.3 | Como Veterinario, quiero editar la información de una mascota para mantener su ficha actualizada.             | Veterinario   | 1️⃣ Datos precargados.2️⃣ Modificación de propietario o ficha clínica.3️⃣ Cambios reflejados en lista.             | Alta        | Pendiente |
| HU 2.4 | Como Veterinario, quiero ver el detalle de una mascota para consultar su información completa.                | Veterinario   | 1️⃣ Información general y clínica separadas.2️⃣ Mostrar propietario.3️⃣ Navegación al perfil del propietario.      | Media       | Pendiente |
| HU 3.1 | Como Veterinario, quiero listar los tipos de mascotas disponibles para seleccionarlos en registros.           | Veterinario   | 1️⃣ Cards con nombre e ícono.2️⃣ Botón “Crear Tipo”.3️⃣ Orden alfabético.                                          | Media       | Pendiente |
| HU 3.2 | Como Administrador, quiero crear un nuevo tipo de mascota para ampliar la clasificación.                      | Administrador | 1️⃣ Campos: nombre, descripción, ícono.2️⃣ Nombre obligatorio.3️⃣ Reflejar en módulo mascotas.                     | Alta        | Pendiente |
| HU 3.3 | Como Veterinario, quiero editar un tipo de mascota para actualizar su información.                            | Veterinario   | 1️⃣ Modificar nombre o ícono.2️⃣ Formulario precargado.3️⃣ Cambios reflejados automáticamente.                     | Media       | Pendiente |
| HU 4.1 | Como Asistente, quiero ver el listado de productos para gestionar el inventario.                              | Asistente     | 1️⃣ Grid con imagen, nombre y precio.2️⃣ Campo de búsqueda.3️⃣ Marcar productos sin stock.                         | Alta        | Pendiente |
| HU 4.2 | Como Veterinario, quiero crear un nuevo producto para agregarlo al catálogo.                                  | Veterinario   | 1️⃣ Campos: nombre, descripción, precio, stock, imagen.2️⃣ Selección de categoría.3️⃣ Validaciones obligatorias.   | Alta        | Pendiente |
| HU 4.3 | Como Asistente, quiero editar un producto existente para actualizar su información.                           | Asistente     | 1️⃣ Formulario precargado.2️⃣ Modificar stock y precio.3️⃣ Cambios reflejados en la lista.                         | Alta        | Pendiente |
| HU 4.4 | Como Veterinario, quiero ver el detalle de un producto para revisar su disponibilidad.                        | Veterinario   | 1️⃣ Mostrar descripción, categoría y stock.2️⃣ Indicar “Agotado” si no hay unidades.3️⃣ Botón “Volver”.            | Media       | Pendiente |
| HU 5.1 | Como Asistente, quiero ver la lista de categorías para clasificar los productos.                              | Asistente     | 1️⃣ Cards con nombre e ícono.2️⃣ Buscar por nombre.3️⃣ Orden alfabético.                                           | Media       | Pendiente |
| HU 5.2 | Como Administrador, quiero crear una nueva categoría para organizar el catálogo.                              | Administrador | 1️⃣ Campos: nombre, descripción, ícono.2️⃣ Nombre obligatorio.3️⃣ Aparece en selector de productos.                | Alta        | Pendiente |
| HU 5.3 | Como Veterinario, quiero editar una categoría para actualizar su información.                                 | Veterinario   | 1️⃣ Modificar nombre o ícono.2️⃣ Cambios reflejados automáticamente.3️⃣ Formulario precargado.                     | Media       | Pendiente |

---

