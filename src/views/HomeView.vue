<template>
  <header class="fixed top-0 inset-x-0 bg-white shadow-md z-[1000] px-6 md:px-12 py-1 mx-auto max-w-[100vw] overflow-x-hidden">
    <nav class="w-full">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <img 
            src="@/assets/imagenes/logo.jpeg" 
            alt="Fullness Logo"
            class="h-12 object-contain hover:scale-105 transition-transform duration-300"
          >
        </div>

        <!-- Menú Hamburguesa (Mobile) -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 text-[#104e75] focus:outline-none"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Enlaces de navegación (Desktop) -->
        <div class="hidden md:flex gap-6 md:gap-24 items-center">
          <a href="#" class="text-[#104e75] hover:text-[#003157] transition-colors duration-300 font-medium text-base">
            Inicio
          </a>
          <a href="#agendar-cita" class="text-[#104e75] hover:text-[#003157] transition-colors duration-300 font-medium text-base">
            Servicio
          </a>
          <a href="#video-section" class="text-[#104e75] hover:text-[#003157] transition-colors duration-300 font-medium text-base">
            Nosotros
          </a>
          <a href="#contacto" class="text-[#104e75] hover:text-[#003157] transition-colors duration-300 font-medium text-base">
            Contacto
          </a>
        </div>
      </div>

      <div 
        v-show="isMenuOpen"
        class="md:hidden fixed top-[60px] inset-x-0 w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out overflow-y-auto"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="px-6 py-4 space-y-4 text-right h-full overflow-y-auto">
          <a 
            href="#" 
            class="block text-[#104e75] hover:text-[#003157] transition-colors duration-300 font-medium text-base"
            @click="isMenuOpen = false"
          >
            Inicio
          </a>
          <a 
            href="#agendar-cita" 
            class="block text-[#104e75] hover:text-[#003157] transition-colors duration-300 font-medium text-base"
            @click="isMenuOpen = false"
          >
            Servicio
          </a>
          <a 
            href="#video-section" 
            class="block text-[#104e75] hover:text-[#003157] transition-colors duration-300 font-medium text-base"
            @click="isMenuOpen = false"
          >
            Nosotros
          </a>
          <a 
            href="#contacto" 
            class="block text-[#104e75] hover:text-[#003157] transition-colors duration-300 font-medium text-base"
            @click="isMenuOpen = false"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  </header>

  <!-- Espacio para header -->
  <div class="h-[60px]"></div>

  <!-- Contenido principal -->
  <div class="relative w-full h-[786px] overflow-hidden">
    <img 
      src="@/assets/imagenes/imagen-de-fondo.jpg" 
      alt="Imagen de Fondo"
      class="w-full h-auto object-cover"
    >

    <!-- Sección de Marketing Izquierda -->
    <div class="absolute inset-0 bg-black/40 flex items-center px-4 md:px-12">
      <div class="text-white max-w-2xl space-y-8">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
          Fisioterapia Profesional 
          <span class="bg-gradient-to-r from-[#448ba9] to-[#104e75] bg-clip-text text-transparent">en tu Domicilio</span>
        </h1>
        
        <div class="space-y-5">
          <div class="flex items-center space-x-4">
            <div class="w-9 h-9 bg-[#104e75] rounded-full flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <p class="text-lg font-semibold">Servicio 100% domiciliario - Sin costos adicionales</p>
          </div>
          
          <div class="flex items-center space-x-4">
            <div class="w-9 h-9 bg-[#104e75] rounded-full flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <p class="text-lg font-semibold">Primera sesión con 20% de descuento inmediato</p>
          </div>
        </div>

        <div class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
          <div class="flex items-center gap-4 mb-3">
            <div class="bg-[#448ba9] text-white px-4 py-1 rounded-full text-sm font-medium">
              +3000 pacientes
            </div>
            <p class="text-lg font-semibold">atendidos en su domicilio</p>
          </div>
          <div class="border-l-2 border-[#448ba9] pl-4">
            <p class="text-sm opacity-90 mb-2">Especialidades principales:</p>
            <ul class="space-y-1 font-medium">
              <li>• Rehabilitación física integral en casa</li>
              <li>• Terapia para lesiones deportivas</li>
              <li>• Manejo de dolor crónico</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Botón flotante móvil -->
    <button 
      @click="showForm = true"
      class="md:hidden fixed bottom-6 right-4 bg-[#104e75] text-white px-6 py-3 rounded-full shadow-xl z-50 flex items-center gap-2 animate-bounce"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
      </svg>
      Reservar Cita
    </button>

    <!-- Formulario Derecho - Versión Desktop -->
    <div class="hidden md:flex absolute inset-0 justify-end items-center px-4 md:px-12">
      <form class="bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-md backdrop-blur-sm border border-white/20 relative">
        <!-- Badge -->
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#003157] text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg flex items-center">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          Agenda Prioritizada
        </div>

        <h2 class="text-xl font-bold text-center mb-4 text-[#104e75]">
          <span class="text-[#003157]">Reserva tu Cita</span>
          <span class="block text-sm font-normal text-[#448ba9] mt-1">en 3 simples pasos</span>
        </h2>

        <!-- Indicador -->
        <div class="text-center mb-4">
          <div class="inline-flex items-center bg-[#b7ebfa] px-3 py-1 rounded-full text-sm text-[#003157]">
            <span class="w-2 h-2 bg-[#448ba9] rounded-full animate-pulse mr-2"></span>
            <span>Horarios disponibles hoy</span>
          </div>
        </div>

        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-[#104e75] mb-1">Nombre</label>
              <input type="text" class="w-full px-3 py-2.5 border-2 border-[#dee3e9] rounded-lg placeholder-[#448ba9] text-sm focus:border-[#003157] focus:ring-2 focus:ring-[#b7ebfa] transition-all outline-none" placeholder="Ej: María">
            </div>
            
            <div>
              <label class="block text-xs font-semibold text-[#104e75] mb-1">Apellido</label>
              <input type="text" class="w-full px-3 py-2.5 border-2 border-[#dee3e9] rounded-lg placeholder-[#448ba9] text-sm focus:border-[#003157] focus:ring-2 focus:ring-[#b7ebfa] transition-all outline-none" placeholder="Ej: González">
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-[#104e75] mb-1">Tipo de Paciente *</label>
            <div class="grid grid-cols-2 gap-2">
              <button 
                type="button"
                @click="selectPatientType('nuevo')"
                :class="[
                  'text-sm py-2 px-3 rounded-lg transition-all font-medium flex items-center justify-center',
                  selectedPatientType === 'nuevo' 
                    ? 'border-2 border-[#003157] bg-[#e3f6fd] text-[#003157] shadow-inner'
                    : 'border-2 border-[#dee3e9] bg-white hover:border-[#448ba9]'
                ]"
              >
                <svg 
                  v-if="selectedPatientType === 'nuevo'"
                  class="w-4 h-4 mr-1 text-[#003157]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Nuevo Paciente
              </button>
              
              <button 
                type="button"
                @click="selectPatientType('antiguo')"
                :class="[
                  'text-sm py-2 px-3 rounded-lg transition-all font-medium flex items-center justify-center',
                  selectedPatientType === 'antiguo' 
                    ? 'border-2 border-[#003157] bg-[#e3f6fd] text-[#003157] shadow-inner'
                    : 'border-2 border-[#dee3e9] bg-white hover:border-[#448ba9]'
                ]"
              >
                <svg 
                  v-if="selectedPatientType === 'antiguo'"
                  class="w-4 h-4 mr-1 text-[#003157]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Paciente Antiguo
              </button>
            </div>
            <p v-if="!selectedPatientType" class="text-red-500 text-xs mt-1">* Debes seleccionar un tipo de paciente</p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-[#104e75] mb-1">Correo Electrónico</label>
            <input type="email" class="w-full px-3 py-2.5 border-2 border-[#dee3e9] rounded-lg placeholder-[#448ba9] text-sm focus:border-[#003157] focus:ring-2 focus:ring-[#b7ebfa] transition-all outline-none" placeholder="tucorreo@gm.com">
          </div>

          <div>
            <label class="block text-xs font-semibold text-[#104e75] mb-1">Celular</label>
            <input type="tel" class="w-full px-3 py-2.5 border-2 border-[#dee3e9] rounded-lg placeholder-[#448ba9] text-sm focus:border-[#003157] focus:ring-2 focus:ring-[#b7ebfa] transition-all outline-none" placeholder="Ej: 999 999 999">
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-[#104e75] mb-1">Distrito</label>
              <select class="w-full px-3 py-2.5 border-2 border-[#dee3e9] rounded-lg text-sm focus:border-[#003157] focus:ring-2 focus:ring-[#b7ebfa] transition-all outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-no-repeat bg-[right:0.75rem_center] bg-[length:1em]">
                <option class="text-[#448ba9]">Seleccione distrito</option>
                <option>Jesus Maria</option>
                <option>Miraflores</option>
                <option>San Isidro</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-[#104e75] mb-1">Servicio</label>
              <select class="w-full px-3 py-2.5 border-2 border-[#dee3e9] rounded-lg text-sm focus:border-[#003157] focus:ring-2 focus:ring-[#b7ebfa] transition-all outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-no-repeat bg-[right:0.75rem_center] bg-[length:1em]">
                <option class="text-[#448ba9]">Seleccione servicio</option>
                <option>Fisioterapia Domiciliaria</option>
                <option>Consulta Virtual</option>
              </select>
            </div>
          </div>
        </div>

        <button class="w-full bg-gradient-to-r from-[#003157] to-[#104e75] text-white py-3 rounded-lg font-semibold text-sm hover:from-[#00203a] hover:to-[#0d3a5d] transition-all duration-300 shadow-md hover:shadow-lg mt-4 flex items-center justify-center">
          Confirmar Reserva
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>

        <!-- Garantía -->
        <div class="text-center mt-4">
          <p class="text-xs text-[#448ba9] flex items-center justify-center space-x-2">
            <svg class="w-4 h-4 text-[#003157]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <span>Protección de datos garantizada · Sin cargos ocultos</span>
          </p>
        </div>
      </form>
    </div>

    <!-- Formulario Derecho - Versión Mobile -->
    <div 
      v-show="showForm"
      class="md:hidden fixed inset-0 bg-black/50 z-[2000] flex items-center justify-center p-4"
      @click.self="showForm = false"
    >
      <form class="bg-white p-6 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto relative">
        <!-- Badge -->
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#003157] text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg flex items-center">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          Agenda Prioritizada
        </div>

        <!-- Botón cerrar -->
        <button 
          @click="showForm = false"
          class="absolute top-4 right-4 text-[#448ba9] hover:text-[#003157]"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <h2 class="text-xl font-bold text-center mb-4 text-[#104e75] pt-4">
          <span class="text-[#003157]">Reserva tu Cita</span>
          <span class="block text-sm font-normal text-[#448ba9] mt-1">en 3 simples pasos</span>
        </h2>

        <!-- Indicador -->
        <div class="text-center mb-4">
          <div class="inline-flex items-center bg-[#b7ebfa] px-3 py-1 rounded-full text-sm text-[#003157]">
            <span class="w-2 h-2 bg-[#448ba9] rounded-full animate-pulse mr-2"></span>
            <span>Horarios disponibles hoy</span>
          </div>
        </div>

        <div class="space-y-4">
          <div class="grid grid-cols-1 gap-3">
            <div>
              <label class="block text-xs font-semibold text-[#104e75] mb-1">Nombre</label>
              <input type="text" class="w-full px-3 py-2.5 border-2 border-[#dee3e9] rounded-lg placeholder-[#448ba9] text-sm focus:border-[#003157] focus:ring-2 focus:ring-[#b7ebfa] transition-all outline-none" placeholder="Ej: María">
            </div>
            
            <div>
              <label class="block text-xs font-semibold text-[#104e75] mb-1">Apellido</label>
              <input type="text" class="w-full px-3 py-2.5 border-2 border-[#dee3e9] rounded-lg placeholder-[#448ba9] text-sm focus:border-[#003157] focus:ring-2 focus:ring-[#b7ebfa] transition-all outline-none" placeholder="Ej: González">
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-[#104e75] mb-1">Tipo de Paciente *</label>
            <div class="grid grid-cols-2 gap-2">
              <button 
                type="button"
                @click="selectPatientType('nuevo')"
                :class="[
                  'text-sm py-2 px-3 rounded-lg transition-all font-medium flex items-center justify-center',
                  selectedPatientType === 'nuevo' 
                    ? 'border-2 border-[#003157] bg-[#e3f6fd] text-[#003157] shadow-inner'
                    : 'border-2 border-[#dee3e9] bg-white hover:border-[#448ba9]'
                ]"
              >
                <svg 
                  v-if="selectedPatientType === 'nuevo'"
                  class="w-4 h-4 mr-1 text-[#003157]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Nuevo Paciente
              </button>
              
              <button 
                type="button"
                @click="selectPatientType('antiguo')"
                :class="[
                  'text-sm py-2 px-3 rounded-lg transition-all font-medium flex items-center justify-center',
                  selectedPatientType === 'antiguo' 
                    ? 'border-2 border-[#003157] bg-[#e3f6fd] text-[#003157] shadow-inner'
                    : 'border-2 border-[#dee3e9] bg-white hover:border-[#448ba9]'
                ]"
              >
                <svg 
                  v-if="selectedPatientType === 'antiguo'"
                  class="w-4 h-4 mr-1 text-[#003157]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Paciente Antiguo
              </button>
            </div>
            <p v-if="!selectedPatientType" class="text-red-500 text-xs mt-1">* Debes seleccionar un tipo de paciente</p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-[#104e75] mb-1">Correo Electrónico</label>
            <input type="email" class="w-full px-3 py-2.5 border-2 border-[#dee3e9] rounded-lg placeholder-[#448ba9] text-sm focus:border-[#003157] focus:ring-2 focus:ring-[#b7ebfa] transition-all outline-none" placeholder="tucorreo@gm.com">
          </div>

          <div>
            <label class="block text-xs font-semibold text-[#104e75] mb-1">Celular</label>
            <input type="tel" class="w-full px-3 py-2.5 border-2 border-[#dee3e9] rounded-lg placeholder-[#448ba9] text-sm focus:border-[#003157] focus:ring-2 focus:ring-[#b7ebfa] transition-all outline-none" placeholder="Ej: 999 999 999">
          </div>

          <div class="grid grid-cols-1 gap-3">
            <div>
              <label class="block text-xs font-semibold text-[#104e75] mb-1">Distrito</label>
              <select class="w-full px-3 py-2.5 border-2 border-[#dee3e9] rounded-lg text-sm focus:border-[#003157] focus:ring-2 focus:ring-[#b7ebfa] transition-all outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-no-repeat bg-[right:0.75rem_center] bg-[length:1em]">
                <option class="text-[#448ba9]">Seleccione distrito</option>
                <option>Jesus Maria</option>
                <option>Miraflores</option>
                <option>San Isidro</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-[#104e75] mb-1">Servicio</label>
              <select class="w-full px-3 py-2.5 border-2 border-[#dee3e9] rounded-lg text-sm focus:border-[#003157] focus:ring-2 focus:ring-[#b7ebfa] transition-all outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-no-repeat bg-[right:0.75rem_center] bg-[length:1em]">
                <option class="text-[#448ba9]">Seleccione servicio</option>
                <option>Fisioterapia Domiciliaria</option>
                <option>Consulta Virtual</option>
              </select>
            </div>
          </div>
        </div>

        <button class="w-full bg-gradient-to-r from-[#003157] to-[#104e75] text-white py-3 rounded-lg font-semibold text-sm hover:from-[#00203a] hover:to-[#0d3a5d] transition-all duration-300 shadow-md hover:shadow-lg mt-4 flex items-center justify-center">
          Confirmar Reserva
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>

        <!-- Garantía -->
        <div class="text-center mt-4">
          <p class="text-xs text-[#448ba9] flex items-center justify-center space-x-2">
            <svg class="w-4 h-4 text-[#003157]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <span>Protección de datos garantizada · Sin cargos ocultos</span>
          </p>
        </div>
      </form>
    </div>
  </div>
<!-- Sección de disponibilidad -->
<div class="relative py-12 bg-gradient-to-br from-[#dee3e9]/10 to-[#b7ebfa]/10 overflow-hidden">
  <div class="w-full px-0 sm:px-4">
    <div class="relative bg-white sm:rounded-xl shadow-lg border-y sm:border border-[#dee3e9]">
      <!-- Decoración de bordes reducida -->
      <div class="absolute -left-6 -top-6 w-24 h-24 bg-[#448ba9]/5 rounded-full blur"></div>
      <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-[#104e75]/5 rounded-full blur"></div>
      
      <div class="px-6 py-8 sm:p-10 lg:px-16 lg:py-12">
        <div class="text-center space-y-6">
          <!-- Encabezado -->
          <div class="space-y-2">
            <h3 class="text-2xl sm:text-3xl font-bold text-[#104e75]">
              Disponibilidad Inmediata
            </h3>
            <p class="text-lg sm:text-xl text-[#448ba9] font-medium">
              Nuestros fisioterapeutas están listos para atenderte
            </p>
          </div>

          <!-- Botón principal -->
          <button 
            @click="showModal = true"
            class="bg-gradient-to-r from-[#003157] to-[#104e75] text-white px-8 py-3.5 rounded-full font-semibold hover:from-[#00203a] hover:to-[#0d3a5d] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center mx-auto group relative w-full max-w-xs sm:max-w-sm"
          >
            <span class="relative z-10 flex items-center">
              Seleccionar profesional
              <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
          </button>

          <!-- Info adicional -->
          <div class="flex items-center justify-center space-x-3 text-sm sm:text-base text-[#448ba9]">
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Horarios flexibles de 7:00 AM a 9:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Ola decorativa inferior -->
  <div class="absolute inset-x-0 bottom-0 h-24 -mb-1">
    <svg viewBox="0 0 1440 120" class="w-full h-full text-[#b7ebfa]/20">
      <path fill="currentColor" d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,106.7C672,128,768,160,864,160C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
 

<!-- Modal -->
<div v-if="showModal" class="fixed inset-0 bg-black/50 z-[2000] flex items-center justify-center p-4">
  <div class="bg-[#dee3e9] rounded-xl max-w-md w-full shadow-2xl border border-[#104e75]">
    <div class="p-5 border-b border-[#104e75] flex justify-between items-center">
      <h3 class="text-lg font-semibold text-[#003157]">Selecciona un fisioterapeuta y fecha</h3>
      <button @click="showModal = false" class="text-[#448ba9] hover:text-[#003157] transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <div class="p-6 space-y-5">
      <div>
        <label class="block text-sm font-medium text-[#104e75] mb-2">Fisioterapeuta:</label>
        <select class="w-full px-4 py-2.5 border-2 border-[#dee3e9] rounded-lg focus:border-[#104e75] focus:ring-2 focus:ring-[#b7ebfa] text-sm transition-all">
          <option disabled selected class="text-[#448ba9]">Seleccione profesional</option>
          <option class="text-[#003157]">Rodrigo Fernández</option>
          <option class="text-[#003157]">Ana Martínez</option>
          <option class="text-[#003157]">Carlos Gutierrez</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-[#104e75] mb-2">Fecha de atención:</label>
        <input 
          type="date" 
          class="w-full px-4 py-2.5 border-2 border-[#dee3e9] rounded-lg focus:border-[#104e75] focus:ring-2 focus:ring-[#b7ebfa] text-sm transition-all"
          placeholder="dd/mm/aaaa"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-[#104e75] mb-2">Describe tu dolencia:</label>
        <textarea 
          rows="3"
          class="w-full px-4 py-2.5 border-2 border-[#dee3e9] rounded-lg focus:border-[#104e75] focus:ring-2 focus:ring-[#b7ebfa] text-sm placeholder-[#448ba9] transition-all"
          placeholder="Ej. Dolor de espalda, lesión deportiva..."
        ></textarea>
      </div>

      <button class="w-full bg-gradient-to-r from-[#003157] to-[#104e75] text-white py-2.5 rounded-lg font-medium hover:from-[#00203a] hover:to-[#0d3a5d] transition-all flex items-center justify-center gap-2">
        <svg class="w-4 h-4 text-[#b7ebfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        Confirmar
      </button>
    </div>
  </div>
</div>
</div>

  <!-- Separador de sección -->
  <div class="h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
<!-- Sección Calendly - Con Acceso a Video Tutorial -->
<div class="bg-gradient-to-br from-gray-50 to-blue-50 py-10 md:py-16 px-4" id="agendar-cita">
  <div class="max-w-6xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-7 lg:gap-9 items-start">
      <!-- Contenido Informativo -->
      <div class="text-center lg:text-left space-y-8">
        <div class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-[#0a1014] leading-tight">
            <span class="block text-[#104e75] mb-3">Agenda Tu Sesión</span>
            <span class="block text-xl md:text-2xl text-[#448ba9] font-medium">Fisioterapia a Domicilio</span>
          </h2>
          
          <div class="inline-flex items-center bg-white px-5 py-3 rounded-lg shadow-sm border border-[#b7ebfa] hover:border-[#448ba9] transition-colors">
            <svg class="w-5 h-5 text-[#104e75] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div class="text-left">
              <p class="text-[#003157] font-medium text-sm md:text-base">Sesión de 30 min</p>
              <p class="text-xs md:text-sm text-[#448ba9]">Evaluación completa incluida</p>
            </div>
          </div>
        </div>

        <!-- Tarjeta de Precio -->
        <div class="bg-gradient-to-br from-[#104e75] to-[#003157] rounded-xl p-5 shadow-lg">
          <div class="flex items-center justify-between text-white">
            <div>
              <p class="text-lg md:text-xl font-bold">Evaluación Inicial</p>
              <p class="text-xs md:text-sm opacity-90 mt-1">Diagnóstico personalizado</p>
            </div>
            <div class="text-right">
              <p class="text-3xl md:text-4xl font-bold">S/xxx</p>
              <p class="text-[0.7rem] md:text-xs opacity-90">precio único</p>
            </div>
          </div>
          <div class="mt-4 pt-4 border-t border-[#b7ebfa]/30 flex items-center">
            <svg class="w-4 h-4 text-[#b7ebfa] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            </svg>
            <span class="text-xs md:text-sm font-medium text-[#b7ebfa]">Cobertura: Jesús María, San Isidro, Miraflores</span>
          </div>
        </div>

        <!-- Acceso a Video Tutorial -->
        <div class="group transition-transform hover:scale-[1.02]">
          <a href="#video-tutorial" target="_blank" class="inline-flex items-center w-full bg-[#b7ebfa] hover:bg-[#104e75] px-5 py-3 rounded-lg shadow-sm transition-colors">
            <svg class="w-6 h-6 text-[#003157] group-hover:text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div class="text-left">
              <p class="text-sm md:text-base font-medium text-[#003157] group-hover:text-white">¿Cómo agendar?</p>
              <p class="text-xs md:text-sm text-[#448ba9] group-hover:text-[#b7ebfa]">Ver video tutorial</p>
            </div>
          </a>
        </div>

        <!-- Beneficios -->
        <div class="grid gap-4">
          <div class="p-4 bg-white rounded-lg shadow-sm border border-[#dee3e9] hover:border-[#448ba9] transition-colors flex items-center">
            <div class="w-8 h-8 bg-[#b7ebfa] rounded-md flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-[#104e75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <p class="text-sm md:text-base text-[#003157]">Cancelación flexible</p>
              <p class="text-xs md:text-sm text-[#448ba9]">Gratuita hasta 24h antes</p>
            </div>
          </div>
          
          <div class="p-4 bg-white rounded-lg shadow-sm border border-[#dee3e9] hover:border-[#448ba9] transition-colors flex items-center">
            <div class="w-8 h-8 bg-[#b7ebfa] rounded-md flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-[#104e75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <div>
              <p class="text-sm md:text-base text-[#003157]">Pago seguro</p>
              <p class="text-xs md:text-sm text-[#448ba9]">Online o en efectivo</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Widget Calendly -->
      <div class="bg-white rounded-xl shadow-lg border border-[#104e75] overflow-hidden h-[720px]">
        <div class="p-4 bg-[#104e75] border-b border-[#003157] flex items-center">
          <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          <h3 class="text-lg md:text-xl font-semibold text-white">Selecciona tu Horario</h3>
        </div>
        <div class="calendly-inline-widget" 
             data-url="https://calendly.com/citafullness/30min" 
             style="height: 100%; width: 100%;">
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Sección Video Vertical Compacta -->
<div class="bg-gradient-to-b from-white to-[#dee3e9] py-12 px-4 sm:px-6 lg:px-8" id="video-section">
  <div class="max-w-7xl mx-auto">
    <!-- Encabezado Contextual -->
    <div class="text-center mb-8 space-y-3">
      <h2 class="text-3xl md:text-4xl font-bold text-[#104e75]">
        Atención Personalizada con 
        <span class="bg-gradient-to-r from-[#003157] to-[#104e75] bg-clip-text text-transparent">Especialistas Certificados</span>
      </h2>
      <p class="text-base text-[#448ba9] max-w-2xl mx-auto leading-snug">
        Conectamos pacientes con 25+ fisioterapeutas especializados en tiempo real
      </p>
    </div>

    <!-- Contenedor Principal -->
    <div class="flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12">
      <!-- Video Vertical Optimizado -->
      <div class="relative w-full max-w-[360px] aspect-[9/16] group -mt-[18px]">
        <div class="absolute inset-0 bg-gradient-to-t from-[#003157]/20 via-transparent to-transparent rounded-xl z-10 pointer-events-none"></div>
        <div class="absolute inset-0 border-2 border-white/20 rounded-xl group-hover:border-[#b7ebfa] transition-all duration-300 pointer-events-none"></div>
        
        <iframe 
          src="https://www.youtube.com/embed/_vYxrOQpGVg" 
          class="w-full h-full rounded-xl shadow-xl transform group-hover:scale-[1.02] transition-transform"
          title="Plataforma de fisioterapia domiciliaria"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <!-- Contenido Informativo -->
      <div class="space-y-8 max-w-2xl w-full lg:pl-8">
        <!-- Beneficios Clave Compactos -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="p-5 bg-white rounded-lg border border-[#dee3e9] shadow-xs hover:shadow-sm transition-all">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 bg-[#b7ebfa] rounded-md flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-[#104e75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-[#003157] text-base">Red de Especialistas</h3>
            </div>
            <p class="text-[#448ba9] leading-tight text-sm">25+ profesionales activos con diferentes especializaciones</p>
          </div>

          <div class="p-5 bg-white rounded-lg border border-[#dee3e9] shadow-xs hover:shadow-sm transition-all">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 bg-[#b7ebfa] rounded-md flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-[#104e75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
              </div>
              <h3 class="font-semibold text-[#003157] text-base">Sesiones Verificadas</h3>
            </div>
            <p class="text-[#448ba9] leading-tight text-sm">100% de profesionales con certificación CIP vigente</p>
          </div>

          <div class="p-5 bg-white rounded-lg border border-[#dee3e9] shadow-xs hover:shadow-sm transition-all">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 bg-[#b7ebfa] rounded-md flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-[#104e75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
              <h3 class="font-semibold text-[#003157] text-base">Amplia Disponibilidad</h3>
            </div>
            <p class="text-[#448ba9] leading-tight text-sm">Más de 150 horarios disponibles semanalmente</p>
          </div>

          <div class="p-5 bg-white rounded-lg border border-[#dee3e9] shadow-xs hover:shadow-sm transition-all">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 bg-[#b7ebfa] rounded-md flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-[#104e75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 class="font-semibold text-[#003157] text-base">Progreso Monitorizado</h3>
            </div>
            <p class="text-[#448ba9] leading-tight text-sm">Seguimiento continuo por múltiples especialistas</p>
          </div>
        </div>

        <!-- Estadísticas Compactas -->
        <div class="bg-[#003157] text-white p-6 rounded-xl space-y-4 shadow-lg">
          <h3 class="text-lg font-semibold">Nuestra Red en Cifras:</h3>
          <div class="grid grid-cols-3 gap-4 text-center">
            <div class="space-y-0.5">
              <p class="text-2xl font-bold">25+</p>
              <p class="text-xs font-medium">Profesionales</p>
            </div>
            <div class="space-y-0.5">
              <p class="text-2xl font-bold">12</p>
              <p class="text-xs font-medium">Especialidades</p>
            </div>
            <div class="space-y-0.5">
              <p class="text-2xl font-bold">94%</p>
              <p class="text-xs font-medium">Satisfacción</p>
            </div>
          </div>
          <p class="text-xs text-center opacity-90">Cobertura en 8 distritos de Lima Metropolitana</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Sección Recomendaciones -->
<div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-[#104e75] sm:text-4xl">
        Lo que dicen nuestros pacientes
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Tarjeta 1 -->
      <div class="bg-white p-6 rounded-lg border border-[#dee3e9] shadow-sm hover:shadow-md transition-all">
        <div class="flex items-center gap-4 mb-4">
          <img src="@/assets/imagenes/imagen1.png" 
               class="w-12 h-12 rounded-full object-cover border-2 border-[#b7ebfa]">
          <div>
            <h3 class="font-semibold text-[#003157]">Alexandra C.</h3>
            <p class="text-xs text-[#448ba9]">Lesión lumbar</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] line-clamp-3">
          "Las terapias se adaptaron perfectamente a mi rutina laboral. Ahora puedo trabajar sin dolor."
        </p>
      </div>

      <!-- Tarjeta 2 -->
      <div class="bg-white p-6 rounded-lg border border-[#dee3e9] shadow-sm hover:shadow-md transition-all">
        <div class="flex items-center gap-4 mb-4">
          <img src="@/assets/imagenes/imagen2.png" 
               class="w-12 h-12 rounded-full object-cover border-2 border-[#b7ebfa]">
          <div>
            <h3 class="font-semibold text-[#003157]">Fernando S.</h3>
            <p class="text-xs text-[#448ba9]">Esguince tobillo</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] line-clamp-3">
          "Volví a correr 3 semanas antes de lo previsto. Excelente rehabilitación."
        </p>
      </div>

      <!-- Tarjeta 3 -->
      <div class="bg-white p-6 rounded-lg border border-[#dee3e9] shadow-sm hover:shadow-md transition-all">
        <div class="flex items-center gap-4 mb-4">
          <img src="@/assets/imagenes/imagen3.png" 
               class="w-12 h-12 rounded-full object-cover border-2 border-[#b7ebfa]">
          <div>
            <h3 class="font-semibold text-[#003157]">Samuel F.</h3>
            <p class="text-xs text-[#448ba9]">Artrosis rodilla</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] line-clamp-3">
          "Recuperé movilidad para jugar con mis nietos sin molestias."
        </p>
      </div>

      <!-- Tarjeta 4 -->
      <div class="bg-white p-6 rounded-lg border border-[#dee3e9] shadow-sm hover:shadow-md transition-all">
        <div class="flex items-center gap-4 mb-4">
          <img src="@/assets/imagenes/imagen4.png" 
               class="w-12 h-12 rounded-full object-cover border-2 border-[#b7ebfa]">
          <div>
            <h3 class="font-semibold text-[#003157]">Oscar V.</h3>
            <p class="text-xs text-[#448ba9]">Post-cirugía</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] line-clamp-3">
          "Terapia en casa aceleró mi recuperación. Profesionales excelentes."
        </p>
      </div>

      <!-- Tarjeta 5 -->
      <div class="bg-white p-6 rounded-lg border border-[#dee3e9] shadow-sm hover:shadow-md transition-all">
        <div class="flex items-center gap-4 mb-4">
          <img src="@/assets/imagenes/imagen5.png" 
               class="w-12 h-12 rounded-full object-cover border-2 border-[#b7ebfa]">
          <div>
            <h3 class="font-semibold text-[#003157]">Danitza G.</h3>
            <p class="text-xs text-[#448ba9]">Hernia discal</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] line-clamp-3">
          "Me devolvieron la calidad de vida que había perdido. 100% recomendados."
        </p>
      </div>

      <!-- Tarjeta 6 -->
      <div class="bg-white p-6 rounded-lg border border-[#dee3e9] shadow-sm hover:shadow-md transition-all">
        <div class="flex items-center gap-4 mb-4">
          <img src="@/assets/imagenes/imagen6.png" 
               class="w-12 h-12 rounded-full object-cover border-2 border-[#b7ebfa]">
          <div>
            <h3 class="font-semibold text-[#003157]">Análiz Z.</h3>
            <p class="text-xs text-[#448ba9]">Fibromialgia</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] line-clamp-3">
          "Redujeron mi dolor en un 70%. Ahora realizo actividades básicas sin ayuda."
        </p>
      </div>

      <!-- Tarjeta 7 -->
      <div class="bg-white p-6 rounded-lg border border-[#dee3e9] shadow-sm hover:shadow-md transition-all">
        <div class="flex items-center gap-4 mb-4">
          <img src="@/assets/imagenes/imagen7.png" 
               class="w-12 h-12 rounded-full object-cover border-2 border-[#b7ebfa]">
          <div>
            <h3 class="font-semibold text-[#003157]">Carolina S.</h3>
            <p class="text-xs text-[#448ba9]">Túnel carpiano</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] line-clamp-3">
          "Recuperé movilidad en las manos sin cirugía. Terapias clave."
        </p>
      </div>

      <!-- Tarjeta 8 -->
      <div class="bg-white p-6 rounded-lg border border-[#dee3e9] shadow-sm hover:shadow-md transition-all">
        <div class="flex items-center gap-4 mb-4">
          <img src="@/assets/imagenes/imagen8.png" 
               class="w-12 h-12 rounded-full object-cover border-2 border-[#b7ebfa]">
          <div>
            <h3 class="font-semibold text-[#003157]">Roberto T.</h3>
            <p class="text-xs text-[#448ba9]">Lesión deportiva</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] line-clamp-3">
          "Volví al fútbol profesional en tiempo récord. Rehabilitación perfecta."
        </p>
      </div>
    </div>

    <!-- Indicadores de Confianza Simplificados -->
    <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div class="p-4 space-y-1">
        <div class="text-3xl font-bold text-[#003157]">3K+</div>
        <p class="text-sm text-[#448ba9]">Pacientes<br>atendidos</p>
      </div>
      <div class="p-4 space-y-1">
        <div class="text-3xl font-bold text-[#003157]">25+</div>
        <p class="text-sm text-[#448ba9]">Especialistas<br>certificados</p>
      </div>
      <div class="p-4 space-y-1">
        <div class="text-3xl font-bold text-[#003157]">94%</div>
        <p class="text-sm text-[#448ba9]">Índice de<br>satisfacción</p>
      </div>
      <div class="p-4 space-y-1">
        <div class="text-3xl font-bold text-[#003157]">8</div>
        <p class="text-sm text-[#448ba9]">Distritos<br>atendidos</p>
      </div>
    </div>
  </div>
</div>

<!-- Sección Comunidades Horizontal -->
<section class="relative bg-gradient-to-b from-[#dee3e9] to-white py-16 px-4 sm:px-6" aria-label="Comunidades en línea">
  <div class="max-w-7xl mx-auto">
    <!-- Efecto wave dinámico -->
    <div class="absolute top-0 left-0 w-full overflow-hidden transform -translate-y-1">
      <svg class="relative block w-full h-16 text-[#dee3e9]" viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path fill="currentColor" fill-opacity="0.1" d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,106.7C672,107,768,85,864,74.7C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </div>

    <!-- Encabezado con más espacio -->
    <div class="relative z-10 text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[#104e75] mb-3">
        <span class="bg-gradient-to-r from-[#003157] to-[#104e75] bg-clip-text text-transparent">Comunidades</span> Activas
      </h2>
      <p class="text-[#448ba9] max-w-xl mx-auto text-base md:text-lg">
        Únete a grupos especializados en tiempo real
      </p>
    </div>

    <!-- Contenedor flex con más altura -->
    <div class="flex justify-between flex-nowrap gap-4 mb-8 overflow-x-auto pb-3 scrollbar-hide">
      <!-- Tarjeta 1 - Bienestar Mental -->
      <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-[#dee3e9] flex-1">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-10 h-10 bg-[#b7ebfa] rounded-lg flex items-center justify-center flex-shrink-0">
            <i class="fas fa-brain text-[#003157] text-xl"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-[#003157] mb-1">Bienestar Mental</h3>
            <p class="text-xs text-[#448ba9]">850 miembros activos</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] mb-4">Espacio seguro para compartir experiencias y aprender técnicas de manejo emocional y autocuidado mental con especialistas.</p>
        <div class="mt-auto space-y-4">
          <div class="flex items-center justify-between pt-3 border-t border-[#dee3e9]">
            <span class="text-xs font-semibold text-[#003157]">En línea ahora</span>
            <div class="flex -space-x-2">
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/50 border-2 border-white"></div>
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/70 border-2 border-white"></div>
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/90 border-2 border-white"></div>
            </div>
          </div>
          <a href="https://chat.whatsapp.com/DZF54vRl8MK46glCvGmUSm" target="_blank" rel="noopener noreferrer" class="w-full bg-[#003157] hover:bg-[#104e75] text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-all text-sm font-medium">
            <i class="fab fa-whatsapp text-lg"></i>
            Unirse al grupo
          </a>
        </div>
      </div>

      <!-- Tarjeta 2 - Alimentación -->
      <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-[#dee3e9] flex-1">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-10 h-10 bg-[#b7ebfa] rounded-lg flex items-center justify-center flex-shrink-0">
            <i class="fas fa-utensils text-[#003157] text-xl"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-[#003157] mb-1">Alimentación Saludable</h3>
            <p class="text-xs text-[#448ba9]">1.2k miembros activos</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] mb-4">Recetas nutritivas, consejos de nutricionistas certificados y planes alimenticios adaptados a diferentes estilos de vida.</p>
        <div class="mt-auto space-y-4">
          <div class="flex items-center justify-between pt-3 border-t border-[#dee3e9]">
            <span class="text-xs font-semibold text-[#003157]">En línea ahora</span>
            <div class="flex -space-x-2">
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/50 border-2 border-white"></div>
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/70 border-2 border-white"></div>
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/90 border-2 border-white"></div>
            </div>
          </div>
          <a href="https://chat.whatsapp.com/KZRdjEIUAffAKb0ZEdJGD1" target="_blank" rel="noopener noreferrer" class="w-full bg-[#003157] hover:bg-[#104e75] text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-all text-sm font-medium">
            <i class="fab fa-whatsapp text-lg"></i>
            Unirse al grupo
          </a>
        </div>
      </div>

      <!-- Tarjeta 3 - Running -->
      <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-[#dee3e9] flex-1">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-10 h-10 bg-[#b7ebfa] rounded-lg flex items-center justify-center flex-shrink-0">
            <i class="fas fa-running text-[#003157] text-xl"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-[#003157] mb-1">Running Group</h3>
            <p class="text-xs text-[#448ba9]">2k miembros activos</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] mb-4">Grupo para corredores de todos los niveles con rutas semanales, consejos de entrenamiento y preparación para carreras oficiales.</p>
        <div class="mt-auto space-y-4">
          <div class="flex items-center justify-between pt-3 border-t border-[#dee3e9]">
            <span class="text-xs font-semibold text-[#003157]">En línea ahora</span>
            <div class="flex -space-x-2">
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/50 border-2 border-white"></div>
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/70 border-2 border-white"></div>
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/90 border-2 border-white"></div>
            </div>
          </div>
          <a href="https://chat.whatsapp.com/FyRFucD3Gl6KyPApCRO3q8" target="_blank" rel="noopener noreferrer" class="w-full bg-[#003157] hover:bg-[#104e75] text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-all text-sm font-medium">
            <i class="fab fa-whatsapp text-lg"></i>
            Unirse al grupo
          </a>
        </div>
      </div>

      <!-- Tarjeta 4 - Ciclismo -->
      <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-[#dee3e9] flex-1">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-10 h-10 bg-[#b7ebfa] rounded-lg flex items-center justify-center flex-shrink-0">
            <i class="fas fa-bicycle text-[#003157] text-xl"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-[#003157] mb-1">Ciclismo Urbano</h3>
            <p class="text-xs text-[#448ba9]">1.5k miembros activos</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] mb-4">Comunidad de ciclistas que comparten rutas seguras, consejos de mantenimiento y organizan rodadas grupales semanales.</p>
        <div class="mt-auto space-y-4">
          <div class="flex items-center justify-between pt-3 border-t border-[#dee3e9]">
            <span class="text-xs font-semibold text-[#003157]">En línea ahora</span>
            <div class="flex -space-x-2">
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/50 border-2 border-white"></div>
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/70 border-2 border-white"></div>
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/90 border-2 border-white"></div>
            </div>
          </div>
          <a href="https://chat.whatsapp.com/I47p5lsLIERHTisNgr3Z6b" target="_blank" rel="noopener noreferrer" class="w-full bg-[#003157] hover:bg-[#104e75] text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-all text-sm font-medium">
            <i class="fab fa-whatsapp text-lg"></i>
            Unirse al grupo
          </a>
        </div>
      </div>

      <!-- Tarjeta 5 - Yoga -->
      <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-[#dee3e9] flex-1">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-10 h-10 bg-[#b7ebfa] rounded-lg flex items-center justify-center flex-shrink-0">
            <i class="fas fa-spa text-[#003157] text-xl"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-[#003157] mb-1">Yoga Integral</h3>
            <p class="text-xs text-[#448ba9]">950 miembros activos</p>
          </div>
        </div>
        <p class="text-sm text-[#448ba9] mb-4">Práctica de yoga para todos los niveles con instructores certificados, meditaciones guiadas y consejos para mejorar tu bienestar.</p>
        <div class="mt-auto space-y-4">
          <div class="flex items-center justify-between pt-3 border-t border-[#dee3e9]">
            <span class="text-xs font-semibold text-[#003157]">En línea ahora</span>
            <div class="flex -space-x-2">
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/50 border-2 border-white"></div>
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/70 border-2 border-white"></div>
              <div class="w-6 h-6 rounded-full bg-[#b7ebfa]/90 border-2 border-white"></div>
            </div>
          </div>
          <a href="https://chat.whatsapp.com/GT4whDlj8Xu0Kharz4BlSc" target="_blank" rel="noopener noreferrer" class="w-full bg-[#003157] hover:bg-[#104e75] text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-all text-sm font-medium">
            <i class="fab fa-whatsapp text-lg"></i>
            Unirse al grupo
          </a>
        </div>
      </div>
    </div>

    <!-- CTA Final -->
    <div class="mt-16 text-center space-y-6">
      <p class="text-[#448ba9] text-base md:text-lg">¿Quieres crear tu propia comunidad?</p>
      <button type="button" class="bg-gradient-to-r from-[#003157] to-[#104e75] text-white px-10 py-4 rounded-full text-base font-medium hover:from-[#00203a] hover:to-[#0d3a5d] transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#104e75] focus:ring-offset-2 inline-flex items-center gap-2 shadow-xl">
        Iniciar nueva comunidad
        <i class="fas fa-plus text-xl"></i>
      </button>
    </div>
  </div>
</section>
<!-- Sección Preguntas Frecuentes -->
<section class="relative bg-gradient-to-b from-[#dee3e9] to-white py-20 px-4 sm:px-6 lg:px-8 min-h-[800px] flex items-center">
  <div class="max-w-7xl mx-auto w-full">
    <!-- Efecto wave superior -->
    <div class="absolute top-0 left-0 w-full overflow-hidden transform -rotate-180">
      <svg class="relative block w-full h-[68px]" viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path fill="#104e75" fill-opacity="0.15" d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,106.7C672,107,768,85,864,74.7C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </div>

    <div class="relative z-10 text-center mb-14">
      <h2 class="text-3xl font-bold text-gray-900 mb-3">
        Preguntas
        <span class="bg-gradient-to-r from-[#104e75] to-[#448ba9] bg-clip-text text-transparent">Frecuentes</span>
      </h2>
      <p class="text-gray-600 max-w-xl mx-auto text-base">
        Encuentra respuestas rápidas a tus principales consultas
      </p>
    </div>

    <!-- Contenedor FAQ -->
    <div class="max-w-3xl mx-auto space-y-4 flex-grow">
      <!-- Item 1 -->
      <div class="border rounded-xl bg-white transition-all duration-200" 
           :class="{ 'shadow-md': activeFaq === 1 }">
        <button 
          @click="toggleFaq(1)"
          class="w-full px-5 py-4 text-left flex items-center justify-between group">
          <h3 class="text-lg font-semibold text-gray-800 pr-2">¿Cuánto cuesta una sesión de fisioterapia?</h3>
          <svg class="w-6 h-6 text-[#003157] transform transition-transform duration-200" 
               :class="{ 'rotate-180': activeFaq === 1 }" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <transition name="faq">
          <div v-show="activeFaq === 1" class="px-5 pb-4 pt-0">
            <div class="space-y-3 text-gray-600 text-sm border-t border-[#b7ebfa] pt-4">
              <ul class="list-disc pl-5 space-y-2 marker:text-[#448ba9]">
                <li>Consulta y evaluación inicial: <span class="font-medium text-[#104e75]">S/80</span></li>
                <li>Sesión a domicilio: <span class="font-medium text-[#104e75]">S/100</span></li>
                <li>Sesión virtual: <span class="font-medium text-[#104e75]">S/60</span></li>
              </ul>
              <div class="mt-3 p-3 bg-[#dee3e9] rounded-lg border border-[#b7ebfa]">
                <p class="text-sm font-medium text-[#003157]">Promociones: Descuentos en paquetes de sesiones y beneficios por referidos.</p>
              </div>
              <p class="mt-2 text-[#003157] font-medium flex items-center gap-1 text-sm">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Escríbenos para recibir una cotización personalizada
              </p>
            </div>
          </div>
        </transition>
      </div>

      <!-- Item 2 -->
      <div class="border rounded-xl bg-white transition-all duration-200" 
           :class="{ 'shadow-md': activeFaq === 2 }">
        <button 
          @click="toggleFaq(2)"
          class="w-full px-5 py-4 text-left flex items-center justify-between group">
          <h3 class="text-lg font-semibold text-gray-800 pr-2">¿Cuánto dura cada sesión?</h3>
          <svg class="w-6 h-6 text-[#003157] transform transition-transform duration-200" 
               :class="{ 'rotate-180': activeFaq === 2 }" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <transition name="faq">
          <div v-show="activeFaq === 2" class="px-5 pb-4 pt-0">
            <div class="space-y-2 text-gray-600 text-sm border-t border-[#b7ebfa] pt-4">
              <p>Duración aproximada: <span class="font-medium text-[#104e75]">45 a 60 minutos</span></p>
              <div class="mt-2 p-3 bg-[#dee3e9] rounded-lg border border-[#b7ebfa]">
                <p class="text-sm text-[#003157]">Nuestro equipo se enfoca en brindar una atención completa y efectiva en cada sesión.</p>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Item 3 -->
      <div class="border rounded-xl bg-white transition-all duration-200" 
           :class="{ 'shadow-md': activeFaq === 3 }">
        <button 
          @click="toggleFaq(3)"
          class="w-full px-5 py-4 text-left flex items-center justify-between group">
          <h3 class="text-lg font-semibold text-gray-800 pr-2">¿Qué métodos de pago aceptan?</h3>
          <svg class="w-6 h-6 text-[#003157] transform transition-transform duration-200" 
               :class="{ 'rotate-180': activeFaq === 3 }" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <transition name="faq">
          <div v-show="activeFaq === 3" class="px-5 pb-4 pt-0">
            <div class="space-y-2 text-gray-600 text-sm border-t border-[#b7ebfa] pt-4">
              <ul class="list-disc pl-5 space-y-2 marker:text-[#448ba9]">
                <li>Tarjetas de crédito/débito (Visa, Mastercard)</li>
                <li>Transferencias bancarias</li>
                <li>Yape y Plin</li>
              </ul>
              <p class="mt-2 text-sm text-[#104e75]">Solicita factura o boleta al momento del pago.</p>
            </div>
          </div>
        </transition>
      </div>

      <!-- Item 4 -->
      <div class="border rounded-xl bg-white transition-all duration-200" 
           :class="{ 'shadow-md': activeFaq === 4 }">
        <button 
          @click="toggleFaq(4)"
          class="w-full px-5 py-4 text-left flex items-center justify-between group">
          <h3 class="text-lg font-semibold text-gray-800 pr-2">¿Trabajan con seguros de salud?</h3>
          <svg class="w-6 h-6 text-[#003157] transform transition-transform duration-200" 
               :class="{ 'rotate-180': activeFaq === 4 }" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <transition name="faq">
          <div v-show="activeFaq === 4" class="px-5 pb-4 pt-0">
            <div class="space-y-2 text-gray-600 text-sm border-t border-[#b7ebfa] pt-4">
              <p>Actualmente estamos en proceso de alianzas con aseguradoras. Escríbenos para verificar cobertura con tu seguro.</p>
              <div class="mt-2 p-3 bg-[#dee3e9] rounded-lg border border-[#b7ebfa]">
                <p class="text-sm text-[#003157]">Brindamos recibos para reembolso en seguros privados.</p>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Item 5 -->
      <div class="border rounded-xl bg-white transition-all duration-200" 
           :class="{ 'shadow-md': activeFaq === 5 }">
        <button 
          @click="toggleFaq(5)"
          class="w-full px-5 py-4 text-left flex items-center justify-between group">
          <h3 class="text-lg font-semibold text-gray-800 pr-2">¿Puedo cancelar o reprogramar una sesión?</h3>
          <svg class="w-6 h-6 text-[#003157] transform transition-transform duration-200" 
               :class="{ 'rotate-180': activeFaq === 5 }" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <transition name="faq">
          <div v-show="activeFaq === 5" class="px-5 pb-4 pt-0">
            <div class="space-y-2 text-gray-600 text-sm border-t border-[#b7ebfa] pt-4">
              <p>Sí, puedes cancelar o reprogramar con al menos 24 horas de anticipación sin costo adicional.</p>
              <div class="mt-2 p-3 bg-[#dee3e9] rounded-lg border border-[#b7ebfa]">
                <p class="text-sm text-[#003157]">Para cambios de última hora, comunícate con nosotros inmediatamente.</p>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Item 6 -->
      <div class="border rounded-xl bg-white transition-all duration-200" 
           :class="{ 'shadow-md': activeFaq === 6 }">
        <button 
          @click="toggleFaq(6)"
          class="w-full px-5 py-4 text-left flex items-center justify-between group">
          <h3 class="text-lg font-semibold text-gray-800 pr-2">¿Los fisioterapeutas están certificados?</h3>
          <svg class="w-6 h-6 text-[#003157] transform transition-transform duration-200" 
               :class="{ 'rotate-180': activeFaq === 6 }" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <transition name="faq">
          <div v-show="activeFaq === 6" class="px-5 pb-4 pt-0">
            <div class="space-y-2 text-gray-600 text-sm border-t border-[#b7ebfa] pt-4">
              <p>Todos nuestros fisioterapeutas están certificados y colegiados, con experiencia en diversas especialidades.</p>
              <div class="mt-2 p-3 bg-[#dee3e9] rounded-lg border border-[#b7ebfa]">
                <p class="text-sm text-[#003157]">Garantizamos tratamientos seguros y efectivos con atención personalizada.</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- CTA Final -->
    <div class="mt-12 text-center space-y-3">
      <p class="text-gray-600 text-sm">¿Necesitas más información?</p>
      <button class="bg-gradient-to-r from-[#104e75] to-[#003157] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:from-[#003157] hover:to-[#104e75] transition-all inline-flex items-center gap-2 transform hover:scale-[1.02] active:scale-95">
        Contáctanos ahora
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 12h18m-18 7h18"/>
        </svg>
      </button>
    </div>
  </div>
</section>

<footer class="bg-gradient-to-b from-[#104e75] to-[#003157] text-[#dee3e9] shadow-xl" id="contacto">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-6 border-b border-[#b7ebfa]/20">
      
      <!-- Logo y Especialidades -->
      <div class="space-y-2 md:space-y-3">
        <div class="flex items-center gap-2">
          <img 
            src="@/assets/imagenes/logo.jpeg" 
            alt="Fiofulnes"
            class="h-10 w-10 md:h-12 md:w-12 object-cover rounded-lg border border-[#dee3e9]/20"
          >
          <div>
            <span class="text-base md:text-lg font-bold text-[#dee3e9]">Fiofulnes</span>
            <p class="text-[0.6rem] md:text-[0.7rem] text-[#448ba9]/90 mt-0.5">Colegiados CIP N° 28456</p>
          </div>
        </div>
        <ul class="hidden md:block space-y-1 md:space-y-1.5 text-xs text-[#448ba9]">
          <li class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-[#448ba9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            Rehabilitación integral
          </li>
          <li class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-[#448ba9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            Lesiones deportivas
          </li>
          <li class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-[#448ba9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            Dolor crónico
          </li>
        </ul>
      </div>

      <!-- Garantías -->
      <div class="space-y-2 md:space-y-3">
        <h4 class="text-[#dee3e9] font-medium text-xs uppercase tracking-wide mb-1 flex items-center gap-1.5">
          <svg class="w-4 h-4 text-[#448ba9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Garantía
        </h4>
        <div class="space-y-2 text-xs">
          <div class="bg-[#003157]/30 p-1.5 md:p-2 rounded-md flex items-center gap-2">
            <svg class="w-4 h-4 text-[#448ba9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
              <p class="text-[#dee3e9] text-sm md:text-base">Satisfacción</p>
              <p class="text-[0.6rem] md:text-[0.65rem] text-[#448ba9]/90">Reembolso 1ra sesión</p>
            </div>
          </div>
          <div class="bg-[#003157]/30 p-1.5 md:p-2 rounded-md flex items-center gap-2">
            <svg class="w-4 h-4 text-[#448ba9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <div>
              <p class="text-[#dee3e9] text-sm md:text-base">8 Distritos</p>
              <p class="text-[0.6rem] md:text-[0.65rem] text-[#448ba9]/90">Incluyendo JM y MF</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contacto -->
      <div class="space-y-2 md:space-y-3">
        <h4 class="text-[#dee3e9] font-medium text-xs uppercase tracking-wide mb-1 flex items-center gap-1.5">
          <svg class="w-4 h-4 text-[#448ba9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 12h18m-18 7h18"/>
          </svg>
          Contacto
        </h4>
        <div class="space-y-2 text-xs">
          <a href="tel:+51987654321" class="flex items-center gap-2 group">
            <div class="p-1 bg-[#003157]/30 rounded-md group-hover:bg-[#104e75]/40 transition-colors">
              <svg class="w-4 h-4 text-[#448ba9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 12h18m-18 7h18"/>
              </svg>
            </div>
            <div>
              <p class="text-[#dee3e9] text-sm md:text-base">+51 987 654 321</p>
              <p class="text-[0.6rem] md:text-[0.65rem] text-[#448ba9]/90">Llamada/WhatsApp</p>
            </div>
          </a>
          <a href="mailto:hola@fiofulnes.com" class="flex items-center gap-2 group">
            <div class="p-1 bg-[#003157]/30 rounded-md group-hover:bg-[#104e75]/40 transition-colors">
              <svg class="w-4 h-4 text-[#448ba9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <p class="text-[#dee3e9] text-sm md:text-base">hola@fiofulnes.com</p>
              <p class="text-[0.6rem] md:text-[0.65rem] text-[#448ba9]/90">Respuesta en 24h</p>
            </div>
          </a>
        </div>
      </div>

      <!-- Redes Sociales -->
      <div class="space-y-2 md:space-y-3">
        <h4 class="text-[#dee3e9] font-medium text-xs uppercase tracking-wide mb-1 flex items-center gap-1.5">
          <svg class="w-4 h-4 text-[#448ba9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          Redes
        </h4>
        <div class="grid grid-cols-3 gap-1 md:gap-2">
          <a href="https://wa.me/51987654321" target="_blank" class="p-1.5 md:p-2 bg-[#003157]/30 hover:bg-[#104e75]/40 rounded-md flex flex-col items-center transition-all group">
            <svg class="w-5 h-5 text-[#448ba9] group-hover:text-[#b7ebfa] mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span class="text-[0.6rem] md:text-[0.65rem] text-[#448ba9] group-hover:text-[#b7ebfa]">WhatsApp</span>
          </a>
          <a href="https://facebook.com" target="_blank" class="p-1.5 md:p-2 bg-[#003157]/30 hover:bg-[#104e75]/40 rounded-md flex flex-col items-center transition-all group">
            <svg class="w-5 h-5 text-[#448ba9] group-hover:text-[#b7ebfa] mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
            </svg>
            <span class="text-[0.6rem] md:text-[0.65rem] text-[#448ba9] group-hover:text-[#b7ebfa]">Facebook</span>
          </a>
          <a href="https://instagram.com" target="_blank" class="p-1.5 md:p-2 bg-[#003157]/30 hover:bg-[#104e75]/40 rounded-md flex flex-col items-center transition-all group">
            <svg class="w-5 h-5 text-[#448ba9] group-hover:text-[#b7ebfa] mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span class="text-[0.6rem] md:text-[0.65rem] text-[#448ba9] group-hover:text-[#b7ebfa]">Instagram</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-[0.6rem] md:text-[0.65rem]">
      <div class="text-[#448ba9]/80 text-center order-last md:order-first">
        © 2024 Fulness - Todos los derechos reservados
      </div>
      <div class="flex flex-col md:flex-row items-center divide-x-0 md:divide-x divide-[#104e75]">
        <a href="#" class="px-2 text-[#448ba9]/80 hover:text-[#dee3e9]">Políticas</a>
        <a href="#" class="px-2 text-[#448ba9]/80 hover:text-[#dee3e9]">Términos</a>
        <a href="#" class="px-2 text-[#448ba9]/80 hover:text-[#dee3e9]">Soporte</a>
      </div>
    </div>
  </div>
</footer>

</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      isMenuOpen: false,
      showForm: false,
      activeFaq: null,
      selectedPatientType: null,
      showModal: false,
      formError: false,
      formData: {
        nombre: '',
        apellido: '',
        email: '',
        celular: '',
        distrito: '',
        servicio: ''
      }
    }
  },
  mounted() {
    // Cargar script de Calendly dinámicamente
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
  },
  methods: {
    // Método para toggle del menú móvil
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    
    toggleFaq(num) {
      this.activeFaq = this.activeFaq === num ? null : num
    },
    selectPatientType(type) {
      this.selectedPatientType = type
      this.formError = false
    },
    validateForm() {
      if (!this.selectedPatientType) {
        this.formError = true
        return false
      }
      
      const requiredFields = ['nombre', 'apellido', 'email', 'celular']
      return requiredFields.every(field => !!this.formData[field])
    },
    submitForm() {
      if (!this.validateForm()) return
      
      this.showModal = true
      
      // Reset del formulario
      this.selectedPatientType = null
      this.formData = {
        nombre: '',
        apellido: '',
        email: '',
        celular: '',
        distrito: '',
        servicio: ''
      }
    },
    enter(el) {
      el.style.opacity = 0
      el.style.transform = 'scaleY(0.9)'
    },
    afterEnter(el) {
      el.style.opacity = 1
      el.style.transform = 'scaleY(1)'
    },
    leave(el) {
      el.style.opacity = 0
      el.style.transform = 'scaleY(0.9)'
    }
  }
}
</script>

<style>
.faq-enter-active, .faq-leave-active {
  transition: all 0.3s ease;
  transform-origin: top;
}
.faq-enter, .faq-leave-to {
  opacity: 0;
  transform: scaleY(0.9);
}
</style>

<style>
html {
  scroll-behavior: smooth;
}
</style>