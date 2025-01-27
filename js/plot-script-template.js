const scenesModificationTemplate = [
  
];

const choiceModificationsTemplate = {
  '0': [],
  '1': [],
  '10': [],
  '100': [],
  '101': [],
  '102': [],
  '1010': [],
  '1011': [],
  '10100': [],
  '10110': [],
  '101001': [],
  '1010010': [],
  '1010011': [],
}

const scenesTemplate = JSON.parse(JSON.stringify(scenesRu));
const choicesTemplate = JSON.parse(JSON.stringify(choicesRu));

modifyList(scenesTemplate, scenesModificationTemplate);

// Apply modifications to choices
Object.keys(choicesTemplate).forEach((key) => {
  modifyList(choicesTemplate[key], choiceModificationsTemplate[key]);
});

