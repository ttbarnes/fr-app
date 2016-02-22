import emailService from '../../services/email.service';

class ContactController {
  constructor(emailService) {
    "ngInject";

    this.emailService = emailService

    this.sendMail = (user) => {
      return this.emailService.send(user)
    }

  }
}

export default ContactController;
