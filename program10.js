function html(strings, ...inputs) {
  const output = inputs.map(npt => {
    return npt.replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;')
       .replace(/\'/g, '&apos;')
       .replace(/\"/g, '&quot;');
  });
  return strings[0] + output[0] + strings[1] + output[1] + strings[2];
}

console.log(html`<b>${process.argv[2]} says</b>: \"${process.argv[3]}\"`);
