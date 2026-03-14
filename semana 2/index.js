// ==============================
// PROYECTO SEMANA 2 - FINTECH
// Estudiante: Santiago Fernandez
// Ficha: 3407187
// ==============================

// Definición de variables con const (Dominio: Servicios Financieros Digitales)
const nombreProducto = "Ahorro Dinámico Fintech";
const codigoProducto = "ADFT-2024";
const metaAhorroMensual = 500000; // Valor numérico
const esCuentaActiva = true;      // Booleano

// Mostrar Ficha de Datos en consola
console.log("============================== FICHA DE DATOS: App de Ahorros");
console.log(`Producto: ${nombreProducto}`);
console.log(`Código: ${codigoProducto}`);
console.log(`Meta Mensual: $${metaAhorroMensual}`);
console.log(`Estado Activo: ${esCuentaActiva}`);

// Verificación de tipos de datos con typeof
console.log("\n--- Verificación de Tipos ---");
console.log(`Tipo de nombreProducto: ${typeof nombreProducto}`);
console.log(`Tipo de metaAhorroMensual: ${typeof metaAhorroMensual}`);
console.log(`Tipo de esCuentaActiva: ${typeof esCuentaActiva}`);

// Conversión de datos (De Número a String)
const metaComoTexto = String(metaAhorroMensual);
console.log("\n--- Conversiones ---");
console.log(`Meta como texto: "${metaComoTexto}" | Nuevo tipo: ${typeof metaComoTexto}`);

// Demostración de valor nulo
const inversionPendiente = null;
console.log("\n--- Casos Especiales ---");
console.log(`Inversión Pendiente: ${inversionPendiente}`);
console.log(`¿Es nulo?: ${inversionPendiente === null}`);

console.log("============================== FIN DE FICHA");