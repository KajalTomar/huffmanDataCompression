//----------------------------------------------------------
// CLASS:   TreeNode.js
//
// Author:  Kajal Tomar, 7793306
//
// REMARKS: Implementation of a node
//          of a Huffman Tree
//----------------------------------------------------------
"use strict";

class TreeNode {

    //------------------------------------------------------
    // constructor
    //
    // PURPOSE:     constructor for the TreeNode class.
    //              creates this TreeNode based on the
    //              arguments received.
    //------------------------------------------------------
    constructor(firstArgument, secondArgument) {
        if(arguments.length === 1){
            // this is a leaf node, it has a label (single character)
            // and no children

            this.label = firstArgument;
        }
        else if(arguments.length === 2) {
            // this is an internal node (so it's not labeled with any data)
            // it it has two children nodes
        }
        else {
            // not sure
        }
    } // constructor

    //------------------------------------------------------
    // getData
    //
    // PURPOSE:     to get the data
    // RETURNS:
    //              data
    //------------------------------------------------------
    get getLabel(){
        let labelToReturn = null;

        if(this.label){
            labelToReturn =  this.label;
        }

        return labelToReturn;
    }

    //------------------------------------------------------
    // getNext
    //
    // PURPOSE:     to get the the next TreeNode
    // RETURNS:
    //              next
    //------------------------------------------------------
    get getNext(){

    }

} // TreeNode


export default TreeNode;