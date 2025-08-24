# Kredentia Frontend

![Vite](https://img.shields.io/badge/Vite-Frontend-blue?logo=vite)
![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178c6?logo=typescript)
![Wagmi](https://img.shields.io/badge/Wagmi-Web3-yellow?logo=ethereum)

---


## 🚀 ¿Qué es Kredentia?

Kredentia es una plataforma web moderna para la gestión y firma de documentos digitales, con integración a wallets Web3 (como MetaMask). Su objetivo es facilitar la validación y firma de documentos de manera segura, rápida y transparente, tanto para usuarios como para administradores.

### ¿Para quién es?
- Empresas que requieren validar documentos de empleados o clientes.
- Universidades o instituciones que emiten certificados digitales.
- Usuarios que desean firmar documentos de forma segura usando su wallet.

---

## 🧭 ¿Cómo funciona el flujo de usuario?

1. **Inicio y Dashboard:**
  - El usuario accede al dashboard principal donde puede ver un resumen y acceder a las diferentes secciones.
2. **Conexión de Wallet:**
  - El usuario conecta su wallet Web3 (por ejemplo, MetaMask) para autenticarse y firmar documentos.
3. **Recepción de Notificaciones:**
  - Cuando hay documentos pendientes de firma, el usuario recibe una notificación visual y sonora.
4. **Panel de Firmar:**
  - Al hacer clic en una notificación, se abre el panel de firma con los datos del documento y la wallet asociada.
5. **Firma/Rechazo:**
  - El usuario puede firmar el documento o rechazarlo, dejando un motivo si lo desea.
6. **Actualización en tiempo real:**
  - El sistema actualiza el estado de los documentos y notificaciones automáticamente.

---

## 🗂️ Estructura del Proyecto (Explicada)

```
├── public/                  # Archivos públicos y recursos estáticos
│   ├── vite.svg             # Logo de Vite
│   └── sounds/              # Sonidos para notificaciones
│       └── notification.mp3
├── src/                     # Código fuente principal
│   ├── App.tsx              # Componente raíz, maneja el layout y el routing de vistas
│   ├── main.tsx             # Punto de entrada de React
│   ├── config.ts            # Configuración global (si aplica)
│   ├── assets/              # Imágenes y recursos gráficos
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.tsx       # Barra superior, notificaciones y conexión de wallet
│   │   ├── Sidebar.tsx      # Barra lateral de navegación
│   │   ├── FirmarSidebar.tsx# Lista de wallets/documentos por firmar
│   │   ├── Firmar.tsx       # Panel de firma de documento
│   │   ├── Dashboard.tsx    # Vista principal
│   │   ├── Pendientes.tsx   # Documentos pendientes
│   │   └── ...
│   └── ...
├── package.json             # Dependencias y scripts
├── tsconfig.json            # Configuración de TypeScript
├── vite.config.ts           # Configuración de Vite
└── README.md                # Documentación del proyecto
```

---

## 🧩 Componentes principales y su función

### `Header.tsx`
- Muestra el nombre de la app y el avatar del usuario.
- Permite conectar/desconectar la wallet.
- Muestra el icono de notificaciones (campana) y el menú de notificaciones.
- Al hacer clic en una notificación, abre el panel de firma del documento correspondiente.

### `Sidebar.tsx`
- Barra lateral con navegación entre Dashboard, Pendientes y Firmar.
- Si la vista es "firmar", muestra el componente `FirmarSidebar`.

### `FirmarSidebar.tsx`
- Lista de wallets/documentos que están pendientes de firma.
- Al seleccionar uno, se muestra el panel de firma (`Firmar.tsx`).

### `Firmar.tsx`
- Panel donde se visualiza el documento seleccionado.
- Permite firmar o rechazar el documento (con motivo).

### `Dashboard.tsx`
- Vista principal con resumen y accesos rápidos.

### `Pendientes.tsx`
- Lista de todos los documentos pendientes de firma.

---

## 🔗 Props y comunicación entre componentes

- `setView(view)`: Cambia la vista principal (dashboard, pendientes, firmar).
- `setSelectedDoc(doc)`: Selecciona el documento/wallet a mostrar en el panel de firma.
- `notifications`: Array de notificaciones activas.

---

## 🛡️ Seguridad y Web3

- La autenticación y firma se realiza usando la wallet del usuario (por ejemplo, MetaMask) gracias a la librería wagmi.
- Las notificaciones se obtienen desde el backend usando la dirección de la wallet conectada.
- El sonido de notificación se reproduce solo cuando hay nuevas notificaciones.

---

## 🖥️ Ejemplo de flujo de uso

1. El usuario entra a la app y conecta su wallet.
2. Recibe una notificación: "Tienes una nueva firma pendiente de Wallet 2 (Diploma)".
3. Hace clic en la campana y luego en la notificación.
4. Se abre el panel de firma con los datos del documento y la wallet.
5. El usuario firma o rechaza el documento.
6. El estado se actualiza y la notificación desaparece.

---

## 🛠️ Tecnologías usadas (detallado)

- **Vite**: Bundler ultrarrápido para desarrollo moderno.
- **React**: Librería para construir interfaces de usuario.
- **TypeScript**: Añade tipado estático a JavaScript para mayor robustez.
- **Wagmi**: Facilita la integración de wallets y Web3 en React.
- **CSS Modules**: Permite estilos encapsulados por componente.

---

## 📦 Scripts útiles

| Comando         | Descripción                  |
|-----------------|-----------------------------|
| `npm run dev`   | Inicia modo desarrollo      |
| `npm run build` | Compila para producción     |
| `npm run preview`| Previsualiza build         |

---

## 🤝 Contribuciones

¡Pull requests y sugerencias son bienvenidas! Siéntete libre de abrir issues para reportar bugs o proponer mejoras.

---

## 📝 Licencia

MIT

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
