// ==================================================
// PROYECTO SEMANA 1 - CLASES Y OBJETOS
// Estudiante: Santiago Fernandez
// Ficha: 3407187
// ==================================================

class FichaFintech {
    constructor() {
        this.nombre = "Ahorro Dinámico Fintech";
        this.codigo = "ADFT-2024";
        this.categoria = "Finanzas - Servicios Digitales";
        this.estado = "Activo";

        this.usuariosActivos = 12500;
        this.tasaInteresAnual = 12.5; // %
        this.metaAhorroPromedio = 5000;
        this.cantidadTransacciones = 1200;
        this.comisionUso = 1500;
        this.bonoBienvenida = 250;
        this.disponible = true;
        this.accesible = true;

        this.dominio = "Servicios Financieros Digitales";
        this.entidad = "Usuario Final";
        this.totalRegistros = 85;
        this.fichaId = "3407187";
    }

    // Método Getter para calcular el costo neto
    get costoNeto() {
        return this.comisionUso - this.bonoBienvenida;
    }

    // Método para imprimir la ficha con formato
    imprimirFicha() {
        const line = "==================================================";
        const subLine = "------------------------------------------";

        // Colores para la consola (ANSI)
        const yellow = "\x1b[33m";
        const reset = "\x1b[0m";

        console.log(line);
        console.log(`[Gestión de Servicios Fintech] - FICHA #${this.fichaId}`);
        console.log(line);
        console.log("");

        console.log("INFORMACIÓN GENERAL");
        console.log(subLine);
        console.log(`Nombre:             ${this.nombre}`);
        console.log(`Código:             ${this.codigo}`);
        console.log(`Categoría:          ${this.categoria}`);
        console.log(`Estado:             ${this.estado}`);
        console.log("");

        console.log("DETALLES");
        console.log(subLine);
        console.log(`Usuarios activos:   ${this.usuariosActivos}`);
        console.log(`Tasa Interés (%):   ${this.tasaInteresAnual}`);
        console.log(`Meta promedio:      ${this.metaAhorroPromedio}`);
        console.log(`Transacciones:      ${this.cantidadTransacciones}`);
        console.log(`Comisión base:      ${yellow}${this.comisionUso}${reset}`);
        console.log(`Bono (Descuento):   ${yellow}${this.bonoBienvenida}${reset}`);
        console.log(`Costo neto:         ${yellow}${this.costoNeto}${reset}`);
        console.log(`Disponible:         ${this.disponible}`);
        console.log(`Accesible:          ${this.accesible}`);
        console.log("");

        console.log("RESUMEN DEL DOMINIO");
        console.log(subLine);
        console.log(`Dominio:            ${this.dominio}`);
        console.log(`Entidad:            ${this.entidad}`);
        console.log(`Total registros:    ${this.totalRegistros}`);
        console.log("");

        console.log("==================================================");
        console.log("Ficha generada con JavaScript ES2023");
        console.log("==================================================");
    }
}

// Instanciar y