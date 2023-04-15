(() => {
  const target = 'https://qty.pot.mybluehost.me/game-collection-api/public/api/parser/';
  const html = document.documentElement.innerHTML;

  function nextUrl(url) {
    const regex = /\/[\d]+\//;
    const str = `${url}`;
    const found = str.match(regex);
    console.log(found);
    if (found) {
      console.log(found);
      const page = found[0];
      const newPage = page.substring(1, page.length - 1) - 1;
      const newStr = str.replace(regex, `/${newPage}/`);
      console.log(newStr);
      return newStr;
    }
    console.log(`no match ${url}`);
    return null;
  }

  let loaded = 0;

  const iframe = document.createElement('iframe');

  iframe.name = `bookmarklet-${Math.floor(Math.random() * 10000 + 1)}`;
  iframe.style.display = 'none';

  iframe.onload = () => {
    if (++loaded === 1) {
      return;
    }

    document.body.removeChild(iframe);
  };

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = target;
  form.target = iframe.name;

  const textarea = document.createElement('textarea');
  textarea.name = 'source';
  textarea.value = html;
  form.appendChild(textarea);

  const input = document.createElement('input');
  input.name = 'fg_url';
  input.value = window.location;
  input.type = 'text';
  form.appendChild(input);

  iframe.appendChild(form);

  document.body.appendChild(iframe);
  form.submit();
  console.log(`parsed page ${window.location}`);

  const nextPage = nextUrl(window.location);
  if (nextPage) {
    setTimeout(() => {
      window.location = nextPage;
    }, 2000);
  } else {
    alert('captured');
  }
})();

// https://mrcoles.com/bookmarklet/
// remove these comments when converting or it will not work
