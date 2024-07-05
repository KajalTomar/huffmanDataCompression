//----------------------------------------------------------
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
    //              Creates a tree if valid parameters are passed.
    //              Throws an error otherwise.
    // PARAMETERS:
    //              if it gets two arguments:
    //              it either accepts: a float [0,1) and a string
    //              or two HuffmanTree objects
    //------------------------------------------------------
    constructor() {
        this.allLabels = new Array();
        if(arguments.length === 2) {

            // SHOULD WE ALLOW PROBABILITIES LESS THAN 1
            if (((arguments[0] >= 0 && arguments[0]  < 1) && (Number(arguments[0] ) === arguments[0] ) && ((arguments[0]  % 1 !== 0) || arguments[0] == 1 || arguments[0] == 0))
                && ((typeof arguments[1]  === 'string' || arguments[1]  instanceof String) && arguments[1] .length === 1)) {
                // we must receive two arguments, the first one must be a float between 0 and 1
                // the second must be a string with only one character
               //  create a TreeNode that is a leaf

                this.root = new LeafNode(arguments[0],arguments[1]);
                this.numberOfLeaves = 1;

                // add to the list of labels for this tree
                this.allLabels.push(arguments[1])
            }
            else if (('compareTo' in arguments[0]  && typeof (arguments[0].compareTo) === 'function')
                && ('compareTo' in arguments[1] && typeof (arguments[1].compareTo) === 'function')) {
                // we must receive two arguments and both of them should be HuffmanTree objects

                // create a tree from two other trees

                // create a new Internal node with the two trees as it's children
                // make this new Internal Node the root of the tree

                this.numberOfLeaves = arguments[0].totalLeaves() + arguments[1].totalLeaves(); // update total number of leaves

                // add the labels from each of the subtrees to our list of labels
                // in the correct order that they would appear form left to right
                if(arguments[0].compareTo(arguments[1]) === 1){
                    // parameter tree comes before arguments[0]
                    this.root = new InternalNode(arguments[1], arguments[0]);
                    this.#addLabels(arguments[1]);
                    this.#addLabels(arguments[0]);
                }
                else {
                    this.root = new InternalNode(arguments[0], arguments[1]);
                    this.#addLabels(arguments[0]);
                    this.#addLabels(arguments[1]);
                }
            }
        }
    } // constructor

    //------------------------------------------------------
    // addLabels
    //
    // PURPOSE:     add all the labels from a tree to our
    //              array of labels in the correct order
    //              that they appear in form left to right
    // PARAMETER:
    //              the HuffmanTree whose label's we are adding
    //------------------------------------------------------
    #addLabels(someTree){
        let someTreeLabels = someTree.getLabels()
        for(let i = 0; i < someTree.totalLeaves(); i++){
            this.allLabels.push(someTreeLabels[i]);
        }
    }

    //------------------------------------------------------
    // getLabels
    //
    // PURPOSE:     returns the array of labels
    // RETURNS:
    //              allLabels
    //------------------------------------------------------
    getLabels(){
        return this.allLabels;
    }

    //------------------------------------------------------
    // totalLeaves
    //
    // PURPOSE:     returns total number of leaves
    // RETURNS:
    //              numberOfLeaves
    //------------------------------------------------------
    totalLeaves(){
        return this.numberOfLeaves;
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

        // find the difference between the weights of the trees
        let weightDifference = Math.abs((this.getRoot).getWeight - (otherTree.getRoot).getWeight);

        if(weightDifference <= Math.pow(10,-12)){
            // if the weight is very very small then just consider it 0
            weightDifference = 0;
        }


        if(weightDifference === 0){
            // same weight so we must look at the characters

            let i = 0; // start at position 0
            let comparisonResult = 0; // so we know that we found a value for the result

            let otherTreeLabels = new Array();
            let thisTreeLabels = new Array();

            Object.assign(otherTreeLabels, otherTree.getLabels());
            Object.assign(thisTreeLabels, this.allLabels);

            otherTreeLabels.sort();
            thisTreeLabels.sort();

            if(thisTreeLabels[0] < otherTreeLabels[0]){
                comparisonResult = -1;
            }
            else if(otherTreeLabels[0] < thisTreeLabels[0]){
                comparisonResult = 1;
            }

            result = comparisonResult;

        }
        // the tree with the lowest weight comes first
        else if(this.root.getWeight < otherTree.getRoot.getWeight){
            // this tree has the lower weight
            result = -1;
        }
        else if(this.root.getWeight > otherTree.getRoot.getWeight){
            // otherTree has the lower weight
            result = 1;
        }

        return result;

    } // compareTo

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

    //------------------------------------------------------
    // search
    //
    // PURPOSE:     searches for a leaf with a given label
    //              if it finds the tree then it returns the
    //              path to it.
    // PARAMETER:
    //              label to search for
    // RETURNS:
    //              returns null if the label is not in the tree,
    //              otherwise it returns the path
    //              note: if the tree is a leaf node then will
    //              return path=""
    //------------------------------------------------------
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

    //------------------------------------------------------
    // recurseSearch
    //
    // PURPOSE:     recursively searches the tree to look for
    //              a leaf with a matching label.
    // PARAMETER:
    //              the node we all looking at, label to search for
    // RETURNS:
    //              returns null if the label is not in the tree,
    //              otherwise it returns the path
    //              note: if the tree is a leaf node then will
    //              return path=""
    //------------------------------------------------------
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

    } //recurseSearch

    //------------------------------------------------------
    // recurseSearch
    //
    // PURPOSE:     appends to the string path.
    // PARAMETER:
    //              value to append
    //------------------------------------------------------
    #addToPath(toAdd){
        this.path = toAdd + this.path;
    }


} // HuffmanTree

export default HuffmanTree;
