export const dataAccess = `
  📊 DATA ACCESS: HOW TO RETRIEVE YOUR STATES
  
  To access the synchronized state of any 'controlled' input, 
  use the following path pattern:
  [category].[id].states.value
  
  Categories available: fields, groups, selects, textareas.

  Example:
  const { fields, groups, selects, textareas } = useRamonForms(logicArray);
  
  // Accessing the real-time value of the 'username' field:
  console.log(fields.username.states.value); 
`;
