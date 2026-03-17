const commons = `
       required: true,      // Optional: Set to 'true' to make this field mandatory (remove if not needed)
       onChange: yourFunc,  // Optional: Event handler function, set to 'true' for a controlled input, or remove/set to 'false' for uncontrolled
       onBlur: yourFunc,    // Optional: Event handler function (remove if not needed)
       onKeyDown: yourFunc, // Optional: Event handler function (remove if not needed)
       onFocus: yourFunc,   // Optional: Event handler function (remove if not needed)
`;

export const checkboxBoilerplate = `{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "checkbox",                         // Required: Defines a checkbox input
      title: "What are your hobbies?",          // Optional: The title of your checkbox
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${commons}
      }`;

export const dateBoilerplate = `{
       id: "myDateField",           // Required: This ID becomes the key in the 'fields' object
       type: "date",                // Required: Defines a date input
       label: "Date",               // Optional: UI label (remove if not needed)
       min: "2024-01-01",           // Optional: Format YYYY-MM-DD
       max: "2025-12-31",           // Optional: Format YYYY-MM-DD
       step: 1,                     // Optional: Interval in days (e.g., "7" for weekly) ${commons}
       }`;

export const dateTimeBoilerplate = `{
       id: "myDateTimeField",       // Required: This ID becomes the key in the 'fields' object
       type: "datetime-local",      // Required: Defines a datetime-local input
       label: "Date and Time",      // Optional: UI label (remove if not needed)
       min: "2024-01-01T00:00",     // Format: YYYY-MM-DDTHH:mm (The 'T' is mandatory)
       max: "2025-12-31T23:59",     // Format: YYYY-MM-DDTHH:mm
       step: 60,                    // Unit: SECONDS. 60 = 1 minute (default), 3600 = 1 hour, 1 = allow seconds ${commons}
       }`;

export const emailBoilerplate = `{
       id: "myEmailField",                // Required: This ID becomes the key in the 'fields' object
       type: "email",                     // Required: Defines an email input
       label: "Email",                    // Optional: UI label (remove if not needed)
       placeholder: "example@mail.com",   // Optional: Input placeholder ${commons}
       }`;

export const numberBoilerplate = `{
       id: "myNumField",                // Required: This ID becomes the key in the 'fields' object
       type: "number",                  // Required: Defines a number input
       label: "Choose a number",        // Optional: UI label (remove if not needed)
       placeholder: "Enter a number",   // Optional: Input placeholder
       min: 0,                          // Optional: Minimum value
       max: 100,                        // Optional: Maximum value
       step: 1,                         // Optional: Interval (e.g., "0.01" for decimals) ${commons}
       }`;

export const pswBoilerplate = `{
       id: "myPasswordField",            // Required: This ID becomes the key in the 'fields' object
       type: "password",                 // Required: Defines a password input
       label: "Your Password",           // Optional: UI label
       placeholder: "Enter password",    // Optional: Input placeholder ${commons}
       }`;

export const radioBoilerplate = `{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "radio",                            // Required: Defines a radio input
      title: "What are your hobbies?",          // Optional: The title of your radio
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${commons}
      }`;

export const selectsBoilerplate = `{
    id: "myAccount",                            // Required: This ID becomes the key in the 'selects' object
    type: "select",                             // Required: Defines a select input      
    options: ["teacher", "student"],            // Required: Must be unique among themselves
    labels: ["teacher", "student"],             // Required: Labels and options must be aligned
    label: "Choose account type",               // Optional: UI label (remove if not needed) ${commons}
    }`;

export const telBoilerplate = `{
       id: "myTelField",                 // Required: This ID becomes the key in the 'fields' object
       type: "tel",                      // Required: Defines a tel input
       label: "Your phone number",       // Optional: UI label (remove if not needed)
       placeholder: "+1 123 456 7890",   // Optional: Input placeholder ${commons}
       }`;

export const textBoilerplate = `{
       id: "myTextField",               // Required: This ID becomes the key in the 'fields' object
       type: "text",                    // Required: Defines a text input
       label: "Username",               // Optional: UI label (remove if not needed)
       placeholder: "Enter username",   // Optional: Input placeholder ${commons}
       }`;

export const textareaBoilerplate = `{
       id: "myTextareaField",       // Required: This ID becomes the key in the 'textareas' object
       type: "textarea",            // Required: Defines a textarea input
       label: "Write a message",    // Optional: UI label (remove if not needed)
       placeholder: "message",      // Optional: Input placeholder
       rows: 4,                     // Optional: Number of visible text lines
       cols: 50,                    // Optional: Number of average characters per line
       counterLabel: "Max Chars"    // Optional: UI label for counter
       maxChars: 500,               // Optional: Set a char limit and counter (Mutually exclusive with maxWords)
       maxWords: 100,               // Optional: Set a word limit and counter (Mutually exclusive with maxChars) ${commons}
       }`;

export const timeBoilerplate = `{
      id: "myTimeField",           // Required: This ID becomes the key in the 'fields' object
      type: "time",                // Required: Defines a time input
      label: "Time",               // Optional: UI label
      min: "09:00",                // Format: HH:mm (24-hour clock)
      max: "18:00",                // Format: HH:mm
      step: 60,                    // Unit: SECONDS. 60 = 1 min (default), 3600 = 1 hour, 1 = allow seconds ${commons}
      }`;

export const urlBoilerplate = `{
       id: "myUrlField",                    // Required: This ID becomes the key in the 'fields' object
       type: "url",                         // Required: Defines a URL input
       label: "Your Website",               // Optional: UI label
       placeholder: "https://example.com",  // Optional: Input placeholder (example format) ${commons}
      }`;
