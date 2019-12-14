const Authentication = {
  isAuthenticated() {
    let token = localStorage.getItem('TOKENVLAD');
     return token ? true : false;
  },
  authenticate() {
    localStorage.setItem('TOKENVLAD','asdasd');
  }
}

export default Authentication;
