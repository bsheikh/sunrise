/**
 * internationalizationBuilder() determines internationalization for app
 * @param {String} language - the locale that should be returned for the language specified
 */
export function internationalizationBuilder(language) {
  const enUS = require('antd/lib/locale-provider/en_US');
  if (language === "ind") {
    return { antd: enUS, reactIntl: 'in' };
  } else if (language === "tha") {
    return { antd: enUS, reactIntl: 'th' };
  } else if (language === "cmn") {
    const zhTW = require('antd/lib/locale-provider/zh_TW');
    return { antd: zhTW, reactIntl: 'zh' };
  } else if (language === "jpn") {
    const jaJP = require('antd/lib/locale-provider/ja_JP');
    return { antd: jaJP, reactIntl: 'ja' };
  } else if (language === "kor") {
    const koKR = require('antd/lib/locale-provider/ko_KR');
    return { antd: koKR, reactIntl: 'ko' };
  }
  return {
    antd: enUS,
    reactIntl: 'en'
  };
}
