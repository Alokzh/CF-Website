const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="footer">
        <p>&copy; {currentYear} Made By Alok.</p>
      </footer>
    );
  };
  
  export default Footer;