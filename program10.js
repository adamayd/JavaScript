console.log(process.argv[2]);
console.log(process.argv[3]);


function countTo6(userName, comment) {
  function html(strings, userName, comment) {
    return strings[0] + userName + strings[1] + comment + strings[2];
  }
  console.log(html`<b>${userName}</b>: ${comment} - Feb 10, 2017`);
}

countTo6("Ian Hickson", "Speaking of which, we added the first draft of the <canvas> element to the Web Apps 1.0 draft proposal specification the other day.");
