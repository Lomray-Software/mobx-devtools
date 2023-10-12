/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {string} filePath Local path of the internal script.
 * @param  {string} tag The tag as string, where the script will be append (default: 'body').
 * @see    {@link http://stackoverflow.com/questions/20499994/access-window-variable-from-content-script}
 */
function injectScript(filePath, tag = 'body') {
  const [node] = document.getElementsByTagName(tag);
  const script = document.createElement('script');

  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', filePath);
  node.appendChild(script);
}

injectScript(chrome.runtime.getURL('content.js'));

document.addEventListener('DEV_ON_CHANGE', (event) => {
  // console.log('- sendMessage DEV_ON_CHANGE -', event);

  if (!event.detail) {
    return;
  }

  chrome.runtime.sendMessage(event.detail);
});
