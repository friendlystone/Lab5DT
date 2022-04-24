function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
      
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}
function getNRZL(bits) {
  var result = [];
  if (parseInt(bits[0].value) == 1) 
  {
    symbol = '▔▔';
    result.push(symbol);
  }
  else
  {
    symbol = '▁▁';
    result.push(symbol);
  }

  for (var i = 1; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (parseInt(bits[i].value) == 1 && parseInt(bits[i - 1].value) == 1) symbol = '▔▔';
      if (parseInt(bits[i].value) == 1 && parseInt(bits[i - 1].value) == 0) symbol = '|▔▔';
      if (parseInt(bits[i].value) == 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁▁';
      if (parseInt(bits[i].value) == 0 && parseInt(bits[i - 1].value) == 0) symbol = '▁▁';
      result.push(symbol);
  }
  return result;
}
function getNRZM(bits) {
  var result = [];
  if (parseInt(bits[0].value) == 1) 
  {
    symbol = '▔▔';
    result.push(symbol);
  }
  else
  {
    symbol = '▁▁';
    result.push(symbol);
  }
  if(symbol == '▔▔')
  poz=1;
  else
  poz=0;
  for (var i = 1; i < bits.length; i++) {
    let symbol = '⚋⚋';
    if (parseInt(bits[i].value) == 0 && poz==1) symbol = '▔▔';
    else
    {
      if (parseInt(bits[i].value) == 0 && poz==0) 
    {
      symbol = '▁▁';
    }
    else
    {
      if(parseInt(bits[i].value) == 1 && poz==1) 
    {
      symbol = '∣▁▁'; 
      poz=0;
    }
    else
    {
      if(parseInt(bits[i].value) == 1 && poz==0) 
      {
        symbol = '|▔▔'; 
        poz=1;
      }
    }
    } 
    }
    result.push(symbol);
  }
  return result;
}
function getNRZS(bits) {
  var result = [];
  if (parseInt(bits[0].value) == 0) 
  {
    symbol = '▔▔';
    result.push(symbol);
  }
  else
  {
    symbol = '▁▁';
    result.push(symbol);
  }
  if(symbol == '▔▔')
  poz=1;
  else
  poz=0;
  for (var i = 1; i < bits.length; i++) {
    let symbol = '⚋⚋';
    if (parseInt(bits[i].value) == 1 && poz==1) symbol = '▔▔';
    else
    {
      if (parseInt(bits[i].value) == 1 && poz==0) 
    {
      symbol = '▁▁';
    }
    else
    {
      if(parseInt(bits[i].value) == 0 && poz==1) 
    {
      symbol = '∣▁▁'; 
      poz=0;
    }
    else
    {
      if(parseInt(bits[i].value) == 0 && poz==0) 
      {
        symbol = '|▔▔'; 
        poz=1;
      }
    }
    } 
    }
    result.push(symbol);
  }
  return result;
}
function getRZ(bits) {
  var result = [];
  if (parseInt(bits[0].value) == 1) 
  {
    symbol = '▔|▁';
    result.push(symbol);
  }
  else
  {
    symbol = '▁▁';
    result.push(symbol);
  }

  for (var i = 1; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (parseInt(bits[i].value) == 1 && parseInt(bits[i - 1].value) == 1) symbol = '|▔|▁';
      if (parseInt(bits[i].value) == 1 && parseInt(bits[i - 1].value) == 0) symbol = '|▔|▁';
      if (parseInt(bits[i].value) == 0 && parseInt(bits[i - 1].value) == 1) symbol = '▁▁';
      if (parseInt(bits[i].value) == 0 && parseInt(bits[i - 1].value) == 0) symbol = '▁▁';
      result.push(symbol);
  }
  return result;
}
function getBM(bits) {

  var result = [];
  if (parseInt(bits[0].value) == 1) 
  {
    symbol = '▔|▁';
    result.push(symbol);
    
  }
  else
  {
    symbol = '▁▁';
    result.push(symbol);
  }
  poz=0;
  for (var i = 1; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (parseInt(bits[i].value) == 1 && poz==0) symbol = '|▔|▁';
      else if (parseInt(bits[i].value) == 1  && poz==1) { symbol = '▔|▁';poz=0;}
      else if (parseInt(bits[i].value) == 0 && poz==0) { symbol = '|▔▔';poz=1;}
      else if (parseInt(bits[i].value) == 0 && poz==1) {symbol = '∣▁▁';poz=0;}
      result.push(symbol);
  }
  return result;
}
function getBS(bits) {

  var result = [];
  if (parseInt(bits[0].value) == 1) 
  {
    symbol = '▔▔';
    result.push(symbol);
    
  }
  else
  {
    symbol = '▁|▔';
    result.push(symbol);
  }
  poz=1;
  for (var i = 1; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (parseInt(bits[i].value) == 1 && poz==0) { symbol = '|▔▔';poz=1;}
      else if (parseInt(bits[i].value) == 1  && poz==1) {symbol = '∣▁▁';poz=0;}
      else if (parseInt(bits[i].value) == 0 && poz==0) { symbol = '▁|▔';poz=1;}
      else if (parseInt(bits[i].value) == 0 && poz==1) {symbol = '∣▁|▔';}
      result.push(symbol);
  }
  return result;
}
function getBLDIF(bits) {

  var result = [];
  if (parseInt(bits[0].value) == 1) 
  {
    symbol = '▁|▔';
    result.push(symbol);
    
  }
  else
  {
    symbol = '▁|▔';
    result.push(symbol);
  }
  poz=1;
  for (var i = 1; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (parseInt(bits[i].value) == 1 && poz==0) { symbol = '▁|▔';poz=1;}
      else if (parseInt(bits[i].value) == 1  && poz==1) {symbol = '▔∣▁';poz=0;}
      else if (parseInt(bits[i].value) == 0 && poz==0) { symbol = '▁|▔';poz=1;}
      else if (parseInt(bits[i].value) == 0 && poz==1) {symbol = '∣▁|▔';}
      result.push(symbol);
  }
  return result;
}
function getDELAY(bits) {

  var result = [];
  if (parseInt(bits[0].value) == 1) 
  {
    symbol = '▁|▔';
    result.push(symbol);
    
  }
  else
  {
    symbol = '▁▁';
    result.push(symbol);
  }
  poz=1;
  for (var i = 1; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (parseInt(bits[i].value) == 1 && poz==0) { symbol = '▁|▔';poz=1;}
      else if (parseInt(bits[i].value) == 1  && poz==1) {symbol = '▔|▁'; poz=0;}
      else if (parseInt(bits[i].value) == 0 &&  parseInt(bits[i - 1].value) == 1 && poz==1) { symbol = '▔▔';}
      else if (parseInt(bits[i].value) == 0 &&  parseInt(bits[i - 1].value) == 1 && poz==0) { symbol = '▁▁';}
      else if (parseInt(bits[i].value) == 0 && parseInt(bits[i - 1].value) == 0 && poz==1) {symbol = '∣▁▁';poz=0;}
      else if (parseInt(bits[i].value) == 0 && parseInt(bits[i - 1].value) == 0 && poz==0) {symbol = '∣▔▔';poz=1;}
      result.push(symbol);
  }
  return result;
}