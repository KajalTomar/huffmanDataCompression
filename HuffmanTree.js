//----------------------------------------------------------
// CLASS: HuffmanTree.js
//
// Author: Kajal Tomar, 7793306
//
// REMARKS: this class creates and represents a Huffman tree.
//----------------------------------------------------------
"use strict";

import TreeNode from "./TreeNode.js"

class HuffmanTree{

    //------------------------------------------------------
    // constructor
    //
    // PURPOSE:     constructor for the HuffmanTree class.
    // PARAMETERS:
    //              character,
    //------------------------------------------------------
    constructor(firstArgument, secondArgument) {
        this.root = null;
        this.weight = 0 // for now, delete later

        if(arguments.length === 2) {
            if (((firstArgument >= 0 && firstArgument <= 1) && (Number(firstArgument) === firstArgument) && ((firstArgument % 1 !== 0) || firstArgument == 1 || firstArgument == 0))
                && ((typeof secondArgument === 'string' || secondArgument instanceof String) && secondArgument.length === 1)) {
                // to create a new tree, create a TreeNode that is a leaf

                // we must receive two arguments, the first one must be a float between 0 and 1
                // the second must be a string with only one character

                // this.#combineTrees()

                this.weight = firstArgument;
                this.root = new TreeNode(secondArgument);
            }
            else if (('compareTo' in firstArgument && typeof (firstArgument.compareTo) === 'function')
                && ('compareTo' in secondArgument && typeof (secondArgument.compareTo) === 'function')) {
                // create a tree from two other trees

                // we must receive two arguments and both of them should be HuffmanTree objects

            }

        }
    }

    //------------------------------------------------------
    // compareTo
    //
    // PURPOSE:     to check whether the parameter tree comes
    //              before or after this tree by comparing to
    //              their weights.
    // PARAMETER:
    //              the HuffmanTree we are comparing to
    // RETURNS:
    //              +1 - otherTree comes before this (otherTree has the lower weight)
    //              -1 - otherTree comes after this (this tree has the lower weight)
    //              0  - otherTree has the same weight
    //------------------------------------------------------
    compareTo(otherTree){
        let result = 0;

        if(this.weight === otherTree.weight){
            // same weight so we must look at the characters

        }
        // the tree with the lowest weight comes first
        else if(this.weight < otherTree.weight){
            // this tree has the lower weight
            result = -1;
        }
        else {
            // otherTree has the lower weight
            result = 1;
        }

        return result;

    } // compareTo

    //------------------------------------------------------
    // getWeight
    //
    // PURPOSE:     to get the weight of this tree
    // RETURNS:
    //              the weight
    //------------------------------------------------------
    get getWeight(){
        return this.weight;
    }

    #combineTrees(tree1, tree2){

    }

} // HuffmanTree

export default HuffmanTree;
