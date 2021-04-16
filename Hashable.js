//----------------------------------------------------------
// CLASS:   Hashable.js
//
// Author:  Kajal Tomar, 7793306
//
// REMARKS: abstract parent class of
//          hash classes. Specifies methods
//          that concrete hash classes
//          must implement.
//----------------------------------------------------------
"use strict";

class Hashable{

    //------------------------------------------------------
    // constructor
    //
    // PURPOSE:     constructor for the Hashable class. Throws
    //              an error if someone tries to create an
    //              instance of this class.
    // PARAMETER:
    //              the key to store (so we can hash it needed)
    //------------------------------------------------------
    constructor(givenKey) {
        this.key = givenKey;

        // can't create an instance of Hashable, but can create an concrete child classes.
        if(this.constructor === Hashable){
            throw new Error("Trying to create a Hashable object, but we want hashable to be an abstract class!");
        }

    } // constructor

    //------------------------------------------------------
    // hashVal
    //
    // PURPOSE:     Mimics an abstract method.
    //              Enforces implementation of a hashVal method
    //              in the child classes by throwing an error
    //              if they don't.
    //------------------------------------------------------
    hashVal = () => {
        throw new Error("Missing hash val method in IntHash or StringHash");
    } // hashVal

    //------------------------------------------------------
    // equals
    //
    // PURPOSE:     Mimics an abstract method.
    //              Enforces implementation of a equals method
    //              in the child classes by throwing an error
    //              if they don't.
    //------------------------------------------------------
    equals = () => {
        throw new Error("Missing equals method in IntHash or StringHash");
    } // equals

    //------------------------------------------------------
    // value
    //
    // PURPOSE:     getter for the value
    // RETURNS:     this.value
    //------------------------------------------------------
    get getKey(){
        return this.key;
    } // value


} // Hashable

export default Hashable;