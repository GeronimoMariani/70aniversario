# Sitio Web - 70º Aniversario Bomberos Voluntarios de Colón

## 📁 Estructura del Proyecto

```
bomberos-colon-html/
├── index.html              # Archivo HTML principal
├── css/
│   └── styles.css         # Estilos CSS globales
├── js/
│   ├── data.js            # Datos del sitio (timeline, galería, valores, personal)
│   ├── timeline.js        # Lógica de la línea de tiempo
│   ├── gallery.js         # Lógica de la galería
│   ├── values.js          # Lógica de valores
│   ├── staff.js           # Lógica del personal
│   └── main.js            # Funciones globales
├── images/                # Carpeta para imágenes locales
├── data/                  # Carpeta para archivos de datos adicionales
└── README.md              # Este archivo
```

## 🚀 Cómo Usar

### 1. **Abrir el sitio**
   - Simplemente abre `index.html` en tu navegador
   - No requiere servidor, funciona localmente

### 2. **Editar contenido**

#### Modificar la Línea de Tiempo
- Abre `js/data.js`
- Busca el array `timelineData`
- Agrega o edita elementos:
```javascript
{
    year: 2026,
    title: "Tu Título",
    description: "Tu descripción aquí"
}
```

#### Modificar la Galería
- Abre `js/data.js`
- Busca el array `galleryData`
- Agrega o edita elementos:
```javascript
{
    title: "Título de la Imagen",
    image: "URL de la imagen o ruta local"
}
```

#### Modificar Valores
- Abre `js/data.js`
- Busca el array `valuesData`
- Agrega o edita elementos:
```javascript
{
    title: "Nombre del Valor",
    description: "Descripción del valor",
    icon: "🔥"  // Usa emojis o caracteres
}
```

#### Modificar Personal
- Abre `js/data.js`
- Busca el objeto `staffData`
- Agrega o edita miembros:
```javascript
"Nombre del Grupo": [
    { LEG: "60-XX", NOMBRE: "APELLIDO NOMBRE" },
    // ... más miembros
]
```

### 3. **Personalizar Estilos**
- Abre `css/styles.css`
- Modifica los colores en la sección `:root`:
```css
:root {
    --primary: #DC143C;        /* Color rojo principal */
    --primary-dark: #B22222;   /* Rojo oscuro */
    --secondary: #F5F5F5;      /* Gris claro */
    /* ... más variables */
}
```

### 4. **Agregar Fotos de Personal**
- Sube las fotos a una carpeta `images/staff/`
- En `js/staff.js`, modifica la función para mostrar imágenes reales:
```javascript
// Reemplaza la sección del avatar con:
const avatar = document.createElement('img');
avatar.src = `images/staff/${member.LEG}.jpg`;
avatar.alt = member.NOMBRE;
avatar.className = 'staff-avatar-img';
```

## 🎨 Colores y Tipografía

### Colores Principales
- **Rojo Principal**: `#DC143C` (Crimson)
- **Rojo Oscuro**: `#B22222` (Firebrick)
- **Gris Claro**: `#F5F5F5` (WhiteSmoke)
- **Dorado**: `#FFD700` (Gold)

### Fuentes
- **Display**: Playfair Display (títulos)
- **Body**: Lora (texto)

Ambas se cargan desde Google Fonts en el `<head>` del HTML.

## 📱 Responsive Design

El sitio es completamente responsive:
- **Desktop**: Diseño completo con múltiples columnas
- **Tablet**: Ajustes de grid y espaciado
- **Mobile**: Diseño de una columna, navegación optimizada

## 🔧 Funciones JavaScript Disponibles

### `scrollToSection(sectionId)`
Desplaza suavemente a una sección específica:
```javascript
scrollToSection('timeline');  // Va a la sección de timeline
```

### `renderTimeline()`
Renderiza la línea de tiempo desde `timelineData`

### `renderGallery()`
Renderiza la galería desde `galleryData`

### `renderValues()`
Renderiza los valores desde `valuesData`

### `renderStaff()`
Renderiza el personal desde `staffData`

## 📝 Notas Importantes

1. **URLs de Imágenes**: Las imágenes de la galería usan URLs de Unsplash. Reemplázalas con tus propias URLs o rutas locales.

2. **Logo**: El logo se carga desde CDN. Para usar un logo local, cambia la URL en el `index.html`:
```html
<img src="images/logo.png" alt="Logo">
```

3. **Datos del Personal**: Todos los datos están en `js/data.js`. Puedes editarlos directamente sin tocar HTML o CSS.

4. **Agregar Nuevas Secciones**: 
   - Agrega un `<section>` en `index.html`
   - Crea un archivo JS en `js/` para la lógica
   - Importa el script en `index.html`

## 🌐 Desplegar en Línea

Para publicar el sitio en línea:

1. **GitHub Pages**:
   - Sube los archivos a un repositorio
   - Habilita GitHub Pages en Settings
   - El sitio estará disponible en `https://usuario.github.io/repo`

2. **Netlify**:
   - Arrastra la carpeta a Netlify.com
   - Obtén un URL automático

3. **Servidor Web**:
   - Sube los archivos vía FTP
   - Accede a través de tu dominio

## 📞 Soporte

Para cambios o mejoras:
1. Edita los archivos correspondientes
2. Prueba en tu navegador
3. Guarda los cambios

¡El sitio está listo para personalizar! 🎉
