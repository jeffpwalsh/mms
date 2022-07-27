//REPLICATES DATE STAMP FUNCTION IN CONFIG.JS

function timeStampTEST() {
  let dateTEST = new Date();
  let gl_timeStampTEST = `${dateTest.getHours()}:${dateTEST.getMinutes()}:${dateTEST.getSeconds()}`;
  return gl_timeStampTEST;
}


module.exports = timeStampTEST

