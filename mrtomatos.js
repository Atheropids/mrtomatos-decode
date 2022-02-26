'use strict';

const fs = require('fs');

let workspace = 'D:/workspace';
let lines = fs.readFileSync(`${workspace}/USELESS TEXT.txt`).toString('utf16le').slice(1).split(/\r?\n/g);

// Key for the decoding process.
let key = 23;

let x = 0;
let str_in = '';

for(let i = 0 ; i < lines.length ; i++)
{
  if(lines[i].length >= x)
  {
    x = lines[i].length;
    str_in += lines[i];
  }
  else
  {
    str_in += lines[i].slice(0, -5);

    let code = lines[i].slice(-5);
    let str = '';

    for(let j = 0 ; j < str_in.length ; j += 2)
    {
      str += String.fromCharCode(parseInt(str_in.slice(j, j + 2)) + key);
    }

    str += code;
    console.log(decodeURIComponent(str).replace(/\+/g, ' ').replace('<br/>', '\n'));
  }
}
