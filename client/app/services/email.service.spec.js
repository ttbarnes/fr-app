import emailService from './email.service';

describe('emailService', () => {

  var MockEmailService

  beforeEach(() => {
    MockEmailService = new emailService();
  });

  it('should have send property', () => {
    expect(MockEmailService.send).toBeDefined();
  });

})