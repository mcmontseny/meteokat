export default function Footer() {
  return (
    <footer className="flex flex-row justify-center bg-black py-4 px-8">
      <div className="flex flex-col">
        <span className="text-sm text-gray-300 font-sm self-center">
          © {getFullYear()} Drets reservats per MeteoKat
        </span>
        <span className="text-sm text-gray-300 font-sm self-center">
          Web Design by{" "}
          <a
            className="text-white"
            href="https://github.com/mcmontseny"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mcmontseny
          </a>
        </span>
      </div>
    </footer>
  );
}

function getFullYear() {
  return new Date().getFullYear();
}
