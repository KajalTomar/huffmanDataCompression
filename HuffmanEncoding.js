//----------------------------------------------------------
// REMARKS: this class takes a txt file and outputs a .txt.huff
//          file that contains the huffman encoding of the
//          input file.
//----------------------------------------------------------
"use strict";

import HuffmanTree from "./HuffmanTree.js";
import Dictionary from "./Dictionary.js";
import StringHash from "./StringHash.js";
import fs from 'fs';

class HuffmanEncoding {
    //------------------------------------------------------
    // constructor
    //
    // PURPOSE:     constructor for the HuffmanEncoding class.
    // PARAMETER:
    //              takes the name of the file that should be encoded
    //------------------------------------------------------
    constructor(fileName) {
        this.fileName = fileName;

        this.allHuffmanTrees = new Array();     // this will hold all the huffman trees
        this.contents = null;                   // for the contents of the input file
        this.keys = new Array();                // for the Hashable keys
        this.keysAsString = new Array();        // for string represntations of the keys
    } // constructor

    //------------------------------------------------------
    // encode
    //
    // PURPOSE:     Creates a huffman tree for the the characters
    //              in the input file. Then encodes the contents
    //              of the file using the tree and stores the
    //              output in an output file.
    //------------------------------------------------------
    encode(){
        let tree1 = null;       // we will use these trees when combining subtrees
        let tree2 = null;
        let newTree = null;     // to create new trees

        fs.writeFileSync((this.fileName+'.huff'),"");  // start an output file

        this.frequencyOfChars = this.#countFrequency(); // read the input file and store the
                                                        // percentage of the input file that each character took up
                                                        // in a dictionary

        // create a HuffmanTree for all the characters and add them to an array
        for(let i = 0; i<this.keys.length; i++){
            this.allHuffmanTrees.push(new HuffmanTree(this.frequencyOfChars.get(this.keys[i]),this.keysAsString[i]));
        }

        // combine the two smallest subtrees to form a new subtree
        // until we are left with exactly one subtree
        while(this.allHuffmanTrees.length >= 2){

            this.#sort();   // sorts the allHuffmanTrees array

            // remove the trees at the earliest two indices
            tree1 = this.allHuffmanTrees.shift();
            tree2 = this.allHuffmanTrees.shift();

            // for a new tree using tree1 and tree2 as subtrees
            newTree = new HuffmanTree(tree1,tree2);

            // add this new tree to our array
            this.allHuffmanTrees.push(newTree);
        }

        //  read the entire file and encode each character into the output file, separated by spaces.
        for(let i = 0; i<this.contents.length; i++){
            fs.appendFileSync(this.fileName+'.huff',(this.allHuffmanTrees[0].search(this.contents[i]))+' ');
        }

        fs.appendFileSync(this.fileName+'.huff','\n');
    }

    //------------------------------------------------------
    // countFrequency
    //
    // PURPOSE:     reads the contents of the input file
    //              and creates a dictionary of the characters
    //              in the file. Uses the percentage of times
    //              a character appears in the files as the values.
    //              Also creates Hashable keys and
    //              stores each unique character.
    //------------------------------------------------------
    #countFrequency(){
        let percentage = 0;
        let charAti = null;
        let frequency = 0;
        let frequencyOfChars = new Dictionary(1000);

        // read the input file
        this.contents = fs.readFileSync(this.fileName,'utf8');

        if(fs !== undefined) {

            // adds and updates the frequency of each unique character to the dictionary
            for (let i = 0; i < this.contents.length; i++) {
                charAti = new StringHash(this.contents.charAt(i)); // create a Hashable key for this character
                frequency = 1;  // by default

                if (frequencyOfChars.contains(charAti)) {
                    // if this key is already in this dictionary

                    // get it's frequency from the dictionary, and update the value by one
                    frequency = frequencyOfChars.get(charAti) + 1;
                }
                else {
                    // this is key is not in the dictionary

                    // add it to our list of keys
                    this.keys.push(charAti);

                    // add the string value to our list
                    this.keysAsString.push(this.contents.charAt(i));
                }

                // put this char and its frequency in the dictionary
                frequencyOfChars.put(charAti, frequency);
            }

            // for through all the keys. Calculate the percentage of time that character (key)
            // appeared in the input file. Store this as the new value in the dictionary.
            for (let i = 0; i < this.keys.length; i++) {
                percentage = (frequencyOfChars.get(this.keys[i])) / this.contents.length;
                frequencyOfChars.put(this.keys[i], percentage);
            }
        }
        else {
            throw new Error("No such file exists in this directory.");
        }

        return frequencyOfChars;
    } // read file

    //------------------------------------------------------
    // sort
    //
    // PURPOSE:     sort the HuffmanTrees using the
    //              HuffmanTree's compareTo method
    //------------------------------------------------------
    #sort(){

        this.allHuffmanTrees.sort(function (a, b) {
            let result = 0;
            if (a.compareTo(b) === -1) {
                result = -1;
            } else if (a.compareTo(b) === 1) {
                result = 1;
            }
            return result;
        });

        this.allHuffmanTrees.sort();
    }

} // HuffmanEncoding

export default HuffmanEncoding;
