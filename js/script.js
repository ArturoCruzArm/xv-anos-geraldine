// Script para la página de invitación y contrato

document.addEventListener('DOMContentLoaded', function() {
    // Animación de carga
    const card = document.querySelector('.invitation-card') || document.querySelector('.contract');
    if (card) {
        card.style.animation = 'fadeIn 0.8s ease-in-out';
    }

    // Efecto de scroll suave
    document.querySelectorAll('a[href="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});

// Animación de entrada
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .btn {
        transition: all 0.3s ease;
    }

    .btn:active {
        transform: scale(0.98);
    }
`;
document.head.appendChild(style);

// Función para validar el contrato (para uso futuro)
function validateContract() {
    const signatures = document.querySelectorAll('.signature-space');
    let allSigned = true;

    signatures.forEach(sig => {
        if (!sig.style.backgroundColor) {
            allSigned = false;
        }
    });

    return allSigned;
}

// Función para exportar el contrato como PDF (requiere librería externa)
function exportAsPDF() {
    window.print();
}

console.log('Script cargado correctamente para la celebración de XV años de Geraldine Guadalupe');
