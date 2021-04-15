//----------------------------------------------------------
// CLASS:   InternalNode.js
//
// Author:  Kajal Tomar, 7793306
//
// REMARKS: concrete subclass of TreeNode. 
//----------------------------------------------------------

"use strict";
import TreeNode from "./TreeNode.js";

class InternalNode extends TreeNode{

    //------------------------------------------------------
    // constructor
    //
    // PURPOSE: constructor for the InternalNode class.
    // PARAMETER:
    //              the key to store (so we can hash it needed)
    //------------------------------------------------------
    constructor(subtree0, subtree1) {
        if(('compareTo' in subtree0 && typeof (subtree0.compareTo) === 'function') &&
            (('compareTo' in subtree1 && typeof (subtree1.compareTo) === 'function'))) {
            // this is an internal node and we have received two Huffman Trees as arguments

            super((subtree0.getRoot).getWeight + (subtree1.getRoot).getWeight);
            let compareToResult = subtree0.compareTo(subtree1);

            if(compareToResult === 1) {
                this.left = subtree1;
                this.right = subtree0;
            }
            else {
                this.left = subtree0;
                this.right = subtree1;
            }
        }

        else {
            throw new Error("You must send the weight and two HuffmanTees to create an internal tree")
        }
    } // constructor

    //------------------------------------------------------
    // getLeftChild
    //
    // PURPOSE:     to get the left child if it exists
    // RETURNS:
    //              TreeNode left child if it exists, null
    //              otherwise
    //------------------------------------------------------
    getLeftChild(){
        return this.left.getRoot;
    }

    //------------------------------------------------------
    // getRightChild
    //
    // PURPOSE:     to get the right child if it exists
    // RETURNS:
    //              TreeNode right child if it exists, null
    //              otherwise
    //------------------------------------------------------
    getRightChild(){
        return this.right.getRoot;
    }

    // //------------------------------------------------------
    // // getParent
    // //
    // // PURPOSE:     to get the parent if it exists
    // // RETURNS:
    // //              TreeNode  parent if it exists, null
    // //              otherwise
    // //------------------------------------------------------
    // get getParent(){
    //     return this.parent;
    // }


    //------------------------------------------------------
    // setLeft
    //
    // PURPOSE:     to set the left child
    // PARAMETER:
    //              the new child TreeNode
    //------------------------------------------------------
    set setLeftChild(newChild){
        this.left =  newChild;
    }

    //------------------------------------------------------
    // setLeft
    //
    // PURPOSE:     to set the right child
    // PARAMETER:
    //              the new child TreeNode
    //------------------------------------------------------
    set setRightChild(newChild){
        this.right =  newChild;
    }

    // //------------------------------------------------------
    // // setParent
    // //
    // // PURPOSE:     to set the parent
    // // PARAMETER:
    // //              the new parent TreeNode
    // //------------------------------------------------------
    // set setParent(newParent){
    //     this.right =  this.parent;
    // }


} // InternalNode

export default InternalNode;