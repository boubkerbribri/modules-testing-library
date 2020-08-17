const CommonBOBasePage = require('@kernel/common/BO/BObasePage');

module.exports = class BOBasePage extends CommonBOBasePage {
  constructor() {
    super();

    // @override selectors
    this.sideMenuActiveLink = link => `${link}.link-active`;
  }
};
