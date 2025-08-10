export const Footer = () => {
  return (
    <>
      {/* Footer section */}
      <footer className="footer-section">
        <div className="section-content">
          <p className="copyright-text">2025® o9o9 Shop</p>

          <div className="social-link-list">
            <a href="#" className="social-link">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>

          <p className="policy-text">
            <a href="#" className="policy-link">
              Privacy policy
            </a>
            <span className="separator">.</span>
            <a href="#" className="policy-link">
              Refund policy
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
