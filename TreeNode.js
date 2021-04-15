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
    // PURPOSE:     constructor for the TreeNode class. Throws
    //              an error if someone tries to create an
    //              instance of this class.
    // PARAMETER:
    //              the weight to store
    //------------------------------------------------------
    constructor(givenWeight) {
        this.weight = givenWeight;

        // can't create an instance of TreeNode, but can create an concrete child classes.
        if(this.constructor === TreeNode){
            throw new Error("Trying to create a TreeNode object, but we want TreeNode to be an abstract class!");
        }

    } // constructor

    get getWeight(){
        return this.weight;
    }

} // TreeNode


export default TreeNode;