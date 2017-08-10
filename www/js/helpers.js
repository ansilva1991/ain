var HelperExpenses = {
  entry_type : function(entry){
    switch(entry.type){
      case 'GroupCurrentAccountEntryPayout':
          return entry.benefit ? U.t("models.group_current_account_entry.types.GroupCurrentAccountEntryPayoutBenefit") : U.t("models.group_current_account_entry.types.GroupCurrentAccountEntryPayout");
        break;
      case 'GroupCurrentAccountEntryExpensesSurcharge':
        return U.t("models.group_current_account_entry.types.GroupCurrentAccountEntryExpensesSurcharge",{ percetange: parseFloat(entry.description).toFixed(2) });
        break;
      default:
        return U.t("models.group_current_account_entry.types." + entry.type);
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
        return U.t("models.group_current_account_entry.description.GroupCurrentAccountEntryEvent",{ id: entry.vinculated_to.id });
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

var HelperGuard = {
  guard_record_vehicle_type : function(record_type){
    return U.t("models.guard_record.vehicle_types." + record_type);
  }
}