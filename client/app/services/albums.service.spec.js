import albumsService from './albums.service';

describe('albumsService', () => {

  //todo: get JSON data working inside unit test
  //to avoid doing this: MockAlbumsService.allAlbums = [ ... ];

  var MockAlbumsService,
      MockAllAlbums = [ { dummy: true }, { dummy: true } ];

  beforeEach(() => {
    MockAlbumsService = new albumsService();
  });

  it('should have allAlbums property', () => {
    expect(MockAlbumsService.allAlbums).toBeDefined();
  })

  describe('allAlbums', () => {

    // it('should return an array', () => {
    //   expect(MockAlbumsService.allAlbums).to.be.an('array')
    // })

    it('should return an array of objects', () => {
      MockAlbumsService.allAlbums = MockAllAlbums;
      expect(MockAlbumsService.allAlbums[0]).toBeDefined();
      expect(MockAlbumsService.allAlbums[1]).toBeDefined();
    });

  })

})