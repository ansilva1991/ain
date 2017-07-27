if(!(typeof locales !== 'undefined')){ var locales = {}; }
locales["sp"] = {
  actions: {
    cancel_event: "Cancelar Actividad"
  },
  models: {
    authorization: {
      types: {
        AuthorizationOwnerGroup: "Miembro",
        AuthorizationFamilyWithAccess: "Familiar con Acceso",
        AuthorizationFamily: "Familiar",
        AuthorizationVisit: "Visita",
        AuthorizationEmployee: "Empleado"
      }
    },
    group_current_account_entry: {
      types: {
        GroupCurrentAccountEntryPayout: "Pago",
        GroupCurrentAccountEntryPayoutBenefit: "Benefio",
        GroupCurrentAccountEntryExpensesSurcharge: "Recargo Abono (%{percentage} %)",
        GroupCurrentAccountEntryExpenses: "Abono",
        GroupCurrentAccountEntryPenalty: "Multa",
        GroupCurrentAccountEntryEvent: "Reserva de Actividad",
        GroupCurrentAccountEntryInterest: "Intereses por deuda",
        GroupCurrentAccountEntryInit: "Saldo inicial",
        GroupCurrentAccountEntryOther: "Otros"
      },
      description: {
        GroupCurrentAccountEntryEvent: "Actividad #%{id}"
      }
    },
    event: {
      allow_guests_previous_minutes: "Permitir ingresar a los invitados",
      allow_guests_previous_minutes_options: "%{minutes} antes de la fecha de inicio del evento"
    }
  },
  menu_lateral: {
    events: "Actividades",
    communications: "Comunicaciones",
    expenses: "Abonos",
    guard: "Portería",
    authorizations: "Autorizaciones",
    my_account: "Mi Cuenta",
    electronic_keys: "Mis Llaves",
    useful_info: "Información Útil",
    configuration: "Configuración"
  },
  screens: {
    welcome: {
      events: {
        title: "ACTIVIDADES",
        description: "Gestiona actividades en tu propiedad y espacios comunes, crea listas de invitados y recibe confirmaciones de reservas."
      },
      authorizations: {
        description: "Autoriza el ingreso de familiares, visitas y empleados. Proporciona ingreso al sistema a la persona que desees.<br><br><b>¡Accede a todo esto y mucho más al instante!</b>"
      },
      expenses: {
        title: "ABONOS",
        description: "Puedes recibir abonos, visualizar saldos, ver el historial de pagos, intereses y cargos extras. Además, puedes ver reportes y estadísticas."
      }
    },
    configurations: {
      expenses_notifications: {
        title: "Liquidación de expensas",
        help: "Enviarme una alerta cuando se liquiden expensas"
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
    },
    event_form: {
      confirm: {
        cancel_event: {
          title: "Cancelar Evento",
          msg: "¿Desea continuar?",
          success_button: "Continuar",
          cancel_button: "Cancelar"
        }
      },
      errors: {
        limit_per_day: {
          title: "Fecha del evento",
          message: "Supero la cantidad máxima de reservas permitidas por día.",
          button: "Aceptar"
        },
        guests: {
          valid_real_id: {
            title: "Invitados",
            message: "Todos los invitados deben tener DNI y ser residentes registrados en el sistema.",
            button: "Aceptar"
          },
          taken: {
            title: "Invitados",
            message: "Dos o más invitados tienen el mismo DNI.",
            button: "Aceptar"
          },
          only_residents: {
            title: "Invitados",
            message: "Los invitados deben ser residentes registrados en el sistema.",
            button: "Aceptar"
          }
        }
      }
    },
    expenses_info: {
      expenses_real_date_label: "EXPENSAS"
    },
    expenses_show_fixed_value: {
      total_expenses_label: "Expensas %{date}"
    },
    expenses_show_full: {
      total_expenses_label: "Expensas %{date}",
      section_name: "Exp. %{date}"
    }
  }
};