app.SCREENS = {
  DEVELOPER: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "Developer",
    html: "developer"
  },
  LOGIN: {
    html: "login",
    header: false
  },
  SELECT_AUTH: {
    html: "select_auth",
    section_name: "<span class='dashboard-icon icon-authorizations'></span><span class='dashboard-text'>Mis autorizaciones</span>"
  },
  REGISTER: {
    html: "register",
    header: false
  },
  REGISTER_TERMS_AND_CONDITIONS: {
    html: "register_terms_and_conditions",
    header: false
  },
  WELCOME: {
    html: "welcome",
    header: false
  },
  DASHBOARD: {
    html: "dashboard",
    section_name: "<span class='dashboard-icon icon-people-bubble'></span><span class='dashboard-text'>Inicio</span>"
  },
  SET_REGISTRATION_CODE: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "Nueva Unidad",
    html: "set_registration_code"
  },
  REQUEST_REGISTRATION_CODE: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "Solicitar mi código",
    html: "request_registration_code"
  },
  DEPRECATED: {
    html: "deprecated",
    header: false
  },
  AUTHORIZATIONS: {
    icon_left: [
    {
      icon: "bars",
      func: function(){
        app.openMenu();
      }
    }
    ],
    section_name: "Autorizaciones",
    html: "authorizations"
  },
  NEW_AUTHORIZATION_REAL_ID: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "autorizaciónes",
    html: "new_authorization_real_id"
  },
  AUTHORIZATION_FORM_FAMILY: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "",
    html: "authorization_form_family"
  },
  AUTHORIZATION_FORM_VISIT: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "Visita",
    html: "authorization_form_visit"
  },
  AUTHORIZATION_FORM_EMPLOYEE: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "Empleado",
    html: "authorization_form_employee"
  },
  COMMUNICATIONS: {
    icon_left: [
    {
      icon: "bars",
      func: function(){
        app.openMenu();
      }
    }
    ],
    section_name: "Comunicaciones",
    html: "communications"
  },
  VIEW_COMMUNICATION: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    section_name: "Comunicación",
    html: "view_communication"
  },
  INFO_COMMUNICATION: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    section_name: "Información",
    html: "info_communication"
  },
  FORM_COMMUNICATION: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "COMUNICACIÓN",
    html: "form_communication"
  },
  ATTACHMENT_COMMUNICATION: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "",
    header_class: ["black"],
    html: "attachment_communication"
  },
  EVENTS: {
    icon_left: [
    {
      icon: "bars",
      func: function(){
        app.openMenu();
      }
    }
    ],
    section_name: "Eventos",
    html: "events"
  },
  EVENT_GUEST_LIST_FORM: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "Lista de invitados",
    html: "event_guest_list_form"
  },
  EVENT_GUEST_FORM: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      }
    }
    ],
    section_name: "Invitado",
    html: "event_guest_form"
  },
  EVENTS_CALENDAR_DAY: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right:[
    {
      icon: "calendar",
      func: function(){
        cs.toggleCalendar();
      }
    }
    ],
    section_name: "",
    html: "events_calendar_day"
  },
  EVENTS_TERMS: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    section_name: "Reglamento",
    html: "events_terms"
  },
  EVENT_FORM: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "Evento",
    html: "event_form"
  },
  IMPORT_GUESTS_LIST: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    section_name: "Importar lista",
    html: "import_guests_list"
  },
  IMPORT_GUESTS_LIST_GUESTS: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      }
    }
    ],
    section_name: "Amigos",
    html: "import_guests_list_guests"
  },
  EXPENSES: {
    icon_left: [
    {
      icon: "bars",
      func: function(){
        app.openMenu();
      }
    }
    ],
    icon_right:[
      {
        icon: "calendar",
        func: function(){
          cs.toggleCalendar();
        }
      },
      {
        icon: "ellipsis-v",
        func: function(){
          app.openContextMenu();
        },
        id: "context-menu"
      }
    ],
    section_name: "Ago. del 2016",
    html: "expenses"
  },
  EXPENSES_SHOW_FULL: {
    icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
    ],
    icon_right: [
      {
        icon: "info-circle",
        func: function(){
          cs.info();
        }
      }
    ],
    section_name: "EXPENSAS",
    html: "expenses_show_full"
  },
  EXPENSES_SHOW_PDF: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    section_name: "EXPENSAS",
    html: "expenses_show_pdf"
  },
  EXPENSES_SHOW_NOTHING: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
      {
        icon: "info-circle",
        func: function(){
          cs.info();
        }
      }
    ],
    section_name: "EXPENSAS",
    html: "expenses_show_nothing"
  },
  EXPENSES_SHOW_FIXED_VALUE: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
      {
        icon: "info-circle",
        func: function(){
          cs.info();
        }
      }
    ],
    section_name: "EXPENSAS",
    html: "expenses_show_fixed_value"
  },
  EXPENSES_SHOW_PER_METER: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
      {
        icon: "info-circle",
        func: function(){
          cs.info();
        }
      }
    ],
    section_name: "EXPENSAS",
    html: "expenses_show_per_meter"
  },
  EXPENSES_INFO: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    section_name: "Información",
    html: "expenses_info"
  },
  EXPENSES_TICKET_PAYMENT: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    section_name: "Boleto de pago",
    html: "expenses_ticket_payment"
  },
  GUARD: {
    icon_left: [
    {
      icon: "bars",
      func: function(){
        app.openMenu();
      }
    }
    ],
    section_name: "Portería",
    html: "guard"
  },
  GUARD_RECORD_FORM: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    section_name: "Portería",
    html: "guard_record_form"
  },
  GUARD_MESSAGE_FORM: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "Nuevo Mensaje",
    html: "guard_message_form"
  },
  CONFIGURATIONS: {
    icon_left: [
    {
      icon: "bars",
      func: function(){
        app.openMenu();
      }
    }
    ],
    icon_right: [
    {
      text: "Listo <i class='fa fa-check'></i>",
      func: function(){
        cs.submit();
      },
      id: 'submit-button'
    }
    ],
    section_name: "Configuración",
    html: "configurations"
  },USEFUL_INFO: {
    icon_left: [
    {
      icon: "bars",
      func: function(){
        app.openMenu();
      }
    }
    ],
    section_name: "Información Útil",
    html: "useful_info"
  },PAYMENT_METHODS_SIRO: {
    icon_left: [
    {
      icon: "chevron-left",
      func: function(){
        cs.back();
      }
    }
    ],
    section_name: "Pagar",
    html: "payment_methods_siro"
  },
  ELECTRONIC_KEYS: {
    icon_left: [
    {
      icon: "bars",
      func: function(){
        app.openMenu();
      }
    }
    ],
    section_name: "Mis Llaves",
    html: "electronic_keys"
  },
  TEST: {
    icon_left: {
      icon: "user",
      func: function(){
        app.loadScreen(app.SCREENS.AUTHORIZATIONS);
      }
    },
    section_name: "Prueba",
    html: "test"
  }
};