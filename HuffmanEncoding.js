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
        let outputFile = fs.writeFileSync((this.fileName+'.huff'),"");
        let frequencyOfChars = this.#readFile();


        // write in the codes for the huffman algorithm to the output file
    }

    #readFile(){
        let frequencyOfChars = new Dictionary(6);
        this.contents = fs.readFileSync(this.fileName,'utf8');
        let keys = new Array();
        let keysAsString = new Array(); // delete later

        for (let i=0; i < this.contents.length; i++){
            let charAti = new StringHash(this.contents.charAt(i));
            let frequency = 1;

            if(frequencyOfChars.contains(charAti)){
                frequency = frequencyOfChars.get(charAti)+1;
            } else {
                keys.push(charAti);
                keysAsString.push(this.contents.charAt(i));
            }

            frequencyOfChars.put(charAti,frequency);
            // console.log(frequencyOfChars);
            // console.log("Char " + i + " is " + this.contents.charAt(i));
            // console.log("Char " + this.contents.charAt(i) + " has frequency of " + frequencyOfChars.get(charAti));
        }

        for (let i=0; i < keys.length; i++){
            let percentage = (frequencyOfChars.get(keys[i]))/this.contents.length;
            frequencyOfChars.put(keys[i],percentage);
            // console.log("Char " + keysAsString[i] + " has frequency of " + frequencyOfChars.get(keys[i]));
        }

        return frequencyOfChars;
    }
}

export default HuffmanEncoding;