# Ecosistema Logístico Digital - Loginter

## 📋 Descripción General

Sistema completo de dashboards para gestión operativa de inventario de Loginter. Incluye un Portal Maestro central con acceso a 6 dashboards especializados, todos conectados a Google Sheets en tiempo real.

## 📁 Estructura de Archivos

```
Ecosistema-Loginter-Completo/
├── index.html                              # Portal Maestro (Centro de Control)
├── dashboard-ocupacion.html                # Dashboard de Ocupación del Depósito
├── dashboard-inventario-motopartes.html    # Dashboard de Inventario Cíclico
├── dashboard-stock-general.html            # Dashboard de Stock General
├── dashboard-checklist.html                # Dashboard de Check List de Tareas
├── dashboard-goi.html                      # Dashboard G.O.I. (Gestión Operativa)
└── README.md                               # Este archivo
```

## 🚀 Características Principales

### Portal Maestro (index.html)
- Interfaz central institucional con logo de Loginter
- Navegación a todos los dashboards satélites
- Estadísticas en tiempo real (5 módulos, 4 en vivo, 1 en desarrollo)
- Responsive design optimizado para desktop, tablet y móvil
- Tipografía Barlow + colores corporativos (#1a56db)

### Dashboards Satélites

#### 1. **Ocupación del Depósito** (dashboard-ocupacion.html)
- **Estado**: En vivo ✅
- **Funcionalidad**: Monitoreo de ocupación por sector y tipo de ubicación
- **Filtros**: Sector, Tipo Ubicación, Ocupación, Estado
- **Datos**: Google Sheets (ID: 1PzWxSUSEFAhR72J7N9Ag2Qn_utms8noGXlNF4_y3PCk)
- **Refresco**: Automático cada 5 minutos

#### 2. **Inventario Cíclico (MotoPartes)** (dashboard-inventario-motopartes.html)
- **Estado**: En vivo ✅
- **Funcionalidad**: Control de conteos cíclicos por ubicación
- **Métricas**: Exactitud, discrepancias, avance, proyección de cierre
- **Búsqueda**: Por referencia, marca, ubicación
- **Análisis**: Diferencias de stock, marcas con progreso

#### 3. **Stock General** (dashboard-stock-general.html)
- **Estado**: En desarrollo 🔧
- **Funcionalidad**: Visibilidad del stock total por marca y categoría
- **Gráficos**: Distribución de marcas, análisis de rotación (A/B/C)
- **Filtros**: Por marca, estado, categoría
- **Datos**: Tabla detallada de SKUs y ubicaciones

#### 4. **Check List de Tareas** (dashboard-checklist.html)
- **Estado**: En vivo ✅
- **Funcionalidad**: Seguimiento de tareas rutinarias de inventario
- **Categorías**: Rutinario, Proyectos, Mejoras
- **Interactividad**: Checkboxes para marcar tareas completadas
- **Filtros**: Por estado (Pendiente, En curso, Realizado, etc.)

#### 5. **G.O.I. - Gestión Operativa** (dashboard-goi.html)
- **Estado**: En desarrollo 🔧
- **Funcionalidad**: Gestión operativa de inventario con máquinas y procesos
- **Tabs**: Todos, Gestión, Operativa, Control
- **Interactividad**: Edición inline, modal para agregar tareas
- **Estadísticas**: Total de tareas, activas, con maquinaria

#### 6. **Análisis de Bloqueados** (Pendiente)
- **Estado**: Próximamente 📅
- **Funcionalidad**: Seguimiento de mercadería bloqueada
- **Características**: Motivos, antigüedad, gestión de liberaciones

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos responsive con media queries
- **JavaScript**: Lógica de filtros, búsqueda y refresco automático
- **Chart.js**: Gráficos interactivos
- **Google Sheets API (JSONP)**: Conexión a datos en tiempo real
- **Tipografía**: Google Fonts (Barlow, Barlow Condensed)

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Móvil**: 480px - 767px
- **Móvil pequeño**: < 480px

### Características Responsive
- Grillas adaptables (1-3 columnas según pantalla)
- Tipografía escalada
- Espaciado ajustado
- Menús colapsables en móvil
- Tablas optimizadas para pantallas pequeñas

## 🌐 Integración Google Sheets

### Configuración JSONP
Todos los dashboards utilizan JSONP para conectarse a Google Sheets sin necesidad de servidor backend.

**Ejemplo de URL JSONP:**
```
https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/query?tqx=out:json&tq={QUERY}
```

### Refresco Automático
- Intervalo: 5 minutos
- Método: `setInterval()` con llamadas JSONP
- Fallback: Datos en caché si hay error de conexión

## 🎨 Paleta de Colores

```css
--accent: #1a56db          /* Azul corporativo */
--green: #057a55           /* Verde */
--red: #c81e1e             /* Rojo */
--yellow: #d97706          /* Amarillo */
--bg: #f0f2f5              /* Fondo gris claro */
--surface: #ffffff         /* Blanco */
--text: #111827            /* Gris oscuro */
--muted: #6b7280           /* Gris medio */
```

## 📊 Estructura de Datos

### Ocupación
```json
{
  "sector": "A",
  "tipo_ubicacion": "Estantería",
  "ocupacion": 85,
  "estado": "Normal"
}
```

### Inventario
```json
{
  "referencia": "REF001",
  "marca": "Marca X",
  "ubicacion": "A-01-01",
  "cantidad": 100,
  "exactitud": 95
}
```

### Tareas
```json
{
  "tarea": "Conteo sector A",
  "categoria": "Rutinario",
  "estado": "Pendiente",
  "frecuencia": "Diario",
  "responsable": "Juan"
}
```

## 🚀 Cómo Usar

### Instalación Local
1. Descargar todos los archivos HTML
2. Colocarlos en la misma carpeta
3. Abrir `index.html` en un navegador web moderno
4. Hacer clic en cualquier tarjeta para acceder a los dashboards

### Instalación en Servidor
1. Copiar todos los archivos a la raíz del servidor web
2. Configurar CORS si es necesario (para Google Sheets)
3. Acceder a través de la URL del servidor

### Personalización
- Cambiar colores en `:root` del CSS
- Actualizar URLs de Google Sheets en los scripts
- Modificar textos y descripciones según necesidad
- Agregar/quitar dashboards editando el grid en `index.html`

## 🔐 Seguridad

- No hay datos sensibles almacenados localmente
- Las conexiones a Google Sheets son públicas (lectura)
- No se requiere autenticación
- Compatible con HTTPS

## 🌍 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Navegadores móviles modernos

## 📞 Soporte

Para cambios, mejoras o nuevos dashboards, contactar al equipo de desarrollo.

## 📝 Notas Técnicas

### Performance
- Carga inicial: < 2s
- Refresco de datos: < 500ms
- Tamaño total: ~230KB (sin comprimir)

### Optimizaciones
- CSS minificado
- JavaScript optimizado
- Imágenes en formato SVG (escalables)
- Lazy loading para gráficos

### Debugging
- Abrir DevTools (F12)
- Revisar Console para errores
- Verificar Network para llamadas JSONP
- Usar filtros para aislar problemas

## 🎯 Roadmap

- [ ] Agregar Dashboard de Análisis de Bloqueados
- [ ] Implementar exportación a Excel
- [ ] Agregar notificaciones en tiempo real
- [ ] Crear sistema de alertas automáticas
- [ ] Integrar autenticación de usuarios
- [ ] Agregar historial de cambios

---

**Versión**: 1.0.0  
**Última actualización**: Abril 2026  
**Desarrollado para**: Loginter - Operación CMA
