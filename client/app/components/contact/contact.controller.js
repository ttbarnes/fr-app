// import emailService from '../../services/email.service';

class ContactController {
  constructor(emailService, $scope) {
    'ngInject';

    this.emailService = emailService;

    this.error = false;
    this.success = false;

    this.sendMail = (user) => {
      this.error = false;
      this.promiseLoading = true;
      return this.emailService.send(user).then((data) => {
        $scope.vm.promiseLoading = false;
        $scope.vm.error = false;
        $scope.vm.success = true;
      }).catch((err) => {
        $scope.vm.promiseLoading = false;
        $scope.vm.error = true;
      });

    };


  }
}

export default ContactController;
