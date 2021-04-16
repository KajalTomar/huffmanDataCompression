//----------------------------------------------------------
// CLASS:   LinkedList.js
//
// Author:  Kajal Tomar, 7793306
//
// REMARKS: implementation of a Linked
//          List that only holds
//          Hashable objects.
//----------------------------------------------------------
"use strict";
import ListNode from "./ListNode.js"

class LinkedList{

    //------------------------------------------------------
    // constructor
    //
    // PURPOSE:     constructor for the LinkedList class.
    //------------------------------------------------------
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //------------------------------------------------------
    // insert
    //
    // PURPOSE:     inserts a valid data into the linked list.
    //              If the data is invalid, then it does nothing.
    // PARAMETERS:
    //              data - size two array
    //              containing a hashable item at index 0
    //              and a defined value at index 1.
    //------------------------------------------------------
    insert ( data ) {
        if ('hashVal' in data[0] && typeof (data[0].hashVal) === 'function' && data[1] !== undefined) {
            // confirm that we are adding a Key-Value pair
            // where the Key is a Hashable object and Value is defined

            this.head = new ListNode(data, this.head);
            this.size++;
        }
    } // insert

    //------------------------------------------------------
    // put
    //
    // PURPOSE:     to get a data in the list that has the same
    //              key as otherData.
    // PARAMETERS:
    //              otherData - we are looking for a data with
    //              the same key as otherData (Hashable).
    // RETURNS:
    //              returns the Key-Value pair if it is found,
    //              null otherwise
    //------------------------------------------------------
    getFromList = (otherData) => {
        let curr = this.head; // to iterate through the list
        let foundItem = null; // null unless we find an item with the same key

        if ('hashVal' in otherData && typeof (otherData.hashVal) === 'function') {
            // ducktype to confirm that otherData is a Hashable object.

            // note: since technically this list allows for duplicates, this will just
            // return the first item that matches

            // iterate through the whole list or until we find a match
            while (curr && foundItem === null) {

                if((curr.getData)[0].equals(otherData)){
                    // found a match (by comparing keys)

                    foundItem = curr.getData;
                }

                curr = curr.getNext; // on to the next one!
            }
        }

        return foundItem;

    } //getFromList

    //------------------------------------------------------
    // listSize
    //
    // PURPOSE:     to get the list size
    // RETURNS:
    //              the current size of the list.
    //------------------------------------------------------
    get listSize(){
        return this.size;
    }

} // LinkedList

export default LinkedList;
