//----------------------------------------------------------
// CLASS: HuffmanEncoding.js
//
// Author: Kajal Tomar, 7793306
//
// REMARKS:
//----------------------------------------------------------
"use strict";

import HuffmanTree from "./HuffmanTree.js";
import Dictionary from "./Dictionary.js";
import StringHash from "./StringHash.js";
import IntHash from "./IntHash.js";
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
    } // constructor

    encode(){
        fs.writeFileSync((this.fileName+'.huff'),"");
        this.frequencyOfChars = this.#readFile();
        this.allHuffmanTrees = new Array();

        for(let i = 0; i<this.keys.length; i++){
            this.allHuffmanTrees.push(new HuffmanTree(this.frequencyOfChars.get(this.keys[i]),this.keysAsString[i]));
        }

        while(this.allHuffmanTrees.length >= 2){
            this.#sort();
            console.log('--------------------------------------------')
            console.log(this.allHuffmanTrees);
            let tree1 = this.allHuffmanTrees.shift();
            let tree2 = this.allHuffmanTrees.shift();
            let newTree = new HuffmanTree(tree1,tree2);
            this.allHuffmanTrees.push(newTree);

        }

        console.log(this.allHuffmanTrees);
        // console.log(this.allHuffmanTrees);

        for(let i = 0; i<this.contents.length; i++){
            fs.appendFileSync(this.fileName+'.huff',(this.allHuffmanTrees[0].search(this.contents[i]))+' ');
        }

        fs.appendFileSync(this.fileName+'.huff','\n');
    }

    #readFile(){
        let frequencyOfChars = new Dictionary(6);
        this.contents = fs.readFileSync(this.fileName,'utf8');
        this.keys = new Array();
        this.keysAsString = new Array();

        for (let i=0; i < this.contents.length; i++){
            let charAti = new StringHash(this.contents.charAt(i));
            let frequency = 1;

            if(frequencyOfChars.contains(charAti)){
                frequency = frequencyOfChars.get(charAti)+1;
            } else {
                this.keys.push(charAti);
                this.keysAsString.push(this.contents.charAt(i));
            }

            frequencyOfChars.put(charAti,frequency);
            // console.log(frequencyOfChars);
            // console.log("Char " + i + " is " + this.contents.charAt(i));
            // console.log("Char " + this.contents.charAt(i) + " has frequency of " + frequencyOfChars.get(charAti));
        }

        for (let i=0; i < this.keys.length; i++){
            let percentage = (frequencyOfChars.get(this.keys[i]))/this.contents.length;
            frequencyOfChars.put(this.keys[i],percentage);
            // console.log("Char " +  this.keysAsString[i] + " has frequency of " + frequencyOfChars.get(this.keys[i]));
        }

        return frequencyOfChars;
    } // read file

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


}

export default HuffmanEncoding;