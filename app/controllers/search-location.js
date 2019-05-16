import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    searchLocation()  {
      alert('Susah ah')
        // this.get('session').userResetPass({
        //   email: this.get('email'),
        //   code: this.get('token'),
        //   new_password: this.get('password'),
        //   confirmation: this.get('repassword')
        // }).then((response) => {
        //   this.set('responseSuccess', response);
        // }).catch(() => {
        //   this.set('responseError', 'Terjadi error, silakan coba beberapa saat lagi.');
        // })
    },
  }
});
