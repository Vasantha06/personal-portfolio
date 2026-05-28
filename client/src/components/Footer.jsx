export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-6 text-center
                   bg-white dark:bg-dark transition-colors duration-300">
      <p className="text-gray-400 dark:text-gray-500 text-sm">
        Designed & Built by{' '}
        <span className="text-primary font-semibold">Vasantha</span>
        {' '}· {new Date().getFullYear()}
      </p>
      <div className="flex justify-center gap-6 mt-3">
        <a href="https://github.com/yourusername" target="_blank"
          rel="noreferrer"
          className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors text-sm">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank"
          rel="noreferrer"
          className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors text-sm">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}