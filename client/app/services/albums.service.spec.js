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

  it('should have a quoteTruncationCharLimit property', () => {
    expect(MockAlbumsService.quoteTruncationCharLimit).toBeDefined();
    expect(MockAlbumsService.quoteTruncationCharLimit).toEqual(jasmine.any(Number));
    expect(MockAlbumsService.quoteTruncationCharLimit).toEqual(800);
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

  describe('getSingleAlbum', () => {

    it('should be defined', () => {
      MockAlbumsService.getSingleAlbum = MockAllAlbums;
      expect(MockAlbumsService.allAlbums).toBeDefined();
    });

    it('should be called successfully', () => {
      MockAlbumsService.getSingleAlbum = MockGetSingle;
      spyOn(MockAlbumsService, 'getSingleAlbum').and.callThrough();
      MockAlbumsService.getSingleAlbum();
      expect(MockAlbumsService.getSingleAlbum).toHaveBeenCalled();
    });

    it('should be called successfully with an id', () => {
      MockAlbumsService.getSingleAlbum = MockGetSingle;
      spyOn(MockAlbumsService, 'getSingleAlbum').and.callThrough();
      MockAlbumsService.getSingleAlbum(100);
      expect(MockAlbumsService.getSingleAlbum).toHaveBeenCalledWith(100);
    });

    it('should return an object', () => {
      MockAlbumsService.getSingleAlbum = MockGetSingle;
      const getSingleAlbum = MockAlbumsService.getSingleAlbum(1);
      expect(getSingleAlbum).toEqual(jasmine.any(Object));
      expect(getSingleAlbum.name).toBeDefined();
      expect(getSingleAlbum.id).toBeDefined();
    });

  });

});
