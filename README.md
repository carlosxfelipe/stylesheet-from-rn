# stylesheet-from-rn

This package aims to replicate the existing StyleSheet functionality from React Native for React web applications. It provides a simple utility to create and manage stylesheets in a manner similar to the StyleSheet API in React Native, allowing for a more streamlined and consistent styling approach across React projects.

## Installation

```sh
npm install stylesheet-from-rn
```

## Usage

Here's how you can use `stylesheet-from-rn` in your React project:

### Step 1: Import the StyleSheet

Import the `StyleSheet` utility from the package:

```typescript
import { StyleSheet } from "stylesheet-from-rn";
```

### Step 2: Create Styles

Use the `StyleSheet.create` method to create your styles:

```typescript
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: "20px",
    color: "#333",
  },
});
```

### Step 3: Apply Styles to Components

Apply the styles to your React components using the `style` attribute:

```typescript
import React from "react";

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>Hello, world!</p>
    </div>
  );
};

export default App;
```

### Complete Example

Here is a complete example in a single file for clarity:

```typescript
import React from "react";
import { StyleSheet } from "stylesheet-from-rn";

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>Hello, world!</p>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: "20px",
    color: "#333",
  },
});

export default App;
```

This example demonstrates how to create and apply styles using the `stylesheet-from-rn` package. It covers the basic usage and can be extended as needed for more complex styling requirements.
