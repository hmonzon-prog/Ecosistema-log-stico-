/**
 * 🛡️ Guardia de Acceso Nivelado - VERSIÓN BLINDADA
 * Oculta el contenido hasta verificar la identidad.
 */

(function() {
    // 🛑 Bloqueo visual inmediato: la página empieza siendo invisible
    document.documentElement.style.display = 'none';

    // Función de verificación
    const verify = () => {
        if (typeof Security === 'undefined') {
            window.location.href = 'index.html';
            return;
        }

        const { isAuthenticated, isGuest } = Security.checkSession();

        if (!isAuthenticated) {
            window.location.href = 'index.html';
        } else {
            // ✅ Acceso autorizado: hacemos la página visible
            document.documentElement.style.display = 'block';
            if (isGuest) {
                Security.applyProtections();
            }
        }
    };

    // Ejecutar verificación lo antes posible
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', verify);
    } else {
        verify();
    }
})();
