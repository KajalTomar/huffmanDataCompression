//-----------------------------------------
// REMARKS: This is the main file
//          that creates and runs the
//          huffmanEncoding.
//-----------------------------------------

import HuffmanEncoding from "./HuffmanEncoding.js";

//------------------------------------------------------
// main
//
// PURPOSE:     creates a HuffmanEncoding object and
//              gives it the name of the file to encode.
//              Calls the encode method to encode the file.
//------------------------------------------------------
function main(){
    let fileName = 'hamlet.txt'; // change the input file name here

    let testRun = new HuffmanEncoding(fileName);
    testRun.encode();
}

main(); // executable line

