import {FC, memo} from 'react';
import {BlockMath,InlineMath} from 'react-katex';

interface LatexRendererProps {
  content: string;
}

const LatexRenderer: FC<LatexRendererProps> = memo(({content}) => {
  const renderContent = (text: string) => {
    const elements: JSX.Element[] = [];
    const lines = text.split('\n');

    let currentIndex = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Handle block math ($$...$$)
      if (line.trim().startsWith('$$') && line.trim().endsWith('$$')) {
        const formula = line.trim().slice(2, -2);
        if (formula.trim()) {
          try {
            elements.push(
              <div className="my-6 text-center" key={currentIndex++}>
                <BlockMath math={formula} />
              </div>
            );
          } catch (error) {
            // If LaTeX parsing fails, show as code
            elements.push(
              <div className="my-6 text-center" key={currentIndex++}>
                <code className="bg-gray-100 px-2 py-1 rounded">
                  {line.trim()}
                </code>
              </div>
            );
          }
        }
        continue;
      }

      // Handle headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 first:mt-0" key={currentIndex++}>
            {parseInlineMath(line.replace('# ', ''))}
          </h1>
        );
        continue;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 className="text-2xl font-semibold text-neutral-800 mt-10 mb-4" key={currentIndex++}>
            {parseInlineMath(line.replace('## ', ''))}
          </h2>
        );
        continue;
      }

      if (line.startsWith('### ')) {
        elements.push(
          <h3 className="text-xl font-medium text-neutral-700 mt-8 mb-3" key={currentIndex++}>
            {parseInlineMath(line.replace('### ', ''))}
          </h3>
        );
        continue;
      }

      // Handle list items
      if (line.startsWith('- ')) {
        elements.push(
          <li className="ml-6 mb-2 list-disc" key={currentIndex++}>
            {parseInlineMath(line.replace('- ', ''))}
          </li>
        );
        continue;
      }

      // Handle empty lines
      if (line.trim() === '') {
        elements.push(<div className="h-4" key={currentIndex++} />);
        continue;
      }

      // Handle regular paragraphs with potential inline math and bold text
      elements.push(
        <p className="mb-6 leading-relaxed" key={currentIndex++}>
          {parseInlineMath(line)}
        </p>
      );
    }

    return elements;
  };

  const parseInlineMath = (text: string): (string | JSX.Element)[] => {
    const parts: (string | JSX.Element)[] = [];
    let elementIndex = 0;

    // Use regex to find math expressions more carefully
    const mathRegex = /\$([^$]+)\$/g;
    let lastIndex = 0;
    let match;

    // Reset regex
    mathRegex.lastIndex = 0;

    while ((match = mathRegex.exec(text)) !== null) {
      // Add text before the math
      if (match.index > lastIndex) {
        const beforeText = text.slice(lastIndex, match.index);
        parts.push(...parseBoldText(beforeText, elementIndex));
        elementIndex += beforeText.split('**').length;
      }

      // Add the math
      const mathContent = match[1];
      if (mathContent && mathContent.trim()) {
        try {
          parts.push(
            <InlineMath key={`math-${elementIndex++}`} math={mathContent} />
          );
        } catch (error) {
          console.error('LaTeX parsing error:', error, 'for:', mathContent);
          // If LaTeX parsing fails, just show the original text
          parts.push(`$${mathContent}$`);
        }
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      const remainingText = text.slice(lastIndex);
      parts.push(...parseBoldText(remainingText, elementIndex));
    }

    return parts;
  };

  const parseBoldText = (text: string, startIndex: number): (string | JSX.Element)[] => {
    const parts: (string | JSX.Element)[] = [];
    const boldRegex = /\*\*([^*]+)\*\*/g;
    let lastIndex = 0;
    let match;
    let elementIndex = startIndex;

    while ((match = boldRegex.exec(text)) !== null) {
      // Add text before the bold
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Add the bold text
      parts.push(
        <strong className="font-semibold" key={`bold-${elementIndex++}`}>
          {match[1]}
        </strong>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  return (
    <div className="prose prose-lg max-w-none text-neutral-700">
      {renderContent(content)}
    </div>
  );
});

LatexRenderer.displayName = 'LatexRenderer';
export default LatexRenderer;