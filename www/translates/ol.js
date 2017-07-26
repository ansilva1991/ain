if(!(typeof locales !== 'undefined')){ var locales = {}; }
locales["ol"] = {
  models: {
    authorization: {
      types: {
        AuthorizationOwnerGroup: "Olegario",
        AuthorizationFamilyWithAccess: "Olegarios Acceso",
        AuthorizationFamily: "Olegarios",
        AuthorizationVisit: "Visita",
        AuthorizationEmployee: "Empleado"
      }
    }
  },
  menu_lateral: {
    events: "Eventos",
    communications: "Comunicaciones",
    expenses: "Expensas",
    guard: "Portería",
    authorizations: "Autorizaciones",
    my_account: "Mi Cuenta",
    electronic_keys: "Mis Llaves",
    useful_info: "Información Útil",
    configuration: "Configuración"
  },
  screens: {
    welcome: {
      authorizations: {
        description: "Autoriza el ingreso de olegarios, visitas y empleados. Proporciona ingreso al sistema a la persona que desees.<br><br><b>¡Accede a todo esto y mucho más al instante!</b>"
      }
    },
    authorizations: {
      menu: {
        residents: "Olegarios",
        visits: "Visitas",
        employees: "Empleados"
      },
      content: {
        empty_visits: "No se encontraron visitas autorizadas a tu propiedad.",
        empty_employees: "No se encontraron empleados autorizados a tu propiedad."
      },
      add: {
        family: "Agregar Olegarios",
        visit: "Agregar Visita",
        employee: "Agregar Empleado"
      }
    },
    authorization_form_employee: {
      errors: {
        is_owner: {
          title: "Olegario",
          message: "Esta persona ya es olegario.",
          button: "Aceptar"
        },
        is_family: {
          title: "Olegarios",
          message: "Esta persona ya es olegarios.",
          button: "Aceptar"
        },
        is_visit: {
          title: "Visita",
          message: "Esta persona ya es visita.",
          button: "Aceptar"
        },
        taken: {
          title: "Olegario",
          message: "Esta persona ya es olegarios.",
          button: "Aceptar"
        }
      }
    },
    authorization_form_family: {
      title_owner: "Olegario",
      title: "Olegarios",
      alert_family_with_access: "<h5>Se le enviará una notificación al email ingresado con las instrucciones de uso.</h5><h5>Al permitirle acceso al sistema, podra gestionar visitas y empleados, crear eventos, enviar y responder comunicaciones, entre otras funciones.</h5><h5>Recuerda que todas las gestiones realizadas por los miembros de tu equipo serán tu responsabilidad y sujetos a la normativa vigente del consorcio</h5>",
      errors: {
        is_owner: {
          title: "Olegario",
          message: "Esta persona ya es olegario.",
          button: "Aceptar"
        },
        is_family: {
          title: "Olegarios",
          message: "Esta persona ya es olegarios.",
          button: "Aceptar"
        },
        is_visit: {
          title: "Visita",
          message: "Esta persona ya es visita.",
          button: "Aceptar"
        },
        taken: {
          title: "Olegario",
          message: "Esta persona ya es olegarios.",
          button: "Aceptar"
        }
      }
    },
    authorization_form_visit: {
      errors: {
        is_owner: {
          title: "Olegario",
          message: "Esta persona ya es olegario.",
          button: "Aceptar"
        },
        is_family: {
          title: "Olegarios",
          message: "Esta persona ya es olegarios.",
          button: "Aceptar"
        },
        is_visit: {
          title: "Visita",
          message: "Esta persona ya es visita.",
          button: "Aceptar"
        },
        taken: {
          title: "Olegario",
          message: "Esta persona ya es olegarios.",
          button: "Aceptar"
        }
      }
    }
  }
};