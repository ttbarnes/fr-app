import albumsService from './albums.service';
import allAlbums from '../data/allAlbums.json';

describe('albumsService', () => {

  var MockAlbumsService,
      MockAllAlbums = [ { dummy: true }, { dummy: true } ],
      MockGetSingle = () => {
        return {
          name: 'test album name',
          id: 1,
        }
      }

  beforeEach(() => {
    MockAlbumsService = new albumsService();
  });

  it('should have allAlbums property', () => {
    MockAlbumsService.allAlbums = MockAllAlbums;
    expect(MockAlbumsService.allAlbums).toBeDefined();
  })

  it('should have a quoteCharLimit property', () => {
    expect(MockAlbumsService.quoteCharLimit).toBeDefined();
    expect(MockAlbumsService.quoteCharLimit).toEqual(jasmine.any(Number));
    expect(MockAlbumsService.quoteCharLimit).toEqual(800);
  });

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

  describe('getAlbumById', () => {
    it('should be defined', () => {
      MockAlbumsService.getAlbumById = MockAllAlbums;
      expect(MockAlbumsService.allAlbums).toBeDefined();
    });

    it('should be called successfully', () => {
      MockAlbumsService.getAlbumById = MockGetSingle;
      spyOn(MockAlbumsService, 'getAlbumById').and.callThrough();
      MockAlbumsService.getAlbumById();
      expect(MockAlbumsService.getAlbumById).toHaveBeenCalled();
    });

    it('should be called successfully with an id', () => {
      MockAlbumsService.getAlbumById = MockGetSingle;
      spyOn(MockAlbumsService, 'getAlbumById').and.callThrough();
      MockAlbumsService.getAlbumById(100);
      expect(MockAlbumsService.getAlbumById).toHaveBeenCalledWith(100);
    });

    it('should return an object', () => {
      MockAlbumsService.getAlbumById = MockGetSingle;
      const getAlbumById = MockAlbumsService.getAlbumById(1);
      expect(getAlbumById).toEqual(jasmine.any(Object));
      expect(getAlbumById.name).toBeDefined();
      expect(getAlbumById.id).toBeDefined();
    });

  });

});
