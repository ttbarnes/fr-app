import albumsService from './albums.service';

describe('albumsService', () => {

  //todo: get JSON data working inside unit test

  var MockAlbumsService,
      MockAllAlbums = [ { dummy: true }, { dummy: true } ];

  beforeEach(() => {
    MockAlbumsService = new albumsService();
  });

  it('should have allAlbums property', () => {
    expect(MockAlbumsService.allAlbums).toBeDefined();
  })

  describe('allAlbums', () => {

    it('should return an array', () => {
      MockAlbumsService.allAlbums = MockAllAlbums;
      expect(MockAlbumsService.allAlbums).toBeDefined();
      expect(MockAlbumsService.allAlbums).toEqual(jasmine.any(Array));
    });

    it('should return an array of objects', () => {
      MockAlbumsService.allAlbums = MockAllAlbums;
      expect(MockAlbumsService.allAlbums[0]).toBeDefined();
      expect(MockAlbumsService.allAlbums[0]).toEqual(jasmine.any(Object));
      expect(MockAlbumsService.allAlbums[1]).toBeDefined();
      expect(MockAlbumsService.allAlbums[1]).toEqual(jasmine.any(Object));
    });

  });

});
