import "./globals.css";

/**
 * A layout component that wraps its children in an HTML document with an English language attribute.
 *
 * This component serves as a structural wrapper, incorporating global styling from "globals.css" and
 * ensuring that the rendered page content is encapsulated within an HTML document set to English.
 *
 * @param {object} props - The component properties.
 * @param {React.ReactNode} props.children - The nested elements to render within the layout.
 * @returns {JSX.Element} The HTML document structure including the children.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
