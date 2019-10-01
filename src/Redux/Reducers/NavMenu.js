


function ClickedNav(state = 'Home Page', action) {
    switch (action.type) {
      case 'HOME_MENU':
        return state = action.home
      case 'ABOUT_MENU':
        return state = action.about;
      case 'TESTIMONIES':
        return state = action.testimonies;
      case 'DAILY_DEVOTIONS':
        return state = action.dailyDevotions;
      case 'ASK_JUANITA':
        return state = action.askJuanita;
      case 'GIVE':
        return state = action.give;
      default:
        return state 
    }
  }

  
  export default ClickedNav;