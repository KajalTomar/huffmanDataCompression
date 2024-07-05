//----------------------------------------------------------
// REMARKS: Implementation of a node
//          that contains a Key-Value pair
//          (array of size 2)
//          where the Key is a Hashable object
//          and Value is defined.
//----------------------------------------------------------
"use strict";

class ListNode {

    //------------------------------------------------------
    // constructor
    //
    // PURPOSE:     constructor for the ListNode class.
    //              creates this ListNode based on the
    //              arguments received.
    // PARAMETERS:
    //              data is a size two array,
    //              data[0] is the Hashable key
    //              data[1] is a defined value
    //              next is another ListNode
    //------------------------------------------------------
    constructor(data, next) {
        if ('hashVal' in data[0] && typeof (data[0].hashVal) === 'function' &&  data[1] !== undefined) {
            // confirm that we are adding a Key-Value pair
            // where the Key is a Hashable object and Value is defined

            if (arguments.length === 1) {
                // for the first element on the list
                // when no next is given
                this.data = data;
                this.next = null;
            }
            else if (arguments.length >= 2) {
                // for the rest of the elements
                this.data = data;
                this.next = next;
            }
            else {
                // we got way too many or too few arguments
                this.data = -1;
                this.next = null;
            }
        }

    } // constructor

    //------------------------------------------------------
    // getData
    //
    // PURPOSE:     to get the data
    // RETURNS:
    //              data
    //------------------------------------------------------
    get getData(){
        return this.data;
    }

    //------------------------------------------------------
    // getNext
    //
    // PURPOSE:     to get the the next ListNode
    // RETURNS:
    //              next
    //------------------------------------------------------
    get getNext(){
        return this.next;
    }

} // ListNode


export default ListNode;
