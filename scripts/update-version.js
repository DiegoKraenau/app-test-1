const prompt = require("prompt-async");
const fs = require('fs');
const {
  spawnSync
} = require('child_process');

const question = [{
    type: 'select',
    name: 'version',
    message: `Seleccione la versión a subir.`,
    choices: [{
        title: `Patch:`,
        value: 'patch'
      },
      {
        title: `Minor:`,
        value: 'minor'
      },
      {
        title: `Major:`,
        value: 'major'
      }
    ]
  }];
  
  (async () => {
  
    prompt.start();
    const response = await prompt(question);
  
    if (!response.version) {
      console.log(chalk.red.bold('No se seleccionó ninguna opción'));
      process.exit(1);
    }

    console.log('response', response)
  
  
  })();