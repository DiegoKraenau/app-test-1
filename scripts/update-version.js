const prompts = require('prompts');
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
  
    const response = await prompts(question);
  
    if (!response.version) {
      console.log(chalk.red.bold('No se seleccionó ninguna opción'));
      process.exit(1);
    }

    console.log('response', response)
  
  
  })();