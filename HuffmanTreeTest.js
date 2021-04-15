
"use strict";
import assert from 'assert';

import HuffmanTree from "./HuffmanTree.js";
import * as Console from "console";

//------------------------------------------------------
// test_0
//
// PURPOSE: creating leaf Nodes
//------------------------------------------------------
function test_0(){
    // normal tree
    let testTree0 = new HuffmanTree(0.001,'A');
  //  console.log(testTree0);
    assert(testTree0);

    // edge case: weight = 0
    let testTree1 = new HuffmanTree(0.1,'b');
  //  console.log(testTree1);
    assert(testTree1);

    // edge case: weight = 1
    let testTree2 = new HuffmanTree(0.7,'c');
//    console.log(testTree2);
    assert(testTree2);

    // edge case: weight = 1
    let testTree3 = new HuffmanTree(testTree1,testTree2);
   // console.log(testTree3);
    assert(testTree3);
} // test_0

//------------------------------------------------------
// test_1
//
// PURPOSE: creating internal nodes
//------------------------------------------------------
function test_1(){
    let testTree0 = new HuffmanTree(0.001,'A');
    let testTree1 = new HuffmanTree(0.1,'b');
    let testTree2 = new HuffmanTree(0.7,'c');

    // a tree made of two Huffman trees with single leaf nodes
    let testTree3 = new HuffmanTree(testTree0,testTree1);
 //   console.log(testTree3);
    assert(testTree3);  // weight should be 0.101

    // a tree made of one Huffman trees with a single leaf nodes and another Huffman tree with more layers
    let testTree4 = new HuffmanTree(testTree2,testTree3);
 //   console.log(testTree4);
    assert(testTree4); // weight should be 0.801

    // a tree made of two Huffman trees (made of more than one node each)
    let testTree5 = new HuffmanTree(testTree3,testTree4);
  //  console.log(testTree5);
    assert(testTree5); // weight should be 0.801


} // test_1


//------------------------------------------------------
// test_2
//
// PURPOSE: comparing two tress that only have the root node
//------------------------------------------------------
function test_2(){
    let testTree0 = new HuffmanTree(0.001,'A');
    let testTree1 = new HuffmanTree(0.0000000000001,'b');
    let testTree2 = new HuffmanTree(0.999999999,'c');
    let testTree3 = new HuffmanTree(0.7,'d');

    assert(testTree0.compareTo(testTree1) === -1);
    assert(testTree0.compareTo(testTree2) === 1);
    assert(testTree0.compareTo(testTree3) === 1);

    assert(testTree1.compareTo(testTree0) === 1);
    assert(testTree1.compareTo(testTree2) === 1);
    assert(testTree1.compareTo(testTree3) === 1);

    assert(testTree2.compareTo(testTree0) === -1);
    assert(testTree2.compareTo(testTree1) === -1);
    assert(testTree2.compareTo(testTree3) === -1);

    assert(testTree3.compareTo(testTree0) === -1);
    assert(testTree3.compareTo(testTree1) === -1);
    assert(testTree3.compareTo(testTree2) === 1);

}

//------------------------------------------------------
// test_3
//
// PURPOSE:traverse test
//------------------------------------------------------
function test_3(){
    let testTree1 = new HuffmanTree(0.777,'A');
    let testTree2 = new HuffmanTree(0.777,'B');
    let testTree0 = new HuffmanTree(testTree1,testTree2);

    assert(testTree1.search('X') === null)
    assert(testTree1.search('A') === '')
    assert(testTree2.search('B') === '')

    assert(testTree0.search('A') === '0')
    assert(testTree0.search('B') === '1')

    let testTree3 = new HuffmanTree(0.777,'C');
    let testTree4 = new HuffmanTree(0.777,'D');
    let testTree5 = new HuffmanTree(testTree3,testTree4);
    let testTree6 = new HuffmanTree(testTree0,testTree5);

   assert(testTree5.search('X') === null);
   assert(testTree6.search('A') === '00');
   assert(testTree6.search('B') === '01');
   assert(testTree6.search('C') === '10');
   assert(testTree6.search('D') === '11');

    let testTree7 = new HuffmanTree(0.777,'E');
    let testTree8 = new HuffmanTree(0.777,'F');
    let testTree9 = new HuffmanTree(testTree7,testTree8);
    let testTree10 = new HuffmanTree(testTree6,testTree9);

    assert(testTree10.search('X') === null);
    assert(testTree10.search('A') === '000');
    assert(testTree10.search('B') === '001');
    assert(testTree10.search('C') === '010');
    assert(testTree10.search('D') === '011');
    assert(testTree10.search('E') === '10');
    assert(testTree10.search('F') === '11');
}

//------------------------------------------------------
// test_4
//
// PURPOSE: test cases where collision occurs.
//------------------------------------------------------
function test_4(){
    // let dictionary0 = new Dictionary(2);
    // let stringkey0 = new StringHash('someKey');
    // let stringKey1 = new StringHash('someOtherKey');
    //
    // dictionary0.put(stringkey0,'potato');
    // assert(dictionary0);
    // assert(!dictionary0.isEmpty());
    // assert(dictionary0.contains(stringkey0));
    // assert(dictionary0.get(stringkey0) === 'potato');
    //
    // dictionary0.put(stringKey1,'not a potato');
    //
    // assert(dictionary0);
    // assert(dictionary0.contains(stringkey0));
    // assert(dictionary0.get(stringkey0) === 'potato');
    // assert(dictionary0.contains(stringKey1));
    // assert(dictionary0.get(stringKey1) === 'not a potato');
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
