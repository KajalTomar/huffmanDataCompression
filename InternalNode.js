//----------------------------------------------------------
// REMARKS: concrete subclass of TreeNode. For nodes that
//          are internal nodes.
//----------------------------------------------------------

"use strict";
import TreeNode from "./TreeNode.js";

class InternalNode extends TreeNode{

    //------------------------------------------------------
    // constructor
    //
    // PURPOSE:     constructor for the InternalNode class.
    // PARAMETER:
    //              two Huffman tree objects
    //------------------------------------------------------
    constructor(leftSubtree, rightSubtree) {
        if(('compareTo' in leftSubtree && typeof (leftSubtree.compareTo) === 'function') &&
            (('compareTo' in rightSubtree && typeof (rightSubtree.compareTo) === 'function'))) {
            // this is an internal node and we have received two Huffman Trees as arguments

            // weight of the internal node is the sum of the weights of the children nodes
            super((leftSubtree.getRoot).getWeight + (rightSubtree.getRoot).getWeight);

            this.left = leftSubtree;
            this.right = rightSubtree;
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

} // InternalNode

export default InternalNode;
