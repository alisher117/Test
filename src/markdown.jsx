import React, { useState } from 'react';
import { marked } from 'marked';

marked.setOptions({ breaks: true });

function markdown() {
  const [markdown, setMarkdown] = useState(`# H1 Heading

## H2 Subheading

[Link](https://example.com)

\`Inline code\`

\`\`\`
Code block example
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/100)

**Bold text**
`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}

export default markdown;
