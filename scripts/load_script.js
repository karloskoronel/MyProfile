
var mdlo = document.querySelector("#mdlo");
var holos = document.querySelector("#holos");
var ice = document.querySelector("#ice");

var section_info = document.querySelector("#info_cv");
var img_empresa = document.querySelector("#l_empre");
var nombre_empresa = document.querySelector("#d_empre");
var durac_empleado = document.querySelector("#d_durac");
var cargo_empleado = document.querySelector("#d_cargo");
var descr_empleado = document.querySelector("#d_descr");

var btn_hecho = document.querySelector("#hecho");

mdlo.addEventListener("click",infoMdlo);
holos.addEventListener("click",infoHolos);
ice.addEventListener("click",infoIce);

btn_hecho.addEventListener("click",closePanel);

function closePanel(){
    section_info.style.display = "none";
}

function openPanel(){
    section_info.style.display = "block";
}

function infoMdlo(){
    openPanel();
    img_empresa.src = "./resources/images/cronological/logo_mdlo.png";
    nombre_empresa.textContent = "SUBGERENCIA DE PREVENCION Y PROMOCION DE LA SALUD DE LA MUNICIPALIDAD DISTRITAL DE LOS OLIVOS";
    durac_empleado.textContent = "Diciembre 2013 – noviembre 2014";
    cargo_empleado.textContent = "Asistente de TI.";
    descr_empleado.textContent = "Mantenimiento de reportes para Essalud. Capacitación en herramientas de ofimática. Diseño de módulo de control logístico.";
}

function infoHolos(){
    openPanel();
    img_empresa.src = "./resources/images/cronological/logo_holos.png";
    nombre_empresa.textContent = "CORPORACIÓN HOLOS CONSULTORES SAC";
    durac_empleado.textContent = "15/09/2015 – 23/05/2016";
    cargo_empleado.textContent = "Asistente de Proyecto de Mapeo de Procesos.";
    descr_empleado.textContent = "Análisis descriptivo y gráfico de procesos. Implementación de mejoras en procesos factibles.";
}

function infoIce(){
    openPanel();
    img_empresa.src = "./resources/images/cronological/log_ice_solutions.png";
    nombre_empresa.textContent = "INFORMATION CONTROL ENTERPRISE SOLUTIONS SAC";
    durac_empleado.textContent = "15/11/2017 – 30/11/2018";
    cargo_empleado.textContent = "Asistente de Tecnología.";
    descr_empleado.textContent = "Configuración e instalación del sistema integrado de comunicación. Pruebas de rendimiento de software. Configuración de reportes en herramienta world class (Good Data). Documentación de procedimientos de usuario.";
}