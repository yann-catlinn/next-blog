function DarkTheme() {
  return (
    <style jsx global>{`
      :root {
        --background-color: rgba(14, 14, 14);
        --link-color: rgba(234, 207, 3);
        --text-color: rgba(230, 230, 230);
      }
    `}</style>
  );
}

export default DarkTheme;
