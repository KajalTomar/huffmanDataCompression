//----------------------------------------------------------
// REMARKS: implementation of a dictionary that
//          holds Key-Value pairs as
//          hash table.
//----------------------------------------------------------
"use strict";
import LinkedList from "./LinkedList.js";

class Dictionary {

    //------------------------------------------------------
    // constructor
    //
    // PURPOSE:     constructor for the Dictionary class. If no
    //              desired size is given then the default size
    //              of the dictionary array is 0.
    // PARAMETERS:
    //              givenSize - desired size of the dictionary
    //------------------------------------------------------
    constructor(givenSize) {
        if (arguments.length === 1 && givenSize  > 0) {
            // only accept integers greater than one as givenSize

            this.size = givenSize;
        }
        else {
            this.size = 100; // default size if no size is given
        }

        this.dictionary = new Array(this.size);

        // creates a linked list at every spot
        for(let i = 0; i < this.dictionary.length; i++){
            this.dictionary[i] = new LinkedList();
        }

    } // constructor

    //------------------------------------------------------
    // put
    //
    // PURPOSE:     adds a Key-Value pair to the dictionary if
    //              no pair with the given key exists in the
    //              dictionary. Otherwise, just changes the
    //              value of the Key-Value pair in the dictionary
    //              to the given value.
    //
    // PARAMETERS:
    //              Hashable key,
    //              value v
    //------------------------------------------------------
    put = (k, v) => {

        if('hashVal' in k && typeof(k.hashVal) === 'function' &&  v !== undefined){
            // duck type to check that k is an instance of Hashable
            // v is defined

            const index = k.hashVal() % this.dictionary.length; // get the hash value

            // try to get an item with the same Hashable key as k from
            // this index in the dictionary
            let tempItem = this.dictionary[index].getFromList(k);

            if(tempItem == null) {
                // there was no Key-Value pair at index that had the
                // same key as k

                this.dictionary[index].insert([k, v]); // so add this item
            }
            else {
                // there was already a Key-Value pair at index that had the
                // same key as k

                tempItem[1] = v; // so just change it's value to the new value (v)
            }
        }
        else {
            // k is not an instance of Hashable or v is undefined
            console.log("Invalid arguments. Method put expects a Hashable key and defined value.");
        }

    } // put

    //-------------------------------------------------------------
    // get
    //
    // PURPOSE:     get the value of the Key-Value pair with the matching
    //              key
    // PARAMETER:
    //              Hashable key to find the value in the dictionary
    // returns:
    //              value of the Key-Value pair with the matching
    //              key if we found one, and undefined otherwise.
    //-------------------------------------------------------------
    get = k => {
        let valueWithK = undefined; // undefined by default

        if('hashVal' in k && typeof(k.hashVal) === 'function'){
            // duck type to check that k is an instance of Hashable

            // find the location of k in the dictionary
            const index = k.hashVal() % this.dictionary.length;

            // to check if k is actually at this location
            let tempItem = this.dictionary[index].getFromList(k);

            if(tempItem !== null){
                // k was at this spot!

                valueWithK = tempItem[1]; // get the value associated with k
            }

        }
        else {
            // k is not an instance of Hashable
            throw new Error("put method in Dictionary.js expected a Hashable key, but did not receive one");
        }

        return valueWithK;
    } // get

    //------------------------------------------------------
    // contains
    //
    // PURPOSE:     to check if a given k is in the
    //              dictionary
    // PARAMETER:
    //              Hashable key
    // returns:
    //              true if the key is in the dictionary,
    //              false otherwise
    //------------------------------------------------------
    contains = k => {
        let foundIt = true;

        if('hashVal' in k && typeof(k.hashVal) === 'function'){
            // duck type to check that k is an instance of Hashable

            // find the location of k in the dictionary
            const index = k.hashVal() % this.dictionary.length;

            // check if k is actually at this location
            if(this.dictionary[index].getFromList(k) === null) {
                // it was not in this location :(

                foundIt = false;
            }
        }
        else {
            // k is not an instance of Hashable
            throw new Error("Can't search for a non-Hashable key in the dictionary.");
        }

        return foundIt;

    } // contains

    //------------------------------------------------------
    // isEmpty
    //
    // PURPOSE:     to check whether the dictionary is empty
    // returns:
    //              returns true if the dictionary is empty,
    //              false otherwise
    //------------------------------------------------------
    isEmpty = k => {
        let empty = true; // until proven otherwise
        let index = 0; // start at the first spot in the dictionary

        // keep looking until the end of the dictionary,
        // or until we find a spot that has stuff in it (so the dictionary is not empty)
        while(index < this.dictionary.length && empty){

             if(this.dictionary[index].listSize > 0){
                 // if the linked list at a given spot has stuff
                 // then the dictionary is not empty

                 empty = false;

             }

            index++; // on to the next spot!
        }

        return empty;

    } // isEmpty

} // Dictionary

export default Dictionary;




