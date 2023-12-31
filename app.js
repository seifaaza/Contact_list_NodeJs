const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const contacts = [];

const add = () => {
    rl.question('Name : ', (name) => {
        rl.question('Phone number : ', (number) => {
                contacts.push({ name, number });
                console.log("Contact added successfully");
            rl.prompt();
        });
    });
}
const view = () => {
    contacts.length == 0 ? console.log('Contact list is empty ')
    : contacts.forEach((contact) => console.log(`Name: ${contact.name}, Phone: ${contact.number}`));
    rl.prompt();
}

const search = () => {
    rl.question('Name to search : ', (name) => {
        const searchedContact = contacts.find((contact) => contact.name === name);
        searchedContact ? console.log(`Contact - Name: ${searchedContact.name}, Phone: ${searchedContact.number}`)
        : console.log("Contact doesn't exist !");
        rl.prompt();
    });
}

const exit = () => rl.close();

rl.setPrompt(`Choose an option :
1 - add 
2 - view
3 - search
4 - exit 
=> `);
rl.prompt();

rl.on('line', (input) => {
    const option = input.toLowerCase();
    switch (option) {
        case 'add':
            add();
            break;
        case 'view':
            view();
            break
        case 'search':
            search()
          break;
        case 'exit':
            exit()
          break;
        default:
            console.log('Invalid option !');
            rl.prompt();
      }
      
}).on('close', () => process.exit(0) );
