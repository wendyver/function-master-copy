//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};

function objectValues(object) {
    // code
    let newArray = []
    for (var key in object) {
        newArray.push(object[key]);
    }
  return newArray;
} 

console.log(objectValues(objectOne));

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let keyArray = Object.keys(object);
  let keyString = keyArray.toString();
  let keyStringy = keyString.replaceAll(",", " ")
  return keyStringy;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
       let stringValues = [];
       for (let key in object) {
        if (typeof object[key] === "string") {
            stringValues.push(object[key])
        }
       }
       return stringValues.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    if (Array.isArray(collection)) {
        return "array";
      } else  {
        return "object"
      }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let capitalizedWord = string[0].toUpperCase() + string.slice(1);
    return capitalizedWord;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    const words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    return words.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

    let capitalizedName = capitalizeWord(object.name);
  return "Welcome " + capitalizedName + "!"

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

    let capitalizedName = capitalizeWord(object.name);
    let capitalizedSpecies = capitalizeWord(object.species);
    return capitalizedName + " is a " + capitalizedSpecies;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

    if (!object.hasOwnProperty("noises") || !object.noises.length > 0) {
        return "there are no noises";
      } else if (object.hasOwnProperty("noises")) {
        return object.noises.join(" ");
      }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

    if (string.includes(word)) {
        return true;
      } else {
        return false;
      }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 /* global addFriend */
 QUnit.test("addFriend() : Should take a name and an object and add the name to the object's friends array then return the object", function(assert){
    assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
    assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
  });

function addFriend (name, object) {

    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

    if (object.hasOwnProperty("friends") && object.friends.includes(name)) {
        return true;
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, people) {
    let noAmigos = [];
    for (let i = 0; i < people.length; i++) {
      var friends = people[i].friends;
      var isFriend = false;
      if (people[i].name !== name) {
        for (let j = 0; j < friends.length; j++) {
          if (friends[j] === name) {
            isFriend = true;
          }
        }
        if (!isFriend) {
          noAmigos.push(people[i].name)
        }
      }
    }
    return noAmigos
  }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
        }

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

        for (let i = 0; i < array.length; i++) {
          delete object[array[i]];
        }
      
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}