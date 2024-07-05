//----------------------------------------------------------
// REMARKS: tests for the Dictionary class.
//          (using assert)
//----------------------------------------------------------
"use strict";
import assert from 'assert';

import StringHash from "./StringHash.js";
import IntHash from "./IntHash.js";
import Dictionary from "./Dictionary.js";

//------------------------------------------------------
// test_0
//
// PURPOSE: make sure an empty dictionaries is defined
//          in all possible cases.
//------------------------------------------------------
function test_0(){
    let dictionary0;
    let dictionary1;
    let dictionary2;
    let dictionary3;

    // ---------------------------------------------------
    // case: if we don't provide a size argument
    dictionary0 = new Dictionary();
    assert(dictionary0);
    assert(dictionary0.isEmpty());

    // ---------------------------------------------------
    // case: if we try to make a dictionary of size 0
    dictionary1 = new Dictionary(0);
    assert(dictionary1);
    assert(dictionary1.isEmpty());

    // ---------------------------------------------------
    // case: expected dictionary
    dictionary2 = new Dictionary(20);
    assert(dictionary2);
    assert(dictionary2.isEmpty());
    // ---------------------------------------------------

    // case: if we try to make a dictionary of a negative size
    dictionary3 = new Dictionary(-5);
    assert(dictionary3);
    assert(dictionary3.isEmpty());

} // test_0

//------------------------------------------------------
// test_1
//
// PURPOSE: tests for when there is a single item in the
//          dictionary.
//------------------------------------------------------
function test_1(){
    let dictionary0;
    let dictionary1;
    let intKey0;
    let stringkey0;

    // ---------------------------------------------------
    // Case : when we add a single IntHash Item to the dictionary

    dictionary0 = new Dictionary();
    intKey0 = new IntHash(12);

    dictionary0.put(intKey0,50);

    assert(dictionary0);
    assert(!dictionary0.isEmpty());
    assert(dictionary0.contains(intKey0));
    assert(dictionary0.get(intKey0) === 50);

    // ---------------------------------------------------
    // Case: when we add a single StringHash Item to the dictionary

    dictionary1 = new Dictionary();
    stringkey0 = new StringHash('someKey');

    dictionary1.put(stringkey0,'potato');
    assert(dictionary1);
    assert(!dictionary1.isEmpty());
    assert(dictionary1.contains(stringkey0));
    assert(dictionary1.get(stringkey0) === 'potato');

} // test_1


//------------------------------------------------------
// test_2
//
// PURPOSE: tests when there are two items in the dictionary
//          (and there is no collision)
//------------------------------------------------------
function test_2(){
    let dictionary0;
    let dictionary1;
    let dictionary2;

    let intKey0 = new IntHash(12);
    let intKey1 = new IntHash(5);

    let stringkey0 = new StringHash('someKey');
    let stringKey1 = new StringHash('someOtherKey');

    // ---------------------------------------------------
    // Case: Putting in two IntHash items

    dictionary0 = new Dictionary(100);
    dictionary0.put(intKey0,'a');
    dictionary0.put(intKey1,'v');
    assert(dictionary0.contains(intKey0));
    assert(dictionary0.contains(intKey1));
    assert(dictionary0.get(intKey0) === 'a');
    assert(dictionary0.get(intKey1) === 'v');

    // ---------------------------------------------------
    // Case: Putting in two StringHash items

    dictionary1 = new Dictionary(100);
    dictionary1.put(stringkey0,12);
    dictionary1.put(stringKey1,0);
    assert(dictionary1.contains(stringkey0));
    assert(dictionary1.contains(stringKey1));
    assert(dictionary1.get(stringkey0) === 12);
    assert(dictionary1.get(stringKey1) === 0);

    // ---------------------------------------------------
    // Case: Putting in one StringHash item and one IntHash item

    dictionary2 = new Dictionary();

    dictionary2.put(stringkey0,12);
    dictionary2.put(intKey1,':)');
    assert(dictionary2.contains(stringkey0));
    assert(dictionary2.contains(intKey1));
    assert(dictionary2.get(stringkey0) === 12);
    assert(dictionary2.get(intKey1) === ':)');

}

//------------------------------------------------------
// test_3
//
// PURPOSE: tests for if we try to add Key-Value pairs
//          with Keys that are already in the dictionary.
//------------------------------------------------------
function test_3(){
    let dictionary0;
    let dictionary1;
    let intKey0;
    let intKey1;
    let stringkey0;
    let stringKey1;

    // ---------------------------------------------------
    // Case: adding an IntHash key that already exists
    //       in the dictionary.

    dictionary0 = new Dictionary();
    intKey0 = new IntHash(12);
    intKey1 = new IntHash(12);
    dictionary0.put(intKey0,'oldValue');
    assert(dictionary0.contains(intKey0));
    assert(dictionary0.get(intKey0) === 'oldValue');

    dictionary0.put(intKey1,'newValue');

    assert(dictionary0.contains(intKey0)); // since the keys are the same
    assert(dictionary0.contains(intKey1));

    assert(dictionary0.get(intKey0) !== 'oldValue');
    assert(dictionary0.get(intKey0) === 'newValue');

    // ---------------------------------------------------
    // Case: adding an StringHash key that already exists
    //       in the dictionary.

    dictionary1 = new Dictionary();
    stringkey0 = new StringHash('sameKey');
    stringKey1 = new StringHash('sameKey');

    dictionary1.put(stringkey0,'oldValue');
    assert(dictionary1.contains(stringkey0));
    assert(dictionary1.get(stringkey0) === 'oldValue');

    dictionary1.put(stringKey1,'newValue');

    assert(dictionary1.contains(stringkey0)); // since the keys are the same
    assert(dictionary1.contains(stringKey1));

    assert(dictionary1.get(stringkey0) !== 'oldValue');
    assert(dictionary1.get(stringKey1) === 'newValue');
}

//------------------------------------------------------
// test_4
//
// PURPOSE: test cases where collision occurs.
//------------------------------------------------------
function test_4(){
    let dictionary0 = new Dictionary(2);
    let stringkey0 = new StringHash('someKey');
    let stringKey1 = new StringHash('someOtherKey');

    dictionary0.put(stringkey0,'potato');
    assert(dictionary0);
    assert(!dictionary0.isEmpty());
    assert(dictionary0.contains(stringkey0));
    assert(dictionary0.get(stringkey0) === 'potato');

    dictionary0.put(stringKey1,'not a potato');

    assert(dictionary0);
    assert(dictionary0.contains(stringkey0));
    assert(dictionary0.get(stringkey0) === 'potato');
    assert(dictionary0.contains(stringKey1));
    assert(dictionary0.get(stringKey1) === 'not a potato');
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

