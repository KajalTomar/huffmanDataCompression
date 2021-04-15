//----------------------------------------------------------
// CLASS:   IntHash.js
//
// Author:  Kajal Tomar, 7793306
//
// REMARKS: concrete subclass of Hashable. Stores Integer keys
//          and provides a hash method for the key. Also
//          provides a method to compare this object to
//          other IntHash objects.
//----------------------------------------------------------

"use strict";
import Hashable from "./Hashable.js";

class IntHash extends Hashable{

    //------------------------------------------------------
    // constructor
    //
    // PURPOSE: constructor for the IntHash class.
    // PARAMETER:
    //              the key to store (so we can hash it needed)
    //------------------------------------------------------
    constructor(givenKey) {
        super(givenKey)
        this.hash = undefined;

    } // constructor

    //------------------------------------------------------
    // hashVal
    //
    // PURPOSE:     calculates a hash for the given key. The
    //              hash is equal to the key.
    // RETURNS :
    //              a hash
    //------------------------------------------------------
    hashVal = () => {

        if(Number.isInteger(this.key)){
            // confirm that key is an Integer

            this.hash = this.key;

            // so we don't return a negative hash
            if(this.key < 0){
                this.hash = this.hash * -1;
            }
        }

        return this.hash;

    } // hashVal

    //------------------------------------------------------
    // equals
    //
    // PURPOSE:     compares two intHash objects. The two
    //              objects are considered equal if they
    //              contain key.
    // PARAMETER:
    //              otherHash (the IntHash object we are
    //              comparing to.
    // returns:
    //              true if the objects contain the same
    //              key, false otherwise.
    //------------------------------------------------------
    equals = (otherHash) => {
        let areTheSame = false; // until proven otherwise

        if(otherHash.getKey === this.key){
            areTheSame = true; // proved otherwise
        }

        return areTheSame;

    } // equals

} // IntHash

export default IntHash;