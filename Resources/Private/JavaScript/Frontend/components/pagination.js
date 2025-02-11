import {UrlUtility} from "../utility/urlUtility";

class Pagination {

  constructor(studyfinderElement) {
    this.identifier = {
      container: '.js-in2studyfinder-pagebrowser',
      paginationLink: '.js-in2studyfinder-pagination-link',
    }

    this.studyfinderElement = studyfinderElement;
    this.paginationElement = studyfinderElement.querySelector(this.identifier.container);
  }

  init() {
    this.paginationElement.querySelectorAll(this.identifier.paginationLink).forEach(function(item) {
      item.addEventListener('click', function(event) {
        this.call(event);
      }.bind(this));
    }.bind(this));
  }

  update(studyfinderElement) {
    this.studyfinderElement = studyfinderElement;
    this.paginationElement = studyfinderElement.querySelector(this.identifier.container);

    this.paginationElement.querySelectorAll(this.identifier.paginationLink).forEach(function(item) {
      item.addEventListener('click', function(event) {
        this.call(event);
      }.bind(this));
    }.bind(this));

    this.onUpdate();
  }

  call(event) {
    event.preventDefault();

    this.afterClick(event);

    let targetPage = 1;
    let url = event.target.href;
    let instanceId = this.studyfinderElement.getAttribute('data-in2studyfinder-instance-id');

    if (UrlUtility.getParameterFromUrl(url, 'tx_in2studyfinder_pi1[studyCoursesForPage][currentPage]') !== '') {
      targetPage = UrlUtility.getParameterFromUrl(url, 'tx_in2studyfinder_pi1[studyCoursesForPage][currentPage]');
    }
    UrlUtility.addOrUpdateHash('page', [targetPage]);

    let ajaxCall = new Promise((resolve) => {
       window.in2studyfinder.getInstance(instanceId).filter.call(targetPage);
       resolve('done');
    });

    ajaxCall.then((message) => {
      this.afterLoad(event);
    });

  };

  onUpdate() {}
  afterClick() {}
  afterLoad() {}
}

export {Pagination}
