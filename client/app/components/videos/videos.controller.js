import { PAGE_TITLE_VIDEOS } from '../../constants/constants';

class VideosController {
  constructor($rootScope, $sce) {
    'ngInject';
    this.rootScope = $rootScope;

    this.rootScope.ogTitle = PAGE_TITLE_VIDEOS;

    this.$sce = $sce;
    // this.data = this.newsService.data;
    // this.trustSrc = (src) => this.$sce.trustAsResourceUrl(src);
  }
}

export default VideosController;
