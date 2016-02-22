import albumsService from './albums.service';

describe('albumsService', () => {

  var MockAlbumsService;

  beforeEach(() => {
    MockAlbumsService = new albumsService();
  });

  it('should have allAlbums property', () => {
    expect(MockAlbumsService).to.have.property('allAlbums')
  })

  describe('allAlbums', () => {

    it('should return an array', () => {
      expect(MockAlbumsService.allAlbums).to.be.an('array')
    })

    it('should return an array of objects', () => {
      expect(MockAlbumsService.allAlbums[0]).to.be.defined
      expect(MockAlbumsService.allAlbums[0]).to.be.an('object')
      expect(MockAlbumsService.allAlbums[1]).to.be.defined
      expect(MockAlbumsService.allAlbums[1]).to.be.an('object')
    })

  })

})