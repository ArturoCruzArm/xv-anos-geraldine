// Configuración del evento - XV Años de Geraldine Guadalupe
// Edita estos valores para personalizar la invitación y contrato

const EVENT_CONFIG = {
    // Información de la quinceañera
    quinceaneraName: "Geraldine Guadalupe Villegas",
    quinceaneraAge: 15,
    motherName: "Elida Villegas",
    dressColor: "#D4AF37", // Dorado

    // Información del evento
    eventDate: "31 de Diciembre de 2025",
    eventDateISO: "2025-12-31",

    // Ceremonia religiosa
    ceremonyLocation: "Parroquia Principal de Nuestra Señora de los Dolores",
    ceremonyCity: "Dolores Hidalgo, Guanajuato",
    ceremonyTime: "2:00 PM",
    ceremonyHour: 14,
    ceremonyMinute: 0,

    // Fiesta
    partyLocation: "Salón El Jardín de Aurora",
    partyDistance: "A 5 minutos de la Parroquia",
    partyStartTime: "4:00 PM",
    partyStartHour: 16,
    partyStartMinute: 0,
    partyEndTime: "11:00 PM",
    partyEndHour: 23,
    partyEndMinute: 0,

    // Entretenimiento
    entertainment: [
        {
            type: "Tecladista",
            startTime: "5:00 PM",
            endTime: "6:00 PM",
            icon: "🎹"
        },
        {
            type: "Sonido Fiesta Loca",
            startTime: "6:00 PM",
            endTime: "11:00 PM",
            icon: "🎵"
        }
    ],

    // Paquete fotográfico
    package: {
        name: "PAQUETE COMPLETO DE FOTOGRAFÍA, VIDEO Y DRON",
        price: 6000,
        drone: 500,
        viatics: 500,
        currency: "MXN",
        includes: [
            "Cobertura por Sesión, Misa y 5 horas de Fiesta",
            "100 Fotos del Evento Impresas en Tamaño 5x7 Pulgadas",
            "1 Película USB EN 4K con duración de 3:00 hrs editada musicalizada y titulada 📹",
            "1 Videoclip para Proyectar en el salón + fotos del recuerdo",
            "Cobertura con Dron 4K - Videos aéreos de la ceremonia y fiesta 🚁",
            "1 Caja Impresa para la USB",
            "1 Foto Ampliada A 50x60 cm con Marco",
            "1 Caja Impresa para Las Fotografías",
            "1 Sesión de Fotografías antes del Evento"
        ]
    },

    // Pagos
    payments: {
        subtotal: 7000,
        deposit: 1000,
        balance: 6000,
        currency: "MXN"
    },

    // Información de contacto (Por definir)
    contact: {
        photographer: "(Por definir)",
        phone: "(Por definir)",
        phoneWhatsApp: "", // Ej: "+52XXXXXXXXXX"
        email: "(Por definir)",
        website: "",
        responseTime: "24 horas"
    },

    // Colores personalizados
    colors: {
        gold: "#D4AF37",
        darkGold: "#DAA520",
        lightGold: "#FFD700",
        darkBg: "#1a1a1a",
        textDark: "#333",
        textLight: "#f5f5f5"
    },

    // Términos y condiciones
    terms: {
        deposit: "50%",
        depositDueDate: "Al momento de firmar",
        balanceDueDate: "7 días antes del evento",
        deliveryDays: 30,
        sessionPreEventDays: "A acordar",
        cancellationPolicy: {
            moreThan30Days: "80% de reembolso",
            between15And30Days: "50% de reembolso",
            lessThan15Days: "Sin reembolso"
        }
    }
};

// Función auxiliar para obtener valor de configuración
function getConfig(key) {
    const keys = key.split('.');
    let value = EVENT_CONFIG;
    for (let k of keys) {
        value = value[k];
    }
    return value;
}

// Función para actualizar configuración
function updateConfig(key, value) {
    const keys = key.split('.');
    let obj = EVENT_CONFIG;
    for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
    }
    obj[keys[keys.length - 1]] = value;
}

// Función para exportar configuración
function exportConfig() {
    return JSON.stringify(EVENT_CONFIG, null, 2);
}

// Función para importar configuración
function importConfig(jsonString) {
    try {
        const imported = JSON.parse(jsonString);
        Object.assign(EVENT_CONFIG, imported);
        console.log("Configuración importada exitosamente");
        return true;
    } catch (error) {
        console.error("Error al importar configuración:", error);
        return false;
    }
}

console.log("Configuración del evento cargada correctamente");
console.log("XV Años de", EVENT_CONFIG.quinceaneraName);
