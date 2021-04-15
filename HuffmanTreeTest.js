
"use strict";
import assert from 'assert';

import HuffmanTree from "./HuffmanTree.js";

//------------------------------------------------------
// test_0
//
// PURPOSE: make sure an empty tree is defined
//          in all possible cases.
//------------------------------------------------------
function test_0(){
    // normal tree
    let testTree0 = new HuffmanTree(0.001,'A');
    // console.log(testTree0);
    assert(testTree0);

    // edge case: weight = 0
    let testTree1 = new HuffmanTree(0,'b');
    // console.log(testTree1);
    assert(testTree1);

    // edge case: weight = 1
    let testTree2 = new HuffmanTree(1,'c');
    // console.log(testTree2);
    assert(testTree2);

    // edge case: weight = 1
    let testTree3 = new HuffmanTree(testTree1,testTree2);
    // console.log(testTree2);
    assert(testTree3);
} // test_0

//------------------------------------------------------
// test_1
//
// PURPOSE: tests for when there is a single item in the
//          dictionary.
//------------------------------------------------------
function test_1(){
    // let dictionary0;
    // let dictionary1;
    // let intKey0;
    // let stringkey0;
    //
    // // ---------------------------------------------------
    // // Case : when we add a single IntHash Item to the dictionary
    //
    // dictionary0 = new Dictionary();
    // intKey0 = new IntHash(12);
    //
    // dictionary0.put(intKey0,50);
    //
    // assert(dictionary0);
    // assert(!dictionary0.isEmpty());
    // assert(dictionary0.contains(intKey0));
    // assert(dictionary0.get(intKey0) === 50);
    //
    // // ---------------------------------------------------
    // // Case: when we add a single StringHash Item to the dictionary
    //
    // dictionary1 = new Dictionary();
    // stringkey0 = new StringHash('someKey');
    //
    // dictionary1.put(stringkey0,'potato');
    // assert(dictionary1);
    // assert(!dictionary1.isEmpty());
    // assert(dictionary1.contains(stringkey0));
    // assert(dictionary1.get(stringkey0) === 'potato');

} // test_1


//------------------------------------------------------
// test_2
//
// PURPOSE: comparing two tress that only have the root node
//------------------------------------------------------
function test_2(){
    let testTree0 = new HuffmanTree(0.001,'A');
    let testTree1 = new HuffmanTree(0,'b');
    let testTree2 = new HuffmanTree(1,'c');
    let testTree3 = new HuffmanTree(0.7,'d');

    assert(testTree0.compareTo(testTree1) === 1);
    assert(testTree0.compareTo(testTree2) === -1);
    assert(testTree0.compareTo(testTree3) === -1);

    assert(testTree1.compareTo(testTree0) === -1);
    assert(testTree1.compareTo(testTree2) === -1);
    assert(testTree1.compareTo(testTree3) === -1);

    assert(testTree2.compareTo(testTree0) === 1);
    assert(testTree2.compareTo(testTree1) === 1);
    assert(testTree2.compareTo(testTree3) === 1);

    assert(testTree3.compareTo(testTree0) === 1);
    assert(testTree3.compareTo(testTree1) === 1);
    assert(testTree3.compareTo(testTree2) === -1);

    // testTree1.combineTrees(testTree3,testTree2);
}

//------------------------------------------------------
// test_3
//
// PURPOSE: tests for if we try to add Key-Value pairs
//          with Keys that are already in the dictionary.
//------------------------------------------------------
function test_3(){
    // let dictionary0;
    // let dictionary1;
    // let intKey0;
    // let intKey1;
    // let stringkey0;
    // let stringKey1;
    //
    // // ---------------------------------------------------
    // // Case: adding an IntHash key that already exists
    // //       in the dictionary.
    //
    // dictionary0 = new Dictionary();
    // intKey0 = new IntHash(12);
    // intKey1 = new IntHash(12);
    // dictionary0.put(intKey0,'oldValue');
    // assert(dictionary0.contains(intKey0));
    // assert(dictionary0.get(intKey0) === 'oldValue');
    //
    // dictionary0.put(intKey1,'newValue');
    //
    // assert(dictionary0.contains(intKey0)); // since the keys are the same
    // assert(dictionary0.contains(intKey1));
    //
    // assert(dictionary0.get(intKey0) !== 'oldValue');
    // assert(dictionary0.get(intKey0) === 'newValue');
    //
    // // ---------------------------------------------------
    // // Case: adding an StringHash key that already exists
    // //       in the dictionary.
    //
    // dictionary1 = new Dictionary();
    // stringkey0 = new StringHash('sameKey');
    // stringKey1 = new StringHash('sameKey');
    //
    // dictionary1.put(stringkey0,'oldValue');
    // assert(dictionary1.contains(stringkey0));
    // assert(dictionary1.get(stringkey0) === 'oldValue');
    //
    // dictionary1.put(stringKey1,'newValue');
    //
    // assert(dictionary1.contains(stringkey0)); // since the keys are the same
    // assert(dictionary1.contains(stringKey1));
    //
    // assert(dictionary1.get(stringkey0) !== 'oldValue');
    // assert(dictionary1.get(stringKey1) === 'newValue');
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
