import shiki from 'shiki';

async function highlightCode({code}: any) {
  const highlighter = await shiki.getHighlighter({
    theme: "dark-plus",
    langs: ["javascript"],
  });

  return highlighter.codeToHtml(code);
}

export default highlightCode;
