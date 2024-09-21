import React from 'react';

const Footer: React.FC = () => {
  const date = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center text-muted">Copyright &copy; Your Website {date}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;