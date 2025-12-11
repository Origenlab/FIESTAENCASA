# Guia para Agregar Nuevas Empresas al Directorio Fiesta en Casa

## Informacion General

Este documento establece el proceso estandarizado para agregar nuevas empresas al directorio. Cada empresa requiere dos elementos:

1. **Card** - Tarjeta de presentacion en la pagina de categoria
2. **Resena** - Pagina completa con perfil detallado de la empresa

---

## Datos Requeridos del Usuario

Antes de comenzar, solicitar al usuario:

| Campo | Descripcion | Ejemplo |
|-------|-------------|---------|
| Nombre de la empresa | Nombre comercial oficial | REDEIL |
| URL del sitio web | Pagina web de la empresa | https://redeil.com/ |
| Categoria | Categoria principal del directorio | decoracion, banquetes, salones, etc. |
| Telefono | Numero de contacto principal | 55 4937 5172 |
| Email | Correo electronico de contacto | contacto@redeil.com |
| Ubicacion | Ciudad/Estado de operacion | CDMX y Estado de Mexico |
| Descripcion | Breve descripcion de servicios | Renta de iluminacion y audio |
| Horario | Horario de atencion | Lun-Dom: 8:00 AM - 11:00 PM |
| Imagenes | Carpeta con imagenes de productos/servicios | img/nombre-empresa/ |

---

## Paso 1: Crear Carpeta de Imagenes

### Ubicacion
```
/img/[nombre-empresa]/
```

### Ejemplo
```
/img/redeil/
```

### Notas
- Usar nombre en minusculas y sin espacios
- Usar guiones para separar palabras
- Formato preferido: .webp
- Minimo 9 imagenes para la galeria

---

## Paso 2: Crear la Card en la Pagina de Categoria

### Ubicacion del Archivo
```
/[categoria].html
```

### Ejemplo
```
/decoracion.html
```

### Buscar la Seccion
Localizar el comentario `<!-- Business Grid -->` y la clase `business-grid`

### Codigo de la Card

```html
<!-- [NOMBRE EMPRESA] - Card -->
<article class="business-card business-card--detailed business-card--featured">
  <a href="[categoria]/[nombre-empresa].html" class="business-card__link-wrapper">
    <div class="business-card__image">
      <img src="img/[nombre-empresa]/[imagen-principal].webp" alt="[NOMBRE EMPRESA] - [Descripcion corta]" class="business-card__img">
      <span class="business-card__badge business-card__badge--premium">Premium</span>
      <span class="business-card__badge business-card__badge--verified-small">
        <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
      </span>
    </div>
    <div class="business-card__content">
      <div class="business-card__tags">
        <span class="business-card__tag">[Tag 1]</span>
        <span class="business-card__tag">[Tag 2]</span>
        <span class="business-card__tag">[Tag 3]</span>
      </div>
      <h3 class="business-card__name">[NOMBRE EMPRESA]</h3>
      <p class="business-card__location">
        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        [Ubicacion]
      </p>
      <p class="business-card__excerpt">[Descripcion corta de 1-2 lineas con servicios principales y experiencia]</p>
      <a href="[URL sitio web]" target="_blank" rel="noopener noreferrer" class="business-card__website" onclick="event.stopPropagation();">
        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
        [dominio.com]
      </a>
      <div class="business-card__footer">
        <div class="business-card__rating">
          <span class="business-card__stars">★★★★★</span>
          <span class="business-card__reviews">([numero de resenas])</span>
        </div>
        <a href="[categoria]/[nombre-empresa].html" class="business-card__link">Ver mas</a>
      </div>
    </div>
  </a>
</article>
```

### Variables a Reemplazar

| Variable | Descripcion | Ejemplo |
|----------|-------------|---------|
| `[categoria]` | Nombre de la categoria en minusculas | decoracion |
| `[nombre-empresa]` | Nombre de empresa en minusculas con guiones | redeil |
| `[NOMBRE EMPRESA]` | Nombre comercial oficial | REDEIL |
| `[imagen-principal]` | Nombre del archivo de imagen principal | cabezas-moviles |
| `[Tag 1], [Tag 2], [Tag 3]` | Etiquetas de servicios principales | Iluminacion, Audio, Efectos |
| `[Ubicacion]` | Ciudad/Estado | CDMX y Estado de Mexico |
| `[URL sitio web]` | URL completa con https | https://redeil.com/ |
| `[dominio.com]` | Solo el dominio | redeil.com |
| `[numero de resenas]` | Cantidad de resenas | 47 |

---

## Paso 3: Crear Carpeta de Categoria (si no existe)

### Verificar si Existe
```
/[categoria]/
```

### Crear si es Necesario
```bash
mkdir /[categoria]
```

### Ejemplo
```
/decoracion/
```

---

## Paso 4: Crear la Pagina de Resena

### Ubicacion del Archivo
```
/[categoria]/[nombre-empresa].html
```

### Ejemplo
```
/decoracion/redeil.html
```

### Estructura Completa de la Resena

```html
<!doctype html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>[NOMBRE EMPRESA] | [Descripcion corta] | Fiesta en Casa</title>
  <link rel="stylesheet" href="../css/style.css">
  <meta name="description" content="[NOMBRE EMPRESA]: [Descripcion SEO de 150-160 caracteres con servicios principales, ubicacion y tipo de eventos]">

  <meta property="og:title" content="[NOMBRE EMPRESA] - [Categoria] | Fiesta en Casa">
  <meta property="og:type" content="website">
  <meta property="og:url" content="[URL sitio web]">
  <meta property="og:image" content="">
  <meta property="og:description" content="[Descripcion corta para redes sociales]">

  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="../icon.png">

  <link rel="manifest" href="../site.webmanifest">
  <meta name="theme-color" content="#6366f1">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>

  <!-- Header -->
  <header class="header">
    <div class="header__container">
      <a href="../index.html" class="header__logo">
        <img src="../img/fiesta-en-casa.png" alt="Fiesta en Casa" class="header__logo-img">
      </a>

      <nav class="header__nav" id="mainNav">
        <a href="../index.html" class="header__nav-link">Inicio</a>
        <a href="../index.html#categorias" class="header__nav-link">Categorias</a>
        <a href="../index.html#contacto" class="header__nav-link">Contacto</a>
      </nav>

      <div class="header__actions">
        <a href="../index.html#registrar" class="header__btn header__btn--outline">Registrar Empresa</a>
        <button class="header__menu-toggle" id="menuToggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Breadcrumb -->
  <section class="breadcrumb-section">
    <div class="breadcrumb-section__container">
      <nav class="breadcrumb">
        <a href="../index.html">Inicio</a>
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
        <a href="../[categoria].html">[Categoria]</a>
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
        <span>[NOMBRE EMPRESA]</span>
      </nav>
    </div>
  </section>

  <!-- Company Hero -->
  <section class="company-hero">
    <div class="company-hero__container">
      <div class="company-hero__grid">

        <!-- Left Column - Main Info -->
        <div class="company-hero__main">
          <div class="company-hero__badges">
            <span class="company-badge company-badge--verified">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Empresa Verificada
            </span>
            <span class="company-badge company-badge--premium">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Premium
            </span>
          </div>

          <h1 class="company-hero__title">[NOMBRE EMPRESA]</h1>
          <p class="company-hero__tagline">[Tagline - Especialidad principal de la empresa]</p>

          <div class="company-hero__rating">
            <div class="company-hero__stars">
              <svg width="20" height="20" fill="#fbbf24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <svg width="20" height="20" fill="#fbbf24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <svg width="20" height="20" fill="#fbbf24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <svg width="20" height="20" fill="#fbbf24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <svg width="20" height="20" fill="#fbbf24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            </div>
            <span class="company-hero__rating-text">[Calificacion] ([numero] resenas)</span>
          </div>

          <div class="company-hero__description">
            <p>
              <strong>[Parrafo 1: Posicionamiento y servicios principales - incluir palabras clave SEO, ubicacion, tipos de eventos, anos de experiencia]</strong>
            </p>
            <p>
              [Parrafo 2: Catalogo de productos/servicios detallado - marcas, equipos especificos, diferenciadores]
            </p>
            <p>
              [Parrafo 3: Cobertura, equipo profesional y llamado a accion - sucursales, garantias, clientes satisfechos]
            </p>
          </div>

          <div class="company-hero__highlights">
            <div class="highlight-item">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>[Ubicacion]</span>
            </div>
            <div class="highlight-item">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>[Horario]</span>
            </div>
            <div class="highlight-item">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>[Beneficio principal]</span>
            </div>
          </div>

          <div class="company-hero__actions">
            <a href="https://wa.me/[telefono sin espacios]" target="_blank" class="btn btn--primary btn--lg">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar por WhatsApp
            </a>
            <a href="tel:+52[telefono]" class="btn btn--outline btn--lg">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              [Telefono formateado]
            </a>
            <a href="[URL sitio web]" target="_blank" class="btn btn--ghost btn--lg">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
              Visitar Sitio Web
            </a>
          </div>
        </div>

        <!-- Right Column - Quick Info Card -->
        <div class="company-hero__sidebar">
          <div class="company-info-card">
            <h3 class="company-info-card__title">Informacion de Contacto</h3>

            <div class="company-info-card__item">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <div>
                <span class="label">Telefono</span>
                <a href="tel:+52[telefono]">+52 [Telefono formateado]</a>
              </div>
            </div>

            <div class="company-info-card__item">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div>
                <span class="label">Email</span>
                <a href="mailto:[email]">[email]</a>
              </div>
            </div>

            <div class="company-info-card__item">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
              <div>
                <span class="label">Sitio Web</span>
                <a href="[URL sitio web]" target="_blank">[dominio.com]</a>
              </div>
            </div>

            <div class="company-info-card__item">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <span class="label">Horario</span>
                <span>[Horario]</span>
              </div>
            </div>

            <div class="company-info-card__divider"></div>

            <h4 class="company-info-card__subtitle">Cobertura</h4>
            <div class="company-info-card__tags">
              <span class="tag">[Zona 1]</span>
              <span class="tag">[Zona 2]</span>
              <span class="tag">[Zona 3]</span>
            </div>

            <div class="company-info-card__divider"></div>

            <h4 class="company-info-card__subtitle">Redes Sociales</h4>
            <div class="company-info-card__social">
              <a href="[URL Facebook]" class="social-link" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="[URL Instagram]" class="social-link" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section class="company-gallery">
    <div class="company-gallery__container">
      <div class="section-header">
        <h2 class="section-header__title">Galeria de Productos</h2>
        <p class="section-header__subtitle">[Descripcion de la galeria]</p>
      </div>

      <div class="gallery">
        <!-- Main Image -->
        <div class="gallery__main">
          <img src="../img/[nombre-empresa]/[imagen-1].webp" alt="[Descripcion imagen 1]" class="gallery__main-img" id="galleryMainImg">
          <div class="gallery__main-caption" id="galleryCaption">[Caption imagen 1]</div>
        </div>

        <!-- Thumbnails Grid (9 imagenes) -->
        <div class="gallery__thumbs">
          <button class="gallery__thumb gallery__thumb--active" data-img="../img/[nombre-empresa]/[imagen-1].webp" data-caption="[Caption 1]">
            <img src="../img/[nombre-empresa]/[imagen-1].webp" alt="[Alt 1]">
          </button>
          <button class="gallery__thumb" data-img="../img/[nombre-empresa]/[imagen-2].webp" data-caption="[Caption 2]">
            <img src="../img/[nombre-empresa]/[imagen-2].webp" alt="[Alt 2]">
          </button>
          <button class="gallery__thumb" data-img="../img/[nombre-empresa]/[imagen-3].webp" data-caption="[Caption 3]">
            <img src="../img/[nombre-empresa]/[imagen-3].webp" alt="[Alt 3]">
          </button>
          <button class="gallery__thumb" data-img="../img/[nombre-empresa]/[imagen-4].webp" data-caption="[Caption 4]">
            <img src="../img/[nombre-empresa]/[imagen-4].webp" alt="[Alt 4]">
          </button>
          <button class="gallery__thumb" data-img="../img/[nombre-empresa]/[imagen-5].webp" data-caption="[Caption 5]">
            <img src="../img/[nombre-empresa]/[imagen-5].webp" alt="[Alt 5]">
          </button>
          <button class="gallery__thumb" data-img="../img/[nombre-empresa]/[imagen-6].webp" data-caption="[Caption 6]">
            <img src="../img/[nombre-empresa]/[imagen-6].webp" alt="[Alt 6]">
          </button>
          <button class="gallery__thumb" data-img="../img/[nombre-empresa]/[imagen-7].webp" data-caption="[Caption 7]">
            <img src="../img/[nombre-empresa]/[imagen-7].webp" alt="[Alt 7]">
          </button>
          <button class="gallery__thumb" data-img="../img/[nombre-empresa]/[imagen-8].webp" data-caption="[Caption 8]">
            <img src="../img/[nombre-empresa]/[imagen-8].webp" alt="[Alt 8]">
          </button>
          <button class="gallery__thumb" data-img="../img/[nombre-empresa]/[imagen-9].webp" data-caption="[Caption 9]">
            <img src="../img/[nombre-empresa]/[imagen-9].webp" alt="[Alt 9]">
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="company-services">
    <div class="company-services__container">
      <div class="section-header">
        <h2 class="section-header__title">Nuestros Servicios</h2>
        <p class="section-header__subtitle">[Descripcion de servicios]</p>
      </div>

      <!-- Categoria de Servicio 1 -->
      <div class="service-category">
        <div class="service-category__header">
          <div class="service-category__icon">
            <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <!-- Icono apropiado para la categoria -->
            </svg>
          </div>
          <div>
            <h3 class="service-category__title">[Nombre Categoria 1]</h3>
            <p class="service-category__description">[Descripcion de la categoria]</p>
          </div>
        </div>

        <div class="service-grid">
          <div class="service-item">
            <span class="service-item__name">[Servicio 1]</span>
            <span class="service-item__desc">[Descripcion corta]</span>
          </div>
          <!-- Repetir para cada servicio -->
        </div>
      </div>

      <!-- Repetir para mas categorias de servicios -->

    </div>
  </section>

  <!-- Why Choose Section -->
  <section class="company-why">
    <div class="company-why__container">
      <div class="section-header">
        <h2 class="section-header__title">Por que Elegir [NOMBRE EMPRESA]</h2>
        <p class="section-header__subtitle">[Subtitulo]</p>
      </div>

      <div class="why-grid">
        <div class="why-card">
          <div class="why-card__icon">
            <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <!-- Icono -->
            </svg>
          </div>
          <h3 class="why-card__title">[Beneficio 1]</h3>
          <p class="why-card__description">[Descripcion del beneficio]</p>
        </div>
        <!-- Repetir para 4 beneficios -->
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="company-testimonials">
    <div class="company-testimonials__container">
      <div class="section-header">
        <h2 class="section-header__title">Lo Que Dicen Nuestros Clientes</h2>
        <p class="section-header__subtitle">[Subtitulo]</p>
      </div>

      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-card__rating">★★★★★</div>
          <p class="testimonial-card__text">"[Testimonio]"</p>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">[Iniciales]</div>
            <div>
              <span class="testimonial-card__name">[Nombre]</span>
              <span class="testimonial-card__role">[Cargo - Empresa]</span>
            </div>
          </div>
        </div>
        <!-- Repetir para 3 testimonios -->
      </div>
    </div>
  </section>

  <!-- Locations (si aplica) -->
  <section class="company-locations">
    <div class="company-locations__container">
      <div class="section-header">
        <h2 class="section-header__title">Nuestras Sucursales</h2>
        <p class="section-header__subtitle">[Subtitulo]</p>
      </div>

      <div class="locations-grid">
        <div class="location-card">
          <h3 class="location-card__title">[Nombre Sucursal]</h3>
          <p class="location-card__address">[Direccion completa]</p>
        </div>
        <!-- Repetir para cada sucursal -->
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="company-cta">
    <div class="company-cta__container">
      <h2 class="company-cta__title">[Titulo CTA]</h2>
      <p class="company-cta__description">[Descripcion CTA]</p>
      <div class="company-cta__actions">
        <a href="https://wa.me/[telefono]" target="_blank" class="btn btn--white btn--lg">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Solicitar Cotizacion
        </a>
        <a href="tel:+52[telefono]" class="btn btn--outline-white btn--lg">Llamar Ahora</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="../index.html" class="footer__logo">
            <img src="../img/fiesta-en-casa.png" alt="Fiesta en Casa" class="footer__logo-img">
          </a>
          <p class="footer__description">El directorio mas completo de empresas para eventos sociales en Mexico.</p>
        </div>

        <div class="footer__links">
          <h4 class="footer__title">Categorias</h4>
          <ul class="footer__list">
            <li><a href="../decoracion.html">Decoracion</a></li>
            <li><a href="../banquetes.html">Banquetes</a></li>
            <li><a href="../salones.html">Salones</a></li>
            <li><a href="../fotografia.html">Fotografia</a></li>
          </ul>
        </div>

        <div class="footer__links">
          <h4 class="footer__title">Empresa</h4>
          <ul class="footer__list">
            <li><a href="../index.html#nosotros">Nosotros</a></li>
            <li><a href="../index.html#contacto">Contacto</a></li>
            <li><a href="../index.html#registrar">Registrar Empresa</a></li>
          </ul>
        </div>

        <div class="footer__links">
          <h4 class="footer__title">Legal</h4>
          <ul class="footer__list">
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Terminos</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; 2024 Fiesta en Casa. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>

  <script src="../js/app.js"></script>

  <!-- Gallery Script -->
  <script>
    (function() {
      const mainImg = document.getElementById('galleryMainImg');
      const caption = document.getElementById('galleryCaption');
      const thumbs = document.querySelectorAll('.gallery__thumb');

      if (mainImg && thumbs.length) {
        thumbs.forEach(thumb => {
          thumb.addEventListener('click', function() {
            mainImg.src = this.dataset.img;
            mainImg.alt = this.dataset.caption;
            caption.textContent = this.dataset.caption;
            thumbs.forEach(t => t.classList.remove('gallery__thumb--active'));
            this.classList.add('gallery__thumb--active');
          });
        });
      }
    })();
  </script>

</body>

</html>
```

---

## Paso 5: Verificacion Final

### Checklist

- [ ] Carpeta de imagenes creada en `/img/[nombre-empresa]/`
- [ ] Card agregada en `/[categoria].html`
- [ ] Carpeta de categoria existe `/[categoria]/`
- [ ] Resena creada en `/[categoria]/[nombre-empresa].html`
- [ ] Todos los links funcionan correctamente
- [ ] Imagenes cargan correctamente
- [ ] Galeria funciona (cambio de imagenes)
- [ ] Botones de WhatsApp y telefono funcionan
- [ ] Link al sitio web funciona
- [ ] Breadcrumb muestra ruta correcta
- [ ] Responsive funciona en movil

---

## Estructura de Archivos Resultante

```
FIESTAENCASA/
├── index.html
├── [categoria].html          # Pagina de categoria con cards
├── [categoria]/
│   └── [nombre-empresa].html # Resena de la empresa
├── img/
│   └── [nombre-empresa]/     # Imagenes de la empresa
│       ├── imagen-1.webp
│       ├── imagen-2.webp
│       └── ...
├── css/
│   └── style.css
└── js/
    └── app.js
```

---

## Notas Importantes

1. **SEO**: Incluir palabras clave relevantes en titulo, descripcion meta y contenido
2. **Imagenes**: Optimizar para web (formato .webp, max 100KB por imagen)
3. **Consistencia**: Mantener el mismo tono y estilo en todas las resenas
4. **Contenido**: Redactar descripcion con enfoque en marketing y SEO
5. **Verificacion**: Siempre verificar que la empresa existe y la informacion es correcta

---

## Estilos CSS Importantes

### Seccion CTA (Llamada a Accion)

La seccion CTA usa un fondo de gradiente de color primario (morado/indigo) con texto blanco para maximo contraste y visibilidad.

**Clases CSS del CTA:**
- `.company-cta` - Fondo gradiente primario
- `.company-cta__title` - Titulo en blanco
- `.company-cta__description` - Descripcion en blanco con 90% opacidad
- `.btn--white` - Boton principal (fondo blanco, texto color primario)
- `.btn--outline-white` - Boton secundario (borde blanco, texto blanco)

**IMPORTANTE**:
- NO usar `.btn--primary` en el CTA (no se ve)
- NO usar `.btn--outline` en el CTA (no tiene contraste)
- SIEMPRE usar `.btn--white` para el boton principal
- SIEMPRE usar `.btn--outline-white` para el boton secundario

### Galeria de Imagenes

Si la empresa tiene imagenes, incluir galeria con 9 fotos:
- Clase `.gallery` para el contenedor
- Clase `.gallery__main` para imagen principal
- Clase `.gallery__thumbs` para miniaturas (grid 3x3)
- Incluir script de JavaScript al final del body

---

## Ejemplo Completo: REDEIL

### Datos
- **Nombre**: REDEIL
- **URL**: https://redeil.com/
- **Categoria**: decoracion
- **Telefono**: 55 4937 5172
- **Email**: contacto@redeil.com
- **Ubicacion**: CDMX y Estado de Mexico

### Archivos Generados
- Card en: `/decoracion.html`
- Resena en: `/decoracion/redeil.html`
- Imagenes en: `/img/redeil/`

---

*Documento creado para mantener la homogeneidad y profesionalismo del directorio Fiesta en Casa.*
