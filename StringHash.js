//----------------------------------------------------------
// CLASS:   StringHash.js
//
// Author:  Kajal Tomar, 7793306
//
// REMARKS: concrete subclass of Hashable. Stores string keys
//          and provides a hash method for the key. Also
//          provides a method to compare this object to
//          other StringHash objects.
//----------------------------------------------------------
"use strict";
import Hashable from "./Hashable.js";

class StringHash extends Hashable{

    //------------------------------------------------------
    // constructor
    //
    // PURPOSE: constructor for the StringHash class.
    // PARAMETER:
    //              the key to store (so we can hash it needed)
    //------------------------------------------------------
    constructor(givenKey) {
        super(givenKey)

        this.hash = undefined; // initialize to 0
        this.prime = 13; // for the hashVal function

    } // constructor

    //------------------------------------------------------
    // hashVal
    //
    // PURPOSE:     calculates and returns a hash for the key
    // RETURNS:
    //              Hash for the key
    //------------------------------------------------------
    hashVal = () => {

        if (typeof this.key === 'string' || this.key instanceof String) {
            // confirm that key is a string

            this.hash = 0; // because it's undefined before

            // formula to calculate the hashVal:

            // s[0]*pn-1 + s[1]*pn-2 + ...+ s[n-3]*p2 + s[n-2]*p + s[n-1]
            // where s[i] is the ASCII value of the i-th character of the string, n is the length of the
            // string, and p is a prime

            for(let i = 0; i < this.key.length; i++){
                this.hash += (this.prime * (this.key).charCodeAt(i));
            }

        }

        return this.hash;

    } // hashVal

    //------------------------------------------------------
    // equals
    //
    // PURPOSE:     Two StringHash objects are equal if they
    //              contain the same string key.
    // PARAMETER:
    //              otherHash (the StringHash object we are
    //              comparing to.
    // returns:
    //              true if the objects contain the same string
    //              key, false otherwise.
    //------------------------------------------------------
    equals = (otherHash) => {
        let areTheSame = false; // until proven otherwise

        if(otherHash.getKey === this.key){
            areTheSame = true; // proved otherwise
        }

        return areTheSame;

    } // equals
}

export default StringHash;