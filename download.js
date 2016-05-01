var keyword = "attachment.php?";

function getLinks() {
  var aLinks =[];
  var aDOM = [].slice.apply(document.getElementsByTagName('a'));
  for (var j=0; j<aDOM.length; j++) {
    var url = aDOM[j].href;
    if (url !== 'null' && url !== null && url !== undefined) {
      var isChangeset = url.indexOf(keyword) > 0;
      if (isChangeset) {
        aLinks.push(url);
      }
    }
  }
  return aLinks;
}

chrome.extension.sendMessage(getLinks());