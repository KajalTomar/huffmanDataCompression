
"use strict";
import assert from 'assert';


import HuffmanEncoding from "./HuffmanEncoding.js";


//------------------------------------------------------
// test_0
//
// PURPOSE: creating leaf Nodes
//------------------------------------------------------
function test_0(){
    let t0 = new HuffmanEncoding('test.txt');
    assert(t0);
    t0.encode();

} // test_0

//------------------------------------------------------
// test_1
//
// PURPOSE: creating internal nodes
//------------------------------------------------------
function test_1(){



} // test_1


//------------------------------------------------------
// test_2
//
// PURPOSE: comparing two tress that only have the root node
//------------------------------------------------------
function test_2(){


}

//------------------------------------------------------
// test_3
//
// PURPOSE:traverse test
//------------------------------------------------------
function test_3() {

}
// test_4
//
// PURPOSE: compare two with same weights
//------------------------------------------------------
function test_4(){

}

//------------------------------------------------------
// main
//
// PURPOSE: calls all the test functions.
//------------------------------------------------------
function main(){
    test_0();
    test_1();
    test_2();
    test_3();
    test_4();
}

main();