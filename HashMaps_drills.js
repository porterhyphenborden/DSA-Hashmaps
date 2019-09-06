//1. Create a HashMap class
    const hashmap = require('./hashmap');

    function main() {
        const lotr = new hashmap();

        lotr.set('Hobbit', 'Bilbo');
        lotr.set('Hobbit', 'Frodo');
        lotr.set('Wizard', 'Gandalf');
        lotr.set('Human', 'Aragorn');
        lotr.set('Elf', 'Legolas');
        lotr.set('Maiar', 'Necromancer');
        lotr.set('Maiar', 'Sauron');
        lotr.set('Ringbearer', 'Gollum');
        lotr.set('LadyOfLight', 'Galadriel');
        lotr.set('HalfElven', 'Arwen');
        lotr.set('Ent', 'Treebeard');

        console.log(lotr);

        console.log(lotr.get('Maiar'));
        console.log(lotr.get('Hobbit'));
    }

    main();

    //The values for Maiar and Hobbit have been overwritten because the keys were hashed with 2 different values
    //The capacity is 24 because it has been resized based on the initial capacity of 8 multiplied by the size ratio of 3.

//2. WhatDoesThisDo

    //console.log(map1.get(str1)); - output is 20, initial value of 10 is overwritten
    //console.log(map2.get(str3)); - output is 10, initial value of 20 is overwritten

//3. Demonstrate understanding of Hash maps

    //Open addressing
    // 0: 22
    // 1: 88
    // 2: 
    // 3:
    // 4: 4
    // 5: 15
    // 6: 28
    // 7: 17
    // 8: 59
    // 9: 31
    // 10: 10

    //Separate chaining
    // 0:
    // 1: -> 28 -> 19 -> 10
    // 2: 20
    // 3: 12
    // 4:
    // 5: 5
    // 6: -> 15 -> 33
    // 7:
    // 8: 17

//4. Remove duplicates

    function deleteDup(str) {
        const hashDup = new hashmap();
        let newStr = [];
        let hashedletters = [];

        for (let i = 0; i < str.length; i++) {
            if (!(hashedletters.includes(str[i]))) {
                hashDup.set(str[i], {letter: str[i], place: i+1});
                hashedletters.push(str[i]);
            }
        }

        for (let i in hashDup._hashTable) {
            currLett = hashDup.get(hashDup._hashTable[i].key);
            newStr.push(currLett);
        }

        newStr.sort((a, b) => (a.place > b.place) ? 1 : -1);
        deleteDupStr = newStr.map(e => e.letter).join('');
        return deleteDupStr;
    }

    console.log(deleteDup('google'));

//5. Any permutation of a palindrome

    function isPalindrome(str) {
        const hashPal = new hashmap();
        let counts = {};

        for (let i = 0; i < str.length; i++) {
            if (!counts[str[i]]) {
                counts[str[i]] = 1;
            }
            hashPal.set(str[i], counts[str[i]]);
            counts[str[i]]++;
        }

        let numOdds = 0; 

        for (let i in hashPal._hashTable) {
            if (hashPal._hashTable[i].value % 2 === 0) {
                continue;
            } else {
                numOdds++;
            }
        }
        return numOdds <= 1 ? true : false;
    }

    console.log(isPalindrome('acecarr'));
    console.log(isPalindrome('abccddeeee'));

//6. Anagram grouping

    function groupAnagrams(words) {
        const anagrams = new hashmap();

        for (word of words) {
            const wordArr = word.split('');
            const sortedArr = wordArr.sort();
            const sortedWord = sortedArr.join();

            if (anagrams.get(sortedWord) === false) {
                anagrams.set(sortedWord, [word]);
            }
            else {
                let wordGroup = [];
                wordGroup = [...anagrams.get(sortedWord)];
                wordGroup.push(word);
                anagrams.set(sortedWord, wordGroup);
            }
        }
        
        for (let i in anagrams._hashTable) {
            let group = anagrams._hashTable[i].value;
            console.log(group);
        }
    }

    const wordList = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

    console.log(groupAnagrams(wordList));





