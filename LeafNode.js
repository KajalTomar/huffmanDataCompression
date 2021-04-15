//----------------------------------------------------------
// CLASS:   LeafNode.js
//
// Author:  Kajal Tomar, 7793306
//
// REMARKS: concrete subclass of TreeNode. For nodes that
//          are leaf nodes.
//----------------------------------------------------------

"use strict";
import TreeNode from "./TreeNode.js";

class LeafNode extends TreeNode{

    //------------------------------------------------------
    // constructor
    //
    // PURPOSE:     constructor for the LeafNode class.
    // PARAMETER:
    //              the weight and label to store at this node
    //------------------------------------------------------
    constructor(weight, label) {
        super(weight)
        if(((typeof label === 'string' ||label instanceof String) && label.length === 1)) {
            // this is a leaf node, it has a label (single character)
            // and no children

            this.label = label;
        }
        else {
            throw new Error("Leaf node must have a character label.")
        }
    } // constructor

    //------------------------------------------------------
    // getLabel
    //
    // PURPOSE:     to get the label
    // RETURNS:
    //              label
    //------------------------------------------------------
    getLabel(){
        return this.label;
    }

} // LeafNode

export default LeafNode;