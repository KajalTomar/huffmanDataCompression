//----------------------------------------------------------
// CLASS: HuffmanTree.js
//
// Author: Kajal Tomar, 7793306
//
// REMARKS: this class creates and represents a Huffman tree.
//----------------------------------------------------------
"use strict";

import LeafNode from "./LeafNode.js";
import InternalNode from "./InternalNode.js";

class HuffmanTree{

    //------------------------------------------------------
    // constructor
    //
    // PURPOSE:     constructor for the HuffmanTree class.
    // PARAMETERS:
    //              character,
    //------------------------------------------------------
    constructor() {
        if(arguments.length === 2) {

            // SHOULD WE ALLOW PROBABILITIES LESS THAN 1
            if (((arguments[0] >= 0 && arguments[0]  < 1) && (Number(arguments[0] ) === arguments[0] ) && ((arguments[0]  % 1 !== 0) || arguments[0] == 1 || arguments[0] == 0))
                && ((typeof arguments[1]  === 'string' || arguments[1]  instanceof String) && arguments[1] .length === 1)) {
                // to create a new tree, create a TreeNode that is a leaf

                // we must receive two arguments, the first one must be a float between 0 and 1
                // the second must be a string with only one character
                this.root = new LeafNode(arguments[0],arguments[1]);
            }
            else if (('compareTo' in arguments[0]  && typeof (arguments[0].compareTo) === 'function')
                && ('compareTo' in arguments[1] && typeof (arguments[1].compareTo) === 'function')) {
                // create a tree from two other trees

                // we must receive two arguments and both of them should be HuffmanTree objects
                this.root = new InternalNode(arguments[0],arguments[1]);
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

        let weightDifference = Math.abs((this.getRoot).getWeight - (otherTree.getRoot).getWeight);

        if(weightDifference <= Math.pow(10,-12)){
            weightDifference = 0;
        }
        if(weightDifference === 0){
            // same weight so we must look at the characters

            if(this.getSmallestLabel() < otherTree.getSmallestLabel()){

            }

        }
        // the tree with the lowest weight comes first
        else if(this.root.getWeight < otherTree.getRoot.getWeight){
            // this tree has the lower weight
            result = 1;
        }
        else {
            // otherTree has the lower weight
            result = -1;
        }

        return result;

    } // compareTo


    traverseTree(){
        // 0 = go left
        // 1 = go right


    }

    //------------------------------------------------------
    // setRoot
    //
    // PURPOSE:     set root
    // PARAMETER:
    //              the new root TreeNode
    //------------------------------------------------------
    set setRoot(newRoot){
        this.root = newRoot;
    }


    //------------------------------------------------------
    // getRoot
    //
    // PURPOSE:     set root
    // PARAMETER:
    //              the new root TreeNode
    //------------------------------------------------------
    get getRoot(){
        return this.root;
    }

    // returns null if the label is not in the tree, otherwise it returns the path
    //  note if the tree is a leaf node then will return path=""
    search(label){
        this.path="";
        if('getLabel' in this.root && typeof (this.root.getLabel) === 'function'){
            // when there is only one node in the tree
            if(this.root.getLabel()===label){
                this.path = "";
            }
            else {
                this.path = null;
            }
        } else {
            this.recurseSearch(this.root, label);
            if(this.path === ""){
               this.path = null;
            }
        }

        return this.path;
    }

    recurseSearch(currentNode, label){
      //  console.log(currentNode)
        if(('getLabel' in currentNode && typeof (currentNode.getLabel) === 'function')){
            // we found a leaf node
            // base case
            if(currentNode.getLabel() === label){
                // console.log("Base case: we found the node");
                return currentNode;
            }
            else {
                // console.log("Base case: wrong tree node with label "+currentNode.getLabel()+". Looking for: "+label);
                return null;
            }
        }
        else if (('getRightChild' in currentNode && typeof (currentNode.getRightChild) === 'function')){
            // this is an internal node (so it has left and right children)

            // console.log("this is an internal node")
            if (this.recurseSearch(currentNode.getLeftChild(),label)){
                this.#addToPath(0)
                return true;
                // console.log("adding 0 to path")
            }
            if(this.recurseSearch(currentNode.getRightChild(),label)){
                this.#addToPath(1)
                return true;
                // console.log("adding 1 to path")
            }
        }
    }

    #addToPath(toAdd){
        this.path = toAdd + this.path;
    }

    getSmallestLabel(){
        let currentNode = this.root;
        let smallestLabel = null;

        while('getLeftChild' in currentNode && typeof (currentNode.getLeftChild) === 'function'){
            // while current node is an internal node
            currentNode = currentNode.getLeftChild();
        }

        if('getLabel' in currentNode && typeof (currentNode.getLabel) === 'function'){
            // current node is a leaf node

            smallestLabel = currentNode.getLabel;
        }

        return smallestLabel;
    }

    //
    // #combineTrees(leftSubtree, rightSubtree){
    //     let leftTreeRelation = this.compareTo(leftSubtree);
    //     let rightTreeRelation = this.compareTo(rightSubtree);
    //
    //
    //     if((leftTreeRelation === -1 || leftSubtree.getWeight === 0) && (rightSubtree === -1 || rightSubtree.getWeight === 0)){
    //        // -1 - otherTree comes after this (this tree has the lower weight)
    //         // otherTree is a child of this tree
    //
    //         if(this.root.getLabel === null){
    //             // this is not a leaf node
    //
    //             if(this.root.left === null){
    //                 this.root.setLeftChild = leftSubtree;
    //             }
    //             else if(this.root.right === null){
    //                 this.root.setRightChild = rightSubtree;
    //             }
    //         }
    //
    //     }
    //
    //
    // }

} // HuffmanTree

export default HuffmanTree;
