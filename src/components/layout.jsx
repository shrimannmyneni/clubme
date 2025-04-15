import './layout.css'

function Layout({ children }) {
  return (
      <main id="container">
        {children}
      </main>
  );
}

export default Layout;
