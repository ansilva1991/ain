if(!(typeof locales !== 'undefined')){ var locales = {}; }
locales["es"] = {
  models: {
    authorization: {
      types: {
        AuthorizationOwnerGroup: "Propietario",
        AuthorizationFamilyWithAccess: "Familiar con Acceso",
        AuthorizationFamily: "Familiar",
        AuthorizationVisit: "Visita",
        AuthorizationEmployee: "Empleado"
      }
    }
  },
  screens: {
    welcome: {
      authorizations: {
        description: "Autoriza el ingreso de familiares, visitas y empleados. Proporciona ingreso al sistema a la persona que desees.<br><br><b>¡Accede a todo esto y mucho más al instante!</b>"
      }
    },
    authorizations: {
      menu: {
        residents: "Residentes",
        visits: "Visitas",
        employees: "Empleados"
      },
      content: {
        empty_visits: "No se encontraron visitas autorizadas a tu propiedad.",
        empty_employees: "No se encontraron empleados autorizados a tu propiedad."
      },
      add: {
        family: "Agregar Familiar",
        visit: "Agregar Visita",
        employee: "Agregar Empleado"
      }
    },
    authorization_form_employee: {
      errors: {
        is_owner: {
          title: "Propietario",
          message: "Esta persona ya es propietario.",
          button: "Aceptar"
        },
        is_family: {
          title: "Familiar",
          message: "Esta persona ya es familiar.",
          button: "Aceptar"
        },
        is_visit: {
          title: "Visita",
          message: "Esta persona ya es visita.",
          button: "Aceptar"
        },
        taken: {
          title: "Propietario",
          message: "Esta persona ya es familiar.",
          button: "Aceptar"
        }
      }
    },
    authorization_form_family: {
      title_owner: "Propietario",
      title: "Familiar",
      alert_family_with_access: "<h5>Se le enviará una notificación al email ingresado con las instrucciones de uso.</h5><h5>Al permitirle acceso al sistema, podra gestionar visitas y empleados, crear eventos, enviar y responder comunicaciones, entre otras funciones.</h5><h5>Recuerda que todas las gestiones realizadas por los miembros de tu familia serán tu responsabilidad y sujetos a la normativa vigente del consorcio</h5>",
      errors: {
        is_owner: {
          title: "Propietario",
          message: "Esta persona ya es propietario.",
          button: "Aceptar"
        },
        is_family: {
          title: "Familiar",
          message: "Esta persona ya es familiar.",
          button: "Aceptar"
        },
        is_visit: {
          title: "Visita",
          message: "Esta persona ya es visita.",
          button: "Aceptar"
        },
        taken: {
          title: "Propietario",
          message: "Esta persona ya es familiar.",
          button: "Aceptar"
        }
      }
    },
    authorization_form_visit: {
      errors: {
        is_owner: {
          title: "Propietario",
          message: "Esta persona ya es propietario.",
          button: "Aceptar"
        },
        is_family: {
          title: "Familiar",
          message: "Esta persona ya es familiar.",
          button: "Aceptar"
        },
        is_visit: {
          title: "Visita",
          message: "Esta persona ya es visita.",
          button: "Aceptar"
        },
        taken: {
          title: "Propietario",
          message: "Esta persona ya es familiar.",
          button: "Aceptar"
        }
      }
    }
  }
};