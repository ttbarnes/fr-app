import emailService from '../../services/email.service';

class ContactController {
  constructor(emailService, $scope) {
    "ngInject";

    this.emailService = emailService
    this.$scope = $scope;

    this.messages = {
      error: false,
      success: false
    };

    this.sendMail = (user) => {
      return this.emailService.send(user).then(() => {
        this.$scope.vm.messages.error = false;
        this.$scope.vm.messages.success = true;
      }, (err) => {
        this.$scope.vm.messages.error = true;
      });
    };


  }
}

export default ContactController;
