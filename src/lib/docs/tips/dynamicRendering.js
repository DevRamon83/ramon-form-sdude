export const dynamicRendering = `
  💡 DYNAMIC RENDERING: 
  
     Use Object.values(fields).map() in your JSX 
     to render the entire form automatically without manual placement.
     
     {Object.values(fields).map((field, index) => (
        <TextInput key={index} dataField={field} />
     ))}
     `;
