const Footer = () => {
  const date = new Date();
  return (
    <footer className="container py-3 text-center">
      musiur@{date.getFullYear()}
    </footer>
  );
};

export default Footer;
