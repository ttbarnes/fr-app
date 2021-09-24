import newsService from '../../services/news.service';
import { PAGE_TITLE_NEWS } from '../../constants/constants';

class NewsIndController {
  constructor($state, $stateParams, $rootScope, newsService, $sce) {
    'ngInject';
    console.log(' hello..........');
    this.rootScope = $rootScope;
    this.newsService = newsService;
    this.$sce = $sce;
    this.stateParams = $stateParams;
    this.indTitle = this.stateParams.title;

    this.newsService.getSingle(this.indTitle).then((data) => {
      if (!data.length) {
        $state.go('error');
      }
      this.post = data[0];

      console.log('this post ', this.post);
      this.rootScope.ogTitle = this.post.title + ' - ' + PAGE_TITLE_NEWS;

    }, () => {
      $state.go('error');
    });

    this.trustSrc = (src) => this.$sce.trustAsResourceUrl(src);

  }
}

export default NewsIndController;
