var HelperExpenses = {
  entry_type : function(entry){
    switch(entry.type){
      case 'GroupCurrentAccountEntryPayout':
          return entry.benefit ? "Beneficio" : "Pago"
        break;
      case 'GroupCurrentAccountEntryExpensesSurcharge':
        return 'Recargo Expensas (' + parseFloat(entry.description).toFixed(2) + '%)'
        break;
      case 'GroupCurrentAccountEntryExpenses':
        return "Expensas";
        break;
      case 'GroupCurrentAccountEntryPenalty':
        return "Multa";
        break;
      case 'GroupCurrentAccountEntryEvent':
        return "Reserva de Evento";
        break;
      case 'GroupCurrentAccountEntryInterest':
        return "Intereses por deuda";
        break;
      case 'GroupCurrentAccountEntryInit':
        return "Saldo inicial";
        break;
      case 'GroupCurrentAccountEntryOther':
        return "Otros";
        break;
    }
  },
  entry_description : function(entry){
    switch(entry.type){
      case 'GroupCurrentAccountEntryExpensesSurcharge':
        return Extends.formatDate(new Date(entry.vinculated_to.description + "T00:00:00" + PrivateData.get('time_zone_offset')),'%mname del %yyyy');
        break;
      case 'GroupCurrentAccountEntryPenalty':
        return entry.description.length > 45 ? entry.description.substr(0,45) + "..." : entry.description;
        break;
      case 'GroupCurrentAccountEntryExpenses':
        return Extends.formatDate(new Date(entry.description + "T00:00:00" + PrivateData.get('time_zone_offset')),'%mname del %yyyy');
        break;
      case 'GroupCurrentAccountEntryEvent':
        return "Evento #" + entry.vinculated_to.id;
        break;
      default:
        return entry.description
    }
  }
}

var HelperEvents = {
  status : function(status){
    return {
      'pending' : 'Pendiente',
      'approved' : 'Aprobado',
      'rejected' : 'Rechazado',
      'canceled' : 'Cancelado'
    }[status];
  },
  event_place_name : function(name){
    return name == 'in_house' ? ('Mi ' + PrivateData.get('current_group_identificator_one')) : name;
  }
}