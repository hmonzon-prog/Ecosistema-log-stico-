/**
 * 🛡️ Motor de Seguridad Avanzado - Ecosistema Logístico
 * Maneja accesos por niveles (Admin / Invitado)
 */

const Security = {
    ADMIN_HASH: '0dd2972092d8c02f681a0025eba87fdb4a4f23ecb396ef3278e8155331b9e41c',
    GUEST_HASH: 'a7e304fb5dd6946b797382f4c87e7c8c2c8cbdf61aec87b3bc67206602745fa2',

    async hashPassword(password) {
        const msgBuffer = new TextEncoder().encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    },

    async validate(password) {
        const inputHash = await this.hashPassword(password);
        if (inputHash === this.ADMIN_HASH) return 'admin';
        if (inputHash === this.GUEST_HASH) return 'guest';
        return null;
    },

    checkSession() {
        const role = sessionStorage.getItem('user_role');
        return { 
            isAdmin: role === 'admin', 
            isGuest: role === 'guest',
            isAuthenticated: role !== null
        };
    },

    applyProtections() {
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.onkeydown = function(e) {
            if (e.keyCode == 123 || 
                (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74 || e.keyCode == 67)) || 
                (e.ctrlKey && e.keyCode == 85)) {
                return false;
            }
        };
    }
};
