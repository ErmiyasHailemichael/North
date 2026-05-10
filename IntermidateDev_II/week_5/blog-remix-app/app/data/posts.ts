type Post = {
  id: number;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "React Router Tips",
    content: "Use Link instead of anchor tags to navigate between pages in React Router. Anchor tags cause full page reloads, while Link handles navigation client-side, keeping your app fast and stateful.",
  },
  {
    id: 2,
    title: "State Management",
    content: "Context API vs Redux — for small to medium apps, Context API is often enough. Redux shines when you have complex state logic, many components sharing state, or need powerful dev tools for debugging.",
  },
  {
    id: 3,
    title: "The Future of Web",
    content: "AI and React are merging in exciting ways. From AI-powered code generation to smart UI components that adapt based on user behavior, the next generation of web apps will be more intelligent than ever.",
  },
];