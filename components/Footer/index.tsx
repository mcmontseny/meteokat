export default function Footer() {
  return (
    <footer className="flex flex-row justify-center bg-black py-4 px-8">
      <span className="text-md text-gray-300 font-sm">
      © {getFullYear()} Drets reservats per MeteoKat | Web Design by{" "} 
        <a
          className="text-white"
          href="https://github.com/mcmontseny"
          target="_blank"
          rel="noopener noreferrer"
        >@mcmontseny</a>
      </span>
    </footer>
  );
}

function getFullYear() {
  return new Date().getFullYear();
}
