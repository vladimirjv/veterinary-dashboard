const Authentication = {
  isAuthenticated() {
    let token = localStorage.getItem('TOKENVLAD');
     return token ? true : false;
  },
  authenticate(token) {
    localStorage.setItem('TOKENVLAD',token);
  },
  getCredentials() {
    let token = localStorage.getItem('TOKENVLAD');
    return token;
  },
  signOut() {
    localStorage.removeItem('TOKENVLAD')
  }
}

export default Authentication;
