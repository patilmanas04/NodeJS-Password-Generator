class RandomPasswordGenerator{
    constructor(){
        console.log("Welcome to the Random Password Generator!\n");
        this.len = 0;
        this.password = "";
    }

    static RandomNumberGenerator(min, max){
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max-min) + min);
    }

    generateWeakPassword(len){
        this.len = len;
        this.password = "";
        let chars = "abcdefghijklmnopqrstuvwxyz";
        for(let i=0 ; i<this.len ; i++){
            this.password += chars.charAt(RandomPasswordGenerator.RandomNumberGenerator(0, chars.length));
        }
        return this.password;
    }

    generateModeratePassword(len){
        this.len = len;
        this.password = "";
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for(let i=0 ; i<this.len ; i++){
            this.password += chars.charAt(RandomPasswordGenerator.RandomNumberGenerator(0, chars.length));
        }
        return this.password;
    }

    generateStrongPassword(len){
        this.len = len;
        this.password = "";
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        for(let i=0 ; i<this.len ; i++){
            this.password += chars.charAt(RandomPasswordGenerator.RandomNumberGenerator(0, chars.length));
        }
        return this.password;
    }
}

const randomPasswordGenerator = new RandomPasswordGenerator();
const prompt = require('prompt-sync')();
let len = prompt("Enter the length of the password: ");
console.log("Enter the type of password you want to generate:\n1. Weak\n2. Moderate\n3. Strong");
let choice = prompt("Type 1, 2, or 3: ");

switch(choice){
    case "1":
        console.log(`Your weak password is: ${randomPasswordGenerator.generateWeakPassword(len)}`);
        break;

    case "2":
        console.log(`Your moderate password is: ${randomPasswordGenerator.generateModeratePassword(len)}`);
        break;

    case "3":
        console.log(`Your strong password is: ${randomPasswordGenerator.generateStrongPassword(len)}`);
        break;

    default:
        console.log("Invalid Choice!");
}

console.log("\nThank you for using the Random Password Generator!");