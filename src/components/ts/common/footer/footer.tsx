const Footer = () => {
  const date = new Date();
  return (
    <footer className="container py-5 text-center sticky bottom-0">
      musiur@{date.getFullYear()}
    </footer>
  );
};

export default Footer;
